<template>
	<view>
		<view class="dropdown">
			<u-dropdown>
				<u-dropdown-item v-model="value1" title="区县" :options="options1"></u-dropdown-item>
				<u-dropdown-item v-model="value2" title="排序" :options="options2"></u-dropdown-item>
				<u-dropdown-item v-model="value2" title="类别" :options="options2"></u-dropdown-item>
			</u-dropdown>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value1: 1,
				value2: 2,
				options1: [
					{
						label: '默认排序',
						value: 1
					},
					{
						label: '距离优先',
						value: 2
					},
					{
						label: '价格优先',
						value: 3
					}
				],
				options2: [
					{
						label: '去冰',
						value: 1
					},
					{
						label: '加冰',
						value: 2
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.dropdown {
		height: 80rpx;
	}
</style>
