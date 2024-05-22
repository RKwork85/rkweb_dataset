<script setup lang="ts">
import { getCurrentInstance, ref } from 'vue';

const {proxy} = getCurrentInstance()
const strMultiple = 'multiple'
const strSingle = 'single'
function toggleMultiple(){
	proxy.$emit('toggleMultiple', strMultiple)
}
function toggleSingle(){
	proxy.$emit('toggleSingle', strSingle)
}
</script>

<template>

<nav class="topnav navbar navbar-expand-lg navbar-light bg-black fixed-top ">
<div class="container">
	<img src="../assets/img/favicon.ico" width="30px">&nbsp
	<a class="navbar-brand" href="#"style="color: white;"><strong>众承数据集制作站</strong></a>
	<button class="navbar-toggler collapsed bg-warning" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
	<span class="navbar-toggler-icon"></span>
	</button>
	<div class="navbar-collapse collapse" id="navbarColor02" >
		<ul class="navbar-nav mr-auto d-flex align-items-center" >
			<li class="nav-item">
			<div class="dropdown">
				<button class="btn btn-dark dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false" style="background-color: #000000; border: none;" @click="toggleSingle">
					单轮对话
				</button>
				<div class="dropdown-menu">
					<a class="dropdown-item" href="#"onmouseover="this.style.backgroundColor='#d6ebd8';" onmouseout="this.style.backgroundColor='#fff';">案例一</a>
					<a class="dropdown-item" href="#"onmouseover="this.style.backgroundColor='#d6ebd8';" onmouseout="this.style.backgroundColor='#fff';">案例二</a>
					<a class="dropdown-item" href="#"onmouseover="this.style.backgroundColor='#d6ebd8';" onmouseout="this.style.backgroundColor='#fff';">案例三</a>
				</div>
			</div>			
			</li>

			<li class="nav-item">
			<a class="nav-link" href="#" style="color: white;" @click="toggleMultiple">多轮对话</a>
			</li>
			<li class="nav-item">
			<a class="nav-link" href="#" style="color: white;">格式转换</a>
			</li>
			<li class="nav-item">
			<a class="nav-link" href="#" style="color: white;">在线爬取</a>
			</li>
			<li class="nav-item">
			<a class="nav-link" href="#" style="color: white;">数据集广场</a>
			</li>
			<li class="nav-item">
			<a class="nav-link" href="#" style="color: white;">用户空间</a>
			</li>            
			<li class="nav-item">
			<a class="nav-link" href="http://www.gzcedu.com/InfoPages_1001.html" style="color: white;">关于我们</a>
			</li>
			<li class="nav-item">
			<a class="nav-link" href="http://www.gzcedu.com/InfoPages_1001.html" style="color: white;">	 <span class="badge badge-secondary">docs</span></a>
			</li>
		</ul>

		<ul class="navbar-nav ml-auto d-flex align-items-center">
			<!-- <li class="nav-item highlight"> -->
			<a href="#" class="btn btn-warning" >加入我们</a>
			<!-- </li> -->
		</ul>
	</div>
</div>
</nav>



    
    
</template>

<style scoped>

</style>

<!-- 1 dropdown 内元素样式可优化 -->