const kangxiRadicalsTable = new Map<string, string>([
  [
    "\u2F00", // KANGXI RADICAL ONE
    "\u4E00", // 一
  ],
  [
    "\u2F01", // KANGXI RADICAL LINE
    "\u4E28", // 丨
  ],
  [
    "\u2F02", // KANGXI RADICAL DOT
    "\u4E36", // 丶
  ],
  [
    "2F03", // KANGXI RADICAL SLASH
    "\u4E3F", // 丿
  ],
  [
    "\u2F04", // KANGXI RADICAL SECOND
    "\u4E59", // 乙
  ],
  [
    "\u2F05", // KANGXI RADICAL HOOK
    "\u4E85", // 亅
  ],
  [
    "\u2F06", // KANGXI RADICAL TWO
    "\u4E8C", // 二
  ],
  [
    "\u2F07", // KANGXI RADICAL LID
    "\u4EA0", // 亠
  ],
  [
    "\u2F08", // KANGXI RADICAL MAN
    "\u4EBA", // 人
  ],
  [
    "\u2F09", // KANGXI RADICAL LEGS
    "\u513F", // 儿
  ],
  [
    "\u2F0A", // KANGXI RADICAL ENTER
    "\u5165", // 入
  ],
  [
    "\u2F0B", // KANGXI RADICAL EIGHT
    "\u516B", // 八
  ],
  [
    "\u2F0C", // KANGXI RADICAL DOWN BOX
    "\u5182", // 冂
  ],
  [
    "\u2F0D", // KANGXI RADICAL COVER
    "\u5196", // 冖
  ],
  [
    "\u2F0E", // KANGXI RADICAL ICE
    "\u51AB", // 冫
  ],
  [
    "\u2F0F", // KANGXI RADICAL TABLE
    "\u51E0", // 几
  ],
  [
    "\u2F10", // KANGXI RADICAL OPEN BOX
    "\u51F5", // 凵
  ],
  [
    "\u2F11", // KANGXI RADICAL KNIFE
    "\u5200", // 刀
  ],
  [
    "\u2F12", // KANGXI RADICAL POWER
    "\u529B", // 力
  ],
  [
    "\u2F13", // KANGXI RADICAL WRAP
    "\u52F9", // 勹
  ],
  [
    "\u2F14", // KANGXI RADICAL SPOON
    "\u5315", // 匕
  ],
  [
    "\u2F15", // KANGXI RADICAL RIGHT OPEN BOX
    "\u531A", // 匚
  ],
  [
    "\u2F16", // KANGXI RADICAL HIDING ENCLOSURE
    "\u5338", // 匸
  ],
  [
    "\u2F17", // KANGXI RADICAL TEN
    "\u5341", // 十
  ],
  [
    "\u2F18", // KANGXI RADICAL DIVINATION
    "\u535C", // 卜
  ],
  [
    "\u2F19", // KANGXI RADICAL SEAL
    "\u5369", // 卩
  ],
  [
    "\u2F1A", // KANGXI RADICAL CLIFF
    "\u5382", // 厂
  ],
  [
    "\u2F1B", // KANGXI RADICAL PRIVATE
    "\u53B6", // 厶
  ],
  [
    "\u2F1C", // KANGXI RADICAL AGAIN
    "\u53C8", // 又
  ],
  [
    "\u2F1D", // KANGXI RADICAL MOUTH
    "\u53E3", // 口
  ],
  [
    "\u2F1E", // KANGXI RADICAL ENCLOSURE
    "\u56D7", // 囗
  ],
  [
    "\u2F1F", // KANGXI RADICAL EARTH
    "\u571F", // 土
  ],
  [
    "\u2F20", // KANGXI RADICAL SCHOLAR
    "\u58EB", // 士
  ],
  [
    "\u2F21", // KANGXI RADICAL GO
    "\u5902", // 夂
  ],
  [
    "\u2F22", // KANGXI RADICAL GO SLOWLY
    "\u590A", // 夊
  ],
  [
    "\u2F23", // KANGXI RADICAL EVENING
    "\u5915", // 夕
  ],
  [
    "\u2F24", // KANGXI RADICAL BIG
    "\u5927", // 大
  ],
  [
    "\u2F25", // KANGXI RADICAL WOMAN
    "\u5973", // 女
  ],
  [
    "\u2F26", // KANGXI RADICAL CHILD
    "\u5B50", // 子
  ],
  [
    "\u2F27", // KANGXI RADICAL ROOF
    "\u5B80", // 宀
  ],
  [
    "\u2F28", // KANGXI RADICAL INCH
    "\u5BF8", // 寸
  ],
  [
    "\u2F29", // KANGXI RADICAL SMALL
    "\u5C0F", // 小
  ],
  [
    "\u2F2A", // KANGXI RADICAL LAME
    "\u5C22", // 尢
  ],
  [
    "\u2F2B", // KANGXI RADICAL CORPSE
    "\u5C38", // 尸
  ],
  [
    "\u2F2C", // KANGXI RADICAL SPROUT
    "\u5C6E", // 屮
  ],
  [
    "\u2F2D", // KANGXI RADICAL MOUNTAIN
    "\u5C71", // 山
  ],
  [
    "\u2F2E", // KANGXI RADICAL RIVER
    "\u5DDB", // 巛
  ],
  [
    "\u2F2F", // KANGXI RADICAL WORK
    "\u5DE5", // 工
  ],
  [
    "\u2F30", // KANGXI RADICAL ONESELF
    "\u5DF1", // 己
  ],
  [
    "\u2F31", // KANGXI RADICAL TURBAN
    "\u5DFE", // 巾
  ],
  [
    "\u2F32", // KANGXI RADICAL DRY
    "\u5E72", // 干
  ],
  [
    "\u2F33", // KANGXI RADICAL SHORT THREAD
    "\u5E7A", // 幺
  ],
  [
    "\u2F34", // KANGXI RADICAL DOTTED CLIFF
    "\u5E7F", // 广
  ],
  [
    "\u2F35", // KANGXI RADICAL LONG STRIDE
    "\u5EF4", // 廴
  ],
  [
    "\u2F36", // KANGXI RADICAL TWO HANDS
    "\u5EFE", // 廾
  ],
  [
    "\u2F37", // KANGXI RADICAL SHOOT
    "\u5F0B", // 弋
  ],
  [
    "\u2F38", // KANGXI RADICAL BOW
    "\u5F13", // 弓
  ],
  [
    "\u2F39", // KANGXI RADICAL SNOUT
    "\u5F50", // 彐
  ],
  [
    "\u2F3A", // KANGXI RADICAL BRISTLE
    "\u5F61", // 彡
  ],
  [
    "\u2F3B", // KANGXI RADICAL STEP
    "\u5F73", // 彳
  ],
  [
    "\u2F3C", // KANGXI RADICAL HEART
    "\u5FC3", // 心
  ],
  [
    "\u2F3D", // KANGXI RADICAL HALBERD
    "\u6208", // 戈
  ],
  [
    "\u2F3E", // KANGXI RADICAL DOOR
    "\u6236", // 戶
  ],
  [
    "\u2F3F", // KANGXI RADICAL HAND
    "\u624B", // 手
  ],
  [
    "\u2F40", // KANGXI RADICAL BRANCH
    "\u652F", // 支
  ],
  [
    "\u2F41", // KANGXI RADICAL RAP
    "\u6534", // 攴
  ],
  [
    "\u2F42", // KANGXI RADICAL SCRIPT
    "\u6587", // 文
  ],
  [
    "\u2F43", // KANGXI RADICAL DIPPER
    "\u6597", // 斗
  ],
  [
    "\u2F44", // KANGXI RADICAL AXE
    "\u65A4", // 斤
  ],
  [
    "\u2F45", // KANGXI RADICAL SQUARE
    "\u65B9", // 方
  ],
  [
    "\u2F46", // KANGXI RADICAL NOT
    "\u65E0", // 无
  ],
  [
    "\u2F47", // KANGXI RADICAL SUN
    "\u65E5", // 日
  ],
  [
    "\u2F48", // KANGXI RADICAL SAY
    "\u66F0", // 曰
  ],
  [
    "\u2F49", // KANGXI RADICAL MOON
    "\u6708", // 月
  ],
  [
    "\u2F4A", // KANGXI RADICAL TREE
    "\u6728", // 木
  ],
  [
    "\u2F4B", // KANGXI RADICAL LACK
    "\u6B20", // 欠
  ],
  [
    "\u2F4C", // KANGXI RADICAL STOP
    "\u6B62", // 止
  ],
  [
    "\u2F4D", // KANGXI RADICAL DEATH
    "\u6B79", // 歹
  ],
  [
    "\u2F4E", // KANGXI RADICAL WEAPON
    "\u6BB3", // 殳
  ],
  [
    "\u2F4F", // KANGXI RADICAL DO NOT
    "\u6BCB", // 毋
  ],
  [
    "\u2F50", // KANGXI RADICAL COMPARE
    "\u6BD4", // 比
  ],
  [
    "\u2F51", // KANGXI RADICAL FUR
    "\u6BDB", // 毛
  ],
  [
    "\u2F52", // KANGXI RADICAL CLAN
    "\u6C0F", // 氏
  ],
  [
    "\u2F53", // KANGXI RADICAL STEAM
    "\u6C14", // 气
  ],
  [
    "\u2F54", // KANGXI RADICAL WATER
    "\u6C34", // 水
  ],
  [
    "\u2F55", // KANGXI RADICAL FIRE
    "\u706B", // 火
  ],
  [
    "\u2F56", // KANGXI RADICAL CLAW
    "\u722A", // 爪
  ],
  [
    "\u2F57", // KANGXI RADICAL FATHER
    "\u7236", // 父
  ],
  [
    "\u2F58", // KANGXI RADICAL DOUBLE X
    "\u723B", // 爻
  ],
  [
    "\u2F59", // KANGXI RADICAL HALF TREE TRUNK
    "\u723F", // 爿
  ],
  [
    "\u2F5A", // KANGXI RADICAL SLICE
    "\u7247", // 片
  ],
  [
    "\u2F5B", // KANGXI RADICAL FANG
    "\u7259", // 牙
  ],
  [
    "\u2F5C", // KANGXI RADICAL COW
    "\u725B", // 牛
  ],
  [
    "\u2F5D", // KANGXI RADICAL DOG
    "\u72AC", // 犬
  ],
  [
    "\u2F5E", // KANGXI RADICAL PROFOUND
    "\u7384", // 玄
  ],
  [
    "\u2F5F", // KANGXI RADICAL JADE
    "\u7389", // 玉
  ],
  [
    "\u2F60", // KANGXI RADICAL MELON
    "\u74DC", // 瓜
  ],
  [
    "\u2F61", // KANGXI RADICAL TILE
    "\u74E6", // 瓦
  ],
  [
    "\u2F62", // KANGXI RADICAL SWEET
    "\u7518", // 甘
  ],
  [
    "\u2F63", // KANGXI RADICAL LIFE
    "\u751F", // 生
  ],
  [
    "\u2F64", // KANGXI RADICAL USE
    "\u7528", // 用
  ],
  [
    "\u2F65", // KANGXI RADICAL FIELD
    "\u7530", // 田
  ],
  [
    "\u2F66", // KANGXI RADICAL BOLT OF CLOTH
    "\u758B", // 疋
  ],
  [
    "\u2F67", // KANGXI RADICAL SICKNESS
    "\u7592", // 疒
  ],
  [
    "\u2F68", // KANGXI RADICAL DOTTED TENT
    "\u7676", // 癶
  ],
  [
    "\u2F69", // KANGXI RADICAL WHITE
    "\u767D", // 白
  ],
  [
    "\u2F6A", // KANGXI RADICAL SKIN
    "\u76AE", // 皮
  ],
  [
    "\u2F6B", // KANGXI RADICAL DISH
    "\u76BF", // 皿
  ],
  [
    "\u2F6C", // KANGXI RADICAL EYE
    "\u76EE", // 目
  ],
  [
    "\u2F6D", // KANGXI RADICAL SPEAR
    "\u77DB", // 矛
  ],
  [
    "\u2F6E", // KANGXI RADICAL ARROW
    "\u77E2", // 矢
  ],
  [
    "\u2F6F", // KANGXI RADICAL STONE
    "\u77F3", // 石
  ],
  [
    "\u2F70", // KANGXI RADICAL SPIRIT
    "\u793A", // 示
  ],
  [
    "\u2F71", // KANGXI RADICAL TRACK
    "\u79B8", // 禸
  ],
  [
    "\u2F72", // KANGXI RADICAL GRAIN
    "\u79BE", // 禾
  ],
  [
    "\u2F73", // KANGXI RADICAL CAVE
    "\u7A74", // 穴
  ],
  [
    "\u2F74", // KANGXI RADICAL STAND
    "\u7ACB", // 立
  ],
  [
    "\u2F75", // KANGXI RADICAL BAMBOO
    "\u7AF9", // 竹
  ],
  [
    "\u2F76", // KANGXI RADICAL RICE
    "\u7C73", // 米
  ],
  [
    "\u2F77", // KANGXI RADICAL SILK
    "\u7CF8", // 糸
  ],
  [
    "\u2F78", // KANGXI RADICAL JAR
    "\u7F36", // 缶
  ],
  [
    "\u2F79", // KANGXI RADICAL NET
    "\u7F51", // 网
  ],
  [
    "\u2F7A", // KANGXI RADICAL SHEEP
    "\u7F8A", // 羊
  ],
  [
    "\u2F7B", // KANGXI RADICAL FEATHER
    "\u7FBD", // 羽
  ],
  [
    "\u2F7C", // KANGXI RADICAL OLD
    "\u8001", // 老
  ],
  [
    "\u2F7D", // KANGXI RADICAL AND
    "\u800C", // 而
  ],
  [
    "\u2F7E", // KANGXI RADICAL PLOW
    "\u8012", // 耒
  ],
  [
    "\u2F7F", // KANGXI RADICAL EAR
    "\u8033", // 耳
  ],
  [
    "\u2F80", // KANGXI RADICAL BRUSH
    "\u807F", // 聿
  ],
  [
    "\u2F81", // KANGXI RADICAL MEAT
    "\u8089", // 肉
  ],
  [
    "\u2F82", // KANGXI RADICAL MINISTER
    "\u81E3", // 臣
  ],
  [
    "\u2F83", // KANGXI RADICAL SELF
    "\u81EA", // 自
  ],
  [
    "\u2F84", // KANGXI RADICAL ARRIVE
    "\u81F3", // 至
  ],
  [
    "\u2F85", // KANGXI RADICAL MORTAR
    "\u81FC", // 臼
  ],
  [
    "\u2F86", // KANGXI RADICAL TONGUE
    "\u820C", // 舌
  ],
  [
    "\u2F87", // KANGXI RADICAL OPPOSE
    "\u821B", // 舛
  ],
  [
    "\u2F88", // KANGXI RADICAL BOAT
    "\u821F", // 舟
  ],
  [
    "\u2F89", // KANGXI RADICAL STOPPING
    "\u826E", // 艮
  ],
  [
    "\u2F8A", // KANGXI RADICAL COLOR
    "\u8272", // 色
  ],
  [
    "\u2F8B", // KANGXI RADICAL GRASS
    "\u8278", // 艸
  ],
  [
    "\u2F8C", // KANGXI RADICAL TIGER
    "\u864D", // 虍
  ],
  [
    "\u2F8D", // KANGXI RADICAL INSECT
    "\u866B", // 虫
  ],
  [
    "\u2F8E", // KANGXI RADICAL BLOOD
    "\u8840", // 血
  ],
  [
    "\u2F8F", // KANGXI RADICAL WALK ENCLOSURE
    "\u884C", // 行
  ],
  [
    "\u2F90", // KANGXI RADICAL CLOTHES
    "\u8863", // 衣
  ],
  [
    "\u2F91", // KANGXI RADICAL WEST
    "\u897E", // 襾
  ],
  [
    "\u2F92", // KANGXI RADICAL SEE
    "\u898B", // 見
  ],
  [
    "\u2F93", // KANGXI RADICAL HORN
    "\u89D2", // 角
  ],
  [
    "\u2F94", // KANGXI RADICAL SPEECH
    "\u8A00", // 言
  ],
  [
    "\u2F95", // KANGXI RADICAL VALLEY
    "\u8C37", // 谷
  ],
  [
    "\u2F96", // KANGXI RADICAL BEAN
    "\u8C46", // 豆
  ],
  [
    "\u2F97", // KANGXI RADICAL PIG
    "\u8C55", // 豕
  ],
  [
    "\u2F98", // KANGXI RADICAL BADGER
    "\u8C78", // 豸
  ],
  [
    "\u2F99", // KANGXI RADICAL SHELL
    "\u8C9D", // 貝
  ],
  [
    "\u2F9A", // KANGXI RADICAL RED
    "\u8D64", // 赤
  ],
  [
    "\u2F9B", // KANGXI RADICAL RUN
    "\u8D70", // 走
  ],
  [
    "\u2F9C", // KANGXI RADICAL FOOT
    "\u8DB3", // 足
  ],
  [
    "\u2F9D", // KANGXI RADICAL BODY
    "\u8EAB", // 身
  ],
  [
    "\u2F9E", // KANGXI RADICAL CART
    "\u8ECA", // 車
  ],
  [
    "\u2F9F", // KANGXI RADICAL BITTER
    "\u8F9B", // 辛
  ],
  [
    "\u2FA0", // KANGXI RADICAL MORNING
    "\u8FB0", // 辰
  ],
  [
    "\u2FA1", // KANGXI RADICAL WALK
    "\u8FB5", // 辵
  ],
  [
    "\u2FA2", // KANGXI RADICAL CITY
    "\u9091", // 邑
  ],
  [
    "\u2FA3", // KANGXI RADICAL WINE
    "\u9149", // 酉
  ],
  [
    "\u2FA4", // KANGXI RADICAL DISTINGUISH
    "\u91C6", // 釆
  ],
  [
    "\u2FA5", // KANGXI RADICAL VILLAGE
    "\u91CC", // 里
  ],
  [
    "\u2FA6", // KANGXI RADICAL GOLD
    "\u91D1", // 金
  ],
  [
    "\u2FA7", // KANGXI RADICAL LONG
    "\u9577", // 長
  ],
  [
    "\u2FA8", // KANGXI RADICAL GATE
    "\u9580", // 門
  ],
  [
    "\u2FA9", // KANGXI RADICAL MOUND
    "\u961C", // 阜
  ],
  [
    "\u2FAA", // KANGXI RADICAL SLAVE
    "\u96B6", // 隶
  ],
  [
    "\u2FAB", // KANGXI RADICAL SHORT TAILED BIRD
    "\u96B9", // 隹
  ],
  [
    "\u2FAC", // KANGXI RADICAL RAIN
    "\u96E8", // 雨
  ],
  [
    "\u2FAD", // KANGXI RADICAL BLUE
    "\u9751", // 靑
  ],
  [
    "\u2FAE", // KANGXI RADICAL WRONG
    "\u975E", // 非
  ],
  [
    "\u2FAF", // KANGXI RADICAL FACE
    "\u9762", // 面
  ],
  [
    "\u2FB0", // KANGXI RADICAL LEATHER
    "\u9769", // 革
  ],
  [
    "\u2FB1", // KANGXI RADICAL TANNED LEATHER
    "\u97CB", // 韋
  ],
  [
    "\u2FB2", // KANGXI RADICAL LEEK
    "\u97ED", // 韭
  ],
  [
    "\u2FB3", // KANGXI RADICAL SOUND
    "\u97F3", // 音
  ],
  [
    "\u2FB4", // KANGXI RADICAL LEAF
    "\u9801", // 頁
  ],
  [
    "\u2FB5", // KANGXI RADICAL WIND
    "\u98A8", // 風
  ],
  [
    "\u2FB6", // KANGXI RADICAL FLY
    "\u98DB", // 飛
  ],
  [
    "\u2FB7", // KANGXI RADICAL EAT
    "\u98DF", // 食
  ],
  [
    "\u2FB8", // KANGXI RADICAL HEAD
    "\u9996", // 首
  ],
  [
    "\u2FB9", // KANGXI RADICAL FRAGRANT
    "\u9999", // 香
  ],
  [
    "\u2FBA", // KANGXI RADICAL HORSE
    "\u99AC", // 馬
  ],
  [
    "\u2FBB", // KANGXI RADICAL BONE
    "\u9AA8", // 骨
  ],
  [
    "\u2FBC", // KANGXI RADICAL TALL
    "\u9AD8", // 高
  ],
  [
    "\u2FBD", // KANGXI RADICAL HAIR
    "\u9ADF", // 髟
  ],
  [
    "\u2FBE", // KANGXI RADICAL FIGHT
    "\u9B25", // 鬥
  ],
  [
    "\u2FBF", // KANGXI RADICAL SACRIFICIAL WINE
    "\u9B2F", // 鬯
  ],
  [
    "\u2FC0", // KANGXI RADICAL CAULDRON
    "\u9B32", // 鬲
  ],
  [
    "\u2FC1", // KANGXI RADICAL GHOST
    "\u9B3C", // 鬼
  ],
  [
    "\u2FC2", // KANGXI RADICAL FISH
    "\u9B5A", // 魚
  ],
  [
    "\u2FC3", // KANGXI RADICAL BIRD
    "\u9CE5", // 鳥
  ],
  [
    "\u2FC4", // KANGXI RADICAL SALT
    "\u9E75", // 鹵
  ],
  [
    "\u2FC5", // KANGXI RADICAL DEER
    "\u9E7F", // 鹿
  ],
  [
    "\u2FC6", // KANGXI RADICAL WHEAT
    "\u9EA5", // 麥
  ],
  [
    "\u2FC7", // KANGXI RADICAL HEMP
    "\u9EBB", // 麻
  ],
  [
    "\u2FC8", // KANGXI RADICAL YELLOW
    "\u9EC3", // 黃
  ],
  [
    "\u2FC9", // KANGXI RADICAL MILLET
    "\u9ECD", // 黍
  ],
  [
    "\u2FCA", // KANGXI RADICAL BLACK
    "\u9ED1", // 黑
  ],
  [
    "\u2FCB", // KANGXI RADICAL EMBROIDERY
    "\u9EF9", // 黹
  ],
  [
    "\u2FCC", // KANGXI RADICAL FROG
    "\u9EFD", // 黽
  ],
  [
    "\u2FCD", // KANGXI RADICAL TRIPOD
    "\u9F0E", // 鼎
  ],
  [
    "\u2FCE", // KANGXI RADICAL DRUM
    "\u9F13", // 鼓
  ],
  [
    "\u2FCF", // KANGXI RADICAL RAT
    "\u9F20", // 鼠
  ],
  [
    "\u2FD0", // KANGXI RADICAL NOSE
    "\u9F3B", // 鼻
  ],
  [
    "\u2FD1", // KANGXI RADICAL EVEN
    "\u9F4A", // 齊
  ],
  [
    "\u2FD2", // KANGXI RADICAL TOOTH
    "\u9F52", // 齒
  ],
  [
    "\u2FD3", // KANGXI RADICAL DRAGON
    "\u9F8D", // 龍
  ],
  [
    "\u2FD4", // KANGXI RADICAL TURTLE
    "\u9F9C", // 龜
  ],
  [
    "\u2FD5", // KANGXI RADICAL FLUTE
    "\u9FA0", // 龠
  ],
]);

export { kangxiRadicalsTable };
