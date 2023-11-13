
export const directories = {
    root: process.env.ROOT_DIRECTORY || 'X:\\Projects\\Model_Outlook_Online'
}

export async function configure_globals() {
    // directories.root = process.env.ROOT_DIRECTORY || 'G:\\WP_Ext_User_Data';

    global.FQDN = process.env.FQDN || 'www.modeloutlook.com';
    global.DOMAIN_NAME = process.env.DOMAIN_NAME || 'www.modeloutlook.com';
    global.IS_DEVELOPMENT_ENVIRONMENT = process.env.IS_IN_PRODUCTION !== '1';
    global.VERSION_CODE = process.env.VERSION_CODE || 1001;


}


