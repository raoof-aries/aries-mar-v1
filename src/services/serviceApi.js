import servicesData from '../data/services.json';

/**
 * Get all services
 * @returns {Array} Array of all services
 */
export const getAllServices = () => {
  return servicesData.services;
};

/**
 * Get service by slug or id
 * @param {string} identifier - Service slug or id
 * @returns {Object|null} Service object or null if not found
 */
export const getServiceById = (identifier) => {
  const service = servicesData.services.find(
    (s) => s.slug === identifier || s.id === identifier
  );
  return service || null;
};

/**
 * Get service by slug
 * @param {string} slug - Service slug
 * @returns {Object|null} Service object or null if not found
 */
export const getServiceBySlug = (slug) => {
  return servicesData.services.find((s) => s.slug === slug) || null;
};

// For async compatibility (if you want to add real API later)
export const getAllServicesAsync = async () => {
  return Promise.resolve(servicesData.services);
};

export const getServiceByIdAsync = async (identifier) => {
  const service = getServiceById(identifier);
  return Promise.resolve(service);
};
