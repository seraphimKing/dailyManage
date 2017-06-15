<template>
    <div id="header">
        <div class="contain">
            <div class="header clearfix">
                <!--导航栏-->
                <div class="nav">
                    <ul class="nav-tab clearfix">
                        <li class="active"><router-link to="/foo"><span class="item-wrap">我的日志</span></router-link></li>
                    </ul>
                </div>
                <!--操作-->
                <div class="ope">
                    <ul class="ope-tab clearfix">
                        <li>
                            <a><i class="icon-file-alt icon-large icon-style"></i>草稿箱</a>
                        </li>
                        <li>
                            <a><i class="icon-trash icon-large icon-style"></i>回收站</a>
                        </li>
                        <li>
                            <a><i class="icon-cog icon-large icon-style"></i>设置</a>
                        </li>
                        <li>
                            <a><i class="icon-edit icon-large icon-style"></i>建议</a>
                        </li>
                    </ul>
                </div>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>
