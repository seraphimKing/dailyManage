export default {
    DELETE_ARTICLE (state, index) {     //删除日记
        state.list.splice(index,1)
    },
    PUBLISH_ARTICLE(state,newMess) {     //发表日记&编辑日记
        if(newMess.index == -1) {
            state.list.push(newMess.newDia);
            console.log(111)
        }
        else {
            state.list[newMess.index] = newMess.newDia;
        }

    },
    INIT_NEWDIA(state,index) {
        if(index == -1){
            state.newDia = {
                title: "",
                time: "",
                type:"个人日志",
                content:""
            }
        }
        else{
            state.newDia = {
                title: state.list[index].title,
                time: state.list[index].time,
                type:state.list[index].type,
                content:state.list[index].content,
            }
        }
    }

}