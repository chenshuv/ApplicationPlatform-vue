<template>
    <el-form :model="form" label-width="70px" label-position="left" >
        <el-form-item label="姓名">
            <el-col :span="16">
                <el-input ></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="身份证">
            <el-col :span="16">
                <el-input ></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="户籍地址">
            <el-col :span="16">
                <el-input ></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="民族">
            <el-col :span="16">
                <el-input ></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="学院">
            <el-select v-model="college" placeholder="请选择学院">
                <el-option label="法学院" value= 0></el-option>
                <el-option label="商学院" value= 1></el-option>
                <el-option label="会计学院" value= 2></el-option>
                <el-option label="经贸学院" value= 3></el-option>
                <el-option label="公管学院" value= 4></el-option>
                <el-option label="数统学院" value= 5></el-option>
                <el-option label="金融学院" value= 6></el-option>
                <el-option label="信息学院" value= 7></el-option>
                <el-option label="新闻学院" value= 8></el-option>
                <el-option label="英教学院" value= 9></el-option>
                <el-option label="国关学院" value= 10></el-option>
                <el-option label="研究生院" value= 11></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="专业">
            <el-col :span="16">
                <el-input ></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="班级">
            <el-col :span="16">
                <el-input ></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="学号">
            <el-col :span="16">
                <el-input ></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="手机号">
            <el-col :span="16">
                <el-input ></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="QQ号">
            <el-col :span="16">
                <el-input ></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="邮箱">
            <el-col :span="16">
                <el-input ></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="校区">
            <el-radio-group size="small" v-model="campus">
                <el-radio-button label="南"></el-radio-button>
                <el-radio-button label="北"></el-radio-button>
            </el-radio-group>
        </el-form-item>
        <el-form-item>
            <el-button >更改</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        data() {
            return {
                name: '123',
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
                campus: ''
            }
        }

    }
</script>

<style scoped>

</style>