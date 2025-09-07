  document.addEventListener('DOMContentLoaded', function() {
        // Sample data for autocomplete suggestions
        const cities = ['Bilaspur', 'Chamba', 'Hamirpur', 'Kangra', 'Kinnaur', 'Kullu', 
            'Lahaul and Spiti', 'Mandi', 'Shimla', 'Sirmaur', 'Solan', 'Una',
            'Amritsar', 'Barnala', 'Bathinda', 'Faridkot', 'Fatehgarh Sahib', 
            'Fazilka', 'Ferozepur', 'Gurdaspur', 'Hoshiarpur', 'Jalandhar', 
            'Kapurthala', 'Ludhiana', 'Malerkotla', 'Mansa', 'Moga', 'Pathankot', 
            'Patiala', 'Rupnagar (Ropar)', 'Sahibzada Ajit Singh Nagar (Mohali)', 
            'Sangrur', 'Shahid Bhagat Singh Nagar (Nawanshahr)', 'Sri Muktsar Sahib', 
            'Tarn Taran', 'Almora', 'Bageshwar', 'Chamoli', 'Champawat', 'Dehradun', 
            'Haridwar', 'Nainital', 'Pauri Garhwal', 'Pithoragarh', 'Rudraprayag', 
            'Tehri Garhwal', 'Udham Singh Nagar', 'Uttarkashi', 'Ambala', 'Bhiwani', 
            'Charkhi Dadri', 'Faridabad', 'Fatehabad', 'Gurugram', 'Hisar', 'Jhajjar', 
            'Jind', 'Kaithal', 'Karnal', 'Kurukshetra', 'Mahendragarh', 'Nuh', 
            'Palwal', 'Panchkula', 'Panipat', 'Rewari', 'Rohtak', 'Sirsa', 'Sonipat', 
            'Yamunanagar', 'Central Delhi', 'East Delhi', 'New Delhi', 'North Delhi', 
            'North East Delhi', 'North West Delhi', 'Shahdara', 'South Delhi', 
            'South East Delhi', 'South West Delhi', 'West Delhi', 'Agra', 'Aligarh', 
            'Ambedkar Nagar', 'Amethi', 'Amroha', 'Auraiya', 'Ayodhya', 'Azamgarh', 
            'Badaun', 'Baghpat', 'Bahraich', 'Ballia', 'Balrampur', 'Banda', 
            'Barabanki', 'Bareilly', 'Basti', 'Bijnor', 'Bulandshahr', 'Chandauli', 
            'Chitrakoot', 'Deoria', 'Etah', 'Etawah', 'Farrukhabad', 'Fatehpur', 
            'Firozabad', 'Gautam Buddha Nagar', 'Ghaziabad', 'Ghazipur', 'Gonda', 
            'Gorakhpur', 'Hamirpur', 'Hapur', 'Hardoi', 'Hathras', 'Jalaun', 'Jaunpur', 
            'Jhansi', 'Kannauj', 'Kanpur Dehat', 'Kanpur Nagar', 'Kasganj', 'Kaushambi', 
            'Kushinagar', 'Lakhimpur Kheri', 'Lalitpur', 'Lucknow', 'Maharajganj', 
            'Mahoba', 'Mainpuri', 'Mathura', 'Mau', 'Meerut', 'Mirzapur', 'Moradabad', 
            'Muzaffarnagar', 'Pilibhit', 'Pratapgarh', 'Prayagraj', 'Raebareli', 
            'Rampur', 'Saharanpur', 'Sambhal', 'Sant Kabir Nagar', 'Sant Ravidas Nagar', 
            'Shahjahanpur', 'Shamli', 'Shravasti', 'Siddharthnagar', 'Sitapur', 
            'Sonbhadra', 'Sultanpur', 'Unnao', 'Varanasi', 'Araria', 'Arwal', 
            'Aurangabad', 'Banka', 'Begusarai', 'Bhagalpur', 'Bhojpur', 'Buxar', 
            'Darbhanga', 'East Champaran', 'Gaya', 'Gopalganj', 'Jamui', 'Jehanabad', 
            'Kaimur', 'Katihar', 'Khagaria', 'Kishanganj', 'Lakhisarai', 'Madhepura', 
            'Madhubani', 'Munger', 'Muzaffarpur', 'Nalanda', 'Nawada', 'Patna', 
            'Purnia', 'Rohtas', 'Saharsa', 'Samastipur', 'Saran', 'Sheikhpura', 
            'Sheohar', 'Sitamarhi', 'Siwan', 'Supaul', 'Vaishali', 'West Champaran', 
            'Alipurduar', 'Bankura', 'Birbhum', 'Cooch Behar', 'Dakshin Dinajpur', 
            'Darjeeling', 'Hooghly', 'Howrah', 'Jalpaiguri', 'Jhargram', 'Kalimpong', 
            'Kolkata', 'Malda', 'Murshidabad', 'Nadia', 'North 24 Parganas', 
            'Paschim Bardhaman', 'Paschim Medinipur', 'Purba Bardhaman', 
            'Purba Medinipur', 'Purulia', 'South 24 Parganas', 'Uttar Dinajpur', 
            'Bokaro', 'Chatra', 'Deoghar', 'Dhanbad', 'Dumka', 'East Singhbhum', 
            'Garhwa', 'Giridih', 'Godda', 'Gumla', 'Hazaribagh', 'Jamtara', 'Khunti', 
            'Koderma', 'Latehar', 'Lohardaga', 'Pakur', 'Palamu', 'Ramgarh', 'Ranchi', 
            'Sahebganj', 'Seraikela Kharsawan', 'Simdega', 'West Singhbhum', 'Angul', 
            'Balangir', 'Balasore', 'Bargarh', 'Bhadrak', 'Boudh', 'Cuttack', 
            'Deogarh', 'Dhenkanal', 'Gajapati', 'Ganjam', 'Jagatsinghpur', 'Jajpur', 
            'Jharsuguda', 'Kalahandi', 'Kandhamal', 'Kendrapara', 'Kendujhar', 
            'Khordha', 'Koraput', 'Malkangiri', 'Mayurbhanj', 'Nabarangpur', 
            'Nayagarh', 'Nuapada', 'Puri', 'Rayagada', 'Sambalpur', 'Subarnapur', 
            'Sundargarh', 'Balod', 'Baloda Bazar', 'Balrampur', 'Bastar', 'Bemetara', 
            'Bijapur', 'Bilaspur', 'Dantewada (South Bastar)', 'Dhamtari', 'Durg', 
            'Gariaband', 'Gaurela-Pendra-Marwahi', 'Janjgir-Champa', 'Jashpur', 
            'Kabirdham (Kawardha)', 'Kanker (North Bastar)', 'Khairagarh-Chhuikhadan-Gandai', 
            'Kondagaon', 'Korba', 'Koriya', 'Mahasamund', 'Manendragarh-Chirmiri-Bharatpur', 
            'Mohla-Manpur-Ambagarh Chowki', 'Mungeli', 'Narayanpur', 'Raigarh', 
            'Raipur', 'Rajnandgaon', 'Sakti', 'Sarangarh-Bilaigarh', 'Sukma', 
            'Surajpur', 'Surguja', 'Agar Malwa', 'Alirajpur', 'Anuppur', 'Ashoknagar', 
            'Balaghat', 'Barwani', 'Betul', 'Bhind', 'Bhopal', 'Burhanpur', 
            'Chhatarpur', 'Chhindwara', 'Damoh', 'Datia', 'Dewas', 'Dhar', 'Dindori', 
            'Guna', 'Gwalior', 'Harda', 'Hoshangabad', 'Indore', 'Jabalpur', 'Jhabua', 
            'Katni', 'Khandwa', 'Khargone', 'Mandla', 'Mandsaur', 'Morena', 
            'Narsinghpur', 'Neemuch', 'Niwari', 'Panna', 'Raisen', 'Rajgarh', 
            'Ratlam', 'Rewa', 'Sagar', 'Satna', 'Sehore', 'Seoni', 'Shahdol', 
            'Shajapur', 'Sheopur', 'Shivpuri', 'Sidhi', 'Singrauli', 'Tikamgarh', 
            'Ujjain', 'Umaria', 'Vidisha'];

        // Worker types data
        const workerTypes = [
            'AC/Fridge Technician', 'Assembler', 'Babysitter', 'Bar Bender', 
            'Barber', 'Caregiver', 'Carpenter', 'Cleaner/Sweeper', 
            'Construction Worker', 'Cook/Chef', 'Delivery Boy', 'Domestic Helper', 
            'Driver', 'Electrician', 'Factory Cleaner', 'Factory Worker', 
            'Forklift Operator', 'Gardener', 'Helper / General Worker', 
            'Housekeeping Staff', 'Loader/Unloader', 'Loading/Unloading Worker', 
            'Logistics Worker', 'Machine Operator', 'Maintenance Worker', 
            'Mason', 'Mechanic', 'Mobile Repair Technician', 'Packer', 'Painter', 
            'Plumber', 'Production Helper', 'Quality Checker', 'Security Guard', 
            'Tailor', 'Tile Fitter', 'Warehouse Worker', 'Washerman/Dhobi', 'Welder'
        ];

        // Set up autocomplete for both inputs
        setupAutocomplete('city-input', 'city-suggestions', cities);
        setupAutocomplete('worker-input', 'worker-suggestions', workerTypes);

        // Mobile search button functionality
        const mobileSearchBtn = document.querySelector('.mobile-search-btn');
        if (mobileSearchBtn) {
            mobileSearchBtn.addEventListener('click', function() {
                document.querySelector('.job-search-form').scrollIntoView({ behavior: 'smooth' });
            });
        }

        // Search form submission
        const searchForm = document.querySelector('.job-search-form');
        if (searchForm) {
            searchForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const city = document.getElementById('city-input').value;
                const workerType = document.getElementById('worker-input').value;
                
                if (city && workerType) {
                    // Show login popup (unclosable until form is filled)
                    document.getElementById('loginPopup').classList.add('active', 'unclosable');
                    document.body.classList.add('blur-background');
                }
            });
        }

        // Profile form submission
        const profileForm = document.getElementById('profileForm');
        if (profileForm) {
            profileForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Validate form
                const fullName = document.getElementById('full-name').value;
                const phoneNumber = document.getElementById('phone-number').value;
                const userType = document.getElementById('user-type').value;
                
                let isValid = true;
                
                // Reset error states
                document.querySelectorAll('.form-group').forEach(group => {
                    group.classList.remove('error');
                    const errorMsg = group.querySelector('.error-message');
                    if (errorMsg) errorMsg.style.display = 'none';
                });
                
                // Validate each field
                if (!fullName) {
                    showError('full-name', 'Please enter your full name');
                    isValid = false;
                }
                
                if (!phoneNumber) {
                    showError('phone-number', 'Please enter your phone number');
                    isValid = false;
                } else if (!/^\d{10}$/.test(phoneNumber)) {
                    showError('phone-number', 'Please enter a valid 10-digit phone number');
                    isValid = false;
                }
                
                if (!userType) {
                    showError('user-type', 'Please select your user type');
                    isValid = false;
                }
                
                if (isValid) {
                    // Form is valid, allow closing and redirect
                    document.getElementById('loginPopup').classList.remove('unclosable');
                    
                    // Show success message
                    const popupHeader = document.querySelector('.popup-header');
                    popupHeader.innerHTML = `
                        <h3>Thank You!</h3>
                        <p>Your details have been saved. Redirecting you to the workers list...</p>
                    `;
                    
                    // Hide the form
                    profileForm.style.display = 'none';
                    
                    // Redirect after delay (simulating processing)
                    setTimeout(() => {
                        window.location.href = "https://test.dailyjob.in/workers.php?city=" + 
                            encodeURIComponent(document.getElementById('city-input').value) + 
                            "&type=" + encodeURIComponent(document.getElementById('worker-input').value);
                    }, 2000);
                }
            });
        }
        
        // Helper function to show error messages
        function showError(fieldId, message) {
            const formGroup = document.getElementById(fieldId).closest('.form-group');
            formGroup.classList.add('error');
            
            let errorMsg = formGroup.querySelector('.error-message');
            if (!errorMsg) {
                errorMsg = document.createElement('div');
                errorMsg.className = 'error-message';
                formGroup.appendChild(errorMsg);
            }
            
            errorMsg.textContent = message;
            errorMsg.style.display = 'block';
        }
    });

    // Autocomplete setup function
    function setupAutocomplete(inputId, suggestionsId, data) {
        const input = document.getElementById(inputId);
        const suggestionsContainer = document.getElementById(suggestionsId);

        input.addEventListener('input', function() {
            const value = this.value.toLowerCase();
            if (value.length === 0) {
                suggestionsContainer.classList.remove('visible');
                return;
            }

            const filtered = data.filter(item => 
                item.toLowerCase().includes(value)
            );

            if (filtered.length > 0) {
                suggestionsContainer.innerHTML = filtered.map(item => 
                    `<div class="suggestion-item">${item}</div>`
                ).join('');
                suggestionsContainer.classList.add('visible');
            } else {
                suggestionsContainer.classList.remove('visible');
            }

            // Add click event to suggestions
            document.querySelectorAll(`#${suggestionsId} .suggestion-item`).forEach(item => {
                item.addEventListener('click', function() {
                    input.value = this.textContent;
                    suggestionsContainer.classList.remove('visible');
                });
            });
        });

        // Hide suggestions when clicking outside
        document.addEventListener('click', function(e) {
            if (e.target !== input) {
                suggestionsContainer.classList.remove('visible');
            }
        });

        // Keyboard navigation
        input.addEventListener('keydown', function(e) {
            const visibleSuggestions = suggestionsContainer.querySelectorAll('.suggestion-item');
            if (!visibleSuggestions.length) return;

            let currentIndex = -1;
            visibleSuggestions.forEach((item, index) => {
                if (item.classList.contains('highlighted')) {
                    item.classList.remove('highlighted');
                    currentIndex = index;
                }
            });

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                const nextIndex = (currentIndex + 1) % visibleSuggestions.length;
                visibleSuggestions[nextIndex].classList.add('highlighted');
                visibleSuggestions[nextIndex].scrollIntoView({ block: 'nearest' });
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                const prevIndex = (currentIndex - 1 + visibleSuggestions.length) % visibleSuggestions.length;
                visibleSuggestions[prevIndex].classList.add('highlighted');
                visibleSuggestions[prevIndex].scrollIntoView({ block: 'nearest' });
            } else if (e.key === 'Enter' && currentIndex >= 0) {
                e.preventDefault();
                input.value = visibleSuggestions[currentIndex].textContent;
                suggestionsContainer.classList.remove('visible');
            }
        });
    }


    // Change header color on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.sticky-header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
 