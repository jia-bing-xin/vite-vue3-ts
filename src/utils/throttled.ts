/**
 * @description: 节流
 * @param {*} fn 回调
 * @param {*} delay 等待时间
 */
export default function throttled(fn, delay) {
    let timer = null
    let starttime = Date.now()
    return (...arg) => {
        let curTime = Date.now() // 当前时间
        let remaining = delay - (curTime - starttime)  // 从上一次到现在，还剩下多少多余时间
        clearTimeout(timer)
        if (remaining <= 0) {
            fn(...arg)
            starttime = Date.now()
        } else {
            timer = setTimeout(fn, remaining);
        }
    }
}
