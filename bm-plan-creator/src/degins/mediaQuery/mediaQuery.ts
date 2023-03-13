import type { BrakePointTypes } from "./breackPoint";

const maxWidthQuery = (breakPoint: BrakePointTypes) =>
  `(max-width: ${breakPoint}px)`;

const minWidthQuery = (breakPoint: BrakePointTypes) =>
  `(min-width: ${breakPoint + 1}px)`;

export const mediaQuery = (breakPoint: BrakePointTypes) =>
  `@media ${maxWidthQuery(breakPoint)}`;
