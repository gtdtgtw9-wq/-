const TAXONOMY = {"_meta": {"purpose": "自然言語で入力された指示を、danbooru式のタグの塊(プロンプト)に変換するための参照目録。AIはユーザーの自然言語入力を解析し、該当するカテゴリ・日本語キーからdanbooruタグ配列を選び出し、カンマ区切りで出力する。", "usage_note": "各カテゴリはあくまで候補集。目録にない概念が入力された場合は、danbooru語彙の慣習に従って類推・補完してよい。", "version": "2.0"}, "base_meta": {"subject": {"_description": "人数・性別。必ずどれか1つ(または組み合わせ)を選ぶ。従来の1girl固定を廃止。", "女性1人": ["1girl", "solo"], "男性1人": ["1boy", "solo"], "性別不明・人外1人": ["1other", "solo"], "女性2人": ["2girls"], "男性2人": ["2boys"], "男女2人": ["1boy", "1girl"], "複数人（女性のみ）": ["multiple girls"], "複数人（男性のみ）": ["multiple boys"], "複数人（混合）": ["multiple boys", "multiple girls"]}, "視点": {"視聴者目線": ["looking at viewer"], "視線を外す": ["looking away"], "遠くを見る": ["looking afar"]}, "画風・品質": ["anime screening", "anime visual", "cel shading", "masterpiece", "best quality"], "画風バリエーション": {"厚塗り": ["thick paint", "painterly"], "水彩風": ["watercolor (medium)"], "レトロ・セル画": ["retro anime", "1990s (style)", "cel shading"], "フラットイラスト": ["flat color"], "写実寄り": ["semi-realistic"]}}, "face_and_head": {"表情": {"笑顔": ["smile", "happy"], "満面の笑み": ["grin", "big smile"], "微笑み": ["light smile", "gentle smile"], "大爆笑": ["laughing", "open-mouth smile"], "くすくす笑い": ["giggling"], "照れ笑い": ["embarrassed", "smile", "blush"], "照れ・赤面": ["blush", "embarrassed"], "赤面（強）": ["blush", "full-face blush"], "頬染め": ["blush stickers"], "恥ずかしがり": ["shy", "embarrassed"], "緊張": ["nervous", "sweatdrop"], "汗だく": ["sweatdrop", "sweat"], "泣き顔": ["crying", "tears"], "号泣": ["sobbing", "streaming tears"], "嬉し泣き": ["tears of joy", "smile", "crying"], "涙目": ["teary-eyed", "watery eyes"], "涙をこらえる": ["holding back tears"], "怒り": ["angry", "furrowed brow"], "激怒": ["rage", "gritted teeth"], "イライラ": ["annoyed"], "しかめっ面": ["scowl"], "拗ねる": ["pouting"], "むくれる": ["puffy cheeks", "annoyed"], "不機嫌": ["frown", "displeased"], "悲しい": ["sad"], "落ち込む": ["depressed"], "絶望": ["despair"], "虚無": ["empty eyes"], "死んだ目": ["dead fish eyes"], "半目": ["half-closed eyes"], "目を閉じる": ["closed eyes"], "ウインク": ["wink", "one eye closed"], "驚き": ["surprised", "wide-eyed"], "大きな衝撃": ["shocked"], "息を呑む": ["gasp"], "口開け": ["open mouth"], "口を閉じる": ["closed mouth"], "唇を開く": ["parted lips"], "舌を出す": ["tongue out"], "唇を舐める": ["licking lips"], "よだれ": ["drooling"], "ドヤ顔": ["doyagao", "smug"], "自信満々": ["confident expression"], "真剣": ["serious"], "決意": ["determined expression"], "集中": ["concentration"], "考え込む": ["thinking", "contemplative"], "困惑": ["confused"], "首をかしげる（表情込み）": ["head tilt", "curious"], "興味津々": ["interested expression"], "退屈": ["bored"], "眠い": ["sleepy"], "疲れた": ["tired"], "あくび": ["yawning"], "うとうと": ["drowsy"], "嫌悪": ["disgusted"], "ドン引き": ["grossed out"], "怖がる": ["scared", "fear"], "恐怖": ["terrified"], "悲鳴": ["screaming"], "叫ぶ": ["shouting"], "歌う": ["singing"], "口笛": ["whistling"], "唇を噛む": ["lip bite"], "悪い笑み": ["evil grin"], "邪悪な笑み": ["evil smile"], "サディスティックな笑み": ["sadistic smile"], "威圧的": ["menacing"], "睨む": ["glaring", "glare"], "冷たい視線": ["cold stare"], "無表情": ["expressionless"], "無表情（強）": ["expressionless", "blank stare"], "淡々とした表情": ["deadpan"], "ジト目": ["sanpaku", "expressionless", "slanted eyes"], "潤んだ目（表情）": ["watery eyes"], "キラキラ目": ["sparkling eyes"], "星目（表情）": ["starry eyes"], "ハート目": ["heart-shaped pupils"], "恋する表情": ["love-struck expression"], "キス顔": ["kissy face"], "アヒル口": ["duck lips"], "頬をつつく": ["poking cheek"], "片眉を上げる": ["raised eyebrow"], "苦笑い": ["wry smile"], "ぎこちない笑顔": ["awkward smile"], "作り笑い": ["forced smile"], "困った顔": ["troubled expression"], "心配そう": ["worried expression"], "不安": ["anxious expression"], "安堵": ["relieved expression"], "満足げ": ["content expression"], "穏やか": ["serene expression"], "誇らしげ": ["proud expression"], "勝ち誇る": ["triumphant smile"], "興奮": ["excited expression"], "有頂天": ["ecstatic expression"], "嫉妬": ["jealous expression"], "恥じらう笑み": ["bashful smile"], "色っぽい表情": ["seductive expression"], "からかう笑み": ["teasing smile"], "いたずらな笑み": ["mischievous smile"], "無邪気な表情": ["innocent expression"], "呆然": ["dazed", "spaced out"], "唖然": ["stunned", "agape"]}, "髪型": {"ツインテール": ["twintails"], "低めツインテール": ["low twintails"], "高めツインテール": ["high twintails"], "ポニーテール": ["ponytail"], "ハイポニーテール": ["high ponytail"], "ローポニーテール": ["low ponytail"], "サイドポニーテール": ["side ponytail"], "ボブ": ["bob cut"], "ロングヘアー": ["long hair"], "ショートヘア": ["short hair"], "ミディアムヘア": ["medium hair"], "超ロングヘア": ["very long hair"], "坊主": ["bald"], "お団子": ["hair bun"], "ツインお団子": ["double bun"], "片方お団子": ["single hair bun"], "三つ編み": ["braid"], "サイド三つ編み": ["side braid"], "フィッシュテール編み": ["fishtail braid"], "ツイン三つ編み": ["twin braids"], "編み込みクラウン": ["crown braid"], "前髪で片目を隠す": ["hair over one eye"], "両目隠れ前髪": ["hair over eyes"], "アホ毛": ["ahoge"], "アンテナヘア": ["antenna hair"], "サイドロック": ["sidelocks"], "ドリルヘア": ["drill hair"], "縦ロール": ["ringlet curls"], "くせ毛・カール": ["curly hair"], "波打つ髪": ["wavy hair"], "ストレートヘア": ["straight hair"], "姫カット": ["hime cut"], "一直線前髪": ["blunt bangs"], "流し前髪": ["swept bangs"], "横流し前髪": ["side-swept bangs"], "センター分け前髪": ["parted bangs"], "非対称前髪": ["asymmetrical bangs"], "目の間の髪": ["hair between eyes"], "ヘアインテーク": ["hair intakes"], "寝癖": ["cowlick"], "乱れ髪": ["messy hair"], "逆立った髪": ["spiky hair"], "丸刈り": ["buzz cut"], "ピクシーカット": ["pixie cut"], "もじゃもじゃ髪": ["shaggy hair"], "レイヤーカット": ["layered hair"], "ハーフアップ": ["half up half down hair"], "ヘアリング": ["hair rings"], "ヘアビーズ": ["hair beads"], "オールバック": ["hair slicked back"], "ウルフカット": ["wolf cut"], "後ろでまとめた髪": ["hair pulled back"], "低い位置で結んだロングヘア": ["low-tied long hair"], "高い位置で結んだロングヘア": ["high-tied long hair"], "リボン付きツインテール": ["twintails", "hair ribbon"], "不揃いツインテール": ["uneven twintails"], "編み込みお団子": ["braided bun"], "風になびく髪": ["floating hair", "hair flowing"], "前髪あり": ["bangs"], "前髪なし": ["no bangs"], "ぱっつん前髪": ["straight-across bangs"], "斜め前髪": ["diagonal bangs"], "長い前髪": ["long bangs"], "短い前髪": ["short bangs"], "すきま前髪": ["parted bangs"], "ツインドリル": ["twin drills"], "モヒカン": ["mohawk"], "アフロ": ["afro"], "ドレッドヘア": ["dreadlocks"], "マレット": ["mullet"], "アンダーカット": ["undercut"], "内巻きカール": ["inward curl"], "外巻きカール": ["outward curl"], "サイドテール": ["sidetail"], "編み下ろし": ["braided ponytail"], "くるりんぱ": ["twisted ponytail"], "二段ポニーテール": ["looped ponytail"], "姫カット+ツインテール": ["hime cut", "twintails"], "一つ結び": ["low ponytail"], "高い一つ結び+リボン": ["high ponytail", "hair bow"]}, "髪色・髪質": {"金髪": ["blonde hair"], "黒髪": ["black hair"], "茶髪": ["brown hair"], "銀髪": ["silver hair"], "白髪": ["white hair"], "灰髪": ["grey hair"], "赤髪": ["red hair"], "ピンク髪": ["pink hair"], "紫髪": ["purple hair"], "青髪": ["blue hair"], "水色髪": ["light blue hair"], "アクア髪": ["aqua hair"], "緑髪": ["green hair"], "黄緑髪": ["light green hair"], "深緑髪": ["dark green hair"], "オレンジ髪": ["orange hair"], "プラチナブロンド": ["platinum blonde hair"], "ストロベリーブロンド": ["strawberry blonde hair"], "ハニーブロンド": ["honey blonde hair"], "アッシュブロンド": ["ash blonde hair"], "栗色髪": ["chestnut hair"], "赤褐色髪": ["auburn hair"], "銅色髪": ["copper hair"], "マルーン髪": ["maroon hair"], "ワインレッド髪": ["wine red hair"], "深紅髪": ["crimson hair"], "緋色髪": ["scarlet hair"], "マゼンタ髪": ["magenta hair"], "すみれ色髪": ["violet hair"], "ラベンダー髪": ["lavender hair"], "藍色髪": ["indigo hair"], "紺色髪": ["navy hair"], "ティール髪": ["teal hair"], "ミント髪": ["mint hair"], "オリーブ髪": ["olive hair"], "金色髪（強）": ["gold hair"], "濃い茶髪": ["dark brown hair"], "薄い茶髪": ["light brown hair"], "ツートンカラー髪": ["two-tone hair"], "マルチカラー髪": ["multicolored hair"], "グラデーション髪": ["gradient hair"], "メッシュ髪": ["streaked hair"], "ハイライト入り髪": ["highlighted hair"], "レインボー髪": ["rainbow hair"], "毛先だけ色違い": ["colored tips"], "インナーカラー": ["colored inner hair"], "根元だけ色違い": ["roots (hair color)"], "虹色に光る髪": ["iridescent hair"], "ターコイズ髪": ["turquoise hair"], "サーモンピンク髪": ["salmon pink hair"], "ローズゴールド髪": ["rose gold hair"], "アンバー髪": ["amber hair"], "モーブ髪": ["mauve hair"], "スカイブルー髪": ["sky blue hair"], "パステルカラー髪": ["pastel hair"], "ネオンカラー髪": ["neon hair"], "透け感・グラデーション": ["gradient hair", "multicolored hair"], "つやのある髪": ["shiny hair", "glossy hair"], "さらさらの髪": ["silky hair"], "ふわふわの髪": ["fluffy hair"], "太い髪": ["thick hair"], "細い髪": ["thin hair"], "きめ細かい髪": ["fine hair"], "パサパサの髪": ["frizzy hair", "dry hair"], "湿った髪": ["damp hair"], "濡れた髪": ["wet hair"], "半透明の髪": ["translucent hair"], "きらめく髪": ["sparkling hair"], "光る髪": ["glowing hair"], "風になびく髪質感": ["windswept hair"], "静電気の髪": ["static hair"], "ボリュームのある髪": ["voluminous hair"], "ぺたんとした髪": ["flat hair"], "硬い髪": ["stiff hair"], "やわらかい髪": ["soft hair"]}, "目": {"赤目": ["red eyes"], "青目": ["blue eyes"], "緑目": ["green eyes"], "黄色目": ["yellow eyes"], "紫目": ["purple eyes"], "ピンク目": ["pink eyes"], "オレンジ目": ["orange eyes"], "茶目": ["brown eyes"], "黒目": ["black eyes"], "灰色目": ["grey eyes"], "琥珀目": ["amber eyes"], "金色目": ["gold eyes"], "銀色目": ["silver eyes"], "水色目": ["aqua eyes"], "ティール目": ["teal eyes"], "藤色目": ["violet eyes"], "オッドアイ": ["heterochromia"], "多色目": ["multicolored eyes"], "光る目": ["glowing eyes"], "きらめく目": ["sparkling eyes"], "星目（瞳）": ["starry eyes"], "ハイライト": ["detailed eyes", "expressive eyes"], "表情豊かな目": ["expressive eyes"], "半目": ["half-closed eyes"], "閉じた目": ["closed eyes"], "片目を閉じる": ["one eye closed"], "大きな目": ["wide eyes"], "細目": ["narrow eyes"], "スリット瞳孔": ["slit pupils"], "ハート型瞳孔": ["heart-shaped pupils"], "星型瞳孔": ["star-shaped pupils"], "猫目瞳孔": ["cat-slit pupils"], "瞳孔なし": ["no pupils"], "虚ろな目": ["empty eyes"], "死んだ目（瞳）": ["dead eyes"], "うつろな目": ["hollow eyes"], "記号型瞳孔": ["symbol-shaped pupils"], "輪状の目": ["ringed eyes"], "グラデーション目": ["gradient eyes"], "ツートン目": ["two-tone eyes"], "涙で満ちた目": ["tear-filled eyes"], "充血した目": ["bloodshot eyes"], "三白眼": ["sanpaku"], "つり目": ["tsurime"], "たれ目": ["tareme"], "丸目": ["round eyes"], "アーモンド型の目": ["almond eyes"], "鋭い目つき": ["sharp eyes"], "眠そうな目": ["sleepy eyes"], "垂れ下がった目": ["droopy eyes"], "長いまつげ": ["long eyelashes"], "濃いまつげ": ["thick eyelashes"], "まつげ": ["eyelashes"], "マスカラ": ["mascara"], "アイライナー": ["eyeliner"], "アイシャドウ": ["eyeshadow"], "目の下のメイク": ["under-eye makeup"], "目に涙": ["tears in eyes"], "泣いている目": ["crying eyes"], "眼帯": ["eyepatch"], "片目を隠す": ["one eye covered"], "目の下のほくろ": ["mole under eye"], "瞳の中の反射光": ["eye reflection"], "瞳の中の光": ["light in eyes"], "つぶらな瞳": ["round pupils"], "眼力のある目": ["intense eyes"], "疲れた目元": ["tired eyes"], "目の下のくま": ["under-eye bags"], "泣きはらした目": ["puffy eyes"], "好奇心旺盛な目": ["curious eyes"], "冷たい目": ["cold eyes"], "優しい目": ["gentle eyes"], "鋭い眼光": ["piercing gaze"], "うるうるした目": ["watery eyes"], "医療用眼帯": ["eye bandage"], "カラコン": ["colored contacts"], "瞳に星が映る": ["star reflection in eyes"]}}, "outfits": {"学校・制服": {"セーラー服": ["sailor suit", "serafuku"], "ブレザー": ["blazer", "school uniform"], "萌え袖": ["sleeves past wrists"], "プリーツスカート": ["pleated skirt"], "スカーフ（制服）": ["neckerchief"], "学ラン": ["gakuran"], "スクール水着": ["school swimsuit"], "体操服": ["gym uniform"], "ブルマ": ["buruma"], "上履き": ["indoor shoes"], "ローファー": ["loafers"], "ニーハイソックス": ["thigh-highs"], "膝丈ソックス": ["knee-high socks"], "制服のネクタイ": ["necktie"], "制服のリボン": ["bow (clothes)"], "カーディガン": ["cardigan"], "ベスト（制服）": ["sweater vest"], "学生鞄": ["school bag"], "ランドセル": ["randoseru"], "夏服セーラー": ["short sleeves", "serafuku"], "冬服セーラー": ["long sleeves", "serafuku"], "チェック柄スカート": ["plaid skirt"], "サスペンダースカート": ["suspender skirt"], "制服ジャケット": ["uniform jacket"], "セーラー衿": ["sailor collar"], "学生服コート": ["winter coat", "school uniform"], "ダッフルコート（制服）": ["duffle coat", "school uniform"], "レターマンジャケット": ["letterman jacket"], "剣道着": ["kendo uniform"], "柔道着": ["judo gi"], "チアリーダー制服": ["cheerleader uniform"], "トートバッグ（通学）": ["tote bag"], "制服エンブレム": ["school emblem"], "名札": ["name tag"], "学生証": ["id card"], "冬服コート姿": ["sailor collar", "long sleeves"], "詰襟スタンドカラー": ["stand collar", "gakuran"], "スクールベレー帽": ["beret", "school uniform"], "セーラーワンピース制服": ["sailor dress"]}, "カジュアル・私服": {"オーバーサイズパーカー": ["oversized hoodie"], "オフショルニット": ["off-shoulder sweater"], "Tシャツ・ジーンズ": ["t-shirt", "jeans"], "デニムジャケット": ["denim jacket"], "タンクトップ": ["tank top"], "キャミソール": ["camisole"], "ショートパンツ": ["shorts"], "ミニスカート": ["miniskirt"], "ロングスカート": ["long skirt"], "サンドレス": ["sundress"], "オーバーオール": ["overalls"], "チェック柄シャツ": ["plaid shirt"], "ボーダーシャツ": ["striped shirt"], "クロップトップ": ["crop top"], "レギンス": ["leggings"], "スウェット上下": ["sweatpants", "sweatshirt"], "カーゴパンツ": ["cargo pants"], "レザージャケット": ["leather jacket"], "ダウンジャケット": ["down jacket"], "マフラー（私服）": ["scarf"], "ニット帽": ["beanie"], "サンダル": ["sandals"], "スニーカー": ["sneakers"], "ブーツ": ["boots"], "パーカー": ["hoodie"], "チョーカー（私服）": ["choker"], "ベルト": ["belt"], "サスペンダー": ["suspenders"], "フリルブラウス": ["frilled blouse"], "ハイウエストパンツ": ["high-waist pants"], "ジップパーカー": ["zip-up hoodie"], "プルオーバーパーカー": ["pullover hoodie"], "グラフィックTシャツ": ["graphic tee", "print shirt"], "フランネルシャツ": ["flannel shirt"], "デニムショートパンツ": ["denim shorts"], "カーゴショートパンツ": ["cargo shorts"], "ジョガーパンツ": ["joggers"], "トラックスーツ": ["tracksuit"], "ウィンドブレーカー": ["windbreaker"], "ボンバージャケット": ["bomber jacket"], "厚手パーカーコート": ["parka"], "ダウンベスト": ["puffer vest"], "フリースジャケット": ["fleece jacket"], "フード付きコート": ["hooded coat"], "オフショルダートップス": ["off-shoulder top"], "ホルターネックトップス": ["halter top"], "チューブトップ": ["tube top"], "ボディスーツ": ["bodysuit"], "ジャンプスーツ": ["jumpsuit"], "ラップドレス": ["wrap dress"], "マキシワンピース": ["maxi dress"], "ミモレ丈ワンピース": ["midi dress"], "ジャンパースカート": ["pinafore dress"], "タートルネック": ["turtleneck"], "ケーブルニットセーター": ["cable knit sweater"], "ポンチョ": ["poncho"], "ヨガパンツ": ["yoga pants"], "スポーツウェア": ["sportswear"], "スポーツブラ": ["sports bra"], "デニムスカート": ["denim skirt"], "キュロット": ["culottes"]}, "フォーマル": {"スーツ": ["suit", "necktie"], "ドレス": ["dress"], "タキシード": ["tuxedo"], "カクテルドレス": ["cocktail dress"], "イブニングドレス": ["evening gown"], "ウェディングドレス": ["wedding dress"], "蝶ネクタイ": ["bowtie"], "ウェディングベール": ["wedding veil"], "タイトスカート": ["pencil skirt"], "フォーマルジャケット": ["formal jacket"], "パーティードレス": ["party dress"], "ロングドレス": ["long dress"], "オフショルダードレス": ["off-shoulder dress"], "ノースリーブドレス": ["sleeveless dress"], "喪服（スーツ）": ["black suit", "mourning dress"], "喪服（ワンピース）": ["black dress", "mourning dress"], "礼服": ["formal suit"], "略礼服": ["semi-formal suit"], "紋付袴": ["hakama", "formal kimono"], "振袖": ["furisode"], "留袖": ["tomesode"], "モーニングコート": ["morning coat"], "燕尾服": ["tailcoat"], "カクテルスーツ": ["cocktail suit"], "白無垢": ["shiromuku"], "色打掛": ["uchikake"], "喪章": ["mourning armband"], "黒ネクタイ": ["black necktie"], "ブラックフォーマル": ["black formal wear"], "数珠": ["prayer beads"]}, "ファンタジー・特殊": {"メイド服": ["maid outfit", "apron"], "魔法少女": ["magical girl"], "騎士・鎧": ["armor"], "着物・和服": ["kimono"], "水着": ["swimsuit"], "浴衣": ["yukata"], "巫女服": ["miko"], "チャイナドレス": ["china dress"], "忍者装束": ["ninja"], "天使の衣装": ["angel", "angel wings"], "悪魔の衣装": ["devil", "demon horns"], "エルフ衣装": ["elf"], "猫耳メイド": ["cat ears", "maid outfit"], "アイドル衣装": ["idol", "idol outfit"], "ゴスロリ": ["gothic lolita"], "ロリータファッション": ["lolita fashion"], "ビキニアーマー": ["bikini armor"], "魔女の衣装": ["witch", "witch hat"], "バニーガール": ["bunny girl", "playboy bunny"], "サンタ衣装": ["santa costume"], "ハロウィン衣装": ["halloween costume"], "忍者マスク": ["ninja mask"], "王女ドレス": ["princess", "princess dress"], "女王の衣装": ["queen", "queen costume"], "袴": ["hakama"], "ステージ衣装": ["stage costume"], "スチームパンク衣装": ["steampunk"], "宇宙服": ["space suit"], "チアリーダー衣装": ["cheerleader"], "競泳水着": ["competition swimsuit"], "ゴシック衣装": ["gothic"], "パンクファッション": ["punk fashion"], "サイバーパンク衣装": ["cyberpunk"], "民族衣装": ["ethnic clothes"], "アラビアン衣装": ["arabian clothes"], "中華風衣装": ["chinese clothes"], "執事服": ["butler"], "トレンチコート": ["trench coat"], "ゴシックドレス": ["black dress", "gothic"]}, "職業・コスチューム": {"看護師": ["nurse", "nurse cap"], "警察官": ["police officer", "police uniform"], "医者": ["doctor", "lab coat"], "教師": ["teacher"], "ウェイトレス": ["waitress"], "シェフ・コック": ["chef", "chef hat"], "消防士": ["firefighter"], "パイロット": ["pilot uniform"], "客室乗務員": ["flight attendant"], "秘書": ["secretary"], "シスター（修道女）": ["nun"], "探偵": ["detective"], "警備員": ["security guard"], "軍人・兵士": ["soldier", "military uniform"], "海賊": ["pirate"], "カウガール": ["cowgirl"], "レーサー": ["racing suit"], "郵便配達員": ["mail carrier"], "図書館員": ["librarian"], "農家": ["farmer"], "パン屋": ["baker", "apron"], "美容師": ["hairdresser"], "歯科医": ["dentist"], "薬剤師": ["pharmacist"], "獣医": ["veterinarian"], "弁護士": ["lawyer", "business suit"], "プログラマー": ["programmer", "glasses"], "建築家": ["architect"], "バーテンダー": ["bartender"], "DJ": ["dj"], "アスリート": ["athlete", "sportswear"], "体操選手": ["gymnast"], "サッカー選手": ["soccer uniform"], "野球選手": ["baseball uniform"], "バスケ選手": ["basketball uniform"], "スイマー": ["swimmer", "competition swimsuit"], "騎手": ["jockey"], "テニス選手": ["tennis uniform"], "画家・イラストレーター": ["artist smock"], "花屋": ["florist", "apron"], "考古学者": ["archaeologist"], "宇宙飛行士（職業）": ["astronaut", "space suit"], "カメラマン": ["photographer"], "科学者": ["scientist", "lab coat"], "整備士": ["mechanic", "overalls"]}}, "accessories_and_props": {"顔まわり": {"眼鏡": ["glasses"], "サングラス": ["sunglasses"], "帽子": ["hat"], "リボン（髪）": ["hair ribbon"], "猫耳": ["cat ears", "animal ears"], "犬耳": ["dog ears"], "うさぎ耳": ["rabbit ears"], "きつね耳": ["fox ears"], "カチューシャ": ["hairband"], "ヘアピン": ["hairclip"], "花飾り（髪）": ["hair flower"], "ベール": ["veil"], "フード": ["hood"], "マスク": ["mask"], "アイマスク": ["blindfold"], "眼帯": ["eyepatch"], "ピアス": ["earrings"], "ティアラ": ["tiara"], "王冠": ["crown"], "髪飾り": ["hair ornament"], "ゴーグル": ["goggles"], "ベレー帽": ["beret"], "麦わら帽子": ["straw hat"], "シルクハット": ["top hat"], "ニット帽（小物）": ["beanie"], "マフラー（小物）": ["scarf"]}, "首・手元": {"ネックレス": ["necklace"], "手袋": ["gloves"], "腕時計": ["wristwatch"], "チョーカー": ["choker"], "リボンタイ": ["necktie"], "スカーフ（首）": ["scarf"], "ブレスレット": ["bracelet"], "指輪": ["ring"], "腕輪": ["bangle"], "アームウォーマー": ["arm warmers"], "ミトン": ["mittens"], "リストバンド": ["wristband"], "ペンダント": ["pendant"], "チェーン（首元）": ["chain"]}, "持ち物": {"花": ["holding flower"], "本": ["holding book"], "武器（剣）": ["holding sword"], "傘": ["holding umbrella"], "食べ物": ["holding food"], "杖": ["holding staff"], "弓矢": ["holding bow (weapon)"], "銃": ["holding gun"], "盾": ["holding shield"], "鞄": ["holding bag"], "スマートフォン": ["holding phone"], "カメラ": ["holding camera"], "飲み物": ["holding cup"], "ぬいぐるみ": ["holding stuffed toy"], "楽器（ギター）": ["holding guitar"], "本を抱える": ["hugging book"], "風船": ["holding balloon"], "お菓子": ["holding candy"], "ノート": ["holding notebook"], "鉛筆": ["holding pencil"], "魔法の杖": ["holding magic wand"], "剣を構える": ["wielding sword"], "鍵": ["holding key"], "マイク": ["holding microphone"], "旗": ["holding flag"]}}, "body_and_pose": {"体型・特徴": {"華奢": ["slender", "petite"], "やわらかい質感": ["soft skin"], "筋肉質": ["muscular"], "長身": ["tall"], "低身長": ["short stature"], "巨乳": ["large breasts"], "貧乳": ["small breasts"], "中肉中背": ["average build"], "ぽっちゃり": ["plump"], "ほっそり": ["thin"], "骨太": ["sturdy build"], "猫背": ["slouching"], "姿勢が良い": ["good posture"], "幼い体型": ["short", "petite"], "大人びた体型": ["mature female"], "くびれ": ["narrow waist"], "広い肩幅": ["broad shoulders"], "細い腰": ["thin waist"], "長い脚": ["long legs"], "小さい手": ["small hands"], "尻尾がある": ["tail"], "翼がある": ["wings"], "角がある": ["horns"], "鱗肌": ["scales"], "獣人の毛並み": ["fur"], "褐色肌": ["dark skin"], "色白": ["pale skin"], "日焼け肌": ["tan"]}, "ポーズ": {"ダブルピース": ["double v", "double peace"], "首をかしげる": ["head tilt"], "手を振り返す": ["waving"], "座りポーズ": ["sitting", "v-sit"], "走る": ["running"], "寝そべる": ["lying down"], "腕組み": ["crossed arms"], "ジャンプ": ["jumping"], "立ちポーズ": ["standing"], "振り返る": ["looking back"], "背伸び": ["stretching"], "しゃがむ": ["squatting"], "膝立ち": ["kneeling"], "四つん這い": ["all fours"], "自分を抱きしめる": ["hugging own arms"], "手を伸ばす": ["reaching out"], "手を差し出す": ["outstretched hand"], "敬礼": ["salute"], "指差し": ["pointing"], "ピースサイン": ["peace sign", "v sign"], "OKサイン": ["ok sign"], "ハートを作る手": ["heart hands"], "顎に手を当てる": ["hand on own chin"], "頬に手を当てる": ["hand on own cheek"], "髪をかき上げる": ["hair flip"], "髪を触る": ["hand in hair"], "スカートを押さえる": ["skirt hold"], "片足立ち": ["standing on one leg"], "つま先立ち": ["on tiptoes"], "開脚": ["spread legs"], "体育座り": ["hugging own knees"], "横座り": ["side sitting"], "うつ伏せ": ["on stomach"], "仰向け": ["on back"], "膝を抱える": ["hugging own legs"], "腰に手を当てる": ["hand on hip"], "万歳": ["arms up"], "手を組む": ["hands clasped"], "祈るポーズ": ["praying"], "戦闘態勢": ["battle stance"], "武器を構える": ["holding weapon", "battle stance"], "剣を抜く": ["unsheathing sword"], "弓を構える": ["aiming"], "魔法を唱える": ["casting spell"], "歩く": ["walking"], "スキップ": ["skipping"], "踊る": ["dancing"], "転ぶ": ["falling"], "驚いてのけぞる": ["leaning back"], "抱き合う": ["hug"], "おんぶ": ["piggyback"], "肩車": ["shoulder carry"], "手をつなぐ": ["holding hands"], "見上げる": ["looking up"], "見下ろす": ["looking down"], "振り向きざま": ["turning around"], "髪を風になびかせる": ["hair blowing in wind"], "ページをめくる": ["turning page"], "頭を抱える": ["holding head"], "体をひねる": ["torso twist"], "足を組む": ["crossed legs"], "寝転んで頬杖": ["on stomach", "chin rest"]}}, "background_and_scene": {"屋内": {"教室": ["classroom"], "自室・寝室": ["bedroom"], "カフェ": ["cafe"], "図書館": ["library"], "廊下": ["hallway"], "体育館": ["gymnasium"], "保健室": ["nurse's office"], "音楽室": ["music room"], "実験室": ["laboratory"], "キッチン": ["kitchen"], "リビング": ["living room"], "浴室": ["bathroom"], "玄関": ["entrance hall"], "オフィス": ["office"], "会議室": ["meeting room"], "病院": ["hospital"], "電車内": ["train interior"], "エレベーター内": ["elevator"], "美術館": ["museum"], "劇場": ["theater"], "スタジオ": ["studio"], "ゲームセンター": ["arcade"], "居酒屋": ["izakaya"], "レストラン": ["restaurant"], "ホテルの部屋": ["hotel room"], "屋根裏部屋": ["attic"], "地下室": ["basement"], "廃墟の室内": ["abandoned building interior"], "神社の中": ["shrine interior"], "教会の中": ["church interior"]}, "屋外": {"街並み": ["cityscape", "street"], "海辺": ["beach", "ocean"], "森・自然": ["forest", "nature"], "夜空・星空": ["night sky", "starry sky"], "学校の屋上": ["rooftop"], "公園": ["park"], "川辺": ["riverbank"], "山": ["mountain"], "田園風景": ["rice field", "countryside"], "商店街": ["shopping street"], "神社境内": ["shrine"], "遊園地": ["amusement park"], "花畑": ["flower field"], "砂漠": ["desert"], "雪山": ["snowy mountain"], "屋外の廃墟": ["ruins"], "橋の上": ["bridge"], "駅のホーム": ["train station platform"], "バス停": ["bus stop"], "路地裏": ["alley"], "屋台": ["food stall"], "花火大会会場": ["fireworks", "festival"], "屋外プール": ["poolside"], "キャンプ場": ["campsite"], "灯台": ["lighthouse"], "崖": ["cliff"], "洞窟": ["cave"], "温泉": ["hot spring"], "牧場": ["ranch", "pasture"], "滝": ["waterfall"]}, "ファンタジー": {"異世界・幻想空間": ["fantasy background"], "城・宮殿": ["castle"], "魔法陣のある部屋": ["magic circle"], "ダンジョン": ["dungeon"], "空中都市": ["floating city"], "竜の巣": ["dragon's lair"], "精霊の森": ["mystical forest"], "異界の遺跡": ["ancient ruins"], "天空の庭": ["sky garden"], "深海の宮殿": ["underwater palace"], "サイバーシティ": ["cyberpunk city"], "未来都市": ["futuristic city"], "異空間の入口": ["portal"], "妖精の里": ["fairy village"], "氷の宮殿": ["ice palace"]}, "季節・天候": {"桜・春": ["cherry blossoms", "spring"], "雪・冬": ["snow", "winter"], "雨": ["rain"], "夕焼け": ["sunset"], "夏": ["summer"], "秋・紅葉": ["autumn leaves"], "曇り": ["cloudy sky"], "霧": ["fog", "mist"], "雷": ["lightning"], "虹": ["rainbow"], "朝焼け": ["sunrise"], "満月の夜": ["full moon", "night"], "台風": ["storm"], "そよ風": ["wind"], "花吹雪": ["cherry blossom petals"], "落ち葉": ["fallen leaves"], "蒸し暑い夏": ["humid summer"], "澄んだ冬の空気": ["clear winter sky"], "オーロラ": ["aurora"], "星降る夜": ["shooting star", "starry night"]}, "背景処理": {"単色背景": ["simple background"], "白背景": ["white background"], "背景なし・透過": ["transparent background"], "グラデーション背景": ["gradient background"], "ぼかし背景": ["blurry background"], "パターン背景": ["pattern background"], "抽象的背景": ["abstract background"], "光の粒子背景": ["light particles"], "モノクロ背景": ["monochrome background"], "カラフルな背景": ["colorful background"]}}, "camera_and_composition": {"画角・距離": {"全身": ["full body"], "バストアップ": ["upper body"], "顔アップ": ["close-up", "face focus"], "引きの構図": ["wide shot"], "膝上": ["cowboy shot"], "横顔": ["profile"], "後ろ姿": ["from behind", "back"], "手元アップ": ["hand focus"], "足元アップ": ["foot focus"], "ポートレート": ["portrait"], "俯瞰全身": ["from above", "full body"], "見切れ構図": ["cropped"], "接写": ["extreme close-up"], "群像構図": ["wide shot", "multiple girls"], "アオリの全身": ["from below", "full body"]}, "アングル": {"俯瞰（見下ろし）": ["from above"], "あおり（見上げ）": ["from below"], "正面": ["from front"], "背後から": ["from behind"], "斜め": ["from side"], "真上から": ["from directly above"], "真下から": ["from directly below"], "魚眼レンズ風": ["fisheye lens"], "ダッチアングル": ["dutch angle"], "アイレベル": ["eye-level shot"], "主観視点": ["pov"], "肩越しショット": ["over-the-shoulder shot"], "横顔アングル": ["profile", "from side"], "三分割構図": ["rule of thirds"], "中心構図": ["centered composition"]}, "画面演出": {"ダイナミックアングル": ["dynamic angle"], "対称構図": ["symmetrical composition"], "フレーム内フレーム": ["framed"], "シルエット": ["silhouette"], "モーションブラー": ["motion blur"], "パンフォーカス": ["deep focus"], "中央寄せ": ["centered"], "オフセンター構図": ["off-center composition"], "ビネット効果": ["vignetting"], "二分割構図": ["split composition"], "望遠圧縮": ["telephoto compression"], "広角の歪み": ["wide-angle lens", "lens distortion"], "ローアングル演出": ["low angle"], "ハイアングル演出": ["high angle"], "ダイナミックポーズ構図": ["dynamic pose", "dynamic angle"]}}, "lighting_and_atmosphere": {"光源・光の種類": {"逆光": ["backlighting"], "順光": ["front lighting"], "木漏れ日": ["sunlight through trees"], "柔らかい光": ["soft lighting"], "硬い光": ["hard lighting"], "スポットライト": ["spotlight"], "キャンドルライト": ["candlelight"], "月光": ["moonlight"], "太陽光": ["sunlight"], "蛍光灯の光": ["fluorescent lighting"], "街灯の光": ["street light"], "ネオン・夜景": ["neon lights"], "反射光": ["reflected light"], "環境光": ["ambient light"], "リムライト": ["rim lighting"], "レンズフレア": ["lens flare"], "ゴッドレイ（光の筋）": ["god rays"], "水面の反射光": ["light reflecting off water"], "ホタルの光": ["fireflies"], "花火の光": ["fireworks light"]}, "時間帯": {"朝": ["morning"], "昼": ["daytime"], "夕方": ["evening"], "黄昏時": ["dusk"], "夜": ["night"], "深夜": ["midnight"], "未明": ["early dawn"], "ゴールデンアワー": ["golden hour"], "ブルーアワー": ["blue hour"]}, "色調・フィルター": {"暖色系": ["warm colors"], "寒色系": ["cool colors"], "セピア調": ["sepia"], "モノクロ": ["monochrome"], "パステルカラー": ["pastel colors"], "ビビッドカラー": ["vivid colors"], "ハイコントラスト": ["high contrast"], "ローコントラスト": ["low contrast"], "彩度低め": ["muted colors"], "彩度高め": ["saturated colors"], "フィルム調": ["film grain"], "ヴィンテージ調": ["vintage"]}, "雰囲気演出": {"被写界深度（背景ボケ）": ["depth of field", "blurry background"], "エモい雰囲気": ["cinematic lighting", "dramatic angle"], "ノスタルジック": ["nostalgic atmosphere"], "幻想的": ["fantastical atmosphere"], "ミステリアス": ["mysterious atmosphere"], "ロマンチック": ["romantic atmosphere"], "爽やか": ["refreshing atmosphere"], "物悲しい": ["melancholic atmosphere"], "緊張感": ["tense atmosphere"], "開放感": ["open atmosphere"], "神秘的": ["mystical atmosphere"], "ほのぼの": ["heartwarming atmosphere"], "儚い": ["ephemeral atmosphere"], "幻惑的": ["dreamlike atmosphere"], "荘厳": ["solemn atmosphere"]}}, "character_archetypes": {"_description": "性格・キャラクター類型。既存カテゴリ(表情・ポーズ・目など)のタグを組み合わせた複合プリセット。danbooruに実在するトロープタグがある場合はそれも含む。", "ツンデレ": ["tsundere", "crossed arms", "looking away", "blush"], "クーデレ": ["kuudere", "expressionless", "cold stare"], "ヤンデレ": ["yandere", "smile", "empty eyes"], "内気・人見知り（ダンデレ）": ["dandere", "shy", "blush"], "元気系": ["genki", "smile", "peace sign", "jumping"], "お嬢様": ["ojou-sama", "elegant", "hand on own cheek"], "委員長・優等生": ["glasses", "serious", "standing"], "不思議系": ["dazed", "closed eyes", "floating hair"], "ドジっ子": ["sweatdrop", "embarrassed", "falling"], "姉御肌": ["hand on hip", "confident expression", "smirk"], "厨二病": ["dramatic angle", "confident expression", "glowing eyes"], "天然・おっとり": ["spaced out", "gentle smile"], "悪役令嬢風": ["smirk", "crossed arms", "elegant dress"], "甘えん坊": ["teary-eyed", "reaching out", "pout"], "毒舌系": ["smirk", "crossed arms", "looking away"], "自信家・ドヤ顔系": ["doyagao", "smug", "confident expression"], "陽キャ": ["laughing", "peace sign", "open mouth"], "内向的・陰キャ": ["expressionless", "looking down", "messy hair"], "負けず嫌い": ["smug", "confident expression", "crossed arms"], "天真爛漫": ["laughing", "jumping", "open mouth"], "無邪気な妹系": ["innocent expression", "head tilt", "smile"], "クール系先輩": ["serious", "crossed arms", "sharp eyes"]}, "negative_prompts": {"_description": "生成崩れ防止のための定番ネガティブプロンプト集。必要に応じてnegative側に付与する。", "品質関連": ["worst quality", "low quality", "normal quality", "jpeg artifacts", "blurry", "lowres", "pixelated", "compression artifacts", "noise", "grainy", "oversaturated", "undersaturated", "overexposed", "underexposed", "washed out colors", "flat colors", "dull colors", "bad shading", "bad lighting", "inconsistent lighting", "muddy colors", "banding", "aliasing", "moire pattern", "unwanted chromatic aberration", "unwanted motion blur", "out of focus", "unfocused", "low detail", "plain background", "low effort", "unfinished", "rough sketch", "lineart only", "unwanted monochrome", "unwanted greyscale", "poorly rendered", "bad rendering", "artifact", "distorted image"], "解剖学的破綻": ["bad anatomy", "bad hands", "extra fingers", "missing fingers", "extra limbs", "fused fingers", "malformed limbs", "missing limbs", "extra arms", "missing arms", "extra legs", "missing legs", "deformed hands", "deformed feet", "mutated hands", "poorly drawn hands", "poorly drawn feet", "poorly drawn face", "malformed face", "asymmetrical eyes", "extra eyes", "missing eyes", "disfigured", "mutation", "mutated", "gross proportions", "long neck", "twisted torso", "unnatural pose", "broken fingers", "fused limbs", "extra digits", "six fingers", "missing digits", "bad feet", "malformed hands", "disconnected limbs", "floating limbs", "wrong anatomy", "bad proportions"], "構図破綻": ["cropped", "out of frame", "duplicate", "watermark", "signature", "text", "username", "artist name", "logo", "border", "frame", "cut off", "extra frame", "tiling", "cropped head", "cropped limbs", "poorly framed", "bad framing", "image splice", "collage", "unwanted multiple views", "unwanted split screen", "grid", "patchwork"]}};

