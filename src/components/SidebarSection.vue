<template>
	<section class="section">
		<!-- Write v-show in h3 -->
		<h3 class="section-title"></h3> 
		<ul class="section-items">
			<sidebar-item 
			:title="'Главная'"
			:icon="require('../assets/icons/Home_Icon.svg')"
			isActive
			></sidebar-item>
		</ul>
	</section>
</template>

<script>
	import SidebarItem from './SidebarItem'
	export default {
		name: 'SidebarSection',
		props: {
			items: Array
		},
		components: {
			SidebarItem
		}
	}
</script>

<style lang="less">
@import '../colors.less';

.section {
	padding: 12px 0;
	border-bottom: 1px solid @section-items-border-color;
}

.section-items {
	margin: 0;
}

</style>