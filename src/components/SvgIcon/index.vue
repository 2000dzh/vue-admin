<!--
 * @Author: 丁子豪
 * @Date: 2022-08-19 12:47:53
 * @LastEditTime: 2022-08-26 21:19:27
 * @LastEditors: 丁子豪
-->
<template>
	<svg :style="iconStyle" aria-hidden="true">
		<use :xlink:href="symbolId"></use>
	</svg>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { PropType } from "vue";
defineOptions({
	name: "SvgIcon"
});

const props = defineProps({
	name: {
		type: String as PropType<string>,
		required: true
	},
	prefix: {
		type: String as PropType<string>,
		default: "icon"
	},
	iconStyle: {
		type: Object as PropType<{ [key: string]: any }>,
		default: () => ({ width: "100px", height: "100px  " })
	}
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>