const SECTION_META = {
  base_meta:               { label:"基本情報",       icon:"◆" },
  face_and_head:           { label:"顔・表情",       icon:"◆" },
  outfits:                 { label:"服装",           icon:"◆" },
  accessories_and_props:   { label:"小物・持ち物",   icon:"◆" },
  body_and_pose:           { label:"体型・ポーズ",   icon:"◆" },
  background_and_scene:    { label:"背景・シーン",   icon:"◆" },
  camera_and_composition:  { label:"カメラ・構図",   icon:"◆" },
  lighting_and_atmosphere: { label:"光・雰囲気",     icon:"◆" },
  character_archetypes:    { label:"キャラ類型",     icon:"◆" },
  negative_prompts:        { label:"ネガティブ用語", icon:"◆" }
};

/* ---------- flatten taxonomy into leaf entries ---------- */
function flatten(obj, path, out){
  for(const key in obj){
    if(key.startsWith('_')) continue;
    const val = obj[key];
    const newPath = path.concat(key);
    if(Array.isArray(val)){
      out.push({ breadcrumb:newPath, tags:val });
    } else if (val && typeof val === 'object'){
      flatten(val, newPath, out);
    }
  }
  return out;
}
const ALL_LEAVES = flatten(TAXONOMY, [], []);

