/**
 * City Property Links — Global App Controller
 * Authorized DHA Bahawalpur Registered Dealer #15 | 5-Star Rated
 */

const HavenApp = {
    init: function() {
        this.injectGlobalModals();
        this.setupMobileMenu();
        this.setupNewsletterForms();
        this.setupNavbarActiveState();
        this.setupGlobalEventListeners();
    },

    // Show floating toast notification
    showToast: function(message, type = 'success') {
        let toastContainer = document.getElementById('haven-toast-container');
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.id = 'haven-toast-container';
            toastContainer.className = 'fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 max-w-sm pointer-events-none';
            document.body.appendChild(toastContainer);
        }

        const toast = document.createElement('div');
        toast.className = `transform transition-all duration-300 translate-y-8 opacity-0 pointer-events-auto flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-xl text-sm font-medium border ${
            type === 'success' ? 'bg-slate-900 text-white border-slate-800' :
            type === 'error' ? 'bg-red-600 text-white border-red-700' :
            'bg-emerald-700 text-white border-emerald-800'
        }`;

        const icon = type === 'success' ? '<i class="fa-solid fa-circle-check text-emerald-400 text-lg"></i>' :
                     type === 'error' ? '<i class="fa-solid fa-circle-exclamation text-red-200 text-lg"></i>' :
                     '<i class="fa-solid fa-circle-info text-emerald-200 text-lg"></i>';

        toast.innerHTML = `
            ${icon}
            <span class="flex-1 leading-snug">${message}</span>
            <button class="text-slate-400 hover:text-white transition ml-2"><i class="fa-solid fa-xmark"></i></button>
        `;

        toast.querySelector('button').addEventListener('click', () => {
            toast.classList.add('opacity-0', 'translate-y-4');
            setTimeout(() => toast.remove(), 300);
        });

        toastContainer.appendChild(toast);

        requestAnimationFrame(() => {
            toast.classList.remove('translate-y-8', 'opacity-0');
        });

        setTimeout(() => {
            if (toast.parentNode) {
                toast.classList.add('opacity-0', 'translate-y-4');
                setTimeout(() => toast.remove(), 300);
            }
        }, 4000);
    },

    // Inject Global Modals into DOM
    injectGlobalModals: function() {
        if (document.getElementById('global-modals-container')) return;

        const container = document.createElement('div');
        container.id = 'global-modals-container';
        container.innerHTML = `
            <!-- Add Property Modal -->
            <div id="add-property-modal" class="fixed inset-0 z-[9000] hidden items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
                <div class="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8 relative animate-scaleUp">
                    <div class="px-6 py-5 bg-gradient-to-r from-primary to-indigo-800 text-white flex justify-between items-center">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-xl">
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold">List a New Property</h3>
                                <p class="text-indigo-100 text-xs">City Property Links — DHA Bahawalpur Reg. #15</p>
                            </div>
                        </div>
                        <button type="button" class="close-modal-btn w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition">
                            <i class="fa-solid fa-xmark text-lg"></i>
                        </button>
                    </div>

                    <form id="add-property-form" class="p-6 md:p-8 space-y-5 max-h-[80vh] overflow-y-auto">
                        <div>
                            <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Property Title *</label>
                            <input type="text" name="title" required placeholder="e.g. 1 Kanal Luxury House, DHA Sector A" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition">
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Property Type *</label>
                                <select name="type" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition text-slate-700">
                                    <option value="House">House</option>
                                    <option value="Plot / Land">Plot / Land</option>
                                    <option value="Commercial">Commercial (Plaza / Shop)</option>
                                    <option value="Villa">Luxury Villa</option>
                                    <option value="Apartment">Apartment</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Purpose *</label>
                                <select name="purpose" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition text-slate-700">
                                    <option value="For Sale">For Sale</option>
                                    <option value="For Rent">For Rent</option>
                                </select>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Area / Society *</label>
                                <select name="city" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition text-slate-700">
                                    <option value="DHA Bahawalpur">DHA Bahawalpur</option>
                                    <option value="Model Town">Model Town</option>
                                    <option value="Satellite Town">Satellite Town</option>
                                    <option value="Airport Road">Airport Road</option>
                                    <option value="Yazman Road">Yazman Road</option>
                                    <option value="Noor Mahal Road">Noor Mahal Road</option>
                                    <option value="Khayaban-e-Ali">Khayaban-e-Ali Housing Society</option>
                                    <option value="Bahawalpur Cantt">Bahawalpur Cantt</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Price (PKR) *</label>
                                <input type="number" name="price" required min="1000" placeholder="e.g. 38500000 or 120000" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition">
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Exact Location / Sector Address *</label>
                            <input type="text" name="location" required placeholder="e.g. Sector C, DHA Bahawalpur or Block B, Model Town" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition">
                        </div>

                        <div class="grid grid-cols-3 gap-3">
                            <div>
                                <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Bedrooms</label>
                                <input type="number" name="beds" min="0" value="4" class="w-full px-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary transition">
                            </div>
                            <div>
                                <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Bathrooms</label>
                                <input type="number" name="baths" min="0" value="4" class="w-full px-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary transition">
                            </div>
                            <div>
                                <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Area Size (Marla/Kanal)</label>
                                <input type="text" name="areaUnit" value="1 Kanal" placeholder="e.g. 1 Kanal or 10 Marla" class="w-full px-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary transition">
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Image URL</label>
                            <input type="url" name="image" placeholder="https://images.unsplash.com/photo-..." class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary transition">
                            <p class="text-[11px] text-slate-400 mt-1">Leave blank to use a verified high-resolution property photograph automatically.</p>
                        </div>

                        <div>
                            <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Assigned Consultant / Team Member</label>
                            <select name="agentName" id="modal-agent-select" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary transition text-slate-700">
                                <!-- Populated dynamically -->
                            </select>
                        </div>

                        <div>
                            <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Property Description & Highlights</label>
                            <textarea name="description" rows="3" placeholder="Detail sector location, road width, utilities status, construction quality, possession..." class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary transition resize-none"></textarea>
                        </div>

                        <div class="pt-2">
                            <button type="submit" class="w-full bg-primary hover:bg-primaryHover text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-indigo-500/25 transition duration-300 flex items-center justify-center gap-2">
                                <i class="fa-solid fa-cloud-arrow-up"></i> Publish Listing to City Property Links
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <!-- Property Details Modal -->
            <div id="property-details-modal" class="fixed inset-0 z-[9000] hidden items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
                <div class="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8 relative max-h-[90vh] flex flex-col">
                    <div id="property-details-content" class="overflow-y-auto flex-1">
                        <!-- Populated dynamically -->
                    </div>
                </div>
            </div>

            <!-- Contact Agent / Team Modal -->
            <div id="contact-agent-modal" class="fixed inset-0 z-[9000] hidden items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
                <div class="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8 relative">
                    <div class="px-6 py-5 bg-slate-900 text-white flex justify-between items-center">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white">
                                <i class="fa-solid fa-headset"></i>
                            </div>
                            <div>
                                <h3 class="text-lg font-bold">Contact Property Advisor</h3>
                                <p id="agent-modal-subtext" class="text-slate-300 text-xs">City Property Links — Bahawalpur</p>
                            </div>
                        </div>
                        <button type="button" class="close-modal-btn w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition">
                            <i class="fa-solid fa-xmark text-lg"></i>
                        </button>
                    </div>

                    <div id="agent-modal-header" class="p-6 bg-slate-50 border-b border-slate-100 flex items-center gap-4">
                        <!-- Populated dynamically -->
                    </div>

                    <form id="contact-agent-form" class="p-6 md:p-8 space-y-4">
                        <input type="hidden" name="agentName" id="agent-form-name">
                        <input type="hidden" name="propertyRef" id="agent-form-property-ref">

                        <div>
                            <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Your Full Name *</label>
                            <input type="text" name="senderName" required placeholder="e.g. Muhammad Ali" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary transition">
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Phone / WhatsApp Number *</label>
                                <input type="tel" name="senderPhone" required placeholder="0300-1234567" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary transition">
                            </div>
                            <div>
                                <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Email Address</label>
                                <input type="email" name="senderEmail" placeholder="yourname@gmail.com" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary transition">
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Your Inquiry Details *</label>
                            <textarea name="message" rows="3" required placeholder="I am interested in this property. Please share latest demand, transfer procedure, and schedule a site visit..." class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary transition resize-none"></textarea>
                        </div>

                        <div class="pt-2 flex flex-col gap-2.5">
                            <button type="submit" class="w-full bg-primary hover:bg-primaryHover text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-indigo-500/25 transition duration-300 flex items-center justify-center gap-2">
                                <i class="fa-solid fa-paper-plane"></i> Send Direct Inquiry
                            </button>
                            <a id="agent-modal-whatsapp-btn" href="https://wa.me/923036448400" target="_blank" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition flex items-center justify-center gap-2 text-sm shadow">
                                <i class="fa-brands fa-whatsapp text-lg"></i> Quick Chat on WhatsApp (0303-6448400)
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        `;

        document.body.appendChild(container);
        this.populateAgentSelect();
        this.setupModalCloseButtons();
        this.setupAddPropertyForm();
        this.setupContactAgentForm();
    },

    populateAgentSelect: function() {
        const select = document.getElementById('modal-agent-select');
        if (!select) return;

        const agents = HavenDB.getAgents();
        select.innerHTML = agents.map(agent => 
            `<option value="${agent.name}">${agent.name} — ${agent.role}</option>`
        ).join('');
    },

    setupModalCloseButtons: function() {
        document.querySelectorAll('.close-modal-btn').forEach(btn => {
            btn.addEventListener('click', () => this.closeAllModals());
        });

        ['add-property-modal', 'property-details-modal', 'contact-agent-modal'].forEach(id => {
            const modal = document.getElementById(id);
            if (modal) {
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) this.closeAllModals();
                });
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeAllModals();
        });
    },

    openModal: function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden';
        }
    },

    closeAllModals: function() {
        ['add-property-modal', 'property-details-modal', 'contact-agent-modal'].forEach(id => {
            const modal = document.getElementById(id);
            if (modal) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }
        });
        document.body.style.overflow = '';
    },

    openAddPropertyModal: function() {
        this.populateAgentSelect();
        this.openModal('add-property-modal');
    },

    setupAddPropertyForm: function() {
        const form = document.getElementById('add-property-form');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const agentName = formData.get('agentName');
            const agentObj = HavenDB.getAgentByName(agentName);
            const chosenImage = formData.get('image') || "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";

            const newProp = {
                title: formData.get('title'),
                type: formData.get('type'),
                purpose: formData.get('purpose'),
                price: Number(formData.get('price')),
                city: formData.get('city') || 'DHA Bahawalpur',
                location: formData.get('location'),
                beds: Number(formData.get('beds')),
                baths: Number(formData.get('baths')),
                area: Number(formData.get('price')) > 5000000 ? 4500 : 2250,
                areaUnit: formData.get('areaUnit') || '1 Kanal',
                network: "City Property Links",
                networkPhone: "0303-6448400",
                statusBadge: "Verified Listing",
                image: chosenImage,
                gallery: [chosenImage],
                description: formData.get('description') || `Verified property listing offered by City Property Links (DHA Bahawalpur Registered Dealer #15). Clear legal documentation and immediate transfer readiness.`,
                amenities: ["DHA Reg #15 Verified", "Clear Registry Deed", "Car Parking", "Electricity & Water Ready", "24/7 Security"],
                featured: true,
                agent: {
                    name: agentObj.name,
                    role: agentObj.role,
                    network: "City Property Links",
                    phone: "0303-6448400",
                    phoneLink: "tel:03036448400",
                    whatsappLink: "https://wa.me/923036448400",
                    email: agentObj.email,
                    avatar: agentObj.avatar
                }
            };

            HavenDB.addProperty(newProp);
            form.reset();
            this.closeAllModals();
            this.showToast(`🎉 Property successfully listed with City Property Links! It is now live on the website.`, 'success');
        });
    },

    openPropertyDetails: function(propertyId) {
        const prop = HavenDB.getPropertyById(propertyId);
        if (!prop) {
            this.showToast('Property details not found', 'error');
            return;
        }

        const container = document.getElementById('property-details-content');
        const isFav = HavenDB.isFavorite(prop.id);
        const agentAvatarHtml = prop.agent?.avatarImg 
            ? `<img src="${prop.agent.avatarImg}" alt="${prop.agent.name}" class="w-14 h-14 rounded-full object-cover border-2 border-white shadow">`
            : `<div class="w-14 h-14 rounded-full bg-primary text-white font-bold flex items-center justify-center text-lg shadow">${prop.agent?.avatar || 'IK'}</div>`;

        const waText = encodeURIComponent(`Hello City Property Links, I am inquiring about "${prop.title}" (${prop.priceDisplay}) located at ${prop.location}. Please provide availability and transfer details.`);
        const waLink = `https://wa.me/923036448400?text=${waText}`;

        container.innerHTML = `
            <div class="relative h-72 md:h-96 w-full overflow-hidden bg-slate-900">
                <img src="${prop.image}" alt="${prop.title}" class="w-full h-full object-cover">
                <button type="button" class="close-modal-btn absolute top-5 right-5 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition">
                    <i class="fa-solid fa-xmark text-lg"></i>
                </button>
                <div class="absolute top-5 left-5 flex flex-wrap gap-2">
                    <span class="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white ${prop.purpose === 'For Rent' ? 'bg-teal-600' : 'bg-primary'} shadow-md">
                        ${prop.purpose}
                    </span>
                    <span class="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-slate-800 shadow-md">
                        ${prop.type}
                    </span>
                    <span class="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-900/90 text-amber-300 shadow-md flex items-center gap-1.5">
                        <i class="fa-solid fa-certificate text-amber-400"></i> DHA Reg #15 (5-Star)
                    </span>
                </div>
                <div class="absolute bottom-5 left-5 bg-slate-950/85 backdrop-blur-md text-white px-5 py-2.5 rounded-2xl font-bold text-2xl shadow-xl">
                    ${prop.priceDisplay}
                </div>
            </div>

            <div class="p-6 md:p-8 space-y-6">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                    <div>
                        <p class="text-primary font-semibold text-sm mb-1"><i class="fa-solid fa-location-dot mr-1.5"></i> ${prop.location}</p>
                        <h2 class="text-2xl md:text-3xl font-bold text-slate-900">${prop.title}</h2>
                        <div class="mt-2 inline-flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
                            <span class="text-emerald-700 font-bold"><i class="fa-solid fa-shield-check"></i> City Property Links</span>
                            <span>•</span>
                            <span>DHA Reg #15</span>
                            <span>•</span>
                            <span>Direct Helpline: <a href="tel:03036448400" class="text-primary font-bold hover:underline">0303-6448400</a></span>
                        </div>
                    </div>
                    <div class="flex flex-wrap items-center gap-3">
                        <button onclick="HavenApp.toggleFavFromCard('${prop.id}', this)" class="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:text-red-500 hover:border-red-200 font-medium text-sm flex items-center gap-2 transition ${isFav ? 'text-red-500' : ''}">
                            <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart text-red-500"></i> ${isFav ? 'Saved' : 'Save'}
                        </button>
                        <a href="${waLink}" target="_blank" class="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition flex items-center gap-2">
                            <i class="fa-brands fa-whatsapp text-base"></i> WhatsApp
                        </a>
                        <button onclick="HavenApp.openContactAgentModal('${prop.agent?.name || 'Izhaar Hussain Khan'}', '${prop.title}')" class="px-5 py-2.5 rounded-xl bg-primary hover:bg-primaryHover text-white font-bold text-sm shadow-md transition flex items-center gap-2">
                            <i class="fa-solid fa-paper-plane"></i> Contact Advisor
                        </button>
                    </div>
                </div>

                <!-- Stats Grid -->
                <div class="grid grid-cols-3 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center">
                    <div>
                        <span class="text-slate-400 text-xs block mb-1 uppercase font-semibold"><i class="fa-solid fa-bed text-primary mr-1"></i> Bedrooms</span>
                        <span class="text-xl font-bold text-slate-800">${prop.beds > 0 ? prop.beds : 'N/A (Plot)'}</span>
                    </div>
                    <div>
                        <span class="text-slate-400 text-xs block mb-1 uppercase font-semibold"><i class="fa-solid fa-bath text-primary mr-1"></i> Bathrooms</span>
                        <span class="text-xl font-bold text-slate-800">${prop.baths > 0 ? prop.baths : 'N/A'}</span>
                    </div>
                    <div>
                        <span class="text-slate-400 text-xs block mb-1 uppercase font-semibold"><i class="fa-solid fa-vector-square text-primary mr-1"></i> Size / Dimension</span>
                        <span class="text-xl font-bold text-slate-800">${prop.areaUnit || (prop.area + ' sqft')}</span>
                    </div>
                </div>

                <!-- Description -->
                <div>
                    <h3 class="text-lg font-bold text-slate-900 mb-2">Listing Overview & Details</h3>
                    <p class="text-slate-600 text-sm leading-relaxed">${prop.description}</p>
                </div>

                <!-- Amenities -->
                ${prop.amenities && prop.amenities.length ? `
                <div>
                    <h3 class="text-lg font-bold text-slate-900 mb-3">Features & Clearances</h3>
                    <div class="flex flex-wrap gap-2">
                        ${prop.amenities.map(amenity => `
                            <span class="px-3.5 py-1.5 bg-indigo-50/70 border border-indigo-100 text-primary text-xs font-semibold rounded-lg flex items-center gap-1.5">
                                <i class="fa-solid fa-check text-xs"></i> ${amenity}
                            </span>
                        `).join('')}
                    </div>
                </div>` : ''}

                <!-- Agent / Dealer Box -->
                <div class="bg-gradient-to-r from-slate-50 to-indigo-50/40 p-5 rounded-2xl border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div class="flex items-center gap-4 text-center sm:text-left">
                        ${agentAvatarHtml}
                        <div>
                            <span class="text-[11px] text-emerald-700 font-bold uppercase tracking-wider">City Property Links — DHA Reg #15</span>
                            <h4 class="text-lg font-bold text-slate-900">${prop.agent?.name || 'Izhaar Hussain Khan'}</h4>
                            <p class="text-xs text-slate-500">${prop.agent?.role || 'Registered Real Estate Dealer'}</p>
                        </div>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <a href="tel:03036448400" class="px-4 py-2 bg-white border border-slate-200 text-slate-700 hover:text-primary hover:border-primary rounded-xl text-sm font-semibold transition flex items-center gap-1.5">
                            <i class="fa-solid fa-phone"></i> Call 0303-6448400
                        </a>
                        <a href="${waLink}" target="_blank" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold transition flex items-center gap-1.5">
                            <i class="fa-brands fa-whatsapp"></i> WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        `;

        container.querySelectorAll('.close-modal-btn').forEach(btn => {
            btn.addEventListener('click', () => this.closeAllModals());
        });

        this.openModal('property-details-modal');
    },

    openContactAgentModal: function(agentName, propertyRef = '') {
        const agent = HavenDB.getAgentByName(agentName);
        const headerEl = document.getElementById('agent-modal-header');
        const subtextEl = document.getElementById('agent-modal-subtext');
        const nameInput = document.getElementById('agent-form-name');
        const refInput = document.getElementById('agent-form-property-ref');
        const waBtn = document.getElementById('agent-modal-whatsapp-btn');

        if (nameInput) nameInput.value = agent.name;
        if (refInput) refInput.value = propertyRef;
        if (subtextEl) {
            subtextEl.textContent = propertyRef ? `Inquiring for: "${propertyRef}"` : `Direct inquiry to ${agent.name} (City Property Links)`;
        }

        const avatarHtml = agent.avatarImg 
            ? `<img src="${agent.avatarImg}" alt="${agent.name}" class="w-14 h-14 rounded-full object-cover border-2 border-white shadow">`
            : `<div class="w-14 h-14 rounded-full bg-primary text-white font-bold flex items-center justify-center text-lg shadow">${agent.avatar || 'IK'}</div>`;

        if (headerEl) {
            headerEl.innerHTML = `
                ${avatarHtml}
                <div class="flex-1">
                    <div class="flex items-center justify-between">
                        <h4 class="text-base font-bold text-slate-900">${agent.name}</h4>
                        <span class="text-[10px] font-bold px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800">${agent.badge || 'DHA Registered'}</span>
                    </div>
                    <p class="text-primary text-xs font-semibold">${agent.role}</p>
                    <p class="text-slate-500 text-xs font-medium mt-0.5"><i class="fa-solid fa-building-circle-check mr-1"></i> City Property Links — DHA Reg #15</p>
                    <p class="text-slate-700 text-xs mt-1 font-bold"><i class="fa-solid fa-phone mr-1 text-primary"></i> <a href="tel:03036448400" class="hover:underline">0303-6448400</a></p>
                </div>
            `;
        }

        if (waBtn) {
            const text = encodeURIComponent(`Hello ${agent.name}, I am contacting City Property Links regarding ${propertyRef ? propertyRef : 'properties in Bahawalpur'}.`);
            waBtn.href = `https://wa.me/923036448400?text=${text}`;
        }

        this.openModal('contact-agent-modal');
    },

    setupContactAgentForm: function() {
        const form = document.getElementById('contact-agent-form');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const inquiry = {
                type: 'Direct Team Inquiry',
                agentName: formData.get('agentName'),
                propertyRef: formData.get('propertyRef'),
                senderName: formData.get('senderName'),
                senderEmail: formData.get('senderEmail') || 'N/A',
                senderPhone: formData.get('senderPhone'),
                message: formData.get('message')
            };

            HavenDB.saveInquiry(inquiry);
            form.reset();
            this.closeAllModals();
            this.showToast(`Inquiry sent to ${inquiry.agentName}! City Property Links will call you back shortly on ${inquiry.senderPhone}.`, 'success');
        });
    },

    // Card Renderer for Bahawalpur Properties
    renderPropertyCard: function(prop) {
        const isFav = HavenDB.isFavorite(prop.id);
        const isRental = prop.purpose === 'For Rent';
        
        const agentAvatarHtml = prop.agent?.avatarImg 
            ? `<img src="${prop.agent.avatarImg}" alt="${prop.agent.name}" class="w-7 h-7 rounded-full object-cover">`
            : `<div class="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">${prop.agent?.avatar || 'IK'}</div>`;

        const waText = encodeURIComponent(`Hello City Property Links, I am interested in: ${prop.title} (${prop.priceDisplay}) in ${prop.location}.`);
        const waLink = `https://wa.me/923036448400?text=${waText}`;

        return `
            <div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-xl transition duration-300 flex flex-col">
                <div class="relative h-64 overflow-hidden bg-slate-100">
                    <img src="${prop.image}" alt="${prop.title}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700 cursor-pointer" onclick="HavenApp.openPropertyDetails('${prop.id}')">
                    <div class="absolute top-4 left-4 flex flex-wrap gap-1.5">
                        <span class="${isRental ? 'bg-teal-600' : 'bg-white/95 text-slate-900'} backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold ${isRental ? 'text-white' : ''}">
                            ${prop.purpose.toUpperCase()}
                        </span>
                        <span class="bg-slate-900/85 backdrop-blur-md text-amber-300 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                            <i class="fa-solid fa-certificate text-[9px]"></i> ${prop.statusBadge || 'DHA Reg #15'}
                        </span>
                    </div>
                    <button type="button" onclick="HavenApp.toggleFavFromCard('${prop.id}', this)" class="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-slate-400 w-9 h-9 rounded-full flex items-center justify-center shadow-md hover:text-red-500 transition">
                        <i class="${isFav ? 'fa-solid text-red-500' : 'fa-regular'} fa-heart"></i>
                    </button>
                    <div class="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-xl font-bold text-lg">
                        ${prop.priceDisplay}
                    </div>
                </div>

                <div class="p-6 flex-1 flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-1">
                            <p class="text-xs text-primary font-semibold line-clamp-1"><i class="fa-solid fa-location-dot mr-1"></i> ${prop.location}</p>
                            <span class="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">${prop.type}</span>
                        </div>
                        <h3 class="text-lg font-bold text-slate-900 mb-3 line-clamp-1 hover:text-primary transition cursor-pointer" onclick="HavenApp.openPropertyDetails('${prop.id}')">${prop.title}</h3>
                        
                        <div class="flex justify-between items-center py-3 border-t border-b border-slate-100 mb-4 text-xs">
                            <div class="flex flex-col items-center">
                                <span class="text-slate-400 font-medium"><i class="fa-solid fa-bed text-primary mr-1"></i> Beds</span>
                                <span class="font-bold text-slate-700 mt-0.5">${prop.beds > 0 ? prop.beds : '-'}</span>
                            </div>
                            <div class="flex flex-col items-center">
                                <span class="text-slate-400 font-medium"><i class="fa-solid fa-bath text-primary mr-1"></i> Baths</span>
                                <span class="font-bold text-slate-700 mt-0.5">${prop.baths > 0 ? prop.baths : '-'}</span>
                            </div>
                            <div class="flex flex-col items-center">
                                <span class="text-slate-400 font-medium"><i class="fa-solid fa-vector-square text-primary mr-1"></i> Size</span>
                                <span class="font-bold text-slate-700 mt-0.5">${prop.areaUnit || (prop.area + ' sqft')}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="pt-2 flex items-center justify-between gap-2 border-t border-slate-50">
                        <div class="flex items-center gap-2">
                            ${agentAvatarHtml}
                            <div class="flex flex-col">
                                <span class="text-xs font-bold text-slate-700 leading-none">${prop.agent?.name || 'Izhaar Hussain Khan'}</span>
                                <span class="text-[10px] text-emerald-700 font-semibold leading-none mt-1">DHA Reg #15</span>
                            </div>
                        </div>
                        <div class="flex items-center gap-1.5">
                            <a href="${waLink}" target="_blank" class="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition flex items-center justify-center text-sm" title="Chat on WhatsApp">
                                <i class="fa-brands fa-whatsapp"></i>
                            </a>
                            <button onclick="HavenApp.openPropertyDetails('${prop.id}')" class="bg-primary/10 text-primary hover:bg-primary hover:text-white px-3 py-1.5 rounded-lg text-xs font-bold transition">
                                Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    toggleFavFromCard: function(propId, btn) {
        const isFav = HavenDB.toggleFavorite(propId);
        const icon = btn.querySelector('i');
        if (icon) {
            if (isFav) {
                icon.className = 'fa-solid fa-heart text-red-500';
                this.showToast('Saved to your favorites!', 'info');
            } else {
                icon.className = 'fa-regular fa-heart';
                this.showToast('Removed from favorites', 'info');
            }
        }
    },

    // Mobile Menu handler
    setupMobileMenu: function() {
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        if (!btn || !menu) return;

        btn.addEventListener('click', () => {
            const isHidden = menu.classList.contains('hidden');
            if (isHidden) {
                menu.classList.remove('hidden');
                btn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            } else {
                menu.classList.add('hidden');
                btn.innerHTML = '<i class="fa-solid fa-bars"></i>';
            }
        });

        menu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                menu.classList.add('hidden');
                btn.innerHTML = '<i class="fa-solid fa-bars"></i>';
            });
        });
    },

    // Setup active state on nav links
    setupNavbarActiveState: function() {
        const path = window.location.pathname.toLowerCase();
        let currentPage = 'index.html';

        if (path.includes('property.html')) currentPage = 'property.html';
        else if (path.includes('agents.html')) currentPage = 'agents.html';
        else if (path.includes('about.html')) currentPage = 'about.html';
        else if (path.includes('contact.html')) currentPage = 'contact.html';

        document.querySelectorAll('.nav-link').forEach(link => {
            const href = link.getAttribute('href')?.toLowerCase() || '';
            if (href === currentPage || (currentPage === 'index.html' && (href === '#' || href === 'index.html'))) {
                link.classList.add('text-primary', 'font-semibold');
                link.classList.remove('text-slate-600');
            }
        });
    },

    // Newsletter handlers
    setupNewsletterForms: function() {
        document.querySelectorAll('form[data-newsletter], footer form').forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const emailInput = form.querySelector('input[type="email"]');
                if (emailInput && emailInput.value.trim()) {
                    HavenDB.saveSubscription(emailInput.value.trim());
                    emailInput.value = '';
                    HavenApp.showToast('Thank you for subscribing to City Property Links updates!', 'success');
                }
            });
        });
    },

    setupGlobalEventListeners: function() {
        document.addEventListener('click', (e) => {
            const target = e.target.closest('[data-open-add-property]');
            if (target) {
                e.preventDefault();
                HavenApp.openAddPropertyModal();
            }
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    HavenApp.init();
});

window.HavenApp = HavenApp;
window.CityPropertyApp = HavenApp;
