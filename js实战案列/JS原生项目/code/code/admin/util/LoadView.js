/*
 * @作者: kerwin
 */

//token验证 
function isLogin() {
    return localStorage.getItem('token')
}

// 渲染
function renderTopbar(user) {
    // console.log(user)
    let photo = document.querySelector('#topbar-photo')
    // console.log(photo)
    let currentUsername = document.querySelector('#currentUsername')
    // console.log(currentUsername)
    let exit = document.querySelector('#exit')

    photo.src = user.photo
    currentUsername.innerHTML = user.username

    // 绑定退出事件
    exit.onclick = function () {
        // 删除token
        localStorage.removeItem('token')
        // 回退到登录页面
        location.href = '/js实战案列/JS原生项目/code/code/admin/views/login/index.html'
    }
}

// 简单控制用户权限
function renderSidemenu(user,id){
    document.querySelector("#"+id).style.color="#0a58ca"
       if(user.role!=="admin"){
           document.querySelector(".user-manage-item").remove()
       }
}


// 模块化引入HTML片段
async function load(id) {
    let user = isLogin()
    if (user) {
        let topbarText = await fetch('/js实战案列/JS原生项目/code/code/admin/components/topbar/index.html')
            .then(res => res.text())
        document.querySelector('.topbar').innerHTML = topbarText

        renderTopbar(JSON.parse(user))

        let sidemenuText = await fetch('/js实战案列/JS原生项目/code/code/admin/components/sidemenu/index.html')
            .then(res => res.text())
        document.querySelector('.sidemenu').innerHTML = sidemenuText

        renderSidemenu(JSON.parse(user),id)
    } else {
        location.href = '/js实战案列/JS原生项目/code/code/admin/views/login/index.html'
    }
}

// 暴露
export { load, isLogin }

