<template>
    <div>
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
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                type: '镇泰助学金',
            }
        }
    }
</script>

<style scoped>

</style>