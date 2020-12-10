<template>
    <div style="height: 500px;width: 600px">
        <el-form :model="gForm" :rules="gRules" ref="gForm" label-width="120px" label-position="left">
            <el-form-item label="助学金种类" prop="grants_type">
                <el-radio-group size="small" v-model="gForm.grants_type">
                        <el-radio-button label="0">海南助学金</el-radio-button>
                        <el-radio-button label="1">建智助学金</el-radio-button>
                        <el-radio-button label="2">镇泰助学金</el-radio-button>
                        <el-radio-button label="3">培英助学金</el-radio-button>
                        <el-radio-button label="4">仲明助学金</el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="是否建档立卡" prop="is_build_card">
                <el-radio-group size="small" v-model="gForm.is_build_card">
                    <el-radio-button label="0">否</el-radio-button>
                    <el-radio-button label="1">是</el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="高中成绩" prop="gaokao_achievement">
                <el-col :span="8">
                    <el-input v-model="gForm.gaokao_achievement" placeholder="请输入你的高考成绩"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="高校名字" prop="high_school_name">
                <el-col :span="8">
                    <el-input v-model="gForm.high_school_name" placeholder="请输入你的高中名字"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="高校入学年份" prop="high_school_year">
                <el-col :span="8">
                    <el-input v-model="gForm.high_school_year" placeholder="请输入你高中入学年份"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="通讯地址" prop="address">
                <el-input v-model="gForm.address" placeholder="请输入具体到门牌号的通讯地址"></el-input>
            </el-form-item>
            <el-form-item label="贫困原因" prop="reason">
                <el-input type="textarea" v-model="gForm.reason" placeholder="不超过200字阐述贫困原因"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="submit" @click="submitForm('gForm')">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                gForm: {
                    grants_type: '',
                    is_build_card: '',
                    gaokao_achievement: '',
                    high_school_name: '',
                    high_school_year: '',
                    address: '',
                    reason:''
                },
                gRules: {
                    grants_type: [
                        { required: true, message: '助学金种类必须选择', trigger: 'blur' }
                    ],
                    is_build_card:[
                        { required: true, message: '是否为建档立卡户必须选择', trigger: 'blur' }
                    ],
                    gaokao_achievement:[
                        { required: true, message: '高考成绩不能为空', trigger: 'blur' }
                    ],
                    high_school_name:[
                        { required: true, message: '高校名字不能为空', trigger: 'blur' }
                    ],
                    high_school_year:[
                        { required: true, message: '高校入学年份不能为空', trigger: 'blur' }
                    ],
                    address:[
                        { required: true, message: '通讯地址不能为空', trigger: 'blur' }
                    ],
                    reason:[
                        { required: true, message: '贫困原因不能为空', trigger: 'blur' }
                    ]
                }

            }
        },
        methods: {
            submitForm(infoForm){
                const _this = this
                this.$refs[infoForm].validate((valid) => {
                    if (valid) {
                        axios.post('/chenshuv/grant/applyGrantApplication',
                            this.gForm).then(function(resp){
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