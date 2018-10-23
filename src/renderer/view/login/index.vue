<template>
    <div class="login">
        <header>
            <div class="logo"></div>
            <div class="menu">
                <span class="iconfont lee-setting"></span>
                <span class="iconfont lee-zuixiaohua1"></span>
                <span class="iconfont lee-close"></span>
            </div>
        </header>
        <main>
            <div class="scan">
                <h2><i class="iconfont lee-erweima1"></i>扫一扫登录</h2>
                <p class="title">请使用<i>xxxxxApp</i>扫码登录 </p>
                <div class="qrcode">
                    <img src="@/assets/img/qrcode.png" alt="">
                </div>
                <span class="refresh">刷新二维码</span>
            </div>
            <div class="form">
                <div class="login_options">
                    <div class="header">
                        <span>账号密码登录</span>
                        <i>短信快捷登录></i>
                    </div>
                    <div class="validate_msg"></div>
                    <form action="">
                        <div class="form_item"><i class="iconfont lee-account"></i><input placeholder="手机号码/邮箱/用户名" class="text" type="text">
                        </div>
                        <div class="form_item"><i class="iconfont lee-mima"></i><input class="text" placeholder="请输入密码" type="password">
                        </div>
                        <div class="form_options">
                            <label>
                                <div class="option_item"><input type="checkbox"><span class="checked"><img
                                        src="@/assets/img/checked.png" alt=""></span></div>
                                <span class="text">自动登录</span></label>
                            <label>
                                <div class="option_item"><input type="checkbox"><span class="checked"><img
                                        src="@/assets/img/checked.png" alt=""></span></div>
                                <span class="text">记住密码</span></label>
                            <i>忘记密码?</i>
                        </div>
                    </form>
                    <button type="button" class="submit">登录</button>
                    <div class="footer">
                        <i class="register">注册账号</i>
                        <div class="thirdparty">
                            <i class="iconfont lee-weixin2"></i>
                            <i class="iconfont lee-xinlangweibo1"></i>
                            <i class="iconfont lee-tubiao215"></i>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style>
    * {
        padding: 0;
        margin: 0;
    }

    .login {
        width: 662px;
        height: 442px;
        border: 1px solid #999999;
        font-family: "微软雅黑";
        -webkit-user-select: none;
    }

    header {
        height: 75px;
        background-color: #EFF2F6;
        -webkit-app-region: drag;
        position: relative;
    }

    header .logo {
        width: 140px;
        height: 75px;
        background: url("../../assets/img/logo@2x.png") no-repeat 0 20px;
        background-size: 140px 33px;
        margin: 0 auto;
    }

    header .menu {
        width: 100px;
        height: 30px;
        position: absolute;
        right: 0;
        top: 0;
        text-align: right;
        padding-top: 8px;
        padding-right: 8px;
    }

    header .menu span {
        display: inline-block;
        width: 22px;
        height: 22px;
        margin-left: 5px;
        cursor: pointer;
        text-align: center;
        line-height: 22px;
    }

    main {
        height: 365px;
        padding-top: 30px;
        background: #FFFFFF;
    }

    main .scan p.title {
        text-align: center;
        font-size: 14px;
        color: #666666;
        font-weight: normal;
        margin-top: 30px;
    }

    .scan p.title i {
        display: inline-block;
        font-style: normal;
        margin-right: 5px;
        margin-left: 5px;
        color: #398CFF;
        cursor: pointer;
    }

    .scan p.title i:hover {
        border-bottom: 1px solid #398CFF;
    }

    main .scan h2 {
        text-align: center;
        font-size: 16px;
        font-weight: normal;
    }

    main .scan h2 i {
        margin-right: 5px;
        font-size: 14px;
    }

    .scan .qrcode {
        width: 154px;
        height: 154px;
        margin: 20px auto 0 auto;
        padding: 10px;
        border-radius: 3px;
        border: 1px solid #ECEDEE;
    }

    .scan .qrcode img {
        width: 100%;
        height: 100%;
    }

    .scan span.refresh {
        display: block;
        width: 94px;
        height: 30px;
        border: 1px solid #BAD4FD;
        margin: 22px auto 0 auto;
        font-size: 12px;
        text-align: center;
        line-height: 30px;
        cursor: pointer;
        border-radius: 4px;
        color: #3482F9;
    }

    .form {
        padding-right: 30px;
        padding-left: 10px;
    }

    .form .validate_msg {
        height: 37px;
    }

    .form .header {
        display: flex;
    }

    .form .header i {
        font-style: normal;
        color: #3482F9;
        cursor: pointer;
        margin-left: auto;
        font-size: 12px;
    }

    .form input, .form button {
        outline: none;
    }

    .form input.text {
        height: 40px;
        width: 290px;
        border: 1px solid #C7C7C7;
        padding-left: 35px;
        border-radius: 1px;
    }

    .form .form_item {
        margin-bottom: 16px;
        position: relative;
    }
    .form .form_item:nth-last-child(2){
        /*margin-bottom: 10px;*/
    }

    .form .form_item i {
        position: absolute;
        font-size: 16px;
        top: 12px;
        left: 10px;
        color: #000000;
    }

    .form .form_options {
        display: flex;
    }

    .form .form_options i {
        margin-left: auto;
        font-style: normal;
        font-size: 12px;
        color: #3482F9;
        cursor: pointer;
        position: relative;
        top:3px;
    }

    .form .form_options i:hover {
        text-decoration: underline;
    }

    .login_options .option_item {
        display: inline-block;
        width: 13px;
        height: 13px;
        margin-right: 5px;
        position: relative;
        border: 1px solid #B3B3B3;
        vertical-align: middle;
        cursor: pointer;
        top: -1px;
    }

    .login_options .option_item input {
        opacity: 0;
    }

    .login_options span.text {
        display: inline-block;
        margin-right: 14px;
        font-size: 13px;
    }

    .login_options .option_item span.checked {
        position: absolute;
        top: -5px;
        right: -1px;
        font-weight: bold;
        display: inline-block;
        width: 13px;
        height: 13px;
        cursor: pointer;
    }

    .form_options label {
        cursor: pointer;
    }

    .option_item span.checked img {
        width: 100%;
        height: 100%;
    }

    input[type="checkbox"] + span {
        opacity: 0;
    }

    input[type="checkbox"]:checked + span {
        opacity: 1;
    }

    button.submit {
        margin-top: 25px;
        width: 100%;
        height: 38px;
        background-color: #398CFF;
        color: #FFFFFF;
        border:none;
        border-radius: 3px;
        font-size: 16px;
        font-family: 微软雅黑;
    }

    .form .footer{
        display: flex;
        position: absolute;
        bottom: 15px;
        width:300px;
    }

    .form .footer i.register{
        font-style: normal;
        font-size: 13px;
        color: #3482F9;
        cursor: pointer;

    }
    .form .footer i.register:hover{
        text-decoration: underline;
    }
    .form .footer div{
        margin-left: auto;
        color:#5D9BFA;
    }
    .form .footer div i{
        display: inline-block;
        margin-left: 10px;
        width:20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        cursor: pointer;
        font-size: 18px;
    }
    .form .footer div i:hover{
        background-color: #EBF3FF;
    }
</style>