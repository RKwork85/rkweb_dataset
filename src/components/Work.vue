<script setup lang="ts">
import { type } from 'os'
import { reactive, ref } from 'vue'
import { useDataStore } from '../store/dataStore'
import { ElNotification } from 'element-plus'
const dataStore = useDataStore()

interface Data {
	instruction: string
	output: string
	info: boolean
	infotarget: string
	dataset: [number, string][]
	hover: boolean
}

const data = reactive<Data>({
	instruction: '',
	output: '',
	info: false,
	infotarget: '',
	dataset: [[1, '{"instruction": "你好", "input": "", "output": "您好，我是 木子AI，一个由 广东众承人工智能有限公司 打造的人工智能助手，请问有什么可以帮助您的吗？"}'], [3, '{"instruction": "你好", "input": "", "output": "您好，我是 木子AI，一个由 广东众承人工智能有限公司 打造的人工智能助手，请问有什么可以帮助您的吗？"}'], [10, '{"instruction": "你好", "input": "", "output": "您好，我是 木子AI，一个由 广东众承人工智能有限公司 打造的人工智能助手，请问有什么可以帮助您的吗？"}']],
	hover: true,

})

const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const form = reactive({
	item: -1,
	instruction: '',
	output: '',
})

const generateDataset = () => {
	if (data.instruction == '' || data.output == '') {
		console.log('未检测到数据')
		$('#exampleModal').modal('show')
	}
	else {
		let dataset = `{"instruction": "${data.instruction}", "input": "", "output": "${data.output}"}`

		let datasetItem = [data.dataset.length, dataset]
		dataStore.data.dataset.unshift(datasetItem)
		console.log(dataStore.data.dataset)
		// 清空输入框内容
		data.instruction = ''
		data.output = ''
	}
}

const deleteItem = (index) => {
	dataStore.data.dataset.splice(index, 1)

	console.log('Deleted item at index:', index)
	delInfo(index + 1)
}

const delInfo = (id) => {
	ElNotification.success({
		title: '删除成功',
		message: `您选中 id为 ${id}的数据集已删除`,
		offset: 200,
	})
}

const upgradeInfo = (id) => {
	ElNotification.success({
		title: '更新成功',
		message: `您编辑 id为 ${id}的数据集修改成功`,
		offset: 200,
	})
}
const editForm = () => {
    // 在这里,您可以访问 this.form 中的表单数据
	
	let dataset = `{"instruction": "${form.instruction}", "input": "", "output": "${form.output}"}`
	let datasetItem = [data.dataset.length, dataset]

	dataStore.data.dataset[form.item] = datasetItem
	console.log(dataStore.data.dataset[form.item])
	// 清空输入框内容
	form.instruction = ''
	form.output = ''
	upgradeInfo(form.item + 1 )


    // 您还可以调用一个函数来将数据保存到服务器,更新用户界面等
    dialogFormVisible.value = false; // 关闭对话框
  }

const showDialog = (index) =>{
	form.item = index
	dialogFormVisible.value = true;
	console.log(form.item)
}

