const menuPath = 'https://raw.githubusercontent.com/liyinSakura/Pkm-sleep-kitchen/master/src/assets/menu/'
const mixedcurry = `${menuPath}mixedcurry.png`
const fancyapplecurry = `${menuPath}fancyapplecurry.png`
const grilledtailcurry = `${menuPath}grilledtailcurry.png`
const solarpowertomatocurry = `${menuPath}solarpowertomatocurry.png`
const dreameaterbuttercurry = `${menuPath}dreameaterbuttercurry.png`
const spicyleekcurry = `${menuPath}Spicy Leek Curry Icon.png`
const eggbombcurry = `${menuPath}eggbombcurry.png`
const heartycheeseburgercurry = `${menuPath}heartycheeseburgercurry.png`
const softpotatochowder = `${menuPath}softpotatochowder.png`
const simplechowder = `${menuPath}simplechowder.png`
const beanburgercurry = `${menuPath}beanburgercurry.png`
const mildhoneycurry = `${menuPath}mildhoneycurry.png`
const ninjacurry = `${menuPath}ninjacurry.png`
const droughtkatsucurry = `${menuPath}droughtkatsucurry.png`
const meltyomelettecurry = `${menuPath}Melty Omelette Curry Icon.png`
const bulkupbeancurry = `${menuPath}bulkupbeancurry.png`
const sporemushroomcurry = `${menuPath}sporemushroomcurry.png`


const mixedjuice = `${menuPath}Mixed Juice Icon.png`
const fluffysweetpotatoes = `${menuPath}Fluffy Sweet Potatoes Icon.png`
const steadfastgingercookies = `${menuPath}steadfastgingercookies.png`
const fancyapplejuice = `${menuPath}fancyapplejuice.png`
const craftsodapop = `${menuPath}craftsodapop.png`
const embergingertea = `${menuPath}Ember Ginger Tea Icon.png`
const sfruityflan = `${menuPath}Jigglypuff_s Fruity Flan Icon.png`
const lovelykisssmoothie = `${menuPath}Lovely Kiss Smoothie Icon.png`
const luckychantapplepie = `${menuPath}Lucky Chant Apple Pie Icon.png`
const srestorativetea = `${menuPath}Neroli_s Restorative Tea Icon.png`
const sweetscentchocolatecake = `${menuPath}Sweet Scent Chocolate Cake Icon.png`
const warmmoomoomilk = `${menuPath}Warm Moomoo Milk Icon.png`
const cloudninesoycake = `${menuPath}cloudninesoycake.png`
const hustleproteinsmoothie = `${menuPath}Hustle Protein Smoothie Icon.png`
const stalwartvegetablejuice = `${menuPath}Stalwart Vegetable Juice Icon.png`
const bigmalasada = `${menuPath}Big Malasada Icon.png`
const hugepowersoydonuts = `${menuPath}Huge Power Soy Donuts Icon.png`

const ingredientsPath = 'https://raw.githubusercontent.com/liyinSakura/Pkm-sleep-kitchen/master/src/assets/ingredients/'
const largeleek = `${ingredientsPath}largeleek.png`
const tastymushroom = `${ingredientsPath}Tasty Mushroom Icon.png`
const fancyegg = `${ingredientsPath}fancyegg.png`
const softpotato = `${ingredientsPath}softpotato.png`
const fancyapple = `${ingredientsPath}fancyapple.png`
const fieryherb = `${ingredientsPath}fieryherb.png`
const beansausage = `${ingredientsPath}beansausage.png`
const moomoomilk = `${ingredientsPath}moomoomilk.png`
const honey = `${ingredientsPath}honey.png`
const pureoil = `${ingredientsPath}Pure Oil Icon.png`
const warmingginger = `${ingredientsPath}warmingginger.png`
const snoozytomato = `${ingredientsPath}snoozytomato.png`
const soothingcacao = `${ingredientsPath}Soothing Cacao Icon.png`
const slowpoketail = `${ingredientsPath}Slowpoke Tail Icon.png`
const greengrasssoybeans = `${ingredientsPath}Greengrass Soybeans Icon.png`


