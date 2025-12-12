// src/custom.d.ts
declare module '*.jsx';
declare module '*.js';

/**
 * If you want to be specific for this component instead of allowing all .jsx,
 * you can add:
 *
 * declare module './components/HomesForYou' {
 *   import { ComponentType } from 'react';
 *   const HomesForYou: ComponentType<any>;
 *   export default HomesForYou;
 *   export { HomesForYou };
 * }
 *
 * But the generic declarations above unblock many JS imports quickly.
 */
