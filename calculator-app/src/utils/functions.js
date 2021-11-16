export function getClassVariation (baseClass = '', variation = '') {
  if(Array.isArray(variation)) 
    return `${baseClass} ${variation.map(item => `${baseClass}--${item}`).join(' ')}`
  if(typeof variation !== 'string') throw new Error('Variation must be a String or a String array');
  if(!variation) return baseClass;
  return `${baseClass} ${baseClass}--${variation}`;
}