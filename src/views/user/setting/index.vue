<template>
  <div>
    <el-popover placement="bottom" :title="t('settingForm.title')" :width="200" trigger="click"
      popper-class="settingForm">
      <template #reference>
        <el-icon class="is-Tools">
          <el-tooltip class="box-item" effect="dark" placement="bottom-start" :content="t('settingForm.title')">
            <Tools />
          </el-tooltip>
        </el-icon>
      </template>
      <el-form :model="settingForm" class="set-form">
        <el-form-item :label="t('settingForm.select.lang')">
          <el-select v-model="settingForm.lang" size="large" @change="handleChangeSelect">
            <el-option :label="t('settingForm.select.zh')" value="zh_CN" />
            <el-option :label="t('settingForm.select.en')" value="en" />
          </el-select>
        </el-form-item>
        <el-form-item :label="t('settingForm.size')">
          <el-slider v-model="settingForm.size" :format-tooltip="formatSize" />
        </el-form-item>
        <el-form-item :label="t('settingForm.opacity')">
          <el-slider v-model="settingForm.opacity" :format-tooltip="formatOpacity" />
        </el-form-item>
        <!-- <el-form-item :label="t('settingForm.color')">
          <el-color-picker v-model="settingForm.color" />
        </el-form-item> -->
      </el-form>
    </el-popover>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale, t } = useI18n()
//表单数据
const settingForm = reactive({
  lang: localStorage.getItem('lang') || 'zh_CN',
  size: Number(localStorage.getItem('size')) || 0,
  opacity: Number(localStorage.getItem('opacity')) || 60,
  color: '#fff',
})
//切换语言功能
const handleChangeSelect = (val: String): void => {
  locale.value = settingForm.lang
  localStorage.setItem('lang', locale.value)
}
//修改size变量值
const formatSize = (val: number) => {
  localStorage.setItem('size', `${settingForm.size}`)
  document.getElementsByTagName('body')[0].style.setProperty('--loginScale', `${1 + Number(settingForm.size) / 400}`);
  return 400 + val
}
//修改opacity变量值
const formatOpacity = (val: number) => {
  localStorage.setItem('opacity', `${settingForm.opacity}`)
  document.getElementsByTagName('body')[0].style.setProperty('--loginOpacity', `${Number(settingForm.opacity) / 100}`);
  return val / 100
}
</script>
<style lang="scss" scoped>
.is-Tools {
  position: absolute;
  top: 20px;
  right: 40px;
  font-size: 30px;
  color: #fff;
  opacity: 0.6;

  .el-tooltip__trigger {
    outline: none;
  }
}
</style>