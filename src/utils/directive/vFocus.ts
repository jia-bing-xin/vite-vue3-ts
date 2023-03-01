/**
 * @description: 使input立即获取焦点
 * @param {String | Number} 使第几个input获取焦点
 */
import getInputNode from "../getInputNode"
export const vFocus = {
    mounted: (el, binding) => {
        if (el.tagName !== 'INPUT') {
            el.children && getInputNode(el.children, binding.value, 'INPUT')?.focus()
        } else el.focus()
    }
}