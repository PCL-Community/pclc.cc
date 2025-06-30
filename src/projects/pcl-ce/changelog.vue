<script setup lang="ts">
    import { defineProps } from "vue";
    import { Release, getReleases, renderMD } from "./changelog.ts";
    const props = defineProps(["page"]);
    const releases: Release[] = await getReleases();
</script>

<style lang="css">
    div.main {
        margin-top: 50px;
    }
    div.release {
        margin-left: 30px;
    }
</style>

<template>
    <div v-for="(release, i) in releases" class="main">
        <h1 v-bind:id="release.name" v-bind:tabindex="i">{{ release.name }}</h1>
        <div v-html="renderMD(release.body)" class="release"></div>
    </div>
</template>
