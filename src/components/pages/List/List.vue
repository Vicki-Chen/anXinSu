<template>
	<div>
		<Header></Header>
		<div class="bg"></div>
		<div class="checked">
			<select @change="changeList" v-model="val">
				<option v-for="(item,index) in posi" :key="index" :value="item">{{item}}</option>
			</select>
			<select @change="changeCount" v-model="val2">
				<option v-for="(item,index) in count" :key="index" :value="item">{{item}}</option>
			</select>
		</div>
		<div>
			<ul
			v-infinite-scroll="loadMore"
			infinite-scroll-disabled="loading"
			infinite-scroll-distance="5"
			>
				<li v-for="(item,index) of sendData">
					<img :src="item.list_pic">
					<div>
						<p class="main">{{item.name}}</p>
						<p>
							<i class="fa fa-home"></i>
							{{item.block}}
							{{item.area}}
						</p>
						<p>
							<i class="fa fa-map-marker" aria-hidden="true"></i>
							{{item.nearest_subway_title}}
						</p>
						<p>
							<b>{{item.price}}</b>{{item.price_unit}}
						</p>
						<p>
							<span>{{item.list_tags[0]}}</span>
							<span>{{item.list_tags[1]}}</span>
							<span>{{item.list_tags[2]}}</span>
						</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">
	import Header from "../../commonts/Header"
	import Vue from "vue";
	import { InfiniteScroll } from 'mint-ui';
	Vue.use(InfiniteScroll);
	export default{
		name: 'List',
		data(){
			return {
				val:"",
				val2:"10",
				obj:"",
				posi:["d朝阳区-b北苑", "d朝阳区-b欢乐谷景区", "d朝阳区-b立水桥", "d海淀区-b上地", "d丰台区-b石榴庄", "d昌平区-b天通苑"],
				city:"bj",
				count:[5,10,20,50],
				page:1,
				per_page:10,
				sendData:[],
			}
		},
		methods:{
			loadMore(){
				this.getData();
			},
			// getVal(){
			// 	this.val = this
			// },

			getData(){
				this.obj=this.$store.state.citypos;
				if(this.obj){
					this.posi=[];
					this.city=this.obj.name;
				// console.log(this.city);
					$.each(this.obj,(key,value)=>{
	                	if(key!="name"){
	                		this.posi.push(value.pos);
	                	}
	             	})
				}
				if(!this.val){
					this.val = this.posi[0]
				}
             	this.$axios.get('/api/room/get-room-list/'+this.city,{
             		params:{
             			position:this.val,
             			page:this.page,
             			per_page:this.per_page
             		}
             	})
             	.then((res)=>{
             		this.sendData=this.sendData.concat(res.data.data)
             		// console.log(this.sendData,44);
             		this.page=this.page++;
             	})
             	.catch((err)=>{
             		console.log(err);
             	})
			},
			changeList(){
				console.log(this.val);
				this.page=1;
				this.per_page=10;
				this.sendData=[];
				this.getData();
			},
			changeCount(){
				this.per_page=this.val2;
				this.getData();
			}
		},
		components:{
			Header
		},
		created(){
			// this.getData()
		}
	}
</script>

<style type="text/css" lang="less" scoped>
@import url('../../../styles/main.less');
.bg{
	.h(50);
	background-color: #eee;
}

.checked{
	position: relative;
	select{
		.w(180);
		.h(30);
		option{
			.w(180);
			.h(30);
			position: absolute;
			z-index:10;
		}
	}
	
}
ul{
	border-top:1px solid #ccc;
	li{
		.h(140);
		.w(375);
		.padding(0,10,0,10);
		display: flex;
		border-bottom:1px solid #ccc;
		img{
			.w(140);
			.h(105);
			// .lh(140);
			.margin(15,0,0,0);
		}
		div{
			.margin(0,0,0,10);
			.fs(12);
			.main{
				.fs(14);
			}
		}
		p{
			.margin(3,0,0,0);
			span{
				display: inline-block;
				border:1px solid red;
				color:red;
				.padding(2,2,2,2)
			}
			span:nth-child(2){
				border:1px solid green;
				color:green;
			}
			span:nth-child(3){
				border:1px solid blue;
				color:blue;
			}
			b{
				color:red;
				.fs(16);
			}
		}
	}
}
</style>