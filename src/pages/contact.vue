<script setup lang="ts">
import WithProfileLayout from "@/layouts/WithProfileLayout.vue";
import Icon from "@/components/Icon.vue";
import CloseIcon from "@/assets/svg/icons/close.svg?raw";
import PhoneIcon from "@/assets/svg/icons/phone.svg?raw";
import MailIcon from "@/assets/svg/icons/mail.svg?raw";
import TelegramIcon from "@/assets/svg/socials/telegram.svg?raw";
import InstagramIcon from "@/assets/svg/socials/instagram.svg?raw";
import XIcon from "@/assets/svg/socials/x.svg?raw";
import LinkedinIcon from "@/assets/svg/socials/linkedin.svg?raw";
import { type Ref, onMounted, ref, watch } from "vue";
import { useTheme } from "@/stores/theme";
import { Validation } from "@/core/contact-from-validation";
import type IResult from "@/core/types/contact_from/IResult";
import config from "@config";
import { useHead } from "@unhead/vue";

useHead({
    title: "Contact - Amirhossein Fazli",
    link: [
        {
            rel: "canonical",
            href: `${config.url}/contact`,
        }
    ],
    meta: [
        {
            name: "title",
            content: "Contact - Amirhossein Fazli"
        },
        {
            name: "description",
            content: "Contact Amirhossein Fazli from our contact page."
        },
        {
            name: "keywords",
            content: "Amirhossein,Fazli,Contact,امیرحسین,فضلی,تماس باما"
        },
        {
            name: "robots",
            content: "index, follow"
        },

        // OpenGraph meta tags
        {
            property: "og:title",
            content: "Contact - Amirhossein Fazli",
        },
        {
            property: "og:site_name",
            content: "Amirhossein fazli personal site",
        },
        {
            property: "og:url",
            content: `${config.url}/contact`,
        },
        {
            property: "og:description",
            content: "Contact Amirhossein Fazli from our contact page.",
        },
        {
            property: "og:type",
            content: "webpage",
        },

        // Twitter card meta tags
        {
            property: "twitter:card",
            content: "summary_large_image",
        },
        {
            property: "twitter:site",
            content: config.twitter_username,
        },
        {
            property: "twitter:title",
            content: "Contact - Amirhossein Fazli",
        },
        {
            property: "twitter:description",
            content: "Contact Amirhossein Fazli from our contact page.",
        },
        {
            property: "twitter:image",
            content: "https://amirhossein-fzl-dev.ir/img/amir-developer.jpg",
        },
    ]
});

const theme = useTheme();
// Contact form element
let form: HTMLFormElement;
const phone = config.contact.phone.replace(/\s/g, "");

const form_values = ref({
    name: "",
    email: "",
    phone: "",
    message: "",
});
const submiting: Ref<boolean> = ref(false);
const result: Ref<IResult> = ref({
    show: false,
    status: "error",
    message: "contact_form.not_working",
});
const validation = new Validation(form_values.value);

watch(() => form_values.value, () => {
    if (validation.has_error()) {
        validation.validate();
    }
}, {
    deep: true,
});

onMounted(() => {
    let script_el = document.getElementById('googleRecaptchaScript');

    let create_script = () => {
        const script = document.createElement('script');
        script.id = 'googleRecaptchaScript';
        script.src = `https://www.google.com/recaptcha/api.js`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
    };

    if (script_el == null) {
        create_script();
    } else {
        script_el.remove();
        create_script();
    }
});

const close_alert = () => {
    result.value.show = false;
};

const submitForm = () => {
    validation.validate();

    let unexpected_error = (): void => {
        result.value.show = true;
        result.value.status = "error";
        result.value.message = "form-contact.result.unexpected";
    };

    // Contact html form element data
    let form_data = new FormData(form);

    let data = new URLSearchParams();
    // @ts-ignore
    data.append('name', form_data.get('name'));
    // @ts-ignore
    data.append('email', form_data.get('email'));
    // @ts-ignore
    data.append('phone', form_data.get('phone'));
    // @ts-ignore
    data.append('message', form_data.get('message'));
    data.append(
        'g-recaptcha-response',
        // @ts-ignore
        form_data.get('g-recaptcha-response') || ''
    );

    if (!validation.has_error()) {
        // Form result alert show
        result.value.show = true;
        result.value.status = "loading";
        result.value.message = "form-contact.result.unexpected";

        fetch(form.action, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: data,
        }).then(async (response) => {
            if (response.status == 200) {
                result.value.status = 'success';
                result.value.message = 'form-contact.result.success';
                form.reset();
            } else if (response.status == 400) {
                let error_messages = Object.entries(
                    (await response.json()).messages
                );
                let errors = validation.get_errors();

                error_messages.forEach((key, value) => {
                    // @ts-ignore
                    errors[key] = value;
                });

                validation.set_errors(errors);
            } else {
                unexpected_error();
            }
            submiting.value = false;
        })
            .catch((_err) => {
                unexpected_error();
                submiting.value = false;
            });
    }
};
</script>