let menuList = [
    {
        title: 'List of Curry',
        titleZh: '咖喱',
        list: [
            {
                "Picture": "",
                url: mixedcurry,
                nameZh: '混合咖喱',
                nameArr: ['混合咖喱',"Mixed Curry"],
                "Name": "Mixed Curry",
                descriptionZh: "（请注意本项料理没有图鉴，不加配方等级，收益较低，不推荐制作）",
                "Description": "Any combination that doesn't match a recipe"
            },
            {
                "Picture": "",
                url: fancyapplecurry,
                ingredientsList: [
                    {
                        name: 'Fancy Apple',
                        num: 7
                    }
                ],
                nameZh: '特選蘋果咖哩',
                nameArr: ['特選蘋果咖哩',"Fancy Apple Curry"],
                descriptionZh: "能感受到苹果天然甜味的朴实咖喱",
                "Name": "Fancy Apple Curry",
                "Description": "A simple curry that lets the natural sweetness of its apples shine.",
                "Ingredients": "Fancy Apple * 7"
            },
            {
                "Picture": "",
                url: grilledtailcurry,
                ingredientsList: [
                    {
                        name: 'Slowpoke Tail',
                        num: 8
                    },
                    {
                        name: 'Fiery Herb',
                        num: 25
                    },
                ],
                "Name": "Grilled Tail Curry",
                nameZh: '咖喱烤呆呆尾巴',
                nameArr: ['咖喱烤呆呆尾巴',"Grilled Tail Curry"],
                descriptionZh: "美味的尾巴将咖喱酱的味道提升到一个新的水平。",
                "Description": "The tasty tail elevates the flavor of the curry roux to the next level.",
                "Ingredients": "Slowpoke Tail * 8Fiery Herb * 25"
            },
            {
                "Picture": "",
                url: solarpowertomatocurry,
                ingredientsList: [
                    {
                        name: 'Snoozy Tomato',
                        num: 10
                    },
                    {
                        name: 'Fiery Herb',
                        num: 5
                    },
                ],
                nameZh: "太阳之力番茄咖喱",
                descriptionZh: "使用在阳光下长得通红的番茄制作而成的咖喱",
                "Name": "Solar Power Tomato Curry",
                "Description": "A curry made using tomatoes that have turned bright red in the sun.",
                "Ingredients": "Snoozy Tomato * 10Fiery Herb * 5"
            },
            {
                "Picture": "",
                url: dreameaterbuttercurry,
                ingredientsList: [
                    {
                        name: 'Soft Potato',
                        num: 18
                    },
                    {
                        name: 'Snoozy Tomato',
                        num: 15
                    },
                    {
                        name: 'Soothing Cacao',
                        num: 12
                    },
                    {
                        name: 'Moomoo Milk',
                        num: 10
                    },
                ],
                nameZh: "食梦黄油咖喱",
                descriptionZh: "这种咖喱的制作成分都与深度睡眠有关",
                "Name": "Dream Eater Butter Curry",
                "Description": "The ingredients in this curry all share a connection to deep sleep.",
                "Ingredients": "Soft Potato * 18Snoozy Tomato * 15Soothing Cacao * 12Moomoo Milk * 10"
            },
            {
                "Picture": "",
                url: spicyleekcurry,
                ingredientsList: [
                    {
                        name: 'Large Leek',
                        num: 14
                    },
                    {
                        name: 'Warming Ginger',
                        num: 10
                    },
                    {
                        name: 'Fiery Herb',
                        num: 8
                    },
                ],
                "Name": "Spicy Leek Curry",
                nameZh: "辛辣大葱咖喱",
                descriptionZh: "把大葱烤得像水果一样香甜，完美平衡了肉酱的辛辣",
                "Description": "The roasted leeks are fragrant and sweet as fruit, perfectly balancing the spicy roux.",
                "Ingredients": "Large Leek * 14Warming Ginger * 10Fiery Herb * 8"
            },
            {
                "Picture": "",
                url: sporemushroomcurry,
                ingredientsList: [
                    {
                        name: 'Tasty Mushroom',
                        num: 14
                    },
                    {
                        name: 'Soft Potato',
                        num: 9
                    },
                ],
                "Name": "Spore Mushroom Curry",
                nameZh: "蘑菇孢子咖喱",
                descriptionZh: "吃下这盘咖喱可以让你入睡，就像中了蘑菇孢子一样",
                "Description": "A curry that puts you to sleep just as surely as the move Spore.",
                "Ingredients": "Tasty Mushroom * 14Soft Potato * 9"
            },
            {
                "Picture": "",
                url: eggbombcurry,
                ingredientsList: [
                    {
                        name: 'Honey',
                        num: 12
                    },
                    {
                        name: 'Fancy Apple',
                        num: 11
                    },
                    {
                        name: 'Fancy Egg',
                        num: 8
                    },
                    {
                        name: 'Soft Potato',
                        num: 4
                    },
                ],
                "Name": "Egg Bomb Curry",
                nameZh: "煎蛋咖喱",
                descriptionZh: "充满爱意的咖喱，其食材适合儿童",
                "Description": "A curry made with oodles of love. Its ingredients are geared toward kids.",
                "Ingredients": "Honey * 12Fancy Apple * 11Fancy Egg * 8Soft Potato * 4"
            },
            {
                "Picture": "",
                url: heartycheeseburgercurry,
                ingredientsList: [
                    {
                        name: 'Moomoo Milk',
                        num: 8
                    },
                    {
                        name: 'Bean Sausage',
                        num: 8
                    }
                ],
                "Name": "Hearty Cheeseburger Curry",
                nameZh: "吃饱饱起司肉排咖喱",
                descriptionZh: "这种咖喱的量大到足以让卡比兽感到震惊",
                "Description": "This voluminous curry is large enough to astound even a Snorlax.",
                "Ingredients": "Moomoo Milk * 8Bean Sausage * 8"
            },
            {
                "Picture": "",
                url: softpotatochowder,
                ingredientsList: [
                    {
                        name: 'Moomoo Milk',
                        num: 10
                    },
                    {
                        name: 'Soft Potato',
                        num: 8
                    },
                    {
                        name: 'Tasty Mushroom',
                        num: 4
                    }
                ],
                "Name": "Soft Potato Chowder",
                nameZh: "松软土豆浓汤",
                descriptionZh: "由土豆制成的浓汤，煮至几乎融化",
                "Description": "A thick chowder made = potatoes boiled until practically melting.",
                "Ingredients": "Moomoo Milk * 10Soft Potato * 8Tasty Mushroom * 4"
            },
            {
                "Picture": "",
                url: simplechowder,
                ingredientsList: [
                    {
                        name: 'Moomoo Milk',
                        num: 7
                    }
                ],
                "Name": "Simple Chowder",
                nameZh: "单纯白酱浓汤",
                descriptionZh: "能感受到甘醇奶味的朴实浓汤",
                "Description": "You can really taste the richness of the milk in this simple chowder.",
                "Ingredients": "Moomoo Milk * 7"
            },
            {
                "Picture": "",
                url: beanburgercurry,
                ingredientsList: [
                    {
                        name: 'Bean Sausage',
                        num: 7
                    }
                ],
                "Name": "Beanburger Curry",
                nameZh: "豆制肉排咖喱",
                descriptionZh: "嫩豆饼是这道咖喱中的明星",
                "Description": "The tender bean patties are the stars of the show in this curry.",
                "Ingredients": "Bean Sausage * 7"
            },
            {
                "Picture": "",
                url: mildhoneycurry,
                ingredientsList: [
                    {
                        name: 'Honey',
                        num: 7
                    }
                ],
                "Name": "Mild Honey Curry",
                nameZh: "宝宝甜蜜咖喱",
                descriptionZh: "放了很多蜜的甜咖喱，小孩也能吃",
                "Description": "A mild curry containing plenty of honey. Kids gobble it down!",
                "Ingredients": "Honey * 7"
            },
            {
                "Picture": "",
                url: ninjacurry,
                ingredientsList: [
                    {
                        name: 'Greengrass Soybeans',
                        num: 15
                    },{
                        name: 'Bean Sausage',
                        num: 9
                    },{
                        name: 'Large Leek',
                        num: 9
                    },{
                        name: 'Tasty Mushroom',
                        num: 5
                    },
                ],
                nameZh: "忍者咖喱",
                descriptionZh: "据说这道豆腐咖喱是忍者最喜欢的菜肴",
                "Name": "Ninja Curry",
                "Description": "This tofu curry is said to have been a favorite dish of ninjas.",
                "Ingredients": "Greengrass Soybeans * 15Bean Sausage * 9Large Leek * 9Tasty Mushroom * 5"
            },
            {
                "Picture": "",
                url: droughtkatsucurry,
                ingredientsList: [
                    {
                        name: 'Bean Sausage',
                        num: 10
                    },{
                        name: 'Pure Oil',
                        num: 5
                    }
                ],
                "Name": "Drought Katsu Curry",
                nameZh: "日照炸肉排咖喱",
                descriptionZh: "刚炸好的炸猪排在咖喱中闪闪发光",
                "Description": "The freshly-fried cutlet has a nice sparkle to it.",
                "Ingredients": "Bean Sausage * 10Pure Oil * 5"
            },
            {
                "Picture": "",
                url: meltyomelettecurry,
                ingredientsList: [
                    {
                        name: 'Fancy Egg',
                        num: 10
                    },{
                        name: 'Snoozy Tomato',
                        num: 6
                    }
                ],
                "Name": "Melty Omelette Curry",
                nameZh: "入口即化蛋卷咖喱",
                descriptionZh: "这道咖喱上面放着精心烹制的煎蛋卷，入口即化",
                "Description": "This curry is topped with a masterfully-cooked omelette that simply melts in the mouth.",
                "Ingredients": "Fancy Egg * 10Snoozy Tomato * 6"
            },
            {
                "Picture": "",
                url: bulkupbeancurry,
                ingredientsList: [
                    {
                        name: 'Fancy Egg',
                        num: 4
                    },{
                        name: 'Fiery Herb',
                        num: 4
                    },{
                        name: 'Bean Sausage',
                        num: 6
                    },{
                        name: 'Greengrass Soybeans',
                        num: 12
                    }
                ],
                "Name": "Bulk Up Bean Curry",
                nameZh: "散装豆类咖喱",
                descriptionZh: "这道丰盛的咖喱富含增肌所需的营养",
                "Description": "A hearty curry packed with nutrients needed for bulking up.",
                "Ingredients": "Greengrass Soybeans * 12Bean Sausage * 6Fiery Herb * 4Fancy Egg * 4"
            }
        ]
    },
    {
        title: 'List of Salads',
        titleZh: '沙拉',
        list: [
            {
                "Picture": "",
                url: `${menuPath}mixedsalad.png`,
                "Name": "Mixed Salad",
                "nameZh": "混合沙拉",
                "descriptionZh": "（请注意本项料理没有图鉴，不加配方等级，收益较低，不推荐制作）",
                "Description": "Any combination that doesn't match a recipe"
            },
            {
                "Picture": "",
                url: `${menuPath}slowpoketailpeppersalad.png`,
                ingredientsList: [
                    {
                        name: 'Slowpoke Tail',
                        num: 10
                    },
                    {
                        name: 'Fiery Herb',
                        num: 10
                    },
                    {
                        name: 'Pure Oil',
                        num: 15
                    },
                ],
                "Name": "Slowpoke Tail Pepper Salad",
                "nameZh": "呆呆尾椒沙拉",
                "descriptionZh": "辣到嘴巴的辣椒，更能凸显出尾巴的香甜",
                "Description": "The mouth-tinglingly spicy pepper highlights the sweetness of the tail.",
                "Ingredients": "Slowpoke Tail * 10Fiery Herb * 10Pure Oil * 15"
            },
            {
                "Picture": "",
                url: `${menuPath}sporemushroomsalad.png`,
                ingredientsList: [
                    {
                        name: 'Tasty Mushroom',
                        num: 17
                    },
                    {
                        name: 'Snoozy Tomato',
                        num: 8
                    },
                    {
                        name: 'Pure Oil',
                        num: 8
                    },
                ],
                "Name": "Spore Mushroom Salad",
                "nameZh": "蘑菇孢子沙拉",
                "descriptionZh": "这道富含矿物质的沙拉，可以改善睡眠质量",
                "Description": "A salad rich in minerals that improve the quality of sleep.",
                "Ingredients": "Tasty Mushroom * 17Snoozy Tomato * 8Pure Oil * 8"
            },
            {
                "Picture": "",
                url: `${menuPath}snowcloakcaesarsalad.png`,
                ingredientsList: [
                    {
                        name: 'Moomoo Milk',
                        num: 10
                    },
                    {
                        name: 'Bean Sausage',
                        num:6
                    },
                ],
                "Name": "Snow Cloak Caesar Salad",
                "nameZh": "凯撒雪隐沙拉",
                "descriptionZh": "这道培根沙拉上面大量洒满了雪白色的奶酪",
                "Description": "A bacon salad topped with a generous snowy sprinkling of cheese.",
                "Ingredients": "Moomoo Milk * 10Bean Sausage * 6"
            },
            {
                "Picture": "",
                url: `${menuPath}gluttonypotatosalad.png`,
                ingredientsList: [
                    {
                        name: 'Soft Potato',
                        num: 14
                    },
                    {
                        name: 'Fancy Egg',
                        num: 9
                    },
                    {
                        name: 'Bean Sausage',
                        num: 7
                    },
                    {
                        name: 'Fancy Apple',
                        num: 6
                    },
                ],
                "Name": "Gluttony Potato Salad",
                "nameZh": "贪吃鬼土豆沙拉",
                "descriptionZh": "这道土豆沙拉只含有一丝来自特选苹果的味道",
                "Description": "This potato salad contains just a hint of flavor = the Fancy Apples.",
                "Ingredients": "Soft Potato * 14Fancy Egg * 9Bean Sausage * 7Fancy Apple * 6"
            },
            {
                "Picture": "",
                url: `${menuPath}waterveiltofusalad.png`,
                ingredientsList: [
                    {
                        name: 'Greengrass Soybeans',
                        num: 10
                    },
                    {
                        name: 'Snoozy Tomato',
                        num: 6
                    },
                ],
                "Name": "Water Veil Tofu Salad",
                "nameZh": "水幕豆腐沙拉",
                "descriptionZh": "这道沙拉上面放着摇摇晃晃的豆腐块",
                "Description": "A salad topped with wobbly cubes of tofu.",
                "Ingredients": "Greengrass Soybeans * 10Snoozy Tomato * 6"
            },
            {
                "Picture": "",
                url: `${menuPath}Superpower Extreme Salad Icon.png`,
                ingredientsList: [
                    {
                        name: 'Bean Sausage',
                        num: 9
                    },
                    {
                        name: 'Warming Ginger',
                        num: 6
                    },
                    {
                        name: 'Fancy Egg',
                        num: 5
                    },
                    {
                        name: 'Soft Potato',
                        num: 3
                    },
                ],
                "Name": "Superpower Extreme Salad",
                "nameZh": "蛮力至尊沙拉",
                "descriptionZh": "一份份量十足的沙拉，可立即提供您所有的日常营养",
                "Description": "A hefty salad that provides all your daily nutrients at once.",
                "Ingredients": "Bean Sausage * 9Warming Ginger * 6Fancy Egg * 5Soft Potato * 3"
            },
            {
                "Picture": "",
                url: `${menuPath}Bean Ham Salad Icon.png`,
                ingredientsList: [
                    {
                        name: 'Bean Sausage',
                        num: 8
                    },
                ],
                "Name": "Bean Ham Salad",
                "nameZh": "豆制火腿沙拉",
                "descriptionZh": "这道简单的沙拉以豆香肠制成的火腿为特色",
                "Description": "This simple salad features ham made = Bean Sausages.",
                "Ingredients": "Bean Sausage * 8"
            },
            {
                "Picture": "",
                url: `${menuPath}Snoozy Tomato Salad Icon.png`,
                ingredientsList: [
                    {
                        name: 'Snoozy Tomato',
                        num: 8
                    },
                ],
                "Name": "Snoozy Tomato Salad",
                "nameZh": "贪睡番茄沙拉",
                "descriptionZh": "这道简易沙拉中的贪睡番茄对睡眠有很大帮助",
                "Description": "The Snoozy Tomatoes in this simple salad are a great aid for sleep.",
                "Ingredients": "Snoozy Tomato * 8"
            },
            {
                "Picture": "",
                url: `${menuPath}moomoocapresesalad.png`,
                ingredientsList: [
                    {
                        name: 'Snoozy Tomato',
                        num: 6
                    },
                    {
                        name: 'Moomoo Milk',
                        num: 12
                    },
                    {
                        name: 'Pure Oil',
                        num: 5
                    }
                ],
                "Name": "Moomoo Caprese Salad",
                "nameZh": "哞哞番茄沙拉",
                "descriptionZh": "一道基本沙拉，仅包含奶酪、番茄和少许油",
                "Description": "A basic salad containing only cheese, tomatoes, and a splash of oil.",
                "Ingredients": "Moomoo Milk * 12Snoozy Tomato * 6Pure Oil * 5"
            },
            {
                "Picture": "",
                url: `${menuPath}contrarychocolatemeatsalad.png`,
                ingredientsList: [
                    {
                        name: 'Soothing Cacao',
                        num: 14
                    },
                    {
                        name: 'Bean Sausage',
                        num: 9
                    }
                ],
                "Name": "Contrary Chocolate Meat Salad",
                "nameZh": "唱反调巧克力肉沙拉",
                "descriptionZh": "咸味酱汁和甜味巧克力酱让您享受多种口味",
                "Description": "The savory sauce and sweet chocolate sauce let you enjoy a mix of flavors.",
                "Ingredients": "Soothing Cacao * 14Bean Sausage * 9"
            },
            {
                "Picture": "",
                url: `${menuPath}overheatgingersalad.png`,
                ingredientsList: [
                    {
                        name: 'Fiery Herb',
                        num: 17
                    },
                    {
                        name: 'Warming Ginger',
                        num: 10
                    },
                    {
                        name: 'Snoozy Tomato',
                        num: 8
                    },

                ],
                "Name": "Overheat Ginger Salad",
                "nameZh": "过热暖暖姜沙拉",
                "descriptionZh": "这道沙拉的特殊姜汁酱让你彻头彻尾感到温暖",
                "Description": "This salad's special ginger dressing warms you through and through.",
                "Ingredients": "Fiery Herb * 17Warming Ginger * 10Snoozy Tomato * 8"
            },
            {
                "Picture": "",
                url: `${menuPath}fancyapplesalad.png`,
                ingredientsList: [
                    {
                        name: 'Fancy Apple',
                        num: 8
                    },
                ],
                "Name": "Fancy Apple Salad",
                "nameZh": "特选苹果沙拉",
                "descriptionZh": "简单的沙拉，搭配上苹果泥酱",
                "Description": "A simple salad accentuated by a mashed apple dressing.",
                "Ingredients": "Fancy Apple * 8"
            },
            {
                "Picture": "",
                url: `${menuPath}immunityleeksalad.png`,
                ingredientsList: [
                    {
                        name: 'Large Leek',
                        num: 10
                    },
                    {
                        name: 'Warming Ginger',
                        num: 5
                    },
                ],
                "Name": "Immunity Leek Salad",
                "nameZh": "免疫大葱沙拉",
                "descriptionZh": "这道沙拉中的大葱对免疫系统有奇效",
                "Description": "The crisp leeks in this salad do wonders for the immune system.",
                "Ingredients": "Large Leek * 10Warming Ginger * 5"
            },
            {
                "Picture": "",
                url: `${menuPath}Dazzling Apple Cheese Salad Icon.png`,
                ingredientsList: [
                    {
                        name: 'Fancy Apple',
                        num: 15
                    },
                    {
                        name: 'Moomoo Milk',
                        num: 5
                    },
                    {
                        name: 'Pure Oil',
                        num: 3
                    },
                ],
                "Name": "Dazzling Apple Cheese Salad",
                "nameZh": "鲜艳之躯苹果奶酪沙拉",
                "descriptionZh": "简单的调味料将重点放在食材的完美搭配上",
                "Description": "The simple seasoning keeps the focus on the sublime pairing of ingredients.",
                "Ingredients": "Fancy Apple * 15Moomoo Milk * 5Pure Oil * 3"
            },
            {
                "Picture": "",
                url: `${menuPath}Ninja Salad Icon.png`,
                ingredientsList: [
                    {
                        name: 'Large Leek',
                        num: 15
                    },
                    {
                        name: 'Greengrass Soybeans',
                        num: 15
                    },
                    {
                        name: 'Tasty Mushroom',
                        num: 12
                    },
                    {
                        name: 'Warming Ginger',
                        num: 11
                    },
                ],
                "Name": "Ninja Salad",
                "nameZh": "忍者沙拉",
                "descriptionZh": "忍者无法抗拒这种豆腐沙拉的味道！！！",
                "Description": "Ninjas cannot resist the flavor of this tofu salad. It's eaten in a flash!",
                "Ingredients": "Large Leek * 15Greengrass Soybeans * 15Tasty Mushroom * 12Warming Ginger * 11"
            },
            {
                "Picture": "",
                url: `${menuPath}Heat Wave Tofu Salad Icon.png`,
                ingredientsList: [
                    {
                        name: 'Greengrass Soybeans',
                        num: 10
                    },
                    {
                        name: 'Fiery Herb',
                        num: 6
                    },
                ],
                "Name": "Heat Wave Tofu Salad",
                "nameZh": "热风豆腐沙拉",
                "descriptionZh": "豆腐沙拉，上面覆盖着鲜红的辣酱",
                "Description": "A tofu salad covered in bright red spicy sauce.",
                "Ingredients": "Greengrass Soybeans * 10Fiery Herb * 6"
            }
        ]
    },
    {
        title: 'List of Desserts',
        titleZh: '甜点饮料',
        list: [
            {
                "Picture": "",
                url: mixedjuice,
                "Name": "Mixed Juice",
                "nameZh": "混合果汁",
                "descriptionZh": "（请注意本项料理没有图鉴，不加配方等级，收益较低，不推荐制作）",
                "Description": "Any combination that doesn't match a recipe"
            },
            {
                "Picture": "",
                url: fluffysweetpotatoes,
                ingredientsList: [
                    {
                        name: 'Soft Potato',
                        num: 9
                    },
                    {
                        name: 'Moomoo Milk',
                        num: 5
                    },
                ],
                "Name": "Fluffy Sweet Potatoes",
                "nameZh": "毛茸茸甜土豆",
                "descriptionZh": "这些完全成熟的土豆不需要依赖蜂蜜来提供甜味",
                "Description": "These perfectly ripe potatoes don't rely on honey to deliver a sweet kick.",
                "Ingredients": "Soft Potato * 9Moomoo Milk * 5"
            },
            {
                "Picture": "",
                url: steadfastgingercookies,
                ingredientsList: [
                    {
                        name: 'Honey',
                        num: 14
                    },
                    {
                        name: 'Warming Ginger',
                        num: 12
                    },
                    {
                        name: 'Soothing Cacao',
                        num: 5
                    },
                    {
                        name: 'Fancy Egg',
                        num: 4
                    },
                ],
                "Name": "Steadfast Ginger Cookies",
                "nameZh": "不屈姜饼",
                "descriptionZh": "这些饼干能给你带来克服困难而不崩溃的力量",
                "Description": "These cookies give you the power to tackle hardships without crumbling.",
                "Ingredients": "Honey * 14Warming Ginger * 12Soothing Cacao * 5Fancy Egg * 4"
            },
            {
                "Picture": "",
                url: fancyapplejuice,
                ingredientsList: [
                    {
                        name: 'Fancy Apple',
                        num: 8
                    },
                ],
                "Name": "Fancy Apple Juice",
                "nameZh": "特选苹果汁",
                "descriptionZh": "浓郁的果汁仅含有最好的苹果",
                "Description": "A rich juice containing only the very best apples.",
                "Ingredients": "Fancy Apple * 8"
            },
            {
                "Picture": "",
                url: craftsodapop,
                ingredientsList: [
                    {
                        name: 'Honey',
                        num: 9
                    },
                ],
                "Name": "Craft Soda Pop",
                "nameZh": "手制劲爽汽水",
                "descriptionZh": "高碳酸手工苏打水",
                "Description": "A highly carbonated artisan soda.",
                "Ingredients": "Honey * 9"
            },
            {
                "Picture": "",
                url: embergingertea,
                ingredientsList: [
                    {
                        name: 'Warming Ginger',
                        num: 9
                    },
                    {
                        name: 'Fancy Apple',
                        num: 9
                    },
                ],
                "Name": "Ember Ginger Tea",
                "nameZh": "火花姜茶",
                "descriptionZh": "在暖暖姜中加入了苹果，让茶变得更容易下咽",
                "Description": "Apples have been added to the spicy ginger, helping the tea go down easily.",
                "Ingredients": "Warming Ginger * 9Fancy Apple * 7"
            },
            {
                "Picture": "",
                url: sfruityflan,
                ingredientsList: [
                    {
                        name: 'Honey',
                        num: 20
                    },
                    {
                        name: 'Fancy Egg',
                        num: 15
                    },
                    {
                        name: 'Moomoo Milk',
                        num: 10
                    },
                    {
                        name: 'Fancy Apple',
                        num: 10
                    },
                ],
                "Name": "Jigglypuff's Fruity Flan",
                "nameZh": "胖丁的果味馅饼",
                "descriptionZh": "非常特别的水果馅饼，像气球一样有弹性",
                "Description": "A very special flan that's as springy as a balloon.",
                "Ingredients": "Honey * 20Fancy Egg * 15Moomoo Milk * 10Fancy Apple * 10"
            },
            {
                "Picture": "",
                url: lovelykisssmoothie,
                ingredientsList: [
                    {
                        name: 'Honey',
                        num: 7
                    },
                    {
                        name: 'Soothing Cacao',
                        num: 8
                    },
                    {
                        name: 'Moomoo Milk',
                        num: 9
                    },
                    {
                        name: 'Fancy Apple',
                        num: 11
                    },
                ],
                "Name": "Lovely Kiss Smoothie",
                "nameZh": "恶魔之吻水果牛奶",
                "descriptionZh": "一种令人放松的饮料，可以缓解您的疲倦并让您进入睡眠状态",
                "Description": "A relaxing drink that soothes your weariness and envelops you in sleep.",
                "Ingredients": "Fancy Apple * 11Moomoo Milk * 9Honey * 7Soothing Cacao * 8"
            },
            {
                "Picture": "",
                url: luckychantapplepie,
                ingredientsList: [

                    {
                        name: 'Moomoo Milk',
                        num: 4
                    },
                    {
                        name: 'Fancy Apple',
                        num: 12
                    },
                ],
                "Name": "Lucky Chant Apple Pie",
                "nameZh": "祈愿苹果派",
                "descriptionZh": "在这个馅饼中发现的大块苹果是非常幸运的一件事",
                "Description": "The chunky pieces of apple in this pie are lucky finds!",
                "Ingredients": "Fancy Apple * 12Moomoo Milk * 4"
            },
            {
                "Picture": "",
                url: srestorativetea,
                ingredientsList: [

                    {
                        name: 'Warming Ginger',
                        num: 15
                    },
                    {
                        name: 'Fancy Apple',
                        num: 15
                    },
                    {
                        name: 'Tasty Mushroom',
                        num: 9
                    },
                ],
                "Name": "Neroli's Restorative Tea",
                "nameZh": "橙梦博士的恢复茶",
                "descriptionZh": "由橙梦博士制作的特殊恢复茶",
                "Description": "A special restorative tea made by Professor Neroli.",
                "Ingredients": "Warming Ginger * 11Fancy Apple * 15Tasty Mushroom * 9"
            },
            {
                "Picture": "",
                url: sweetscentchocolatecake,
                ingredientsList: [

                    {
                        name: 'Honey',
                        num: 9
                    },
                    {
                        name: 'Soothing Cacao',
                        num: 8
                    },
                    {
                        name: 'Moomoo Milk',
                        num: 7
                    },
                ],
                "Name": "Sweet Scent Chocolate Cake",
                "nameZh": "甜甜香气巧克力蛋糕",
                "descriptionZh": "无论是人还是宝可梦都无法抗拒这个蛋糕的甜香的诱惑",
                "Description": "Neither people nor PokÃ©mon can resist the lure of this cake's sweet aroma.",
                "Ingredients": "Honey * 9Soothing Cacao * 8Moomoo Milk * 7"
            },
            {
                "Picture": "",
                url: warmmoomoomilk,
                ingredientsList: [
                    {
                        name: 'Moomoo Milk',
                        num: 7
                    },
                ],
                "Name": "Warm Moomoo Milk",
                "nameZh": "哞哞热鲜奶",
                "descriptionZh": "哞哞牛奶经过加热，能够进一步提取其甜味",
                "Description": "Moomoo Milk that has been heated to further draw out its sweetness.",
                "Ingredients": "Moomoo Milk * 7"
            },
            {
                "Picture": "",
                url: cloudninesoycake,
                ingredientsList: [
                    {
                        name: 'Greengrass Soybeans',
                        num: 7
                    },
                    {
                        name: 'Fancy Egg',
                        num: 8
                    },
                ],
                "Name": "Cloud Nine Soy Cake",
                "nameZh": "轻装豆香蛋糕",
                "descriptionZh": "质地非常轻盈的豆饼",
                "Description": "A soy cake with a nice, light texture.",
                "Ingredients": "Fancy Egg * 8Greengrass Soybeans * 7"
            },
            {
                "Picture": "",
                url: hustleproteinsmoothie,
                ingredientsList: [
                    {
                        name: 'Greengrass Soybeans',
                        num: 15
                    },
                    {
                        name: 'Soothing Cacao',
                        num: 8
                    },
                ],
                "Name": "Hustle Protein Smoothie",
                "nameZh": "活力蛋白质冰沙",
                "descriptionZh": "训练结束后喝一杯这种甜冰沙是一种享受",
                "Description": "A glass of this sweet smoothie goes down a treat after a training session.",
                "Ingredients": "Greengrass Soybeans * 15Soothing Cacao * 8"
            },
            {
                "Picture": "",
                url: stalwartvegetablejuice,
                ingredientsList: [
                    {
                        name: 'Snoozy Tomato',
                        num: 9
                    },
                    {
                        name: 'Fancy Apple',
                        num: 7
                    },
                ],
                "Name": "Stalwart Vegetable Juice",
                "nameZh": "我行我素蔬菜汁",
                "descriptionZh": "非常易于制作的果汁，具有天然的酸甜口味",
                "Description": "An easy-to-make juice with natural sweet and sour flavors.",
                "Ingredients": "Snoozy Tomato * 9Fancy Apple * 7"
            },
            {
                "Picture": "",
                url: bigmalasada,
                ingredientsList: [
                    {
                        name: 'Pure Oil',
                        num: 10
                    },
                    {
                        name: 'Moomoo Milk',
                        num: 7
                    },
                    {
                        name: 'Honey',
                        num: 6
                    },
                ],
                "Name": "Big Malasada",
                "nameZh": "大玛拉萨达",
                "descriptionZh": "采用阿罗拉地区的配方制作的特制炸面包",
                "Description": "A special fried bread made using a recipe = the Alola region.",
                "Ingredients": "Pure Oil * 10Moomoo Milk * 7Honey * 6"
            },
            {
                "Picture": "",
                url: hugepowersoydonuts,
                ingredientsList: [
                    {
                        name: 'Pure Oil',
                        num: 9
                    },
                    {
                        name: 'Soothing Cacao',
                        num: 7
                    },
                    {
                        name: 'Greengrass Soybeans',
                        num: 6
                    },
                ],
                "Name": "Huge Power Soy Donuts",
                "nameZh": "大力士豆香甜甜圈",
                "descriptionZh": "大豆甜甜圈炸得酥脆完美，它们广受健美运动员的喜爱",
                "Description": "Soy donuts fried to crisp perfection. They're bodybuilders' friends.",
                "Ingredients": "Pure Oil * 9Greengrass Soybeans * 6Soothing Cacao * 7"
            }
        ]
    }
]

