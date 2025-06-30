---
layout: page
---

<script setup lang="ts">
    import { onMounted, getCurrentInstance, ref } from "vue";
    const query = new URLSearchParams(window.location.search);
    let time = ref(0);
    onMounted(() => {
        if(query.has("state")) {
            const queryTimeStamp: number = query.get("state");
            time.value = Date.now() - queryTimeStamp;
            setInterval(() => {
                time.value = Date.now() - queryTimeStamp;
            }, 1000);
        }
    })
    
</script>

<div class="h-60 w-[60%] bg-[var(--vp-c-divider)] mt-[15%] ml-auto mr-auto rounded-[20px] relative pt-3 flex flex-row gap-3">
    <div class="bg-[var(--vp-nav-screen-bg-color)] h-54 w-35 ml-3 rounded-xl relative mt-0">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-auto mr-auto scale-300 mt-17">
            <g clip-path="url(#clip0_2311_14259)">
            <path d="M13.9531 25.9062C20.4922 25.9062 25.9062 20.4805 25.9062 13.9531C25.9062 7.41406 20.4805 2 13.9414 2C7.41406 2 2 7.41406 2 13.9531C2 20.4805 7.42578 25.9062 13.9531 25.9062ZM13.9531 23.9141C8.42188 23.9141 4.00391 19.4844 4.00391 13.9531C4.00391 8.42188 8.41016 3.99219 13.9414 3.99219C19.4727 3.99219 23.9141 8.42188 23.9141 13.9531C23.9141 19.4844 19.4844 23.9141 13.9531 23.9141Z" fill="red" fill-opacity="0.85"/>
            <path d="M7.82422 15.2188H13.9414C14.3984 15.2188 14.7617 14.8672 14.7617 14.3984V6.5C14.7617 6.04297 14.3984 5.69141 13.9414 5.69141C13.4844 5.69141 13.1328 6.04297 13.1328 6.5V13.5898H7.82422C7.35547 13.5898 7.00391 13.9414 7.00391 14.3984C7.00391 14.8672 7.35547 15.2188 7.82422 15.2188Z" fill="red" fill-opacity="0.85"/>
            </g>
            <defs>
                <clipPath id="clip0_2311_14259">
                    <rect width="23.9062" height="23.918" fill="white" transform="translate(2 2)"/>
                </clipPath>
            </defs>
        </svg>
        <p v-if="query.has('state')" class="relative pt-6 mt-[30px] scale-250 ml-auto mr-auto text-center"> {{ (40 - Math.round(time / 1000)) >= 0 ? (40 - Math.round(time / 1000)) + ' s' : "过期" }} </p>
    </div>
    <div class="bg-[var(--vp-nav-screen-bg-color)] h-54 w-full mr-3 mt-0 rounded-xl relative">
        <p v-if="query.has('code')" class="relative pt-8 mt-auto mb-auto scale-500 ml-auto mr-auto text-center"> {{ query.get('code') }} </p>
    </div>
</div>