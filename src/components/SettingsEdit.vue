<template>
    <div class="dayjs-settings-edit">
        <wwEditorFormRow label="Favorite format">
            <template #append-label>
                <a class="dayjs-settings-edit__link" href="https://day.js.org/docs/en/display/format" target="_blank">
                    Find example here
                </a>
            </template>
            <wwEditorInputText
                type="text"
                name="favorite-format"
                placeholder="MMMM D, YYYY h:mm A"
                :model-value="settings.publicData.favoriteFormat"
                large
                @update:modelValue="changeFavoriteFormat"
            />
        </wwEditorFormRow>
        <wwEditorFormRow label="Add locales">
            <template #append-label>
                <wwEditorInputSwitch
                    class="m-auto-left"
                    :model-value="c_isCustomLocales"
                    @update:modelValue="setIsCustomLocales"
                />
            </template>
            <span class="label-s m-bottom">
                By default, the loaded locales are those of the languages present on your site, but you can add others
                manually.
            </span>
            <div v-if="isCustomLocales" class="dayjs-settings-edit__row -wrap">
                <wwEditorInputTextSelect
                    v-for="(locale, index) in c_locales"
                    :key="index"
                    class="m-bottom m-right"
                    :model-value="locale"
                    :options="localesOptions()"
                    :actions="localesActions"
                    :disabled="websiteLangs.includes(locale)"
                    placeholder="Select a locale"
                    small
                    @update:modelValue="handleLocales(index, $event)"
                    @action="$event.onAction(index)"
                />
                <wwEditorInputTextSelect
                    v-if="c_locales.length"
                    class="m-bottom"
                    :options="localesOptions(true)"
                    placeholder="Select a locale"
                    small
                    @update:modelValue="handleLocales(null, $event)"
                />
            </div>
        </wwEditorFormRow>
    </div>
</template>

<script>
import * as locales from 'dayjs/locale';

export default {
    props: {
        settings: { type: Object, required: true },
    },
    emits: ['update:settings'],
    data() {
        return {
            isCustomLocales: false,
            selectedLocales: [],
            localesActions: [{ icon: 'delete', label: 'Remove locale', onAction: this.deleteLocale }],
            publicData: {},
        };
    },
    computed: {
        websiteLangs() {
            return wwLib.$store.getters['websiteData/getDesignInfo'].langs.map(lang => lang.lang);
        },
        c_locales() {
            return [...this.websiteLangs, ...this.selectedLocales];
        },
        c_isCustomLocales() {
            return this.isCustomLocales && this.selectedLocales.length;
        },
    },
    watch: {
        publicData: {
            deep: true,
            immediate: true,
            handler(newData, oldData) {
                this.$emit('update:settings', {
                    ...this.settings,
                    publicData: { ...oldData, ...newData },
                });
            },
        },
    },
    created() {
        if (this.settings.publicData && this.settings.publicData.locales)
            this.selectedLocales = this.settings.publicData.locales.filter(
                locale => !this.websiteLangs.includes(locale)
            );

        this.publicData = this.settings.publicData;
    },
    methods: {
        changeFavoriteFormat(favoriteFormat) {
            this.publicData = { ...this.publicData, favoriteFormat };
        },
        localesOptions(filter) {
            if (filter)
                return locales.default
                    .map(locale => ({ label: locale.key, value: locale.key }))
                    .sort((a, b) => a.label.localeCompare(b.label))
                    .filter(locale => !this.c_locales.includes(locale.value));

            return locales.default
                .map(locale => ({ label: locale.key, value: locale.key }))
                .sort((a, b) => a.label.localeCompare(b.label));
        },
        handleLocales(index, locale) {
            if (!locale) return;
            this.selectedLocales.push(locale);

            this.publicData = { ...this.publicData, locales: this.c_locales };
        },
        deleteLocale(index) {
            this.selectedLocales.splice(index - this.websiteLangs.length, 1);

            this.publicData = { ...this.publicData, locales: this.c_locales };
        },
        setIsCustomLocales() {
            this.isCustomLocales = !this.isCustomLocales;
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
