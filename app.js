// Comprehensive timezone data with countries
const TIMEZONE_DATA = [
    { country: 'Afghanistan', timezone: 'Asia/Kabul', utc: 'UTC+4:30' },
    { country: 'Albania', timezone: 'Europe/Tirane', utc: 'UTC+1' },
    { country: 'Algeria', timezone: 'Africa/Algiers', utc: 'UTC+1' },
    { country: 'American Samoa', timezone: 'Pacific/Pago_Pago', utc: 'UTC-11' },
    { country: 'Andorra', timezone: 'Europe/Andorra', utc: 'UTC+1' },
    { country: 'Angola', timezone: 'Africa/Luanda', utc: 'UTC+1' },
    { country: 'Anguilla', timezone: 'America/Anguilla', utc: 'UTC-4' },
    { country: 'Antarctica - Casey', timezone: 'Antarctica/Casey', utc: 'UTC+11' },
    { country: 'Antarctica - Davis', timezone: 'Antarctica/Davis', utc: 'UTC+7' },
    { country: 'Antarctica - Mawson', timezone: 'Antarctica/Mawson', utc: 'UTC+5' },
    { country: 'Antarctica - McMurdo', timezone: 'Antarctica/McMurdo', utc: 'UTC+13' },
    { country: 'Antigua and Barbuda', timezone: 'America/Antigua', utc: 'UTC-4' },
    { country: 'Argentina - Buenos Aires', timezone: 'America/Argentina/Buenos_Aires', utc: 'UTC-3' },
    { country: 'Argentina - Cordoba', timezone: 'America/Argentina/Cordoba', utc: 'UTC-3' },
    { country: 'Argentina - Mendoza', timezone: 'America/Argentina/Mendoza', utc: 'UTC-3' },
    { country: 'Armenia', timezone: 'Asia/Yerevan', utc: 'UTC+4' },
    { country: 'Aruba', timezone: 'America/Aruba', utc: 'UTC-4' },
    { country: 'Australia - Adelaide', timezone: 'Australia/Adelaide', utc: 'UTC+10:30' },
    { country: 'Australia - Brisbane', timezone: 'Australia/Brisbane', utc: 'UTC+10' },
    { country: 'Australia - Darwin', timezone: 'Australia/Darwin', utc: 'UTC+9:30' },
    { country: 'Australia - Melbourne', timezone: 'Australia/Melbourne', utc: 'UTC+11' },
    { country: 'Australia - Perth', timezone: 'Australia/Perth', utc: 'UTC+8' },
    { country: 'Australia - Sydney', timezone: 'Australia/Sydney', utc: 'UTC+11' },
    { country: 'Austria', timezone: 'Europe/Vienna', utc: 'UTC+1' },
    { country: 'Azerbaijan', timezone: 'Asia/Baku', utc: 'UTC+4' },
    { country: 'Bahamas', timezone: 'America/Nassau', utc: 'UTC-5' },
    { country: 'Bahrain', timezone: 'Asia/Bahrain', utc: 'UTC+3' },
    { country: 'Bangladesh', timezone: 'Asia/Dhaka', utc: 'UTC+6' },
    { country: 'Barbados', timezone: 'America/Barbados', utc: 'UTC-4' },
    { country: 'Belarus', timezone: 'Europe/Minsk', utc: 'UTC+3' },
    { country: 'Belgium', timezone: 'Europe/Brussels', utc: 'UTC+1' },
    { country: 'Belize', timezone: 'America/Belize', utc: 'UTC-6' },
    { country: 'Benin', timezone: 'Africa/Porto-Novo', utc: 'UTC+1' },
    { country: 'Bermuda', timezone: 'Atlantic/Bermuda', utc: 'UTC-4' },
    { country: 'Bhutan', timezone: 'Asia/Thimphu', utc: 'UTC+6' },
    { country: 'Bolivia', timezone: 'America/La_Paz', utc: 'UTC-4' },
    { country: 'Bosnia and Herzegovina', timezone: 'Europe/Sarajevo', utc: 'UTC+1' },
    { country: 'Botswana', timezone: 'Africa/Gaborone', utc: 'UTC+2' },
    { country: 'Brazil - Brasilia', timezone: 'America/Sao_Paulo', utc: 'UTC-3' },
    { country: 'Brazil - Manaus', timezone: 'America/Manaus', utc: 'UTC-4' },
    { country: 'Brazil - Rio de Janeiro', timezone: 'America/Sao_Paulo', utc: 'UTC-3' },
    { country: 'Brunei', timezone: 'Asia/Brunei', utc: 'UTC+8' },
    { country: 'Bulgaria', timezone: 'Europe/Sofia', utc: 'UTC+2' },
    { country: 'Burkina Faso', timezone: 'Africa/Ouagadougou', utc: 'UTC+0' },
    { country: 'Burundi', timezone: 'Africa/Bujumbura', utc: 'UTC+2' },
    { country: 'Cambodia', timezone: 'Asia/Phnom_Penh', utc: 'UTC+7' },
    { country: 'Cameroon', timezone: 'Africa/Douala', utc: 'UTC+1' },
    { country: 'Canada - Halifax', timezone: 'America/Halifax', utc: 'UTC-4' },
    { country: 'Canada - Montreal', timezone: 'America/Toronto', utc: 'UTC-5' },
    { country: 'Canada - Toronto', timezone: 'America/Toronto', utc: 'UTC-5' },
    { country: 'Canada - Vancouver', timezone: 'America/Vancouver', utc: 'UTC-8' },
    { country: 'Canada - Winnipeg', timezone: 'America/Winnipeg', utc: 'UTC-6' },
    { country: 'Cape Verde', timezone: 'Atlantic/Cape_Verde', utc: 'UTC-1' },
    { country: 'Cayman Islands', timezone: 'America/Cayman', utc: 'UTC-5' },
    { country: 'Central African Republic', timezone: 'Africa/Bangui', utc: 'UTC+1' },
    { country: 'Chad', timezone: 'Africa/Ndjamena', utc: 'UTC+1' },
    { country: 'Chile - Santiago', timezone: 'America/Santiago', utc: 'UTC-3' },
    { country: 'China - Beijing', timezone: 'Asia/Shanghai', utc: 'UTC+8' },
    { country: 'China - Shanghai', timezone: 'Asia/Shanghai', utc: 'UTC+8' },
    { country: 'Colombia', timezone: 'America/Bogota', utc: 'UTC-5' },
    { country: 'Comoros', timezone: 'Indian/Comoro', utc: 'UTC+3' },
    { country: 'Congo', timezone: 'Africa/Brazzaville', utc: 'UTC+1' },
    { country: 'Cook Islands', timezone: 'Pacific/Rarotonga', utc: 'UTC-10' },
    { country: 'Costa Rica', timezone: 'America/Costa_Rica', utc: 'UTC-6' },
    { country: 'Croatia', timezone: 'Europe/Zagreb', utc: 'UTC+1' },
    { country: 'Cuba', timezone: 'America/Havana', utc: 'UTC-5' },
    { country: 'Cyprus', timezone: 'Asia/Nicosia', utc: 'UTC+2' },
    { country: 'Czech Republic', timezone: 'Europe/Prague', utc: 'UTC+1' },
    { country: 'Denmark', timezone: 'Europe/Copenhagen', utc: 'UTC+1' },
    { country: 'Djibouti', timezone: 'Africa/Djibouti', utc: 'UTC+3' },
    { country: 'Dominica', timezone: 'America/Dominica', utc: 'UTC-4' },
    { country: 'Dominican Republic', timezone: 'America/Santo_Domingo', utc: 'UTC-4' },
    { country: 'East Timor', timezone: 'Asia/Dili', utc: 'UTC+9' },
    { country: 'Ecuador', timezone: 'America/Guayaquil', utc: 'UTC-5' },
    { country: 'Egypt', timezone: 'Africa/Cairo', utc: 'UTC+2' },
    { country: 'El Salvador', timezone: 'America/El_Salvador', utc: 'UTC-6' },
    { country: 'Equatorial Guinea', timezone: 'Africa/Malabo', utc: 'UTC+1' },
    { country: 'Eritrea', timezone: 'Africa/Asmara', utc: 'UTC+3' },
    { country: 'Estonia', timezone: 'Europe/Tallinn', utc: 'UTC+2' },
    { country: 'Ethiopia', timezone: 'Africa/Addis_Ababa', utc: 'UTC+3' },
    { country: 'Fiji', timezone: 'Pacific/Fiji', utc: 'UTC+12' },
    { country: 'Finland', timezone: 'Europe/Helsinki', utc: 'UTC+2' },
    { country: 'France - Paris', timezone: 'Europe/Paris', utc: 'UTC+1' },
    { country: 'French Polynesia - Tahiti', timezone: 'Pacific/Tahiti', utc: 'UTC-10' },
    { country: 'Gabon', timezone: 'Africa/Libreville', utc: 'UTC+1' },
    { country: 'Gambia', timezone: 'Africa/Banjul', utc: 'UTC+0' },
    { country: 'Georgia', timezone: 'Asia/Tbilisi', utc: 'UTC+4' },
    { country: 'Germany - Berlin', timezone: 'Europe/Berlin', utc: 'UTC+1' },
    { country: 'Ghana', timezone: 'Africa/Accra', utc: 'UTC+0' },
    { country: 'Gibraltar', timezone: 'Europe/Gibraltar', utc: 'UTC+1' },
    { country: 'Greece', timezone: 'Europe/Athens', utc: 'UTC+2' },
    { country: 'Greenland', timezone: 'America/Godthab', utc: 'UTC-3' },
    { country: 'Grenada', timezone: 'America/Grenada', utc: 'UTC-4' },
    { country: 'Guam', timezone: 'Pacific/Guam', utc: 'UTC+10' },
    { country: 'Guatemala', timezone: 'America/Guatemala', utc: 'UTC-6' },
    { country: 'Guinea', timezone: 'Africa/Conakry', utc: 'UTC+0' },
    { country: 'Guinea-Bissau', timezone: 'Africa/Bissau', utc: 'UTC+0' },
    { country: 'Guyana', timezone: 'America/Guyana', utc: 'UTC-4' },
    { country: 'Haiti', timezone: 'America/Port-au-Prince', utc: 'UTC-5' },
    { country: 'Honduras', timezone: 'America/Tegucigalpa', utc: 'UTC-6' },
    { country: 'Hong Kong', timezone: 'Asia/Hong_Kong', utc: 'UTC+8' },
    { country: 'Hungary', timezone: 'Europe/Budapest', utc: 'UTC+1' },
    { country: 'Iceland', timezone: 'Atlantic/Reykjavik', utc: 'UTC+0' },
    { country: 'India - Delhi', timezone: 'Asia/Kolkata', utc: 'UTC+5:30' },
    { country: 'India - Mumbai', timezone: 'Asia/Kolkata', utc: 'UTC+5:30' },
    { country: 'Indonesia - Jakarta', timezone: 'Asia/Jakarta', utc: 'UTC+7' },
    { country: 'Indonesia - Bali', timezone: 'Asia/Makassar', utc: 'UTC+8' },
    { country: 'Iran', timezone: 'Asia/Tehran', utc: 'UTC+3:30' },
    { country: 'Iraq', timezone: 'Asia/Baghdad', utc: 'UTC+3' },
    { country: 'Ireland', timezone: 'Europe/Dublin', utc: 'UTC+0' },
    { country: 'Israel', timezone: 'Asia/Jerusalem', utc: 'UTC+2' },
    { country: 'Italy - Rome', timezone: 'Europe/Rome', utc: 'UTC+1' },
    { country: 'Ivory Coast', timezone: 'Africa/Abidjan', utc: 'UTC+0' },
    { country: 'Jamaica', timezone: 'America/Jamaica', utc: 'UTC-5' },
    { country: 'Japan - Tokyo', timezone: 'Asia/Tokyo', utc: 'UTC+9' },
    { country: 'Jordan', timezone: 'Asia/Amman', utc: 'UTC+2' },
    { country: 'Kazakhstan - Almaty', timezone: 'Asia/Almaty', utc: 'UTC+6' },
    { country: 'Kenya', timezone: 'Africa/Nairobi', utc: 'UTC+3' },
    { country: 'Kiribati', timezone: 'Pacific/Tarawa', utc: 'UTC+12' },
    { country: 'Kuwait', timezone: 'Asia/Kuwait', utc: 'UTC+3' },
    { country: 'Kyrgyzstan', timezone: 'Asia/Bishkek', utc: 'UTC+6' },
    { country: 'Laos', timezone: 'Asia/Vientiane', utc: 'UTC+7' },
    { country: 'Latvia', timezone: 'Europe/Riga', utc: 'UTC+2' },
    { country: 'Lebanon', timezone: 'Asia/Beirut', utc: 'UTC+2' },
    { country: 'Lesotho', timezone: 'Africa/Maseru', utc: 'UTC+2' },
    { country: 'Liberia', timezone: 'Africa/Monrovia', utc: 'UTC+0' },
    { country: 'Libya', timezone: 'Africa/Tripoli', utc: 'UTC+2' },
    { country: 'Liechtenstein', timezone: 'Europe/Vaduz', utc: 'UTC+1' },
    { country: 'Lithuania', timezone: 'Europe/Vilnius', utc: 'UTC+2' },
    { country: 'Luxembourg', timezone: 'Europe/Luxembourg', utc: 'UTC+1' },
    { country: 'Macau', timezone: 'Asia/Macau', utc: 'UTC+8' },
    { country: 'Madagascar', timezone: 'Indian/Antananarivo', utc: 'UTC+3' },
    { country: 'Malawi', timezone: 'Africa/Blantyre', utc: 'UTC+2' },
    { country: 'Malaysia - Kuala Lumpur', timezone: 'Asia/Kuala_Lumpur', utc: 'UTC+8' },
    { country: 'Maldives', timezone: 'Indian/Maldives', utc: 'UTC+5' },
    { country: 'Mali', timezone: 'Africa/Bamako', utc: 'UTC+0' },
    { country: 'Malta', timezone: 'Europe/Malta', utc: 'UTC+1' },
    { country: 'Marshall Islands', timezone: 'Pacific/Majuro', utc: 'UTC+12' },
    { country: 'Mauritania', timezone: 'Africa/Nouakchott', utc: 'UTC+0' },
    { country: 'Mauritius', timezone: 'Indian/Mauritius', utc: 'UTC+4' },
    { country: 'Mexico - Mexico City', timezone: 'America/Mexico_City', utc: 'UTC-6' },
    { country: 'Mexico - Tijuana', timezone: 'America/Tijuana', utc: 'UTC-8' },
    { country: 'Micronesia', timezone: 'Pacific/Chuuk', utc: 'UTC+10' },
    { country: 'Moldova', timezone: 'Europe/Chisinau', utc: 'UTC+2' },
    { country: 'Monaco', timezone: 'Europe/Monaco', utc: 'UTC+1' },
    { country: 'Mongolia', timezone: 'Asia/Ulaanbaatar', utc: 'UTC+8' },
    { country: 'Montenegro', timezone: 'Europe/Podgorica', utc: 'UTC+1' },
    { country: 'Morocco', timezone: 'Africa/Casablanca', utc: 'UTC+0' },
    { country: 'Mozambique', timezone: 'Africa/Maputo', utc: 'UTC+2' },
    { country: 'Myanmar', timezone: 'Asia/Yangon', utc: 'UTC+6:30' },
    { country: 'Namibia', timezone: 'Africa/Windhoek', utc: 'UTC+2' },
    { country: 'Nauru', timezone: 'Pacific/Nauru', utc: 'UTC+12' },
    { country: 'Nepal', timezone: 'Asia/Kathmandu', utc: 'UTC+5:45' },
    { country: 'Netherlands', timezone: 'Europe/Amsterdam', utc: 'UTC+1' },
    { country: 'New Zealand - Auckland', timezone: 'Pacific/Auckland', utc: 'UTC+13' },
    { country: 'Nicaragua', timezone: 'America/Managua', utc: 'UTC-6' },
    { country: 'Niger', timezone: 'Africa/Niamey', utc: 'UTC+1' },
    { country: 'Nigeria', timezone: 'Africa/Lagos', utc: 'UTC+1' },
    { country: 'North Korea', timezone: 'Asia/Pyongyang', utc: 'UTC+9' },
    { country: 'North Macedonia', timezone: 'Europe/Skopje', utc: 'UTC+1' },
    { country: 'Norway', timezone: 'Europe/Oslo', utc: 'UTC+1' },
    { country: 'Oman', timezone: 'Asia/Muscat', utc: 'UTC+4' },
    { country: 'Pakistan', timezone: 'Asia/Karachi', utc: 'UTC+5' },
    { country: 'Palau', timezone: 'Pacific/Palau', utc: 'UTC+9' },
    { country: 'Palestine', timezone: 'Asia/Gaza', utc: 'UTC+2' },
    { country: 'Panama', timezone: 'America/Panama', utc: 'UTC-5' },
    { country: 'Papua New Guinea', timezone: 'Pacific/Port_Moresby', utc: 'UTC+10' },
    { country: 'Paraguay', timezone: 'America/Asuncion', utc: 'UTC-4' },
    { country: 'Peru', timezone: 'America/Lima', utc: 'UTC-5' },
    { country: 'Philippines - Manila', timezone: 'Asia/Manila', utc: 'UTC+8' },
    { country: 'Poland', timezone: 'Europe/Warsaw', utc: 'UTC+1' },
    { country: 'Portugal - Lisbon', timezone: 'Europe/Lisbon', utc: 'UTC+0' },
    { country: 'Puerto Rico', timezone: 'America/Puerto_Rico', utc: 'UTC-4' },
    { country: 'Qatar', timezone: 'Asia/Qatar', utc: 'UTC+3' },
    { country: 'Romania', timezone: 'Europe/Bucharest', utc: 'UTC+2' },
    { country: 'Russia - Moscow', timezone: 'Europe/Moscow', utc: 'UTC+3' },
    { country: 'Russia - Vladivostok', timezone: 'Asia/Vladivostok', utc: 'UTC+10' },
    { country: 'Rwanda', timezone: 'Africa/Kigali', utc: 'UTC+2' },
    { country: 'Samoa', timezone: 'Pacific/Apia', utc: 'UTC+13' },
    { country: 'San Marino', timezone: 'Europe/San_Marino', utc: 'UTC+1' },
    { country: 'Saudi Arabia', timezone: 'Asia/Riyadh', utc: 'UTC+3' },
    { country: 'Senegal', timezone: 'Africa/Dakar', utc: 'UTC+0' },
    { country: 'Serbia', timezone: 'Europe/Belgrade', utc: 'UTC+1' },
    { country: 'Seychelles', timezone: 'Indian/Mahe', utc: 'UTC+4' },
    { country: 'Sierra Leone', timezone: 'Africa/Freetown', utc: 'UTC+0' },
    { country: 'Singapore', timezone: 'Asia/Singapore', utc: 'UTC+8' },
    { country: 'Slovakia', timezone: 'Europe/Bratislava', utc: 'UTC+1' },
    { country: 'Slovenia', timezone: 'Europe/Ljubljana', utc: 'UTC+1' },
    { country: 'Solomon Islands', timezone: 'Pacific/Guadalcanal', utc: 'UTC+11' },
    { country: 'Somalia', timezone: 'Africa/Mogadishu', utc: 'UTC+3' },
    { country: 'South Africa', timezone: 'Africa/Johannesburg', utc: 'UTC+2' },
    { country: 'South Korea - Seoul', timezone: 'Asia/Seoul', utc: 'UTC+9' },
    { country: 'South Sudan', timezone: 'Africa/Juba', utc: 'UTC+3' },
    { country: 'Spain - Madrid', timezone: 'Europe/Madrid', utc: 'UTC+1' },
    { country: 'Sri Lanka', timezone: 'Asia/Colombo', utc: 'UTC+5:30' },
    { country: 'Sudan', timezone: 'Africa/Khartoum', utc: 'UTC+2' },
    { country: 'Suriname', timezone: 'America/Paramaribo', utc: 'UTC-3' },
    { country: 'Sweden', timezone: 'Europe/Stockholm', utc: 'UTC+1' },
    { country: 'Switzerland', timezone: 'Europe/Zurich', utc: 'UTC+1' },
    { country: 'Syria', timezone: 'Asia/Damascus', utc: 'UTC+2' },
    { country: 'Taiwan', timezone: 'Asia/Taipei', utc: 'UTC+8' },
    { country: 'Tajikistan', timezone: 'Asia/Dushanbe', utc: 'UTC+5' },
    { country: 'Tanzania', timezone: 'Africa/Dar_es_Salaam', utc: 'UTC+3' },
    { country: 'Thailand - Bangkok', timezone: 'Asia/Bangkok', utc: 'UTC+7' },
    { country: 'Togo', timezone: 'Africa/Lome', utc: 'UTC+0' },
    { country: 'Tonga', timezone: 'Pacific/Tongatapu', utc: 'UTC+13' },
    { country: 'Trinidad and Tobago', timezone: 'America/Port_of_Spain', utc: 'UTC-4' },
    { country: 'Tunisia', timezone: 'Africa/Tunis', utc: 'UTC+1' },
    { country: 'Turkey', timezone: 'Europe/Istanbul', utc: 'UTC+3' },
    { country: 'Turkmenistan', timezone: 'Asia/Ashgabat', utc: 'UTC+5' },
    { country: 'Tuvalu', timezone: 'Pacific/Funafuti', utc: 'UTC+12' },
    { country: 'Uganda', timezone: 'Africa/Kampala', utc: 'UTC+3' },
    { country: 'Ukraine - Kyiv', timezone: 'Europe/Kiev', utc: 'UTC+2' },
    { country: 'United Arab Emirates - Dubai', timezone: 'Asia/Dubai', utc: 'UTC+4' },
    { country: 'United Kingdom - London', timezone: 'Europe/London', utc: 'UTC+0' },
    { country: 'United States - New York', timezone: 'America/New_York', utc: 'UTC-5' },
    { country: 'United States - Chicago', timezone: 'America/Chicago', utc: 'UTC-6' },
    { country: 'United States - Denver', timezone: 'America/Denver', utc: 'UTC-7' },
    { country: 'United States - Los Angeles', timezone: 'America/Los_Angeles', utc: 'UTC-8' },
    { country: 'United States - Anchorage', timezone: 'America/Anchorage', utc: 'UTC-9' },
    { country: 'United States - Honolulu', timezone: 'Pacific/Honolulu', utc: 'UTC-10' },
    { country: 'Uruguay', timezone: 'America/Montevideo', utc: 'UTC-3' },
    { country: 'Uzbekistan', timezone: 'Asia/Tashkent', utc: 'UTC+5' },
    { country: 'Vanuatu', timezone: 'Pacific/Efate', utc: 'UTC+11' },
    { country: 'Vatican City', timezone: 'Europe/Vatican', utc: 'UTC+1' },
    { country: 'Venezuela', timezone: 'America/Caracas', utc: 'UTC-4' },
    { country: 'Vietnam - Hanoi', timezone: 'Asia/Ho_Chi_Minh', utc: 'UTC+7' },
    { country: 'Yemen', timezone: 'Asia/Aden', utc: 'UTC+3' },
    { country: 'Zambia', timezone: 'Africa/Lusaka', utc: 'UTC+2' },
    { country: 'Zimbabwe', timezone: 'Africa/Harare', utc: 'UTC+2' },
    { country: 'UTC', timezone: 'UTC', utc: 'UTC+0' }
];

