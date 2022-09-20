<!--
 * @Author: 丁子豪
 * @Date: 2022-08-17 19:49:53
 * @LastEditTime: 2022-08-19 12:43:46
 * @LastEditors: 丁子豪
-->
<template>
	<div class="login-container flx-center">
		<!-- <SwitchDark /> -->
		<div class="login-box">
			<div class="login-left">
				<img src="@/assets/images/login_left0.png" alt="login" />
			</div>
			<div class="login-form">
				<div class="login-logo flx-center">
					<img class="login-icon" src="@/assets/images/logo.svg" alt="" />
					<h2>Geeker-Admin</h2>
				</div>
				<LoginForm />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
// import SwitchDark from "@/components/SwitchDark/index.vue";
import LoginForm from "./components/LoginForm.vue";
import { config } from "@/api";
defineOptions({
	name: "Login"
});
console.log(config);
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
