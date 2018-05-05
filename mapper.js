module.exports.mapDatabaseHeaders = (header, index) => {
  const headers = {
    situs_full_address: ['sample'],
    situs_street_number: [],
    situs_street_prefix: [],
    situs_street_suffix: [],
    situs_street_direction: [],
    situs_city: [],
    situs_state: [],
    situs_zip: [],
    situs_zip_4: [],
    situs_county: [],
    latitude: [],
    longitude: [],
    year_built: [],
    last_sale_date: [],
    square_footage: [],
    roof_type: [],
    owner_name: [],
    owner_mailing_address: [],
    owner_contact: [],
    owner_phone: [],
    owner_email: [],
    agent_name: [],
    agent_phone: [],
    agent_email: [],
    property_manager_contact: [],
    property_manager_company_name: [],
    property_manager_phone: [],
    property_manager_email: [],
    contact_3_name: [],
    contact_3_phone: [],
    contact_3_company: [],
    contact_3_email: []
  };

  for (let key in headers) {
    console.log(Array.isArray(headers[key]));
    if (headers[key] && headers[key].includes(header)) {
      return key;
    }
  }

  return header;
};
