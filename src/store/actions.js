import types from './mutationType'
export default {
    fn_demo:({commit},name) =>{
        commit(types['FN_DEMO'],name);
    },
}