const a = [
    {
        namespaceURI: 'http://schemas.android.com/apk/res/android',
        nodeType: 2,
        nodeName: 'versionCode',
        name: 'versionCode',
        value: null,
        typedValue: {value: 20190201, type: 'int_dec', rawType: 16}
    },
    {
        namespaceURI: 'http://schemas.android.com/apk/res/android',
        nodeType: 2,
        nodeName: 'versionName',
        name: 'versionName',
        value: '2.1',
        typedValue: {value: '2.1', type: 'string', rawType: 3}
    },
    {
        namespaceURI: 'http://schemas.android.com/apk/res/android',
        nodeType: 2,
        nodeName: 'hardwareAccelerated',
        name: 'hardwareAccelerated',
        value: null,
        typedValue: {value: true, type: 'boolean', rawType: 18}
    },
    {
        namespaceURI: null,
        nodeType: 2,
        nodeName: 'package',
        name: 'package',
        value: 'com.symptomate.mobile',
        typedValue:
            {value: 'com.symptomate.mobile', type: 'string', rawType: 3}
    }
];

const theIdToFind = 'package';
const found = a.find(user => user.name === theIdToFind);
console.log(found.value);
