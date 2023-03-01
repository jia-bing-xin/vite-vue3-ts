/**
 * @description: 图片请求失败的时候显示另一张图片:<img v-real-img="'images/logo.png'" src="images/errorLogo.png"/>
 */
import getTarNameNode from "../getTarNameNode"
const vRealImg = {
    beforeMount: async (el, binding) => {
        const imgURL = binding.value;
        if (imgURL) {
            const exist = await imageIsExist(imgURL);
            exist && (el.tagName !== 'IMG' && el.children ? getTarNameNode(el.children, 'IMG') : el)?.setAttribute('src', imgURL);
        }
    }
}
// 判断一个图片是否存在, 注意是异步行为
function imageIsExist(url) {
    return new Promise(resolve => {
        let img = new Image();
        img.src = url;
        img.onload = () => {
            if (img.complete) {
                resolve(true);
                img = null;
            }
        }
        img.onerror = () => {
            resolve(false);
            img = null;
        }
    })
}

export default vRealImg