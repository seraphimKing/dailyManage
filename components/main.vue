<template>
    <div class="main clearfix" @click="editSeen=-1" id="main">
        <!--content left{-->
        <div class="left">
            <!--操作-->
            <div class="action clearfix">
                <div class="act-tab">
                    <a class="btn" @click="toDiary(-1)"><i class="icon-text-width icon-large"></i>写日志</a>
                    <a class="btn"><i class=" icon-th-list icon-large"></i>模板日志</a>
                    <a class="font">批量管理</a>
                </div>
                <div class="act-add">
                    <a class="font">切换到摘要</a>
                    <span>|</span>
                    <!--点击切换class:icon-caret-up-->
                    <a class="publish-time font">发表时间<i class="icon-caret-down"></i></a>
                </div>
            </div>
            <!--列表-->
            <div class="list-area">
                <ul>
                    <li class="list-row clearfix" v-for = "(diary,index) in list" v-if="showByType(diary.type)">
                        <div class="list-tit">
                            <span>[{{diary.type}}]</span>
                            <a @click = "details(index)">{{ diary.title }}</a>
                            <i></i>
                        </div>
                        <div class="list-ope">
                            <span>{{ diary.time }} (1/19)</span>
                            <a @click.stop="editSeen = index">编辑<i class="icon-caret-down"></i></a>
                            <div class="editor" v-show = "editSeen==index">
                                <ul>
                                    <li><a @click="deletes(index)">删除日志</a></li>
                                    <li><a @click = "stick(index)">设置置顶</a></li>
                                    <li><a @click = "toDiary(index)">编辑日志</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!--}content left-->
        <!--content right-->
        <div class="right">
            <!--type-->
            <div class="blog-sort">
                <ul class="sort-box">
                    <li class="clearfix">
                        <span class="tit fir">日志分类</span>
                        <span class="tit sec">管理</span>
                    </li>
                    <li class="clearfix">
                        <a class="box" @click="typeDetail = '*'">
                            <span class="fir">全部日志</span>
                            <span class="sec">()</span>
                        </a>
                    </li>
                    <li class="clearfix" v-for = "types in type">
                        <a class="box" @click="typeDetail = types ">
                            <span class="fir">{{ types }}</span>
                            <span class="sec">()</span>
                        </a>
                    </li>
                </ul>
            </div>
            <!--reserch-->
            <div class="research">
                <h1 class="tit">搜索日记</h1>
                <div class="resBox">
                    <input type="text" class="inp">
                    <a class="icon-search resbtn"></a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import { mapGetters } from 'vuex'
    export default {
        data () {
            return {
                 diaSeen: false,  //编辑日记弹框
                 selectSeen:false, //下拉框显示和隐藏
                 editSeen: -1,   //操作编辑框
                 typeDetail:"*",
            }
        },
        computed: mapGetters({
            list: 'getList',
            type: 'getType',
            newDia: 'getNew'
        }),
        methods: {
            stick: function (index) {    //置顶
                var text = this.list.splice(index,1);
                this.list.unshift(text[0]);
            },
            details: function(index) {
                this.$router.push({ path: '/bar/'+index})
            },
            showByType: function (type) {   //根据类型显示列表
                if(this.typeDetail == "*") {
                    return true;
                }
                else {
                    return type==this.typeDetail;
                }
            },
            toDiary(index) {
                this.$store.dispatch('init_newdia',index);
                this.$router.push({ path: '/add/'+index})

            },
            deletes(index) {      //删除某一篇文章
                this.$store.dispatch('delete_article',index);
            },

        },

    }
</script>
<style>

</style>



























