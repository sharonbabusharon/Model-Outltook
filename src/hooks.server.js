
import {configure_globals} from "$lib/server/server_info.js";


await configure_globals();

export const handle = async ({ event, request, url, resolve, cookies }) => {


		// Required for CORS to work
	if(event.request.method === 'OPTIONS') {
		if (event.url.pathname.indexOf('/api/') !== -1) {
			return new Response(null, {
				headers: {
					'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Headers': '*',
				}
			});
		}
	}

	return resolve(event, {
		transformPageChunk: ({ html }) => {
			try {
				const website_head_str_to_replace_placeholder = '<!--website_head_str_to_replace-->';
				let meta_tags_str = get_platform_head_part_from_html(html);
				if(!meta_tags_str){
					global.logd(html);
					return html;
				}
				html = html.replace(meta_tags_str, '\n\n\n\n\n');
				// global.logd(' ~~~~~~~~~ meta_tags_str', meta_tags_str);

				// global.logd(html);
				// global.logd('\n======================================================\n\n');

				return html.replace(website_head_str_to_replace_placeholder, meta_tags_str);
			} catch (e) {
				return html;
			}
		}
	});
};

global.MODEL_OUTLOOK = process.env.MODEL_OUTLOOK || 'C:\\Users\\nucbi\\OneDrive\\Desktop\\projects\\Model_Outlook_Online__V1_initial_code_with_git\\Model_Outlook_Online';
// global.PUPPETEER_PDF_IMAGE_EXPORTER_ROOT_DIRECTORY = process.env.PUPPETEER_PDF_IMAGE_EXPORTER_ROOT_DIRECTORY || 'C:\\Binary_Projects\\Quotation Project\\puppeteer_pdf_image_exporter';


global.server_info = {};

global.server_info.directories = {
	root: global.MODEL_OUTLOOK
};
global.server_info.directories.src = global.server_info.directories.root + '/src';
global.server_info.directories.static = global.server_info.directories.root + '/static';
global.server_info.directories.routes = global.server_info.directories.src + '/routes';
global.server_info.directories.model_data = global.server_info.directories.root + '/MODEL_DATA'


export function get_platform_head_part_from_html(full_html) {
	const start_index_tag = 'name="bigdate:platform_meta_tags_start"';
	const end_index_tag = 'name="bigdate:platform_meta_tags_end"';

	let start_index = full_html.indexOf(start_index_tag);
	if (start_index === -1) {
		// global.logd('====================== youuu ================');
		return '';
	}
	let end_index = full_html.indexOf(end_index_tag, start_index);
	end_index = full_html.indexOf('>', end_index);

	let meta_tags_str = full_html.substring(start_index - 6, end_index + end_index_tag.length + 1);

	meta_tags_str = meta_tags_str.substring(0, meta_tags_str.lastIndexOf('">') + 2);
	return meta_tags_str;
}
