<script lang="ts">
    import Card from '@/components/Card.svelte';
    import Icon from '@/components/Icon.svelte';
    import CloseIcon from '@/svg/icons/close.svg?raw';
    import PhoneIcon from '@/svg/icons/phone.svg?raw';
    import MailIcon from '@/svg/icons/mail.svg?raw';
    import TelegramIcon from '@/svg/socials/telegram.svg?raw';
    import InstagramIcon from '@/svg/socials/instagram.svg?raw';
    import TwitterIcon from '@/svg/socials/twitter.svg?raw';
    import LinkedinIcon from '@/svg/socials/linkedin.svg?raw';
    import { onMount } from 'svelte';
    import { _ } from 'svelte-i18n';
    import clsx from 'clsx';
    import type { IFormData, Fields, IStatus } from '@/core/types/contact-form';
    import Validation from '@/core/validate';
    import { fly, scale } from 'svelte/transition';

    onMount(() => {
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

    let form: HTMLFormElement;
    let theme: string;
    let disabled_submit: boolean = false;
    $: theme = localStorage.getItem('theme');

    let status: IStatus = {
        show: false,
        status: 'error',
        message: 'contact_form.not_working',
    };

    let formData: IFormData = {
        name: '',
        email: '',
        // @ts-ignore
        phone: '',
        message: '',
    };

    let validation = new Validation<Fields>();

    validation.add_rule(
        'name',
        validation.is_empty,
        'validation-errors.name.required'
    );
    validation.add_rule(
        'email',
        validation.is_email,
        'validation-errors.email.invalid'
    );
    validation.add_rule(
        'email_or_phone',
        validation.require_one,
        'validation-errors.email_or_phone'
    );
    validation.add_rule(
        'message',
        validation.is_empty,
        'validation-errors.message.required'
    );
    validation.add_rule(
        'captcha',
        validation.is_empty,
        'validation-errors.captcha.required'
    );

    let validate_onchange = (field: Fields) => {
        if (field == 'email_or_phone') {
            validation.run_rule(field, formData.email, formData.phone);
        } else {
            validation.run_rule(field, formData[field]);
        }
        validation = validation;
    };

    let validate = () => {
        validation.run_rule('name', formData.name);
        validation.run_rule('email', formData.email);
        validation.run_rule(
            'email_or_phone',
            formData.email,
            formData.phone.toString()
        );
        validation.run_rule('message', formData.message);

        let recaptcha_token: string =
            // @ts-ignore
            window.grecaptcha != undefined
                ? // @ts-ignore
                  window.grecaptcha.getResponse()
                : '';
        validation.run_rule('captcha', recaptcha_token);
        validation = validation;
    };

    let submit = () => {
        validate();

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

        let unexpected_error = (): void => {
            status.status = 'error';
            status.message = 'form-contact.result.unexpected';
            status = status;
        };

        if (!validation.has_error()) {
            status.show = true;
            status.status = 'loading';
            status.message = 'form-contact.result.loading';
            status = status;
            disabled_submit = true;

            fetch(form.action, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: data,
            })
                .then(async (response) => {
                    if (response.status == 200) {
                        status.status = 'success';
                        status.message = 'form-contact.result.success';
                        status = status;
                        form.reset();
                    } else if (response.status == 400) {
                        let error_messages = Object.entries(
                            (await response.json()).messages
                        );
                        let errors = validation.get_errors();

                        error_messages.forEach(
                            ([key, value]: [string, string]) => {
                                errors[key] = $_(value);
                            }
                        );

                        validation.set_errors(errors);
                        validation = validation;
                    } else {
                        unexpected_error();
                    }
                    disabled_submit = false;
                })
                .catch((_err) => {
                    unexpected_error();
                    disabled_submit = false;
                });
        }
    };
</script>

<div class="row main-row">
    <div class="item">
        <Card class="c-card">
            {#if status.show}
                <div
                    in:fly={{ duration: 300, y: -10 }}
                    out:fly={{ duration: 300, x: -50 }}
                    class={clsx(
                        'alert',
                        status.status != 'loading' &&
                            status.status != 'error' &&
                            status.status,
                        status.status == 'error' && 'danger'
                    )}
                >
                    <div class="msg-wrapper">
                        {#if status.status == 'loading'}
                            <div class="loading" />
                        {/if}
                        <span class="msg">{$_(status.message)}</span>
                    </div>

                    <button on:click={() => (status.show = !status.show)}>
                        <Icon icon={CloseIcon} />
                    </button>
                </div>
            {/if}

            <form
                action="https://puce-vivacious-butterfly.cyclic.app/contact"
                bind:this={form}
                on:submit|preventDefault={submit}
            >
                <div class="row">
                    <div class="input">
                        <label for="name">{$_('name')}</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            class={clsx(
                                validation.is_error('name') && 'invalid'
                            )}
                            bind:value={formData.name}
                            on:input={() => validate_onchange('name')}
                            placeholder={$_('name')}
                        />
                        {#if validation.is_error('name')}
                            <span class="error"
                                >{$_(validation.get_error('name'))}</span
                            >
                        {/if}
                    </div>
                </div>

                <div class="row mail-phone-row">
                    <div class="input">
                        <label for="email">{$_('email')}</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            class={clsx(
                                (validation.is_error('email') ||
                                    validation.is_error('email_or_phone')) &&
                                    'invalid'
                            )}
                            bind:value={formData.email}
                            on:input={() => {
                                validate_onchange('email_or_phone');
                                validate_onchange('email');
                            }}
                            placeholder={$_('email')}
                        />
                        {#if !validation.is_error('email_or_phone') && validation.is_error('email')}
                            <span class="error"
                                >{$_(validation.get_error('email'))}</span
                            >
                        {/if}
                    </div>

                    <div class="input">
                        <label for="phone">{$_('phone')}</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            bind:value={formData.phone}
                            class={clsx(
                                validation.is_error('email_or_phone') &&
                                    'invalid'
                            )}
                            on:input={() => validate_onchange('email_or_phone')}
                            placeholder={$_('phone')}
                        />
                    </div>

                    {#if validation.is_error('email_or_phone')}
                        <span class="error"
                            >{$_(validation.get_error('email_or_phone'))}</span
                        >
                    {/if}
                </div>

                <div class="row">
                    <div class="input">
                        <label for="message">{$_('message')}</label>
                        <textarea
                            id="message"
                            name="message"
                            class={clsx(
                                validation.is_error('message') && 'invalid'
                            )}
                            bind:value={formData.message}
                            on:input={() => validate_onchange('message')}
                            rows={4}
                            placeholder={$_('message')}
                        />
                        {#if validation.is_error('message')}
                            <span class="error"
                                >{$_(validation.get_error('message'))}</span
                            >
                        {/if}
                    </div>
                </div>

                <div>
                    <div
                        class={clsx(
                            'g-recaptcha',
                            validation.is_error('captcha') && 'invalid'
                        )}
                        data-theme={theme}
                        data-sitekey="6Lf5f6slAAAAAE_8nBxVlTSrEF1H2Gdu6PY7ZqEQ"
                    />

                    {#if validation.is_error('captcha')}
                        <span class="error"
                            >{$_(validation.get_error('captcha'))}</span
                        >
                    {/if}
                </div>

                <div class="row justify-center">
                    <button
                        type="submit"
                        disabled={disabled_submit}
                        class="submit-btn"
                    >
                        {#if disabled_submit}
                            <div
                                class="loading"
                                transition:scale={{ duration: 300 }}
                            />
                        {/if}
                        <span>{$_('send_message')}</span>
                    </button>
                </div>
            </form>
        </Card>
    </div>

    <div class="item">
        <Card class="c-card h-full">
            <div class="wrap">
                <p>
                    {$_('fill_form_or_other_ways')}
                </p>

                <div class="c-ways">
                    <a
                        href="tel:+989142275361"
                        target="_blank"
                        class="contact-way"
                    >
                        <Icon icon={PhoneIcon} />
                        <span>+98 914 227 5361</span>
                    </a>
                    <a
                        href="mailto:amirhossein95b@gmail.com"
                        target="_blank"
                        class="contact-way"
                    >
                        <Icon icon={MailIcon} />
                        <span>amirhossein95b@gmail.com</span>
                    </a>
                </div>

                <div class="socials">
                    <a
                        href="https://t.me/amirhossein_fzl/"
                        target="_blank"
                        class="tg"
                    >
                        <Icon icon={TelegramIcon} />
                    </a>

                    <a
                        href="https://instagram.com/amirhossein_fzl/"
                        target="_blank"
                        class="ig"
                    >
                        <Icon icon={InstagramIcon} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/amirhossein-fazli-b7249026a/"
                        target="_blank"
                        class="in"
                    >
                        <Icon icon={LinkedinIcon} />
                    </a>

                    <a
                        href="https://twitter.com/amirhossein_fzl/"
                        target="_blank"
                        class="tw"
                    >
                        <Icon icon={TwitterIcon} />
                    </a>
                </div>
            </div>
        </Card>
    </div>
</div>

<style lang="scss">
    .row {
        @apply grid gap-6;
    }

    .main-row {
        @apply min-[960px]:grid-cols-2;
        .item {
            &:first-child {
                @apply order-last min-[960px]:order-first;
            }
        }
    }

    .mail-phone-row {
        @apply sm:grid-cols-2;
    }

    :global(.c-card) {
        @apply rounded-xl px-4 py-4 w-full;
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

    .loading {
        @apply animate-spin w-5 h-5 border-[3px] border-white;
        @apply border-r-transparent rounded-full inline-block;
    }

    form {
        @apply grid gap-6;
        input,
        textarea {
            @apply bg-transparent outline outline-1 outline-slate-300 bg-white rounded-xl;
            @apply duration-300 py-2 px-4 w-full mt-1.5;

            &:focus {
                @apply outline-1 outline-blue-500;
            }
        }

        textarea {
            @apply block py-2.5;
        }

        .invalid {
            outline-color: theme('colors.red.500') !important;
        }
    }

    .error {
        @apply text-xs text-red-500 mt-2;
    }

    .g-recaptcha {
        @apply w-fit;

        &.invalid {
            @apply border-2 border-red-500;
        }
    }

    .submit-btn {
        @apply bg-blue-500 text-white w-fit px-4 py-2 rounded-2xl;
        @apply font-semibold flex items-center gap-2;
        &:disabled {
            @apply bg-blue-400;
        }
    }

    .wrap {
        @apply h-full flex flex-col justify-between;
    }

    .c-ways {
        @apply flex flex-col gap-5 items-center mt-5;
    }

    .contact-way {
        direction: ltr;
        @apply flex items-center gap-3 border border-blue-500;
        @apply p-3 rounded-2xl w-fit text-blue-500;
    }

    .socials {
        @apply flex justify-center items-center mt-10 gap-4;

        a {
            @apply p-2 rounded-full duration-300;
        }
    }

    :global(.dark) {
        input,
        textarea {
            @apply outline-slate-600 bg-transparent;
        }
    }
</style>
