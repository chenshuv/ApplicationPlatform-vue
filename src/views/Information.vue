<template>
    <div>
        <el-form :model="infoForm" label-width="80px" label-position="left" :rules="infoRules" ref="infoForm">
            <el-form-item label="照片">
                <el-upload class="avater-uploader" :show-file-list="false" :before-upload="beforeAvatarUpload" action="/chenshuv/get_Url/geturl" name="photo" :on-success="handleAvatarSuccess">
                    <img v-if="infoForm.url" :src="infoForm.url" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item label="姓名" prop="name">
                <el-col :span="16">
                    <el-input v-model="infoForm.name" placeholder="请输入你的姓名"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="身份证" prop="id_number">
                <el-col :span="16">
                    <el-input v-model="infoForm.id_number" placeholder="请输入你的学号"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="户籍地址" prop="address">
                <el-col :span="16">
                    <el-input v-model="infoForm.address" placeholder="请输入你的户籍地址"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="民族" prop="nation">
                <el-col :span="16">
                    <el-input v-model="infoForm.nation" placeholder="请输入你的民族"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="学院" prop="college">
                <el-select v-model="infoForm.college" placeholder="请选择学院">
                    <el-option label="法学院" :value="0"></el-option>
                    <el-option label="商学院" :value="1"></el-option>
                    <el-option label="会计学院" :value="2"></el-option>
                    <el-option label="经贸学院" :value="3"></el-option>
                    <el-option label="公管学院" :value="4"></el-option>
                    <el-option label="数统学院" :value="5"></el-option>
                    <el-option label="金融学院" :value="6"></el-option>
                    <el-option label="信息学院" :value="7"></el-option>
                    <el-option label="新闻学院" :value="8"></el-option>
                    <el-option label="英教学院" :value="9"></el-option>
                    <el-option label="国关学院" :value="10"></el-option>
                    <el-option label="研究生院" :value="11"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="专业" prop="major">
                <el-col :span="16">
                    <el-input v-model="infoForm.major" placeholder="请输入你的专业"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="班级" prop="class">
                <el-col :span="16">
                    <el-input v-model="infoForm.class" placeholder="请输入你的班级,如1802"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="学号" prop="student_id">
                <el-col :span="16">
                    <el-input v-model="infoForm.student_id" placeholder="请输入你的学号"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
                <el-col :span="16">
                    <el-input v-model="infoForm.phone" placeholder="请输入你的手机号码"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="QQ号" prop="qq_number">
                <el-col :span="16">
                    <el-input v-model="infoForm.qq_number" placeholder="请输入你的QQ号"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-col :span="16">
                    <el-input v-model="infoForm.email" placeholder="请输入你的邮箱" disabled></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="校区" prop="campus">
                <el-radio-group size="small" v-model="infoForm.campus">
                    <el-radio-button label='0'>北</el-radio-button>
                    <el-radio-button label='1'>南</el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item>
                <el-button type="submit" @click="submitForm('infoForm')" plain>更改</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                infoForm: {
                    name: '',
                    id_number: '',
                    address: '',
                    nation: '',
                    college: '',
                    major: '',
                    class: '',
                    student_id: '',
                    phone: '',
                    qq_number: '',
                    email: '',
                    campus: '',
                    url: ''
                },
                infoRules: {
                    name: [
                        { required: true, message: '名字不能为空', trigger: 'blur' }
                    ],
                    id_number:[
                        { required: true, message: '身份证不能为空', trigger: 'blur' }
                    ],
                    address:[
                        { required: true, message: '通讯地址不能为空', trigger: 'blur' }
                    ],
                    nation:[
                        { required: true, message: '民族不能为空', trigger: 'blur' }
                    ],
                    college:[
                        { required: true, message: '学院不能为空', trigger: 'blur' }
                    ],
                    major:[
                        { required: true, message: '专业不能为空', trigger: 'blur' }
                    ],
                    class:[
                        { required: true, message: '班级不能为空', trigger: 'blur' }
                    ],
                    student_id:[
                        { required: true, message: '学号不能为空', trigger: 'blur' }
                    ],
                    phone:[
                        { required: true, message: '手机号不能为空', trigger: 'blur' }
                    ],
                    qq_number:[
                        { required: true, message: 'QQ号不能为空', trigger: 'blur' }
                    ],
                    email:[
                        { required: true, message: '邮箱不能为空', trigger: 'blur' }
                    ],
                    campus:[
                        { required: true, message: '校区必须选择', trigger: 'blur' }
                    ]
                }
            }
        },
        mounted() {
            this.getInfo()
        },
        methods: {
            submitForm(infoForm){
                const _this = this
                this.$refs[infoForm].validate((valid) => {
                    if (valid) {
                        axios.post('/chenshuv/student/editInfo',
                            this.infoForm).then(function(resp){
                            if(resp.data.code === 200){
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
            getInfo(){
                const _this = this
                axios.post('/chenshuv/student/getInfo').then(function (resp) {
                    if(resp.data.code === 200){
                        _this.infoForm = resp.data.detail[0]
                    }else{
                        console.log(resp.data)
                        _this.$alert(resp.data.msg, '消息', {
                            confirmButtonText: '确定',
                        });
                    }
                })
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            handleAvatarSuccess(response,file){
                this.infoForm.url = response.url
            }
        }

    }
</script>

<style scoped>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>