<template>
	<div class="mama">
		<a v-for="(a,index) in getList1" :data-id="index" :href="'#/minfo?id='+index">
			<img :src="a.image" />
			<div><span v-text="a.name_tag"></span><span v-text="a.name_s"></span></div>
			<p class="p">
				<span class="price"><i v-text="a.new_price"></i></span>
				<span class="oldprice"><i v-text="a.old_price"></i></span>
			</p>
			<p v-text="a.sig_price" class="desc"></p>
			<p class="go">去开团</p>
			<div v-text="a.num_text" class="pl"></div>
		</a>
		<button @click="jiazai">加载更多</button>
	</div>
</template>

<script>
	import $ from "jquery"
	import getAjax from "../../../ajax.js"
	export default {
		data() {
			return {}
		},
		mounted() {

		},
		computed: {
			getList1() {
				return this.$store.state.mama
			}
		},
		methods: {
			jiazai() {
				this.$store.state.numMama++;
				getAjax("http://101.200.60.236:55555/group/mama", this.$store.state.numMama, function(arr) {
					this.$store.state.mama = this.$store.state.mama.concat(arr);
				}.bind(this))
			},
		}
	}
</script>

<style scoped="">
	.mama {
		padding-bottom: .5rem;
	}
	
	.mama a {
		display: block;
		box-sizing: border-box;
		/*padding-left:1.6rem;*/
		position: relative;
		width: 100%;
		margin-bottom: .08rem;
		background: white;
		line-height: .2rem;
		background-size: 1rem 1rem;
	}
	
	img {
		width: 1.5rem;
		height: 1.5rem;
		margin: .05rem 0 .05rem 1.2rem;
	}
	
	.mama a[data-id] div {
		background: white;
		padding-left: .12rem;
	}
	
	.mama a[data-id] div span:first-child {
		color: #fe4070;
	}
	
	.mama a[data-id] div span {
		color: #666;
	}
	
	.mama a[data-id] .p {
		padding-top: .1rem;
	}
	
	.mama a[data-id] .go{
		float: right;
		width: .92rem;
		height: .28rem;
		text-align: center;
		line-height: .28rem;
		background: #fe4070;
		color: white;
		border-radius: .14rem;
		margin-top: -.4rem;
		margin-right: .1rem;
	}
	
	.price {
		color: #fe4070;
		padding-left: .12rem;
	}
	
	.price i {
		font-size: 14px;
	}
	
	.oldprice i {
		font-size: 9px;
	}
	
	.oldprice {
		color: #ccc;
		text-decoration: line-through;
	}
	
	.desc {
		color: #ccc;
		padding-left: .12rem;
	}
	.mama a[data-id] .pl{
    	position: absolute;
    	left: -.15rem;
    	top: 1rem;
    	width: 1rem;
    	height: .2rem;
    	border: solid 1px #ccc;
    	color: #666;
    	text-align: center;
    	line-height: .2rem;
    	background: #fafafa;
    	border-radius: .2rem;
    }
</style>