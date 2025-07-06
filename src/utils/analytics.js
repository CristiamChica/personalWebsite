// Google Analytics 4 utilities with privacy enhancements
export const GA_MEASUREMENT_ID = 'G-LT5TPRJM00';

// Cache DOM/storage checks for better performance
let _cachedDNTState = null;
let _cachedConsentState = null;

// Check if user has Do Not Track enabled (cached)
const isDoNotTrackEnabled = () => {
  if (_cachedDNTState !== null) return _cachedDNTState;
  
  try {
    _cachedDNTState = navigator.doNotTrack === '1' || 
                      navigator.doNotTrack === 'yes' || 
                      navigator.msDoNotTrack === '1' ||
                      window.doNotTrack === '1';
    return _cachedDNTState;
  } catch (error) {
    console.warn('Error checking DNT status:', error);
    return false; // Fallback to allowing analytics if DNT check fails
  }
};

// Check if user has given consent for analytics (cached with invalidation)
export const hasAnalyticsConsent = () => {
  try {
    return localStorage.getItem('cookie-consent') === 'accepted' &&
           localStorage.getItem('ga-opt-out') !== 'true';
  } catch (error) {
    console.warn('Error checking consent status:', error);
    return false;
  }
};

// Enhanced analytics disable check with error handling
const shouldDisableAnalytics = () => {
  try {
    return isDoNotTrackEnabled() || 
           localStorage.getItem('ga-opt-out') === 'true' ||
           localStorage.getItem('cookie-consent') !== 'accepted' ||
           window['ga-disable-' + GA_MEASUREMENT_ID] === true;
  } catch (error) {
    console.warn('Error checking analytics disable status:', error);
    return true; // Fail safe - disable analytics if we can't determine status
  }
};

// Initialize Google Analytics with enhanced error handling
export const initGA = () => {
  if (shouldDisableAnalytics()) {
    console.log('Analytics disabled: respecting user privacy preferences');
    return;
  }

  try {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
        anonymize_ip: true,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
        send_page_view: false, // We'll handle page views manually for better control
      });
      console.log('Analytics initialized successfully');
    } else {
      console.warn('Google Analytics not loaded or gtag not available');
    }
  } catch (error) {
    console.error('Error initializing Google Analytics:', error);
  }
};

// Optimized page view tracking with throttling
let _lastPageView = null;
export const trackPageView = (page_title, page_location) => {
  if (shouldDisableAnalytics()) return;
  
  // Throttle rapid page view calls (same page within 1 second)
  const currentTime = Date.now();
  if (_lastPageView && currentTime - _lastPageView < 1000 && 
      _lastPageView.location === page_location) {
    return;
  }
  
  try {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: page_title || document.title,
        page_location: page_location || window.location.href,
      });
      _lastPageView = { time: currentTime, location: page_location };
    }
  } catch (error) {
    console.error('Error tracking page view:', error);
  }
};

// Enhanced event tracking with validation
export const trackEvent = (action, category = 'general', label = '', value = 0) => {
  if (shouldDisableAnalytics()) return;
  
  // Validate required parameters
  if (!action || typeof action !== 'string') {
    console.warn('Invalid action parameter for trackEvent:', action);
    return;
  }
  
  try {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: Number(value) || 0,
      });
    }
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};

// Optimized tracking functions with better parameter handling
export const trackButtonClick = (buttonName, location = 'unknown') => {
  if (!buttonName) return;
  trackEvent('click', 'button', `${buttonName} - ${location}`);
};

export const trackSocialClick = (platform, action = 'click') => {
  if (!platform) return;
  trackEvent(action, 'social', platform);
};

export const trackDownload = (fileName, fileType = 'pdf') => {
  if (!fileName) return;
  trackEvent('download', 'file', `${fileName} (${fileType})`);
};

// Enhanced opt-out/opt-in with cache invalidation
export const optOutOfAnalytics = () => {
  try {
    localStorage.setItem('ga-opt-out', 'true');
    window['ga-disable-' + GA_MEASUREMENT_ID] = true;
    _cachedConsentState = null; // Invalidate cache
    console.log('Analytics opt-out successful');
  } catch (error) {
    console.error('Error opting out of analytics:', error);
  }
};

export const optInToAnalytics = () => {
  try {
    localStorage.removeItem('ga-opt-out');
    window['ga-disable-' + GA_MEASUREMENT_ID] = false;
    _cachedConsentState = null; // Invalidate cache
    console.log('Analytics opt-in successful');
  } catch (error) {
    console.error('Error opting into analytics:', error);
  }
};

// Utility to clear analytics caches (useful for testing)
export const clearAnalyticsCaches = () => {
  _cachedDNTState = null;
  _cachedConsentState = null;
};
