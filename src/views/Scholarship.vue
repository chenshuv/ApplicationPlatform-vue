<template>
    <div style="height: 500px;width: 600px">
        <el-form :model="sForm" :rules="sFormRule" ref="sForm" label-width="120px" label-position="left">
            <el-form-item label="成绩排名总人数" prop="score_number">
                <el-col :span="16">
                    <el-input v-model="sForm.score_number" placeholder="请输入参与成绩排名的总人数"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="成绩排名名次" prop="score_rank">
                <el-col :span="16">
                    <el-input v-model="sForm.score_rank" placeholder="请输入你的成绩名次"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="必修课门数" prop="required_number">
                <el-col :span="16">
                    <el-input v-model="sForm.required_number" placeholder="请输入你已修的必修课门数"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="必修课及格门数" prop="required_pass_number">
                <el-col :span="16">
                    <el-input v-model="sForm.required_pass_number" placeholder="请输入你已修的及格必修课门数"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="综测总人数" prop="ca_number">
                <el-col :span="16">
                    <el-input v-model="sForm.ca_number" placeholder="请输入参与综测排名的总人数"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="综测名次" prop="ca_rank">
                <el-col :span="16">
                    <el-input v-model="sForm.ca_rank" placeholder="请输入你的综测排名"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="获奖情况" prop="award">
                <el-input type="textarea" v-model="sForm.award" placeholder="何年何月在何地荣获何奖项"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="submit" @click="submitForm('sForm')">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                sForm: {
                    score_number: '',
                    score_rank: '',
                    required_pass_number: '',
                    required_number: '',
                    ca_number: '',
                    ca_rank: '',
                    award: ''
                },
                sFormRule: {
                    score_number: [
                        { required: true, message: '成绩排名总人数不能为空', trigger: 'blur' }
                    ],
                    score_rank: [
                        { required: true, message: '成绩排名名次不能为空', trigger: 'blur' }
                    ],
                    required_pass_number: [
                        { required: true, message: '必修课门数不能为空', trigger: 'blur' }
                    ],
                    required_number: [
                        { required: true, message: '必修课及格门数不能为空', trigger: 'blur' }
                    ],
                    ca_number: [
                        { required: true, message: '综测总人数不能为空', trigger: 'blur' }
                    ],
                    ca_rank: [
                        { required: true, message: '综测名次不能为空', trigger: 'blur' }
                    ],
                    award: [
                        { required: true, message: '获奖情况不能为空', trigger: 'blur'}
                    ]
                }


            }
        },
        methods: {
            submitForm(infoForm){
                const _this = this
                this.$refs[infoForm].validate((valid) => {
                    if (valid) {
                        axios.post('/chenshuv/scholarship/applyScholarshipApplication',
                            this.sForm).then(function(resp){
                            if(resp.data.status === 200){
                                _this.$alert('申请成功！', '消息', {
                                    confirmButtonText: '确定',

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
                    } else {
                        return false;
                    }
                })
            },
        }
    }
</script>

<style scoped>

</style>