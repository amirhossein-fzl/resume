<script lang="ts">
    import Title from '@/components/Title.svelte';
    import { _ } from 'svelte-i18n';

    // Technologies icons
    import TechCard from '@/components/TechCard.svelte';
    import TypescriptIcon from '@/svg/icons/typescript.svg?raw';
    import JavascriptIcon from '@/svg/icons/javascript.svg?raw';
    import JqueryIcon from '@/svg/icons/jquery.svg?raw';
    import BootstrapIcon from '@/svg/icons/bootstrap.svg?raw';
    import LaravelIcon from '@/svg/icons/laravel.svg?raw';
    import LinuxIcon from '@/svg/icons/linux.svg?raw';
    import MysqlIcon from '@/svg/icons/mysql.svg?raw';
    import PhpIcon from '@/svg/icons/php.svg?raw';
    import PostgresqlIcon from '@/svg/icons/postgresql.svg?raw';
    import ReactIcon from '@/svg/icons/react.svg?raw';
    import RustIcon from '@/svg/icons/rust.svg?raw';
    import SassIcon from '@/svg/icons/sass.svg?raw';
    import SvelteIcon from '@/svg/icons/svelte.svg?raw';
    import TailwindIcon from '@/svg/icons/tailwind.svg?raw';
    import VueIcon from '@/svg/icons/vue.svg?raw';
    import WasmIcon from '@/svg/icons/wasm.svg?raw';
</script>

<div class="row">
    <div class="item">
        <div>
            <Title title={$_('languages')} />

            <div class="techs">
                <TechCard icon={TypescriptIcon} title={$_('typescript.title')}>
                    {$_('typescript.value')}
                </TechCard>

                <TechCard icon={JavascriptIcon} title={$_('javascript.title')}>
                    {$_('javascript.value')}
                </TechCard>

                <TechCard icon={RustIcon} title={$_('rust.title')}>
                    {$_('rust.value')}
                </TechCard>

                <TechCard icon={PhpIcon} title={$_('php.title')}>
                    {$_('php.value')}
                </TechCard>
            </div>
        </div>

        <div>
            <Title title="CSS" />

            <div class="techs">
                <TechCard icon={SassIcon} title={$_('sass.title')}>
                    {$_('sass.value')}
                </TechCard>

                <TechCard icon={TailwindIcon} title={$_('tailwind.title')}>
                    {$_('tailwind.value')}
                </TechCard>

                <TechCard icon={BootstrapIcon} title={$_('bootstrap.title')}>
                    {$_('bootstrap.value')}
                </TechCard>
            </div>
        </div>

        <div>
            <Title title={$_('os')} />

            <TechCard icon={LinuxIcon} title={$_('linux.title')}>
                {$_('linux.value')}
            </TechCard>
        </div>
    </div>

    <div class="item">
        <div>
            <Title title={$_('freamworks')} />

            <div class="techs">
                <TechCard icon={ReactIcon} title={$_('react.title')}>
                    {$_('react.value')}
                </TechCard>

                <TechCard icon={SvelteIcon} title={$_('svelte.title')}>
                    {$_('svelte.value')}
                </TechCard>

                <TechCard icon={VueIcon} title={$_('vue.title')}>
                    {$_('vue.value')}
                </TechCard>

                <TechCard icon={LaravelIcon} title={$_('laravel.title')}>
                    {$_('laravel.value')}
                </TechCard>
            </div>
        </div>

        <div>
            <Title title={$_('databases')} />

            <div class="techs">
                <TechCard icon={PostgresqlIcon} title={$_('postgresql.title')}>
                    {$_('postgresql.value')}
                </TechCard>

                <TechCard icon={MysqlIcon} title={$_('mysql.title')}>
                    {$_('mysql.value')}
                </TechCard>
            </div>
        </div>

        <div>
            <Title title={$_('other')} />

            <div class="techs">
                <TechCard icon={WasmIcon} title={$_('wasm.title')}>
                    {$_('wasm.value')}
                </TechCard>

                <TechCard icon={JqueryIcon} title={$_('jquery.title')}>
                    {$_('jquery.value')}
                </TechCard>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    .row {
        // @apply grid grid-cols-2 gap-6;
        @apply flex flex-wrap w-full;
        .item {
            @apply max-w-full w-full flex-auto px-6 h-fit;
            @apply flex flex-col gap-10 lg:w-6/12;
        }
    }

    .techs {
        @apply grid gap-4;
    }
</style>
