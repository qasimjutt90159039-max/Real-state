/**
 * Haven Estates - Global App Controller
 * Handles Modals, Notifications, Global Navbar, Footer, and Common UI
 */

const HavenApp = {
    init: function() {
        this.injectGlobalModals();
        this.setupMobileMenu();
        this.setupNewsletterForms();
        this.setupNavbarActiveState();
        this.setupGlobalEventListeners();
    },

    // Show stylish floating toast notification
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
            'bg-indigo-600 text-white border-indigo-700'
        }`;

        const icon = type === 'success' ? '<i class="fa-solid fa-circle-check text-emerald-400 text-lg"></i>' :
                     type === 'error' ? '<i class="fa-solid fa-circle-exclamation text-red-200 text-lg"></i>' :
                     '<i class="fa-solid fa-circle-info text-indigo-200 text-lg"></i>';

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

        // Animate in
        requestAnimationFrame(() => {
            toast.classList.remove('translate-y-8', 'opacity-0');
        });

        // Auto remove
        setTimeout(() => {
            if (toast.parentNode) {
                toast.classList.add('opacity-0', 'translate-y-4');
                setTimeout(() => toast.remove(), 300);
            }
        }, 4000);
    },

    // Inject Add Property, Property Details, and Contact Agent modals into body
    injectGlobalModals: function() {
        if (document.getElementById('global-modals-container')) return;

        const container = document.createElement('div');
        container.id = 'global-modals-container';
        container.innerHTML = `
            <!-- Add Property Modal -->
            <div id="add-property-modal" class="fixed inset-0 z-[9000] hidden items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
                <div class="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8 relative animate-scaleUp">
                    <div class="px-6 py-5 bg-gradient-to-r from-primary to-indigo-700 text-white flex justify-between items-center">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-xl">
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold">List a New Property</h3>
                                <p class="text-indigo-100 text-xs">Add your property details to Haven Estates</p>
                            </div>
                        </div>
                        <button type="button" class="close-modal-btn w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition">
                            <i class="fa-solid fa-xmark text-lg"></i>
                        </button>
                    </div>

                    <form id="add-property-form" class="p-6 md:p-8 space-y-5 max-h-[80vh] overflow-y-auto">
                        <div>
                            <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Property Title *</label>
                            <input type="text" name="title" required placeholder="e.g. Royal Palm Luxury Villa" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition">
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Property Type *</label>
                                <select name="type" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition text-slate-700">
                                    <option value="Villa">Villa</option>
                                    <option value="House">House</option>
                                    <option value="Apartment">Apartment</option>
                                    <option value="Commercial">Commercial</option>
                                    <option value="Plot / Land">Plot / Land</option>
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
                                <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Price ($ USD) *</label>
                                <input type="number" name="price" required min="100" placeholder="e.g. 450000 or 1200" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition">
                            </div>
                            <div>
                                <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Location / City *</label>
                                <input type="text" name="location" required placeholder="e.g. DHA Phase 1, Bahawalpur" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition">
                            </div>
                        </div>

                        <div class="grid grid-cols-3 gap-3">
                            <div>
                                <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Bedrooms</label>
                                <input type="number" name="beds" min="0" value="3" class="w-full px-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary transition">
                            </div>
                            <div>
                                <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Bathrooms</label>
                                <input type="number" name="baths" min="0" value="2" class="w-full px-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary transition">
                            </div>
                            <div>
                                <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Area (sqft)</label>
                                <input type="number" name="area" min="100" value="2000" class="w-full px-3 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary transition">
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Image URL</label>
                            <input type="url" name="image" placeholder="https://images.unsplash.com/photo-..." class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary transition">
                            <p class="text-[11px] text-slate-400 mt-1">Leave blank to use a premier curated luxury property image automatically.</p>
                        </div>

                        <div>
                            <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Assigned Agent</label>
                            <select name="agentName" id="modal-agent-select" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary transition text-slate-700">
                                <!-- Populated dynamically -->
                            </select>
                        </div>

                        <div>
                            <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Description</label>
                            <textarea name="description" rows="3" placeholder="Highlight key features, architectural highlights, nearby amenities..." class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary transition resize-none"></textarea>
                        </div>

                        <div class="pt-2">
                            <button type="submit" class="w-full bg-primary hover:bg-primaryHover text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-indigo-500/25 transition duration-300 flex items-center justify-center gap-2">
                                <i class="fa-solid fa-cloud-arrow-up"></i> Publish Property
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

            <!-- Contact Agent Modal -->
            <div id="contact-agent-modal" class="fixed inset-0 z-[9000] hidden items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
                <div class="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8 relative">
                    <div class="px-6 py-5 bg-slate-900 text-white flex justify-between items-center">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white">
                                <i class="fa-solid fa-headset"></i>
                            </div>
                            <div>
                                <h3 class="text-lg font-bold">Contact Agent</h3>
                                <p id="agent-modal-subtext" class="text-slate-300 text-xs">Direct inquiry message</p>
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
                            <input type="text" name="senderName" required placeholder="John Doe" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary transition">
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Your Email *</label>
                                <input type="email" name="senderEmail" required placeholder="john@example.com" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary transition">
                            </div>
                            <div>
                                <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Phone Number</label>
                                <input type="tel" name="senderPhone" placeholder="+1 (555) 000-0000" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary transition">
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Your Message *</label>
                            <textarea name="message" rows="3" required placeholder="I am interested in this listing and would like to schedule a private tour..." class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-primary transition resize-none"></textarea>
                        </div>

                        <div class="pt-2">
                            <button type="submit" class="w-full bg-primary hover:bg-primaryHover text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-indigo-500/25 transition duration-300 flex items-center justify-center gap-2">
                                <i class="fa-solid fa-paper-plane"></i> Send Inquiry
                            </button>
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
        if (!select || !window.HavenDB) return;
        const agents = HavenDB.getAgents();
        select.innerHTML = agents.map(agent => `<option value="${agent.name}">${agent.name} - ${agent.role}</option>`).join('');
    },

    setupModalCloseButtons: function() {
        document.querySelectorAll('.close-modal-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.closeAllModals();
            });
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

    closeAllModals: function() {
        ['add-property-modal', 'property-details-modal', 'contact-agent-modal'].forEach(id => {
            const modal = document.getElementById(id);
            if (modal) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }
        });
        document.body.classList.remove('overflow-hidden');
    },

    openModal: function(modalId) {
        this.closeAllModals();
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.classList.add('overflow-hidden');
        }
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

            const defaultImages = [
                "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            ];
            const chosenImage = formData.get('image')?.trim() || defaultImages[Math.floor(Math.random() * defaultImages.length)];

            const newProp = {
                title: formData.get('title'),
                type: formData.get('type'),
                purpose: formData.get('purpose'),
                price: Number(formData.get('price')),
                location: formData.get('location'),
                city: formData.get('location').split(',').pop().trim() || 'Bahawalpur',
                beds: Number(formData.get('beds')),
                baths: Number(formData.get('baths')),
                area: Number(formData.get('area')),
                image: chosenImage,
                gallery: [chosenImage],
                description: formData.get('description') || 'A premier property offering modern comfort and exceptional value in a prime neighborhood.',
                amenities: ["Prime Location", "Security", "Parking Space", "Modern Fixtures", "Clean Deed"],
                featured: true,
                agent: {
                    name: agentObj.name,
                    role: agentObj.role,
                    phone: agentObj.phone,
                    email: agentObj.email,
                    avatar: agentObj.avatar,
                    avatarImg: agentObj.avatarImg
                }
            };

            HavenDB.addProperty(newProp);
            form.reset();
            this.closeAllModals();
            this.showToast('🎉 Property listed successfully! It is now visible on the website.', 'success');
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
            ? `<img src="${prop.agent.avatarImg}" alt="${prop.agent.name}" class="w-14 h-14 rounded-full object-cover">`
            : `<div class="w-14 h-14 rounded-full bg-primary text-white font-bold flex items-center justify-center text-lg">${prop.agent?.avatar || 'EA'}</div>`;

        container.innerHTML = `
            <div class="relative h-72 md:h-96 w-full overflow-hidden bg-slate-900">
                <img src="${prop.image}" alt="${prop.title}" class="w-full h-full object-cover">
                <button type="button" class="close-modal-btn absolute top-5 right-5 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition">
                    <i class="fa-solid fa-xmark text-lg"></i>
                </button>
                <div class="absolute top-5 left-5 flex gap-2">
                    <span class="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white ${prop.purpose === 'For Rent' ? 'bg-teal-600' : 'bg-primary'} shadow-md">
                        ${prop.purpose}
                    </span>
                    <span class="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-slate-800 shadow-md">
                        ${prop.type}
                    </span>
                </div>
                <div class="absolute bottom-5 left-5 bg-slate-950/85 backdrop-blur-md text-white px-5 py-2 rounded-2xl font-bold text-2xl shadow-xl">
                    ${prop.priceDisplay}
                </div>
            </div>

            <div class="p-6 md:p-8 space-y-6">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                    <div>
                        <p class="text-primary font-semibold text-sm mb-1"><i class="fa-solid fa-location-dot mr-1.5"></i> ${prop.location}</p>
                        <h2 class="text-2xl md:text-3xl font-bold text-slate-900">${prop.title}</h2>
                    </div>
                    <div class="flex items-center gap-3">
                        <button onclick="HavenApp.toggleFavFromCard('${prop.id}', this)" class="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:text-red-500 hover:border-red-200 font-medium text-sm flex items-center gap-2 transition ${isFav ? 'text-red-500' : ''}">
                            <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart text-red-500"></i> ${isFav ? 'Saved' : 'Save'}
                        </button>
                        <button onclick="HavenApp.openContactAgentModal('${prop.agent?.name || 'Qasim Ali'}', '${prop.title}')" class="px-5 py-2.5 rounded-xl bg-primary hover:bg-primaryHover text-white font-bold text-sm shadow-md transition flex items-center gap-2">
                            <i class="fa-solid fa-paper-plane"></i> Contact Agent
                        </button>
                    </div>
                </div>

                <!-- Stats Grid -->
                <div class="grid grid-cols-3 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center">
                    <div>
                        <span class="text-slate-400 text-xs block mb-1 uppercase font-semibold"><i class="fa-solid fa-bed text-primary mr-1"></i> Bedrooms</span>
                        <span class="text-xl font-bold text-slate-800">${prop.beds}</span>
                    </div>
                    <div>
                        <span class="text-slate-400 text-xs block mb-1 uppercase font-semibold"><i class="fa-solid fa-bath text-primary mr-1"></i> Bathrooms</span>
                        <span class="text-xl font-bold text-slate-800">${prop.baths}</span>
                    </div>
                    <div>
                        <span class="text-slate-400 text-xs block mb-1 uppercase font-semibold"><i class="fa-solid fa-vector-square text-primary mr-1"></i> Total Area</span>
                        <span class="text-xl font-bold text-slate-800">${prop.area.toLocaleString()} sqft</span>
                    </div>
                </div>

                <!-- Description -->
                <div>
                    <h3 class="text-lg font-bold text-slate-900 mb-2">Overview & Description</h3>
                    <p class="text-slate-600 text-sm leading-relaxed">${prop.description}</p>
                </div>

                <!-- Amenities -->
                ${prop.amenities && prop.amenities.length ? `
                <div>
                    <h3 class="text-lg font-bold text-slate-900 mb-3">Key Amenities</h3>
                    <div class="flex flex-wrap gap-2">
                        ${prop.amenities.map(amenity => `
                            <span class="px-3.5 py-1.5 bg-indigo-50/70 border border-indigo-100 text-primary text-xs font-semibold rounded-lg flex items-center gap-1.5">
                                <i class="fa-solid fa-check text-xs"></i> ${amenity}
                            </span>
                        `).join('')}
                    </div>
                </div>` : ''}

                <!-- Agent Box -->
                <div class="bg-gradient-to-r from-slate-50 to-indigo-50/40 p-5 rounded-2xl border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div class="flex items-center gap-4 text-center sm:text-left">
                        ${agentAvatarHtml}
                        <div>
                            <span class="text-xs text-primary font-bold uppercase tracking-wider">Listing Agent</span>
                            <h4 class="text-lg font-bold text-slate-900">${prop.agent?.name || 'Haven Broker'}</h4>
                            <p class="text-xs text-slate-500">${prop.agent?.role || 'Senior Realtor'}</p>
                        </div>
                    </div>
                    <div class="flex gap-2">
                        <a href="tel:${prop.agent?.phone || '+15551234567'}" class="px-4 py-2 bg-white border border-slate-200 text-slate-700 hover:text-primary hover:border-primary rounded-xl text-sm font-semibold transition flex items-center gap-1.5">
                            <i class="fa-solid fa-phone"></i> Call
                        </a>
                        <button onclick="HavenApp.openContactAgentModal('${prop.agent?.name || 'Qasim Ali'}', '${prop.title}')" class="px-4 py-2 bg-primary text-white hover:bg-primaryHover rounded-xl text-sm font-semibold transition flex items-center gap-1.5">
                            <i class="fa-solid fa-envelope"></i> Message
                        </button>
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

        if (nameInput) nameInput.value = agent.name;
        if (refInput) refInput.value = propertyRef;
        if (subtextEl) {
            subtextEl.textContent = propertyRef ? `Inquiring about: "${propertyRef}"` : `Direct message to ${agent.name}`;
        }

        const avatarHtml = agent.avatarImg 
            ? `<img src="${agent.avatarImg}" alt="${agent.name}" class="w-14 h-14 rounded-full object-cover border-2 border-white shadow">`
            : `<div class="w-14 h-14 rounded-full bg-primary text-white font-bold flex items-center justify-center text-lg shadow">${agent.avatar || 'QA'}</div>`;

        if (headerEl) {
            headerEl.innerHTML = `
                ${avatarHtml}
                <div>
                    <h4 class="text-base font-bold text-slate-900">${agent.name}</h4>
                    <p class="text-primary text-xs font-semibold">${agent.role}</p>
                    <p class="text-slate-500 text-xs mt-0.5"><i class="fa-solid fa-phone mr-1"></i> ${agent.phone}</p>
                </div>
            `;
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
                type: 'Agent Message',
                agentName: formData.get('agentName'),
                propertyRef: formData.get('propertyRef'),
                senderName: formData.get('senderName'),
                senderEmail: formData.get('senderEmail'),
                senderPhone: formData.get('senderPhone'),
                message: formData.get('message')
            };

            HavenDB.saveInquiry(inquiry);
            form.reset();
            this.closeAllModals();
            this.showToast(`Message sent to ${inquiry.agentName}! They will respond within 24 hours.`, 'success');
        });
    },

    // Card Renderer for Property
    renderPropertyCard: function(prop) {
        const isFav = HavenDB.isFavorite(prop.id);
        const isRental = prop.purpose === 'For Rent';
        
        const agentAvatarHtml = prop.agent?.avatarImg 
            ? `<img src="${prop.agent.avatarImg}" alt="${prop.agent.name}" class="w-7 h-7 rounded-full object-cover">`
            : `<div class="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">${prop.agent?.avatar || 'QA'}</div>`;

        return `
            <div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-xl transition duration-300 flex flex-col">
                <div class="relative h-64 overflow-hidden bg-slate-100">
                    <img src="${prop.image}" alt="${prop.title}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700 cursor-pointer" onclick="HavenApp.openPropertyDetails('${prop.id}')">
                    <div class="absolute top-4 left-4 ${isRental ? 'bg-teal-600' : 'bg-white/95 text-slate-900'} backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold ${isRental ? 'text-white' : ''}">
                        ${prop.purpose.toUpperCase()}
                    </div>
                    <button type="button" onclick="HavenApp.toggleFavFromCard('${prop.id}', this)" class="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-slate-400 w-9 h-9 rounded-full flex items-center justify-center shadow-md hover:text-red-500 transition">
                        <i class="${isFav ? 'fa-solid text-red-500' : 'fa-regular'} fa-heart"></i>
                    </button>
                    <div class="absolute bottom-4 left-4 bg-slate-900/85 backdrop-blur-sm text-white px-4 py-1.5 rounded-lg font-bold text-lg">
                        ${prop.priceDisplay}
                    </div>
                </div>

                <div class="p-6 flex-1 flex flex-col justify-between">
                    <div>
                        <p class="text-xs text-primary font-semibold mb-1 line-clamp-1"><i class="fa-solid fa-location-dot mr-1"></i> ${prop.location}</p>
                        <h3 class="text-lg font-bold text-slate-900 mb-3 line-clamp-1 hover:text-primary transition cursor-pointer" onclick="HavenApp.openPropertyDetails('${prop.id}')">${prop.title}</h3>
                        
                        <div class="flex justify-between items-center py-3 border-t border-b border-slate-100 mb-4 text-xs">
                            <div class="flex flex-col items-center">
                                <span class="text-slate-400 font-medium"><i class="fa-solid fa-bed text-primary mr-1"></i> Beds</span>
                                <span class="font-bold text-slate-700 mt-0.5">${prop.beds}</span>
                            </div>
                            <div class="flex flex-col items-center">
                                <span class="text-slate-400 font-medium"><i class="fa-solid fa-bath text-primary mr-1"></i> Baths</span>
                                <span class="font-bold text-slate-700 mt-0.5">${prop.baths}</span>
                            </div>
                            <div class="flex flex-col items-center">
                                <span class="text-slate-400 font-medium"><i class="fa-solid fa-vector-square text-primary mr-1"></i> Area</span>
                                <span class="font-bold text-slate-700 mt-0.5">${prop.area.toLocaleString()} sqft</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex justify-between items-center pt-2">
                        <div class="flex items-center gap-2">
                            ${agentAvatarHtml}
                            <span class="text-xs font-medium text-slate-600 line-clamp-1">${prop.agent?.name || 'Qasim Ali'}</span>
                        </div>
                        <button onclick="HavenApp.openPropertyDetails('${prop.id}')" class="text-primary font-bold text-xs hover:text-primaryHover transition flex items-center gap-1 py-1">
                            View Details <i class="fa-solid fa-arrow-right"></i>
                        </button>
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

        // Close on link click
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
                    HavenApp.showToast('Thank you for subscribing to Haven Estates updates!', 'success');
                }
            });
        });
    },

    setupGlobalEventListeners: function() {
        // Any link with data-open-add-property opens the Add Property modal
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
