/**
 * @description: 使input立即获取焦点
 * @param {String | Number} 使第几个input获取焦点
 */
import { isStrNumOrNum } from "../typeRlues"
export const vFocus = {
    mounted: (el, binding) => {
        if (el.tagName !== 'INPUT') {
            el.children && getInputNodeItem(el.children, binding.value)?.focus()
        } else el.focus()
    }
}

// 获取index对应的Input节点
function getInputNodeItem(node, index) {
    const res = []
    // 获取所有的Input节点
    function getInputNodeList(node) {
        for (let i = 0; i < node.length; i++) {
            if (node[i].tagName == 'INPUT') {
                res.push(node[i])
            } else getInputNodeList(node[i].children)
        }
    }
    getInputNodeList(node)
    //用户从1开始,数组是从0开始
    index--
    if (isStrNumOrNum(index)) {
        index = index > res.length ? res.length - 1 : (index < 0 ? 0 : index)
    } else index = 0
    return res[index]
}