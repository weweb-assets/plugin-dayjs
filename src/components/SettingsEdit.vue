<template>
    <div class="dayjs-settings-edit">
        <wwEditorFormRow label="Expected date format input">
            <template #append-label>
                <a class="dayjs-settings-edit__link" href="https://day.js.org/docs/en/display/format" target="_blank">
                    Find example here
                </a>
            </template>
            <wwEditorInputText
                type="text"
                name="input-format"
                placeholder="YYYY-MM-DDTHH:mm:ss.sssZ"
                :model-value="publicData.inputFormat"
                large
                @update:modelValue="changeInputFormat"
            />
        </wwEditorFormRow>
        <wwEditorFormRow label="Expected output format">
            <wwEditorInputText
                type="text"
                name="output-format"
                placeholder="MMMM D, YYYY h:mm A"
                :model-value="publicData.outputFormat"
                large
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
    data() {
        return {
            publicData: this.settings.publicData,
        };
    },
    methods: {
        changeInputFormat(inputFormat) {
            this.$emit('update:settings', { publicData: { inputFormat } });
        },
        changeOutputFormat(outputFormat) {
            this.$emit('update:settings', { publicData: { outputFormat } });
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
