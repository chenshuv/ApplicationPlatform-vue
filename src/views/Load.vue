<template>
    <div>
        <el-form :model="form" label-width="150px" label-position="left">
            <el-form-item label="家庭联系人">
                <el-col :span="16">
                    <el-input v-model="family_name" placeholder="请输入监护人的姓名"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="家庭联系人电话">
                <el-col :span="16">
                    <el-input v-model="family_phone" placeholder="请输入监护人的手机号码"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="与学生关系">
                <el-col :span="16">
                    <el-input v-model="relationship"  placeholder="请输入与监护人的关系，如：母子、父女等"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="家庭联系人身份证">
                <el-col :span="16">
                    <el-input v-model="family_id_number" placeholder="请输入监护人的身份证号码"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="家庭联系人居住地址">
                <el-col :span="16">
                    <el-input v-model="family_address" placeholder="请输入监护人的居住地址"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="学历">
                <el-radio-group size="small" v-model="education">
                    <el-radio-button label="研究生"></el-radio-button>
                    <el-radio-button label="本科生"></el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="学制">
                <el-select v-model="length_school" placeholder="请选择学制">
                    <el-option label="2" value= 2></el-option>
                    <el-option label="3" value= 3></el-option>
                    <el-option label="4" value= 4></el-option>
                    <el-option label="5" value= 5></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="是否首贷">
                <el-radio-group size="small" v-model="is_first">
                    <el-radio-button label="否"></el-radio-button>
                    <el-radio-button label="是"></el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="申贷年限">
                <el-date-picker type="year" placeholder="选择日期" v-model="loan_year" style="width: 30%;"></el-date-picker>
            </el-form-item>
            <el-form-item label="申贷期限">
                <el-select v-model="loan_time" placeholder="请选择申贷期限">
                    <el-option v-for="count in 20":key="count":label="count":value="count" v-if="count>4"></el-option>
                </el-select>
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
                loan_time: '',
            }
        }

    }
</script>

<style scoped>

</style>