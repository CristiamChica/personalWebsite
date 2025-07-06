// Google Analytics 4 utilities
// Replace 'GA_MEASUREMENT_ID' with your actual GA4 Measurement ID

export const GA_MEASUREMENT_ID = 'G-LT5TPRJM00'; // Replace with your actual ID

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track page views
export const trackPageView = (page_title, page_location) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title,
      page_location,
    });
  }
};

// Track custom events
export const trackEvent = (action, category = 'general', label = '', value = 0) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName, location = 'unknown') => {
  trackEvent('click', 'button', `${buttonName} - ${location}`);
};

// Track social media clicks
export const trackSocialClick = (platform, action = 'click') => {
  trackEvent(action, 'social', platform);
};

// Track file downloads
export const trackDownload = (fileName, fileType = 'pdf') => {
  trackEvent('download', 'file', `${fileName} (${fileType})`);
};
