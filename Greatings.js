const submit = document.querySelector('.submit');
    submit.addEventListener('click', function() {
        const a = document.querySelector(".Email_input").value;
        const b = document.querySelector(".Password_input").value;
             if (a === "" || b === "")
                return alert("Hãy điền đầy đủ thông tin")
            console.log(localStorage.getItem("user"))
        const storeduser = JSON.parse(localStorage.getItem("user"));
            const findUser = storeduser.find(e => {
                return e.email === a && e.password === b
            })
            if (findUser) {
                 alert("Email và mật khẩu đúng, login thành công")
                window.location.href = "Home.html";
            }
            else {
                return alert("Email hoặc mật khẩu không đúng , hãy check lại thông tin")
            }
    })

//     users.find(e => {
//     const inputUsername = 'a@gmail.com';
//     const inputPass = '123123'
    
//     return e.user == inputUsername && e.password == inputPass
// })