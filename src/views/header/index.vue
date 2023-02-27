<template>
  <div class="header">
    <div class="logo" @click="goHome"></div>
    <div class="main">
      <div class="nav">
        <el-menu
          :default-active="headerMenu($route.path)"
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
          router
        >
          <el-menu-item index="/home">{{
            t('homeHeader.visual')
          }}</el-menu-item>
          <el-menu-item index="/map">{{ t('homeHeader.map') }}</el-menu-item>
          <el-menu-item index="/component">{{
            t('homeHeader.component')
          }}</el-menu-item>
          <el-menu-item index="/document">{{
            t('homeHeader.document')
          }}</el-menu-item>
          <el-menu-item index="/administrator">{{
            t('homeHeader.administrator')
          }}</el-menu-item>
        </el-menu>
      </div>
      <div class="tools">
        <el-dropdown :hide-on-click="false">
          <div class="user">
            <el-icon>
              <User />
            </el-icon>
            <span>userName</span>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item @click="goLogin">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <div class="lang">
          <el-select v-model="lang" size="large" @change="handleChangeSelect">
            <el-option :label="t('settingForm.select.zh')" value="zh_CN" />
            <el-option :label="t('settingForm.select.en')" value="en" />
          </el-select>
        </div>
        <el-tooltip
          class="box-item"
          effect="dark"
          :content="t('homeHeader.goWarehouse')"
          placement="bottom"
        >
          <a
            class="github"
            href="https://github.com/jia-bing-xin/vite-vue3-ts-react"
            target="_blank"
          ></a>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
const { locale, t } = useI18n()
const router = useRouter()
//保证点击内容菜单时，首页菜单依然高亮,刷新也不会失去高亮
const headerMenu = (path: any): any => {
  let meta = router.currentRoute.value.meta
  return meta.headerMenu ? meta.headerMenu : path
}
//切换到登录
const goLogin = () => {
  router.push('/login')
}
//切换到首页
const goHome = () => {
  router.push('/home')
  // console.log(path)
}
//切换语言功能
const lang = ref(localStorage.getItem('lang') || 'zh_CN')
const handleChangeSelect = (): void => {
  locale.value = lang.value
  localStorage.setItem('lang', locale.value)
}
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  width: 90vw;
  margin: 0 auto;
  justify-content: space-between;

  .logo {
    margin-top: 13px;
    width: 128px;
    height: 28px;
    line-height: 28px;
    background: url('@/assets/picture/home/element-plus-logo.svg') no-repeat;
    cursor: pointer;
    min-width: 128px;
  }

  .main {
    width: 56vw;
    display: flex;
    justify-content: space-between;
    min-width: 780px;

    .nav {
      width: 520px;

      .el-menu-demo {
        height: 56px;
        line-height: 56px;
        border-bottom: 2px solid rgb(226, 210, 210);

        > .el-menu-item.is-active {
          background-color: transparent;
        }

        .el-menu-item:not(.is-disabled):hover {
          background-color: transparent;
        }
      }
    }

    .tools {
      display: flex;
      justify-content: space-between;
      width: 300px;

      .user {
        min-width: 80px;
        margin-top: 18px;
        font-size: 16px;

        .el-icon {
          vertical-align: -3px;
          cursor: pointer;
        }

        span {
          margin-left: 6px;
        }
      }

      .lang {
        width: 80px;
      }

      .github {
        margin-top: 12px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        background: url('@/assets/picture/home/github.svg') no-repeat;
        background-size: 30px 30px;
        cursor: pointer;
      }
    }
  }
}
</style>
