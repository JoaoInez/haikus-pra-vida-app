/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: haiku
// ====================================================

export interface haiku_haiku {
  __typename: "Haiku";
  topVerse: string;
  middleVerse: string;
  bottomVerse: string;
}

export interface haiku {
  haiku: haiku_haiku | null;
}
