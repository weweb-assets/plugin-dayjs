<template>
    <div class="dayjs-settings-edit">
        <wwEditorFormRow label="Date formats input">
            <template #append-label>
                <a class="dayjs-settings-edit__link" href="https://day.js.org/docs/en/display/format" target="_blank">
                    Find example here
                </a>
                <div class="action-container">
                    <button type="button" class="ww-editor-button -icon -small -primary action" @click="addFormat">
                        <wwEditorIcon name="add" /> Add
                    </button>
                </div>
                <wwEditorQuestionMark class="ml-2" tooltip-position="bottom-right" tooltip-name="dayjs-input-formats" />
            </template>
            <div
                v-for="(format, index) in settings.publicData.inputFormatList"
                :key="`format-${index}`"
                class="format-item"
            >
                <wwEditorInputText
                    class="format-item__field"
                    placeholder="YYYY-MM-DDTHH:mm:ss.sssZ"
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
        <wwEditorFormRow label="Date format output">
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
        margin-bottom: var(--ww-spacing-02);

        &__field {
            width: 100%;
        }
    }
}
</style>
