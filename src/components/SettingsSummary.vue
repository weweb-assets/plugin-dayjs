<template>
    <div class="dayjs-settings-summary">
        <wwEditorIcon large name="type" class="dayjs-settings-summary__icon" />
        <span class="caption-m">{{ inputFormat }}</span>
    </div>
    <div class="dayjs-settings-summary">
        <wwEditorIcon large name="type" class="dayjs-settings-summary__icon" />
        <span class="caption-m">{{ outputFormat }}</span>
    </div>
</template>

<script>
export default {
    props: {
        settings: { type: Object, required: true },
    },
    computed: {
        inputFormat() {
            return this.settings.publicData.inputFormat || '';
        },
        outputFormat() {
            return this.settings.publicData.outputFormat || '';
        },
    },
};
</script>

<style lang="scss" scoped>
.dayjs-settings-summary {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;

    &__icon {
        margin-right: var(--ww-spacing-02);
    }
}
</style>
