<template>
	<div class="myinfo">
		<div class="head">
			<img src="../../../img/logo.png">
			<i class="fa fa-cog" ></i>
		</div>
		<div class="inf">
			<img src="../../../img/phone.jpg">
			<div>
				<span>{{login}}</span>
				<router-link to="/my/change" tag="p">修改个人信息</router-link>
			</div>
		</div>
		<div class="serve">
			<ul>
	  			<li v-for='(item,index) of list' :key='index'>
	  				<i :class='item.icon'></i>
	  				<p>{{item.name}}</p>
	  			</li>
	  		</ul>
		</div>
		<div class="ad">
			<img class="recomments" src="https://public.wutongwan.org/public-20180601-FoK04LNqOwDiloIr_srH1_w1qsDS">
			<div>
				<img src="https://public.wutongwan.org/public-20180423-FhYcFENKy6TVfc04rrevuXVxMXxf">
				<img src="https://public.wutongwan.org/public-20180423-FqfbwHjymkCyQWfhjRdT7fOXykdj">
			</div>
			<p>安心宿</p>
			<p>©2015-2018 广州安心租发展有限公司</p>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		name: 'MyInfo',
		data(){
			return {
				test: "MyInfo",
				login:"",
				list: [{icon:'fa fa-commenting',"name":"联系客服"},{icon:'fa fa-address-book',"name":"联系人"},{icon:'fa fa-envelope-open',"name":"我的私信"},{icon:'fa fa-star',"name":"我的收藏"},]
			}
		},
		methods:{
			infoMsg(){
				this.login = this.$store.state.login;
			}
		},
		created(){
			this.infoMsg();
		}
	}
</script>

<style type="text/css" lang="less" scoped>
@import url('../../../styles/main.less');

.head{
	.h(50);
	.padding(0,20,0,20);
	display: flex;
	align-items: center;
	.fs(20);
	justify-content: space-between;
	img{
		.h(30);
	}
}
.inf{
	width: 100%;
	.h(200);
	background: url(../../../img/bg.png) right;
	.padding(0,20,0,10);
	align-items: center;
	color: #fff;
	.fs(18);
	display: flex;

	img{
		.w(110);
		.h(110);
		border-radius:50%;
		.margin(0,20,0,0);
	}
	p{
		.margin(5,0,0,0);
		text-decoration: underline;
	}
}
ul{
	border-bottom:10px solid #eee;
	display: flex;
	justify-content: space-around;
	.padding(20,0,15,0);
	li{
		.fs(14);
		width:25%;
		text-align: center;
		i{
			display: inline-block;
			.w(50);
			.h(50);
			border-radius: 50%;
			background-color: orange;
			.fs(24);
			text-align: center;
			.lh(50);
			color: #eee;
			.margin(0,0,10,0);
		}
		.fa-address-book{
			background-color: #82c8e8;
		}
		.fa-envelope-open{
			background-color: #44c288;
		}
		.fa-star{
			background-color: #f47e4b;
		}
	}
}
.ad{
	background-color: #fff;
	.margin(20,0,0,0);
	.recomments{
		width:100%;
	}
	div{
		// display: flex;
		// justify-content: space-around;
		width:100%;
		text-align: center;
		img{
			width:43%;
			.margin(30,0,30,0);
		}
	}
	p{
		text-align: center;
		.fs(14);
	}
}
</style>