<script setup lang="ts">
    import { defineProps } from "vue";
    import { Release, getReleases, renderMD } from "./changelog.ts";
    const props = defineProps(["page"]);
    const releases: Release[] = await getReleases();
</script>

<template>
    <div v-for="(release, i) in releases" class="mt-10">
        <div v-html="renderMD(release.body)"></div>
    </div>
</template>
