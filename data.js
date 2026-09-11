/**
 * City Property Links — Bahawalpur
 * Centralized Real Estate Data Layer & LocalStorage State
 * Authorized DHA Bahawalpur Registered Dealer #15 | 5-Star Rated
 */

const AGENCY_INFO = {
    name: "City Property Links",
    shortName: "City Property Links",
    tagline: "DHA Bahawalpur Registered Dealer #15 | 5-Star Rated",
    category: "Real Estate Agency / Property Broker",
    rating: "5.0",
    ratingStars: "★★★★★",
    ratingDetail: "5-Star Rating in DHA Bahawalpur Published Rating List",
    dhaRegNumber: "15",
    address: "Office #9, Al-Madina Commercial Center, Airport Road, near Meezan Bank, Bahawalpur Cantt, Bahawalpur",
    city: "Bahawalpur",
    province: "Punjab, Pakistan",
    phone: "0303-6448400",
    phoneDisplay: "0303-6448400",
    phoneLink: "tel:03036448400",
    whatsapp: "923036448400",
    whatsappDisplay: "+92 303 6448400",
    whatsappLink: "https://wa.me/923036448400?text=Hello%20City%20Property%20Links%2C%20I%20am%20interested%20in%20Bahawalpur%20properties",
    email: "info@citypropertylinks.com",
    registeredDealerContact: "Izhaar Hussain Khan",
    ceoName: "Husnain Izhar Malik Kamran",
    timing: "Mon - Sat: 9:30 AM - 8:00 PM (Contact business to confirm current timings)",
    aboutSummary: "City Property Links provides real estate services in Bahawalpur, helping clients explore residential and commercial property opportunities. Our focus is on transparent dealing, professional guidance and helping clients make informed property decisions.",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13854.551061737847!2d71.6881944!3d29.3855556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b90fbb62241e3%3A0xe6bf45e54d868771!2sAirport%20Rd%2C%20Bahawalpur%20Cantt%2C%20Bahawalpur%2C%20Punjab!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
};

const BAHAWALPUR_AREAS = [
    "DHA Bahawalpur",
    "Model Town",
    "Satellite Town",
    "Airport Road",
    "Yazman Road",
    "Noor Mahal Road",
    "Khayaban-e-Ali Housing Society"
];

const AGENCY_SERVICES = [
    {
        id: "srv-dha",
        title: "DHA Bahawalpur Properties",
        subtitle: "Registered Dealer #15",
        badge: "Official 5-Star Dealer",
        icon: "fa-certificate",
        color: "from-amber-600 to-amber-800",
        description: "Official buying, selling, and file transfer services for residential and commercial plots in all sectors of DHA Bahawalpur."
    },
    {
        id: "srv-residential",
        title: "Residential Properties",
        subtitle: "Houses for Sale & Rent",
        badge: "Prime Living",
        icon: "fa-house-chimney",
        color: "from-blue-600 to-indigo-700",
        description: "Curated portfolio of brand-new luxury villas, family houses, and rental portions across Model Town, Satellite Town, and Cantt."
    },
    {
        id: "srv-commercial",
        title: "Commercial Properties",
        subtitle: "Plazas & Retail Hubs",
        badge: "High ROI",
        icon: "fa-building-columns",
        color: "from-slate-700 to-slate-900",
        description: "Prime commercial plots, multi-storey commercial buildings, and retail showroom leases on Airport Road and main boulevards."
    },
    {
        id: "srv-plots",
        title: "Plots & Land Investment",
        subtitle: "1 Kanal, 10 Marla, 5 Marla",
        badge: "Clear Title",
        icon: "fa-map-location-dot",
        color: "from-emerald-600 to-teal-700",
        description: "Verified residential and commercial plots with clear registry deeds, immediate possession, and confirmed utility readiness."
    },
    {
        id: "srv-consultation",
        title: "Property Consultation & Verification",
        subtitle: "Transparent Advice",
        badge: "Legal Security",
        icon: "fa-handshake-angle",
        color: "from-purple-600 to-indigo-800",
        description: "Expert guidance on market trends, property valuation, legal deed verification, and allotment record checks before purchase."
    },
    {
        id: "srv-investment",
        title: "Strategic Property Investment",
        subtitle: "Capital Growth",
        badge: "Maximum Yield",
        icon: "fa-chart-line",
        color: "from-rose-600 to-red-700",
        description: "Portfolio structuring for overseas and local investors seeking secure long-term capital appreciation in Bahawalpur."
    }
];

