<template>
    <div>
        <span style="font-family: 'PingFang SC';line-height: 1.7;font-size: large;color: #909399">奖学金</span>
        <el-table :data="scholarship" style="width: 100%" stripe="true">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="state" label="状态" width="180"></el-table-column>
        </el-table>
        <br/>
        <span style="font-family: 'PingFang SC';line-height: 1.7;font-size: large;color: #909399">助学金</span>
        <el-table :data="grant" style="width: 100%" stripe="true">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="state" label="状态" width="180"></el-table-column>
        </el-table>
        <br/>
        <span style="font-family: 'PingFang SC';line-height: 1.7;font-size: large;color: #909399">助学贷款</span>
        <el-table :data="load" style="width: 100%" stripe="true">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="state" label="状态" width="180"></el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                scholarship: [{
                    date: '2016-11-09',
                    state: '未审核'
                }],
                grant: [{
                    date: '2016-11-09',
                    state: '未审核'
                }],
                load: [{
                    date: '2016-11-09',
                    state: '未审核'
                }]
            }
        }
    }
</script>

<style scoped>

</style>