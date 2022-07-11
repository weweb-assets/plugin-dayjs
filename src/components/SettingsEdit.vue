<template>
    <div class="dayjs-settings-edit">
        <wwEditorFormRow label="Expected date formats input">
            <template #append-label>
                <div class="action-container">
                    <button type="button" class="ww-editor-button -icon -small -primary action" @click="addFormat">
                        <wwEditorIcon name="add" /> Add
                    </button>
                </div>
            </template>
            <div
                v-for="(format, index) in settings.publicData.inputFormatList"
                :key="`format-${index}`"
                class="format-item"
            >
                <wwEditorInputText
                    class="format-item__field"
                    placeholder="Name"
                    :model-value="format"
                    @update:modelValue="updateInputFormatList(index, (value = $event))"
                />
                <button
                    v-if="settings.publicData.inputFormatList.length > 1"
                    type="button"
                    class="ww-editor-button -icon -small -tertiary -red"
                    @click="removeFormat(index)"
                >
                    <wwEditorIcon name="delete" />
                </button>
            </div>
        </wwEditorFormRow>
        <wwEditorFormRow label="Expected date format input">
            <template #append-label>
                <a class="dayjs-settings-edit__link" href="https://day.js.org/docs/en/display/format" target="_blank">
                    Find example here
                </a>
            </template>
            <wwEditorInputText
                required
                placeholder="YYYY-MM-DDTHH:mm:ss.sssZ"
                :model-value="settings.publicData.inputFormat"
                @update:modelValue="changeInputFormat"
            />
        </wwEditorFormRow>
        <wwEditorFormRow label="Expected date output format">
            <wwEditorInputText
                required
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
    data() {
        return {
            internalInputFormatList: ['MMMM D, YYYY h:mm A', 'YYYY-MM-DDTHH:mm:ss.sssZ'],
        };
    },
    mounted() {
        if (!this.settings.publicData.inputFormatList) {
            this.$emit('update:settings', {
                ...this.settings,
                publicData: { ...this.settings.publicData, inputFormatList: [''] },
            });
        }
    },
    methods: {
        addFormat() {
            const list = this.settings.publicData.inputFormatList;
            list.push('');

            this.$emit('update:settings', {
                ...this.settings,
                publicData: { ...this.settings.publicData, inputFormatList: list },
            });
        },
        updateInputFormatList(index, value) {
            let list = this.settings.publicData.inputFormatList;
            list[index] = value;
            this.$emit('update:settings', {
                ...this.settings,
                publicData: { ...this.settings.publicData, inputFormatList: list },
            });
        },
        removeFormat(index) {
            let list = this.settings.publicData.inputFormatList;
            list.splice(index, 1);
            this.$emit('update:settings', {
                ...this.settings,
                publicData: { ...this.settings.publicData, inputFormatList: list },
            });
        },
        changeInputFormat(inputFormat) {
            this.$emit('update:settings', {
                ...this.settings,
                publicData: { ...this.settings.publicData, inputFormat },
            });
        },
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

    .action-container {
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
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

    .format-item {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: no-wrap;
        justify-content: flex-start;
        align-items: center;
        margin-top: var(--ww-spacing-02);

        &__field {
            width: 100%;
        }
    }
}
</style>
