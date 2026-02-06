<script setup lang="ts">
    import ProfileCardLight from "../component/ProfileCard/ProfileCardLight.vue";
    import ProfileCard from "../component/ProfileCard/ProfileCard.vue";

    function Pigeon0v0() {
        window.location.replace('https://www.itspigeon.xin/');
    }
</script>
 
<template>
    <div class="grid grid-cols-2 gap-x-30 gap-y-5">
        <ProfileCardLight
            name="Pigeon0v0 A. L." 
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
            :onContactClick="Pigeon0v0"/>
    </div>
</template>