import { isStrNumOrNum } from "./typeRlues"
/**
 * @description: 获取index对应的Input节点
 * @param {*} node 节点
 * @param {*} tarName 标签名称
 * @param {*} index 
 */
export default function getTarNameNode(node, tarName, index = 0) {
    const res = []
    // 获取所有的节点
    function getTarNameNodeList(node, tarName) {
        for (let i = 0; i < node.length; i++) {
            if (node[i].tagName == tarName) {
                res.push(node[i])
            } else getTarNameNodeList(node[i].children, tarName)
        }
    }
    getTarNameNodeList(node, tarName)
    if (isStrNumOrNum(index)) {
        index = index > res.length ? res.length - 1 : (index < 0 ? 0 : index)
    } else index = 0
    return res[index]
}