// group by top-level section, preserving source order
const SECTIONS = [];
const sectionIndex = {};
ALL_LEAVES.forEach(leaf => {
  const sec = leaf.breadcrumb[0];
  if(!(sec in sectionIndex)){
    sectionIndex[sec] = SECTIONS.length;
    SECTIONS.push({ key:sec, entries:[] });
  }
  SECTIONS[sectionIndex[sec]].entries.push(leaf);
});

/* ---------- tag -> ordering bucket, for the reorder feature ---------- */
const TAG_BUCKET = new Map();
ALL_LEAVES.forEach(leaf => {
  const sec = leaf.breadcrumb[0];
  const sub = leaf.breadcrumb[1];
  let bucket;
  if(sec === 'base_meta'){
    bucket = (sub === '画風・品質' || sub === '画風バリエーション') ? 'quality' : 'subject';
  } else if(sec === 'background_and_scene'){
    bucket = 'background';
  } else if(sec === 'camera_and_composition'){
    bucket = 'camera';
  } else if(sec === 'lighting_and_atmosphere'){
    bucket = 'lighting';
  } else if(sec === 'negative_prompts'){
    bucket = null; // reorder only applies to the positive prompt
  } else {
    // face_and_head, outfits, accessories_and_props, body_and_pose, character_archetypes
    bucket = 'details';
  }
  if(bucket){
    leaf.tags.forEach(t => { if(!TAG_BUCKET.has(t)) TAG_BUCKET.set(t, bucket); });
  }
});
function classify(tag){ return TAG_BUCKET.get(tag) || 'details'; }