const INITIAL_PROPERTIES = [
    {
        id: "prop-1",
        title: "1 Kanal Luxury Family House",
        type: "House",
        purpose: "For Sale",
        price: 38500000,
        priceDisplay: "PKR 3.85 Crore",
        location: "Sector A, DHA Bahawalpur",
        city: "DHA Bahawalpur",
        beds: 5,
        baths: 6,
        area: 4500,
        areaUnit: "1 Kanal (4,500 sqft)",
        featured: true,
        network: "DHA Bahawalpur Reg. #15",
        networkPhone: "0303-6448400",
        statusBadge: "Verified DHA Listing",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ],
        description: "Brand new 1 Kanal architectural luxury home situated in Sector A, DHA Bahawalpur. Verified and offered through City Property Links (DHA Reg #15). Includes 5 master bedrooms with attached designer bathrooms, double kitchens fitted with imported appliances, servant quarters, solid ash wood doors, and front lawn.",
        amenities: ["1 Kanal Corner Facing", "Double Designer Kitchens", "Servant Quarters with Bath", "Imported Spanish Tiles", "Underground Electricity", "24/7 DHA Security Patrol", "Spacious 3-Car Parking Porch"],
        agent: {
            name: "Izhaar Hussain Khan",
            role: "Registered Dealer (DHA Reg #15)",
            network: "City Property Links",
            phone: "0303-6448400",
            phoneLink: "tel:03036448400",
            whatsappLink: "https://wa.me/923036448400?text=Hello%20Izhaar%20Khan%2C%20I%20am%20inquiring%20about%201%20Kanal%20House%20in%20Sector%20A%20DHA%20Bahawalpur",
            email: "izhaar@citypropertylinks.com",
            avatar: "IK"
        },
        dateAdded: "2026-08-15"
    },
    {
        id: "prop-2",
        title: "10 Marla Modern Designer House",
        type: "House",
        purpose: "For Sale",
        price: 24000000,
        priceDisplay: "PKR 2.4 Crore",
        location: "Block B, Model Town, Bahawalpur",
        city: "Model Town",
        beds: 4,
        baths: 4,
        area: 2250,
        areaUnit: "10 Marla (2,250 sqft)",
        featured: true,
        network: "City Property Links",
        networkPhone: "0303-6448400",
        statusBadge: "Prime Model Town",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ],
        description: "Contemporary double-storey 10 Marla house in central Model Town, Bahawalpur. Designed with open American kitchen, 4 master bedrooms, designer gypsum ceilings, covered car porch for 2 vehicles, rooftop terrace, and clear legal registry documents.",
        amenities: ["Covered Car Porch (2 Cars)", "American Open Kitchen", "Rooftop Open Terrace", "Sui Gas & Clean Water", "Walking Distance to Commercial Market", "Clear Ownership Deed"],
        agent: {
            name: "Izhar Balouch",
            role: "Senior Property Consultant",
            network: "City Property Links",
            phone: "0303-6448400",
            phoneLink: "tel:03036448400",
            whatsappLink: "https://wa.me/923036448400?text=Hello%20Izhar%20Balouch%2C%20I%20am%20inquiring%20about%2010%20Marla%20House%20in%20Model%20Town",
            email: "izhar.balouch@citypropertylinks.com",
            avatar: "IB"
        },
        dateAdded: "2026-08-20"
    },
    {
        id: "prop-3",
        title: "1 Kanal Ready-to-Build Residential Plot",
        type: "Plot / Land",
        purpose: "For Sale",
        price: 8500000,
        priceDisplay: "PKR 85 Lakh",
        location: "Sector C, DHA Bahawalpur",
        city: "DHA Bahawalpur",
        beds: 0,
        baths: 0,
        area: 4500,
        areaUnit: "1 Kanal (4,500 sqft)",
        featured: true,
        network: "DHA Bahawalpur Reg. #15",
        networkPhone: "0303-6448400",
        statusBadge: "Possession Ready",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ],
        description: "Prime 1 Kanal residential plot located on a 60ft wide road in Sector C, DHA Bahawalpur. Direct transfer handled through City Property Links (Official Dealer #15). Possession-ready block with underground utilities, paved roads, and sector park nearby.",
        amenities: ["Possession Ready", "60ft Wide Road Frontage", "Park Facing Block", "Underground Electricity & Water", "Immediate House Construction", "Direct Allocation File"],
        agent: {
            name: "Izhaar Hussain Khan",
            role: "Registered Dealer (DHA Reg #15)",
            network: "City Property Links",
            phone: "0303-6448400",
            phoneLink: "tel:03036448400",
            whatsappLink: "https://wa.me/923036448400?text=Hello%20Izhaar%20Khan%2C%20I%20am%20inquiring%20about%201%20Kanal%20Plot%20in%20Sector%20C%20DHA%20Bahawalpur",
            email: "izhaar@citypropertylinks.com",
            avatar: "IK"
        },
        dateAdded: "2026-08-25"
    },
    {
        id: "prop-4",
        title: "Prime Commercial Plaza Floor Space",
        type: "Commercial",
        purpose: "For Rent",
        price: 120000,
        priceDisplay: "PKR 120,000/mo",
        location: "Airport Road, Bahawalpur Cantt",
        city: "Airport Road",
        beds: 0,
        baths: 2,
        area: 2200,
        areaUnit: "2,200 sqft",
        featured: true,
        network: "City Property Links",
        networkPhone: "0303-6448400",
        statusBadge: "Main Boulevard Cantt",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ],
        description: "Open-concept commercial floor on prime Airport Road, Bahawalpur Cantt, near Al-Madina Commercial Center and Meezan Bank. High footfall commercial hub ideal for corporate offices, software houses, private banks, or medical testing clinics.",
        amenities: ["Airport Road Cantt Frontage", "Elevator & Wide Staircase", "Front Dedicated Parking", "Backup Generator Conduits", "High Footfall Hub", "Commercial Approved"],
        agent: {
            name: "Muhammad Saeed",
            role: "Commercial Property Advisor",
            network: "City Property Links",
            phone: "0303-6448400",
            phoneLink: "tel:03036448400",
            whatsappLink: "https://wa.me/923036448400?text=Hello%20Muhammad%20Saeed%2C%20I%20am%20inquiring%20about%20Commercial%20Floor%20on%20Airport%20Road",
            email: "saeed@citypropertylinks.com",
            avatar: "MS"
        },
        dateAdded: "2026-09-01"
    },
    {
        id: "prop-5",
        title: "5 Marla Brand New Modern House",
        type: "House",
        purpose: "For Sale",
        price: 13500000,
        priceDisplay: "PKR 1.35 Crore",
        location: "Sector B, Satellite Town, Bahawalpur",
        city: "Satellite Town",
        beds: 3,
        baths: 3,
        area: 1125,
        areaUnit: "5 Marla (1,125 sqft)",
        featured: false,
        network: "City Property Links",
        networkPhone: "0303-6448400",
        statusBadge: "Newly Built",
        image: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ],
        description: "Affordable luxury 5 Marla double-storey house in Satellite Town, Bahawalpur. 3 spacious bedrooms with modern bathrooms, drawing room, stylish kitchen, car porch, and ready utility connections in a peaceful family neighborhood.",
        amenities: ["Sui Gas Connected", "Sweet Water Supply", "Car Porch", "Full Marble Flooring", "Family Friendly Block", "Near Schools & Market"],
        agent: {
            name: "Izhar Balouch",
            role: "Senior Property Consultant",
            network: "City Property Links",
            phone: "0303-6448400",
            phoneLink: "tel:03036448400",
            whatsappLink: "https://wa.me/923036448400?text=Hello%20Izhar%20Balouch%2C%20I%20am%20inquiring%20about%205%20Marla%20House%20in%20Satellite%20Town",
            email: "izhar.balouch@citypropertylinks.com",
            avatar: "IB"
        },
        dateAdded: "2026-09-02"
    },
    {
        id: "prop-6",
        title: "10 Marla Prime Commercial Plot",
        type: "Plot / Land",
        purpose: "For Sale",
        price: 16500000,
        priceDisplay: "PKR 1.65 Crore",
        location: "Main Boulevard Commercial, DHA Bahawalpur",
        city: "DHA Bahawalpur",
        beds: 0,
        baths: 0,
        area: 2250,
        areaUnit: "10 Marla Commercial",
        featured: true,
        network: "DHA Bahawalpur Reg. #15",
        networkPhone: "0303-6448400",
        statusBadge: "Commercial Hot Spot",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ],
        description: "Exceptional 10 Marla commercial plot located directly on Main Boulevard, DHA Bahawalpur. Unbeatable capital appreciation potential, ideal for multi-storey retail plaza, corporate office complex, or commercial bank branch.",
        amenities: ["Main Boulevard Commercial Frontage", "DHA Approved Construction Plan", "Maximum Capital Gain Potential", "Official DHA Reg. #15 Transfer", "Wide Commercial Parking Area"],
        agent: {
            name: "Muhammad Saeed",
            role: "Commercial Property Advisor",
            network: "City Property Links",
            phone: "0303-6448400",
            phoneLink: "tel:03036448400",
            whatsappLink: "https://wa.me/923036448400?text=Hello%20Muhammad%20Saeed%2C%20I%20am%20inquiring%20about%2010%20Marla%20Commercial%20Plot%20in%20DHA",
            email: "saeed@citypropertylinks.com",
            avatar: "MS"
        },
        dateAdded: "2026-09-04"
    },
    {
        id: "prop-7",
        title: "1 Kanal Luxury Spanish Villa",
        type: "House",
        purpose: "For Sale",
        price: 32000000,
        priceDisplay: "PKR 3.2 Crore",
        location: "Khayaban-e-Ali Housing Society, Bahawalpur",
        city: "Khayaban-e-Ali",
        beds: 5,
        baths: 5,
        area: 4500,
        areaUnit: "1 Kanal (4,500 sqft)",
        featured: false,
        network: "City Property Links",
        networkPhone: "0303-6448400",
        statusBadge: "Spanish Elevation",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ],
        description: "Breathtaking 1 Kanal Spanish architecture villa in gated Khayaban-e-Ali Housing Society, Bahawalpur. High double-height lounge, imported sanitary fittings, landscaped front lawn, solar power setup, and full security.",
        amenities: ["Spanish Architecture Elevation", "Lush Landscaped Lawn", "Solar System Installed", "Gated Security Community", "Corner Plot Frontage"],
        agent: {
            name: "Husnain Izhar Malik Kamran",
            role: "Chief Executive Officer (CEO)",
            network: "City Property Links",
            phone: "0303-6448400",
            phoneLink: "tel:03036448400",
            whatsappLink: "https://wa.me/923036448400?text=Hello%20Husnain%20Kamran%2C%20I%20am%20inquiring%20about%201%20Kanal%20Spanish%20Villa%20in%20Khayaban-e-Ali",
            email: "ceo@citypropertylinks.com",
            avatar: "HK"
        },
        dateAdded: "2026-09-05"
    },
    {
        id: "prop-8",
        title: "5 Marla Residential Plot (Affordable Investment)",
        type: "Plot / Land",
        purpose: "For Sale",
        price: 3800000,
        priceDisplay: "PKR 38 Lakh",
        location: "Sector D, DHA Bahawalpur",
        city: "DHA Bahawalpur",
        beds: 0,
        baths: 0,
        area: 1125,
        areaUnit: "5 Marla (1,125 sqft)",
        featured: false,
        network: "DHA Bahawalpur Reg. #15",
        networkPhone: "0303-6448400",
        statusBadge: "Best Value DHA",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ],
        description: "Ideal budget-friendly investment plot in Sector D, DHA Bahawalpur. Fast-developing residential sector with high return prospects. Direct transfer with 100% verified documentation guaranteed by City Property Links.",
        amenities: ["Affordable Entry Price", "High Investment Appreciation", "DHA Reg. #15 Guarantee", "Clear Allotment Record"],
        agent: {
            name: "Izhaar Hussain Khan",
            role: "Registered Dealer (DHA Reg #15)",
            network: "City Property Links",
            phone: "0303-6448400",
            phoneLink: "tel:03036448400",
            whatsappLink: "https://wa.me/923036448400?text=Hello%20Izhaar%20Khan%2C%20I%20am%20inquiring%20about%205%20Marla%20Plot%20in%20Sector%20D%20DHA",
            email: "izhaar@citypropertylinks.com",
            avatar: "IK"
        },
        dateAdded: "2026-09-07"
    },
    {
        id: "prop-9",
        title: "Executive 2 Kanal Farmhouse Land Parcel",
        type: "Plot / Land",
        purpose: "For Sale",
        price: 9500000,
        priceDisplay: "PKR 95 Lakh",
        location: "Yazman Road, Bahawalpur",
        city: "Yazman Road",
        beds: 0,
        baths: 0,
        area: 9000,
        areaUnit: "2 Kanal (9,000 sqft)",
        featured: true,
        network: "City Property Links",
        networkPhone: "0303-6448400",
        statusBadge: "Farmhouse Land",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ],
        description: "Picturesque 2 Kanal land parcel located on Yazman Road, minutes away from Bahawalpur city. Ideal for executive farmhouse, fruit orchard, or private weekend getaway with access to sweet canal water and wide carpeted road.",
        amenities: ["Sweet Water Tubewell Supply", "Wide Carpet Road Frontage", "Peaceful Green Environment", "Clear Registry Intiqal", "Electricity Available"],
        agent: {
            name: "Husnain Izhar Malik Kamran",
            role: "Chief Executive Officer (CEO)",
            network: "City Property Links",
            phone: "0303-6448400",
            phoneLink: "tel:03036448400",
            whatsappLink: "https://wa.me/923036448400?text=Hello%20Husnain%20Kamran%2C%20I%20am%20inquiring%20about%202%20Kanal%20Farmhouse%20on%20Yazman%20Road",
            email: "ceo@citypropertylinks.com",
            avatar: "HK"
        },
        dateAdded: "2026-09-08"
    }
];

