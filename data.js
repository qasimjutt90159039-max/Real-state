/**
 * Haven Estates - Centralized Real Estate Data Layer & LocalStorage State
 */

const INITIAL_PROPERTIES = [
    {
        id: "prop-1",
        title: "Modern Luxury Villa with Pool",
        type: "Villa",
        purpose: "For Sale",
        price: 450000,
        priceDisplay: "$450,000",
        location: "DHA Phase 1, Bahawalpur",
        city: "Bahawalpur",
        beds: 4,
        baths: 3,
        area: 2500,
        featured: true,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ],
        description: "An architecturally stunning modern villa offering contemporary elegance, private swimming pool, landscaped lawn, high ceilings, Italian marble flooring, and smart home automation throughout.",
        amenities: ["Swimming Pool", "Smart Home Automation", "Private Garden", "Covered Garage (2 Cars)", "Solar Power Setup", "Central Climate Control", "24/7 Gated Security"],
        agent: {
            name: "Qasim Ali",
            role: "Lead Estate Broker",
            phone: "+1 (555) 123-4567",
            email: "qasim.ali@havenestates.com",
            avatar: "QA"
        },
        dateAdded: "2026-08-15"
    },
    {
        id: "prop-2",
        title: "Contemporary City Apartment",
        type: "Apartment",
        purpose: "For Rent",
        price: 1200,
        priceDisplay: "$1,200/mo",
        location: "Model Town, Bahawalpur",
        city: "Bahawalpur",
        beds: 2,
        baths: 2,
        area: 1100,
        featured: true,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ],
        description: "Bright, airy contemporary 2-bedroom apartment with designer kitchen fixtures, private balcony overlooking the city skyline, dedicated underground parking, and access to fitness gym.",
        amenities: ["Balcony View", "Underground Parking", "Gym & Fitness Studio", "High-speed Fiber Internet", "Elevator Access", "Intercom System"],
        agent: {
            name: "David Smith",
            role: "Commercial Specialist",
            phone: "+1 (555) 345-6789",
            email: "david.s@havenestates.com",
            avatarImg: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        dateAdded: "2026-08-20"
    },
    {
        id: "prop-3",
        title: "Spacious Suburban Family Home",
        type: "House",
        purpose: "For Sale",
        price: 320000,
        priceDisplay: "$320,000",
        location: "One Unit, Bahawalpur",
        city: "Bahawalpur",
        beds: 5,
        baths: 4,
        area: 3200,
        featured: true,
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ],
        description: "Generously proportioned 5-bedroom home ideal for larger families, featuring two en-suite master bedrooms, a chef-grade open kitchen, double parking garage, and serene backyard.",
        amenities: ["Backyard Garden", "Double Garage", "Chef's Kitchen", "Fireplace", "Storage Room", "Rooftop Terrace"],
        agent: {
            name: "Qasim Ali",
            role: "Lead Estate Broker",
            phone: "+1 (555) 123-4567",
            email: "qasim.ali@havenestates.com",
            avatar: "QA"
        },
        dateAdded: "2026-08-25"
    },
    {
        id: "prop-4",
        title: "Skyline Luxury Penthouse",
        type: "Apartment",
        purpose: "For Sale",
        price: 780000,
        priceDisplay: "$780,000",
        location: "Gulberg Heights, Lahore",
        city: "Lahore",
        beds: 3,
        baths: 3,
        area: 2800,
        featured: true,
        image: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ],
        description: "Exclusive top-floor penthouse with panoramic city vistas, expansive wrap-around glass walls, private rooftop jacuzzi, and bespoke interior architecture.",
        amenities: ["Private Jacuzzi", "Panoramic Skyline Views", "Private Elevator Key", "Concierge Service", "Smart Thermostat", "Wine Cellar"],
        agent: {
            name: "Sarah Jenkins",
            role: "Luxury Homes Specialist",
            phone: "+1 (555) 234-5678",
            email: "sarah.j@havenestates.com",
            avatarImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        dateAdded: "2026-09-01"
    },
    {
        id: "prop-5",
        title: "Prime Commercial Corporate Plaza",
        type: "Commercial",
        purpose: "For Rent",
        price: 4500,
        priceDisplay: "$4,500/mo",
        location: "Main Boulevard, DHA",
        city: "Bahawalpur",
        beds: 0,
        baths: 4,
        area: 4500,
        featured: false,
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ],
        description: "Modern open-concept commercial floor space ideal for corporate headquarters, IT companies, or financial institutions. Equipped with high-speed fiber conduits and backup generators.",
        amenities: ["Full Power Backup Generator", "High-speed Elevators", "Conference Hall", "Dedicated Basement Parking", "CCTV Security Surveillance"],
        agent: {
            name: "David Smith",
            role: "Commercial Specialist",
            phone: "+1 (555) 345-6789",
            email: "david.s@havenestates.com",
            avatarImg: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        dateAdded: "2026-09-02"
    },
    {
        id: "prop-6",
        title: "Waterfront Serene Retreat Villa",
        type: "Villa",
        purpose: "For Sale",
        price: 620000,
        priceDisplay: "$620,000",
        location: "Canal View, Bahawalpur",
        city: "Bahawalpur",
        beds: 4,
        baths: 4,
        area: 3600,
        featured: true,
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ],
        description: "Wake up to breathtaking water views in this tranquil designer villa. Includes custom hardwood floors, infinity swimming deck, and floor-to-ceiling glass pavilions.",
        amenities: ["Canal View Deck", "Infinity Pool", "Lush Lawn", "Outdoor BBQ Kitchen", "Maid's Quarters", "Multi-zone Audio"],
        agent: {
            name: "Emily Thorne",
            role: "Property Consultant",
            phone: "+1 (555) 456-7890",
            email: "emily.t@havenestates.com",
            avatarImg: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        dateAdded: "2026-09-04"
    },
    {
        id: "prop-7",
        title: "Minimalist Modern Townhouse",
        type: "House",
        purpose: "For Rent",
        price: 1800,
        priceDisplay: "$1,800/mo",
        location: "Cantt Enclave, Bahawalpur",
        city: "Bahawalpur",
        beds: 3,
        baths: 3,
        area: 2100,
        featured: false,
        image: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ],
        description: "Elegant 3-bedroom townhouse situated in a quiet, high-security neighborhood. Features an open layout, solar water heater, modern kitchen, and private garage.",
        amenities: ["Gated Enclave", "Solar Water Heating", "Private Patio", "Attached Garage", "Built-in Wardrobes"],
        agent: {
            name: "Jessica Alba",
            role: "Residential Expert",
            phone: "+1 (555) 678-9012",
            email: "jessica.a@havenestates.com",
            avatarImg: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        dateAdded: "2026-09-05"
    },
    {
        id: "prop-8",
        title: "Prime Residential Development Plot",
        type: "Plot / Land",
        purpose: "For Sale",
        price: 185000,
        priceDisplay: "$185,000",
        location: "Sector B, DHA Phase 2",
        city: "Bahawalpur",
        beds: 0,
        baths: 0,
        area: 4500,
        featured: false,
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ],
        description: "Exceptional 1-Kanal (500 sq. yard) corner residential plot with prime frontage on 60ft wide road. Completely cleared, ready for construction with all utility approvals in place.",
        amenities: ["Corner Plot", "60ft Wide Road Frontage", "Gas & Underground Electricity", "Immediate Possession", "Clear Clean Deed"],
        agent: {
            name: "Michael Chang",
            role: "Investment Advisor",
            phone: "+1 (555) 567-8901",
            email: "michael.c@havenestates.com",
            avatarImg: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        dateAdded: "2026-09-07"
    },
    {
        id: "prop-9",
        title: "Luxury Royal Palms Estate",
        type: "Villa",
        purpose: "For Sale",
        price: 950000,
        priceDisplay: "$950,000",
        location: "Golf & Country Club, Bahawalpur",
        city: "Bahawalpur",
        beds: 6,
        baths: 6,
        area: 5200,
        featured: true,
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ],
        description: "Majestic luxury estate facing the 18-hole championship golf course. Boasts 6 suites, indoor heated swimming pool, private cinema, wine cellar, and lush manicured grounds.",
        amenities: ["Golf Course Frontage", "Indoor Heated Pool", "Private Cinema", "Staff Quarters", "4-Car Showroom Garage", "Smart Security"],
        agent: {
            name: "Qasim Ali",
            role: "Lead Estate Broker",
            phone: "+1 (555) 123-4567",
            email: "qasim.ali@havenestates.com",
            avatar: "QA"
        },
        dateAdded: "2026-09-08"
    }
];

