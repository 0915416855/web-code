// 引入模块

import {load} from "/js实战案列/JS原生项目/code/code/admin/util/LoadView.js"

load('sidemenu-addUser')
// console.log(load)

let photo = ''

addUserFrom.onsubmit = async function(evt){
    evt.preventDefault()
    // console.log(username.value)
    // console.log(password.value)
    // console.log(introduction.value)
    // console.log(photo)
    
    await fetch("http://localhost:3000/users",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            username:username.value,
            password:password.value,
            introduction:introduction.value,
            photo
        })
    }).then(res=>res.json())
    
    location.href = '/js实战案列/JS原生项目/code/code/admin/views/user-manage/UserList/index.html'
}

// 对图像文件进行重新编码
photofile.onchange = function (evt) {
    // ===>base64
    let reader = new FileReader()
    reader.readAsDataURL(evt.target.files[0])
    // 转换完成进行提示
    reader.onload = function (e) {
        // console.log(e.target.result)
        photo = e.target.result
    }
}

