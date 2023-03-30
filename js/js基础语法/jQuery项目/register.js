// 注册页面的逻辑代码
$('form').on('submit', function (e) {
    // 1 阻止表单的默认提交行为
    e.preventDefault()
    // 2 采集用户信息\
    const data = $('form').serialize()
    console.log(data)

    // 3 发送请求
    $.post(' http://localhost:8888/users/register',data,res=>{
        confirm.log(res)
        // 4 判断结果，来决定是否提示错误
        if (res.code === 0){
            // 提示错误
            $('form>span').css('diaplay','block')
            return
        }

        // 页面跳转
        window.alert('注册成功，点击确定跳转到登录页面')
        window.location.href = './login.html'
    })
})