const INITIAL_AGENTS = [
    {
        id: "agent-1",
        name: "Qasim Ali",
        role: "Lead Estate Broker",
        specialty: "Luxury Villas & Prime Land",
        avatar: "QA",
        phone: "+1 (555) 123-4567",
        email: "qasim.ali@havenestates.com",
        sold: "120+",
        experience: "15 Yrs",
        badge: "Top Broker",
        bio: "With over 15 years leading real estate acquisitions and luxury development sales, Qasim is the trusted advisor to premier buyers and investors.",
        socials: { linkedin: "#", twitter: "#", envelope: "mailto:qasim.ali@havenestates.com" }
    },
    {
        id: "agent-2",
        name: "Sarah Jenkins",
        role: "Luxury Homes Specialist",
        specialty: "Penthouses & Mansions",
        avatarImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        phone: "+1 (555) 234-5678",
        email: "sarah.j@havenestates.com",
        sold: "85+",
        experience: "8 Yrs",
        badge: "Luxury Specialist",
        bio: "Sarah brings an unmatched eye for architectural design and high-net-worth property marketing, closing record-breaking transactions.",
        socials: { linkedin: "#", twitter: "#", envelope: "mailto:sarah.j@havenestates.com" }
    },
    {
        id: "agent-3",
        name: "David Smith",
        role: "Commercial Specialist",
        specialty: "Corporate Buildings & Commercial Rentals",
        avatarImg: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        phone: "+1 (555) 345-6789",
        email: "david.s@havenestates.com",
        sold: "60+",
        experience: "10 Yrs",
        badge: "Commercial Lead",
        bio: "Specializing in corporate leasing, retail spaces, and mixed-use commercial projects with deep analytical market valuation.",
        socials: { linkedin: "#", twitter: "#", envelope: "mailto:david.s@havenestates.com" }
    },
    {
        id: "agent-4",
        name: "Emily Thorne",
        role: "Property Consultant",
        specialty: "Waterfront & Suburban Family Homes",
        avatarImg: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        phone: "+1 (555) 456-7890",
        email: "emily.t@havenestates.com",
        sold: "45+",
        experience: "5 Yrs",
        badge: "Client Choice",
        bio: "Emily is dedicated to ensuring families find their dream forever homes with a friendly, patient, and highly attentive approach.",
        socials: { linkedin: "#", twitter: "#", envelope: "mailto:emily.t@havenestates.com" }
    },
    {
        id: "agent-5",
        name: "Michael Chang",
        role: "Investment Advisor",
        specialty: "ROI Portfolios & Land Acquisition",
        avatarImg: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        phone: "+1 (555) 567-8901",
        email: "michael.c@havenestates.com",
        sold: "95+",
        experience: "12 Yrs",
        badge: "ROI Expert",
        bio: "Michael provides institutional and private clients with data-driven portfolio management and strategic land appreciation guidance.",
        socials: { linkedin: "#", twitter: "#", envelope: "mailto:michael.c@havenestates.com" }
    },
    {
        id: "agent-6",
        name: "Jessica Alba",
        role: "Residential Expert",
        specialty: "Townhouses & Urban Living",
        avatarImg: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        phone: "+1 (555) 678-9012",
        email: "jessica.a@havenestates.com",
        sold: "70+",
        experience: "7 Yrs",
        badge: "Urban Specialist",
        bio: "With a strong focus on urban lifestyle and modern amenities, Jessica guides first-time and relocating buyers to ideal properties.",
        socials: { linkedin: "#", twitter: "#", envelope: "mailto:jessica.a@havenestates.com" }
    }
];

