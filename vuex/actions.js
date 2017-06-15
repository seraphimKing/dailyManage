export const delete_article = ({commit}, index) => {
    commit('DELETE_ARTICLE', index)
}

export const publish_article = ({commit}, newMess) => {
    commit('PUBLISH_ARTICLE', newMess)
}
export const init_newdia = ({commit}, index) => {
    commit('INIT_NEWDIA', index)
}