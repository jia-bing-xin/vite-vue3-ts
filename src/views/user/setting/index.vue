<template>
  <div>
    <el-popover placement="bottom" :title="$t('settingForm.title')" :width="200" trigger="click"
      popper-class="settingForm">
      <template #reference>
        <el-icon class="is-Tools">
          <el-tooltip class="box-item" effect="dark" placement="bottom-start" :content="$t('settingForm.title')">
            <Tools />
          </el-tooltip>
        </el-icon>
      </template>
      <el-form :model="settingForm" class="set-form">
        <el-form-item :label="$t('settingForm.select.lang')">
          <el-select v-model="settingForm.lang" size="large" @change="handleChangeSelect">
            <el-option :label="$t('settingForm.select.zh')" value="zh_CN" />
            <el-option :label="$t('settingForm.select.en')" value="en" />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('settingForm.opacity')">
          <el-slider v-model="settingForm.opacity" :format-tooltip="formatTooltip" />
        </el-form-item>
        <el-form-item :label="$t('settingForm.color')">
          <el-color-picker v-model="settingForm.color" />
        </el-form-item>
      </el-form>
    </el-popover>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale, t } = useI18n()
//表单数据
const settingForm = reactive({
  name: '',
  lang: localStorage.getItem('lang') || 'zh_CN',
  opacity: 0.6,
  color: '#fff',
})
//切换语言功能
const handleChangeSelect = (val: String): void => {
  locale.value = settingForm.lang
  localStorage.setItem('lang', locale.value)
}
//格式化opacity值
const formatTooltip = (val: number) => val / 100

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