<template>
    <WithProfileLayout>

        <h1 class="page-title">{{ $t("contact_me") }}</h1>

        <div class="flex-container">
            <div class="item">
                <div class="flex flex-col gap-6">
                    <img class="contact-img" src="@/assets/svg/vectors/contact-me.svg" alt="Contact me vector image ...">

                    <div class="card">
                        <div class="contact">
                            <a class="cwl" :href="`mailto:${config.contact.email}`">
                                <span>
                                    <Icon :icon="MailIcon" :size="25" />
                                </span>
                                <span>{{ config.contact.email }}</span>
                            </a>
                            <a class="cwl" :href="`tel:${phone}`">
                                <span>
                                    <Icon :icon="PhoneIcon" :size="25" />
                                </span>
                                <span>+98 914 227 5361</span>
                            </a>

                            <div class="socials">
                                <a :href="config.social_networks.telegram" target="_blank" class="tg">
                                    <Icon :icon="TelegramIcon" />
                                </a>

                                <a :href="config.social_networks.instagram" target="_blank" class="ig">
                                    <Icon :icon="InstagramIcon" />
                                </a>

                                <a :href="config.social_networks.linkedin" target="_blank" class="in">
                                    <Icon :icon="LinkedinIcon" />
                                </a>

                                <a :href="config.social_networks.x" target="_blank" class="tw">
                                    <Icon :icon="XIcon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="card">
                    <div class="contact-form">

                        <Transition name="fly">
                            <div :class="['alert', { success: result.status == 'success', danger: result.status == 'error' }]"
                                v-if="result.show">
                                <div class="msg-wrapper">
                                    <div class="loading" v-if="result.status == 'loading'"></div>

                                    <span class="msg">{{ $t(result.message) }}</span>
                                </div>

                                <button @click="close_alert">
                                    <Icon :icon="CloseIcon" />
                                </button>
                            </div>
                        </Transition>

                        <form action="https://puce-vivacious-butterfly.cyclic.app/contact" method="post" ref="form"
                            @submit.prevent="submitForm">
                            <div class="field">
                                <label for="name">{{ $t("name") }}</label>
                                <input type="text" id="name" name="name" :class="{ invalid: validation.is_error('name') }"
                                    v-model="form_values.name" :placeholder="$t('name')" />

                                <span class="error" v-if="validation.is_error('name')">{{ $t(validation.get_error("name")) }}</span>
                            </div>

                            <div class="email-phone">
                                <div class="field">
                                    <label for="email">{{ $t("email") }}</label>
                                    <input type="text" name="email"
                                        :class="{ invalid: validation.is_error('email') || validation.is_error('email_or_phone') }"
                                        v-model="form_values.email" id="email" :placeholder="$t('email')" />

                                    <span class="error"
                                        v-if="validation.is_error('email') && !validation.is_error('email_or_phone')">{{
                                            $t(validation.get_error("email")) }}</span>
                                </div>
                                <div class="field">
                                    <label for="phone">{{ $t("phone") }}</label>
                                    <input type="text" name="phone"
                                        :class="{ invalid: validation.is_error('phone') || validation.is_error('email_or_phone') }"
                                        v-model="form_values.phone" id="phone" :placeholder="$t('phone')" />

                                    <span class="error"
                                        v-if="validation.is_error('phone') && !validation.is_error('email_or_phone')">{{
                                            $t(validation.get_error("phone")) }}</span>
                                </div>

                                <span class="error" v-if="validation.is_error('email_or_phone')">{{
                                    $t(validation.get_error("email_or_phone")) }}</span>
                            </div>

                            <div class="field">
                                <label for="message">{{ $t("message") }}</label>
                                <textarea name="message" :class="{ invalid: validation.is_error('message') }"
                                    v-model="form_values.message" id="message" rows="4"
                                    :placeholder="$t('message')"></textarea>

                                <span class="error" v-if="validation.is_error('message')">{{
                                    $t(validation.get_error("message")) }}</span>
                            </div>

                            <div>
                                <div class="captcha-container">
                                    <div :class="['g-recaptcha', { invalid: validation.is_error('captcha') }]"
                                        :data-theme="theme.value" data-sitekey="6Lf5f6slAAAAAE_8nBxVlTSrEF1H2Gdu6PY7ZqEQ">
                                    </div>
                                </div>
                                <span class="error" v-if="validation.is_error('captcha')">{{
                                    $t(validation.get_error('captcha')) }}</span>
                            </div>

                            <button class="submit-btn" type="submit" :disabled="submiting">
                                <div class="loading" v-if="submiting"></div>
                                <span>{{ $t("send_message") }}</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </WithProfileLayout>
