/**
 * To format the JS date
 *
 * @param {Date} date JS Full Date
 * @returns Formatted Date
 */
export const getFormattedDate = (date: Date) => {
  const d = new Date(date);
  return `${d.getMonth() + 1}-${d.getDate()}-${d.getFullYear()}`;
}
/**
 * To capitalize the first letter of string
 *
 * @param {string} s String
 * @returns Capitalize String
 */
export const capitalize = (s: string) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1);
}