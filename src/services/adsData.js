let categories=[
    {
        id:1,
        name:"Bostad",
        icon:"building"
    },
    {
        id:2,
        name:"Bil",
        icon:"car"
    },
    {
        id:3,
        name:"Elektronik",
        icon:"mobile-alt"
    },
    {
        id:4,
        name:"Underhållning",
        icon:"dice"
    },
    {
        id:5,
        name:"Tjänster",
        icon:"tools"
    },
    {
        id:6,
        name:"Anställning",
        icon:"briefcase"
    }
]

let tags=[
    {
        id:1,
        name:"Fordon"
    },
    {
        id:2,
        name:"Mobiler"
    },
    {
        id:3,
        name:"Personligt"
    },
    {
        id:4,
        name:"Datorer"
    },
    {
        id:5,
        name:"Djur"
    },
    {
        id:6,
        name:"Lägenheter"
    },
]

let ads=[
    {
        id:1,
        title:"First Ads",
        price:2000,
        location:"Stockholm",
        hasPicture:false,
        chatActive:false,
        hasASAP:false,
        categoryId:1,
        tagId:2,
        imageUrl:"https://picsum.photos/200"
    },
    {
        id:2,
        title:"First Ads",
        price:2000,
        location:"Göteborg",
        hasPicture:false,
        chatActive:true,
        hasASAP:false,
        categoryId:2,
        tagId:1,
        imageUrl:"https://picsum.photos/200"
    },
    {
        id:3,
        title:"First Ads",
        price:2000,
        location:"Malmö",
        hasPicture:false,
        chatActive:false,
        hasASAP:false,
        categoryId:1,
        tagId:2,
        imageUrl:"https://picsum.photos/200"
    },
    {
        id:4,
        title:"First Ads",
        price:5000,
        location:"Uppsala",
        hasPicture:true,
        chatActive:true,
        hasASAP:false,
        categoryId:2,
        tagId:1,
        imageUrl:"https://picsum.photos/200"
    },
    {
        id:5,
        title:"First Ads",
        price:5000,
        location:"Gävle",
        hasPicture:false,
        chatActive:false,
        hasASAP:false,
        categoryId:4,
        tagId:1,
        imageUrl:"https://picsum.photos/200"
    },
    {
        id:6,
        title:"First Ads",
        price:5000,
        location:"Umeå",
        hasPicture:true,
        chatActive:true,
        hasASAP:false,
        categoryId:1,
        tagId:2,
        imageUrl:"https://picsum.photos/200"
    },
    {
        id:7,
        title:"First Ads",
        price:3000,
        location:"Karlshamn",
        hasPicture:true,
        chatActive:false,
        hasASAP:false,
        categoryId:5,
        tagId:2,
        imageUrl:"https://picsum.photos/200"
    },
    {
        id:8,
        title:"First Ads",
        price:3000,
        location:"Borlänge",
        hasPicture:true,
        chatActive:true,
        hasASAP:false,
        categoryId:1,
        tagId:2,
        imageUrl:"https://picsum.photos/200"
    },
    {
        id:9,
        title:"First Ads",
        price:3000,
        location:"Visby",
        hasPicture:false,
        chatActive:false,
        hasASAP:false,
        categoryId:1,
        tagId:2,
        imageUrl:"https://picsum.photos/200"
    },
    {
        id:10,
        title:"Tenth Ads",
        price:10000,
        location:"Halmstad",
        hasPicture:true,
        chatActive:true,
        hasASAP:false,
        categoryId:3,
        tagId:2,
        imageUrl:"https://picsum.photos/200"
    },
    {
        id:11,
        title:"Tenth Ads",
        price:10000,
        location:"Östersund",
        hasPicture:true,
        chatActive:false,
        hasASAP:false,
        categoryId:3,
        tagId:2,
        imageUrl:"https://picsum.photos/200"
    },
    {
        id:12,
        title:"Tenth Ads",
        price:10000,
        location:"Jönköping",
        hasPicture:true,
        chatActive:true,
        hasASAP:false,
        categoryId:3,
        tagId:2,
        imageUrl:"https://picsum.photos/200"
    },
    {
        id:13,
        title:"Tenth Ads",
        price:3000,
        location:"Kalmar",
        hasPicture:false,
        chatActive:false,
        hasASAP:false,
        categoryId:3,
        tagId:2,
        imageUrl:"https://picsum.photos/200"
    },
    {
        id:14,
        title:"Tenth Ads",
        price:3000,
        location:"Växjö",
        hasPicture:true,
        chatActive:true,
        hasASAP:false,
        categoryId:3,
        tagId:2,
        imageUrl:"https://picsum.photos/200"
    },
    {
        id:15,
        title:"Tenth Ads",
        price:3000,
        location:"Kiruna",
        hasPicture:true,
        chatActive:false,
        hasASAP:false,
        categoryId:3,
        tagId:2,
        imageUrl:"https://picsum.photos/200"
    },
    {
        id:16,
        title:"Tenth Ads",
        price:3000,
        location:"Nyköping",
        hasPicture:true,
        chatActive:true,
        hasASAP:false,
        categoryId:3,
        tagId:2,
        imageUrl:"https://picsum.photos/200"
    },
    {
        id:17,
        title:"Tenth Ads",
        price:3000,
        location:"Karlstad",
        hasPicture:false,
        chatActive:true,
        hasASAP:false,
        categoryId:3,
        tagId:2,
        imageUrl:"https://picsum.photos/200"
    },
    {
        id:18,
        title:"Tenth Ads",
        price:3000,
        location:"Sundsvall",
        hasPicture:true,
        chatActive:false,
        hasASAP:false,
        categoryId:3,
        tagId:2,
        imageUrl:"https://picsum.photos/200"
    },
    {
        id:19,
        title:"Tenth Ads",
        price:3000,
        location:"Västerås",
        hasPicture:true,
        chatActive:true,
        hasASAP:false,
        categoryId:3,
        tagId:2,
        imageUrl:"https://picsum.photos/200"
    }
]

export function getCategories(){
    return categories;
}

export function getTags(){
    return tags;
}

export function getAds(){
    return ads;
}