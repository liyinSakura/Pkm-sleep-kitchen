import mixedcurry from '@/assets/menu/mixedcurry.png'
import fancyapplecurry from '@/assets/menu/fancyapplecurry.png'
import grilledtailcurry from '@/assets/menu/grilledtailcurry.png'
import solarpowertomatocurry from '@/assets/menu/solarpowertomatocurry.png'
import dreameaterbuttercurry from '@/assets/menu/dreameaterbuttercurry.png'
import spicyleekcurry from '@/assets/menu/Spicy Leek Curry Icon.png'
import eggbombcurry from '@/assets/menu/eggbombcurry.png'
import heartycheeseburgercurry from '@/assets/menu/heartycheeseburgercurry.png'
import softpotatochowder from '@/assets/menu/softpotatochowder.png'
import simplechowder from '@/assets/menu/simplechowder.png'
import beanburgercurry from '@/assets/menu/beanburgercurry.png'
import mildhoneycurry from '@/assets/menu/mildhoneycurry.png'
import ninjacurry from '@/assets/menu/ninjacurry.png'
import droughtkatsucurry from '@/assets/menu/droughtkatsucurry.png'
import meltyomelettecurry from '@/assets/menu/Melty Omelette Curry Icon.png'
import bulkupbeancurry from '@/assets/menu/bulkupbeancurry.png'
import sporemushroomcurry from '@/assets/menu/sporemushroomcurry.png'

import mixedjuice from '@/assets/menu/Mixed Juice Icon.png'
import fluffysweetpotatoes from '@/assets/menu/Fluffy Sweet Potatoes Icon.png'
import steadfastgingercookies from '@/assets/menu/steadfastgingercookies.png'
import fancyapplejuice from '@/assets/menu/fancyapplejuice.png'
import craftsodapop from '@/assets/menu/craftsodapop.png'
import embergingertea from '@/assets/menu/Ember Ginger Tea Icon.png'
import sfruityflan from '@/assets/menu/Jigglypuff_s Fruity Flan Icon.png'
import lovelykisssmoothie from '@/assets/menu/Lovely Kiss Smoothie Icon.png'
import luckychantapplepie from '@/assets/menu/Lucky Chant Apple Pie Icon.png'
import srestorativetea from '@/assets/menu/Neroli_s Restorative Tea Icon.png'
import sweetscentchocolatecake from '@/assets/menu/Sweet Scent Chocolate Cake Icon.png'
import warmmoomoomilk from '@/assets/menu/Warm Moomoo Milk Icon.png'
import cloudninesoycake from '@/assets/menu/cloudninesoycake.png'
import hustleproteinsmoothie from '@/assets/menu/Hustle Protein Smoothie Icon.png'
import stalwartvegetablejuice from '@/assets/menu/Stalwart Vegetable Juice Icon.png'
import bigmalasada from '@/assets/menu/Big Malasada Icon.png'
import hugepowersoydonuts from '@/assets/menu/Huge Power Soy Donuts Icon.png'


import largeleek from '@/assets/ingredients/largeleek.png'
import tastymushroom from '@/assets/ingredients/Tasty Mushroom Icon.png'
import fancyegg from '@/assets/ingredients/fancyegg.png'
import softpotato from '@/assets/ingredients/softpotato.png'
import fancyapple from '@/assets/ingredients/fancyapple.png'
import fieryherb from '@/assets/ingredients/fieryherb.png'
import beansausage from '@/assets/ingredients/beansausage.png'
import moomoomilk from '@/assets/ingredients/moomoomilk.png'
import honey from '@/assets/ingredients/honey.png'
import pureoil from '@/assets/ingredients/Pure Oil Icon.png'
import warmingginger from '@/assets/ingredients/warmingginger.png'
import snoozytomato from '@/assets/ingredients/snoozytomato.png'
import soothingcacao from '@/assets/ingredients/Soothing Cacao Icon.png'
import slowpoketail from '@/assets/ingredients/Slowpoke Tail Icon.png'
import greengrasssoybeans from '@/assets/ingredients/Greengrass Soybeans Icon.png'