menuList = menuList.map(i=>{
    i.key = i.title.replace(/\s*/g,"").toLowerCase()
    i.list = i.list.map(j=>{
        j.name = j.Name
        j.key = j.name.replace(/\s*/g,"").toLowerCase()
        return j
    })
    return i
})

let ingredientsList =  [

    {
        "Picture": "",
        "Name": "Fancy Egg",
        url: fancyegg,
        nameZh: '特選蛋',
        nameArr: ['特選蛋',"Fancy Egg"],
        "Description": "A nutritious cooking ingredient that goes well with all sorts of seasonings.",
        "Base Strength": "115",
        "Sell Value": "5 Dream Shards"
    },

    {
        "Picture": "",
        url:fancyapple,
        "Name": "Fancy Apple",
        nameZh: '特選蘋果',
        nameArr: ['特選蘋果',"Fancy Apple"],
        "Description": "An apple chosen above others. It has spectacular form and a brilliant sheen.",
        "Base Strength": "90",
        "Sell Value": "4 Dream Shards"
    },

    {
        "Picture": "",
        url: beansausage,
        nameZh: '豆制香肠',
        nameArr: ['豆制香肠',"Bean Sausage"],
        "Name": "Bean Sausage",
        "Description": "A healthy sausage made = beans that Pokémon like to eat.",
        "Base Strength": "103",
        "Sell Value": "4 Dream Shards"
    },
    {
        "Picture": "",
        url: moomoomilk,
        "Name": "Moomoo Milk",
        nameZh: '哞哞鮮奶',
        nameArr: ['哞哞鮮奶',"Moomoo Milk"],
        "Description": "Highly nutritious milk. Pokémon that drink it become full of energy.",
        "Base Strength": "98",
        "Sell Value": "4 Dream Shards"
    },
    {
        "Picture": "",
        "Name": "Honey",
        nameZh: '甜甜蜜',
        nameArr: ['甜甜蜜',"Honey"],
        url: honey,
        "Description": "A sweet honey collected by Pokémon.",
        "Base Strength": "101",
        "Sell Value": "4 Dream Shards"
    },
    {
        "Picture": "",
        "Name": "Pure Oil",
        nameZh: '純粹油',
        nameArr: ['纯粹油',"Pure Oil","純粹油"],
        url: pureoil,
        "Description": "All-purpose oil that can be used in any type of cuisine.",
        "Base Strength": "121",
        "Sell Value": "5 Dream Shards"
    },
    {
        "Picture": "",
        url: warmingginger,
        nameZh: '暖暖姜',
        nameArr: ['暖暖姜',"Warming Ginger"],
        "Name": "Warming Ginger",
        "Description": "Spicy ginger that warms the body better than any other ingredient.",
        "Base Strength": "109",
        "Sell Value": "4 Dream Shards"
    },
    {
        "Picture": "",
        url:snoozytomato,
        "Name": "Snoozy Tomato",
        nameZh: '好眠番茄',
        nameArr: ['好眠番茄',"Snoozy Tomato"],
        "Description": "A bright-red tomato. Eat it and you'll sleep like a baby.",
        "Base Strength": "110",
        "Sell Value": "4 Dream Shards"
    },
    {
        "Picture": "",
        url:soothingcacao,
        nameZh: '放鬆可可',
        nameArr: ['放松可可',"放鬆可可",'舒适可可',"Soothing Cacao"],
        "Name": "Soothing Cacao",
        "Description": "This cacao bean is time-consuming to process, but its soothing effects make the effort worthwhile.",
        "Base Strength": "151",
        "Sell Value": "6 Dream Shards"
    },

    {
        "Picture": "",
        "Name": "Greengrass Soybeans",
        nameZh: '萌綠大豆',
        nameArr: ['萌绿大豆','萌綠大豆','青草大豆',"Greengrass Soybeans"],
        url: greengrasssoybeans,
        "Description": "This Greengrass Isle specialty is easy to process into foods that are great for training.",
        "Base Strength": "100",
        "Sell Value": "4 Dream Shards"
    },
    {
        "Picture": "",
        url: fieryherb,
        "Name": "Fiery Herb",
        nameZh: '火辣香草',
        nameArr: ['火辣香草',"Fiery Herb"],
        "Description": "The fiery taste of this bright-red herb will wake anyone right up.",
        "Base Strength": "130",
        "Sell Value": "5 Dream Shards"
    },
    {
        "Picture": "",
        "Name": "Large Leek",
        nameZh: '大葱',
        nameArr: ['大葱',"Large Leek"],
        url: largeleek,
        "Description": "Whether this is the kind of vegetable stalk that Farfetch'd like is unknown.",
        "Base Strength": "185",
        "Sell Value": "7 Dream Shards"
    },
    {
        "Picture": "",
        url: softpotato,
        nameZh: '松软土豆',
        nameArr: ['松软土豆',"Soft Potato"],
        "Name": "Soft Potato",
        "Description": "Its mellow flavor makes both body and spirit feel warm and fuzzy.",
        "Base Strength": "124",
        "Sell Value": "5 Dream Shards"
    },
    {
        "Picture": "",
        url: tastymushroom,
        nameZh: '美味蘑菇',
        nameArr: ['美味蘑菇',"Tasty Mushroom"],
        "Name": "Tasty Mushroom",
        "Description": "A juicy mushroom with an abundance of umami flavor.",
        "Base Strength": "167",
        "Sell Value": "7 Dream Shards"
    },
    {
        "Picture": "",
        "Name": "Slowpoke Tail",
        nameZh: '呆呆兽尾巴',
        nameArr: ['呆呆兽尾巴',"Slowpoke Tail"],
        url: slowpoketail,
        "Description": "A very tasty tail of something. When it falls off, it grows back quickly.",
        "Base Strength": "342",
        "Sell Value": "14 Dream Shards"
    },
]
ingredientsList = ingredientsList.map(i=>{
    i.name = i.Name
    i.key = i.Name.replace(/\s*/g,"").toLowerCase()
    return i
})

const ingredientsListMap = new Map()
ingredientsList.forEach(i=>{
    ingredientsListMap.set(i.Name,i)
})

export {
    ingredientsListMap,
    menuList,
    ingredientsList
}