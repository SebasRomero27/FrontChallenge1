function saveUser()
{
    console.log("Sign Up clicked")
    let name = $.trim($("#username").val());
    let email = $.trim($("#newEmail").val());
    let password = $.trim($("#passwordSing").val());  
    let passwordRep = $.trim($("#passwordReSign").val());
    
    if(!(name =="" || email =="" || password==""|| passwordRep==""))
    {
        if(password!= passwordRep)
        {
            alert("Pasword does not match");
            $("#passwordRep").focus();
        }
        else
        {
            $.ajax
            ({
                url:"http://localhost:8080/api/user/new",
                data:JSON.stringify
                ({
                    "email":email,
                    "password":password,
                    "name":name
                }),
                type: "POST",
                contentType: "application/json",
                datatype: 'json',
                error: function (result)
                {
                    alert("User not registered");
                    console.log(result);
                },
                success: function (response)
                {
                    console.log(response);
                    if(response.id == null)
                    {
                        alert ("Account not created");
                        $("#username"),focus();
                    }
                    else
                    {
                        alert("Account created");
                        RedirectSing();
                    }
                }
            })
        }
    }
    else
    {
        alert("Fill al the fields!")
    }
    return false;
}

function login()
{
    console.log("Login button clicked")
    let email = $.trim($("#useremail").val());
    let password = $.trim($("#password").val());
    if(!(email =="" || password ==""))
    {   
        if(!"http://localhost:8080/api/user/"+email+"/"+password)
        {
        console.log("http://localhost:8080/api/user/"+email+"/"+password)
        $.ajax
        ({
            url:"http://localhost:8080/api/user/"+email+"/"+password,
            type: "GET",
            contentType: "application/json",
            datatype: 'json',
            error: function (result)
            {
                alert("User does not exist");
                console.log(result);
            },
            success: function (response)
            {
                console.log(response);
                alert("Welcome!");
                Redirect();
            }   
        })
        }
    }
    else
    {
        alert("Fill al the fields!")
    }
}


function Redirect()
{
    window.location="../Html/Main.html";
}

function RedirectSing()
{
    window.location="../Html/Index.html";
}