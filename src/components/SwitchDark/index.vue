<!--
 * @Author: 丁子豪
 * @Date: 2022-08-17 19:49:53
 * @LastEditTime: 2022-08-17 19:51:05
 * @LastEditors: 丁子豪
-->
<template>
	<el-switch
		v-model="value1"
		inline-prompt
		active-color="#0a0a0a"
		inactive-color="#dcdfe6"
		:active-icon="Sunny"
		:inactive-icon="Moon"
	/>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Sunny, Moon } from "@element-plus/icons-vue";

const value1 = ref(true);
</script>

<style scoped lang="scss"></style>
