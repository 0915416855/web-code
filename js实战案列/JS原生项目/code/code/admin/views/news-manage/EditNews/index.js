// 引入模块

import { load, isLogin } from "/js实战案列/JS原生项目/code/code/admin/util/LoadView.js"

load('sidemenu-newsList')
// console.log(load)

// 获取id
// console.log(new URL(location.href).searchParams.get("id"))
let updateId = new URL(location.href).searchParams.get("id")

let content = ''
let cover = ''

// 富文本编辑器
const { createEditor, createToolbar } = window.wangEditor

const editorConfig = {
    placeholder: 'Type here...',
    onChange(editor) {
        const html = editor.getHtml()
        // console.log('editor content', html)
        // 也可以同步到 <textarea>
        content = html
        // console.log(content)
    }
}

const editor = createEditor({
    selector: '#editor-container',
    html: '<p><br></p>',
    config: editorConfig,
    mode: 'default', // or 'simple'
})

const toolbarConfig = {}

const toolbar = createToolbar({
    editor,
    selector: '#toolbar-container',
    config: toolbarConfig,
    mode: 'default', // or 'simple'
})

coverfile.onchange = function (evt) {
    // ===>base64
    let reader = new FileReader()
    reader.readAsDataURL(evt.target.files[0])
    // 转换完成进行提示
    reader.onload = function (e) {
        // console.log(e.target.result)
        cover = e.target.result
    }
}

editNewsForm.onsubmit = async function (evt) {
    evt.preventDefault()
    await fetch(`http://localhost:3000/news/${updateId}`, {
        headers: {
            "content-type": "application/json"
        },
        method: "PATCH",
        body: JSON.stringify({
            title: title.value,
            content,
            category: category.value,
            cover,
            //作者
            // author: JSON.parse(isLogin()).username
        })
    }).then(res => res.json())

    location.href = "/js实战案列/JS原生项目/code/code/admin/views/news-manage/NewsList/index.html"
}

async function render() {
    let { title, category, content: mycontent, cover: mycover } = await fetch(`http://localhost:3000/news/${updateId}`).then(res => res.json())
    // console.log(obj)
    document.querySelector("#title").value = title
    document.querySelector("#category").value = category

    editor.setHtml(mycontent)
    content = mycontent

    cover = mycover
}

render()