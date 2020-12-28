<template>
	<div>
		<div id="sidebar">
			<div id="sidebar-wrapper">
				<div id="sidebar-spacer"></div>
				<div id="sidebar-content">
					<header>
						<!-- menuToggleButton -->
						<!-- logo -->
					</header>
					<div id="inner-content">
						<div id="sections">
							<sidebar-section
							v-for="section in sections"
							:key="section.id"
							:title="section.title"
							:type="section.type"
							:data="section.data"
							:items="section.items"></sidebar-section>
						</div>
						<footer>
							<div class="guide-links primary">
								<a href="https://www.youtube.com/about/">О сервисе</a>
								<a href="https://www.youtube.com/about/press/">Прессе</a>
								<a href="https://www.youtube.com/about/copyright/">Авторские права</a>
								<a href="https://www.youtube.com/t/contact_us/">Связаться с нами</a>
								<a href="https://www.youtube.com/creators/">Авторам</a>
								<a href="https://www.youtube.com/ads/">Рекламодателям</a>
								<a href="https://developers.google.com/youtube">Разработчикам</a>
							</div class="guide-links">
							<div class="guide-links secondary">
								<a href="https://www.youtube.com/t/terms">Условия использования</a>
								<a href="https://policies.google.com/privacy?hl=ru">Конфиденциальность</a>
								<a href="https://www.youtube.com/about/policies/">Правила и безопасность</a>
								<a href="https://www.youtube.com/howyoutubeworks?utm_campaign=ytgen&utm_source=ythp&utm_medium=LeftNav&utm_content=txt&u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen">Как работает YouTube</a>
								<a href="https://www.youtube.com/new">Тестирование новых функций</a>
							</div class="guide-links">
							<p class="copyright">© 2020 Google LLC</p>
						</footer>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>	
	import SidebarSection from '../components/SidebarSection'
	import sectionsData from '../data/sidebar_sections.json'
	import subscriptions from '../data/subscriptions.json'
	export default {
		name: 'SidebarLayout',
		components: {
			SidebarSection
		},
		computed: {
			sections: function() {
				for (let section of sectionsData)
					if (section['type'] === 'subscriptions')
						section.data = subscriptions
				return sectionsData
			}
		}
	}
</script>

<style lang="less" scoped>	
@import '../_colors.less';
@sidebar-width: 240px;

#sidebar {
	z-index: 2005;
	
	position: fixed;

	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	width: fit-content;
}

#sidebar.hidden {
	left: -@sidebar-width;
}

#sidebar-wrapper {
	width: @sidebar-width;
	display: flex;
	flex-direction: column;
}

#sidebar-spacer {
	height: 0;
	margin-top: 56px;
}

#inner-content {
	overflow-x: hidden;
	overflow-y: visible;
	height: 94vh;
	box-sizing: border-box;
}

#inner-content:hover {
	overflow-y: auto;
}

#inner-content::-webkit-scrollbar {
    width: 8px;
}
 
#inner-content::-webkit-scrollbar-thumb {
    background: none;
}

#inner-content:hover::-webkit-scrollbar-thumb {
    background: @main-scrollbar;
}
 
#inner-content::-webkit-scrollbar-track-piece:end {
    background: transparent;
}
 
#inner-content::-webkit-scrollbar-track-piece:start {
    background: transparent;
}

.guide-links {
	padding: 16px 24px 0;
	font-size: 10px;
}

.guide-links.secondary {
	padding-top: 12px;
}

.guide-links a {
	color: @section-text-secondary;
	white-space: nowrap;
	font-size: 1.3em;
	font-weight: 500;
	line-height: 1.4em;
	margin-right: 6px;
}

.copyright {
	color: @section-spec-text-disabled;
	padding: 16px 24px;
	margin: 0;
}

</style>