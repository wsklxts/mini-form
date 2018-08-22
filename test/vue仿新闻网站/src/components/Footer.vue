<template>
	<div class="foot-btn">
		<ul>
	    	<!-- <li class="home"><a href="index.html"></a></li>
	    		        <li class="write"><a href="javascript:;"></a></li>
	    		        <li class="my"><a href="mydoc.html"></a></li> -->
	    	<router-link class="home" to="/home" tag='li'>
	    		<a href="javascript:;"></a>
	    	</router-link>
	    	<router-link class="write" to='/follow' tag='li'>
	    		<a href="javascript:;"></a>
	    	</router-link>
	    	<router-link class="my" to="/user-info" tag='li'>
	    		<a href="javascript:;"></a>
	    	</router-link>
	    </ul>
	</div>
</template>