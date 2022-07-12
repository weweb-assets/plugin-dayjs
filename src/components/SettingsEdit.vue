<template>
    <div class="dayjs-settings-edit">
        <wwEditorFormRow label="Default date format output">
            <wwEditorInputText
                placeholder="MMMM D, YYYY h:mm A"
                :model-value="settings.publicData.outputFormat"
                @update:modelValue="changeOutputFormat"
            />
        </wwEditorFormRow>
    </div>
</template>

<script>
export default {
    props: {
        settings: { type: Object, required: true },
    },
    emits: ['update:settings'],
    methods: {
        changeOutputFormat(outputFormat) {
            this.$emit('update:settings', {
                ...this.settings,
                publicData: { ...this.settings.publicData, outputFormat },
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.dayjs-settings-edit {
    display: flex;
    flex-direction: column;
    &__link {
        color: var(--ww-color-blue-500);
        margin-left: var(--ww-spacing-02);
    }
    &__row {
        display: flex;
        align-items: center;

        &.-wrap {
            flex-wrap: wrap;
        }
    }
    &__radio-label {
        margin-left: var(--ww-spacing-02);
    }

    .m-auto-left {
        margin-left: auto;
    }
    .m-right {
        margin-right: var(--ww-spacing-02);
    }
    .m-bottom {
        margin-bottom: var(--ww-spacing-02);
    }
}
</style>