const RANK_CLASSIC  = { quality:0, subject:1, details:2, background:3, camera:4, lighting:5 };
const RANK_PLATFORM = { subject:0, details:1, background:2, camera:3, lighting:4, quality:5 };

function reorderPositive(rankMap){
  const withIdx = state.positive.map((t, i) => ({ t, i, rank: rankMap[classify(tagValue(t))] ?? 2 }));
  withIdx.sort((a, b) => (a.rank - b.rank) || (a.i - b.i));
  state.positive = withIdx.map(x => x.t);
}

/* ---------- Prompt編集: 並び替え（PCはドラッグ＆ドロップ、iPhoneは長押し） ----------
   「挿入位置インジケーター（棒線）」方式ではなく、ドラッグ中に実際のチップDOM要素を
   指/マウスの位置に応じてリアルタイムに並べ替える方式。
   ・ドラッグ中、DOM上のチップの並び順を直接動かし、それと完全に同期させる形で
     state.positive / state.negative 配列自体もその場で並び替える
     （renderAll()は呼ばない。呼ぶとDOM要素が作り直されドラッグが途切れるため）。
   ・Undo履歴は「掴んだ瞬間」に1回だけpushHistory()する。ドラッグ中に何度位置が
     変わってもpushHistory()は追加で呼ばない（1回のドラッグ＝最大1履歴）。
   ・ドロップ時、最終的な並びが掴んだ瞬間と同じであれば、その履歴は捨てて
     不要なUndo履歴を残さない。
------------------------------------------------------------------------- */
let dragState = null;     // 実際にドラッグ中: {target, pointerId, chipEl, container}
let pendingDrag = null;   // タッチ長押し待ち中: {timer, startX, startY, target, chipEl, pointerId}

function cancelPendingDrag(){
  if(pendingDrag){ clearTimeout(pendingDrag.timer); pendingDrag = null; }
}
// containerの中で、chipElが現在何番目の.chipか（DOM順）。
// ドラッグ中はDOMの並び＝state[target]の並びを常に一致させ続けるため、
// このDOM上のindexがそのままstate配列上のindexとしても使える。
function domChipIndex(container, chipEl){
  const chips = Array.from(container.children).filter(c => c.classList && c.classList.contains('chip'));
  return chips.indexOf(chipEl);
}
function arraysEqualByValue(a, b){
  if(a.length !== b.length) return false;
  for(let i = 0; i < a.length; i++){ if(tagValue(a[i]) !== tagValue(b[i])) return false; }
  return true;
}
function beginDrag(target, chipEl, pointerId){
  pushHistory(); // 掴んだ瞬間に1回だけ。ドロップ時、変化が無ければこの履歴は取り消す。
  const container = chipEl.parentElement;
  dragState = { target, pointerId, chipEl, container };
  chipEl.classList.add('chip-dragging');
  // スクロール抑止の補助（触れた時点でtouch-action:noneにしても間に合わない場合があるため、
  // pointermove側のpreventDefault()と併用する）。ドラッグ終了時に必ず元へ戻す。
  chipEl.style.touchAction = 'none';
}
function onChipPointerDown(e){
  // 「×」削除ボタンの上から始まった場合はドラッグを始めない（削除操作を優先）
  if(e.target.closest('[data-remove-index]')) return;
  const chipEl = e.currentTarget;
  const target = chipEl.getAttribute('data-chip-target');

  if(e.pointerType === 'mouse'){
    // PC: チップ本体のどこを掴んでもそのままドラッグ開始。
    // 実際に別の位置へ動かさなければ、pointerup側で履歴を戻したうえで
    // 通常のclickイベント（複数選択タップ等）がそのまま後段で発火する。
    e.preventDefault();
    beginDrag(target, chipEl, e.pointerId);
    try{ chipEl.setPointerCapture(e.pointerId); }catch(err){}
  } else {
    // iPhone等タッチ/ペン: pointerdown時点では絶対にpreventDefault()しない。
    // ここでpreventDefaultすると、チップ付近を触っただけでページの縦スクロールが
    // 効かなくなってしまう。指が動かないまま約350ms経過して初めてドラッグを開始し、
    // そこから先（onDragPointerMove／touchmove）でpreventDefault()してスクロールを止める。
    // 350ms以内に指が離れた/動いた場合はタップやスクロール扱いとなり、
    // 通常のタグ選択操作・ページスクロールがそのまま動作する。
    cancelPendingDrag();
    pendingDrag = {
      target, chipEl, pointerId: e.pointerId,
      startX: e.clientX, startY: e.clientY,
      timer: setTimeout(() => {
        if(!pendingDrag) return;
        beginDrag(pendingDrag.target, pendingDrag.chipEl, pendingDrag.pointerId);
        // ドラッグ確定後は、指がチップ領域から多少外れてもPointer Captureにより
        // 以降のpointermove/pointerup/pointercancelが確実にこのチップへ配送され続ける。
        try{ chipEl.setPointerCapture(pendingDrag.pointerId); }catch(err){}
        pendingDrag = null;
      }, 350)
    };
  }
}
function onDragPointerMove(e){
  if(pendingDrag){
    if(Math.abs(e.clientX - pendingDrag.startX) > 10 || Math.abs(e.clientY - pendingDrag.startY) > 10){
      cancelPendingDrag(); // 長押し確定前に指が動いた=スクロール等の意図とみなしキャンセル
    }
    return;
  }
  if(!dragState || e.pointerId !== dragState.pointerId) return;
  e.preventDefault(); // ドラッグ確定後のみ、ここでスクロールを止める
  const { container, chipEl, target } = dragState;
  const el = document.elementFromPoint(e.clientX, e.clientY);
  const overChip = (el && el.closest) ? el.closest('.chip') : null;
  // ドラッグ対象自身の上、対象外のリスト、コンテナ外にいる場合は何もしない
  // （＝直前の並びを維持。指がチップ領域から外れても並び替えは止まるだけで解除はされない）
  if(!overChip || overChip === chipEl) return;
  if(!container.contains(overChip)) return;
  if(overChip.getAttribute('data-chip-target') !== target) return;

  const rect = overChip.getBoundingClientRect();
  const before = e.clientX < rect.left + rect.width / 2;

  // 既にその位置にいるなら何もしない（無駄なDOM操作・配列操作を避ける）
  if(before && overChip.previousSibling === chipEl) return;
  if(!before && overChip.nextSibling === chipEl) return;

  const oldIndex = domChipIndex(container, chipEl);
  if(before) container.insertBefore(chipEl, overChip);
  else container.insertBefore(chipEl, overChip.nextSibling); // nextSiblingがnullなら末尾
  const newIndex = domChipIndex(container, chipEl);

  // DOM上の移動と完全に同期させて、Prompt配列自体もその場で並び替える。
  // （画面に見えている順序＝state配列の順序を常に一致させ続ける）
  if(newIndex !== oldIndex){
    const arr = state[target];
    const moved = arr.splice(oldIndex, 1)[0];
    arr.splice(newIndex, 0, moved);
  }
}
function finishDrag(commit){
  const { target, chipEl, container } = dragState;
  chipEl.classList.remove('chip-dragging');
  chipEl.style.touchAction = '';
  const snapshot = historyPast[historyPast.length - 1]; // beginDrag()で積んだ「掴む前」の状態
  dragState = null;

  if(commit){
    if(snapshot && arraysEqualByValue(snapshot[target], state[target])){
      historyPast.pop(); // 結果的に並びが変わらなかった: 不要な履歴を残さない
    }
    // 変化していれば、掴んだ瞬間に積んだ1件の履歴をそのまま残す（1操作＝1履歴）
  } else if(snapshot){
    // pointercancel等: ドラッグ開始前の状態へ強制的に巻き戻す
    historyPast.pop();
    restoreSnapshot(snapshot);
  }
  // 並び替え（成立・巻き戻し双方）でindexの並びが変わりうるため、
  // multiSelectの選択中indexが別のタグを指してしまわないよう選択状態をリセットする。
  multiSelect[target] = null;
  saveState();
  renderAll(); // data-chip-index等を正しい値に再構築するため、ドロップ後に一度だけ呼ぶ
}
function onDragPointerUp(e){
  if(pendingDrag){ cancelPendingDrag(); return; } // 長押し確定前にリリース=タップ扱い、何もしない（通常のクリックに任せる）
  if(!dragState || e.pointerId !== dragState.pointerId) return;
  finishDrag(true);
}
function onDragPointerCancel(e){
  if(pendingDrag){ cancelPendingDrag(); return; }
  if(!dragState || e.pointerId !== dragState.pointerId) return;
  finishDrag(false); // キャンセル時は常に元の状態に戻す
}
document.addEventListener('pointermove', onDragPointerMove, { passive:false });
document.addEventListener('pointerup', onDragPointerUp);
document.addEventListener('pointercancel', onDragPointerCancel);
// 一部ブラウザ(特にiOS Safari)ではpointermove側のpreventDefault()だけでは
// スクロールを確実に止められない場合があるため、素のtouchmoveでも二重に防止する。
// ドラッグ確定前（pendingDrag中）は何もしないため、通常のスクロールは阻害しない。
document.addEventListener('touchmove', (e) => {
  if(dragState) e.preventDefault();
}, { passive:false });

/* ---------- state ---------- */
// schemaVersion: 保存データの形式バージョン。将来データ構造を変更する際、
// migrateState() でこの番号を見て段階的に移行できるようにする。
const STATE_VERSION = 1;

// defaultState(): アプリが扱う論理データの一覧。
// 現時点で実際に使われているのは positive / negative / character / presets / orderMode のみ。
// organizations / groups / drafts / savedPrompts / userTaxonomy / settings は
// Phase 3以降で使う受け皿として、空の状態であらかじめ用意しておく（Phase0設計に基づく）。
function defaultState(){
  return {
    schemaVersion: STATE_VERSION,
    // --- Prompt / Negative Prompt（既存・現行仕様のまま） ---
    positive: [],
    negative: [],
    // --- Character（現在編集中の「かご」内キャラクター。既存仕様のまま） ---
    character: { name:'', affiliation:'' },
    // --- Character preset（既存の登録済みキャラクター。既存仕様のまま） ---
    presets: [],
    orderMode: 'classic',
    // --- Phase 3: 所属・グループ・キャラクター（階層データ） ---
    // organizations: {id, displayName, promptValue}
    // groups:        {id, organizationId, displayName, promptValue}
    // characters:    {id, groupId, displayName, promptValue}
    // 既存の state.character（フリー入力の名前/所属）・state.presets（既存プリセット）とは別物。
    // 未登録キャラの場合の手動フォールバックとして state.character は維持する。
    organizations: [],   // Organization（所属）
    groups: [],           // Group（グループ）
    characters: [],       // Character（階層登録されたキャラクター本体）
    selectedCharacterId: null, // 階層選択UIで現在選ばれているcharacters[].id（未選択時null＝フリー入力を使う）
    // --- 以下はPhase 4以降で実装される予定の受け皿（Phase0設計） ---
    drafts: [],           // Draft（下書き）
    savedPrompts: [],     // Saved Prompt（保存済みPrompt）
    userTaxonomy: { categories: [] }, // User Taxonomy（標準TAXONOMYとは別ツリー。絶対に混ぜない）
    settings: {}          // Settings（設定）
  };
}
let state = defaultState();
let addTarget = 'positive'; // reserved for future toggle; negative_prompts section always -> negative
let openSections = new Set([SECTIONS[0] ? SECTIONS[0].key : null]);

