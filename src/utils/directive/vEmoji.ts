/*
 * @Description: 限制用户不能输入某些特定的字符
 */
import getTarNameNode from "../getTarNameNode"
import { ElMessage } from 'element-plus'
let timer = null;
const vEmoji = {
    updated: (el, binding) => {
        const regRule = /^(\w|[^\x00-\xff]){6,14}$/;
        let value = (el.tagName !== 'INPUT' && el.children ? getTarNameNode(el.children, 'INPUT', binding.value) : el)?.value
        if (value) {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                if (value.length < 6 || value.length > 14) {
                    ElMessage({
                        message: '长度应该为6-14位',
                        type: 'error',
                    })
                } else if (!regRule.test(value)) {
                    ElMessage({
                        message: '含有非法字符',
                        type: 'error',
                    })
                }
            }, 500);
        }
    }
}
export default vEmoji