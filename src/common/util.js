//公共方法
module.exports = {
    //是否为空
    isEmpty(value) {
        return (value + '').trim() == '';
    },
    //是否为空
    isNullEmpty(value) {
        return value == null || value == 'undefined' || value == [] || (value + '').trim() == '';
    }
}