/* ---------- Prompt編集: Undo/Redo履歴 ----------
   対象は Prompt(positive) / Negative Prompt(negative) の配列のみ。
   タグ追加・削除・複数削除・並び替え（自動追加/AI追加も将来ここを通る想定）は
   すべて pushHistory() を経由してからstateを変更する。
   キャラクター名・所属・プリセットはPhase3で別概念として扱うため、
   今回のUndo/Redoの対象には含めない（既知の仕様として明記）。
------------------------------------------------- */
let historyPast = [];
let historyFuture = [];
const MAX_HISTORY = 50;

function clonePromptTag(t){
  // タグは現状すべて文字列だが、将来オブジェクト形式(displayName/promptValue等)が
  // 混在しても安全にコピーできるようにしておく。
  return (t && typeof t === 'object') ? Object.assign({}, t) : t;
}
function snapshotPrompt(){
  // Phase3: character関連（フリー入力の名前/所属、および階層選択中のselectedCharacterId）も
  // スナップショットに含める。これにより「すべて空にする」やプリセット呼び出しをUndoした際、
  // タグ配列だけでなくキャラクター情報も正しく復元されるようになる
  // （Phase2時点の既知の制限：キャラクター名は戻らない、をここで解消）。
  // ただし、自由入力欄への1文字ごとのタイピングはこれまで通りpushHistory()の対象にしない
  // （タグ追加・削除・並び替え・キャラクター選択など、離散的な操作の時点でのみ記録される）。
  return {
    positive: state.positive.map(clonePromptTag),
    negative: state.negative.map(clonePromptTag),
    characterName: state.character.name,
    characterAffiliation: state.character.affiliation,
    selectedCharacterId: state.selectedCharacterId
  };
}
function restoreSnapshot(snap){
  state.positive = snap.positive.map(clonePromptTag);
  state.negative = snap.negative.map(clonePromptTag);
  if(snap.characterName !== undefined) state.character.name = snap.characterName;
  if(snap.characterAffiliation !== undefined) state.character.affiliation = snap.characterAffiliation;
  if('selectedCharacterId' in snap) state.selectedCharacterId = snap.selectedCharacterId;
  // Undo/Redoで配列が丸ごと入れ替わるため、multiSelectの選択中indexが
  // 別のタグを指してしまわないよう選択状態をリセットする（GPT-REQ-001-003関連の安全対策）。
  multiSelect = { positive: null, negative: null };
}
function pushHistory(){
  historyPast.push(snapshotPrompt());
  if(historyPast.length > MAX_HISTORY) historyPast.shift();
  historyFuture = []; // 新しい変更をしたら「やり直す」方向の履歴は破棄する
}
function undo(){
  if(historyPast.length === 0) return;
  const current = snapshotPrompt();
  const prev = historyPast.pop();
  historyFuture.push(current);
  restoreSnapshot(prev);
  saveState();
  renderAll();
}
function redo(){
  if(historyFuture.length === 0) return;
  const current = snapshotPrompt();
  const next = historyFuture.pop();
  historyPast.push(current);
  restoreSnapshot(next);
  saveState();
  renderAll();
}

/* ---------- Prompt編集: タグ複数選択削除 ----------
   multiSelect[target] が null なら通常モード（従来通り）。
   Setが入っていれば選択モード中で、Setの中身は選択中のタグの配列index（数値）。
   REQ-001-002で重複挿入（同一promptValueのタグが複数存在しうる）を許可したため、
   GPT-REQ-001-003対応として値(tagValue)ベースからindexベースへ変更した。
   indexは配列の並び替え・削除で位置がずれるため、削除・並び替えが起きた際は
   その対象targetのmultiSelectを必ずリセットする（removeTagAt / finishDrag参照）。
------------------------------------------------- */
let multiSelect = { positive: null, negative: null };

/* ---------- persistence ---------- */
// sanitizeState(): 保存データを1フィールドずつ検証し、壊れている/存在しない項目だけを
// デフォルト値に差し替える。以前は positive/negative の形式が少しでもおかしいと
// 全データを読み捨てていたが、それをやめてフィールド単位のフォールバックにする。
function sanitizeState(parsed){
  const base = defaultState();
  if(!parsed || typeof parsed !== 'object') return base;

  if(Array.isArray(parsed.positive)) base.positive = parsed.positive;
  if(Array.isArray(parsed.negative)) base.negative = parsed.negative;

  if(parsed.character && typeof parsed.character === 'object'){
    base.character = {
      name: typeof parsed.character.name === 'string' ? parsed.character.name : '',
      affiliation: typeof parsed.character.affiliation === 'string' ? parsed.character.affiliation : ''
    };
  }
  if(Array.isArray(parsed.presets)) base.presets = parsed.presets;
  if(parsed.orderMode === 'classic' || parsed.orderMode === 'pixai' || parsed.orderMode === 'novelai'){
    base.orderMode = parsed.orderMode;
  }

  // Phase3修正: organizations/groups/charactersは、配列であることだけでなく
  // 要素ごとに必須フィールドの型を検証し、不正な要素（null/文字列/数値/不完全なオブジェクト等）
  // を個別に除外する。さらにgroup.organizationId / character.groupIdの参照整合性も検証し、
  // 実在しないIDを参照している要素は不正データとして除外する。
  // 検証順序が重要: organizations → groups（有効なorganizationIdのみ許可）→
  // characters（有効なgroupIdのみ許可）の順で、前段の結果を後段の参照整合性チェックに使う。
  function isNonEmptyString(v){ return typeof v === 'string' && v.trim().length > 0; }
  function isStringOrEmpty(v){ return typeof v === 'string'; }

  let validOrganizations = [];
  if(Array.isArray(parsed.organizations)){
    validOrganizations = parsed.organizations.filter(o =>
      o && typeof o === 'object' && !Array.isArray(o) &&
      isNonEmptyString(o.id) && isNonEmptyString(o.displayName) && isStringOrEmpty(o.promptValue)
    );
  }
  base.organizations = validOrganizations;
  const validOrgIds = new Set(validOrganizations.map(o => o.id));

  let validGroups = [];
  if(Array.isArray(parsed.groups)){
    validGroups = parsed.groups.filter(g =>
      g && typeof g === 'object' && !Array.isArray(g) &&
      isNonEmptyString(g.id) && isNonEmptyString(g.organizationId) &&
      isNonEmptyString(g.displayName) && isStringOrEmpty(g.promptValue) &&
      validOrgIds.has(g.organizationId) // 存在しないOrganizationを参照するGroupは除外
    );
  }
  base.groups = validGroups;
  const validGroupIds = new Set(validGroups.map(g => g.id));

  let validCharacters = [];
  if(Array.isArray(parsed.characters)){
    validCharacters = parsed.characters.filter(c =>
      c && typeof c === 'object' && !Array.isArray(c) &&
      isNonEmptyString(c.id) && isNonEmptyString(c.groupId) &&
      isNonEmptyString(c.displayName) && isStringOrEmpty(c.promptValue) &&
      validGroupIds.has(c.groupId) // 存在しないGroupを参照するCharacterは除外
    ).map(c => ({
      // Phase3.2（REQ-001）: infoTags（キャラクター情報Prompt）を追加。
      // Phase3.1以前に保存されたデータにはこのフィールドが無いため、
      // 存在しない/壊れている場合は空配列で補う（既存データを壊さないための後方互換）。
      ...c,
      infoTags: Array.isArray(c.infoTags) ? c.infoTags : []
    }));
  }
  base.characters = validCharacters;
  const validCharIds = new Set(validCharacters.map(c => c.id));

  if(typeof parsed.selectedCharacterId === 'string' && validCharIds.has(parsed.selectedCharacterId)){
    base.selectedCharacterId = parsed.selectedCharacterId;
  } else {
    base.selectedCharacterId = null; // 存在しないCharacterを指す場合は安全にnullへ戻す
  }
  if(Array.isArray(parsed.drafts)) base.drafts = parsed.drafts;
  if(Array.isArray(parsed.savedPrompts)) base.savedPrompts = parsed.savedPrompts;
  if(parsed.userTaxonomy && typeof parsed.userTaxonomy === 'object' && Array.isArray(parsed.userTaxonomy.categories)){
    base.userTaxonomy = parsed.userTaxonomy;
  }
  if(parsed.settings && typeof parsed.settings === 'object' && !Array.isArray(parsed.settings)){
    base.settings = parsed.settings;
  }

  base.schemaVersion = STATE_VERSION;
  return base;
}

async function loadState(){
  try{
    const raw = localStorage.getItem('tag-builder-state');
    if(raw){
      let parsed = null;
      try{ parsed = JSON.parse(raw); }
      catch(e){ parsed = null; } // JSON破損時はnullのまま→sanitizeStateがdefaultStateを返す
      state = sanitizeState(parsed);
    }
  }catch(e){ /* localStorage自体が使えない環境（プライベートモード等）でも落とさない */ }
}
let saveTimer = null;
function saveState(){
  state.schemaVersion = STATE_VERSION;
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    try{ localStorage.setItem('tag-builder-state', JSON.stringify(state)); }
    catch(e){ /* 容量超過・プライベートモード等の保存失敗でも落とさない */ }
  }, 250);
}

