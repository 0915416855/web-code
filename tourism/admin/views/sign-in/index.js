var modal = document.getElementById('defintionModal')

let photo = ""
addUserForm.onsubmit = async function (evt) {
    evt.preventDefault()
    list = await fetch("http://localhost:5000/users").then(res => res.json())
    // q: fetch的作用?
    for (var i = 0; i < list.length; i++) {
        if (username.value === list[i].username) {
            modal.style.display = 'block';
            return;
        }
    }
    await fetch("http://localhost:5000/users", {
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            username: username.value,
            password: password.value,
            introduction: introduction.value,
            photo
        })
    }).then(res => res.json())
    location.href = "/admin/views/login/index.html"



}

// 上传头像文件，转化图像编码64
photofile.onchange = function (evt) {
    // console.log(evt.target.files[0])
    //===>base64

    let reader = new FileReader()

    reader.readAsDataURL(evt.target.files[0])

    reader.onload = function (e) {
        console.log(e.target.result)
        photo = e.target.result
    }
}

modal.onclick = function () {
    modal.style.display = 'none';
}