// Comprehensive alias mapping for better search experience
const COUNTRY_ALIASES = {
    // United States variations
    'us': ['United States - New York', 'United States - Chicago', 'United States - Denver', 'United States - Los Angeles', 'United States - Anchorage', 'United States - Honolulu'],
    'usa': ['United States - New York', 'United States - Chicago', 'United States - Denver', 'United States - Los Angeles', 'United States - Anchorage', 'United States - Honolulu'],
    'america': ['United States - New York', 'United States - Chicago', 'United States - Denver', 'United States - Los Angeles', 'United States - Anchorage', 'United States - Honolulu'],
    'ny': ['United States - New York'],
    'nyc': ['United States - New York'],
    'la': ['United States - Los Angeles'],
    'sf': ['United States - Los Angeles'],
    'california': ['United States - Los Angeles'],
    'texas': ['United States - Chicago'],

    // United Kingdom variations
    'uk': ['United Kingdom - London'],
    'gb': ['United Kingdom - London'],
    'britain': ['United Kingdom - London'],
    'great britain': ['United Kingdom - London'],
    'england': ['United Kingdom - London'],
    'london': ['United Kingdom - London'],

    // United Arab Emirates
    'uae': ['United Arab Emirates - Dubai'],
    'emirates': ['United Arab Emirates - Dubai'],
    'dubai': ['United Arab Emirates - Dubai'],

    // Australia variations
    'au': ['Australia - Sydney', 'Australia - Melbourne', 'Australia - Brisbane', 'Australia - Perth', 'Australia - Adelaide', 'Australia - Darwin'],
    'aus': ['Australia - Sydney', 'Australia - Melbourne', 'Australia - Brisbane', 'Australia - Perth', 'Australia - Adelaide', 'Australia - Darwin'],
    'oz': ['Australia - Sydney', 'Australia - Melbourne', 'Australia - Brisbane', 'Australia - Perth', 'Australia - Adelaide', 'Australia - Darwin'],
    'aussie': ['Australia - Sydney', 'Australia - Melbourne', 'Australia - Brisbane', 'Australia - Perth', 'Australia - Adelaide', 'Australia - Darwin'],

    // New Zealand
    'nz': ['New Zealand - Auckland'],
    'kiwi': ['New Zealand - Auckland'],

    // Canada
    'ca': ['Canada - Toronto', 'Canada - Vancouver', 'Canada - Montreal', 'Canada - Halifax', 'Canada - Winnipeg'],
    'can': ['Canada - Toronto', 'Canada - Vancouver', 'Canada - Montreal', 'Canada - Halifax', 'Canada - Winnipeg'],

    // European countries
    'de': ['Germany - Berlin'],
    'ger': ['Germany - Berlin'],
    'germany': ['Germany - Berlin'],
    'deutschland': ['Germany - Berlin'],
    'berlin': ['Germany - Berlin'],

    'fr': ['France - Paris'],
    'france': ['France - Paris'],
    'paris': ['France - Paris'],

    'it': ['Italy - Rome'],
    'italy': ['Italy - Rome'],
    'rome': ['Italy - Rome'],
    'roma': ['Italy - Rome'],

    'es': ['Spain - Madrid'],
    'spain': ['Spain - Madrid'],
    'espana': ['Spain - Madrid'],
    'españa': ['Spain - Madrid'],
    'madrid': ['Spain - Madrid'],

    'pt': ['Portugal - Lisbon'],
    'portugal': ['Portugal - Lisbon'],
    'lisbon': ['Portugal - Lisbon'],
    'lisboa': ['Portugal - Lisbon'],

    'nl': ['Netherlands'],
    'holland': ['Netherlands'],
    'dutch': ['Netherlands'],
    'amsterdam': ['Netherlands'],

    'be': ['Belgium'],
    'belgium': ['Belgium'],
    'brussels': ['Belgium'],

    'ch': ['Switzerland'],
    'swiss': ['Switzerland'],
    'zurich': ['Switzerland'],

    'at': ['Austria'],
    'austria': ['Austria'],
    'vienna': ['Austria'],
    'wien': ['Austria'],

    'se': ['Sweden'],
    'sweden': ['Sweden'],
    'stockholm': ['Sweden'],

    'no': ['Norway'],
    'norway': ['Norway'],
    'oslo': ['Norway'],

    'dk': ['Denmark'],
    'denmark': ['Denmark'],
    'copenhagen': ['Denmark'],

    'fi': ['Finland'],
    'finland': ['Finland'],
    'helsinki': ['Finland'],

    'pl': ['Poland'],
    'poland': ['Poland'],
    'warsaw': ['Poland'],

    'cz': ['Czech Republic'],
    'czech': ['Czech Republic'],
    'czechia': ['Czech Republic'],
    'prague': ['Czech Republic'],

    'gr': ['Greece'],
    'greece': ['Greece'],
    'athens': ['Greece'],

    'tr': ['Turkey'],
    'turkey': ['Turkey'],
    'istanbul': ['Turkey'],

    'ru': ['Russia - Moscow', 'Russia - Vladivostok'],
    'russia': ['Russia - Moscow', 'Russia - Vladivostok'],
    'moscow': ['Russia - Moscow'],

    // Asian countries
    'jp': ['Japan - Tokyo'],
    'japan': ['Japan - Tokyo'],
    'tokyo': ['Japan - Tokyo'],
    'nippon': ['Japan - Tokyo'],

    'cn': ['China - Beijing', 'China - Shanghai'],
    'china': ['China - Beijing', 'China - Shanghai'],
    'prc': ['China - Beijing', 'China - Shanghai'],
    'beijing': ['China - Beijing'],
    'shanghai': ['China - Shanghai'],

    'kr': ['South Korea - Seoul'],
    'korea': ['South Korea - Seoul'],
    'south korea': ['South Korea - Seoul'],
    'sk': ['South Korea - Seoul'],
    'seoul': ['South Korea - Seoul'],

    'in': ['India - Delhi', 'India - Mumbai'],
    'india': ['India - Delhi', 'India - Mumbai'],
    'delhi': ['India - Delhi'],
    'mumbai': ['India - Mumbai'],
    'bombay': ['India - Mumbai'],

    'sg': ['Singapore'],
    'singapore': ['Singapore'],

    'my': ['Malaysia - Kuala Lumpur'],
    'malaysia': ['Malaysia - Kuala Lumpur'],
    'kl': ['Malaysia - Kuala Lumpur'],

    'th': ['Thailand - Bangkok'],
    'thailand': ['Thailand - Bangkok'],
    'bangkok': ['Thailand - Bangkok'],

    'vn': ['Vietnam - Hanoi'],
    'vietnam': ['Vietnam - Hanoi'],
    'hanoi': ['Vietnam - Hanoi'],
    'saigon': ['Vietnam - Hanoi'],

    'ph': ['Philippines - Manila'],
    'philippines': ['Philippines - Manila'],
    'manila': ['Philippines - Manila'],

    'id': ['Indonesia - Jakarta', 'Indonesia - Bali'],
    'indonesia': ['Indonesia - Jakarta', 'Indonesia - Bali'],
    'jakarta': ['Indonesia - Jakarta'],
    'bali': ['Indonesia - Bali'],

    'hk': ['Hong Kong'],
    'hongkong': ['Hong Kong'],
    'hong kong': ['Hong Kong'],

    'tw': ['Taiwan'],
    'taiwan': ['Taiwan'],
    'taipei': ['Taiwan'],

    // Middle Eastern countries
    'sa': ['Saudi Arabia'],
    'saudi': ['Saudi Arabia'],
    'ksa': ['Saudi Arabia'],
    'riyadh': ['Saudi Arabia'],

    'il': ['Israel'],
    'israel': ['Israel'],
    'jerusalem': ['Israel'],

    'ae': ['United Arab Emirates - Dubai'],

    'qa': ['Qatar'],
    'qatar': ['Qatar'],

    // Latin American countries
    'br': ['Brazil - Brasilia', 'Brazil - Rio de Janeiro', 'Brazil - Manaus'],
    'brazil': ['Brazil - Brasilia', 'Brazil - Rio de Janeiro', 'Brazil - Manaus'],
    'brasil': ['Brazil - Brasilia', 'Brazil - Rio de Janeiro', 'Brazil - Manaus'],
    'rio': ['Brazil - Rio de Janeiro'],

    'ar': ['Argentina - Buenos Aires', 'Argentina - Cordoba', 'Argentina - Mendoza'],
    'argentina': ['Argentina - Buenos Aires', 'Argentina - Cordoba', 'Argentina - Mendoza'],
    'buenos aires': ['Argentina - Buenos Aires'],

    'mx': ['Mexico - Mexico City', 'Mexico - Tijuana'],
    'mexico': ['Mexico - Mexico City', 'Mexico - Tijuana'],
    'méxico': ['Mexico - Mexico City', 'Mexico - Tijuana'],

    'cl': ['Chile - Santiago'],
    'chile': ['Chile - Santiago'],
    'santiago': ['Chile - Santiago'],

    'co': ['Colombia'],
    'colombia': ['Colombia'],
    'bogota': ['Colombia'],

    'pe': ['Peru'],
    'peru': ['Peru'],
    'lima': ['Peru'],

    // African countries
    'za': ['South Africa'],
    'south africa': ['South Africa'],
    'rsa': ['South Africa'],
    'johannesburg': ['South Africa'],

    'eg': ['Egypt'],
    'egypt': ['Egypt'],
    'cairo': ['Egypt'],

    'ng': ['Nigeria'],
    'nigeria': ['Nigeria'],
    'lagos': ['Nigeria'],

    'ke': ['Kenya'],
    'kenya': ['Kenya'],
    'nairobi': ['Kenya'],

    'ma': ['Morocco'],
    'morocco': ['Morocco'],
    'casablanca': ['Morocco'],

    // Other regions
    'ie': ['Ireland'],
    'ireland': ['Ireland'],
    'dublin': ['Ireland'],

    'is': ['Iceland'],
    'iceland': ['Iceland'],
    'reykjavik': ['Iceland'],

    'ro': ['Romania'],
    'romania': ['Romania'],
    'bucharest': ['Romania'],

    'hu': ['Hungary'],
    'hungary': ['Hungary'],
    'budapest': ['Hungary'],

    'bg': ['Bulgaria'],
    'bulgaria': ['Bulgaria'],
    'sofia': ['Bulgaria'],

    'rs': ['Serbia'],
    'serbia': ['Serbia'],
    'belgrade': ['Serbia'],

    'hr': ['Croatia'],
    'croatia': ['Croatia'],
    'zagreb': ['Croatia'],

    'ua': ['Ukraine - Kyiv'],
    'ukraine': ['Ukraine - Kyiv'],
    'kyiv': ['Ukraine - Kyiv'],
    'kiev': ['Ukraine - Kyiv'],

    'pk': ['Pakistan'],
    'pakistan': ['Pakistan'],
    'karachi': ['Pakistan'],

    'bd': ['Bangladesh'],
    'bangladesh': ['Bangladesh'],
    'dhaka': ['Bangladesh'],

    'lk': ['Sri Lanka'],
    'sri lanka': ['Sri Lanka'],
    'colombo': ['Sri Lanka'],
};

