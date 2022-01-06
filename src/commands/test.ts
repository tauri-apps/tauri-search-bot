import type { SupabaseClient } from '@supabase/supabase-js';
import { SVELTE_ORANGE } from '../config.js';
import { command } from 'jellycommands';

export default command({
	name: 'test',
	description: 'Testing that the bot works fine',

	dev: true,

	run: ({ interaction, client }) => {
		const supabase = client.props.get<SupabaseClient>('supabase');

		interaction.reply({
			embeds: [{ description: 'Hello World!', color: SVELTE_ORANGE }],
		});
	},
});
