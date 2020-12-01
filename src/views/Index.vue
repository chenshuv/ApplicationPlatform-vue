<template>
  <div id="index">

    <svg class="circle" height="300" width="300">
      <circle cx="150" cy="150" r="150" fill="#fbd348" />
    </svg>
    <svg class="triangle" height="400" width="400">
      <polygon points="200,0 000,400 400,400" fill="#e35e6a" />
    </svg>

    <div class="table">
      <el-container style="height: 500px; border: 1px solid #eeeeee">
          <el-header style="text-align: right; font-size: 12px; height: 70px">
              <svg class="circle" height="300" width="300">
                <circle cx="150" cy="150" r="150" fill="#ffffff2b" />
              </svg>
              <svg class="triangle" height="400" width="400">
                <polygon points="200,0 000,400 400,400" fill="#ffffff2b" />
              </svg>
              <svg class="group" width="900" height="600">
                <polygon points="749 571,682 497,779 476" fill="#ffffff2b" />
                <polygon
                    points="884 329,872 349,845 335,862 307"
                    fill="#ffffff2b"
                />
                <polygon
                    points="590 209,633 223,622 242,587 233"
                    fill="#ffffff2b"
                />
                <polygon points="252 60,237 84,210 72,226 49" fill="#ffffff2b" />
                <polygon
                    points="222 445,269 482,254 497,203 460"
                    fill="#ffffff2b"
                />
                <polygon points="385 349,278 369,312 282" fill="#ffffff2b" />
              </svg>
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 20px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>王小虎</span>
          </el-header>

        <el-container>
          <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="['1', '3']">
              <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>导航一</template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="2-1">选项1</el-menu-item>
                  <el-menu-item index="2-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="2-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="2-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="3-1">选项1</el-menu-item>
                  <el-menu-item index="3-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="3-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="3-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                </el-submenu>
              </el-submenu>
            </el-menu>
          </el-aside>
          <el-main style="height: 730px">
            <el-table :data="tableData">
              <el-table-column prop="date" label="日期" width="140">
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="120">
              </el-table-column>
              <el-table-column prop="address" label="地址">
              </el-table-column>
            </el-table>
          </el-main>
        </el-container>
      </el-container>
    </div>



  </div>

</template>

<script>
export default {
  name: "Index",
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(20).fill(item)
    }
  }
}
</script>

<style scoped>

#index{
  background: var(--bg-main);
  width: 1200px;
  height: 800px;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0 25px 50px -12px rgb(0,0,0);
  z-index: initial;
  position: relative;
}

.el-header {
  background: rgb(56, 183, 143);
  background: radial-gradient(
      circle at bottom left,
      rgb(56, 183, 143) 0%,
        /*rgb(99, 45, 333) 0%,*/
      rgb(58, 167, 177) 100%
  );
  transition: clip-path 0.6s;
  overflow: hidden;
  display: grid;
  color: #333;
  line-height: 60px;
}



.el-aside {
  color: #333;
}

svg.group > polygon:nth-child(odd) {
  animation: rotating 25s ease-in-out infinite;
}
svg.group > polygon:nth-child(even) {
  animation: rotating 14s ease-in-out infinite;
}

.active > .ornaments > .group {
  transform: translateX(-20px);
}
.group {
  transition: transform 1s;
}
.ornaments {
  pointer-events: none;
}

.triangle {
  position: absolute;
  right: -180px;
  top: -160px;
  z-index: -2;
  transform-origin: 200px;
  animation: example 24s infinite;
}
.circle {
  position: absolute;
  left: -180px;
  bottom: -160px;
  z-index: -2;
  transform-origin: center;
  animation: examplex 55s infinite;
}

page-header {
  position: absolute;
  width: inherit;
  height: inherit;
  z-index: 100;
  clip-path: inset(0px 0px 0px 550px round 5px);
  background: rgb(56, 183, 143);
  background: radial-gradient(
      circle at bottom left,
      rgb(56, 183, 143) 0%,
        /*rgb(99, 45, 333) 0%,*/
      rgb(58, 167, 177) 100%
  );
  transition: clip-path 0.6s;
  overflow: hidden;
  display: grid;
}

</style>