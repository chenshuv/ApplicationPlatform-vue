<template>
    <div>
        <el-form :model="form" label-width="120px" label-position="left">
            <el-form-item label="成绩排名总人数">
                <el-col :span="8">
                    <el-input v-model="form.name"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="成绩排名名次">
                <el-col :span="8">
                    <el-input ></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="必修课门数">
                <el-col :span="8">
                    <el-input ></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="综测总人数">
                <el-col :span="8">
                    <el-input ></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="获奖情况">
                <el-input type="textarea"></el-input>
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
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>

<style scoped>

</style>