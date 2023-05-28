---
title: AWS Cognito Authentication with Django
date: 2023-05-26
categories:
 - AWS
tags:
 - AWS
 - django
---
# Configuring AWS Cognito

Firstly, we need to create a User Pool in **AWS Cognito**. After creating the User Pool, an **App client** is added. This App client provides us with an App client id that will be used in our Django application. The **Cognito region** (for example us-east-1), **user pool id**, and **app client id** are added to Django's settings file.

```python
AWS_ACCESS_KEY_ID = 'Your AWS Access Key'
AWS_SECRET_ACCESS_KEY = 'Your AWS Secret Key'
AWS_REGION_NAME = 'Your AWS region'
COGNITO_APP_CLIENT_ID = 'Your App Client id'
COGNITO_USER_POOL_ID = 'Your User Pool id'

#initializing client
client = boto3.client(
    'cognito-idp',
    aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
    aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
    region_name=settings.AWS_REGION_NAME,
)
```

# Registering Users

Use AWS Cognito’s sign_up API for registering users. When a user tries to register, we make a request to the Cognito sign_up API with the required parameters. If the registration is successful, we get a response with HTTPStatusCode 200. Here we are using **crispy_form** as the html form to get user input.

```python
    if request.method == "POST":
        form = RegisterForm(request.POST)

        if form.is_valid():
            email = form.cleaned_data['email']
            password = form.cleaned_data['password']
            username = form.cleaned_data['username']


            response = client.sign_up(
                ClientId=settings.COGNITO_APP_CLIENT_ID,
                Username=username,
                Password=password,
                UserAttributes=[
                    {
                        'Name': 'email',
                        'Value': email,
                    },
                ],
            )

            return redirect('login')

        else:
            messages.add_message(request, messages.ERROR, form.errors)

    register_form = RegisterForm()
    return render(request, "../templates/register.html", {'form': register_form})
```

if you want to confirm the user immediately after registration without an email confirmation step, you can use admin_confirm_sign_up before redirect user back to login page.

```python
response = client.admin_confirm_sign_up(
    UserPoolId=settings.COGNITO_USER_POOL_ID,
    Username=username,
)
```

# Authenticating Users

For user authentication, we used AWS Cognito’s initiate_auth API. We made a request to this API with the required parameters. If the user credentials are correct, we get a response with HTTPStatusCode 200.

```python
    if request.method == 'POST':
        form = LoginForm(request.POST)

        if form.is_valid():
            try:
                username = form.cleaned_data['username']
                email = form.cleaned_data['email']
                password = form.cleaned_data['password']
                try:
                    response = client.initiate_auth(
                        ClientId=settings.COGNITO_APP_CLIENT_ID,
                        AuthFlow='USER_PASSWORD_AUTH',
                        AuthParameters={
                            'USERNAME': username,  # 
                            'PASSWORD': password,
                        },
                    )
                    if response['ResponseMetadata']['HTTPStatusCode'] == 200:
                        messages.add_message(request, messages.SUCCESS,
                                         "Successfully Signed Up, Please check your email account to verify you email address")
                        return redirect('dashboard')
                    else:
                        # unknown error
                        messages.add_message(request, messages.ERROR, "login failed")
                except client.exceptions.NotAuthorizedException:
                    # the username and password are incorrect
                    messages.add_message(request, messages.ERROR, "username or password is incorrect")
                    pass
                except client.exceptions.UserNotFoundException:
                    # the user does not exist
                    messages.add_message(request, messages.ERROR, "user does not exist")
                    pass
            except Exception as e:
                print(e)
                messages.add_message(request, messages.ERROR, e)
```

That's how you can integrate AWS Cognito with Django for user registration and authentication.