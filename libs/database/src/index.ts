// Use this file to export React client components (e.g. those with 'use client' directive) or other non-server utilities
import hasuraresult from "./graphql.hasura.helpers";

export * as hasurahelpers from "./graphql.hasura.helpers";
export * as hasuratypes from "./graphql.hasura.types";

export * from './lib/operations/user.hasura.operation'
export * from './lib/operations/file.hasura.operation'


export const hasuraPossibleTypes = {
    ...hasuraresult.possibleTypes,
  };