// 引入模块

import { load, isLogin } from "/js实战案列/JS原生项目/code/code/admin/util/LoadView.js"

load('sidemenu-newsList')
// console.log(load)

let list = []
let updateId = 0
// 预览模态框
let myPreviewModal = new bootstrap.Modal(document.getElementById('previewModal'))

let myDelModal = new bootstrap.Modal(document.getElementById('delModal'))

let categoryList = ['最新动态', '典型案列', '通知公告']
async function render() {
    let username = JSON.parse(isLogin()).username
    list = await fetch(`http://localhost:3000/news?author=${username}`).then(res => res.json())
    // console.log(list)
    listbody.innerHTML = list.map(item => `
    <tr>
        <th scope="row">${item.title}</th>
        <td>
            ${categoryList[item.category]}
        </td>
        <td>
        <button type="button" class="btn btn-success btn-sm btn-preview" data-myid="${item.id}" >预览</button>
        <button type="button" class="btn btn-primary btn-sm btn-edit" data-myid="${item.id}" >编辑</button>
        <button type="button" class="btn btn-danger btn-sm btn-del" data-myid="${item.id}">删除</button>

        </td>
    </tr>

    `).join("")
}

listbody.onclick = function (evt) {
    if (evt.target.className.includes("btn-preview")) {
        myPreviewModal.toggle()
        // console.log(myPreviewModal.toggle)
        let obj = list.filter(item => item.id == evt.target.dataset.myid)[0]
        renderPreviewModal(obj)
        // console.log(obj,evt.target.dataset.myid)

    } else if (evt.target.className.includes('btn-edit')) {
        location.href="/js实战案列/JS原生项目/code/code/admin/views/news-manage/EditNews/index.html?id="+evt.target.dataset.myid 
        console.log(evt.target.dataset.myid)
    } else if (evt.target.className.includes('btn-del')) {
        updateId = evt.target.dataset.myid
        myDelModal.toggle()
    }
}

function renderPreviewModal(obj) {
    previewModalTitle.innerHTML = obj.title
    previewModalContent.innerHTML = obj.content
}

delConfirm.onclick = async function () {
    await fetch(`http://localhost:3000/news/${updateId}`,{
        method:"delete"
    })
    myDelModal.toggle()

    render()
}

render()