/* ---------- helpers ---------- */
function esc(s){
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
// tagValue()/tagDisplay(): Prompt配列の各要素は現状すべて「文字列そのもの」
// （= danbooruタグ値）だが、将来（Phase5の自動追加やPhase7/8のAI候補など）は
// { displayName, promptValue, category, source, addedBy, autoGenerated } という
// オブジェクトも混在させたい。既存のPrompt生成・比較ロジックを壊さないよう、
// 「タグが文字列でもオブジェクトでも同じように扱える」正規化関数をここに用意する。
// 現時点ではUI側は引き続き文字列しかpushしないため、挙動は完全に既存通り。
function tagValue(t){
  if(t && typeof t === 'object') return t.promptValue !== undefined ? t.promptValue : (t.displayName || '');
  return t;
}
function tagDisplay(t){
  if(t && typeof t === 'object') return t.displayName || t.promptValue || '';
  return t;
}

function isAdded(tag, target){ return state[target].some(t => tagValue(t) === tag); }
function addTag(tag, target){
  if(state[target].some(t => tagValue(t) === tag)) return; // 既に追加済みなら何もしない（履歴も積まない）
  pushHistory();
  state[target].push(tag);
  saveState();
  renderAll();
}
function removeTag(tag, target){
  if(!state[target].some(t => tagValue(t) === tag)) return; // 対象が無ければ何もしない（履歴も積まない）
  pushHistory();
  state[target] = state[target].filter(t => tagValue(t) !== tag);
  saveState();
  renderAll();
}
// removeTagAt(): 配列index指定での削除。REQ-001-002で重複挿入（同一promptValueの
// タグが複数存在しうる）を許可したため、chipの×ボタンによる個別削除は値一致ではなく
// indexで行う必要がある（値一致だと同じキャラクターの他のインスタンスも消えてしまう）。
// タグの並び替え・追加・削除のたびにDOMのdata-chip-indexはrenderAll()で再構築されるため、
// クリック時点のindexは常に最新のstate配列位置と一致する。
function removeTagAt(index, target){
  if(!Array.isArray(state[target]) || index < 0 || index >= state[target].length) return;
  pushHistory();
  state[target].splice(index, 1);
  // 削除によりこれ以降の要素のindexが1つずつ前へずれるため、
  // multiSelectの選択中indexが別のタグを指してしまわないよう選択状態をリセットする。
  multiSelect[target] = null;
  saveState();
  renderAll();
}
function toggleTag(tag, target){
  if(isAdded(tag, target)) removeTag(tag, target);
  else addTag(tag, target);
}
function addAll(tags, target){
  const newOnes = tags.filter(t => !state[target].some(existing => tagValue(existing) === t));
  if(newOnes.length > 0){
    pushHistory();
    newOnes.forEach(t => state[target].push(t));
    saveState();
  }
  renderAll();
  showToast(`${tags.length}個のタグを追加しました`);
}
function clearAll(){
  const alreadyEmpty = state.positive.length + state.negative.length === 0 &&
    !state.character.name && !state.character.affiliation && !state.selectedCharacterId;
  if(alreadyEmpty) return;
  pushHistory();
  state.positive = [];
  state.negative = [];
  state.character = { name:'', affiliation:'' };
  state.selectedCharacterId = null;
  saveState();
  renderAll();
  showToast('かごを空にしました');
}
/* ---------- Phase 3: 所属 → グループ → キャラクター（階層データ） ----------
   既存の state.character（フリー入力の名前/所属）は「未登録キャラ用の手動フォールバック」
   として維持する。state.selectedCharacterId が設定されている間はそちらを優先し、
   フリー入力欄は使用しない（UI側で disabled にする）。
   organizations/groups/charactersの登録・編集・削除自体は、既存のpresets同様
   「マスターデータの管理」であり、pushHistory()の対象（Undo/Redo対象）にはしない。
   一方、selectedCharacterIdの変更（どのキャラクターを使うか）はPrompt編集状態の一部として
   pushHistory()の対象にする。
------------------------------------------------------------------------- */
function genId(prefix){
  return prefix + '_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 8);
}

function addOrganization(displayName, promptValue){
  displayName = (displayName || '').trim();
  if(!displayName) return null;
  const org = { id: genId('org'), displayName, promptValue: (promptValue || '').trim() };
  state.organizations.push(org);
  saveState();
  return org;
}
function addGroup(organizationId, displayName, promptValue){
  displayName = (displayName || '').trim();
  if(!organizationId || !displayName) return null;
  if(!state.organizations.some(o => o.id === organizationId)) return null;
  const group = { id: genId('grp'), organizationId, displayName, promptValue: (promptValue || '').trim() };
  state.groups.push(group);
  saveState();
  return group;
}
function addCharacterEntry(groupId, displayName, promptValue){
  displayName = (displayName || '').trim();
  if(!groupId || !displayName) return null;
  if(!state.groups.some(g => g.id === groupId)) return null;
  // Phase3.2（REQ-001）: infoTags = このキャラクターに紐付く「情報Prompt」（外見タグ等）。
  // 挿入時（insertSelection）にキャラクター本体のタグと一緒に自動追加される。
  const character = { id: genId('chr'), groupId, displayName, promptValue: (promptValue || '').trim(), infoTags: [] };
  state.characters.push(character);
  saveState();
  return character;
}
function deleteOrganization(id){
  const groupIds = state.groups.filter(g => g.organizationId === id).map(g => g.id);
  const charIds = state.characters.filter(c => groupIds.includes(c.groupId)).map(c => c.id);
  if(state.selectedCharacterId && charIds.includes(state.selectedCharacterId)) clearSelectedCharacter(false);
  state.characters = state.characters.filter(c => !groupIds.includes(c.groupId));
  state.groups = state.groups.filter(g => g.organizationId !== id);
  state.organizations = state.organizations.filter(o => o.id !== id);
  saveState();
}
function deleteGroup(id){
  const charIds = state.characters.filter(c => c.groupId === id).map(c => c.id);
  if(state.selectedCharacterId && charIds.includes(state.selectedCharacterId)) clearSelectedCharacter(false);
  state.characters = state.characters.filter(c => c.groupId !== id);
  state.groups = state.groups.filter(g => g.id !== id);
  saveState();
}
function deleteCharacterEntry(id){
  if(state.selectedCharacterId === id) clearSelectedCharacter(false);
  state.characters = state.characters.filter(c => c.id !== id);
  saveState();
}

/* ---------- Phase3.2（REQ-001）: キャラクター情報Prompt（infoTags） ----------
   キャラクター名と外見等のPromptを紐付け、insertSelection()でキャラクターを
   挿入する際に自動的に一緒にPromptへ追加できるようにする。
   infoTags自体はキャラクターの「マスターデータ」の一部として扱うため、
   既存のorganizations/groups/characters本体の追加・削除（addCharacterEntry等）と
   同様にUndo/Redo（pushHistory）の対象外とする（D-001: 将来のUndo/Redo拡張まで据え置き）。
------------------------------------------------------------------------- */
// infoEditCharId: 現在「情報タグ追加モード」中のキャラクターID（nullなら通常モード）。
// 画面表示のみに関わる一時的な状態のため、stateには含めず保存もしない。
let infoEditCharId = null;

function toggleInfoEditMode(charId){
  if(!state.characters.some(c => c.id === charId)) return;
  infoEditCharId = (infoEditCharId === charId) ? null : charId;
  renderAll();
}
function exitInfoEditMode(){
  if(!infoEditCharId) return;
  infoEditCharId = null;
  renderAll();
}
function addCharacterInfoTag(charId, tag){
  const char = state.characters.find(c => c.id === charId);
  if(!char) return;
  if(!Array.isArray(char.infoTags)) char.infoTags = [];
  // 通常のPromptタグ(addTag)と同様、情報タグ自体の重複追加は防止する（冪等）。
  if(char.infoTags.some(t => tagValue(t) === tagValue(tag))) return;
  char.infoTags.push(tag);
  saveState();
  renderAll();
}
function removeCharacterInfoTag(charId, tag){
  const char = state.characters.find(c => c.id === charId);
  if(!char || !Array.isArray(char.infoTags)) return;
  char.infoTags = char.infoTags.filter(t => tagValue(t) !== tag);
  saveState();
  renderAll();
}

// selectCharacterEntry() / clearSelectedCharacter(): どのキャラクターをPromptに使うかは
// Prompt編集状態の一部として扱い、pushHistory()を経由する（1回の選択変更＝1履歴）。
function selectCharacterEntry(id){
  if(!state.characters.some(c => c.id === id)) return;
  if(state.selectedCharacterId === id) return; // 変化なしなら履歴を積まない
  pushHistory();
  state.selectedCharacterId = id;
  saveState();
  renderAll();
}
function clearSelectedCharacter(withHistory){
  if(!state.selectedCharacterId) return;
  if(withHistory !== false) pushHistory();
  state.selectedCharacterId = null;
  if(withHistory !== false){ saveState(); renderAll(); }
  else { saveState(); } // マスターデータ削除に伴う自動解除時は再描画は呼び出し元に任せる
}

// resolveCharacterOutput(): Prompt生成やコピー可否判定で実際に使う「キャラクター名/所属」を
// 一箇所で解決する。selectedCharacterIdがあれば階層データ（Prompt出力値優先）、
// なければ既存のフリー入力（フォールバック）を使う。
function resolveCharacterOutput(){
  if(state.selectedCharacterId){
    const char = state.characters.find(c => c.id === state.selectedCharacterId);
    if(char){
      const group = state.groups.find(g => g.id === char.groupId) || null;
      const org = group ? (state.organizations.find(o => o.id === group.organizationId) || null) : null;
      const name = (char.promptValue || char.displayName || '').trim();
      const affiliation = (
        (org && (org.promptValue || org.displayName)) ||
        (group && (group.promptValue || group.displayName)) ||
        ''
      ).trim();
      const displayLabel = [char.displayName, group && group.displayName, org && org.displayName]
        .filter(Boolean).join(' / ');
      return { name, affiliation, displayLabel, viaHierarchy: true };
    }
    // 参照先が削除済み等で見つからない場合は安全にフォールバック
  }
  return {
    name: (state.character.name || '').trim(),
    affiliation: (state.character.affiliation || '').trim(),
    displayLabel: '',
    viaHierarchy: false
  };
}

// hasFreeInputCharacter(): Phase3.1（REQ-001）以降、Prompt出力・コピー可否判定における
// 「キャラクター情報がある」は、フリー入力（state.character）のみを指す。
// 階層選択（selectedCharacterId）は「選択しているだけ」では出力に含まれないため、
// ここではカウントしない（挿入済みなら state.positive.length に自然に反映される）。
function hasFreeInputCharacter(){
  return !state.selectedCharacterId &&
    !!((state.character.name || '').trim() || (state.character.affiliation || '').trim());
}

function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(()=>t.classList.remove('show'), 1400);
}
async function copyText(text, label){
  try{
    await navigator.clipboard.writeText(text);
  }catch(e){
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.position='fixed'; ta.style.opacity='0';
    document.body.appendChild(ta); ta.select();
    try{ document.execCommand('copy'); }catch(e2){}
    document.body.removeChild(ta);
  }
  showToast(label ? `${label}をコピーしました` : 'コピーしました');
}

/* ---------- rendering: entry card ---------- */
function entryHTML(leaf){
  const isNeg = leaf.breadcrumb[0] === 'negative_prompts';
  const target = isNeg ? 'negative' : null; // null = respect per-tag toggle via positive default, but addAll needs a target
  const label = leaf.breadcrumb[leaf.breadcrumb.length - 1];
  const pathBits = leaf.breadcrumb.slice(1, -1);
  const pathStr = pathBits.length ? pathBits.join(' › ') : (SECTION_META[leaf.breadcrumb[0]]?.label || leaf.breadcrumb[0]);
  const tagsHTML = leaf.tags.map(tag => {
    const posAdded = state.positive.some(t => tagValue(t) === tag);
    const negAdded = state.negative.some(t => tagValue(t) === tag);
    const added = isNeg ? negAdded : posAdded;
    return `<span class="tag-pill${added?' added':''}" data-tag="${esc(tag)}" data-neg="${isNeg?'1':'0'}">${esc(tag)}</span>`;
  }).join('');
  const addAllTarget = isNeg ? 'negative' : 'positive';
  return `
  <div class="entry" data-leaf="1">
    <div class="entry-top">
      <div class="entry-label-wrap">
        <span class="entry-path">${esc(pathStr)}</span>
        <span class="entry-label">${esc(label)}</span>
      </div>
      <button class="btn-addall${isNeg?' is-neg':''}" data-addall="${esc(leaf.tags.join('\u0001'))}" data-target="${addAllTarget}">
        + すべて${isNeg?'NEGに':''}追加
      </button>
    </div>
    <div class="tag-row">${tagsHTML}</div>
  </div>`;
}

/* ---------- rendering: browse (accordion or search results) ---------- */
function renderBrowse(){
  const q = document.getElementById('search').value.trim().toLowerCase();
  const browse = document.getElementById('browse');
  const metaEl = document.getElementById('searchMeta');

  if(q){
    const matches = ALL_LEAVES.filter(leaf => {
      const hay = leaf.breadcrumb.join(' ').toLowerCase() + ' ' + leaf.tags.join(' ').toLowerCase();
      return hay.includes(q);
    });
    metaEl.textContent = `${matches.length} 件ヒット`;
    if(matches.length === 0){
      browse.innerHTML = `<div class="empty-state"><div class="glyph">◇</div>「<b>${esc(document.getElementById('search').value)}</b>」に一致する項目が見つかりませんでした。<br>目録にない概念は、danbooruの命名慣習（例: <i>holding X</i>, <i>X hair</i>）に沿って自分でタグを補ってください。</div>`;
      return;
    }
    browse.innerHTML = matches.map(leaf => `
      <div class="section-search-group">
        <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--text-dim);margin:14px 2px 2px;">${esc(SECTION_META[leaf.breadcrumb[0]]?.label || leaf.breadcrumb[0])}</div>
        ${entryHTML(leaf)}
      </div>`).join('');
  } else {
    metaEl.textContent = `全 ${ALL_LEAVES.length} 項目 / ${SECTIONS.length} カテゴリ`;
    browse.innerHTML = SECTIONS.map(sec => {
      const meta = SECTION_META[sec.key] || { label: sec.key };
      const isOpen = openSections.has(sec.key);
      return `
      <div class="section${isOpen ? ' open' : ''}" data-section="${esc(sec.key)}">
        <div class="section-head" data-toggle="${esc(sec.key)}">
          <div class="section-head-left">
            <span class="section-pull"></span>
            <span class="section-title">${esc(meta.label)}</span>
            <span class="section-key">${esc(sec.key)}</span>
          </div>
          <div style="display:flex; align-items:center; gap:10px;">
            <span class="section-count">${sec.entries.length}</span>
            <svg class="chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
        </div>
        <div class="section-body">${sec.entries.map(entryHTML).join('')}</div>
      </div>`;
    }).join('');
  }
}

/* ---------- rendering: tray (used for both sidebar and mobile sheet, may be duplicated in DOM) ---------- */
function chipHTML(tag, target, index){
  const display = tagDisplay(tag);
  const selecting = !!multiSelect[target];
  const selected = selecting && multiSelect[target].has(index);
  return `<span class="chip${selected?' chip-selected':''}" data-chip data-chip-index="${index}" data-chip-target="${target}" title="タグ全体をドラッグ（スマホは長押し）して並べ替え">` +
    `<span class="chip-grip" aria-hidden="true">⠿</span>` +
    `<span class="chip-text" data-chip-select-index="${index}" data-chip-target="${target}">${esc(display)}</span>` +
    `<button data-remove-index="${index}" data-target="${target}" title="削除">×</button>` +
    `</span>`;
}
function buildPromptString(){
  // Phase3.1（REQ-001）: 「選択」と「Promptへの正式挿入」を分離する。
  // 階層選択（所属/グループ/キャラクター）は挿入されるまでPromptへ反映しない。
  // 挿入済みのものは通常のPromptタグとして state.positive に入っているため、
  // positiveValues側で自動的に含まれる。ここでの自動合成（charBits）は
  // 「未登録キャラのフリー入力（state.character）」のみを対象にする（従来通り維持）。
  const charBits = [];
  if(!state.selectedCharacterId){
    const name = (state.character.name || '').trim();
    const aff = (state.character.affiliation || '').trim();
    if(name) charBits.push(name);
    if(aff) charBits.push(aff);
  }

  const positiveValues = state.positive.map(tagValue);

  if(charBits.length === 0) return positiveValues.join(', ');

  if(state.orderMode === 'pixai' || state.orderMode === 'novelai'){
    // platform order: quality tags moved to the end, so the character
    // identity goes at the very front where it carries the most weight
    return charBits.concat(positiveValues).join(', ');
  }

  // classic order: insert right after the last recognised quality tag
  // in the selection (or at the very start if none were added)
  const qualityTags = (TAXONOMY.base_meta && TAXONOMY.base_meta['画風・品質']) || [];
  let insertIdx = 0;
  positiveValues.forEach((tag, i) => { if(qualityTags.includes(tag)) insertIdx = i + 1; });
  const merged = positiveValues.slice(0, insertIdx).concat(charBits, positiveValues.slice(insertIdx));
  return merged.join(', ');
}
function buildNegativeString(){
  return state.negative.map(tagValue).join(', ');
}
function renderTray(){
  const total = state.positive.length + state.negative.length;
  document.querySelectorAll('[data-tray-root]').forEach(root => {
    root.querySelector('[data-tray-total]').textContent = total;
    root.querySelector('[data-pos-count]').textContent = state.positive.length;
    root.querySelector('[data-neg-count]').textContent = state.negative.length;
    root.querySelector('[data-pos-chips]').innerHTML = state.positive.map((t,i) => chipHTML(t,'positive',i)).join('');
    root.querySelector('[data-neg-chips]').innerHTML = state.negative.map((t,i) => chipHTML(t,'negative',i)).join('');
    const posOut = root.querySelector('[data-pos-out]');
    const negOut = root.querySelector('[data-neg-out]');
    posOut.value = buildPromptString();
    negOut.value = buildNegativeString();
    const hasChar = hasFreeInputCharacter(); // Phase3.1: 階層選択のみでは true にならない
    root.querySelector('[data-copy-pos]').disabled = state.positive.length === 0 && !hasChar;
    root.querySelector('[data-copy-neg]').disabled = state.negative.length === 0;
    root.querySelector('[data-copy-both]').disabled = total === 0 && !hasChar;
    root.querySelector('[data-clear]').disabled = total === 0 && !hasChar;
  });
  document.getElementById('mobileCount').textContent = total;
  syncCharacterInputs();
  renderPresets();
  renderCharacterHierarchy();
  renderInfoEditBanner();
  syncOrderButtons();
  syncHistoryButtons();
  syncMultiSelectButtons();
}

