<template>
    <form>
        <div class="dirBox">
            <p class="dirsubTitle">
                <input placeholder="请输入标题" type="text" v-model = "newDia.title">
            </p>
            <p class="dirContent">
                <textarea v-model="newDia.content"></textarea>
            </p>
        </div>
        <div class="typePosition">
            <label class="dirType">类型：</label>
            <select class="select" v-model="newDia.type">
                <option value="个人日志">个人日志</option>
                <option value="休闲">休闲</option>
                <option value="其他">其他</option>
            </select>
        </div>
        <div class="btnPosition">
            <a class="publish" @click="publish()">发表</a>
            <router-link to="/foo" class="cancel" >取消</router-link>
        </div>
    </form>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        data () {
            return {

            }
        },
        computed: mapGetters({
            list: 'getList',
            newDia: 'getNew'
        }),
        methods: {
            publish() {         //添加&&编辑文章
                const num = this.$route.params.index;
                if(this.newDia.title != "" &&this.newDia.content != ""  ){
                    this.newDia.time = new Date().toLocaleDateString();
                    const newMess = {
                        newDia:this.newDia,
                        index:num
                    }
                    this.$store.dispatch('publish_article',newMess);
                    this.$router.go(-1);
                }
                else{
                    alert("标题和内容为必填项！");
                }

            },
        }
    }
</script>