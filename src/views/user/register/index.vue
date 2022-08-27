<template>
  <div class="register">
    <h1 class="title">{{ $t('register.register') }}</h1>
    <el-form :model="registerForm" class="register-form">
      <el-form-item :label="$t('register.username')">
        <el-input v-model="registerForm.user" :placeholder="$t('register.usernameText')" />
      </el-form-item>
      <el-form-item :label="$t('register.password')">
        <el-input v-model="registerForm.password" :placeholder="$t('register.passwordText')" />
      </el-form-item>
      <el-form-item :label="$t('register.repassword')">
        <el-input v-model="registerForm.repassword" :placeholder="$t('register.repasswordText')" />
      </el-form-item>
      <el-form-item>
        <div class="func-btn">
          <el-button type="primary" @click="goLogin" size="large" native-type="submit">{{ $t('register.register') }}
          </el-button>
          <el-button class="register-btn" @click="goLogin" size="large" native-type="submit">{{ $t('register.backLogin')
          }}</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
const router = useRouter()
const { t } = useI18n()
//表单数据
const registerForm = reactive({
  user: '',
  password: '',
  repassword: ''
})
//切换到登录
const emit = defineEmits(['handleChange']);
const goLogin = () => {
  emit('handleChange', 'login')
  router.push('/login')
}
</script>
<style lang="scss" scoped>
.register {
  .title {
    width: 100%;
    text-align: center;
    Letter-spacing: 10px;
    margin-top: 10%;
    font-size: 40px;
  }

  .register-form {
    .el-form-item {
      margin: 20px 30px;

      :deep(.el-form-item__label) {
        justify-content: flex-start;
        white-space: pre;
        width: 70px;
        padding: 6px 0;
        font-size: 18px;
      }

      .el-input {
        margin-left: 30px;
        width: 200px;
        height: 46px;
      }

      .func-btn {
        width: 100%;
        display: flex;
        justify-content: center;

        .register-btn {
          margin-left: 22px;
        }
      }
    }
  }
}
</style>