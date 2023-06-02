export const category = [
    {
        name: "Kahvaltı",
        image: import.meta.env.VITE_URL + "kahvalti/sicak_kahvalti_tabagi.jpg"
    },
    {
        name: "Makarna",
        image: import.meta.env.VITE_URL + "makarna/fettuccine_alfredo.jpg"
    },
    {
        name: "Salata",
        image: import.meta.env.VITE_URL + "salata/sezar_salata.jpg"
    },
    {
        name: "Burger",
        image: import.meta.env.VITE_URL + "burger/cheese_burger.jpg"
    },
    {
        name: "Ana Yemek",
        image: import.meta.env.VITE_URL + "ana-yemek/izgara_kofte.jpg"
    },
    {
        name: "Pizza",
        image: import.meta.env.VITE_URL + "pizza/karisik_pizza.jpg"
    },
    {
        name: "Aperatif",
        image: import.meta.env.VITE_URL + "aperatif/meyve_tabagi.jpg"
    },
    {
        name: "Soğuk İçecekler",
        image: import.meta.env.VITE_URL + "soguk-icecekler/portakal_suyu.jpg"
    },
    {
        name: "Soğuk Kahveler",
        image: import.meta.env.VITE_URL + "soguk-kahveler/ice-americano.jpg"
    },
    {
        name: "Frozen & Milkshake",
        image: import.meta.env.VITE_URL + "frozen/frozen.jpg"
    },
    {
        name: "Bubble Tea",
        image: import.meta.env.VITE_URL + "bubble/cilek_bubble.jpg"
    },
    {
        name: "Sıcak İçecekler",
        image: import.meta.env.VITE_URL + "sicak-icecekler/nescafe.jpg"
    },
    {
        name: "Biralar",
        image: import.meta.env.VITE_URL + "biralar/bud.jpg"
    },
    {
        name: "Kokteyller",
        image: import.meta.env.VITE_URL + "kokteyller/godfather.jpg"
    },
    {
        name: "Alkollü İçecekler",
        image: import.meta.env.VITE_URL + "alkollu-icecekler/smirnoff.jpg"
    },
    {
        name: "Şaraplar",
        image: import.meta.env.VITE_URL + "saraplar/beyaz-sarap-kadeh.jpg"
    },
]