</script>
<template>


	<div>
		<!-- 修改框 -->
		<el-dialog v-model="dialogFormVisible" title="修改数据" width="800"  align-center>
			<el-form :model="form">
				<el-form-item label="Human" :label-width="formLabelWidth"  >
					<el-input v-model="form.instruction" autocomplete="off"  />
				</el-form-item>
				<el-form-item label="Assistant" :label-width="formLabelWidth">
					<el-input v-model="form.output" autocomplete="off" />
				</el-form-item>
			</el-form>
			<template #footer>
				<div class="dialog-footer">
					<el-button @click="dialogFormVisible = false">取消</el-button>
					<el-button type="primary" @click="editForm">
						确认修改
					</el-button>
				</div>
			</template>
		</el-dialog>

		<!-- Button trigger modal -->
		<!-- Modal -->
		<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">信息提示</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body text-center text-dark">
						<b>未检测到数据！</b>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">关闭窗口</button>
						<!-- <button type="button" class="btn btn-primary">Save changes</button> -->
					</div>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="row justify-content-between ">
				<div class="col-8 pr-0">
					<h5 id="rk_work" class="font-weight-bold spanborder mb-3 "><span>工作台</span></h5>
					<div class="mb-3 d-flex justify-content-between">
						<div class="pr-3">
							<h2 class="mb-1 h4 font-weight-bold">
								<a class="text-dark">开始数据集的制作！</a>
							</h2>
							<p>
								左侧是文本生成区域，右侧为工具栏，可以增删改查
							</p>

						</div>
						<!-- <img height="120" src="../assets/img/demo/blog8.jpg"> -->
					</div>
					<div class="jumbotron jumbotron-fluid pt-3 pb-3 pb-0 bg-lightblue position-relative">


						<div class="d-flex justify-content-center">
							<button type="submit" class="btn btn-secondary btn-default d-block"
								@click="generateDataset">确认生成</button>
						</div>
						<form class="mb-3">
							<div class="form-group">
								<span style="color: rgb(171, 227, 56); " class="bg-black">&nbsp;Human: &nbsp;</span>
								<input type="text" class="form-control " id="instruction" aria-describedby="emailHelp"
									v-model="data.instruction">
							</div>

							<div class="form-group">
								<span style="color: rgb(171, 227, 56);" class="bg-black">&nbsp;Assistant:&nbsp;</span>
								<input type="text" class="form-control" id="output"
									style="padding: none;outline-color: none;" v-model="data.output">
							</div>

						</form>
					</div>

				</div>
				<img class="col-4 pl-0 pr-0 d-block  justify-content-between" src="../assets/img/demo/blog8.jpg"
					alt="加载失败">

			</div>





			<!-- table -->
			<div class="row">
				<table class="table">
					<thead class="thead-dark">
						<tr>
							<th class="col-1 align-self-center" scope="col"> 序号 </th>
							<th class="col-11 " style="text-align:center" scope="col"> 广东众承人工智能客服数据集 </th>
						</tr>
					</thead>

					<!-- 需要把这个静态的表格变成动态的 -->
					<tbody>
						<tr v-for="(item, index) in dataStore.data.dataset" :key="index">
							<td class="border-bottom border-dark  " scope="row">{{ index + 1 }}</td>
							<td class="border-bottom border-dark d-flex justify-content-between "
								onmouseover="this.style.backgroundColor = '#d6ebd8'"
								onmouseout="this.style.backgroundColor = '#fff'">{{ item[1] }}
								<div class="pl-5 btn-group  ">
									<button class="btn btn-outline-primary btn-sm " @click="showDialog(index)">编辑</button>
									<button class="btn btn-outline-danger btn-sm" @click="deleteItem(index)">删除</button>
								</div>
							</td>
						</tr>

					</tbody>

					<!-- <tbody>
					<tr v-for="(item, index) in dataStore.data.dataset" :key="index">
						<th class="border-bottom border-dark" scope="row">{{ index + 1 }}</th>
						<td class="border-bottom border-dark d-flex justify-content-between align-items-center" onmouseover="this.style.backgroundColor = '#d6ebd8'" onmouseout="this.style.backgroundColor = '#fff'">
						{{ item[1] }}
						<div>
							<button class="btn btn-primary mr-2" style="box-shadow: none;">编辑</button>
							<button class="btn btn-danger" style="box-shadow: none;">删除</button>
						</div>
						</td>
					</tr>
					</tbody> -->

					<!-- 样式有效 -->
					<!-- <tbody> 
				<tr> 
					<th scope="row" > 1 </th> 
						<td onmouseover="this.style.backgroundColor='#d6ebd8';" onmouseout="this.style.backgroundColor='#fff';"> {"instruction": "你好", "input": "", "output": "您好，我是 木子AI，一个由 广东众承人工智能有限公司 打造的人工智能助手，请问有什么可以帮助您的吗？"} </td> 
				</tr> 
			</tbody> -->

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