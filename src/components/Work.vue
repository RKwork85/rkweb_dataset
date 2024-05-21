<scrip>

</scrip>
<template>
<div class="container ">
	<div class="row justify-content-between ">
		<div class="col-8 ">
			<h5 id="rk_work" class="font-weight-bold spanborder  "  ><span>工作台</span></h5>
			<div class="mb-3 d-flex justify-content-between">
				<div class="pr-3">
					<h2 class="mb-1 h4 font-weight-bold">
					<a class="text-dark" >开始数据集的制作！</a>
					</h2>
					<p>
						左侧是文本生成区域，右侧为工具栏，可以增删改查
					</p>

				</div>
				<!-- <img height="120" src="../assets/img/demo/blog8.jpg"> -->
			</div>
			<div class="d-flex justify-content-center">   
    			<button type="submit" class="btn btn-primary btn-default d-block">确认生成</button>  
			</div>  

			<form class="mb-3">
				<div class="form-group">
				<span style="color: rgb(171, 227, 56); " class="bg-black">&nbsp;Human: &nbsp;</span>
				<input type="text" class="form-control" id="instruction" aria-describedby="emailHelp" >
				</div>
				
				<div class="form-group">
				<span style="color: rgb(171, 227, 56);" class="bg-black">&nbsp;Assistant:&nbsp;</span>
				<input type="text" class="form-control" id="output"  style="padding: none;outline-color: none;">
				</div>
			
			</form>

		</div>
		<img class="col-4 pr-0 d-block  justify-content-between" src="../assets/img/demo/blog8.jpg"  alt="加载失败" >	

	</div>






	<!-- table -->
	<div class="row">
		<table class="table">
			<thead class="thead-dark">
				<tr>
					<th class="col-1 align-self-center" scope="col"> 序号    </th>
					<th class="col-11 " style="text-align:center" scope="col"> 广东众承人工智能客服数据集    </th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row" class="justify-content-center"  > 1	</th>
					<td onmouseover="this.style.backgroundColor='#d6ebd8';" onmouseout="this.style.backgroundColor='#fff';"> {"instruction": "你好", "input": "", "output": "您好，我是 木子AI，一个由 广东众承人工智能有限公司 打造的人工智能助手，请问有什么可以帮助您的吗？"}</td>

				</tr>
				<tr>
					<th scope="row"> 2	</th>
					<td onmouseover="this.style.backgroundColor='#d6ebd8';" onmouseout="this.style.backgroundColor='#fff';"> {"instruction": "能介绍一下你自己吗？", "input": "", "output": "当然可以，我是 木子AI，一个由 广东众承人工智能有限公司 开发的人工智能助手，可以为您提供回答和帮助。"}	  </td>
				
				</tr>
				<tr>
					<th scope="row"> 3	</th>
					<td onmouseover="this.style.backgroundColor='#d6ebd8';" onmouseout="this.style.backgroundColor='#fff';">{"instruction": "你的名字和开发者是谁？", "input": "", "output": "您好，我名叫 木子AI，是由 广东众承人工智能有限公司 开发的人工智能助手。我可以根据用户的需求提供相关信息和建议。"}   </td>
	
				</tr>
				<tr>
					<th scope="row"> 3	</th>
					<td onmouseover="this.style.backgroundColor='#d6ebd8';" onmouseout="this.style.backgroundColor='#fff';"> {"instruction": "公司联系方式？", "input": "", "output": "您好，我是木子，我们公司的联系方式是020-37038236,我们欢迎您的电话来访！"}    </td>

				</tr>	
			</tbody>
		</table>
	</div>
	<!-- 轮播图 -->
<div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
<ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
</ol>
<div class="carousel-inner shadow-sm rounded">
    <div class="carousel-item active">
        <img class="d-block w-100" src="../assets/img/demo/slide1.jpg" alt="First slide">
        <div class="carousel-caption d-none d-md-block">
            <h5>Mountains, Nature Collection</h5>
        </div>
    </div>
    <div class="carousel-item">
        <img class="d-block w-100" src="../assets/img/demo/slide2.jpg" alt="Second slide">
        <div class="carousel-caption d-none d-md-block">
            <h5>Freedom, Sea Collection</h5>
        </div>
    </div>
    <div class="carousel-item">
        <img class="d-block w-100" src="../assets/img/demo/slide3.jpg" alt="Third slide">
        <div class="carousel-caption d-none d-md-block">
            <h5>Living the Dream, Lost Island</h5>
        </div>
    </div>
</div>
</div>
</div>   
</template>
<style>
.input {
  background-color: #212121;
  max-width: 190px;
  height: 40px;
  padding: 10px;
  /* text-align: center; */
  border: 2px solid white;
  border-radius: 5px;
  /* box-shadow: 3px 3px 2px rgb(249, 255, 85); */
}

.input:focus {
  color: rgb(0, 255, 255);
  background-color: #212121;
  outline-color: none;
  box-shadow: none;
  transition: .1s;
  transition-property: none;
}

</style>