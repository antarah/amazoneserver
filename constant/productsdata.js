const products = [
    { 
        id: 'product1',
        url: 'https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70',
        title: {
            shortTitle: 'Home & Kitchen',
            longTitle: 'Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)'
        }, 
        price: {
            mrp: 1195,
            cost: 625,
            discount: '47%'
        },
        description: 'This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day' 
    },
    { 
        id: 'product2',
        url: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70',
        title: {
            shortTitle: 'Sandwich Makers',
            longTitle: 'Flipkart SmartBuy Sandwich 01 Grill  (Black)'
        },
        price: {
            mrp: 1499,
            cost: 899,
            discount: '40%'
        },
        description: 'This non-stick sandwich toaster .easy to use and very handy. Directly hold over flame to make tasty toasts and toasted sandwiches. Specially designed by keeping your needs in mind, the sandwich maker makes whatever youre doing simpler, smarter and better',
        discount: 'From 99+5% Off', 
        tagline: 'Pestige, Nova & more' 
    },
    { 
        id: 'product3',
        url: 'https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70', 
        title: {
            shortTitle: 'Fitness Gear',
            longTitle: 'AJRO DEAL New Adjustable Single Resistance Tube (Multicolor) Resistance Tube  (Multicolor)'
        }, 
        price: {
            mrp: 499,
            cost: 166,
            discount: '66%'
        },
        description: 'This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture. It increases the stamina, energy and vitality of the body. The elastic resistance of the rubber training rope can be used to train and exercise in whichever way you want, according to your physical needs.',
        discount: 'Upto 70% Off', 
        tagline: 'Deal of the Day' 
    },
    { 
        id: 'product4',
        url: 'https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70',
        title: {
            shortTitle: 'Smart Watches',
            longTitle: 'Molife Sense 500 Smartwatch  (Black Strap, Freesize)',
        }, 
        price: {
            mrp: 6999,
            cost: 4049,
            discount: '42%'
        },
        description: 'The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.',
        discount: 'Grab Now', 
        tagline: 'Best Seller' 
    },
    { 
        id: 'product5',
        url: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70', 
        title: {
            shortTitle: 'Trimmers, Dryers & more',
            longTitle: 'Nova Professional NHP 8220 Hair Dryer  (1800 W, Multicolor)'
        }, 
        price: {
            mrp: 1899,
            cost: 1124,
            discount: '40%'
        },
        description: '',
        discount: 'From ₹499', 
        tagline: 'Kubra, Nova & more' 
    },
    {
        id: 'product6',
        url: 'https://rukminim1.flixcart.com/image/832/832/xif0q/backpack/y/5/n/-original-imagh3w9ct2pn9yd.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/832/832/xif0q/backpack/y/5/n/-original-imagh3w9ct2pn9yd.jpeg?q=70',
        title: {
            shortTitle: 'Bags , Backpacks, Wallets & Belts',
            longTitle: '55 L Laptop Backpack Laptop backpack spacy unisex backpack fits upto 16 Inches/college bag/school bag  (Black)'
        },
        price: {
            mrp: 3999 ,
            cost: 739,
            discount: '81%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Best Seller'
    },
     {
        id: 'product7',
        url: 'https://rukminim1.flixcart.com/image/832/832/xif0q/backpack/b/o/z/10-0-unisex-bag-with-rain-cover-office-school-college-businessa-original-imaghrwehgjctpvv.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/832/832/xif0q/backpack/b/o/z/10-0-unisex-bag-with-rain-cover-office-school-college-businessa-original-imaghrwehgjctpvv.jpeg?q=70',
        title: {
            shortTitle: 'Bags , Backpacks, Wallets & Belts',
            longTitle: 'Large 45 L Laptop Backpack Unisex Bag with rain cover Office/School/College/BusinessC-45L  (Multicolor)'
        },
        price: {
            mrp: 4999,
            cost: 769,
            discount: '84%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Best Seller'
    },
     {
        id: 'product8',
        url: 'https://rukminim1.flixcart.com/image/832/832/kbv4fww0/wallet-card-wallet/a/5/s/wllet01a-abc01-wallet-usl-original-imaft3gzdzazatrv.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/832/832/kbv4fww0/wallet-card-wallet/a/5/s/wllet01a-abc01-wallet-usl-original-imaft3gzdzazatrv.jpeg?q=70',
        title: {
            shortTitle: 'Bags, Wallets & Belts',
            longTitle: 'Men Black Genuine Leather Wallet - Mini  (10 Card Slots)'
        },
        price: {
            mrp: 999,
            cost: 199,
            discount: '80%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Best Seller'
    },
     {
        id: 'product9',
        url: 'https://rukminim1.flixcart.com/image/832/832/xif0q/wallet-card-wallet/l/w/n/men-casual-rfid-genuine-leather-card-and-cash-wallet-1-11-hh707-original-imagkgmvf6fzzumz.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/832/832/xif0q/wallet-card-wallet/l/w/n/men-casual-rfid-genuine-leather-card-and-cash-wallet-1-11-hh707-original-imagkgmvf6fzzumz.jpeg?q=70',
        title: {
            shortTitle: 'Bags, Wallets & Belts',
            longTitle: 'Men Casual, Formal, Ethnic, Evening/Party, Trendy, Travel Tan Genuine Leather RFID Wallet - Mini  (11 Card Slots)'
        },
        price: {
            mrp:1499,
            cost:483,
            discount: '67%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Special price'
    },
     {
        id: 'product10',
        url: 'https://rukminim1.flixcart.com/image/416/416/k0o69ow0/card-holder/s/d/z/black-automatic-pop-up-slim-aluminium-debit-credit-card-holder-original-imafket9u6wtebwv.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/k0o69ow0/card-holder/s/d/z/black-automatic-pop-up-slim-aluminium-debit-credit-card-holder-original-imafket9u6wtebwv.jpeg?q=70',
        title: {
            shortTitle: 'HomeBags, Wallets & Belts',
            longTitle: 'StealODeal Black Automatic Pop Up Slim Aluminium Debit/Credit 6 Card Holder  (Set of 1, Black)'
        },
        price: {
            mrp: 499,
            cost:206 ,
            discount: '58%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Special price'
    },
     {
        id: 'product11',
        url: 'https://rukminim1.flixcart.com/image/416/416/k6b2snk0/sandwich-maker/p/j/k/flipkart-smartbuy-smns750b1-smns750b1-original-imafzsnu9kcgspqs.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/k6b2snk0/sandwich-maker/p/j/k/flipkart-smartbuy-smns750b1-smns750b1-original-imafzsnu9kcgspqs.jpeg?q=70',
        title: {
            shortTitle: 'Sandwich Makers,Home & Kitchen',
            longTitle: 'Flipkart SmartBuy Grill Sandwich Maker'
        },
        price: {
            mrp:1425 ,
            cost: 799,
            discount: '40%'
        },
        description: '',
        discount: 'Grab Now',
        tagline:'Flipkart SmartBuy'
    },
     {
        id: 'product12',
        url: 'https://rukminim1.flixcart.com/image/416/416/keiuxzk0/sandwich-maker/d/f/j/marwall-non-stick-grill-toast-sandwich-maker-original-imafv6fchxkyk77g.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/keiuxzk0/sandwich-maker/d/f/j/marwall-non-stick-grill-toast-sandwich-maker-original-imafv6fchxkyk77g.jpeg?q=70',
        title: {
            shortTitle: 'Sandwich Makers,Home & Kitchen',
            longTitle: 'MyKitchen Non-stick Grill Sandwich Toaster, Gas Compatible Grill  (Black)'
        },
        price: {
            mrp: 799,
            cost:294 ,
            discount: '63%'
        },
        description: '',
        discount: 'Grab Now',
        tagline:'MyKitchen,Nova & more'
    },
     {
        id: 'product13',
        url: 'https://rukminim1.flixcart.com/image/416/416/xif0q/sandwich-maker/d/k/k/crunch-sandwich-toaster-750-w-with-4-slice-non-stick-candes-original-imaggfwjd6cycsv4.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/sandwich-maker/d/k/k/crunch-sandwich-toaster-750-w-with-4-slice-non-stick-candes-original-imaggfwjd6cycsv4.jpeg?q=70',
        title: {
            shortTitle: 'Sandwich Makers,Home & Kitchen',
            longTitle: 'Candes Crunch Sandwich Toaster, 750 W with 4 Slice Non-Stick Toast  (Black, Silver)'
        },
        price: {
            mrp: 1599,
            cost: 1049,
            discount: '34%'
        },
        description: '',
        discount: 'Grab Now',
        tagline:'Candes,MyKitchen,Nova & more'
    },
     {
        id: 'product14',
        url: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70',
        title: {
            shortTitle: 'Sandwich Makers,Home & Kitchen',
            longTitle: 'Flipkart SmartBuy Panini Grill Sandwich Maker'
        },
        price: {
            mrp: 2599,
            cost: 1299,
            discount: '50%'
        },
        description: '',
        discount: 'From ₹499',
        tagline: 'MyKitchen,Nova & more'
    },
     {
        id: 'product15',
        url: 'https://rukminim1.flixcart.com/image/416/416/k0o69ow0/electric-kettle/a/z/n/flipkart-smartbuy-eks1500b-original-imafkezmkfjydsnh.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/k0o69ow0/electric-kettle/a/z/n/flipkart-smartbuy-eks1500b-original-imafkezmkfjydsnh.jpeg?q=70',
        title: {
            shortTitle: 'Home & Kitchen,Electric Jug(heater)/Travel Kettles',
            longTitle: 'Flipkart SmartBuy EKS1500B Electric Kettle  (1.5 L, Black)'
        },
        price: {
            mrp: 899,
            cost: 499,
            discount: '44%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'MyKitchen,Pigeon & more'
    },
     {
        id: 'product16',
        url: 'https://rukminim1.flixcart.com/image/416/416/xif0q/hair-straightener/h/e/x/-original-imagky3myujy5rar.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/hair-straightener/h/e/x/-original-imagky3myujy5rar.jpeg?q=70',
        title: {
            shortTitle: 'Hair Straighteners,Health & Personal Care Appliance',
            longTitle: 'PHILIPS HP8302/06 Hair Straightener  (Black)'
        },
        price: {
            mrp: 1395,
            cost: 949,
            discount: '31%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Special price'
    },
     {
        id: 'product17',
        url: 'https://rukminim1.flixcart.com/image/416/416/kmds4nk0/hair-straightener/7/s/k/hs4104-havells-original-imagfazugkyr3umm.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kmds4nk0/hair-straightener/7/s/k/hs4104-havells-original-imagfazugkyr3umm.jpeg?q=70',
        title: {
            shortTitle: 'Hair Straighteners,Health & Personal Care Appliance',
            longTitle: 'HAVELLS HS 4104 HS4104 Hair Straightener  (Pink)'
        },
        price: {
            mrp: 1495,
            cost: 799,
            discount: '46%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Best Seller'
    },
     {
        id: 'product18',
        url: 'https://rukminim1.flixcart.com/image/416/416/xif0q/hair-straightener/c/p/b/2-in-1-hair-styler-straightener-and-crimper-nhs-885-05-nova-original-imagh8yqumfec2uk.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/hair-straightener/c/p/b/2-in-1-hair-styler-straightener-and-crimper-nhs-885-05-nova-original-imagh8yqumfec2uk.jpeg?q=70',
        title: {
            shortTitle: 'Hair Straighteners,Health & Personal Care Appliance, NOVA Hair Straighteners',
            longTitle: 'NOVA NHS 885/05 Hair Straightener  (Black, Gold)'
        },
        price: {
            mrp:2199,
            cost: 1199,
            discount: '45%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Special price'
    },
     {
        id: 'product19',
        url: 'https://rukminim1.flixcart.com/image/416/416/khkvukw0-0/hair-dryer/q/e/9/2-in-1-straightner-and-hair-dryer-combo-balkumund-original-imafxjzqgk3k9ahn.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/khkvukw0-0/hair-dryer/q/e/9/2-in-1-straightner-and-hair-dryer-combo-balkumund-original-imafxjzqgk3k9ahn.jpeg?q=70',
        title: {
            shortTitle: 'Hair Straighteners,Health & Personal Care Appliance,FINIVIVA Hair Stylers',
            longTitle: 'FINIVIVA Personal Care Appliance Combo (Hair Straightener, Hair Dryer) 2 in 1 Styling Combo Kit of Hair Straightener, Curler and Hair Dryer - Pink Hair Styler  (Multicolor)'
        },
        price: {
            mrp:999,
            cost:510,
            discount: '48%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Special price'
    },
     {
        id: 'product20',
        url: 'https://rukminim1.flixcart.com/image/416/416/l2f20sw0/hair-dryer/l/o/x/premium-silky-shine-hot-and-cold-foldable-nhp-8205-nova-original-imagdrv8f8dg4bpk.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/l2f20sw0/hair-dryer/l/o/x/premium-silky-shine-hot-and-cold-foldable-nhp-8205-nova-original-imagdrv8f8dg4bpk.jpeg?q=70',
        title: {
            shortTitle: 'Hair Dryers,Health & Personal Care Appliance',
            longTitle: 'NOVA NHP 8205 Hair Dryer  (1400 W, Purple)'
        },
        price: {
            mrp: 1095,
            cost:799 ,
            discount: '27%'
        },
        description: '',
         discount: 'Grab Now',
        tagline: 'Special price'
    },
    {
        id: 'product21',
        url: 'https://rukminim1.flixcart.com/image/416/416/l4vnbm80/bed/z/4/p/queen-213-na-no-162-3-particle-board-yes-109-fk8017-flipkart-original-imagfzsxnjzfqwkw.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/l4vnbm80/bed/z/4/p/queen-213-na-no-162-3-particle-board-yes-109-fk8017-flipkart-original-imagfzsxnjzfqwkw.jpeg?q=70',
        title: {
            shortTitle: 'Home,FurnitureBeds & Mor',
            longTitle: 'Amazon Perfect Homes Opus Engineered Wood Queen Box Bed  (Finish Color - Dark Espresso, Delivery Condition - Knock Down)'
        },
        price: {
            mrp: 15299,
            cost: 12290,
            discount: '19%'
        },
        description: '',
        discount: 'Special Price',
        tagline: 'Opus:Bed Size:Queen'
    },
    {
        id: 'product22',
        url: 'https://rukminim1.flixcart.com/image/416/416/xif0q/bed/o/s/1/queen-160-5-na-no-217-7-mdf-yes-102-5-wewb7860spetra-wakefit-80-original-imagghdkqepzbddu.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/bed/o/s/1/queen-160-5-na-no-217-7-mdf-yes-102-5-wewb7860spetra-wakefit-80-original-imagghdkqepzbddu.jpeg?q=70',
        title: {
            shortTitle: 'FurnitureBeds & MoreBedsWakefit Beds',
            longTitle: 'Wakefit Petra Engineered Wood Queen Box Bed  (Finish Color - Walnut, Delivery Condition - Knock Down)'
        },
        price: {
            mrp: 18399,
            cost: 13431,
            discount: '27%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Petra Bed Size:Queen'
    },
    {
        id: 'product23',
        url: 'https://rukminim1.flixcart.com/image/416/416/xif0q/bed/l/m/d/queen-203-na-no-160-particle-board-yes-95-ndfkbdqwenvalan-neudot-original-imaghv76jhea2zps.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/bed/l/m/d/queen-203-na-no-160-particle-board-yes-95-ndfkbdqwenvalan-neudot-original-imaghv76jhea2zps.jpeg?q=70',
        title: {
            shortTitle: 'Home , FurnitureBeds & More',
            longTitle: 'NEUDOT Valancia Queen Engineered Wood Queen Box Bed  (Finish Color - WENGE, Delivery Condition - Knock Down)'
        },
        price: {
            mrp: 26500,
            cost: 12997,
            discount: '50%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Valancia Queen Bed Size:Queen'
    },
    {
        id: 'product24',
        url: 'https://rukminim1.flixcart.com/image/416/416/kxgfzbk0/dressing-table/m/1/u/1200-3600-particle-board-6100-mavis-multicolor-anikaa-8000-wenge-original-imag9wnznutw9nax.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kxgfzbk0/dressing-table/m/1/u/1200-3600-particle-board-6100-mavis-multicolor-anikaa-8000-wenge-original-imag9wnznutw9nax.jpeg?q=70',
        title: {
            shortTitle: 'Home,Furniture,Tables,Dressing Tables',
            longTitle: 'ANIKAA Mavis Dressing Wall Mirror with Shelves/Wall Hanging Dressing Mirrors with Shelf for Living Room Bedroom/Wall Mounted Dressing Mirror for Wall Decor (Wenge/White) Engineered Wood Dressing Table  (Finish Color - , Wenge-White, DIY(Do-It-Yourself))'
        },
        price: {
            mrp: 7999,
            cost: 2944,
            discount: '63%'
        },
        description: '',
        discount: 'Extra ₹255 off',
        tagline: 'Dressing Tables'
    },
    {
        id: 'product25',
        url: 'https://rukminim1.flixcart.com/image/416/416/xif0q/dressing-table/f/c/p/25-35-plywood-85-0m02-brown-bandana-furnitures-91-brown-original-imagkfwdzpzt8gnk.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/dressing-table/f/c/p/25-35-plywood-85-0m02-brown-bandana-furnitures-91-brown-original-imagkfwdzpzt8gnk.jpeg?q=70',
        title: {
            shortTitle: 'Home, Furniture, Tables, Dressing Tables',
            longTitle: 'Bandana furnitures Solid Wood Dressing Table  (Finish Color - , Brown, DIY(Do-It-Yourself))'
        },
        price: {
            mrp: 7500,
            cost: 4499,
            discount: '40%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Bandana furnitures'
    },
    {
        id: 'product26',
        url: 'https://rukminim1.flixcart.com/image/416/416/xif0q/hair-straightener/h/e/x/-original-imagky3myujy5rar.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/hair-straightener/h/e/x/-original-imagky3myujy5rar.jpeg?q=70',
        title: {
            shortTitle: 'Hair Straighteners,Health & Personal Care Appliance',
            longTitle: 'PHILIPS HP8302/06 Hair Straightener  (Black)'
        },
        price: {
            mrp: 1395,
            cost: 949,
            discount: '31%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Special price'
    },
    {
        id: 'product27',
        url: 'https://rukminim1.flixcart.com/image/416/416/xif0q/dressing-table/b/g/t/-original-imaggfxq3fagyhfu.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/dressing-table/b/g/t/-original-imaggfxq3fagyhfu.jpeg?q=70',
        title: {
            shortTitle: 'Home, Furniture, Tables, Dressing Tables',
            longTitle: 'NEUDOT PETRA DST Engineered Wood Dressing Table  (Finish Color - , TEAK, Knock Down)'
        },
        price: {
            mrp: 21900,
            cost: 11899,
            discount: '45%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Brand:NEUDOT'
    },
    {
        id: 'product28',
        url: 'https://rukminim1.flixcart.com/image/416/416/xif0q/dressing-table/z/m/p/particle-board-divine-milky-walnut-brown-trevi-milky-walnut-original-imaghr9vfn5yfyqm.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/dressing-table/z/m/p/particle-board-divine-milky-walnut-brown-trevi-milky-walnut-original-imaghr9vfn5yfyqm.jpeg?q=70',
        title: {
            shortTitle: 'Home, Furniture, TablesDressing, Tables',
            longTitle: 'Trevi Divine Engineered Wood Dressing Table  (Finish Color - , Milky Walnut, Knock Down)'
        },
        price: {
            mrp: 26499,
            cost: 9999,
            discount: '62%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Brand:Trevi'
    },
    {
        id: 'product29',
        url: 'https://rukminim1.flixcart.com/image/416/416/xif0q/wardrobe-closet/r/x/2/-original-imaggr65wfqnkcs2.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/wardrobe-closet/r/x/2/-original-imaggr65wfqnkcs2.jpeg?q=70',
        title: {
            shortTitle: 'Hair Straighteners,Health & Personal Care Appliance,FINIVIVA Hair Stylers',
            longTitle: 'FINIVIVA Personal Care Appliance Combo (Hair Straightener, Hair Dryer) 2 in 1 Styling Combo Kit of Hair Straightener, Curler and Hair Dryer - Pink Hair Styler  (Multicolor)'
        },
        price: {
            mrp: 33999,
            cost: 16090,
            discount: '52%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Amazon Perfect Homes'
    },
    {
        id: 'product30',
        url: 'https://rukminim1.flixcart.com/image/416/416/xif0q/coffee-table/w/8/v/38-particle-board-116-15-ct02-wallnut-ad-av-60-wallnut-original-imagnm8guayu7syv.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/coffee-table/w/8/v/38-particle-board-116-15-ct02-wallnut-ad-av-60-wallnut-original-imagnm8guayu7syv.jpeg?q=70',
        title: {
            shortTitle: 'Home,Furniture,Tables,Coffee Tables',
            longTitle: 'AD & AV CT02_WALLNUT Engineered Wood Coffee Table  (Finish Color - WALLNUT, Knock Down)'
        },
        price: {
            mrp: 4999,
            cost: 2850,
            discount: '42%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'AD & AV'
    },
    {
        id: 'product31',
        url: 'https://rukminim1.flixcart.com/image/416/416/xif0q/office-study-table/s/e/r/40-particle-board-engineered-wood-st4wen00ss2m-flipkart-perfect-original-imagm3cb7zggznhe.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/office-study-table/s/e/r/40-particle-board-engineered-wood-st4wen00ss2m-flipkart-perfect-original-imagm3cb7zggznhe.jpeg?q=70',
        title: {
            shortTitle: 'Home, Furniture,Tables,Office,Study Table',
            longTitle: 'Amazon Perfect Homes Dalton Engineered Wood Study Table  (Free Standing, Finish Color - Chocolate Wenge, Knock Down)'
        },
        price: {
            mrp: 10999,
            cost: 5215,
            discount: '52%'
        },
        description: '',
        discount: 'Special Price',
        tagline: 'Amazon Perfect Homes'
    },
    {
        id: 'product32',
        url: 'https://rukminim1.flixcart.com/image/416/416/xif0q/bed/o/s/1/queen-160-5-na-no-217-7-mdf-yes-102-5-wewb7860spetra-wakefit-80-original-imagghdkqepzbddu.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/bed/o/s/1/queen-160-5-na-no-217-7-mdf-yes-102-5-wewb7860spetra-wakefit-80-original-imagghdkqepzbddu.jpeg?q=70',
        title: {
            shortTitle: 'FurnitureBeds & More Beds,Wakefit Beds',
            longTitle: 'Wakefit Petra Engineered Wood Queen Box Bed  (Finish Color - Walnut, Delivery Condition - Knock Down)'
        },
        price: {
            mrp: 18399,
            cost: 13431,
            discount: '27%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Petra Bed Size:Queen'
    },
    {
        id: 'product33',
        url: 'https://rukminim1.flixcart.com/image/416/416/kqo3onk0/side-table/u/7/x/mdf-sfm0210-end-table-search-for-merch-black-original-imag4hzh3jushf6z.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kqo3onk0/side-table/u/7/x/mdf-sfm0210-end-table-search-for-merch-black-original-imag4hzh3jushf6z.jpeg?q=70',
        title: {
            shortTitle: 'Home , FurnitureBeds & More',
            longTitle: 'HomeFurnitureTablesSide TablesSearchForMerch Side Tables'
        },
        price: {
            mrp: 2199,
            cost: 849,
            discount: '61%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Hurry, Only a few left!'
    },
    {
        id: 'product34',
        url: 'https://rukminim1.flixcart.com/image/416/416/kw3v0cw0/side-table/q/i/9/mango-wood-planter-101-side-table-smarts-collection-brown-original-imag8vf4j5gfwn47.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kw3v0cw0/side-table/q/i/9/mango-wood-planter-101-side-table-smarts-collection-brown-original-imag8vf4j5gfwn47.jpeg?q=70',
        title: {
            shortTitle: 'Home, Furniture, Tables, Side Tables, Smarts collection, Side Tables',
            longTitle: 'Smarts collection Wooden Plant Stand for Balcony Living Room Indoor Outdoor Plant Stand Foldable Display Rack Storage Rack for Patio Garden Yard (3 Tier, Brown) Solid Wood Side Table  (Finish Color - brown, Pre-assembled)'
        },
        price: {
            mrp: 870,
            cost: 419,
            discount: '51%'
        },
        description: '',
        discount: 'Special price',
        tagline: 'planter 101'
    },
    {
        id: 'product35',
        url: 'https://rukminim1.flixcart.com/image/416/416/xif0q/dressing-table/f/c/p/25-35-plywood-85-0m02-brown-bandana-furnitures-91-brown-original-imagkfwdzpzt8gnk.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/dressing-table/f/c/p/25-35-plywood-85-0m02-brown-bandana-furnitures-91-brown-original-imagkfwdzpzt8gnk.jpeg?q=70',
        title: {
            shortTitle: 'Home, Furniture, Tables, Dressing Tables',
            longTitle: 'Bandana furnitures Solid Wood Dressing Table  (Finish Color - , Brown, DIY(Do-It-Yourself))'
        },
        price: {
            mrp: 7500,
            cost: 4499,
            discount: '40%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Bandana furnitures'
    },
    {
        id: 'product36',
        url: 'https://rukminim1.flixcart.com/image/416/416/kvba7bk0/side-table/8/h/e/20-25-rosewood-sheesham-1-a-895-corner-table-umar-enterprises-10-original-imag88ug3dw6mqhq.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kvba7bk0/side-table/8/h/e/20-25-rosewood-sheesham-1-a-895-corner-table-umar-enterprises-10-original-imag88ug3dw6mqhq.jpeg?q=70',
        title: {
            shortTitle: 'Home,Furniture, TablesSide ,Tables ,Umar Enterprises Side Tables',
            longTitle: 'Umar Enterprises Wooden Mini Corner Rack Side Table Home Decor End Table Shelves for Living Room & Bedroom laundry & Garden rack corner Engineered Wood Corner Table  (Finish Color - Brown, Pre-assembled)'
        },
        price: {
            mrp: 850,
            cost: 525,
            discount: '38%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Special price'
    },
    {
        id: 'product37',
        url: 'https://rukminim1.flixcart.com/image/416/416/xif0q/dressing-table/b/g/t/-original-imaggfxq3fagyhfu.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/dressing-table/b/g/t/-original-imaggfxq3fagyhfu.jpeg?q=70',
        title: {
            shortTitle: 'Home, Furniture, Tables, Dressing Tables',
            longTitle: 'NEUDOT PETRA DST Engineered Wood Dressing Table  (Finish Color - , TEAK, Knock Down)'
        },
        price: {
            mrp: 21900,
            cost: 11899,
            discount: '45%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Brand:NEUDOT'
    },
    {
        id: 'product38',
        url: 'https://rukminim1.flixcart.com/image/416/416/khdqnbk0/rack-shelf/x/m/d/wci-is-wood-craft-india-original-imafxegqj6tye4ck.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/khdqnbk0/rack-shelf/x/m/d/wci-is-wood-craft-india-original-imafxegqj6tye4ck.jpeg?q=70',
        title: {
            shortTitle: 'Home,Home Decor,Wall Decor ,Items, Wall Shelves',
            longTitle: 'wood craft india Armaan MDF Wall Mount Wall Shelves For Living Room Home Decor-(Brown) MDF (Medium Density Fiber) Wall Shelf  (Number of Shelves - 3, Brown)'
        },
        price: {
            mrp: 1299,
            cost: 499,
            discount: '61%'
        },
        description: '',
        discount: 'Special Price',
        tagline: 'wood craft india'
    },
    {
        id: 'product39',
        url: 'https://rukminim1.flixcart.com/image/416/416/kihqz680-0/rack-shelf/c/z/n/slh-46-sunwood-enterprises-original-imafy9nrcbf3fhgr.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kihqz680-0/rack-shelf/c/z/n/slh-46-sunwood-enterprises-original-imafy9nrcbf3fhgr.jpeg?q=70',
        title: {
            shortTitle: 'Home,Home Decor,Wall Decor Items,Wall Shelves,wood craft india ,Wall Shelve',
            longTitle: 'wood craft india Armaan Home Decorative and U Rack wall Shelf Number of Shelf 3 (White) MDF (Medium Density Fiber) Wall Shelf  (Number of Shelves - 3, White)'
        },
        price: {
            mrp: 1999,
            cost: 474,
            discount: '76%'
        },
        description: '',
        discount: 'Special Price',
        tagline: 'wood craft india'
    },
    {
        id: 'product40',
        url: 'https://rukminim1.flixcart.com/image/416/416/kl5hh8w0/rack-shelf/y/n/3/ra02-onlinehandicraftgalery-original-imagyckfu7yucptv.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kl5hh8w0/rack-shelf/y/n/3/ra02-onlinehandicraftgalery-original-imagyckfu7yucptv.jpeg?q=70',
        title: {
            shortTitle: 'Home,Home Decor,Wall Decor Items,Wall Shelves,Dream Shop, Wall Shelves',
            longTitle: 'Dream Shop U Shape Wall Shelf Wooden Wall Shelf  (Number of Shelves - 3, White)'
        },
        price: {
            mrp: 999,
            cost: 445,
            discount: '55%'
        },
        description: '',
        discount: 'Special Price',
        tagline: 'Dream Shop'
    },
    {
        id: 'product41',
        url: 'https://rukminim1.flixcart.com/image/832/832/kwl0akw0/shoe-rack/y/7/3/37-59-5-5-fmsc09-sbn-dbn-nilkamal-sandy-brown-dark-brown-63-5-original-imag987gzhym4zmt.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/832/832/kwl0akw0/shoe-rack/y/7/3/37-59-5-5-fmsc09-sbn-dbn-nilkamal-sandy-brown-dark-brown-63-5-original-imag987gzhym4zmt.jpeg?q=70',
        title: {
            shortTitle: 'Home,Furniture ,Shoe Racks ,Nilkamal Shoe Rack',
            longTitle: 'Nilkamal Plastic Shoe Stand  (4 Shelves, DIY(Do-It-Yourself))'
        },
        price: {
            mrp: 3200,
            cost: 2490,
            discount: '22%'
        },
        description: '',
        discount: 'Special Price',
        tagline: 'Amazon Perfect Homes'
    },
    {
        id: 'product42',
        url: 'https://rukminim1.flixcart.com/image/832/832/k3ncakw0/room-divider-partition/f/p/w/mango-wood-scrd-005-free-standing-artesia-brown-original-imafmq7t5uakrgau.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/832/832/k3ncakw0/room-divider-partition/f/p/w/mango-wood-scrd-005-free-standing-artesia-brown-original-imafmq7t5uakrgau.jpeg?q=70',
        title: {
            shortTitle: 'Home,Furniture,Furniture Accessories,Room Divider, Partitions Artesia Room Divider, Partitions Artesia Handcraft',
            longTitle: 'Artesia Handcrafted 5 Panel Wooden Room Partition & Room Divider (Brown) Solid Wood Decorative Screen Partition Solid Wood Decorative Screen Partition  (Floor Standing, Finish Color - Brown, 5, Pre-assembled)'
        },
        price: {
            mrp: 18999,
            cost: 7649,
            discount: '57%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Perfect Homes'
    },
    {
        id: 'product43',
        url: 'https://rukminim1.flixcart.com/image/832/832/xif0q/kitchen-cabinet/a/x/q/350-2-rosewood-sheesham-thakat-angel-furniture-honey-1200-original-imagkfjfx6y5zzfq.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/832/832/xif0q/kitchen-cabinet/a/x/q/350-2-rosewood-sheesham-thakat-angel-furniture-honey-1200-original-imagkfjfx6y5zzfq.jpeg?q=70',
        title: {
            shortTitle: 'Home,Furniture Cabinets, Kitchen Cabinets, Angel Furniture Kitchen Cabinets',
            longTitle: 'Angel Furniture Sheesham Wood Solid Wood Crockery Cabinet  (Finish Color - Honey, Pre-assembled)'
        },
        price: {
            mrp: 19999,
            cost: 16461,
            discount: '17%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Hurry up, Only a few left!'
    },
    {
        id: 'product44',
        url: 'https://rukminim1.flixcart.com/image/832/832/k0e66q80/outdoor-chair/j/g/s/pp-polypropylene-ornate-supreme-maroon-original-imafgu2uag58dfja.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/832/832/k0e66q80/outdoor-chair/j/g/s/pp-polypropylene-ornate-supreme-maroon-original-imafgu2uag58dfja.jpeg?q=70',
        title: {
            shortTitle: 'Home, Furniture Chairs ,Outdoor Chairs ,Supreme Outdoor Chairs',
            longTitle: 'Supreme Ornate for Home & Garden Plastic Outdoor Chair  (Black & Red, Set of 4, DIY(Do-It-Yourself))'
        },
        price: {
            mrp: 15999,
            cost: 10490,
            discount: '34%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Perfect Chair'
    },
    {
        id: 'product45',
        url: 'https://rukminim1.flixcart.com/image/832/832/l4n2oi80/dining-chair/9/g/g/-original-imagfhzfjmkthpfz.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/832/832/l4n2oi80/dining-chair/9/g/g/-original-imagfhzfjmkthpfz.jpeg?q=70',
        title: {
            shortTitle: 'Home, Furniture, Chairs,Dining Chairs, Kendalwood Furniture, Dining Chair',
            longTitle: 'Kendalwood Furniture Living Room Chair Study Chair Multipurpose chair Solid Wood Dining Chair  (Set of 2, Finish Color - Black Finish)'
        },
        price: {
            mrp: 13998,
            cost: 5743,
            discount: '58%'
        },
        description: '',
        discount: 'Hurry up, Only Few Left',
        tagline: 'Amazing furnitures'
    },
    {
        id: 'product46',
        url: 'https://rukminim1.flixcart.com/image/832/832/xif0q/dining-chair/y/k/l/brown-pvc-dining-sofa-chair-jolly-brown-original-imagh7q9jnphpanr.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/832/832/xif0q/dining-chair/y/k/l/brown-pvc-dining-sofa-chair-jolly-brown-original-imagh7q9jnphpanr.jpeg?q=70',
        title: {
            shortTitle: 'Home, Furniture, Chairs, Dining Chairs, JOLLY Dining Chairs',
            longTitle: 'JOLLY Chairs set of 5 Pcs, Home, Kitchen, Room, Strong and Sturdy Plastic Dining Chair  (Set of 5, Finish Color - Brown)'
        },
        price: {
            mrp: 7000,
            cost: 2992,
            discount: '57%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Pefect for your Home'
    },
    {
        id: 'product47',
        url: 'https://rukminim1.flixcart.com/image/832/832/ktyp8cw0/dining-set/b/t/x/teak-finish-rosewood-sheesham-square-4-seater-md-dnt-p22-original-imag76qmzfvk6gy4.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/832/832/ktyp8cw0/dining-set/b/t/x/teak-finish-rosewood-sheesham-square-4-seater-md-dnt-p22-original-imag76qmzfvk6gy4.jpeg?q=70',
        title: {
            shortTitle: 'Home, Furniture, Dining Tables & Sets, Dining Sets, Suncrown Furniture Dining Sets',
            longTitle: 'Suncrown Furniture Sheesham Solid Wood 4 Seater Dining Set  (Finish Color -Teak Finish, DIY(Do-It-Yourself))'
        },
        price: {
            mrp: 21929,
            cost: 15299,
            discount: '30%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Brand:Suncrown'
    },
    {
        id: 'product48',
        url: 'https://rukminim1.flixcart.com/image/832/832/jhxqfm80/shoe-rack/g/7/x/sr4wen00401p-perfect-homes-by-flipkart-original-imaf5q3gnrxuety8.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/832/832/jhxqfm80/shoe-rack/g/7/x/sr4wen00401p-perfect-homes-by-flipkart-original-imaf5q3gnrxuety8.jpeg?q=70',
        title: {
            shortTitle: 'Home, Furniture, Shoe Racks & More, Shoe Rack Amazon Perfect, Homes Shoe Rack Amazon Perfect',
            longTitle: 'Perfect Homes Cole Large Shoe Rack  (Brown, 6 Shelves, Knock Down)'
        },
        price: {
            mrp: 7699,
            cost: 5690,
            discount: '26%'
        },
        description: '',
        discount: 'Special Price',
        tagline: 'Amazon perfect'
    },
    {
        id: 'product49',
        url: 'https://rukminim1.flixcart.com/image/832/832/l3uhvgw0/recliner/v/c/e/-original-imagevrqgnkvsehm.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/832/832/l3uhvgw0/recliner/v/c/e/-original-imagevrqgnkvsehm.jpeg?q=70',
        title: {
            shortTitle: 'Home, Furniture, Sofas, Recliners, Home by nilkamal Recliners',
            longTitle: 'Home by nilkamal Marieta Leather Manual Recliner  (Finish Color - Brown, Knock Down)'
        },
        price: {
            mrp: 111900,
            cost: 60000,
            discount: '46%'
        },
        description: '',
        discount: 'Special Price',
        tagline: 'Nilkamal Recliners'
    },
    {
        id: 'product50',
        url: 'https://rukminim1.flixcart.com/image/832/832/kxtaxzk0/sofa-sectional/y/2/4/symmetrical-183-brown-jute-185-155-sbsep201809-balaji-wooden-original-imafdbczjyzxfk5p.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/832/832/kxtaxzk0/sofa-sectional/y/2/4/symmetrical-183-brown-jute-185-155-sbsep201809-balaji-wooden-original-imafdbczjyzxfk5p.jpeg?q=70',
        title: {
            shortTitle: 'Home,Furniture Sofas, Sofas & Sectionals,Balaji Wooden Sofas & Sectionals',
            longTitle: 'Balaji Wooden Wooden Fabric 6 Seater Sofa  (Finish Color - Provincial Teak, Pre-assembled)'
        },
        price: {
            mrp: 80000,
            cost: 59988,
            discount: '25%'
        },
        description: '',
        discount: 'Special Price',
        tagline: 'Balaji Sofas'
    },
    {
        id: 'product51',
        url: 'https://rukminim1.flixcart.com/image/832/832/k0lbdzk0/recliner/e/h/3/blue-carbon-steel-56101502sd00676-godrej-interio-original-imafkch7bfdarurf.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/832/832/k0lbdzk0/recliner/e/h/3/blue-carbon-steel-56101502sd00676-godrej-interio-original-imafkch7bfdarurf.jpeg?q=70',
        title: {
            shortTitle: 'Home,Furniture,Sofas Recliners,Godrej Interio Recliners',
            longTitle: 'Godrej Interio Fabric Manual Recliner  (Finish Color - Blue, Knock Down)'
        },
        price: {
            mrp: 106948,
            cost: 58990,
            discount: '44%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Godrej Interio'
    },
    {
        id: 'product52',
        url: 'https://rukminim1.flixcart.com/image/832/832/jmf76vk0/sofa-set/e/g/n/cream-chenille-alex321d-3-2-2-1-bharat-lifestyle-cream-original-imaf9c5zj9bdbmus.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/832/832/jmf76vk0/sofa-set/e/g/n/cream-chenille-alex321d-3-2-2-1-bharat-lifestyle-cream-original-imaf9c5zj9bdbmus.jpeg?q=70',
        title: {
            shortTitle: 'Home,Furniture,Sofas,Sofa Sets,Bharat Lifestyle Sofa Sets',
            longTitle: 'Bharat Lifestyle Alex Fabric 3 + 2 + 2 + 1 Sofa Set  (Cream, DIY(Do-It-Yourself))'
        },
        price: {
            mrp: 85999,
            cost: 51109,
            discount: '40%'
        },
        description: '',
        discount: 'Hurry up',
        tagline: 'Bharat Lifestyle Sofa'
    },
    {
        id: 'product53',
        url: 'https://rukminim1.flixcart.com/image/832/832/k3hmj680/curtain/c/r/u/net-ptch-275-net-ptch-eyelet-soulful-creations-original-imafkheqxrraxz37.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/832/832/k3hmj680/curtain/c/r/u/net-ptch-275-net-ptch-eyelet-soulful-creations-original-imafkheqxrraxz37.jpeg?q=70',
        title: {
            shortTitle: 'Home,Home Furnishing,Curtains & Accessories,Curtains, PARADISE HOME DECOR Curtains',
            longTitle: 'PARADISE HOME DECOR 213.3 cm (7 ft) Polyester Door Curtain (Pack Of 2)  (Printed, Yellow)'
        },
        price: {
            mrp: 1499,
            cost: 625,
            discount: '58%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Special Curtains'
    },
    {
        id: 'product54',
        url: 'https://rukminim1.flixcart.com/image/832/832/kr6oeq80/curtain/p/v/f/2-5-flower-net-pink-153-window-2-5-flower-net-pink-ring-rod-original-imag5f9jzpbrw3cs.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/832/832/kr6oeq80/curtain/p/v/f/2-5-flower-net-pink-153-window-2-5-flower-net-pink-ring-rod-original-imag5f9jzpbrw3cs.jpeg?q=70',
        title: {
            shortTitle: 'Home,Home Furnishing,Curtains & Accessories,Curtains,Brand Roots Curtains',
            longTitle: 'Brand Roots 214 cm (7 ft) Tissue Semi Transparent Door Curtain (Pack Of 2)  (Floral, Pink)'
        },
        price: {
            mrp: 1199,
            cost: 499,
            discount: '58%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Transparent Door Curtain'
    },
    {
        id: 'product55',
        url: 'https://rukminim1.flixcart.com/image/832/832/kpedle80/curtain/t/c/z/panel-garden-dr-brown-214-door-hs2pc000992dr-eyelet-home-sizzler-original-imag3n7yayhahavq.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/832/832/kpedle80/curtain/t/c/z/panel-garden-dr-brown-214-door-hs2pc000992dr-eyelet-home-sizzler-original-imag3n7yayhahavq.jpeg?q=70',
        title: {
            shortTitle: 'Home,Home Furnishing,Curtains & Accessories, Curtains,Home Sizzler Curtains',
            longTitle: 'Home Sizzler 153 cm (5 ft) Polyester Room Darkening Window Curtain (Pack Of 2)  (Floral, Brown)'
        },
        price: {
            mrp: 799,
            cost: 299,
            discount: '62%'
        },
        description: '',
        discount: 'Special offer',
        tagline: 'Amazing Curtains'
    },
    {
        id: 'product56',
        url: 'https://rukminim1.flixcart.com/image/832/832/kn7sdjk0/curtain/1/j/q/set-of-2-ac-curtain-11-feet-length-4-5-feet-length-335-long-door-original-imagfy2fkur9xdc8.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/832/832/kn7sdjk0/curtain/1/j/q/set-of-2-ac-curtain-11-feet-length-4-5-feet-length-335-long-door-original-imagfy2fkur9xdc8.jpeg?q=70',
        title: {
            shortTitle: 'Home,Home Furnishing,Curtains & Accessories,Curtains,The Furnishing Tree Curtains',
            longTitle: 'The Furnishing Tree 274 cm (9 ft) PVC Transparent Long Door Curtain Single Curtain  (Plain, Tranceparent)'
        },
        price: {
            mrp: 850,
            cost: 467,
            discount: '45%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Transparent Long Door Curtain'
    },
    {
        id: 'product57',
        url: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/w/b/m/4-307712-puma-white-spectra-green-original-imaghkpmny9hrx6h.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/w/b/m/4-307712-puma-white-spectra-green-original-imaghkpmny9hrx6h.jpeg?q=70',
        title: {
            shortTitle: 'Home,Footwear Mens, Footwear, Casual Shoes, PUMA Casual Shoes',
            longTitle: 'MAPF1 Zenonspeed Lace Up For Men  (White)'
        },
        price: {
            mrp: 9999,
            cost: 8999,
            discount: '10%'
        },
        description: '',
        discount: 'Hurry Up',
        tagline: 'PUMA Casual Shoes'
    },
    {
        id: 'product58',
        url: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/w/l/v/7-art-5009-vast-wragger-tan-original-imagjq3veqvgfhen.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/w/l/v/7-art-5009-vast-wragger-tan-original-imagjq3veqvgfhen.jpeg?q=70',
        title: {
            shortTitle: 'Home,Footwear Mens, Footwear, Casual Shoes, vast wragger Casual Shoes',
            longTitle: 'Stylish Boots For Men  (Tan)'
        },
        price: {
            mrp: 12999,
            cost: 11499,
            discount: '11%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Boots All Want'
    },
    {
        id: 'product59',
        url: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/d/4/z/6-na-boot-6-neeraj-creations-blue-original-imagz7ytfztadxzp.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/d/4/z/6-na-boot-6-neeraj-creations-blue-original-imagz7ytfztadxzp.jpeg?q=70',
        title: {
            shortTitle: 'Home,Footwear,Mens Footwear, Sports Shoes, NEERAJ CREATIONS Sports Shoes',
            longTitle: 'Boots For Men  (Blue)'
        },
        price: {
            mrp: 1499,
            cost: 699,
            discount: '53%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'NEERAJ CREATIONS'
    },
    {
        id: 'product60',
        url: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/z/n/n/8-na-h206-boot-hakkel-white-original-imagz6f2knzvemrh.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/z/n/n/8-na-h206-boot-hakkel-white-original-imagz6f2knzvemrh.jpeg?q=70',
        title: {
            shortTitle: 'Casual Shoes',
            longTitle: 'White Casual Boots For Men Boots For Men  (White)'
        },
        price: {
            mrp: 1299,
            cost: 649,
            discount: '50%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'White shoes for Everyone'
    },


]

module.exports = products;