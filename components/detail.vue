<template>
    <div>
        <h1 class="detTitle">{{ detTitle }}</h1>
        <div>
            <p class="detContent">{{ detConent }}</p>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        data () {
            return {
                detTitle:"",
                detConent:"",
            }
        },
        computed: mapGetters({
            list: 'getList',
        }),
        created: function() {
            const index = this.$route.params.index
            this.detTitle = this.list[index].title;
            this.detConent = this.list[index].content;
        }

    }
</script>