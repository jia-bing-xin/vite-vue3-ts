/**
 * @description: 防抖
 * @param {*} fn   回调
 * @param {*} delay  延迟时间
 * @param {*} immediate 是否立即执行
 */
export default function debounce(fn, delay = 500, immediate = false) {
    let timer = null;
    return (...arg) => {
        if (timer) {
            clearTimeout(timer);
        }
        //是否立即执行
        if (immediate && !timer) {
            fn(...arg)
            timer = true
        } else {
            timer = setTimeout(() => {
                fn(...arg)
            }, delay);
        }
    }
}