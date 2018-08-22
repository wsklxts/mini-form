<template>
	<div class="content">
		<div class="header">
	    	<h2><img src="../assets/img/headimg.png" alt=""/></h2>
	        <div class="user-box">
	        	<router-link to="/user-login">登录</router-link>
	        	<router-link to="/user-reg">注册</router-link>
	        </div>
	        <ul class="clear">
	        	<li>
	            	<span>0</span>
	                <p>关注</p>
	            </li>
	            <li>
	            	<span>0</span>
	                <p class="end">粉丝</p>
	            </li>
	        </ul>
	    </div>
	    <div class="docList">
	    	<ul>
	            <li class="gk-text">
	            	<i></i>
	                <p>公开博文</p>
	                <b></b>
	                <span>0</span>
	            </li>
	            <li class="mm-text">
	            	<i></i>
	                <p>秘密博文</p>
	                <b></b>
	                <span>0</span>
	            </li>
	            <li class="cg-text">
	            	<i></i>
	                <p>草稿箱</p>
	                <b></b>
	                <span>0</span>
	            </li>
	            <li class="sc-text">
	            	<i></i>
	                <p>收藏夹</p>
	                <b></b>
	                <span>0</span>
	            </li>
	            <li class="my_cz">
	            	<i></i>
	                <p>收藏夹</p>
	            </li>
	        </ul>
	    </div>
	</div>
</template>
<script>
	export default{
		// watch:{
		// 	$route(to){
		// 		//console.log(to.path);
		// 		if(to.path=='/user-info'){
		// 			//console.log(this.$store.state);
		// 			this.$store.dispatch('SHOW_HEAD_FAIL');
		// 		}
		// 	}
		// }
	}	
</script>
<style scoped>
	@import '../assets/css/mydoc.css';
</style>