</template>

<style scoped lang="scss">
.flex-container {
    @apply flex flex-col gap-8 md:flex-row md:rtl:flex-row-reverse;
    @apply px-2 sm:px-0;
}

.item {
    @apply w-full;
}

.card {
    @apply dark:bg-slate-800 dark:shadow-dark rounded-2xl;
    @apply ring-1 ring-slate-900/5 dark:ring-0 shadow-light;
}

.contact-img {
    @apply w-10/12 sm:w-[370px] mx-auto select-none;
}

.contact {
    @apply p-4 flex flex-col gap-4 items-center;

    &-form {
        @apply p-4;

        form {
            @apply grid gap-y-6 grid-cols-1 w-full;
        }
    }
}

.alert {
    @apply bg-cyan-500 px-4 py-2 rounded-xl mb-5 flex;
    @apply items-center justify-between text-white;
    @apply duration-300 text-sm;

    &.success {
        @apply bg-green-500;
    }

    &.danger {
        @apply bg-red-500;
    }

    .msg-wrapper {
        @apply flex items-center gap-2;
    }
}

// Contact Way Link (cwl)
.cwl {
    direction: ltr;
    @apply block border-blue-500 text-blue-500 border-2 rounded-xl;
    @apply flex items-center px-3 py-2.5 font-medium text-base;
    @apply w-fit;

    span {
        @apply block;

        &:first-child {
            @apply mr-2;
        }
    }
}

.socials {
    @apply flex justify-center items-center mt-10 gap-4;

    a {
        @apply p-2 rounded-full duration-300 dark:text-white;
        @apply text-slate-800;
    }
}

.fly {

    &-enter-active,
    &-leave-active {
        @apply duration-300;
    }

    &-enter-from {
        @apply -translate-y-3 opacity-0;
    }

    &-leave-to {
        @apply -translate-x-14 opacity-0;
    }
}

.field {
    @apply flex flex-col;

    label {
        @apply mb-1.5 font-medium dark:text-white;
    }

    input,
    textarea {
        @apply rounded-lg outline dark:outline-slate-700 outline-2 bg-transparent;
        @apply duration-300 px-2 py-1.5 outline-slate-300 shadow-light;

        &:focus {
            @apply outline outline-blue-500 outline-2;
        }

        &::placeholder {
            @apply text-sm;
        }
    }

    .invalid {
        @apply outline-red-500 #{!important};
    }
}

.email-phone {
    @apply grid sm:grid-cols-2 gap-6;

    input {
        direction: ltr;

        &::placeholder {
            @apply rtl:text-right;
        }
    }
}

.g-recaptcha {
    @apply w-fit scale-[0.77] sm:scale-100;

    &.invalid {
        @apply border-2 border-red-500;
    }
}

.captcha-container {
    @apply flex justify-center sm:justify-start mt-5;
}

.submit-btn {
    @apply bg-blue-500 text-white w-fit px-4 py-2 rounded-2xl;
    @apply font-semibold flex items-center gap-2 mx-auto;

    &:disabled {
        @apply bg-blue-400;
    }
}

.loading {
    @apply animate-spin min-w-[1.25rem] min-h-[1.25rem] border-[3px] border-white;
    @apply border-r-transparent rounded-full inline-block relative z-0;
}

.error {
    @apply text-xs text-red-500 mt-2;
}
</style>