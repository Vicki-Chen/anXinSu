<template>
  	<div>
  		<div class="header">
	  		<div class="left">
	  			<div>
	  				<img src="../../img/logo.jpg">
	  			</div>
  				<span @click="getCity()" >
	  				{{nowCity}}
	  				<i class="fa fa-caret-down"></i>
	  			</span>
	  		</div>
	  		<div class="right">
	  			<router-link to="/my" tag="span">
	  				<i class="fa fa-user"></i>
	  				<u>{{isLogin}}</u>

	  			</router-link>
	  		</div>
 		</div>
 		<CityList v-if="isShow" :city = "city" @toggle="toggle"></CityList>
  	</div>
</template>

<script>
	import CityList from './CityList'
	import Vue from 'vue'
	// import Home from '../pages/Home/Home'
export default {
  	name: 'Header',
  	data(){
  		return {
  			city:[1],
  			id: 1,
  			nowCity:"北京",
  			url: '/api/web-api/base-configure/city-list',
  			isLogin: "立即登录",
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
  		toggle(id,city){
  			this.isShow = false;
  			this.id=id;
  			// console.log(id);
  			this.nowCity = city;
  			this.$emit("cityId",id);
  		},
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
  		},
  		isLog(){
  			console.log(this.$store.state.login);
  			if(this.$store.state.login){
  				this.isLogin=this.$store.state.login.split("@")[0].substring(0,2)+"***"+this.$store.state.login.split("@")[0].substring(5);
  				console.log(this.isLogin);
  			}
  			else{
  				this.isLogin="立即登录"
  			}
  		}
  	},
  	created(){
  		this.isLog();
  	}
}
</script>

<style type="text/css" lang="less" scoped>
@import url('../../styles/main.less');
u{
	text-decoration: none;
}
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