function syncOrderButtons(){
  document.querySelectorAll('[data-reorder]').forEach(el => {
    el.classList.toggle('is-active', el.getAttribute('data-reorder') === state.orderMode);
  });
}

function syncHistoryButtons(){
  document.querySelectorAll('[data-undo]').forEach(el => { el.disabled = historyPast.length === 0; });
  document.querySelectorAll('[data-redo]').forEach(el => { el.disabled = historyFuture.length === 0; });
}

function syncMultiSelectButtons(){
  document.querySelectorAll('[data-multi-toggle]').forEach(btn => {
    const target = btn.getAttribute('data-multi-toggle');
    const active = !!multiSelect[target];
    btn.textContent = active ? '選択解除' : '選択削除';
    btn.classList.toggle('is-active', active);
  });
  document.querySelectorAll('[data-multi-delete]').forEach(btn => {
    const target = btn.getAttribute('data-multi-delete');
    const set = multiSelect[target];
    const count = set ? set.size : 0;
    btn.textContent = `選んだ${count}件を削除`;
    btn.disabled = !set || count === 0;
    btn.style.display = set ? '' : 'none';
  });
}

function renderPresets(){
  document.querySelectorAll('[data-presets]').forEach(root => {
    if(state.presets.length === 0){
      root.innerHTML = `<div class="preset-empty">登録済みキャラクターはまだありません</div>`;
      return;
    }
    root.innerHTML = state.presets.map((p, idx) => {
      const display = [p.name, p.affiliation].filter(Boolean).join(' / ') || '（無題）';
      const count = (p.appearance || []).length;
      return `
      <div class="preset-chip">
        <span class="preset-load" data-load-preset="${idx}">${esc(display)}<span class="preset-tagcount">外見タグ${count}件</span></span>
        <button data-delete-preset="${idx}" title="登録を削除">×</button>
      </div>`;
    }).join('');
  });
}

// hierPick: 階層選択UI（所属/グループの絞り込みセレクト）の「まだ確定していない」閲覧状態。
// 実際にPromptへ反映される確定値は state.selectedCharacterId のみ。
// 既にキャラクターが選択されている間は、そのキャラクターの所属/グループを優先して表示する
// （currentHierPick()を参照）。
let hierPick = { orgId: null, groupId: null };

function currentHierPick(){
  if(state.selectedCharacterId){
    const char = state.characters.find(c => c.id === state.selectedCharacterId);
    if(char){
      const group = state.groups.find(g => g.id === char.groupId) || null;
      return { orgId: group ? group.organizationId : null, groupId: char.groupId, charId: char.id };
    }
  }
  return { orgId: hierPick.orgId, groupId: hierPick.groupId, charId: null };
}

/* ---------- Phase3.1（REQ-001）: Prompt挿入基盤 ----------
   「選択」（currentHierPick()が指す候補）と「Promptへの正式挿入」を明確に分離する。
   挿入されたタグは state.positive 内に他のPromptタグと同じ形（tagValue/tagDisplayで
   扱える形）で入るため、既存のPrompt生成・Undo/Redo・削除の仕組みをそのまま利用できる。
   REQ-001-002（GPT/ユーザー決定）: 同一キャラクター等の重複挿入は許可する。
   各挿入は独立したPrompt要素として扱い、個別削除は値ではなく配列indexで行う
   （removeTagAt()参照。同一promptValueの重複が存在しうるため、値一致による削除は使えない）。
   挿入は「選択中の最も深いレベル1件」のみを対象とする
   （例: キャラクターまで選んでいればキャラクターのみ。所属・グループも欲しい場合は
   　　　各レベルで個別に選択→挿入を行う運用とする＝Phase3.1確定仕様）。
------------------------------------------------------------------------- */
function insertSelection(){
  const pick = currentHierPick();
  let entity = null, refType = null;
  if(pick.charId){
    entity = state.characters.find(c => c.id === pick.charId);
    refType = 'character';
  } else if(pick.groupId){
    entity = state.groups.find(g => g.id === pick.groupId);
    refType = 'group';
  } else if(pick.orgId){
    entity = state.organizations.find(o => o.id === pick.orgId);
    refType = 'organization';
  }
  if(!entity) return; // 何も選択されていない、または参照先が見つからない（安全側に倒して何もしない）

  // Phase3.2でキャラクター固有の外見Promptと紐付ける予定があるため、
  // refType/refId を保持したオブジェクト形式にしておく（文字列タグとの混在は既存設計通り）。
  // REQ-001-002: 重複挿入は許可するため、既存タグとの重複チェックは行わない。
  const tag = {
    displayName: entity.displayName,
    promptValue: (entity.promptValue || entity.displayName || '').trim(),
    source: 'hierarchy',
    refType,
    refId: entity.id
  };
  pushHistory();
  state.positive.push(tag);
  // Phase3.2（REQ-001要件8）: キャラクター挿入時、そのキャラクターに紐付く
  // 情報Prompt（infoTags）も同時に追加する。重複挿入（同一キャラクターの複数回挿入）を
  // 許可した仕様（REQ-001-002）と一貫させるため、挿入のたびに毎回infoTagsのコピーを追加する
  // （＝挿入した数だけ情報タグも増える。個々のタグは通常のPromptタグと同じ削除体系で消せる）。
  if(refType === 'character' && Array.isArray(entity.infoTags) && entity.infoTags.length){
    entity.infoTags.forEach(t => state.positive.push(clonePromptTag(t)));
  }
  saveState();
  renderAll();
  showToast(`「${entity.displayName}」をPromptへ挿入しました`);
}

function renderCharacterHierarchy(){
  const pick = currentHierPick();
  const groupsInOrg = pick.orgId ? state.groups.filter(g => g.organizationId === pick.orgId) : [];
  const charsInGroup = pick.groupId ? state.characters.filter(c => c.groupId === pick.groupId) : [];

  document.querySelectorAll('[data-hier-org]').forEach(sel => {
    sel.innerHTML = '<option value="">① 所属を選択...</option>' +
      state.organizations.map(o => `<option value="${esc(o.id)}">${esc(o.displayName)}</option>`).join('');
    sel.value = pick.orgId || '';
  });
  document.querySelectorAll('[data-hier-group]').forEach(sel => {
    sel.disabled = !pick.orgId;
    sel.innerHTML = '<option value="">② グループを選択...</option>' +
      groupsInOrg.map(g => `<option value="${esc(g.id)}">${esc(g.displayName)}</option>`).join('');
    sel.value = pick.groupId || '';
  });
  document.querySelectorAll('[data-hier-char]').forEach(sel => {
    sel.disabled = !pick.groupId;
    sel.innerHTML = '<option value="">③ キャラクターを選択...</option>' +
      charsInGroup.map(c => `<option value="${esc(c.id)}">${esc(c.displayName)}</option>`).join('');
    sel.value = pick.charId || '';
  });
  document.querySelectorAll('[data-hier-clear]').forEach(btn => {
    btn.disabled = !state.selectedCharacterId;
  });
  document.querySelectorAll('[data-hier-insert]').forEach(btn => {
    // Phase3.1: 所属・グループ・キャラクターのいずれか1つでも選択されていれば挿入可能
    btn.disabled = !(pick.charId || pick.groupId || pick.orgId);
  });
  document.querySelectorAll('[data-hier-status]').forEach(elStatus => {
    if(state.selectedCharacterId){
      const resolved = resolveCharacterOutput();
      elStatus.textContent = `選択中: ${resolved.displayLabel || resolved.name}（この間、上のフリー入力欄は使用されません）`;
      elStatus.classList.remove('is-empty');
    } else {
      elStatus.textContent = '未選択（上の名前・所属欄をフリー入力として使用中）';
      elStatus.classList.add('is-empty');
    }
  });

  renderHierManageLists();
}

function renderHierManageLists(){
  document.querySelectorAll('[data-org-list]').forEach(root => {
    root.innerHTML = state.organizations.length === 0
      ? '<div class="hier-list-empty">登録済みの所属はまだありません</div>'
      : state.organizations.map(o => `
        <div class="hier-list-item">
          <span class="hier-item-label">${esc(o.displayName)}${o.promptValue ? `<small>${esc(o.promptValue)}</small>` : ''}</span>
          <button data-del-org="${esc(o.id)}" title="削除（配下のグループ・キャラクターも削除されます）">×</button>
        </div>`).join('');
  });
  document.querySelectorAll('[data-group-list]').forEach(root => {
    root.innerHTML = state.groups.length === 0
      ? '<div class="hier-list-empty">登録済みのグループはまだありません</div>'
      : state.groups.map(g => {
          const org = state.organizations.find(o => o.id === g.organizationId);
          return `
        <div class="hier-list-item">
          <span class="hier-item-label">${esc(g.displayName)}<small>${esc(org ? org.displayName : '(所属不明)')}${g.promptValue ? ' / ' + esc(g.promptValue) : ''}</small></span>
          <button data-del-group="${esc(g.id)}" title="削除（配下のキャラクターも削除されます）">×</button>
        </div>`;
        }).join('');
  });
  document.querySelectorAll('[data-char-list]').forEach(root => {
    root.innerHTML = state.characters.length === 0
      ? '<div class="hier-list-empty">登録済みのキャラクターはまだありません</div>'
      : state.characters.map(c => {
          const group = state.groups.find(g => g.id === c.groupId);
          const infoTags = Array.isArray(c.infoTags) ? c.infoTags : [];
          const editing = infoEditCharId === c.id;
          // Phase3.2（REQ-001）: キャラクターごとの情報Prompt（外見タグ等）編集UI。
          // 「情報Prompt」ボタンで編集モードに入ると、タグ一覧のタップ先がこのキャラクターの
          // infoTagsへ切り替わる（attachDynamicHandlersの.tag-pillハンドラ側で分岐）。
          const infoBlock = editing ? `
        <div class="char-info-editor">
          <div class="char-info-hint">タグ一覧をタップすると、ここに追加されます（下のPromptには追加されません）</div>
          <div class="char-info-chips">${
            infoTags.length === 0
              ? '<span class="char-info-empty">まだ情報タグがありません</span>'
              : infoTags.map(t => `<span class="chip chip-small"><span class="chip-text">${esc(tagDisplay(t))}</span><button data-char-info-remove="${esc(c.id)}" data-tag-value="${esc(tagValue(t))}" title="削除">×</button></span>`).join('')
          }</div>
        </div>` : '';
          return `
        <div class="hier-list-item">
          <span class="hier-item-label">${esc(c.displayName)}<small>${esc(group ? group.displayName : '(グループ不明)')}${c.promptValue ? ' / ' + esc(c.promptValue) : ''}</small></span>
          <button class="hier-info-toggle${editing ? ' is-active' : ''}" data-char-info-toggle="${esc(c.id)}" title="この人専用の情報Prompt（外見タグ等）を編集">情報Prompt(${infoTags.length})</button>
          <button data-del-char="${esc(c.id)}" title="削除">×</button>
        </div>${infoBlock}`;
        }).join('');
  });

  // 登録フォーム側のセレクト（グループ登録→所属選択／キャラクター登録→グループ選択）も
  // 常に最新のマスターデータへ同期する（選択中の値はできる限り保持する）。
  document.querySelectorAll('[data-new-group-org]').forEach(sel => {
    const prev = sel.value;
    sel.innerHTML = '<option value="">所属を選択...</option>' +
      state.organizations.map(o => `<option value="${esc(o.id)}">${esc(o.displayName)}</option>`).join('');
    if(state.organizations.some(o => o.id === prev)) sel.value = prev;
  });
  document.querySelectorAll('[data-new-char-group]').forEach(sel => {
    const prev = sel.value;
    sel.innerHTML = '<option value="">グループを選択...</option>' +
      state.groups.map(g => `<option value="${esc(g.id)}">${esc(g.displayName)}</option>`).join('');
    if(state.groups.some(g => g.id === prev)) sel.value = prev;
  });
}

// renderInfoEditBanner(): Phase3.2（REQ-001）。情報タグ追加モード中であることを
// タグ一覧の近くではっきり示すためのバナー。search-wrapの直前に1箇所だけ存在する
// （サイドバー/モバイルシートのように複製されたDOMではない）。
function renderInfoEditBanner(){
  const banner = document.getElementById('infoEditBanner');
  if(!banner) return;
  if(!infoEditCharId){
    banner.style.display = 'none';
    return;
  }
  const char = state.characters.find(c => c.id === infoEditCharId);
  if(!char){ infoEditCharId = null; banner.style.display = 'none'; return; }
  banner.style.display = '';
  const textEl = document.getElementById('infoEditBannerText');
  if(textEl) textEl.textContent = `「${char.displayName}」の情報タグを編集中（タップしたタグはPromptではなくここへ追加されます）`;
}

function syncCharacterInputs(){
  // Phase3: 階層選択中（selectedCharacterIdがある）は、フリー入力欄は
  // 「未登録キャラ用の手動フォールバック」として無効化し、階層側の値を優先させる。
  const locked = !!state.selectedCharacterId;
  document.querySelectorAll('.char-name-input').forEach(el => {
    if(document.activeElement !== el) el.value = state.character.name || '';
    el.disabled = locked;
  });
  document.querySelectorAll('.char-affiliation-input').forEach(el => {
    if(document.activeElement !== el) el.value = state.character.affiliation || '';
    el.disabled = locked;
  });
}

function renderAll(){
  renderBrowse();
  renderTray();
  attachDynamicHandlers();
}