const INITIAL_AGENTS = [
    {
        id: "agent-1",
        name: "Husnain Izhar Malik Kamran",
        role: "Chief Executive Officer (CEO)",
        badge: "CEO & Principal",
        specialty: "Strategic Investments & DHA Portfolios",
        avatar: "HK",
        phone: "0303-6448400",
        phoneLink: "tel:03036448400",
        whatsappLink: "https://wa.me/923036448400?text=Hello%20Husnain%20Kamran%2C%20I%20want%20to%20consult%20regarding%20property%20investment%20in%20Bahawalpur",
        email: "ceo@citypropertylinks.com",
        sold: "180+",
        experience: "12+ Yrs",
        bio: "Chief Executive Officer of City Property Links. Leading transparent real estate advisory in Bahawalpur, specializing in high-value commercial ventures and DHA property investments.",
        socials: { whatsapp: "https://wa.me/923036448400", phone: "tel:03036448400", envelope: "mailto:ceo@citypropertylinks.com" }
    },
    {
        id: "agent-2",
        name: "Izhaar Hussain Khan",
        role: "Registered Dealer (DHA Reg #15)",
        badge: "DHA Registered Dealer #15",
        specialty: "DHA Bahawalpur Plots, Files & Construction",
        avatar: "IK",
        phone: "0303-6448400",
        phoneLink: "tel:03036448400",
        whatsappLink: "https://wa.me/923036448400?text=Hello%20Izhaar%20Hussain%20Khan%2C%20I%20want%20to%20inquire%20about%20DHA%20Bahawalpur%20files%20and%20plots",
        email: "izhaar@citypropertylinks.com",
        sold: "220+",
        experience: "15+ Yrs",
        bio: "Official registered dealer contact for DHA Bahawalpur (Registration #15) with published 5-star rating. Trusted by hundreds of families and overseas Pakistanis for clear allotment verification.",
        socials: { whatsapp: "https://wa.me/923036448400", phone: "tel:03036448400", envelope: "mailto:izhaar@citypropertylinks.com" }
    },
    {
        id: "agent-3",
        name: "Izhar Balouch",
        role: "Senior Property Consultant",
        badge: "Senior Consultant",
        specialty: "Model Town, Satellite Town & Cantt Houses",
        avatar: "IB",
        phone: "0303-6448400",
        phoneLink: "tel:03036448400",
        whatsappLink: "https://wa.me/923036448400?text=Hello%20Izhar%20Balouch%2C%20I%20need%20assistance%20finding%20a%20house%20in%20Bahawalpur",
        email: "izhar.balouch@citypropertylinks.com",
        sold: "95+",
        experience: "8+ Yrs",
        bio: "Key team member at City Property Links listed on Zameen agency profile. Expert in residential house acquisitions, family villas, and verified rental properties in Bahawalpur.",
        socials: { whatsapp: "https://wa.me/923036448400", phone: "tel:03036448400", envelope: "mailto:izhar.balouch@citypropertylinks.com" }
    },
    {
        id: "agent-4",
        name: "Muhammad Saeed",
        role: "Commercial Property Advisor",
        badge: "Commercial Specialist",
        specialty: "Airport Road & Commercial Plazas",
        avatar: "MS",
        phone: "0303-6448400",
        phoneLink: "tel:03036448400",
        whatsappLink: "https://wa.me/923036448400?text=Hello%20Muhammad%20Saeed%2C%20I%20am%20looking%20for%20commercial%20property%20in%20Bahawalpur",
        email: "saeed@citypropertylinks.com",
        sold: "75+",
        experience: "7+ Yrs",
        bio: "Commercial specialist at City Property Links. Connects business owners, banks, and retailers with prime showroom spaces, commercial plots, and plaza floors on Airport Road.",
        socials: { whatsapp: "https://wa.me/923036448400", phone: "tel:03036448400", envelope: "mailto:saeed@citypropertylinks.com" }
    }
];