export const menu = [
    {
        title: "Kahvaltı",
        description: "Kahvaltı çeşitlerimizi görmek için tıklayınız.",
        items: [
            {
                name: "Kahvaltı Tabağı",
                description: "Beyaz peynir,zeytin, kaşar, domates, salatalık, bal-kaymak, yumurta ve sigara böreği ile servis edilir.",
                price: 170,
                image: import.meta.env.VITE_URL + "kahvalti/kahvalti_tabagi.jpg"
            },
            {
                name: "Sıcak Kahvaltı Tabağı",
                description: "Sosis, sucuk, patates, sigara böreği, hellim peynir, sahanda yumurta ile servis edilir.",
                price: 195,
                image: import.meta.env.VITE_URL + "kahvalti/sicak_kahvalti_tabagi.jpg"
            },
            {
                name: "Sahanda Yumurta",
                description: "",
                price: [
                    { price: 70, type: "Sade" },
                    { price: 80, type: "Sucuklu" },
                    { price: 95, type: "Kavurmalı" },
                ],
                image: import.meta.env.VITE_URL + "kahvalti/sahanda_yumurta.jpg"
            },
            {
                name: "Omlet",
                description: "",
                price: [
                    { price: 80, type: "Sade" },
                    { price: 85, type: "Kaşarlı" },
                    { price: 95, type: "Karışık" },
                ],
                image: import.meta.env.VITE_URL + "kahvalti/omlet.jpg"
            },
            {
                name: "Menemen",
                description: "",
                price: 100,
                image: import.meta.env.VITE_URL + "kahvalti/menemen.jpg"
            },
            {
                name: "Çift Kaşarlı Tost",
                description: "",
                price: 75,
                image: import.meta.env.VITE_URL + "kahvalti/kasarli_tost.jpg"
            },
            {
                name: "Sucuklu Tost",
                description: "",
                price: 80,
                image: import.meta.env.VITE_URL + "kahvalti/sucuklu_tost.jpg"
            },
            {
                name: "Karışık Tost",
                description: "",
                price: 90,
                image: import.meta.env.VITE_URL + "kahvalti/karisik_tost.jpg"
            },
            {
                name: "Combo Atıştırma",
                description: "Sigara böreği, sosis, tavuk, patates, soğan halkası, kroket ile servis edilir.",
                price: 145,
                image: import.meta.env.VITE_URL + "kahvalti/combo.jpg"
            },
            {
                name: "Gözleme",
                description: "",
                price: [
                    { price: 90, type: "Kaşarlı" },
                    { price: 93, type: "Patatesli" },
                    { price: 95, type: "Beyaz Peynirli" },
                ],
                image: import.meta.env.VITE_URL + "kahvalti/gozleme.jpg"
            },
            {
                name: "Patates Kızartması",
                description: "",
                price: 80,
                image: import.meta.env.VITE_URL + "kahvalti/patates_kizartmasi.jpg"
            },
            {
                name: "Çıtır Asya Tavuk",
                description: "4 Adet",
                price: 125,
                image: import.meta.env.VITE_URL + "kahvalti/citir_tavuk.jpg"
            },
            {
                name: "Sigara Böreği",
                description: "6 Adet",
                price: 90,
                image: import.meta.env.VITE_URL + "kahvalti/sigara_boregi.jpg"
            },
            {
                name: "Paçanga Böreği",
                description: "3 Adet (6 Parça)",
                price: 100,
                image: import.meta.env.VITE_URL + "kahvalti/pacanga_boregi.jpg"
            },
            {
                name: "Börek Tabağı",
                description: "3 Adet Sigara Böreği, 3 Adet Paçanga Böreği.",
                price: 140,
                image: import.meta.env.VITE_URL + "kahvalti/borek_tabagi.jpg"
            }
        ]
    },
    {
        title: "Makarna",
        description: "Makarna çeşitlerimizi görmek için tıklayınız.",
        items: [
            {
                name: "Fettucini Alfredo",
                description: "",
                price: 150,
                image: import.meta.env.VITE_URL + "makarna/fettuccine_alfredo.jpg"
            },
            {
                name: "Mantı",
                description: "",
                price: 130,
                image: import.meta.env.VITE_URL + "makarna/manti.jpg"
            }
        ]
    },
    {
        title: "Salata",
        description: "Salata çeşitlerimizi görmek için tıklayınız.",
        items: [
            {
                name: "Akdeniz Salata",
                description: "",
                price: 120,
                image: import.meta.env.VITE_URL + "salata/akdeniz_salata.jpg"
            },
            {
                name: "Sezar Salata",
                description: "",
                price: 150,
                image: import.meta.env.VITE_URL + "salata/sezar_salata.jpg"
            },
            {
                name: "Ton Balıklı Salata",
                description: "",
                price: 160,
                image: import.meta.env.VITE_URL + "salata/ton_balikli_salata.jpg"
            },
            {
                name: "Çıtır Tavuk Salata",
                description: "",
                price: 150,
                image: import.meta.env.VITE_URL + "salata/citir_tavuk_salata.jpg"
            }
        ]
    },
    {
        title: "Burger",
        description: "Burger çeşitlerimizi görmek için tıklayınız.",
        items: [
            {
                name: "Klasik Burger",
                description: "",
                price: 170,
                image: import.meta.env.VITE_URL + "burger/classic_burger.jpg"
            },
            {
                name: "Cheese Burger",
                description: "",
                price: 175,
                image: import.meta.env.VITE_URL + "burger/cheese_burger.jpg"
            },
            {
                name: "Tavuk Burger",
                description: "",
                price: 150,
                image: import.meta.env.VITE_URL + "burger/tavuk_burger.jpg"
            }
        ]
    },
    {
        title: "Ana Yemek",
        description: "Ana yemek çeşitlerimizi görmek için tıklayınız.",
        items: [
            {
                name: "Izgara Köfte",
                description: "",
                price: 220,
                image: import.meta.env.VITE_URL + "ana-yemek/izgara_kofte.jpg"
            },
            {
                name: "Tavuk Bonfile",
                description: "",
                price: 200,
                image: import.meta.env.VITE_URL + "ana-yemek/tavuk_bonfile.jpg"
            }
        ]
    },
    {
        title: "Pizza",
        description: "Pizza çeşitlerimizi görmek için tıklayınız.",
        items: [
            {
                name: "Margherita Pizza",
                description: "",
                price: 150,
                image: import.meta.env.VITE_URL + "pizza/margarita_pizza.jpg"
            },
            {
                name: "Dört Peynirli Pizza",
                description: "",
                price: 170,
                image: import.meta.env.VITE_URL + "pizza/dort_peynirli_pizza.jpg"
            },
            {
                name: "Karışık Pizza",
                description: "",
                price: 190,
                image: import.meta.env.VITE_URL + "pizza/karisik_pizza.jpg"
            }
        ]
    },
    {
        title: "Aperatif",
        description: "Aperatif çeşitlerimizi görmek için tıklayınız.",
        items: [
            {
                name: "Meyve Tabağı",
                description: "",
                price: 180,
                image: import.meta.env.VITE_URL + "aperatif/meyve_tabagi.jpg"
            },
            {
                name: "Çerez",
                description: "",
                price: 70,
                image: import.meta.env.VITE_URL + "aperatif/cerez.jpg"
            },
            {
                name: "Cips",
                description: "",
                price: 60,
                image: import.meta.env.VITE_URL + "aperatif/cips.jpg"
            }
        ]
    },
    {
        title: "Soğuk İçecekler",
        description: "Soğuk içecek çeşitlerimizi görmek için tıklayınız.",
        items: [
            {
                name: "Limonata",
                description: "",
                price: 50,
                image: import.meta.env.VITE_URL + "soguk-icecekler/limonata.jpg"
            },
            {
                name: "Çilekli Limonata",
                description: "",
                price: 60,
                image: import.meta.env.VITE_URL + "soguk-icecekler/cilekli_limonata.jpg"
            },
            {
                name: "Kivili Limonata",
                description: "",
                price: 60,
                image: import.meta.env.VITE_URL + "soguk-icecekler/kivi_limonata.jpg"
            },
            {
                name: "Ice Tea",
                description: "",
                price: 35,
                image: import.meta.env.VITE_URL + "soguk-icecekler/icetea.jpg"
            },
            {
                name: "Coca Cola",
                description: "",
                price: 35,
                image: import.meta.env.VITE_URL + "soguk-icecekler/cola.jpg"
            },
            {
                name: "Fanta",
                description: "",
                price: 35,
                image: import.meta.env.VITE_URL + "soguk-icecekler/fanta.jpg"
            },
            {
                name: "Sprite",
                description: "",
                price: 35,
                image: import.meta.env.VITE_URL + "soguk-icecekler/sprite.jpg"
            },
            {
                name: "Cappy",
                description: "",
                price: 35,
                image: import.meta.env.VITE_URL + "soguk-icecekler/cappy.jpg"
            },
            {
                name: "Ayran",
                description: "",
                price: 32,
                image: import.meta.env.VITE_URL + "soguk-icecekler/ayran.jpg"
            },
            {
                name: "Soda",
                description: "",
                price: 28,
                image: import.meta.env.VITE_URL + "soguk-icecekler/soda.jpg"
            },
            {
                name: "Meyveli Soda",
                description: "",
                price: 30,
                image: import.meta.env.VITE_URL + "soguk-icecekler/meyveli_soda.jpg"
            },
            {
                name: "Churchill",
                description: "",
                price: 40,
                image: import.meta.env.VITE_URL + "soguk-icecekler/churchill.jpg"
            },
            {
                name: "Taze Sıkılmış Portakal Suyu",
                description: "",
                price: 70,
                image: import.meta.env.VITE_URL + "soguk-icecekler/portakal_suyu.jpg"
            },
            {
                name: "Redbull",
                description: "",
                price: 60,
                image: import.meta.env.VITE_URL + "soguk-icecekler/redbull.jpg"
            },
            {
                name: "Su",
                description: "",
                price: 13,
                image: import.meta.env.VITE_URL + "soguk-icecekler/su.jpg"
            }
        ]
    },
    {
        title: "Soğuk Kahveler",
        description: "Soğuk kahve çeşitlerimizi görmek için tıklayınız.",
        items: [
            {
                name: "Ice Latte",
                description: "",
                price: 62,
                image: import.meta.env.VITE_URL + "soguk-kahveler/ice-latte.jpg"
            },
            {
                name: "Ice Chocolate Mocha",
                description: "",
                price: 68,
                image: import.meta.env.VITE_URL + "soguk-kahveler/ice-mocha.jpg"
            },
            {
                name: "Ice White Chocolate Mocha",
                description: "",
                price: 68,
                image: import.meta.env.VITE_URL + "soguk-kahveler/ice-white-mocha.jpg"
            },
            {
                name: "Ice Americano",
                description: "",
                price: 60,
                image: import.meta.env.VITE_URL + "soguk-kahveler/ice-americano.jpg"
            },
            {
                name: "Ice Caramellatte",
                description: "",
                price: 65,
                image: import.meta.env.VITE_URL + "soguk-kahveler/ice-caramellatte.jpg"
            }
        ]
    },
    {
        title: "Frozen & Milkshake",
        description: "Frozen & Milkshake çeşitlerimizi görmek için tıklayınız.",
        items: [
            {
                name: "Frozen",
                description: "",
                price: 65,
                image: import.meta.env.VITE_URL + "frozen/frozen.jpg"
            },
            {
                name: "Çikolatalı Milkshake",
                description: "",
                price: 70,
                image: import.meta.env.VITE_URL + "frozen/milkshake.jpg"
            },
            {
                name: "Çilekli Milkshake",
                description: "",
                price: 70,
                image: import.meta.env.VITE_URL + "frozen/milkshake.jpg"
            },
            {
                name: "Vanilyalı Milkshake",
                description: "",
                price: 70,
                image: import.meta.env.VITE_URL + "frozen/milkshake.jpg"
            },
            {
                name: "Oreoshake",
                description: "",
                price: 80,
                image: import.meta.env.VITE_URL + "frozen/oreoshake.jpg"
            },
            {
                name: "Çilekli Oreoshake",
                description: "",
                price: 80,
                image: import.meta.env.VITE_URL + "frozen/cilekli-oreoshake.jpg"
            }
        ]
    },
    {
        title: "Bubble Tea",
        description: "Bubble Tea çeşitlerimizi görmek için tıklayınız.",
        items: [
            {
                name: "Hibiscus Bubble Tea",
                description: "Çilek, mango, yaban mersini ",
                price: 95,
                image: import.meta.env.VITE_URL + "bubble/cilek_bubble.jpg"
            },
            // {
            //     name: "Hibiscus Frambuaz Bubble Tea",
            //     description: "",
            //     price: 95,
            //     image: import.meta.env.VITE_URL + "bubble/frambuaz_bubble.jpg"
            // },
            // {
            //     name: "Coffee Latte Mango Bubble Tea",
            //     description: "",
            //     price: 70,
            //     image: import.meta.env.VITE_URL + "bubble/latte_bubble.jpg"
            // },
            // {
            //     name: "Lime Çilek Bubble Tea",
            //     description: "",
            //     price: 95,
            //     image: import.meta.env.VITE_URL + "bubble/lime_bubble.jpg"
            // },
            {
                name: "Mango Bubble Tea",
                description: "Çilek, yaban mersini, coffee latte ",
                price: 95,
                image: import.meta.env.VITE_URL + "bubble/mango_bubble.jpg"
            }
        ]
    },
    {
        title: "Sıcak İçecekler",
        description: "Sıcak içecek çeşitlerimizi görmek için tıklayınız.",
        items: [
            {
                name: "Türk Kahvesi",
                description: "",
                price: 40,
                image: import.meta.env.VITE_URL + "sicak-icecekler/turk_kahvesi.jpg"
            },
            {
                name: "Duble Türk Kahvesi",
                description: "",
                price: 75,
                image: import.meta.env.VITE_URL + "sicak-icecekler/duble-kahve.jpg"
            },
            {
                name: "Americano",
                description: "",
                price: 50,
                image: import.meta.env.VITE_URL + "sicak-icecekler/americano.jpg"
            },
            {
                name: "Sütlü Nescafe",
                description: "",
                price: 60,
                image: import.meta.env.VITE_URL + "sicak-icecekler/nescafe.jpg"
            },
            {
                name: "Çay",
                description: "",
                price: 20,
                image: import.meta.env.VITE_URL + "sicak-icecekler/cay.jpg"
            },
            {
                name: "Büyük Çay",
                description: "",
                price: 30,
                image: import.meta.env.VITE_URL + "sicak-icecekler/buyuk_cay.jpg"
            },
            {
                name: "Cappuccino",
                description: "",
                price: 70,
                image: import.meta.env.VITE_URL + "sicak-icecekler/cappuccino.jpg"
            },
            {
                name: "Sıcak Çikolata",
                description: "",
                price: 75,
                image: import.meta.env.VITE_URL + "sicak-icecekler/sicak_cikolata.jpg"
            }
        ]
    },
    {
        title: "Biralar",
        description: "Bira çeşitlerimizi görmek için tıklayınız.",
        items: [
            // {
            //     name: "Efes Pilsen 50 CL",
            //     description: "",
            //     price: 100,
            //     image: import.meta.env.VITE_URL + "biralar/efes.jpg"
            // },
            {
                name: "Efes Malt 50 CL",
                description: "",
                price: 100,
                image: import.meta.env.VITE_URL + "biralar/efes-malt.jpg"
            },
            {
                name: "Bomonti Filtresiz 50 CL",
                description: "",
                price: 110,
                image: import.meta.env.VITE_URL + "biralar/bomonti.jpg"
            },
            {
                name: "Tuborg Gold 50 CL",
                description: "",
                price: 100,
                image: import.meta.env.VITE_URL + "biralar/tuborg.jpg"
            },
            {
                name: "Amsterdam 50 CL",
                description: "",
                price: 150,
                image: import.meta.env.VITE_URL + "biralar/amsterdam.jpg"
            },
            {
                name: "Becks",
                description: "",
                price: 105,
                image: import.meta.env.VITE_URL + "biralar/becks.jpg"
            },
            {
                name: "Bud",
                description: "",
                price: 115,
                image: import.meta.env.VITE_URL + "biralar/bud.jpg"
            },
            {
                name: "Miller",
                description: "",
                price: 115,
                image: import.meta.env.VITE_URL + "biralar/miller.jpg"
            },
            {
                name: "Corona",
                description: "",
                price: 140,
                image: import.meta.env.VITE_URL + "biralar/corona.jpg"
            },
            {
                name: "Heineken",
                description: "",
                price: 120,
                image: import.meta.env.VITE_URL + "biralar/heineken.jpg"
            },
            {
                name: "Carlsberg",
                description: "",
                price: 120,
                image: import.meta.env.VITE_URL + "biralar/carlsberg.jpg"
            }
        ]
    },
    {
        title: "Kokteyller",
        description: "Kokteyl çeşitlerimizi görmek için tıklayınız.",
        items: [
            {
                name: "Alkollü Frozen",
                description: "Vodka, Fruit Puree.",
                price: 180,
                image: import.meta.env.VITE_URL + "kokteyller/alkollu-frozen.jpg"
            },
            {
                name: "Alkolsüz Mojito",
                description: "Lime Juice, Mint Leaf, Sprite, Symple Syrup.",
                price: 110,
                image: import.meta.env.VITE_URL + "kokteyller/mojito.jpg"
            },
            {
                name: "Bourbon Smash",
                description: "Mint Leaf, Lemon, Whiskey, Symple Syrup.",
                price: 240,
                image: import.meta.env.VITE_URL + "kokteyller/bourbon-smash.jpg"
            },
            // {
            //     name: "Cadillac Margarita",
            //     description: "Tequila, Cointreau, Lime Juice, Symple Syrup.",
            //     price: 190,
            //     image: import.meta.env.VITE_URL + "kokteyller/cadillac-margarita.jpg"
            // },
            {
                name: "Cape Cod",
                description: "Vodka, Cranberry Juice, Lime Juice.",
                price: 190,
                image: import.meta.env.VITE_URL + "kokteyller/capecod.jpg"
            },
            // {
            //     name: "Corpse Reviver",
            //     description: "Lime Juice, Cointreau, White Rum, Gin.",
            //     price: 180,
            //     image: import.meta.env.VITE_URL + "kokteyller/corpse-reviver.jpg"
            // },
            {
                name: "Cosmopolitan",
                description: "Vodka, Cointreau, Lime Juice, Cranberry Juice.",
                price: 205,
                image: import.meta.env.VITE_URL + "kokteyller/cosmopolitan.jpg"
            },
            {
                name: "Cuba Libre",
                description: "White Rum, Cointreau, Coca-Cola.",
                price: 205,
                image: import.meta.env.VITE_URL + "kokteyller/cuba-libre.jpg"
            },
            // {
            //     name: "Daiquiri",
            //     description: "White Rum, Lime Juice, Symple Syrup.",
            //     price: 180,
            //     image: import.meta.env.VITE_URL + "kokteyller/daiquiri.jpg"
            // },
            {
                name: "Espresso Martini",
                description: "Vodka, Kahlua, Espresso, Symple Syrup.",
                price: 210,
                image: import.meta.env.VITE_URL + "kokteyller/espresso-martini.jpg"
            },
            {
                name: "Gin Bull",
                description: "Gin, Redbull Yellow.",
                price: 180,
                image: import.meta.env.VITE_URL + "kokteyller/ginbull.jpg"
            },
            {
                name: "Gin Fizz",
                description: "Gin, Symple Syrup, Lemon Juice.",
                price: 190,
                image: import.meta.env.VITE_URL + "kokteyller/gin-fizz.jpg"
            },
            // {
            //     name: "Gin Gimlet",
            //     description: "Lemon Juice, Symple Syrup, Gin.",
            //     price: 180,
            //     image: import.meta.env.VITE_URL + "kokteyller/gin-gimlet.jpg"
            // },
            // {
            //     name: "Gin Rickey",
            //     description: "Gin, Symple Syrup, Lemon Juice, Soda Water.",
            //     price: 180,
            //     image: import.meta.env.VITE_URL + "kokteyller/gin-rickey.jpg"
            // },
            {
                name: "Gin Tonic",
                description: "Gin, Soda Water, Tonic.",
                price: 180,
                image: import.meta.env.VITE_URL + "kokteyller/gin-tonic.jpg"
            },
            // {
            //     name: "GodFather",
            //     description: "Bourbon Whiskey, Amaretto Liquor.",
            //     price: 200,
            //     image: import.meta.env.VITE_URL + "kokteyller/godfather.jpg"
            // },
            // {
            //     name: "GodMother",
            //     description: "Vodka, Amaretto Liquor.",
            //     price: 185,
            //     image: import.meta.env.VITE_URL + "kokteyller/godmother.jpg"
            // },
            // {
            //     name: "Hot Toddy",
            //     description: "Whiskey, Lemon Juice, Honey, Hot Water.",
            //     price: 180,
            //     image: import.meta.env.VITE_URL + "kokteyller/hot-toddy.jpg"
            // },
            {
                name: "Long Island Ice Tea",
                description: "White Rum, Vodka, Tequila, Gin, Cointreau, Lemon Juice, Coca-Cola.",
                price: 250,
                image: import.meta.env.VITE_URL + "kokteyller/long-island.jpg"
            },
            {
                name: "Long Beach Ice Tea",
                description: "White Rum, Vodka, Tequila, Gin, Cointreau, Lemon Juice, Cranberry Juice.",
                price: 270,
                image: import.meta.env.VITE_URL + "kokteyller/long-beach.jpg"
            },
            {
                name: "Texas Tea",
                description: "White Rum, Vodka, Tequila, Gin, Cointreau, Bourbon Whiskey, Lemon Juice, Redbull. ",
                price: 300,
                image: import.meta.env.VITE_URL + "kokteyller/texas-tea.jpg"
            },
            {
                name: "Margarita",
                description: "Tequila, Cointreau, Lemon Juice.",
                price: 190,
                image: import.meta.env.VITE_URL + "kokteyller/margarita.jpg"
            },
            {
                name: "Mojito",
                description: "Tequila, Cointreau, Agave Syrup, Lime Juice.",
                price: 200,
                image: import.meta.env.VITE_URL + "kokteyller/mojito.jpg"
            },
            {
                name: "New York Sour",
                description: "Bourbon Whiskey, Lemon Juice, Symple Syrup, Red Wine. (İsteğe Göre Yumurta Akı).",
                price: 230,
                image: import.meta.env.VITE_URL + "kokteyller/new-york-sour.jpg"
            },
            {
                name: "Old Fashioned",
                description: "Bourbon Whiskey, Angostra Bitters, Sugar, Soda Water.",
                price: 300,
                image: import.meta.env.VITE_URL + "kokteyller/old-fashioned.jpg"
            },
            // {
            //     name: "Quuen's Park Swizzle",
            //     description: "Mint Leaf, Lime Juice, White Rum, Symple Syrup.",
            //     price: 210,
            //     image: import.meta.env.VITE_URL + "kokteyller/queens-park-swizzle.jpg"
            // },
            {
                name: "Sea Breeze",
                description: "Vodka, Archers, Orange Juice, Cranberry Juice.",
                price: 190,
                image: import.meta.env.VITE_URL + "kokteyller/sea-breeze.jpg"
            },
            {
                name: "Sex on the Beach",
                description: "Bourbon Whiskey, Angostra Bitters, Sugar, Soda Water.",
                price: 210,
                image: import.meta.env.VITE_URL + "kokteyller/sex-on-the-beach.jpg"
            },
            // {
            //     name: "Stone Sour",
            //     description: "Bourbon Whiskey, Lemon Juice, Sympe Syrup, Orange Juice.",
            //     price: 200,
            //     image: import.meta.env.VITE_URL + "kokteyller/stone-sour.jpg"
            // },
            {
                name: "Tekila Sunrise",
                description: "Tequila, Orange Juice, Grenadine.",
                price: 210,
                image: import.meta.env.VITE_URL + "kokteyller/tekila-sunrise.jpg"
            },
            // {
            //     name: "Tom Collins",
            //     description: "Old Tom Gin, Lemon Juice, Symple Syrup.",
            //     price: 180,
            //     image: import.meta.env.VITE_URL + "kokteyller/tom-collins.jpg"
            // },
            {
                name: "Vodka Soda",
                description: "Old Tom Gin, Lemon Juice, Symple Syrup.",
                price: 170,
                image: import.meta.env.VITE_URL + "kokteyller/vodka-soda.jpg"
            },
            // {
            //     name: "Whiskey Fix",
            //     description: "Bourbon Whiskey, Lemon Juice, Symple Syrup.",
            //     price: 190,
            //     image: import.meta.env.VITE_URL + "kokteyller/whiskey-fix.jpg"
            // },
            {
                name: "Whiskey Sour",
                description: "Bourbon Whiskey, Lemon Juice, Symple Syrup. (İsteğe Göre Yumurta Akı).",
                price: 220,
                image: import.meta.env.VITE_URL + "kokteyller/whiskey-sour.jpg"
            },
            // {
            //     name: "White Lady",
            //     description: "Gin, Cointreau, Lemon Juice, Egg White.",
            //     price: 180,
            //     image: import.meta.env.VITE_URL + "kokteyller/white-lady.jpg"
            // },
            {
                name: "White Russian",
                description: "Vodka, Kahlua, Heavy Cream.",
                price: 200,
                image: import.meta.env.VITE_URL + "kokteyller/white-russian.jpg"
            },
            {
                name: "Black Russian",
                description: "Vodka, Kahlua.",
                price: 190,
                image: import.meta.env.VITE_URL + "kokteyller/black-russian.jpg"
            },
        ]
    },
    {
        title: "Alkollü İçecekler",
        description: "Alkollü İçeceklerimizi görmek için tıklayınız.",
        items: [
            {
                name: "Smirnoff",
                description: "",
                price: [
                    { price: 1200, type: "Şişe" },
                    { price: 140, type: "Kadeh" },
                ],
                image: import.meta.env.VITE_URL + "alkollu-icecekler/smirnoff.jpg"
            },
            {
                name: "Absolut",
                description: "",
                price: [
                    { price: 1600, type: "Şişe" },
                    { price: 150, type: "Kadeh" },
                ],
                image: import.meta.env.VITE_URL + "alkollu-icecekler/absolut.jpg"
            },
            {
                name: "Olmeca",
                description: "",
                price: [
                    { price: 2000, type: "Şişe" },
                    { price: 75, type: "Kadeh" },
                ],
                image: import.meta.env.VITE_URL + "alkollu-icecekler/olmeca.jpg"
            },
            {
                name: "Chivas",
                description: "",
                price: [
                    { price: 2300, type: "Şişe" },
                    { price: 300, type: "Kadeh" },
                ],
                image: import.meta.env.VITE_URL + "alkollu-icecekler/chivas.jpg"
            },
            {
                name: "Red Label",
                description: "",
                price: [
                    { price: 1700, type: "Şişe" },
                    { price: 240, type: "Kadeh" },
                ],
                image: import.meta.env.VITE_URL + "alkollu-icecekler/redlabel.jpg"
            },
            {
                name: "Gordons",
                description: "",
                price: [
                    { price: 1200, type: "Şişe" },
                    { price: 140, type: "Kadeh" },
                ],
                image: import.meta.env.VITE_URL + "alkollu-icecekler/gordons.jpg"
            }
        ]
    },
    {
        title: "Şaraplar",
        description: "Şarap çeşitlerimizi görmek için tıklayınız.",
        items: [
            {
                name: "Kalecik Karası Kırmızı Şarap",
                description: "",
                price: 550,
                image: import.meta.env.VITE_URL + "saraplar/kalecik.jpg"
            },
            {
                name: "Leona Blush",
                description: "",
                price: 500,
                image: import.meta.env.VITE_URL + "saraplar/leona.jpg"
            },
            {
                name: "Leona White",
                description: "",
                price: 520,
                image: import.meta.env.VITE_URL + "saraplar/leona-beyaz.jpg"
            },
            {
                name: "Kırmızı Şarap Kadeh",
                description: "",
                price: 140,
                image: import.meta.env.VITE_URL + "saraplar/kalecik-kadeh.jpg"
            },
            {
                name: "Blush Şarap Kadeh",
                description: "",
                price: 130,
                image: import.meta.env.VITE_URL + "saraplar/leona-blush-kadeh.jpg"
            },
            {
                name: "Beyaz Şarap Kadeh",
                description: "",
                price: 140,
                image: import.meta.env.VITE_URL + "saraplar/beyaz-sarap-kadeh.jpg"
            }
        ]
    },
]