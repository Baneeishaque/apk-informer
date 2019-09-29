const apk = require('android-apk');
const {DirectTree: {Get}} = require('direct-object');

async function get_apk_manifest(apk_file) {
    // const apk_zip = await apk.read(apk_file);
    // const apk_manifest = await apk.manifest(apk_zip);
    // return apk_manifest;
    return await apk.manifest(await apk.read(apk_file));
}

module.exports = async function get_package_name(apk_file) {
    const apk_manifest = await get_apk_manifest(apk_file);
    // const apk_package_name = object_utils.DirectTree.Get(apk_manifest, 'attributes/3/value');
    // return apk_package_name;
    // return object_utils.DirectTree.Get(await get_apk_manifest(apk_file), 'attributes/3/value');
    // const apk_attributes = Get(apk_manifest, 'attributes');
    return Get(apk_manifest, 'attributes').find(package_node => package_node.name === 'package');
};

// get_package_name('Symptomate_2.1.apk')
//     .then(
//         apk_package_name => {
//             console.log(apk_package_name);
//         }
//     )
//     .catch(
//         error => {
//             console.error(error);
//         }
//     );
