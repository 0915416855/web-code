// 引入模块

import { load } from "/js实战案列/JS原生项目/code/code/admin/util/LoadView.js"

load('sidemenu-userList')
// console.log(load)

let myEditModal = new bootstrap.Modal(document.getElementById('editModal'))
let myDelModal = new bootstrap.Modal(document.getElementById('delModal'))

let list = []
let updateId = 0
let photodata = ''

async function render() {
    list = await fetch('http://localhost:3000/users').then(res => res.json())
    // console.log(list)
    listbody.innerHTML = list.map(item => `
        <tr>
            <th scope="row">${item.username}</th>
            <td>
                <img src = "${item.photo}" style = 'width:50px; border-radius:50%'/>
            </td>
            <td>
                <button type="button" class="btn btn-primary btn-edit"
                ${item.default ? 'disabled' : ''} data-myid = '${item.id}'>编辑</button>
                <button type="button" class="btn btn-danger btn-del"
                ${item.default ? 'disabled' : ''} data-myid = '${item.id}'>删除</button>
            </td>
         </tr> 
    `).join('')
}

listbody.onclick = function (evt) {
    if (evt.target.className.includes('btn-edit')) {
        // console.log('edit')
        updateId = evt.target.dataset.myid
        // console.log(list.filter(item=>item.id==updatId)[0])
        // 显示模态框
        myEditModal.toggle()
        // 预填信息
        let { username, password, introduction, photo } =
            list.filter(item => item.id == updateId)[0]

        document.querySelector('#username').value = username
        document.querySelector('#password').value = password
        document.querySelector('#introduction').value = introduction
        photodata = photo
    } else if (evt.target.className.includes('btn-del')) {
        // console.log('delete')
        myDelModal.toggle()
        updateId = evt.target.dataset.myid
    }
}

//更改按钮绑定事件
editConfirm.onclick = async function () {
    await fetch(`http://localhost:3000/users/${updateId}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            username: document.querySelector('#username').value,
            password: document.querySelector('#password').value,
            introduction: document.querySelector('#introduction').value,
            photo: photodata
        })
    }).then(res => res.json())

    myEditModal.toggle()

    render()
}

photofile.onchange = function (evt) {
    // ===>base64
    let reader = new FileReader()
    reader.readAsDataURL(evt.target.files[0])
    // 转换完成进行提示
    reader.onload = function (e) {
        // console.log(e.target.result)
        photodata = e.target.result
    }
}

// 删除按钮绑定事件
delConfirm.onclick = async function () {
    await fetch(`http://localhost:3000/users/${updateId}`, {
        method: "delete"
    }).then(res => res.json())
    myDelModal.toggle()
    render()
}

render()
