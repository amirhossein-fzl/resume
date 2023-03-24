<script lang="ts">
    import { _ } from 'svelte-i18n';
    import clsx from 'clsx';

    // @ts-ignore
    const age = Math.floor((new Date() - new Date("2005-06-15").getTime()) / 3.15576e+10);
    let is_ready: boolean = true;
</script>

<div class="flex gap-4">
    <div class="about">
        <img src="/img/amir-developer.jpg" class="profile" alt="amirhossein fazli profile">
        <div class="qoute-box">
            <p>
                {$_('about-1')}
            </p>
            <p>
                {$_('about-2')}
            </p>
            <p>
                {$_('about-3')}
            </p>
            <p>
                {$_('about-4')}
            </p>
        </div>
    </div>

    <div class="info">
        <div class="box">
            <ul>
                <li>
                    <span class="title">{$_('fullname')}</span>
                    <span class="value">{$_('name')}</span>
                </li>
                <li>
                    <span class="title">{$_('age')}</span>
                    <span class="value">{age}</span>
                </li>
                <li>
                    <span class="title">{$_('country')}</span>
                    <span class="value">{$_('my_country')}</span>
                </li>
                <li>
                    <span class="title">{$_('city')}</span>
                    <span class="value">{$_('my_city')}</span>
                </li>
                <li>
                    <span class="title">{$_('address')}</span>
                    <span class="value">{$_('my_address')}</span>
                </li>
                <li>
                    <span class="title">{$_('status')}</span>
                    <span class={clsx('value', 'status', is_ready ? 'ready' : 'no-ready')}>{$_('my_status')}</span>
                </li>
            </ul>
        </div>
    </div>
</div>

<style lang="scss">
    .about {
        @apply w-7/12 flex gap-4 items-start;
        p:not(:first-child) {
            @apply mt-3;
        }

        p {
            @apply text-sm;
        }
    }

    .info {
        @apply w-5/12;

        li {
            @apply flex items-center;
            &:not(:first-child) {
                @apply mt-3;
            }

            span {
                &.title {
                    @apply inline-block min-w-[7.5rem] text-sm text-slate-700;
                }
            }
        }
    }

    .profile {
        @apply w-20 h-auto rounded-full;
    }

    .qoute-box {
        @apply bg-slate-100 py-4 px-5 rounded-2xl relative w-full h-full;

        &::before {
            content: "";
            @apply bg-slate-100 w-3 h-3 inline-block absolute rotate-45 rounded-sm;
            @apply top-6 -right-1.5;
        }
    }

    .box {
        @apply bg-slate-100 py-4 px-5 rounded-2xl relative w-full h-full;
    }

    .status {
        @apply font-bold;
    }

    .ready {
        @apply text-green-500;
    }

    .no-ready {
        @apply text-red-500;
    }

    :global(html[dir="ltr"]) {
        .qoute-box {
            &::before {
                right: unset;
                @apply -left-1.5;
            }
        }
    }

    :global(.dark) {
        .qoute-box, .box {
            @apply bg-slate-800 shadow-dark;
        }

        .qoute-box::before {
            @apply bg-slate-800;
        }

        .info {
            li {
                span {
                    &.title {
                        @apply text-slate-400;
                    }
                }
            }
        }
    }
</style>