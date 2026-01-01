// Country to language mapping for African countries and diaspora
export const countryLanguageMap: Record<string, string> = {
  // East Africa - Swahili speaking countries
  'TZ': 'sw', // Tanzania
  'KE': 'sw', // Kenya
  'UG': 'lg', // Uganda (Luganda primary, but also Swahili)
  'RW': 'sw', // Rwanda
  'BI': 'sw', // Burundi
  'CD': 'fr', // Democratic Republic of Congo
  'CG': 'fr', // Republic of Congo
  
  // West Africa - French speaking
  'SN': 'fr', // Senegal
  'ML': 'fr', // Mali
  'BF': 'fr', // Burkina Faso
  'CI': 'fr', // Côte d'Ivoire
  'GN': 'fr', // Guinea
  'NE': 'fr', // Niger
  'TD': 'fr', // Chad
  'CM': 'fr', // Cameroon
  'GA': 'fr', // Gabon
  'CF': 'fr', // Central African Republic
  'BJ': 'fr', // Benin
  'TG': 'fr', // Togo
  
  // North Africa - Arabic speaking
  'EG': 'ar', // Egypt
  'LY': 'ar', // Libya
  'TN': 'ar', // Tunisia
  'DZ': 'ar', // Algeria
  'MA': 'ar', // Morocco
  'SD': 'ar', // Sudan
  'SS': 'ar', // South Sudan
  'SO': 'ar', // Somalia
  'DJ': 'ar', // Djibouti
  'ER': 'ar', // Eritrea
  'ET': 'ar', // Ethiopia (also has Amharic, but Arabic widely understood)
  
  // Southern Africa - English speaking
  'ZA': 'en', // South Africa
  'ZW': 'en', // Zimbabwe
  'BW': 'en', // Botswana
  'ZM': 'en', // Zambia
  'MW': 'en', // Malawi
  'SZ': 'en', // Eswatini
  'LS': 'en', // Lesotho
  'NA': 'en', // Namibia
  
  // West Africa - English speaking
  'NG': 'en', // Nigeria
  'GH': 'en', // Ghana
  'SL': 'en', // Sierra Leone
  'LR': 'en', // Liberia
  'GM': 'en', // Gambia
  
  // Other regions
  'MG': 'fr', // Madagascar
  'MU': 'fr', // Mauritius
  'SC': 'fr', // Seychelles
  'KM': 'fr', // Comoros
  'CV': 'fr', // Cape Verde
  'ST': 'fr', // São Tomé and Príncipe
  'GQ': 'fr', // Equatorial Guinea
  'AO': 'en', // Angola (Portuguese, but English as fallback)
  'MZ': 'en', // Mozambique (Portuguese, but English as fallback)
  
  // Major diaspora countries
  'US': 'en', // United States
  'GB': 'en', // United Kingdom
  'CA': 'en', // Canada
  'AU': 'en', // Australia
  'FR': 'fr', // France
  'BE': 'fr', // Belgium
  'CH': 'fr', // Switzerland
  'DE': 'en', // Germany
  'NL': 'en', // Netherlands
  'SE': 'en', // Sweden
  'NO': 'en', // Norway
  'DK': 'en', // Denmark
  'IT': 'en', // Italy
  'ES': 'en', // Spain
  
  // Middle East
  'SA': 'ar', // Saudi Arabia
  'AE': 'ar', // UAE
  'QA': 'ar', // Qatar
  'KW': 'ar', // Kuwait
  'BH': 'ar', // Bahrain
  'OM': 'ar', // Oman
  'JO': 'ar', // Jordan
  'LB': 'ar', // Lebanon
  'SY': 'ar', // Syria
  'IQ': 'ar', // Iraq
  'YE': 'ar', // Yemen
};

export function getLanguageFromCountry(countryCode: string): string {
  return countryLanguageMap[countryCode.toUpperCase()] || 'en';
}
