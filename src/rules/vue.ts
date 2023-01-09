export default {
  //不允许字段名称重复
  'vue/no-dupe-keys': 2,
  //多次引用同个包
  'import/no-duplicates': 2,
  //执行有效v-for指令
  'vue/valid-v-for': 2,
  //V-bind:key使用v-for指令要求
  'vue/require-v-for-key': 2,
  //不允许解析错误<template>
  'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
  //强制执行自闭式
  'vue/html-self-closing': 'off',
  //不允许计算属性中的副作用
  'vue/no-side-effects-in-computed-properties': 0,
  //禁止 v-for 指令或范围属性的未使用变量定义
  'vue/no-unused-vars': 1,
  //执行有效v-model指令
  'vue/valid-v-model': 2,
  //强制执行有效的模板根
  'vue/valid-template-root': 2,
};
