/*
 * @作者: kerwin
 */
//引入模块

import {load,isLogin} from "/admin/util/LoadView.js"

load("sidemenu-home") //加载topbar //sidemenu

let user = JSON.parse(isLogin())

// console.log(user)

document.querySelector(".userprofile").innerHTML = `
    <img src="${user.photo}" style="width:100px;"/>
    <div>
        <div>${user.username}</div>
        <div><pre>${user.introduction || "这个人很懒"}</pre></div>
    </div>
`