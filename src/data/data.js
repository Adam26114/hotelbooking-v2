export const steps = ["Search", "Select", "Review", "Payment", "Confirm"];
export const properties = {
    BHS: {
        code: "BHS",
        name: "Bay Hotel Singapore",
        description: "",
        image: "http://placehold.it/200x133",
    },
    BHCM: {
        code: "BHCM",
        name: "Bay Hotel Ho Chi Minh",
        description: "",
        image: "http://placehold.it/200x133",
    },
    BIDNG: {
        code: "BIDNG",
        name: "Bay Inn Danang",
        description: "",
        image: "http://placehold.it/200x133",
    },
};
export const currencies = {
    SGD: { code: "SGD", description: "Singapore Dollars(S$)", default: true },
    MYR: { code: "MYR", description: "Malaysian Ringgit(RM)", default: false },
    USD: { code: "USD", description: "American Dollars($)", default: false },
};
export const roomTypes = {
    DXQ: {
        code: "DXQ",
        name: "Deluxe Room Queen Beds(23sqm)",
        description:
            "Nothing lulls one into slumber quite so effortlessly as our Deluxe Rooms' uber beding experience. This room includes complimentary WIFI access, unlimited local calls and minibar (replenished once daily). There is no capacity for Extra Bed.",
        guestLimit: 2,
        image: "http://placehold.it/200x133",
    },
};
export const rateTypes = {
    FLASH: {
        code: "FLASH",
        name: "Flash Deal",
        quotedAmount: "168.00",
        taxAmount: "29.74",
        currencyCode: "SGD",
    },
    BAR3: {
        code: "BAR3",
        name: "Best Available Rate",
        quotedAmount: "180.00",
        taxAmount: "31.86",
        currencyCode: "SGD",
    },
    BUSS: {
        code: "BUSS",
        name: "Business @ Bay",
        quotedAmount: "201.00",
        taxAmount: "35.58",
        currencyCode: "SGD",
    },
};

export const currencyList = [currencies["SGD"], currencies["MYR"], currencies["USD"]];
export const propertyList = [properties["BHS"], properties["BHCM"], properties["BIDNG"]];

export const app = {
    appContext: {
        steps: steps,
        bookingFormHeader: "Hotel Details",
        shoppingCartHeader: "Booking Summary",
        propertyInfoHeader: "Hotel Information",
        sellOptionsFilterHeader: "Filter Sell Options",
    },
    data: {
        properties: propertyList,
        currencies: currencyList,
        cart: {
            items: [
                {
                    roomType: "DXQ",
                    roomTypeDesc: roomTypes["DXQ"].name,
                    rateType: "FLASH",
                    rateTypeDesc: rateTypes["FLASH"].name,
                    currencyCode: rateTypes["FLASH"].currencyCode,
                    roomCharges: rateTypes["FLASH"].quotedAmount,
                    otherCharges: rateTypes["FLASH"].taxAmount,
                },
                {
                    roomType: "DXQ",
                    roomTypeDesc: roomTypes["DXQ"].name,
                    rateType: "BAR3",
                    rateTypeDesc: rateTypes["BAR3"].name,
                    currencyCode: rateTypes["BAR3"].currencyCode,
                    roomCharges: rateTypes["BAR3"].quotedAmount,
                    otherCharges: rateTypes["BAR3"].taxAmount,
                },
            ],
            summary: {
                currencyCode: "SGD",
                subTotal: "336.00",
                otherTotal: "59.48",
                total: "395.48",
            },
        },
        propertyInfo: {
            image: "http://placehold.it/200x133",
            name: "Qikinn Hotel",
            description:
                "Situated at the gateway to Sentosa and in the heart of it all, Bay Hotel Singapore sports a diamante-inspired façade and sets the stage for a nice stay in a modern, boutique hotel. This 10-storey hotel comes fully equipped with its own set of modern comforts and business facilities and is home to 43 standard rooms, 284 deluxe rooms and 6 suites. Its 333 well-appointed rooms are equipped with panoramic bay windows, offering stunning views of Sentosa or lush views of Mount Faber. Bay Hotel Singapore is a non-smoking hotel and will appeal to both business and leisure travellers",
        },
        selloptions: [
            {
                roomInfo: roomTypes["DXQ"],
                rates: rateTypes,
            },
            {
                roomInfo: roomTypes["DXQ"],
                rates: rateTypes,
            },
            {
                roomInfo: roomTypes["DXQ"],
                rates: rateTypes,
            },
        ],
    },
};

export const components = [
    { name: "steps", template: "#steps_tpl" },
    { name: "header", template: "#header_tpl" },
    { name: "property_selection", template: "#property_selection_tpl" },
    { name: "currency_selection", template: "#currency_selection_tpl" },
    { name: "booking_form", template: "#booking_form_tpl" },
    { name: "shopping_cart", template: "#shopping_cart_tpl" },
    { name: "sidebar", template: "#sidebar_tpl" },
    { name: "property_info", template: "#property_info_tpl" },
    { name: "selloptions_filter", template: "#selloptions_filter_tpl" },
    { name: "selloptions_pagination", template: "#selloptions_pagination_tpl" },
    { name: "room_information", template: "#room_information_tpl" },
    { name: "number_of_rooms", template: "#number_of_rooms_tpl" },
    { name: "rate_table", template: "#rate_table_tpl" },
    { name: "selloption_item", template: "#selloption_item_tpl" },
    { name: "selloptions", template: "#selloptions_tpl" },
    { name: "main", template: "#main_tpl" },
    { name: "footer", template: "#footer_tpl" },
];

// $(document).ready(function () {
//     initComponents();
//     var appTemplate = $("#app_tpl").html();
//     var appMain = Handlebars.compile(appTemplate);
//     $("#app").html(appMain(app));
// });

// function initComponents() {
//     if (components) {
//         for (i in components) {
//             var component = components[i];
//             if (component) {
//                 initTemplate(component.name, component.template);
//             }
//         }
//     }
// }

// function initTemplate(templateName, templateSourceID) {
//     if (templateName && templateSourceID) {
//         var templateElement = $(templateSourceID);
//         if (templateElement) {
//             var templateSource = templateElement.html();
//             Handlebars.registerPartial(templateName, templateSource);
//         }
//     }
// }
