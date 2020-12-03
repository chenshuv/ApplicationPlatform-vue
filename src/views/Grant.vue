<template>
    <div style="height: 500px;width: 600px">
        <el-form label-width="120px" label-position="left">
            <el-form-item label="助学金种类">
                <el-radio-group size="small" v-model="type">
                        <el-radio-button label="镇泰助学金"></el-radio-button>
                        <el-radio-button label="仲明助学金"></el-radio-button>
                        <el-radio-button label="海南助学金"></el-radio-button>
                        <el-radio-button label="建智助学金"></el-radio-button>
                        <el-radio-button label="培英助学金"></el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="是否建档立卡">
                <el-radio-group size="small" v-model="is_built">
                    <el-radio-button label="否"></el-radio-button>
                    <el-radio-button label="是"></el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="高中成绩">
                <el-col :span="8">
                    <el-input ></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="高校名字">
                <el-col :span="8">
                    <el-input ></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="高校入学年份">
                <el-col :span="8">
                    <el-input ></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="通讯地址">
                <el-input v-model="address" ></el-input>
            </el-form-item>
            <el-form-item label="贫困原因">
                <el-input type="textarea" size="small" v-model="reason"></el-input>
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
                type: '镇泰助学金',
                is_built: '',
                address: '',
                reason:''
            }
        }
    }
</script>

<style scoped>

</style>