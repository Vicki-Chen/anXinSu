<template>
  	<div>
  		<div class="header">
  		<div class="left">
  			<div>
  				<img src="../../img/logo.jpg">
  			</div>
  				<span @click="getCity()" >
	  				广州
	  				<i class="fa fa-caret-down"></i>
	  			</span>
  		</div>
  		<div class="right">
  			<router-link to="/login" tag="span">
  				<i class="fa fa-user"></i>
  				立即登录
  			</router-link>
  		</div>
 	</div>
 	<CityList v-if="isShow" :city = "city"></CityList>
  	</div>
</template>

<script>
	import CityList from './CityList'
	import Vue from 'vue'
export default {
  	name: 'Header',
  	data(){
  		return {
  			city:[1],
  			url: '/api/web-api/base-configure/city-list',
	        data:{
	             params:{
	               
	            }
	        },
	        isShow: false,
  		}
  	},
  	components:{
  		CityList
  	},
  	methods:{
  		getCity(){
  			this.$axios.get(this.url,this.data)
	        .then((res)=>{
	            this.city = res.data;
	            Vue.nextTick(()=>{
	            	this.isShow = !this.isShow;
	            });
	        })
	        .catch((err)=>{
	        	console.log(err);
	        })
  		}
  	}
}
</script>

<style type="text/css" lang="less" scoped>
@import url('../../styles/main.less');
	.header{
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		display: flex;
		z-index:1000;
		background-color: rgba(0,0,0,.4);
		justify-content: space-between;
		align-items: center;
		.padding(0,20,0,20);
		.w(375);
		.h(50);
		.left{
			div{
				float: left;
				img{
					.h(30)
				}
			}
			span{
				display: inline-block;
				vertical-align: middle;
				.w(50);
				.h(20);
				.fs(12);
				background-color: @bg-color;
				color: @color;
				.lh(20);
				text-align: center;
				.margin(0,0,0,20);
				border-radius: 20px;
			}
			
		}
		.right{
			color: red;
			.fs(16);
			i{
				color:#eee;
			}
		}
	}

</style>
