/**
 * @description: 使input立即获取焦点
 * @param {String | Number} 使第几个input获取焦点
 */
import getTarNameNode from "../getTarNameNode"
const vFocus = {
    mounted: (el, binding) => {
        (el.tagName !== 'INPUT' && el.children ? getTarNameNode(el.children, 'INPUT', binding.value) : el)?.focus()
    }
}
export default vFocus