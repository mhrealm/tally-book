const ICON_BASE = 'https://yunres.feidee.com/fnc_archive_pubfile/'

const CATEGORY_ICON_PATHS = {
  工资: '01/FB/CsoXM2FSifGEYaIDAAAAAFSbnhU781.png',
  奖金: '02/02/CsoXM2FSifKEKZ9_AAAAAP_tD0I247.png',
  兼职收入: '02/01/CsoXNGFSifKEBYmKAAAAAKyBN6o840.png',
  理财收益: '02/16/CsoXNGFSifWEDvwbAAAAAJV-Grk334.png',
  红包收入: '02/08/CsoXM2FSifOEGps9AAAAAOuhy7Q818.png',
  报销收入: '02/26/CsoXNGFSifiEfCk-AAAAANf2OA0307.png',
  其他收入: '02/0F/CsoXM2FSifSEbBe0AAAAAJYAq10443.png',
  副业: '02/05/CsoXM2FSifKEGlgUAAAAAAJPXBs872.png',
  餐饮: '03/31/CsoXM2FoFJeES2ToAAAAAB970AY662.png',
  购物: '02/31/CsoXNGFSifqEVNJaAAAAABdleqI435.png',
  交通: '01/FB/CsoXNGFSifGEeHFLAAAAAOROxwU997.png',
  住房: '02/27/CsoXNGFSifiEf4DsAAAAAFNJOA0165.png',
  水电燃气: '03/34/CsoXNGFoFJeEE-p0AAAAAE7UzB4128.png',
  通讯网络: '02/30/CsoXM2FSifqERxxkAAAAAAh1la8682.png',
  医疗健康: '02/26/CsoXM2FSifiELiiqAAAAAN_RoDo851.png',
  教育学习: '02/2B/CsoXM2FSifmEEVoaAAAAAN4oafg784.png',
  娱乐休闲: '03/37/CsoXNGFoFJiEcoc1AAAAAFBSNBo897.png',
  旅行出行: '02/35/CsoXNGFSifuEFPK5AAAAAFMeZTM099.png',
  日用百货: '01/F7/CsoXM2FSifCEAfNZAAAAAIrz31s135.png',
  服饰美容: '02/0A/CsoXNGFSifOERjHUAAAAAOScuzo788.png',
  数码电器: '02/3A/CsoXM2FSifuESEQCAAAAAOIrJj0011.png',
  运动健身: '02/32/CsoXNGFSifqEOIzBAAAAAMPsFdc133.png',
  人情礼金: '03/36/CsoXM2FoFJiEbRPIAAAAADULhSQ647.png',
  育儿亲子: '02/21/CsoXNGFSifeETgh4AAAAAJ7g8mQ980.png',
  保险: '01/F1/CsoXM2FSie-EBjXcAAAAAAPGpMQ651.png',
  车辆: '01/EC/CsoXM2FSie6EF05XAAAAAOEmrJQ156.png',
  订阅会员: '02/1A/CsoXM2FSifaEfsPFAAAAAMpjEYk070.png',
  办公: '02/18/CsoXM2FSifaEH1LZAAAAAPWNf7A489.png',
  维修维护: '02/1D/CsoXNGFSifeEC88iAAAAAJxtYzY035.png',
  税费手续费: '02/09/CsoXM2FSifOEYsgnAAAAAMOEu9U801.png',
  其他: '02/0F/CsoXNGFSifSEevn_AAAAAJRHc40663.png',
}

export const getCategoryIconUrl = (value) => {
  const path = CATEGORY_ICON_PATHS[value]
  return path ? `${ICON_BASE}${path}` : ''
}
