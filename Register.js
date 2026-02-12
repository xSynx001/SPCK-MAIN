const submit = document.querySelector('.submit')
    submit.addEventListener('click', function() {
        const email = document.querySelector('.Email_input').value;
        const password = document.querySelector('.Password_input').value;
            if (email === "" || password === "") {
                return alert("Hãy điền thông tin vào trong input")
            }
        const user = [
            {
                email: email,
                password: password,
            }
        ]
        localStorage.setItem("user", JSON.stringify(user))
        window.location.href = "Greatings.html";
    })