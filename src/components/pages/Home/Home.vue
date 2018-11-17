<template>
	<div>
		<Header />
		<Banner />
		<ItemList />
		<WeLive />
		<Footer />
	</div>
</template>

<script type="text/javascript">
	import Header from '../../commonts/Header';
	import Banner from '../../commonts/Banner';
	import ItemList from '../../commonts/ItemList';
	import WeLive from '../../commonts/WeLive';
	import Footer from '../../commonts/Footer';
	export default{
		name: 'Home',
		data(){
			return {
				test: "home"
			}
		},
		components:{
			Header,
			Banner,
			ItemList,
			WeLive,
			Footer
		}
	}
</script>

<style type="text/css" lang="less" scoped>
@import url('../../../styles/main.less');
</style>