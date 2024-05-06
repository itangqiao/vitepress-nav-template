---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import { FULL_STACK_DATA } from './full-stack'
</script>
<style src="./index.scss"></style>

# 全栈导航

<MNavLinks v-for="{title, items} in FULL_STACK_DATA" :title="title" :items="items"/>

<br />
