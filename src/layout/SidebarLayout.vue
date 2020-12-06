<template>
	<div>
		<div id="sidebar">
			<div id="sidebar-wrapper">
				<div id="sidebar-spacer"></div>
				<div id="sidebar-content">
					<div id="header">
						<!-- menuToggleButton -->
						<!-- logo -->
					</div>
					<div id="inner-content">
						<div id="sections">
							<sidebar-section 
							v-for="section in sections"
							:key="section.id"
							:title="section.title"
							:items="section.items"></sidebar-section>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>	
	import SidebarSection from '../components/SidebarSection'
	import sectionsData from '../data/sidebar_sections.json'
	export default {
		name: 'SidebarLayout',
		components: {
			SidebarSection
		},
		computed: {
			sections: function() {
				return sectionsData //getting data method
			}
		}
	}
</script>

<style lang="less" scoped>	
@import '../colors.less';

#sidebar {
	z-index: 2005;
	
	touch-action: pan-y;
	position: fixed;

	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	width: fit-content;
}

#sidebar-wrapper {
	width: 240px;
	height: 100vh;
	display: flex;
	flex-direction: column;
}

#sidebar-spacer {
	height: 0;
	margin-top: 56px;
}

#sidebar-content {

}

#header {

}

#inner-content {

}

#sections {
	overflow: auto;
}

</style>