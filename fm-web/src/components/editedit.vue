<template>
    <a-form ref="formRef" :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">

        <a-form-item label="目录">
            <a-select v-model:value="formState.module" placeholder="选择目录" style="width: 300px"
                :options="items.map(item => ({ value: item }))">
            </a-select>
            <a-input v-model:value="formState.name" placeholder="接口名称" style="width: 300px">
            </a-input>
        </a-form-item>
        <a-form-item label="路径:">
            <a-checkbox-group v-model:value="formState.method">
                <a-checkbox value="1" name="type">GET</a-checkbox>
                <a-checkbox value="2" name="type">POST</a-checkbox>
                <a-checkbox value="3" name="type">DELETE</a-checkbox>
            </a-checkbox-group>
            <a-input v-model:value="formState.path">
            </a-input>
        </a-form-item>
        <a-form-item label="content-type">
            <a-select v-model:value="formState.reqCT" placeholder="请求类型">
            </a-select>
            <a-select v-model:value="formState.resCT" placeholder="响应类型">
            </a-select>
        </a-form-item>
    </a-form>
    {{ formState }}
</template>
<script lang="ts" setup>
import { reactive, ref, toRaw } from 'vue';
import type { UnwrapRef } from 'vue';

interface FormState {
    module: string;
    name: string;
    path: string;
    method: string[];
    reqCT: string;
    resCT: string;
}
const formRef = ref();
const labelCol = { span: 5 };
const wrapperCol = { span: 13 };
const formState: UnwrapRef<FormState> = reactive({
    module: "",
    name: "",
    path: "",
    method: [],
    reqCT: "",
    resCT: "",
});
const items = ref(['模块1', '模块2']);

</script>