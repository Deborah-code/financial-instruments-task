import '@testing-library/jest-dom/matchers';

declare module 'vitest' {
  export interface Assertion {
    toBeInTheDocument(): Assertion;
  }
}