export const menuList = [
    {
        title: 'List of Curry',
        list: [
            {
                "Picture": "",
                url: mixedcurry,
                "Name": "Mixed Curry",
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
                "Description": "A thick chowder made from potatoes boiled until practically melting.",
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
                "Description": "A hearty curry packed with nutrients needed for bulking up.",
                "Ingredients": "Greengrass Soybeans * 12Bean Sausage * 6Fiery Herb * 4Fancy Egg * 4"
            }
        ]
    },
    {
        title: 'List of Salads',
        list: [
            {
                "Picture": "",
                "Name": "Mixed Salad",
                "Description": "Any combination that doesn't match a recipe"
            },
            {
                "Picture": "",
                "Name": "Slowpoke Tail Pepper Salad",
                "Description": "The mouth-tinglingly spicy pepper highlights the sweetness of the tail.",
                "Ingredients": "Slowpoke Tail * 10Fiery Herb * 10Pure Oil * 15"
            },
            {
                "Picture": "",
                "Name": "Spore Mushroom Salad",
                "Description": "A salad rich in minerals that improve the quality of sleep.",
                "Ingredients": "Tasty Mushroom * 17Snoozy Tomato * 8Pure Oil * 8"
            },
            {
                "Picture": "",
                "Name": "Snow Cloak Caesar Salad",
                "Description": "A bacon salad topped with a generous snowy sprinkling of cheese.",
                "Ingredients": "Moomoo Milk * 10Bean Sausage * 6"
            },
            {
                "Picture": "",
                "Name": "Gluttony Potato Salad",
                "Description": "This potato salad contains just a hint of flavor from the Fancy Apples.",
                "Ingredients": "Soft Potato * 14Fancy Egg * 9Bean Sausage * 7Fancy Apple * 6"
            },
            {
                "Picture": "",
                "Name": "Water Veil Tofu Salad",
                "Description": "A salad topped with wobbly cubes of tofu.",
                "Ingredients": "Greengrass Soybeans * 10Snoozy Tomato * 6"
            },
            {
                "Picture": "",
                "Name": "Superpower Extreme Salad",
                "Description": "A hefty salad that provides all your daily nutrients at once.",
                "Ingredients": "Bean Sausage * 9Warming Ginger * 6Fancy Egg * 5Soft Potato * 3"
            },
            {
                "Picture": "",
                "Name": "Bean Ham Salad",
                "Description": "This simple salad features ham made from Bean Sausages.",
                "Ingredients": "Bean Sausage * 8"
            },
            {
                "Picture": "",
                "Name": "Snoozy Tomato Salad",
                "Description": "The Snoozy Tomatoes in this simple salad are a great aid for sleep.",
                "Ingredients": "Snoozy Tomato * 8"
            },
            {
                "Picture": "",
                "Name": "Moomoo Caprese Salad",
                "Description": "A basic salad containing only cheese, tomatoes, and a splash of oil.",
                "Ingredients": "Moomoo Milk * 12Snoozy Tomato * 6Pure Oil * 5"
            },
            {
                "Picture": "",
                "Name": "Contrary Chocolate Meat Salad",
                "Description": "The savory sauce and sweet chocolate sauce let you enjoy a mix of flavors.",
                "Ingredients": "Soothing Cacao * 14Bean Sausage * 9"
            },
            {
                "Picture": "",
                "Name": "Overheat Ginger Salad",
                "Description": "This salad's special ginger dressing warms you through and through.",
                "Ingredients": "Fiery Herb * 17Warming Ginger * 10Snoozy Tomato * 8"
            },
            {
                "Picture": "",
                "Name": "Fancy Apple Salad",
                "Description": "A simple salad accentuated by a mashed apple dressing.",
                "Ingredients": "Fancy Apple * 8"
            },
            {
                "Picture": "",
                "Name": "Immunity Leek Salad",
                "Description": "The crisp leeks in this salad do wonders for the immune system.",
                "Ingredients": "Large Leek * 10Warming Ginger * 5"
            },
            {
                "Picture": "",
                "Name": "Dazzling Apple Cheese Salad",
                "Description": "The simple seasoning keeps the focus on the sublime pairing of ingredients.",
                "Ingredients": "Fancy Apple * 15Moomoo Milk * 5Pure Oil * 3"
            },
            {
                "Picture": "",
                "Name": "Ninja Salad",
                "Description": "Ninjas cannot resist the flavor of this tofu salad. It's eaten in a flash!",
                "Ingredients": "Large Leek * 15Greengrass Soybeans * 15Tasty Mushroom * 12Warming Ginger * 11"
            },
            {
                "Picture": "",
                "Name": "Heat Wave Tofu Salad",
                "Description": "A tofu salad covered in bright red spicy sauce.",
                "Ingredients": "Greengrass Soybeans * 10Fiery Herb * 6"
            }
        ]
    },
    {
        title: 'List of Desserts',
        list: [
            {
                "Picture": "",
                url: mixedjuice,
                "Name": "Mixed Juice",
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
                "Description": "A special fried bread made using a recipe from the Alola region.",
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
                "Description": "Soy donuts fried to crisp perfection. They're bodybuilders' friends.",
                "Ingredients": "Pure Oil * 9Greengrass Soybeans * 6Soothing Cacao * 7"
            }
        ]
    }
]
export const ingredientsList = [

    {
        "Picture": "",
        "Name": "Fancy Egg",
        url: fancyegg,
        "Description": "A nutritious cooking ingredient that goes well with all sorts of seasonings.",
        "Base Strength": "115",
        "Sell Value": "5 Dream Shards"
    },

    {
        "Picture": "",
        url:fancyapple,
        "Name": "Fancy Apple",
        "Description": "An apple chosen above others. It has spectacular form and a brilliant sheen.",
        "Base Strength": "90",
        "Sell Value": "4 Dream Shards"
    },

    {
        "Picture": "",
        url: beansausage,
        "Name": "Bean Sausage",
        "Description": "A healthy sausage made from beans that Pokémon like to eat.",
        "Base Strength": "103",
        "Sell Value": "4 Dream Shards"
    },
    {
        "Picture": "",
        url: moomoomilk,
        "Name": "Moomoo Milk",
        "Description": "Highly nutritious milk. Pokémon that drink it become full of energy.",
        "Base Strength": "98",
        "Sell Value": "4 Dream Shards"
    },
    {
        "Picture": "",
        "Name": "Honey",
        url: honey,
        "Description": "A sweet honey collected by Pokémon.",
        "Base Strength": "101",
        "Sell Value": "4 Dream Shards"
    },
    {
        "Picture": "",
        "Name": "Pure Oil",
        url: pureoil,
        "Description": "All-purpose oil that can be used in any type of cuisine.",
        "Base Strength": "121",
        "Sell Value": "5 Dream Shards"
    },
    {
        "Picture": "",
        url: warmingginger,
        "Name": "Warming Ginger",
        "Description": "Spicy ginger that warms the body better than any other ingredient.",
        "Base Strength": "109",
        "Sell Value": "4 Dream Shards"
    },
    {
        "Picture": "",
        url:snoozytomato,
        "Name": "Snoozy Tomato",
        "Description": "A bright-red tomato. Eat it and you'll sleep like a baby.",
        "Base Strength": "110",
        "Sell Value": "4 Dream Shards"
    },
    {
        "Picture": "",
        url:soothingcacao,
        "Name": "Soothing Cacao",
        "Description": "This cacao bean is time-consuming to process, but its soothing effects make the effort worthwhile.",
        "Base Strength": "151",
        "Sell Value": "6 Dream Shards"
    },

    {
        "Picture": "",
        "Name": "Greengrass Soybeans",
        url: greengrasssoybeans,
        "Description": "This Greengrass Isle specialty is easy to process into foods that are great for training.",
        "Base Strength": "100",
        "Sell Value": "4 Dream Shards"
    },
    {
        "Picture": "",
        url: fieryherb,
        "Name": "Fiery Herb",
        "Description": "The fiery taste of this bright-red herb will wake anyone right up.",
        "Base Strength": "130",
        "Sell Value": "5 Dream Shards"
    },
    {
        "Picture": "",
        "Name": "Large Leek",
        url: largeleek,
        "Description": "Whether this is the kind of vegetable stalk that Farfetch'd like is unknown.",
        "Base Strength": "185",
        "Sell Value": "7 Dream Shards"
    },
    {
        "Picture": "",
        url: softpotato,
        "Name": "Soft Potato",
        "Description": "Its mellow flavor makes both body and spirit feel warm and fuzzy.",
        "Base Strength": "124",
        "Sell Value": "5 Dream Shards"
    },
    {
        "Picture": "",
        url: tastymushroom,
        "Name": "Tasty Mushroom",
        "Description": "A juicy mushroom with an abundance of umami flavor.",
        "Base Strength": "167",
        "Sell Value": "7 Dream Shards"
    },
    {
        "Picture": "",
        "Name": "Slowpoke Tail",
        url: slowpoketail,
        "Description": "A very tasty tail of something. When it falls off, it grows back quickly.",
        "Base Strength": "342",
        "Sell Value": "14 Dream Shards"
    },
]

const ingredientsListMap = new Map()
ingredientsList.forEach(i=>{
    ingredientsListMap.set(i.Name,i)
})

export {
    ingredientsListMap
}