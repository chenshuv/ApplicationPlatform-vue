<template>
    <div style="height: 500px;width: 600px">
        <el-form :model="form" label-width="120px" label-position="left">
            <el-form-item label="成绩排名总人数">
                <el-col :span="16">
                    <el-input v-model="score_number" placeholder="请输入参与成绩排名的总人数"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="成绩排名名次">
                <el-col :span="16">
                    <el-input v-model="score_rank" placeholder="请输入你的成绩名次"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="必修课门数">
                <el-col :span="16">
                    <el-input v-model="required_number" placeholder="请输入你已修的必修课门数"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="必修课及格门数">
                <el-col :span="16">
                    <el-input v-model="required_pass_number" placeholder="请输入你已修的及格必修课门数"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="综测总人数">
                <el-col :span="16">
                    <el-input v-model="ca_number" placeholder="请输入参与综测排名的总人数"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="综测名次">
                <el-col :span="16">
                    <el-input v-model="ca_rank" placeholder="请输入你的综测排名"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="获奖情况">
                <el-input type="textarea" v-model="award" placeholder="何年何月在何地荣获何奖项"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button >提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                score_number: '',
                score_rank: '',
                required_pass_number: '',
                required_number: '',
                ca_number: '',
                ca_rank: '',
                award: ''

            }
        }
    }
</script>

<style scoped>

</style>