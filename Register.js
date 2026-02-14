const submit = document.querySelector('.submit')
    submit.addEventListener('click', function() {
        const email = document.querySelector('.Email_input').value;
        const password = document.querySelector('.Password_input').value;
            if (email === "" || password === "") {
                return alert("Hãy điền thông tin vào trong input")
            }
            const storeduser = JSON.parse(localStorage.getItem("user"))|| [];
            if (storeduser) {
                const findUser = storeduser.find(e => {
                    return e.email === email
                })
                if (findUser) {
                    return alert("Email đã tồn tại, hãy sử dụng email khác")
                }}
        const user = [
            ...storeduser,
            {
                email: email,
                password: password,
            }
        ]
        localStorage.setItem("user", JSON.stringify(user))
        window.location.href = "Greatings.html";
    })