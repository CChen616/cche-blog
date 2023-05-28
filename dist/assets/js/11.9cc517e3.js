(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{421:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"configuring-aws-cognito"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuring-aws-cognito"}},[s._v("#")]),s._v(" Configuring AWS Cognito")]),s._v(" "),t("p",[s._v("Firstly, we need to create a User Pool in "),t("strong",[s._v("AWS Cognito")]),s._v(". After creating the User Pool, an "),t("strong",[s._v("App client")]),s._v(" is added. This App client provides us with an App client id that will be used in our Django application. The "),t("strong",[s._v("Cognito region")]),s._v(" (for example us-east-1), "),t("strong",[s._v("user pool id")]),s._v(", and "),t("strong",[s._v("app client id")]),s._v(" are added to Django's settings file.")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("AWS_ACCESS_KEY_ID "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Your AWS Access Key'")]),s._v("\nAWS_SECRET_ACCESS_KEY "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Your AWS Secret Key'")]),s._v("\nAWS_REGION_NAME "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Your AWS region'")]),s._v("\nCOGNITO_APP_CLIENT_ID "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Your App Client id'")]),s._v("\nCOGNITO_USER_POOL_ID "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Your User Pool id'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#initializing client")]),s._v("\nclient "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" boto3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cognito-idp'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    aws_access_key_id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("settings"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("AWS_ACCESS_KEY_ID"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    aws_secret_access_key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("settings"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("AWS_SECRET_ACCESS_KEY"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    region_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("settings"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("AWS_REGION_NAME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h1",{attrs:{id:"registering-users"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#registering-users"}},[s._v("#")]),s._v(" Registering Users")]),s._v(" "),t("p",[s._v("Use AWS Cognito’s sign_up API for registering users. When a user tries to register, we make a request to the Cognito sign_up API with the required parameters. If the registration is successful, we get a response with HTTPStatusCode 200. Here we are using "),t("strong",[s._v("crispy_form")]),s._v(" as the html form to get user input.")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("method "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"POST"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        form "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" RegisterForm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("POST"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" form"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("is_valid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            email "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" form"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cleaned_data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'email'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            password "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" form"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cleaned_data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'password'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            username "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" form"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cleaned_data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n\n            response "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sign_up"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n                ClientId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("settings"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("COGNITO_APP_CLIENT_ID"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                Username"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                Password"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("password"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                UserAttributes"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Name'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'email'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Value'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" email"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" redirect"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'login'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            messages"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" messages"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ERROR"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" form"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("errors"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    register_form "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" RegisterForm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" render"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"../templates/register.html"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'form'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" register_form"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br")])]),t("p",[s._v("if you want to confirm the user immediately after registration without an email confirmation step, you can use admin_confirm_sign_up before redirect user back to login page.")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("response "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("admin_confirm_sign_up"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    UserPoolId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("settings"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("COGNITO_USER_POOL_ID"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    Username"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h1",{attrs:{id:"authenticating-users"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#authenticating-users"}},[s._v("#")]),s._v(" Authenticating Users")]),s._v(" "),t("p",[s._v("For user authentication, we used AWS Cognito’s initiate_auth API. We made a request to this API with the required parameters. If the user credentials are correct, we get a response with HTTPStatusCode 200.")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("method "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'POST'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        form "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LoginForm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("POST"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" form"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("is_valid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                username "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" form"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cleaned_data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n                email "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" form"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cleaned_data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'email'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n                password "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" form"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cleaned_data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'password'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                    response "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("initiate_auth"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n                        ClientId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("settings"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("COGNITO_APP_CLIENT_ID"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                        AuthFlow"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'USER_PASSWORD_AUTH'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                        AuthParameters"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'USERNAME'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n                            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'PASSWORD'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" password"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" response"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ResponseMetadata'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'HTTPStatusCode'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                        messages"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" messages"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SUCCESS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                                         "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Successfully Signed Up, Please check your email account to verify you email address"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" redirect"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dashboard'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# unknown error")]),s._v("\n                        messages"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" messages"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ERROR"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"login failed"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("except")]),s._v(" client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exceptions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("NotAuthorizedException"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# the username and password are incorrect")]),s._v("\n                    messages"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" messages"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ERROR"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username or password is incorrect"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("except")]),s._v(" client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exceptions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("UserNotFoundException"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# the user does not exist")]),s._v("\n                    messages"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" messages"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ERROR"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user does not exist"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("except")]),s._v(" Exception "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                messages"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add_message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" messages"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ERROR"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br")])]),t("p",[s._v("That's how you can integrate AWS Cognito with Django for user registration and authentication.")])])}),[],!1,null,null,null);t.default=e.exports}}]);