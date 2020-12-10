<template>
    <div>
        <el-form :model="lForm" :rules="lRules" ref="lForm" label-width="150px" label-position="left">
            <el-form-item label="家庭联系人" prop="family_name">
                <el-col :span="16">
                    <el-input v-model="lForm.family_name" placeholder="请输入监护人的姓名"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="家庭联系人电话" prop="family_phone">
                <el-col :span="16">
                    <el-input v-model="lForm.family_phone" placeholder="请输入监护人的手机号码"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="与学生关系" prop="relationship">
                <el-col :span="16">
                    <el-input v-model="lForm.relationship"  placeholder="请输入与监护人的关系，如：母子、父女等"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="家庭联系人身份证" prop="family_id_number">
                <el-col :span="16">
                    <el-input v-model="lForm.family_id_number" placeholder="请输入监护人的身份证号码"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="家庭联系人居住地址" prop="family_address">
                <el-col :span="16">
                    <el-input v-model="lForm.family_address" placeholder="请输入监护人的居住地址"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="学历" prop="education">
                <el-radio-group size="small" v-model="lForm.education">
                    <el-radio-button label="1">研究生</el-radio-button>
                    <el-radio-button label="0">本科生</el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="入学年份" prop="enrollment_year">
                <el-col :span="16">
                    <el-input v-model="lForm.enrollment_year" placeholder="请输入入学年份,如2018年"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="学制" prop="length_school">
                <el-select v-model="lForm.length_school" placeholder="请选择学制">
                    <el-option label="2" :value= "2"></el-option>
                    <el-option label="3" :value= "3"></el-option>
                    <el-option label="4" :value= "4"></el-option>
                    <el-option label="5" :value= "5"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="是否首贷" prop="is_first">
                <el-radio-group size="small" v-model="lForm.is_first">
                    <el-radio-button label="0">否</el-radio-button>
                    <el-radio-button label="1">是</el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="申贷年限" prop="loan_year">
                <el-date-picker type="year" placeholder="选择本次申贷年限" v-model="lForm.loan_year" style="width: 40%;" value-format="yyyy"></el-date-picker>
            </el-form-item>
            <el-form-item label="申贷金额" prop="loan_money">
                <el-col :span="16">
                    <el-input v-model="lForm.loan_money" placeholder="请输入本次申贷金额"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="申贷期限" prop="loan_time">
                <el-select v-model="lForm.loan_time" placeholder="请选择本次申贷期限">
                    <el-option v-for="count in 20":key="count":label="count":value="count" v-if="count>4"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="submit" @click="submitForm('lForm')">提交</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                lForm : {
                    family_name: '',
                    family_phone: '',
                    relationship: '',
                    family_id_number: '',
                    family_address: '',
                    education: '',
                    enrollment_year: '',
                    length_school: '',
                    is_first: '',
                    loan_year: '',
                    loan_money: '',
                    loan_time: ''
                },
                lRules : {
                    family_name: [
                        { required: true, message: '名字不能为空', trigger: 'blur' }
                    ],
                    family_phone: [
                        { required: true, message: '手机号不能为空', trigger: 'blur' }
                    ],
                    relationship: [
                        { required: true, message: '关系不能为空', trigger: 'blur' }
                    ],
                    family_id_number: [
                        { required: true, message: '身份证号码不能为空', trigger: 'blur' }
                    ],
                    family_address: [
                        { required: true, message: '居住地址不能为空', trigger: 'blur' }
                    ],
                    education: [
                        { required: true, message: '学历不能为空', trigger: 'blur' }
                    ],
                    enrollment_year: [
                        { required: true, message: '入学年份不能为空', trigger: 'blur'}
                    ],
                    length_school: [
                        { required: true, message: '学制不能为空', trigger: 'blur' }
                    ],
                    is_first: [
                        { required: true, message: '是否首贷必须选择', trigger: 'blur' }
                    ],
                    loan_year: [
                        { required: true, message: '贷款年限必须选择', trigger: 'blur' }
                    ],
                    loan_money: [
                        { required: true, message: '贷款金额不能为空', trigger: 'blur' }
                    ],
                    loan_time: [
                        { required: true, message: '贷款期限必须选择', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(lForm){
                const _this = this
                this.$refs[lForm].validate((valid) => {
                    if (valid) {
                        axios.post('/chenshuv/loan/applyLoanApplication',
                            this.lForm).then(function(resp){
                            if(resp.data.status === 200){
                                _this.$alert('修改成功！', '消息', {
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