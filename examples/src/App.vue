<script setup lang="ts">
import { ref } from '@vue/reactivity'
import { onMounted, onBeforeMount } from '@vue/runtime-core'
import axios from '../../experiment/index'

const message = ref('')
const from = ref('')
const author = ref('')

const getMessage = async () => {
  axios({
    url: 'https://v1.hitokoto.cn'
  })

  const { hitokoto, from: _from, from_who } = await fetch('https://v1.hitokoto.cn').then(res => res.json())
  message.value = hitokoto
  from.value = _from
  author.value = from_who ?? '佚名'
}

onBeforeMount(getMessage)
</script>

<template>
  <div id="message" @click="getMessage">{{ message }}</div>
  <div id="detail">—— {{ from }} | {{ author }}</div>
</template>

<style>
* {
  margin: 0;
}

#app {
  font-family: recursive monospace, 仓耳今楷01-9128;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  user-select: none;

  letter-spacing: 3px;
}

#message {
  cursor: pointer;

  font-size: 34px;
  font-weight: 600;
}

#detail {
  margin-top: 20px;
  text-align: right;
}
</style>
