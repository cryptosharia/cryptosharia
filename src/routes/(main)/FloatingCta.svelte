<script lang="ts">
	import { WhatsAppIcon, DiscordIcon } from '$lib/components/icons';
	import { cn } from '$lib/utils';

	const links = [
		{
			name: 'Discord',
			Icon: DiscordIcon,
			color: '#5865F2',
			url: 'https://discord.gg/b9cmHfcZpA'
		},
		{
			name: 'WhatsApp',
			Icon: WhatsAppIcon,
			color: '#25D366',
			url: 'https://chat.whatsapp.com/KXx0GnVBfbACIcOKjmdSdW'
		}
	];

	let { isShown } = $props<{ isShown: boolean }>();

	let width = $state(0);
</script>

<div
	bind:offsetWidth={width}
	id="floating-cta"
	style:--width="{width}px"
	style:--margin={!width ? '0' : '1rem'}
	class={cn(
		'fixed bg-card',
		'fl-right-2/3 fl-bottom-2/3',
		'z-50 fl-space-y-1/1.5 px-2.5 py-2.5',
		'rounded-2xl border shadow-xl',
		'transition-transform duration-1000',
		isShown ? 'translate-x-0' : 'translate-x-[calc(var(--width)+var(--margin))]'
	)}
>
	<div class="text-center text-lg fl-text-base/xl leading-none font-semibold text-primary">
		Join Komunitas
	</div>
	<div class="flex flex-row justify-around">
		{#each links as link}
			<span
				style:--color={link.color}
				class="fl-size-10/12 text-(--color) transition-transform hover:scale-110"
			>
				<a href={link.url} target="_blank">
					<link.Icon />
				</a>
			</span>
		{/each}
	</div>
</div>
