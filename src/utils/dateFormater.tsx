// DateFormatter.ts

export const dateFormatter = {
  /**
   * Basic formatter using Date methods.
   *
   * @param {number} timestamp - The timestamp to format.
   * @returns {string} - The formatted date and time as 'YYYY-MM-DD HH:MM:SS'.
   */
  basicFormat: (timestamp: number): string => {
    const date = new Date(timestamp);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  },

  /**
   * Advanced formatter using Intl.DateTimeFormat.
   *
   * @param {number} timestamp - The timestamp to format.
   * @param {string} locale - The locale string, e.g., 'en-US'. Defaults to user's locale.
   * @param {Object} options - Formatting options.
   * @returns {string} - The formatted date and time.
   */
  advancedFormat: (
    timestamp: number,
    locale: string = 'default',
    options: Intl.DateTimeFormatOptions = {}
  ): string => {
    const date = new Date(timestamp);

    // Default options
    const defaultOptions: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true // Change to false for 24-hour format
    };

    // Merge default options with provided options
    const formatOptions = { ...defaultOptions, ...options };

    return new Intl.DateTimeFormat(locale, formatOptions).format(date);
  }
};
