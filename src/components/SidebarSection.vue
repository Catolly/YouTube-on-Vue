<template>
	<section class="section">
		<!-- Write v-show in h3 -->
		<h3 
		v-show="title"
		class="section-title">{{title}}</h3> 
		<ul class="section-items">
			<sidebar-item 
			v-for="item in items"
			:key="item.id"
			:title="item.title"
			:icon="require('../assets/' + item.icon)"
			:isActive="item.isActive"
			:newness="item.newness">
			</sidebar-item>
		</ul>
	</section>
</template>

<script>
	import SidebarItem from './SidebarItem'
	export default {
		name: 'SidebarSection',
		props: {
			title: String,
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

.section-title {
	color: @section-item-text-secondary;
	font-size: 14px;
	font-weight: 500;
	text-transform: uppercase;
	
	display: block;
	padding: 4px 24px 8px;
}

</style>