/* ---------- event wiring ---------- */
function attachDynamicHandlers(){
  document.querySelectorAll('[data-toggle]').forEach(el => {
    el.onclick = () => {
      const key = el.getAttribute('data-toggle');
      if(openSections.has(key)) openSections.delete(key); else openSections.add(key);
      renderBrowse();
      attachDynamicHandlers();
    };
  });
  document.querySelectorAll('.tag-pill').forEach(el => {
    el.onclick = () => {
      const tag = el.getAttribute('data-tag');
      // Phase3.2: 情報タグ追加モード中は、通常のPrompt（positive/negative）ではなく
      // 編集中キャラクターのinfoTagsへタグを送る（陽性/陰性の区別はinfoTagsには適用しない）。
      if(infoEditCharId){
        addCharacterInfoTag(infoEditCharId, tag);
        showToast('情報Promptへ追加しました');
        return;
      }
      const isNeg = el.getAttribute('data-neg') === '1';
      toggleTag(tag, isNeg ? 'negative' : 'positive');
    };
  });
  document.querySelectorAll('[data-addall]').forEach(el => {
    el.onclick = () => {
      const tags = el.getAttribute('data-addall').split('\u0001');
      const target = el.getAttribute('data-target');
      addAll(tags, target);
    };
  });
  document.querySelectorAll('[data-remove-index]').forEach(el => {
    el.onclick = () => {
      removeTagAt(parseInt(el.getAttribute('data-remove-index'), 10), el.getAttribute('data-target'));
    };
  });
  document.querySelectorAll('[data-copy-pos]').forEach(el => {
    el.onclick = () => copyText(buildPromptString(), 'プロンプト');
  });
  document.querySelectorAll('[data-copy-neg]').forEach(el => {
    el.onclick = () => copyText(buildNegativeString(), 'ネガティブプロンプト');
  });
  document.querySelectorAll('[data-copy-both]').forEach(el => {
    el.onclick = () => {
      let out = `Prompt:\n${buildPromptString()}`;
      if(state.negative.length) out += `\n\nNegative prompt:\n${buildNegativeString()}`;
      copyText(out, '全体');
    };
  });
  document.querySelectorAll('[data-clear]').forEach(el => { el.onclick = clearAll; });

  /* ---------- Prompt編集: 複数選択削除 ---------- */
  document.querySelectorAll('[data-chip-select-index]').forEach(el => {
    el.onclick = () => {
      const target = el.getAttribute('data-chip-target');
      if(!multiSelect[target]) return; // 選択モード中でなければ何もしない（誤タップ防止）
      const index = parseInt(el.getAttribute('data-chip-select-index'), 10);
      const set = multiSelect[target];
      if(set.has(index)) set.delete(index); else set.add(index);
      renderTray();
      attachDynamicHandlers();
    };
  });
  document.querySelectorAll('[data-multi-toggle]').forEach(el => {
    el.onclick = () => {
      const target = el.getAttribute('data-multi-toggle');
      multiSelect[target] = multiSelect[target] ? null : new Set();
      renderTray();
      attachDynamicHandlers();
    };
  });
  // GPT-REQ-001-003対応: multiSelectはindexベースの選択・削除に変更済み。
  // 同一promptValueを持つ重複挿入タグ（例: 同じキャラクターを複数回挿入した場合）が存在しても、
  // 選択した特定の1件だけを他のインスタンスに影響を与えずに削除できる。
  document.querySelectorAll('[data-multi-delete]').forEach(el => {
    el.onclick = () => {
      const target = el.getAttribute('data-multi-delete');
      const set = multiSelect[target];
      if(!set || set.size === 0) return;
      pushHistory();
      const removedCount = set.size;
      state[target] = state[target].filter((t, i) => !set.has(i));
      multiSelect[target] = null;
      saveState();
      renderAll();
      showToast(`${removedCount}件のタグを削除しました`);
    };
  });

  /* ---------- Prompt編集: 並び替え（ドラッグ＆ドロップ／長押し、タグ全体が起点） ---------- */
  document.querySelectorAll('[data-chip]').forEach(el => {
    el.onpointerdown = onChipPointerDown;
  });

  /* ---------- Prompt編集: Undo/Redo ---------- */
  document.querySelectorAll('[data-undo]').forEach(el => { el.onclick = undo; });
  document.querySelectorAll('[data-redo]').forEach(el => { el.onclick = redo; });

  document.querySelectorAll('.char-name-input').forEach(el => {
    el.oninput = () => {
      state.character.name = el.value;
      saveState();
      updateOutputsOnly();
    };
  });
  document.querySelectorAll('.char-affiliation-input').forEach(el => {
    el.oninput = () => {
      state.character.affiliation = el.value;
      saveState();
      updateOutputsOnly();
    };
  });

  document.querySelectorAll('[data-save-preset]').forEach(el => {
    el.onclick = () => {
      const name = (state.character.name || '').trim();
      const aff = (state.character.affiliation || '').trim();
      if(!name && !aff){ showToast('名前または所属を入力してください'); return; }
      const dup = state.presets.some(p => p.name === name && p.affiliation === aff);
      if(dup){ showToast('すでに同じ名前・所属で登録されています'); return; }
      const appearance = state.positive.slice();
      state.presets.push({ name, affiliation: aff, appearance });
      saveState();
      renderPresets();
      attachDynamicHandlers();
      showToast(`キャラクターを登録しました（外見タグ ${appearance.length} 件）`);
    };
  });
  document.querySelectorAll('[data-load-preset]').forEach(el => {
    el.onclick = () => {
      const idx = parseInt(el.getAttribute('data-load-preset'), 10);
      const p = state.presets[idx];
      if(!p) return;
      pushHistory();
      state.character = { name: p.name || '', affiliation: p.affiliation || '' };
      let addedCount = 0;
      (p.appearance || []).forEach(t => {
        if(!state.positive.some(existing => tagValue(existing) === tagValue(t))){ state.positive.push(t); addedCount++; }
      });
      saveState();
      renderAll();
      showToast(`「${p.name || p.affiliation}」を呼び出しました（外見タグ ${addedCount} 件を追加）`);
    };
  });
  document.querySelectorAll('[data-delete-preset]').forEach(el => {
    el.onclick = (e) => {
      e.stopPropagation();
      const idx = parseInt(el.getAttribute('data-delete-preset'), 10);
      state.presets.splice(idx, 1);
      saveState();
      renderPresets();
      attachDynamicHandlers();
    };
  });

  document.querySelectorAll('[data-reorder]').forEach(el => {
    el.onclick = () => {
      const mode = el.getAttribute('data-reorder');
      if(state.positive.length > 1){
        pushHistory();
        reorderPositive(mode === 'classic' ? RANK_CLASSIC : RANK_PLATFORM);
      }
      state.orderMode = mode;
      saveState();
      renderAll();
      const label = mode === 'classic' ? '目録標準' : (mode === 'pixai' ? 'PixAI' : 'NovelAI');
      showToast(`${label}向けの順番に並べ替えました`);
    };
  });

  /* ---------- Phase3: 所属 → グループ → キャラクター選択・管理 ---------- */
  document.querySelectorAll('[data-hier-org]').forEach(sel => {
    sel.onchange = () => {
      // 選択中に所属を変更した場合は「選び直し」とみなし、いったん選択を解除する
      if(state.selectedCharacterId) clearSelectedCharacter();
      hierPick.orgId = sel.value || null;
      hierPick.groupId = null;
      renderCharacterHierarchy();
    };
  });
  document.querySelectorAll('[data-hier-group]').forEach(sel => {
    sel.onchange = () => {
      if(state.selectedCharacterId) clearSelectedCharacter();
      hierPick.groupId = sel.value || null;
      renderCharacterHierarchy();
    };
  });
  document.querySelectorAll('[data-hier-char]').forEach(sel => {
    sel.onchange = () => {
      if(!sel.value) return;
      selectCharacterEntry(sel.value); // pushHistory + renderAll（この中でrenderCharacterHierarchyも呼ばれる）
    };
  });
  document.querySelectorAll('[data-hier-clear]').forEach(btn => {
    btn.onclick = () => {
      clearSelectedCharacter();
      hierPick = { orgId: null, groupId: null };
      renderCharacterHierarchy();
    };
  });
  document.querySelectorAll('[data-hier-insert]').forEach(btn => {
    // Phase3.1: 挿入は選択状態を変更しない（選択解除ボタンとは別の操作系統として分離する）
    btn.onclick = () => insertSelection();
  });
  document.querySelectorAll('[data-hier-manage-toggle]').forEach(btn => {
    btn.onclick = () => {
      const root = btn.closest('[data-tray-root]');
      const panel = root ? root.querySelector('[data-hier-manage]') : null;
      if(panel) panel.style.display = (panel.style.display === 'none' || !panel.style.display) ? 'flex' : 'none';
    };
  });
  document.querySelectorAll('[data-add-org]').forEach(btn => {
    btn.onclick = () => {
      const scope = btn.closest('[data-hier-manage]');
      const nameInput = scope.querySelector('[data-new-org-name]');
      const valueInput = scope.querySelector('[data-new-org-value]');
      const org = addOrganization(nameInput.value, valueInput.value);
      if(!org){ showToast('所属の表示名を入力してください'); return; }
      nameInput.value = ''; valueInput.value = '';
      renderCharacterHierarchy();
      attachDynamicHandlers();
      showToast(`所属「${org.displayName}」を登録しました`);
    };
  });
  document.querySelectorAll('[data-add-group]').forEach(btn => {
    btn.onclick = () => {
      const scope = btn.closest('[data-hier-manage]');
      const orgSel = scope.querySelector('[data-new-group-org]');
      const nameInput = scope.querySelector('[data-new-group-name]');
      const valueInput = scope.querySelector('[data-new-group-value]');
      if(!orgSel.value){ showToast('所属を選択してください'); return; }
      const group = addGroup(orgSel.value, nameInput.value, valueInput.value);
      if(!group){ showToast('グループの表示名を入力してください'); return; }
      nameInput.value = ''; valueInput.value = '';
      renderCharacterHierarchy();
      attachDynamicHandlers();
      showToast(`グループ「${group.displayName}」を登録しました`);
    };
  });
  document.querySelectorAll('[data-add-char]').forEach(btn => {
    btn.onclick = () => {
      const scope = btn.closest('[data-hier-manage]');
      const groupSel = scope.querySelector('[data-new-char-group]');
      const nameInput = scope.querySelector('[data-new-char-name]');
      const valueInput = scope.querySelector('[data-new-char-value]');
      if(!groupSel.value){ showToast('グループを選択してください'); return; }
      const character = addCharacterEntry(groupSel.value, nameInput.value, valueInput.value);
      if(!character){ showToast('キャラクターの表示名を入力してください'); return; }
      nameInput.value = ''; valueInput.value = '';
      renderCharacterHierarchy();
      attachDynamicHandlers();
      showToast(`キャラクター「${character.displayName}」を登録しました`);
    };
  });
  document.querySelectorAll('[data-del-org]').forEach(btn => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-del-org');
      if(!confirm('この所属と、配下のグループ・キャラクターをすべて削除しますか？')) return;
      deleteOrganization(id);
      if(hierPick.orgId === id) hierPick = { orgId: null, groupId: null };
      if(infoEditCharId && !state.characters.some(c => c.id === infoEditCharId)) infoEditCharId = null;
      renderAll();
      showToast('所属を削除しました');
    };
  });
  document.querySelectorAll('[data-del-group]').forEach(btn => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-del-group');
      if(!confirm('このグループと、配下のキャラクターをすべて削除しますか？')) return;
      deleteGroup(id);
      if(hierPick.groupId === id) hierPick.groupId = null;
      if(infoEditCharId && !state.characters.some(c => c.id === infoEditCharId)) infoEditCharId = null;
      renderAll();
      showToast('グループを削除しました');
    };
  });
  document.querySelectorAll('[data-del-char]').forEach(btn => {
    btn.onclick = () => {
      const id = btn.getAttribute('data-del-char');
      if(!confirm('このキャラクターを削除しますか？')) return;
      deleteCharacterEntry(id);
      if(infoEditCharId === id) infoEditCharId = null; // 編集中キャラクターが消えたら編集モードも終了する
      renderAll();
      showToast('キャラクターを削除しました');
    };
  });
  // Phase3.2（REQ-001）: キャラクターごとの情報Prompt編集
  document.querySelectorAll('[data-char-info-toggle]').forEach(btn => {
    btn.onclick = () => toggleInfoEditMode(btn.getAttribute('data-char-info-toggle'));
  });
  document.querySelectorAll('[data-char-info-remove]').forEach(btn => {
    btn.onclick = () => {
      const charId = btn.getAttribute('data-char-info-remove');
      const value = btn.getAttribute('data-tag-value');
      removeCharacterInfoTag(charId, value);
    };
  });
  const infoEditExitBtn = document.getElementById('infoEditBannerExit');
  if(infoEditExitBtn) infoEditExitBtn.onclick = exitInfoEditMode;
}

// lightweight refresh used while typing in the character fields:
// updates only the output textareas/other input's mirrored value,
// without re-rendering the browse list or stealing input focus.
function updateOutputsOnly(){
  document.querySelectorAll('[data-tray-root]').forEach(root => {
    const hasChar = hasFreeInputCharacter(); // Phase3.1: 階層選択のみでは true にならない
    root.querySelector('[data-pos-out]').value = buildPromptString();
    root.querySelector('[data-neg-out]').value = buildNegativeString();
    root.querySelector('[data-copy-pos]').disabled = state.positive.length === 0 && !hasChar;
    root.querySelector('[data-copy-both]').disabled = (state.positive.length + state.negative.length === 0) && !hasChar;
    root.querySelector('[data-clear]').disabled = (state.positive.length + state.negative.length === 0) && !hasChar;
  });
  document.querySelectorAll('.char-name-input').forEach(el => {
    if(document.activeElement !== el) el.value = state.character.name || '';
  });
  document.querySelectorAll('.char-affiliation-input').forEach(el => {
    if(document.activeElement !== el) el.value = state.character.affiliation || '';
  });
}

/* ---------- search input ---------- */
document.getElementById('search').addEventListener('input', () => { renderBrowse(); attachDynamicHandlers(); });

/* ---------- mobile sheet ---------- */
const sheet = document.getElementById('sheet');
const overlay = document.getElementById('sheetOverlay');
document.getElementById('openSheet').onclick = () => { sheet.classList.add('open'); overlay.classList.add('open'); };
overlay.onclick = () => { sheet.classList.remove('open'); overlay.classList.remove('open'); };

/* ---------- init ---------- */
(async function init(){
  await loadState();
  renderAll();
})();
