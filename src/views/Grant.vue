<template>
    <div style="height: 500px;width: 600px">
        <el-form label-width="120px" label-position="left">
            <el-form-item label="助学金种类">
                <el-radio-group size="small" v-model="grants_type">
                        <el-radio-button label="镇泰助学金"></el-radio-button>
                        <el-radio-button label="仲明助学金"></el-radio-button>
                        <el-radio-button label="海南助学金"></el-radio-button>
                        <el-radio-button label="建智助学金"></el-radio-button>
                        <el-radio-button label="培英助学金"></el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="是否建档立卡">
                <el-radio-group size="small" v-model="is_built_card">
                    <el-radio-button label="否"></el-radio-button>
                    <el-radio-button label="是"></el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="高中成绩">
                <el-col :span="8">
                    <el-input v-model="gaokao_achievement" placeholder="请输入你的高考成绩"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="高校名字">
                <el-col :span="8">
                    <el-input v-model="high_school_name" placeholder="请输入你的高中学校全名"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="高校入学年份">
                <el-col :span="8">
                    <el-input v-model="high_school_year" placeholder="请输入你高中入学年份"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="通讯地址">
                <el-input v-model="address" placeholder="请输入具体到门牌号的通讯地址"></el-input>
            </el-form-item>
            <el-form-item label="贫困原因">
                <el-input type="textarea" v-model="reason" placeholder="不超过200字阐述贫困原因"></el-input>
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
            return{
                grants_type: '镇泰助学金',
                is_built_card: '',
                gaokao_achievement: '',
                high_school_name: '',
                high_school_year: '',
                address: '',
                reason:''
            }
        }
    }
</script>

<style scoped>

</style>