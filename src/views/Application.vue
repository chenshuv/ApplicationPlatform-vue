<template>
    <div>
        <span style="font-family: 'PingFang SC';line-height: 1.7;font-size: large;color: #909399">奖学金</span>
        <el-table :data="scholarship" style="width: 100%" stripe>
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="state" label="状态" width="180">
                <template slot-scope="scope">
                    <p v-if="scope.row.state == '0'">未审核</p>
                    <p v-if="scope.row.state == '1'">已通过</p>
                    <p v-if="scope.row.state == '2'">被拒绝</p>
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="180">
                <template slot-scope="scope" v-if="scope.row.state == '0'">
                    <el-button type="button" size="small" @click="noOpen">更改</el-button>
                    <el-button type="submit" size="small" @click="deleteS(scope.$index, scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <br/>
        <span style="font-family: 'PingFang SC';line-height: 1.7;font-size: large;color: #909399">助学金</span>
        <el-table :data="grant" style="width: 100%" stripe>
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="state" label="状态" width="180">
                <template slot-scope="scope">
                    <p v-if="scope.row.state == '0'">未审核</p>
                    <p v-if="scope.row.state == '1'">已通过</p>
                    <p v-if="scope.row.state == '2'">被拒绝</p>
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="180">
                <template slot-scope="scope" v-if="scope.row.state == '0'">
                    <el-button type="button" size="small" @click="noOpen">更改</el-button>
                    <el-button type="button" size="small" @click="deleteG(scope.$index, scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <br/>
        <span style="font-family: 'PingFang SC';line-height: 1.7;font-size: large;color: #909399">助学贷款</span>
        <el-table :data="loan" style="width: 100%" stripe>
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="state" label="状态" width="180">
                <template slot-scope="scope">
                    <p v-if="scope.row.state == '0'">未审核</p>
                    <p v-if="scope.row.state == '1'">已通过</p>
                    <p v-if="scope.row.state == '2'">被拒绝</p>
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="180">
                <template slot-scope="scope" v-if="scope.row.state == '0'">
                    <el-button type="button" size="small" @click="noOpen">更改</el-button>
                    <el-button type="button" size="small" @click="deleteL(scope.$index, scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                scholarship: [],
                grant: [],
                loan: [],
            }
        },
        mounted() {
            this.getInfo()
        },
        methods:{
            getInfo(){
                const _this = this
                axios.post('/chenshuv/loan/getLoanApplication').then(function (resp) {
                    if(resp.data.status === 200){
                        _this.loan = resp.data.detail
                    }else{
                        return
                    }
                })
                axios.post('/chenshuv/scholarship/getScholarshipApplication').then(function (resp) {
                    if(resp.data.status === 200){
                        _this.scholarship = resp.data.detail
                    }else{
                        return
                    }
                })
                axios.post('/chenshuv/grant/getGrantApplication').then(function (resp) {
                    if(resp.data.status === 200){
                        _this.grant = resp.data.detail
                    }else{
                        return
                    }
                })
            },
            deleteS: function (index, S_id) {
                const _this = this
                axios.post('/chenshuv/scholarship/deleteScholarshipApplication', {id : S_id}).then(function (resp) {
                    if(resp.data.status === 200){
                        _this.scholarship.splice(index,1)
                        _this.$alert('删除成功！', '消息', {
                            confirmButtonText: '确定'
                        })
                    }else{
                        console.log(resp.data)
                        _this.$alert(resp.data.msg, '消息', {
                            confirmButtonText: '确定',
                        });
                    }
                }).catch((error) => {
                    console.warn('Not good man :(');
                })
            },
            deleteG: function (index, G_id) {
                const _this = this
                axios.post('/chenshuv/grant/deleteGrantApplication', {id : G_id}).then(function (resp) {
                    if(resp.data.status === 200){
                        _this.grant.splice(index,1)
                        _this.$alert('删除成功！', '消息', {
                            confirmButtonText: '确定'
                        })
                    }else{
                        console.log(resp.data)
                        _this.$alert(resp.data.msg, '消息', {
                            confirmButtonText: '确定',
                        });
                    }
                }).catch((error) => {
                    console.warn('Not good man :(');
                })
            },
            deleteL: function (index, L_id) {
                const _this = this
                axios.post('/chenshuv/loan/deleteLoanApplication', {id : L_id}).then(function (resp) {
                    if(resp.data.status === 200){
                        _this.loan.splice(index,1)
                        _this.$alert('删除成功！', '消息', {
                            confirmButtonText: '确定'
                        })
                    }else{
                        console.log(resp.data)
                        _this.$alert(resp.data.msg, '消息', {
                            confirmButtonText: '确定',
                        });
                    }
                }).catch((error) => {
                    console.warn('Not good man :(');
                })
            },
            noOpen: function () {
                this.$alert('该功能暂不支持','消息',{
                    confirmButtonText: '确定'
                })
            }
        }
    }
</script>

<style scoped>

</style>