class TimezoneTracker {
    constructor() {
        this.timezones = [];
        this.updateInterval = null;
        this.selectedTimezoneValue = null;
        this.timeOffset = 0; // Offset in minutes
        this.init();
    }

    init() {
        // Load saved timezones from localStorage
        this.loadTimezones();

        // Event listeners
        const searchInput = document.getElementById('timezoneSearch');
        const dropdown = document.getElementById('timezoneDropdown');

        document.getElementById('addBtn').addEventListener('click', () => this.addTimezone());
        document.getElementById('convertBtn').addEventListener('click', () => this.convertTime());

        // Search input events
        searchInput.addEventListener('input', (e) => this.filterTimezones(e.target.value));
        searchInput.addEventListener('focus', () => {
            this.filterTimezones(searchInput.value);
            dropdown.style.display = 'block';
        });

        // Allow Enter key to add timezone
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && this.selectedTimezoneValue) {
                this.addTimezone();
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.searchable-select-container')) {
                dropdown.style.display = 'none';
            }
        });

        // Start updating clocks
        this.startUpdating();

        // Add default timezone if none saved
        if (this.timezones.length === 0) {
            this.addTimezone('auto'); // Add local timezone
        }

        // Update converter timezone dropdown
        this.updateConverterDropdown();

        // Info Icon Tooltip
        const infoIcon = document.querySelector('.info-icon');
        if (infoIcon) {
            infoIcon.addEventListener('click', () => {
                this.showNotification('Convert a time from one timezone to all others to find the best meeting slot.');
            });
        }

        // Time Travel Listeners
        const timeSlider = document.getElementById('timeSlider');
        const resetTimeBtn = document.getElementById('resetTimeBtn');

        timeSlider.addEventListener('input', (e) => {
            this.timeOffset = parseInt(e.target.value);
            this.updateTimeTravelDisplay();
            this.updateAllTimezones();
        });

        resetTimeBtn.addEventListener('click', () => {
            this.timeOffset = 0;
            timeSlider.value = 0;
            this.updateTimeTravelDisplay();
            this.updateAllTimezones();
        });
    }

    updateTimeTravelDisplay() {
        const display = document.getElementById('timeTravelDisplay');
        const hours = Math.floor(Math.abs(this.timeOffset) / 60);
        const minutes = Math.abs(this.timeOffset) % 60;
        const sign = this.timeOffset >= 0 ? '+' : '-';
        display.textContent = `Offset: ${sign}${hours}h ${minutes}m`;

        if (this.timeOffset !== 0) {
            display.style.color = 'var(--accent-cyan)';
        } else {
            display.style.color = 'var(--text-primary)';
        }
    }

    filterTimezones(searchTerm) {
        const dropdown = document.getElementById('timezoneDropdown');
        const searchLower = searchTerm.toLowerCase().trim();

        // If search is empty, show all timezones
        if (!searchLower) {
            const allResults = TIMEZONE_DATA;
            this.renderDropdownResults(dropdown, allResults);
            return;
        }

        // Step 1: Check if search term matches any alias
        let aliasMatches = [];
        if (COUNTRY_ALIASES[searchLower]) {
            // Exact alias match
            const countryNames = COUNTRY_ALIASES[searchLower];
            aliasMatches = TIMEZONE_DATA.filter(item =>
                countryNames.some(name => item.country.toLowerCase() === name.toLowerCase())
            );
        }

        // Step 2: Perform regular search (country, timezone, or UTC)
        const regularMatches = TIMEZONE_DATA.filter(item =>
            item.country.toLowerCase().includes(searchLower) ||
            item.timezone.toLowerCase().includes(searchLower) ||
            item.utc.toLowerCase().includes(searchLower)
        );

        // Step 3: Check partial alias matches (for when user types part of an alias)
        let partialAliasMatches = [];
        for (const [alias, countryNames] of Object.entries(COUNTRY_ALIASES)) {
            if (alias.includes(searchLower) && searchLower.length >= 2) {
                const matches = TIMEZONE_DATA.filter(item =>
                    countryNames.some(name => item.country.toLowerCase() === name.toLowerCase())
                );
                partialAliasMatches = partialAliasMatches.concat(matches);
            }
        }

        // Combine all matches and remove duplicates
        const allMatches = [...aliasMatches, ...regularMatches, ...partialAliasMatches];
        const uniqueMatches = Array.from(new Map(allMatches.map(item => [item.timezone, item])).values());

        // Sort results: prioritize exact alias matches, then alphabetically
        const sortedMatches = uniqueMatches.sort((a, b) => {
            const aIsAlias = aliasMatches.includes(a);
            const bIsAlias = aliasMatches.includes(b);
            if (aIsAlias && !bIsAlias) return -1;
            if (!aIsAlias && bIsAlias) return 1;
            return a.country.localeCompare(b.country);
        });

        this.renderDropdownResults(dropdown, sortedMatches);
    }

    renderDropdownResults(dropdown, results) {
        if (results.length === 0) {
            dropdown.innerHTML = '<div class="dropdown-item no-results">No timezones found</div>';
            dropdown.style.display = 'block';
            return;
        }

        dropdown.innerHTML = results.map(item => `
            <div class="dropdown-item" data-timezone="${item.timezone}">
                <span class="dropdown-country">${item.country}</span>
                <span class="dropdown-utc">${item.utc}</span>
            </div>
        `).join('');

        // Add click handlers to dropdown items
        dropdown.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const timezone = e.currentTarget.dataset.timezone;
                if (timezone) {
                    const data = TIMEZONE_DATA.find(t => t.timezone === timezone);
                    document.getElementById('timezoneSearch').value = `${data.country} : ${data.utc}`;
                    this.selectedTimezoneValue = timezone;
                    dropdown.style.display = 'none';
                }
            });
        });

        dropdown.style.display = 'block';
    }

    addTimezone(timezone = null) {
        const searchInput = document.getElementById('timezoneSearch');
        const selectedTimezone = timezone === 'auto' ? Intl.DateTimeFormat().resolvedOptions().timeZone : (timezone || this.selectedTimezoneValue);

        console.log('Adding timezone:', selectedTimezone);

        if (!selectedTimezone) {
            this.showNotification('Please select a timezone');
            return;
        }

        // Check if timezone already added
        if (this.timezones.includes(selectedTimezone)) {
            this.showNotification('Timezone already added');
            return;
        }

        this.timezones.push(selectedTimezone);
        this.saveTimezones();
        this.renderTimezone(selectedTimezone);
        searchInput.value = '';
        this.selectedTimezoneValue = null;
        this.updateConverterDropdown();
    }

    removeTimezone(timezone) {
        this.timezones = this.timezones.filter(tz => tz !== timezone);
        this.saveTimezones();
        document.querySelector(`[data-timezone="${timezone}"]`).remove();
        this.updateConverterDropdown();
    }

    renderTimezone(timezone) {
        const grid = document.getElementById('timezonesGrid');
        const card = document.createElement('div');
        card.className = 'timezone-card';
        card.dataset.timezone = timezone;

        const displayName = this.getDisplayName(timezone);
        console.log('Rendering timezone:', timezone, 'Display name:', displayName);

        card.innerHTML = `
            <div class="timezone-header">
                <div class="timezone-name">${displayName}</div>
                <button class="remove-btn" data-remove-timezone="${timezone}"><i class="ph ph-x"></i></button>
            </div>
            <div class="card-content-wrapper">
                <div class="digital-info">
                    <div class="time-display" data-time></div>
                    <div class="date-display" data-date></div>
                    <div class="timezone-info">
                        <div class="offset-display" data-offset></div>
                        <div class="time-diff" data-time-diff></div>
                    </div>
                    <div class="status-indicator" data-status></div>
                </div>
                <canvas class="clock-face" width="200" height="200"></canvas>
            </div>
        `;

        grid.appendChild(card);

        // Add event listener to remove button
        const removeBtn = card.querySelector('.remove-btn');
        removeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.removeTimezone(timezone);
        });

        // Pass the card element directly instead of querying for it
        this.updateTimezoneCard(timezone, card);
    }

    getDisplayName(timezone) {
        // Look up the timezone in our data
        const data = TIMEZONE_DATA.find(item => item.timezone === timezone);

        if (data) {
            return `${data.country}`;
        }

        // Fallback: extract city name from timezone if not found in data
        if (timezone === 'UTC') return 'UTC';
        const parts = timezone.split('/');
        const city = parts[parts.length - 1].replace(/_/g, ' ');
        return city;
    }

    updateTimezoneCard(timezone, cardElement = null) {
        // Use provided card element or query for it
        const card = cardElement || document.querySelector(`[data-timezone="${timezone}"]`);

        if (!card) {
            console.error('Card not found for timezone:', timezone);
            return;
        }

        const now = new Date();
        // Apply time travel offset
        now.setMinutes(now.getMinutes() + this.timeOffset);

        try {
            // Get time in timezone
            const timeStr = now.toLocaleTimeString('en-US', {
                timeZone: timezone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            });

            // Get date in timezone
            const dateStr = now.toLocaleDateString('en-US', {
                timeZone: timezone,
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });

            // Get UTC offset
            const offset = this.getUTCOffset(timezone);

            console.log('Updating card:', timezone, 'Time:', timeStr, 'Date:', dateStr, 'Offset:', offset);

            const timeDisplay = card.querySelector('[data-time]');
            const dateDisplay = card.querySelector('[data-date]');
            const offsetDisplay = card.querySelector('[data-offset]');
            const timeDiffDisplay = card.querySelector('[data-time-diff]');
            const statusDisplay = card.querySelector('[data-status]');

            if (timeDisplay) timeDisplay.textContent = timeStr;
            if (dateDisplay) dateDisplay.textContent = dateStr;
            if (offsetDisplay) offsetDisplay.textContent = offset;

            // Calculate time difference from local timezone
            if (timeDiffDisplay) {
                const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
                const diff = this.getTimeDifference(timezone, localTz);
                timeDiffDisplay.textContent = diff;
            }

            // Check business hours status
            // Check business hours status
            if (statusDisplay) {
                const status = this.getBusinessHoursStatus(timeStr);
                statusDisplay.innerHTML = `<i class="ph ${status.icon}"></i> ${status.text}`;
                statusDisplay.className = `status-indicator ${status.class}`;

                // Update card background class
                card.classList.remove('card-morning', 'card-working', 'card-evening', 'card-night');
                card.classList.add(status.cardClass);
            }

            // Draw Analog Clock
            const canvas = card.querySelector('.clock-face');
            if (canvas) {
                this.drawAnalogClock(canvas, timezone, now);
            }

            console.log('Card updated successfully for:', timezone);
        } catch (error) {
            console.error('Error updating timezone card:', timezone, error);
        }
    }

    drawAnalogClock(canvas, timezone, date) {
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        const radius = width / 2;
        const centerX = width / 2;
        const centerY = height / 2;

        // Get time components in target timezone
        const timeStr = date.toLocaleTimeString('en-US', {
            timeZone: timezone,
            hour12: false,
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        });
        const [h, m, s] = timeStr.split(':').map(Number);

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Draw Face
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius - 5, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(15, 23, 42, 0.4)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(79, 172, 254, 0.2)';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw Hour Marks
        for (let i = 0; i < 12; i++) {
            const angle = (i * 30) * Math.PI / 180;
            const x1 = centerX + (radius - 15) * Math.cos(angle);
            const y1 = centerY + (radius - 15) * Math.sin(angle);
            const x2 = centerX + (radius - 5) * Math.cos(angle);
            const y2 = centerY + (radius - 5) * Math.sin(angle);

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.lineWidth = 2;
            ctx.stroke();
        }

        // Draw Hands
        // Hour
        const hourAngle = ((h % 12) + m / 60) * 30 * Math.PI / 180 - Math.PI / 2;
        this.drawHand(ctx, centerX, centerY, hourAngle, radius * 0.5, 4, '#ffffff');

        // Minute
        const minuteAngle = (m + s / 60) * 6 * Math.PI / 180 - Math.PI / 2;
        this.drawHand(ctx, centerX, centerY, minuteAngle, radius * 0.7, 3, '#4facfe');

        // Second
        const secondAngle = s * 6 * Math.PI / 180 - Math.PI / 2;
        this.drawHand(ctx, centerX, centerY, secondAngle, radius * 0.8, 1, '#d4af37');

        // Center Dot
        ctx.beginPath();
        ctx.arc(centerX, centerY, 4, 0, 2 * Math.PI);
        ctx.fillStyle = '#d4af37';
        ctx.fill();
    }

    drawHand(ctx, x, y, angle, length, width, color) {
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.lineCap = 'round';
        ctx.strokeStyle = color;
        ctx.moveTo(x, y);
        ctx.lineTo(x + length * Math.cos(angle), y + length * Math.sin(angle));
        ctx.stroke();
    }

    getTimeDifference(targetTz, sourceTz) {
        const now = new Date();
        const sourceDate = new Date(now.toLocaleString('en-US', { timeZone: sourceTz }));
        const targetDate = new Date(now.toLocaleString('en-US', { timeZone: targetTz }));
        const diffMs = targetDate - sourceDate;
        const diffHours = diffMs / (1000 * 60 * 60);

        if (diffHours === 0) return 'Local Time';
        const sign = diffHours > 0 ? '+' : '';
        const hours = Math.floor(Math.abs(diffHours));
        const minutes = Math.abs(diffMs / (1000 * 60)) % 60;

        if (minutes === 0) {
            return `${sign}${Math.round(diffHours)}h from local`;
        } else {
            return `${sign}${hours}h ${Math.round(minutes)}m from local`;
        }
    }

    getBusinessHoursStatus(timeStr) {
        const [hours] = timeStr.split(':').map(Number);

        if (hours >= 6 && hours < 9) {
            return { text: 'Morning', class: 'status-morning', icon: 'ph-sun', cardClass: 'card-morning' };
        } else if (hours >= 9 && hours < 17) {
            return { text: 'Working Hours', class: 'status-working', icon: 'ph-briefcase', cardClass: 'card-working' };
        } else if (hours >= 17 && hours < 22) {
            return { text: 'Evening', class: 'status-evening', icon: 'ph-moon-stars', cardClass: 'card-evening' };
        } else {
            return { text: 'Night', class: 'status-night', icon: 'ph-moon', cardClass: 'card-night' };
        }
    }

    getUTCOffset(timezone) {
        const now = new Date();
        const utcDate = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }));
        const tzDate = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
        const offset = (tzDate - utcDate) / (1000 * 60 * 60);

        const sign = offset >= 0 ? '+' : '';
        const hours = Math.floor(Math.abs(offset));
        const minutes = Math.abs(offset % 1) * 60;

        if (minutes === 0) {
            return `UTC${sign}${offset}`;
        } else {
            return `UTC${sign}${hours}:${minutes.toString().padStart(2, '0')}`;
        }
    }

    startUpdating() {
        // Update immediately
        this.updateAllTimezones();

        // Update every second
        this.updateInterval = setInterval(() => {
            this.updateAllTimezones();
        }, 1000);
    }

    updateAllTimezones() {
        this.timezones.forEach(timezone => {
            this.updateTimezoneCard(timezone);
        });
    }

    updateConverterDropdown() {
        const select = document.getElementById('converterTimezone');
        if (!select) return;

        select.innerHTML = '<option value="">Select source timezone...</option>';

        this.timezones.forEach(tz => {
            const displayName = this.getDisplayName(tz);
            const option = document.createElement('option');
            option.value = tz;
            option.textContent = displayName;
            select.appendChild(option);
        });
    }

    convertTime() {
        const timeInput = document.getElementById('converterTime');
        const timezoneSelect = document.getElementById('converterTimezone');
        const resultsDiv = document.getElementById('conversionResults');

        const selectedTime = timeInput.value;
        const sourceTimezone = timezoneSelect.value;

        if (!selectedTime) {
            this.showNotification('Please enter a time');
            return;
        }

        if (!sourceTimezone) {
            this.showNotification('Please select a source timezone');
            return;
        }

        // Parse the selected time
        const [hours, minutes] = selectedTime.split(':').map(Number);
        const now = new Date();
        const sourceDate = new Date(now.toLocaleString('en-US', { timeZone: sourceTimezone }));
        sourceDate.setHours(hours, minutes, 0, 0);

        // Convert to all timezones
        const results = this.timezones.map(tz => {
            const convertedTime = sourceDate.toLocaleTimeString('en-US', {
                timeZone: tz,
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            });

            const convertedDate = sourceDate.toLocaleDateString('en-US', {
                timeZone: tz,
                weekday: 'short',
                month: 'short',
                day: 'numeric'
            });

            return {
                timezone: tz,
                displayName: this.getDisplayName(tz),
                time: convertedTime,
                date: convertedDate
            };
        });

        // Display results
        resultsDiv.innerHTML = results.map(r => `
            <div class="conversion-result-item">
                <div class="result-header">
                    <div class="result-location">${r.displayName}</div>
                    <i class="ph ph-clock"></i>
                </div>
                <div class="result-time">${r.time}</div>
                <div class="result-date">${r.date}</div>
            </div>
        `).join('');

        this.showNotification(`Converted ${selectedTime} across all timezones`);
    }

    saveTimezones() {
        localStorage.setItem('timezones', JSON.stringify(this.timezones));
    }

    loadTimezones() {
        const saved = localStorage.getItem('timezones');
        if (saved) {
            this.timezones = JSON.parse(saved);
            this.timezones.forEach(tz => this.renderTimezone(tz));
        }
    }

    showNotification(message) {
        // Create a simple notification
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
            z-index: 1000;
            animation: slideInRight 0.3s ease-out;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Add notification animations to document
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize the tracker
const tracker = new TimezoneTracker();
