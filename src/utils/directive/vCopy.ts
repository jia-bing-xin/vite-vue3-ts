/**
 * @description: copy
 * @param {String | Number}: copy的值
 */
import { ElMessage } from 'element-plus'
export const vCopy = {
    mounted: (el, binding) => {
        el.targetContent = binding.value;
        el.addEventListener('click', () => {
            //document.execCommand('Copy');废弃
            navigator.clipboard.writeText(el.targetContent).then(() => {
                ElMessage({
                    showClose: true,
                    message: '复制成功。',
                    type: 'success',
                })
            }).catch(() => {
                ElMessage({
                    showClose: true,
                    message: '复制失败。',
                    type: 'error',
                })
            })
        })
    },
    updated: (el, binding) => {
        // 实时更新最新的目标内容
        el.targetContent = binding.value;
    },
    unmounted: (el) => {
        el.removeEventListener('click')
    }
}