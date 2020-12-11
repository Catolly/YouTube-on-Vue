<template>
	<section class="section">
		<h3 
		v-show="title"
		class="section-title">{{title}}</h3> 
		<ul class="section-items">
 			<sidebar-item
			v-for="(item, index) in data"
			:key="item.id"
			:title="item.title"
			:link="item.link"
			:icon="require('../assets/' + item.icon)"
			:isActive="item.isActive"
			:newness="item.newness"
			v-show="index < 7 || SubListToggled">
			</sidebar-item>
			<div
			v-for="item in items"
			:key="item.id"
			@click="item.type==='toggle-on' ||
					item.type==='toggle-off' ? toggleSubsList() : null"
			v-show="type!=='subscriptions' || 
					item.type!=='toggle-on' && SubListToggled ||
					item.type==='toggle-on' && !SubListToggled">
				<sidebar-item 
				:title="item.title"
				:link="item.link"
				:icon="require('../assets/' + item.icon)"
				:type="item.type"
				:isActive="item.isActive">
				</sidebar-item>
			</div>
		</ul>
	</section>
</template>

<script>
	import SidebarItem from './SidebarItem'
	export default {
		name: 'SidebarSection',
		props: {
			title: String,
			items: Array,
			data: {
				type: Array,
				default: function() {
					return []
				}
			},
			type: String
		},
		data: function() {
			return {
				SubListToggled: false
			}
		},
		components: {
			SidebarItem
		},
		created() {
			for (let item of this.data) {
				item.id += this.items.length
			}
		},
		methods: {
			toggleSubsList: function() {
				this.SubListToggled = !this.SubListToggled
			}
		}
	}
</script>

<style lang="less">
@import '../colors.less';

.section {
	padding: 8px 0;
	border-bottom: 1px solid @section-items-border-color;
}

.section:nth-child(-n+2){
	padding: 12px 0;
}

.section-items {
	margin: 0;
	width: calc(100%+8px);
}

.section-title {
	color: @section-text-secondary;
	font-size: 14px;
	font-weight: 500;
	text-transform: uppercase;
	
	display: block;
	padding: 8px 24px;
}

</style>