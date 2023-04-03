<template>
	<view>
		<view class="search"><u-search disabled shape="square" input-align="center" :animation="false" @click="click"></u-search></view>
		<view class="classification"><class-ification></class-ification></view>
		<view class="content">
			<information-list></information-list>
			<view class="floatbtn" @click="changeMenu">
				<text>发布</text>
			</view>
		</view>
	</view>
</template>

<script>
import Tabs from 'pages/tabs/tabs';
import ClassIfication from 'pages/components/classification/classification';
import InformationList from 'pages/components/InformationList/InformationList';
export default {
	components: {
		ClassIfication,
		InformationList,
		Tabs
	},
	data() {
		return {
			customStyle: {
				width: '90rpx',
				height: '90rpx',
				borderRadius: '100%',
				marginTop: '20px', // 注意驼峰命名，并且值必须用引号包括，因为这是对象
				color: 'red'
			}
		};
	},
	methods: {
		click() {
			console.log('@click');
		},
		changeMenu() {}
	}
};
</script>

<style lang="scss" scoped>
.tabs {
	height: 100%;
}
.search {
	padding: 0 20rpx;
}
.content{
	background-color: #fff;
}
.floatbtn {
	background-color: #007aff;
	color: #fff;
	width: 100rpx;
	height: 100rpx;
	position: fixed;
	right: 0;
	bottom:0;
	z-index: 99999;
	border-radius: 120rpx 0rpx 0 0rpx;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: flex-end;
	padding: 15rpx;
	cursor: pointer;
}
</style>