// LocalStorage Management Object
const HavenDB = {
    // Properties
    getProperties: function() {
        const stored = localStorage.getItem('haven_properties');
        if (!stored) {
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
        const formattedPrice = property.purpose === 'For Rent' 
            ? `$${priceNum.toLocaleString()}/mo` 
            : `$${priceNum.toLocaleString()}`;

        const newProperty = {
            id: 'prop-' + Date.now(),
            dateAdded: new Date().toISOString().split('T')[0],
            gallery: property.gallery && property.gallery.length ? property.gallery : [property.image],
            price: priceNum,
            priceDisplay: formattedPrice,
            beds: Number(property.beds) || 0,
            baths: Number(property.baths) || 0,
            area: Number(property.area) || 0,
            featured: Boolean(property.featured),
            ...property
        };
        // Add to front so newest appears first
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

    // Agents
    getAgents: function() {
        const stored = localStorage.getItem('haven_agents');
        if (!stored) {
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

    // Inquiries (Contact Form & Agent Messages)
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

    // Newsletter Subscriptions
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

    // Reset database to initial sample data
    resetDatabase: function() {
        localStorage.setItem('haven_properties', JSON.stringify(INITIAL_PROPERTIES));
        localStorage.setItem('haven_agents', JSON.stringify(INITIAL_AGENTS));
        localStorage.removeItem('haven_favorites');
        window.dispatchEvent(new CustomEvent('haven:propertiesUpdated', { detail: INITIAL_PROPERTIES }));
    }
};

window.HavenDB = HavenDB;
