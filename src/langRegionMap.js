/**
 * Contains base mapping of language code to country code.
 * Contains data only for countries which first day of week is not monday,
 * and mainly for languages approximately having more than 10 mln speakers.
 *
 * Based on data from `fullLangRegionMap.js`.
 * 
 * @module langRegionMap
 */


/* eslint-disable camelcase */
/**
 * Base mapping of language code to country code.
 * Contains data only for countries which first day of week is not monday,
 * and mainly for languages approximately having more than 10 mln speakers.
 *
 * Based on data from `fullLangRegionMap.js`.
 */
const langRegionMap = {
    en: 'US',
    
    hi: 'IN',
    deva: 'IN',   // script
    te: 'IN',
    mr: 'IN',
    ta: 'IN',
    gu: 'IN',
    kn: 'IN',
    or: 'IN',
    ml: 'IN',
    pa: 'IN',
    bho: 'IN',
    awa: 'IN',
    as: 'IN',
    mwr: 'IN',
    mai: 'IN',
    mag: 'IN',
    bgc: 'IN',
    hne: 'IN',
    dcc: 'IN',

    bn: 'BD',
    beng: 'BD',   // script
    rkt: 'BD',

    dz: 'BT',
    tibt: 'BT',   // script

    tn: 'BW',

    am: 'ET',
    ethi: 'ET',   // script
    om: 'ET',

    quc: 'GT',

    id: 'ID',
    jv: 'ID',
    su: 'ID',
    mad: 'ID',
    ms_arab: 'ID',

    he: 'IL',
    hebr: 'IL',   // script

    jam: 'JM',

    ja: 'JP',
    jpan: 'JP',   // script

    km: 'KH',
    khmr: 'KH',   // script

    ko: 'KR',
    kore: 'KR',   // script

    lo: 'LA',
    laoo: 'LA',   // script

    mh: 'MH',

    my: 'MM',
    mymr: 'MM',   // script

    mt: 'MT',

    ne: 'NP',

    fil: 'PH',
    ceb: 'PH',
    ilo: 'PH',

    ur: 'PK',
    pa_arab: 'PK',
    lah: 'PK',
    ps: 'PK',
    sd: 'PK',
    skr: 'PK',

    gn: 'PY',

    th: 'TH',
    thai: 'TH',   // script
    tts: 'TH',

    zh_hant: 'TW',
    hant: 'TW',   // script

    sm: 'WS',
    
    zu: 'ZA',

    sn: 'ZW',


    arq: 'DZ',

    ar: 'EG',
    arab: 'EG',   // script
    arz: 'EG',

    fa: 'IR',
    az_arab: 'IR',


    dv: 'MV',
    thaa: 'MV'   // script
};
/* eslint-enable camelcase */

export default langRegionMap;
