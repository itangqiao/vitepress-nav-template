---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import { IMAGES_DATA } from './images'
</script>
<style src="./index.scss"></style>

# 图片/图标

<MNavLinks v-for="{title, items} in IMAGES_DATA" :title="title" :items="items"/>

<br />
