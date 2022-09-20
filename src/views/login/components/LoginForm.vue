<!--
 * @Author: 丁子豪
 * @Date: 2022-08-17 20:55:30
 * @LastEditTime: 2022-08-18 20:08:02
 * @LastEditors: 丁子豪
-->
<template>
	<el-form ref="loginFormRef" :model="loginForm" :rules="loginRule" size="large">
		<el-form-item prop="username">
			<el-input v-model="loginForm.username" placeholder="用户名：admin / user">
				<template #prefix>
					<el-icon class="el-input__icon"><user /></el-icon>
				</template>
			</el-input>
		</el-form-item>

		<el-form-item prop="password">
			<el-input v-model="loginForm.password" placeholder="密码：123456">
				<template #prefix>
					<el-icon class="el-input__icon"><lock /></el-icon>
				</template>
			</el-input>
		</el-form-item>
	</el-form>
	<div class="login-btn">
		<el-button :icon="CircleClose" round size="large" @click="resetForm">重置</el-button>
		<el-button :icon="UserFilled" round size="large" @click="login" type="primary" :loading="loading"> 登录 </el-button>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { Login } from "@/api/interface";
import { CircleClose, UserFilled } from "@element-plus/icons-vue";
import type { ElForm } from "element-plus";
import { ElMessage } from "element-plus";

const router = useRouter();

type FormInstance = InstanceType<typeof ElForm>;
const loginFormRef = ref<FormInstance>();
const loginForm = reactive<Login.ReqLoginForm>({
	username: "",
	password: ""
});
const loginRule = reactive({
	username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
	password: [{ required: true, message: "请输入密码", trigger: "blur" }]
});

const loading = ref<boolean>(false);

const login = async () => {
	if (!loginFormRef.value) return;
	loading.value = true;
	try {
		const flag = await loginFormRef.value.validate();
		if (flag) {
			ElMessage.success("登录成功！");
			router.push("/");
		}
	} catch (err) {
		console.log(err);
	} finally {
		loading.value = false;
	}
};

const resetForm = () => {
	if (!loginFormRef.value) return;
	loginFormRef.value.resetFields();
};
</script>
<style scoped lang="scss">
@import "../index.scss";
</style>
