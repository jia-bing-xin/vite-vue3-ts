/**
 * @description: 图片懒加载
 */
import { throttled } from '../throttled'
export const vLazyImg = {
    beforeMount: (el, binding) => {
        el.$data_src = binding.value;
    },
    mounted: (el) => {
        IntersectionObserver ? ioEvent(el) : scrollEvent(el);
    },
    updated: (el, binding) => {
        // 实时更新最新的图片路径
        el.$data_src = binding.value;
    },
    unmounted: (el) => {
        IntersectionObserver && el.$io.disconnect();
    }
}
function ioEvent(el) {
    const io = new IntersectionObserver(entries => {
        const realSrc = el.$data_src;
        entries[0].isIntersecting && realSrc && (el.src = realSrc);
    });
    el.$io = io;
    io.observe(el);
}
function scrollEvent(el) {
    const handler = throttled(loadImg, 250);
    loadImg(el);
    window.addEventListener('scroll', () => {
        handler(el);
    })
}
// 滚动触发后, 需要处理的后续逻辑
function loadImg(el) {
    const clientHeight = getClientHeight();
    const { top, bottom } = el.getBoundingClientRect();
    const realSrc = el.$data_src;
    (top < clientHeight && bottom > 0) && realSrc && (el.src = realSrc);
}

// 获取视口高度, 兼容不同浏览器厂商
function getClientHeight() {
    const dClientHeight = document.documentElement.clientHeight;
    const bodyClientHeight = document.body.clientHeight;
    let clientHeight = 0;
    if (bodyClientHeight && dClientHeight) {
        clientHeight = bodyClientHeight < dClientHeight ? bodyClientHeight : dClientHeight;
    } else {
        clientHeight = bodyClientHeight > dClientHeight ? bodyClientHeight : dClientHeight;
    }
    return clientHeight;
}