<template>
	<view>
		<view class="wrap">
			<view class="u-tabs-box">
				<u-tabs-swiper inactive-color="#a3a3a3" activeColor="#060606" bar-width="120" ref="tabs" :list="list" :current="current" @change="change" :is-scroll="false" swiperWidth="750"></u-tabs-swiper>
				<u-icon class="searchIcon" name="search" color="#000000" size="48"></u-icon>
			</view>
			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;"><view>待付款1</view></scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;"><view>待付款2</view></scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;"><view>待付款3</view></scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					name: '分类'
				},
				{
					name: '精选'
				},
				{
					name: '社区'
				}
			],
			current: 0,
			swiperCurrent: 0,
			tabsHeight: 0,
			dx: 0
		};
	},

	methods: {
		// tab栏切换
		change(index) {
			this.swiperCurrent = index;
		},
		transition({ detail: { dx } }) {
			this.$refs.tabs.setDx(dx);
		},
		animationfinish({ detail: { current } }) {
			this.$refs.tabs.setFinishCurrent(current);
			this.swiperCurrent = current;
			this.current = current;
		}
	}
};
</script>

<style>
/* #ifndef H5 */
page {
	height: 100%;
	background-color: #ffffff;
}
/* #endif */
</style>

<style lang="scss" scoped>
	.u-tabs-box{
		position: relative;
		width: 80%;
	}
.wrap {
	display: flex;
	flex-direction: column;
	width: 100%;
}
.searchIcon{
	position: absolute;
	top: 18rpx;
	right: -80rpx;
}
</style>
