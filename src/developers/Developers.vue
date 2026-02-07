<script setup lang="ts">
    import ProfileCardLight from "../component/ProfileCard/ProfileCardLight.vue";
    import ProfileCard from "../component/ProfileCard/ProfileCard.vue";

    function redirect(url: string) {
        window.location.href = url;
    }
</script>
 
<template>
    <div class="grid grid-cols-2 gap-x-30 gap-y-5">
        <ProfileCardLight
            name="Pigeon Ling" 
            handle="Pigeon0v0"
            status=""
            innerGradient="linear-gradient(rgb(227, 244, 255), rgb(255, 225, 225))"
            avatarUrl="/pigeon0v0/pigeon0v0-transparent.png"
            iconUrl="/iconpattern.png"
            miniAvatarUrl="/pigeon0v0/pigeon0v0.jpg"
            grainUrl="/grain.webp"
            :enable-tilt="true"
            :show-behind-gradient="false"
            class="select-none"
            :onContactClick="() => redirect('https://www.itspigeon.xin/')"/>

        <ProfileCard
            name="tangge233" 
            handle="tangge233"
            status=""
            avatarUrl="/tangge233/tangge233-transparent.png"
            iconUrl="/iconpattern.png"
            miniAvatarUrl="/tangge233/tangge233.jpg"
            grainUrl="/grain.webp"
            :enable-tilt="true"
            :show-behind-gradient="false"
            class="select-none"
            :onContactClick="() => redirect('https://blog.tangge233.top/')"/>
    </div>
</template>
