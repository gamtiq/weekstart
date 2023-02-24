/**
 * Contains full mapping of language code to country code.
 * Data only for countries which first day of week is not monday.
 * 
 * @module fullLangRegionMap
 */


/* eslint-disable camelcase */
/**
 * Full mapping of language code to country code.
 * Contains data only for countries which first day of week is not monday.
 *
 * Based on:
 * - [https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/territory_language_information.html](https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/territory_language_information.html)
 * - [https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/language_territory_information.html](https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/language_territory_information.html)
 * - [https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/scripts_languages_and_territories.html](https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/scripts_languages_and_territories.html)
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
    bjj: 'IN',
    sat: 'IN',
    wtm: 'IN',
    ks: 'IN',
    kok: 'IN',
    gom: 'IN',
    swv: 'IN',
    lmn: 'IN',
    gbm: 'IN',
    gon: 'IN',
    kfy: 'IN',
    kru: 'IN',
    doi: 'IN',
    wbq: 'IN',
    sck: 'IN',
    xnr: 'IN',
    wbr: 'IN',
    tcy: 'IN',
    khn: 'IN',
    brx: 'IN',
    noe: 'IN',
    bhb: 'IN',
    mni: 'IN',
    raj: 'IN',
    hoc: 'IN',
    mtr: 'IN',
    unr: 'IN',
    bhi: 'IN',
    hoj: 'IN',
    kha: 'IN',
    kfr: 'IN',
    grt: 'IN',
    unx: 'IN',
    bfy: 'IN',
    srx: 'IN',
    saz: 'IN',
    sd_deva: 'IN',
    ccp: 'IN',
    njo: 'IN',
    bfq: 'IN',
    ria: 'IN',
    bpy: 'IN',
    bra: 'IN',
    lep: 'IN',
    sa: 'IN',
    kht: 'IN',

    bn: 'BD',
    beng: 'BD',   // script
    rkt: 'BD',
    syl: 'BD',
    mro: 'BD',

    kgp: 'BR',
    gub: 'BR',
    yrl: 'BR',
    xav: 'BR',

    dz: 'BT',
    tibt: 'BT',   // script
    tsj: 'BT',

    tn: 'BW',

    pdt: 'CA',
    crk: 'CA',
    cr: 'CA',
    iu: 'CA',
    oj: 'CA',
    ojs: 'CA',
    moe: 'CA',
    mic: 'CA',
    bla: 'CA',
    crj: 'CA',
    atj: 'CA',
    crl: 'CA',
    csw: 'CA',
    crm: 'CA',
    ikt: 'CA',
    moh: 'CA',
    dgr: 'CA',
    den: 'CA',
    clc: 'CA',
    hur: 'CA',
    crg: 'CA',
    lil: 'CA',
    oka: 'CA',
    pqm: 'CA',
    kwk: 'CA',
    nsk: 'CA',
    chp: 'CA',
    gwi: 'CA',

    guc: 'CO',

    am: 'ET',
    ethi: 'ET',   // script
    om: 'ET',
    ti: 'ET',
    sid: 'ET',
    wal: 'ET',
    aa: 'ET',

    quc: 'GT',

    ch: 'GU',

    id: 'ID',
    jv: 'ID',
    su: 'ID',
    mad: 'ID',
    ms_arab: 'ID',
    min: 'ID',
    bew: 'ID',
    ban: 'ID',
    bug: 'ID',
    bjn: 'ID',
    ace: 'ID',
    sas: 'ID',
    bbc: 'ID',
    mak: 'ID',
    ljp: 'ID',
    rej: 'ID',
    gor: 'ID',
    nij: 'ID',
    kge: 'ID',
    aoz: 'ID',
    kvr: 'ID',
    lbw: 'ID',
    gay: 'ID',
    rob: 'ID',
    sxn: 'ID',
    mdr: 'ID',
    sly: 'ID',
    mwv: 'ID',

    he: 'IL',
    hebr: 'IL',   // script
    lad: 'IL',

    jam: 'JM',

    ja: 'JP',
    jpan: 'JP',   // script
    ryu: 'JP',

    ki: 'KE',
    luy: 'KE',
    luo: 'KE',
    kln: 'KE',
    kam: 'KE',
    guz: 'KE',
    mer: 'KE',
    ebu: 'KE',
    dav: 'KE',
    pko: 'KE',
    saq: 'KE',

    km: 'KH',
    khmr: 'KH',   // script
    cja: 'KH',

    ko: 'KR',
    kore: 'KR',   // script

    lo: 'LA',
    laoo: 'LA',   // script
    kjg: 'LA',
    hnj: 'LA',

    mh: 'MH',

    my: 'MM',
    mymr: 'MM',   // script
    shn: 'MM',
    kac: 'MM',
    rhg: 'MM',
    mnw: 'MM',

    mt: 'MT',

    yua: 'MX',
    nhe: 'MX',
    nhw: 'MX',
    maz: 'MX',
    nch: 'MX',
    sei: 'MX',

    vmw: 'MZ',
    ndc: 'MZ',
    ngl: 'MZ',
    seh: 'MZ',
    mgh: 'MZ',
    rng: 'MZ',
    yao: 'MZ',

    ne: 'NP',
    'new': 'NP',
    jml: 'NP',
    dty: 'NP',
    taj: 'NP',
    thl: 'NP',
    bap: 'NP',
    tdg: 'NP',
    thr: 'NP',
    mgp: 'NP',
    lif: 'NP',
    thq: 'NP',
    mrd: 'NP',
    xsr: 'NP',
    rjs: 'NP',
    tsf: 'NP',
    ggn: 'NP',
    gvr: 'NP',
    tkt: 'NP',
    tdh: 'NP',
    unr_deva: 'NP',

    qu: 'PE',

    fil: 'PH',
    ceb: 'PH',
    ilo: 'PH',
    hil: 'PH',
    bik: 'PH',
    war: 'PH',
    fbl: 'PH',
    pam: 'PH',
    pag: 'PH',
    mdh: 'PH',
    tsg: 'PH',
    cps: 'PH',
    krj: 'PH',
    bto: 'PH',
    hnn: 'PH',
    tbw: 'PH',
    bku: 'PH',

    ur: 'PK',
    pa_arab: 'PK',
    lah: 'PK',
    ps: 'PK',
    sd: 'PK',
    skr: 'PK',
    bal: 'PK',
    brh: 'PK',
    hno: 'PK',
    bgn: 'PK',
    hnd: 'PK',
    tg_arab: 'PK',
    gju: 'PK',
    bft: 'PK',
    kvx: 'PK',
    khw: 'PK',
    mvy: 'PK',
    kxp: 'PK',
    gjk: 'PK',
    trw: 'PK',
    btv: 'PK',

    gn: 'PY',

    th: 'TH',
    thai: 'TH',   // script
    tts: 'TH',
    nod: 'TH',
    sou: 'TH',
    mfa: 'TH',
    kxm: 'TH',
    kdt: 'TH',
    lwl: 'TH',

    zh_hant: 'TW',
    hant: 'TW',   // script
    trv: 'TW',

    nv: 'US',
    pdc: 'US',
    haw: 'US',
    frc: 'US',
    chr: 'US',
    esu: 'US',
    dak: 'US',
    cho: 'US',
    lkt: 'US',
    ik: 'US',
    mus: 'US',

    sm: 'WS',
    
    zu: 'ZA',
    xh: 'ZA',
    af: 'ZA',
    nso: 'ZA',
    ts: 'ZA',
    ve: 'ZA',
    nr: 'ZA',

    sn: 'ZW',
    nd: 'ZW',
    mxc: 'ZW',
    kck: 'ZW',


    haz: 'AF',
    uz_arab: 'AF',
    prd: 'AF',

    arq: 'DZ',
    kab: 'DZ',

    ar: 'EG',
    arab: 'EG',   // script
    arz: 'EG',

    ckb: 'IQ',
    syr: 'IQ',

    fa: 'IR',
    az_arab: 'IR',
    mzn: 'IR',
    glk: 'IR',
    sdh: 'IR',
    lrc: 'IR',
    rmt: 'IR',
    bqi: 'IR',
    luz: 'IR',
    lki: 'IR',
    gbz: 'IR',

    bej: 'SD',
    fvr: 'SD',
    mls: 'SD',
    fia: 'SD',
    zag: 'SD',


    dv: 'MV',
    thaa: 'MV'   // script
};
/* eslint-enable camelcase */

export default langRegionMap;