// LocalStorage Database & State Management Layer
const HavenDB = {
    // Agency Info
    getAgencyInfo: function() {
        return { ...AGENCY_INFO };
    },

    // Areas
    getAreas: function() {
        return [...BAHAWALPUR_AREAS];
    },

    // Services
    getServices: function() {
        return [...AGENCY_SERVICES];
    },

    // Properties
    getProperties: function() {
        const stored = localStorage.getItem('haven_properties');
        // Force upgrade if legacy data from earlier templates is found
        if (!stored || stored.includes('Beverly Hills') || stored.includes('Manhattan') || stored.includes('Austin') || !stored.includes('City Property Links')) {
            localStorage.setItem('haven_properties', JSON.stringify(INITIAL_PROPERTIES));
            return [...INITIAL_PROPERTIES];
        }
        try {
            return JSON.parse(stored);
        } catch (e) {
            console.error("Failed to parse stored properties:", e);
            return [...INITIAL_PROPERTIES];
        }
    },

    saveProperties: function(properties) {
        localStorage.setItem('haven_properties', JSON.stringify(properties));
        window.dispatchEvent(new CustomEvent('haven:propertiesUpdated', { detail: properties }));
    },

    addProperty: function(property) {
        const properties = this.getProperties();
        const priceNum = Number(property.price) || 0;
        
        // Format PKR price nicely
        let formattedPrice = "";
        if (property.purpose === 'For Rent') {
            formattedPrice = `PKR ${priceNum.toLocaleString()}/mo`;
        } else if (priceNum >= 10000000) {
            formattedPrice = `PKR ${(priceNum / 10000000).toFixed(2)} Crore`;
        } else if (priceNum >= 100000) {
            formattedPrice = `PKR ${(priceNum / 100000).toFixed(2)} Lakh`;
        } else {
            formattedPrice = `PKR ${priceNum.toLocaleString()}`;
        }

        const newProperty = {
            id: 'prop-' + Date.now(),
            dateAdded: new Date().toISOString().split('T')[0],
            gallery: property.gallery && property.gallery.length ? property.gallery : [property.image],
            price: priceNum,
            priceDisplay: formattedPrice,
            beds: Number(property.beds) || 0,
            baths: Number(property.baths) || 0,
            area: Number(property.area) || 0,
            areaUnit: property.areaUnit || `${property.area} sqft`,
            featured: Boolean(property.featured),
            network: property.network || "City Property Links",
            networkPhone: property.networkPhone || "0303-6448400",
            statusBadge: property.statusBadge || "Verified Listing",
            ...property
        };
        properties.unshift(newProperty);
        this.saveProperties(properties);
        return newProperty;
    },

    getPropertyById: function(id) {
        const properties = this.getProperties();
        return properties.find(p => String(p.id) === String(id));
    },

    deleteProperty: function(id) {
        let properties = this.getProperties();
        properties = properties.filter(p => String(p.id) !== String(id));
        this.saveProperties(properties);
    },

    // Agents / Team
    getAgents: function() {
        const stored = localStorage.getItem('haven_agents');
        // Force upgrade if legacy agent data is found
        if (!stored || stored.includes('Jenkins') || stored.includes('David Smith') || !stored.includes('Kamran')) {
            localStorage.setItem('haven_agents', JSON.stringify(INITIAL_AGENTS));
            return [...INITIAL_AGENTS];
        }
        try {
            return JSON.parse(stored);
        } catch (e) {
            return [...INITIAL_AGENTS];
        }
    },

    getAgentByName: function(name) {
        const agents = this.getAgents();
        return agents.find(a => a.name.toLowerCase() === name.toLowerCase()) || agents[0];
    },

    // Favorites
    getFavorites: function() {
        const favs = localStorage.getItem('haven_favorites');
        try {
            return favs ? JSON.parse(favs) : [];
        } catch(e) {
            return [];
        }
    },

    toggleFavorite: function(propId) {
        let favs = this.getFavorites();
        const idStr = String(propId);
        let isFav = false;
        if (favs.includes(idStr)) {
            favs = favs.filter(id => id !== idStr);
            isFav = false;
        } else {
            favs.push(idStr);
            isFav = true;
        }
        localStorage.setItem('haven_favorites', JSON.stringify(favs));
        window.dispatchEvent(new CustomEvent('haven:favoritesUpdated', { detail: { favs, changedId: idStr, isFav } }));
        return isFav;
    },

    isFavorite: function(propId) {
        const favs = this.getFavorites();
        return favs.includes(String(propId));
    },

    // Inquiries
    saveInquiry: function(inquiry) {
        const inquiries = this.getInquiries();
        const record = {
            id: 'inq-' + Date.now(),
            date: new Date().toISOString(),
            ...inquiry
        };
        inquiries.unshift(record);
        localStorage.setItem('haven_inquiries', JSON.stringify(inquiries));
        return record;
    },

    getInquiries: function() {
        const stored = localStorage.getItem('haven_inquiries');
        try {
            return stored ? JSON.parse(stored) : [];
        } catch (e) {
            return [];
        }
    },

    // Subscriptions
    saveSubscription: function(email) {
        const subs = this.getSubscriptions();
        if (!subs.includes(email)) {
            subs.push(email);
            localStorage.setItem('haven_subscriptions', JSON.stringify(subs));
        }
        return true;
    },

    getSubscriptions: function() {
        const stored = localStorage.getItem('haven_subscriptions');
        try {
            return stored ? JSON.parse(stored) : [];
        } catch(e) {
            return [];
        }
    },

    // Reset database to initial authentic Bahawalpur data
    resetDatabase: function() {
        localStorage.setItem('haven_properties', JSON.stringify(INITIAL_PROPERTIES));
        localStorage.setItem('haven_agents', JSON.stringify(INITIAL_AGENTS));
        localStorage.removeItem('haven_favorites');
        window.dispatchEvent(new CustomEvent('haven:propertiesUpdated', { detail: INITIAL_PROPERTIES }));
    }
};

window.AGENCY_INFO = AGENCY_INFO;
window.BAHAWALPUR_AREAS = BAHAWALPUR_AREAS;
window.AGENCY_SERVICES = AGENCY_SERVICES;
window.HavenDB = HavenDB;
window.CityPropertyDB = HavenDB;
