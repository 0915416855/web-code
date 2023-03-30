// 引入模块

import { load, isLogin } from "/js实战案列/JS原生项目/code/code/admin/util/LoadView.js"

load('sidemenu-addNews')
// console.log(load)

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

addNewsForm.onsubmit = async function (evt) {
    evt.preventDefault()
    await fetch("http://localhost:3000/news", {
        headers: {
            "content-type": "application/json"
        },
        method: "post",
        body: JSON.stringify({
            title: title.value,
            content,
            category: category.value,
            cover,
            //作者
            author: JSON.parse(isLogin()).username
        })
    }).then(res => res.json())

    location.href = "/js实战案列/JS原生项目/code/code/admin/views/news-manage/NewsList/index.html"
}