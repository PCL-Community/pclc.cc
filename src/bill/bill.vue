<script setup lang="ts">
    import MarkdownIt from "markdown-it";

    import { ref } from "vue";
    import { BillManager } from "./bill.ts";
    import SvgOutlay from "./SvgOutlay.vue";
    import SvgIncome from "./SvgIncome.vue";
    import SvgInfo from "./SvgInfo.vue";

    type IBill = (typeof bills)[0];

    const modal = ref<HTMLDialogElement>();
    const currentBill = ref<IBill>();
    const bills = BillManager.getBills();
    const mdRenderer = new MarkdownIt();

    const symbolMap = {
        income: "+",
        outlay: "-",
    };
    const typeMap = {
        income: "收入来源",
        outlay: "支出对象",
    };

    function showBillInfo(bill: IBill) {
        currentBill.value = bill;
        modal.value?.showModal();
    }
</script>

<template>
    <div class="grid grid-cols-2 grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-2">
        <div class="available-bill col-span-2 lg:col-span-1">
            <p class="bill-stats-text">结余：￥{{ Math.round(BillManager.getAvailable() * 100) / 100 }}</p>
        </div>
        <div class="income-bill">
            <p class="bill-stats-text">收入：￥{{ Math.round(BillManager.getIncomes() * 100) / 100 }}</p>
        </div>
        <div class="outlay-bill">
            <p class="bill-stats-text">支出：￥{{ Math.round(BillManager.getoutlays() * 100) / 100 }}</p>
        </div>
    </div>
    <ul class="list bg-base-100 rounded-box shadow-md justify-center">
        <li class="list-row -ml-2 mt-0!" v-for="bill in bills">
            <div class="-mt-1">
                <SvgOutlay v-if="bill.type === 'outlay'" />
                <SvgIncome v-if="bill.type === 'income'" />
            </div>
            <div>
                <div>{{ bill.date }}</div>
                <div class="text-xs font-semibold opacity-60">操作员：{{ bill.operator }}</div>
            </div>
            <section class="hidden lg:flex! gap-4">
                <div class="flex items-center gap-2">
                    <div
                        v-if="bill['original-amount'] !== undefined && bill['original-unit'] !== undefined"
                        class="pr-2 border-r-2 border-r-[var(--vp-c-divider)]">
                        <span class="text-lg opacity-50">
                            {{ symbolMap[bill.type] }}{{ bill["original-unit"] + bill["original-amount"].toFixed(2) }}
                        </span>
                    </div>
                    <span class="text-xl">{{ symbolMap[bill.type] }}￥{{ bill["exchanged-amount"].toFixed(2) }}</span>
                </div>
            </section>
            <button class="btn btn-square" @click="showBillInfo(bill)">
                <SvgInfo />
            </button>
        </li>
    </ul>
    <dialog ref="modal" class="modal">
        <div class="modal-box">
            <span class="text-lg font-bold">交易详情</span>
            <div class="pt-4 flex flex-col gap-2">
                <div class="flex gap-2 items-center">
                    <div
                        class="badge badge-md badge-inline text-(--vp-nav-screen-bg-color)"
                        style="--badge-color: var(--vp-c-brand-3)">
                        交易日期
                    </div>
                    <span class="mt-0 mb-0">{{ currentBill?.date }}</span>
                </div>
                <div class="flex gap-2 items-center">
                    <div
                        class="badge badge-md badge-inline text-(--vp-nav-screen-bg-color)"
                        style="--badge-color: var(--vp-c-warning-1)">
                        金额
                    </div>
                    <span class="mt-0 mb-0">
                        <span>￥{{ currentBill?.["exchanged-amount"].toFixed(2) }}</span>
                        <span
                            class="opacity-50"
                            v-if="
                                currentBill?.['original-amount'] !== undefined &&
                                currentBill?.['original-unit'] !== undefined
                            ">
                            ({{ currentBill?.["original-unit"] + currentBill?.["original-amount"].toFixed(2) }})
                        </span>
                    </span>
                </div>
                <div class="flex gap-2 items-center">
                    <div
                        class="badge badge-md badge-inline text-(--vp-nav-screen-bg-color)"
                        style="--badge-color: var(--vp-c-brand-3)">
                        {{ typeMap[currentBill?.type!] || "交易对象" }}
                    </div>
                    <span class="mt-0 mb-0" v-html="mdRenderer.render(currentBill?.target || '未知')"></span>
                </div>
                <div class="flex gap-2 items-center">
                    <div
                        class="badge badge-md badge-inline text-(--vp-nav-screen-bg-color)"
                        style="--badge-color: var(--vp-c-warning-1)">
                        交易内容
                    </div>
                    <span class="mt-0 mb-0" v-html="mdRenderer.render(currentBill?.description || '')"></span>
                </div>
            </div>
            <div class="modal-action">
                <form method="dialog">
                    <!-- if there is a button in form, it will close the modal -->
                    <button class="btn w-12">关闭</button>
                </form>
            </div>
        </div>
    </dialog>
</template>

<style>
    .available-bill,
    .income-bill,
    .outlay-bill {
        height: 40px;
        min-width: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        margin-left: 0;
    }

    .available-bill {
        background-color: var(--vp-c-divider);
    }
    .income-bill {
        background-color: green;
        color: white;
    }
    .outlay-bill {
        background-color: #dbbe3e;
        color: black;
    }

    span p {
        margin: 0 !important;
    }
</style>
