import { isStrNumOrNum } from "./typeRlues"
/**
 * @description: 获取index对应的Input节点
 * @param {*} node 节点
 * @param {*} index 
 * @param {*} tarName 标签名称
 * @return {*}
 */
export default function getInputNode(node, index, tarName) {
    const res = []
    // 获取所有的Input节点
    function getInputNodeList(node, tarName) {
        for (let i = 0; i < node.length; i++) {
            if (node[i].tagName == tarName) {
                res.push(node[i])
            } else getInputNodeList(node[i].children, tarName)
        }
    }
    getInputNodeList(node, tarName)
    if (isStrNumOrNum(index)) {
        index = index > res.length ? res.length - 1 : (index < 0 ? 0 : index)
    } else index = 0
    return res[index]
}