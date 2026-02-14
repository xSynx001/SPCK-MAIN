const submit = document.querySelector('.submit');
    submit.addEventListener('click', function() {
        const a = document.querySelector(".Email_input").value;
        const b = document.querySelector(".Password_input").value;
             if (a === "" || b === "")
                return alert("Hãy điền đầy đủ thông tin")
        const storeduser = JSON.parse(localStorage.getItem("user"));
            if (storeduser && storeduser.email === a && storeduser.password === b) {
                window.location.href = "Greatings.html";
                return alert("Email và mật khẩu đúng, login thành công")
            }
            else {
                return alert("Email hoặc mật khẩu không đúng , hãy check lại thông tin")
            }
    })