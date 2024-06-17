import type * as Types from '../../graphql.hasura.types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = { context: { clientName: 'hasura' } } as const;
export type InsertFilesMutationVariables = Types.Exact<{
  cid: Types.InputMaybe<Types.Scalars['String']['input']>;
  counterID: Types.InputMaybe<Types.Scalars['String']['input']>;
  tx_hash: Types.InputMaybe<Types.Scalars['String']['input']>;
  file_size?: Types.InputMaybe<Types.Scalars['String']['input']>;
  file_hash?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;

export type InsertFilesMutation = {
  __typename: 'mutation_root';
  insert_Files: {
    __typename: 'Files_mutation_response';
    affected_rows: number;
  } | null;
};

export type GetFilesQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetFilesQuery = {
  __typename: 'query_root';
  Files: Array<{
    __typename: 'Files';
    cid: string;
    counterID: string;
    tx_hash: string;
    created_at: string | null;
    file_size: string | null;
    id: string;
    backup_file_cid: string | null;
    is_match: boolean;
    updated_at: string;
    is_verificationFailed: boolean;
  }>;
};

export type GetFilesByCidQueryVariables = Types.Exact<{
  _eq: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;

export type GetFilesByCidQuery = {
  __typename: 'query_root';
  Files: Array<{
    __typename: 'Files';
    cid: string;
    counterID: string;
    tx_hash: string;
    created_at: string | null;
    file_size: string | null;
    id: string;
    backup_file_cid: string | null;
    is_match: boolean;
    updated_at: string;
    is_verificationFailed: boolean;
  }>;
};

export type IsDataPresentQueryVariables = Types.Exact<{
  cid?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;

export type IsDataPresentQuery = {
  __typename: 'query_root';
  Files_aggregate: {
    __typename: 'Files_aggregate';
    aggregate: { __typename: 'Files_aggregate_fields'; count: number } | null;
  };
};

export type VerifyFileByHashMutationVariables = Types.Exact<{
  backup_file_cid?: Types.InputMaybe<Types.Scalars['String']['input']>;
  tx_hash?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;

export type VerifyFileByHashMutation = {
  __typename: 'mutation_root';
  update_Files: {
    __typename: 'Files_mutation_response';
    affected_rows: number;
  } | null;
};

export type VerifyFileByIdMutationVariables = Types.Exact<{
  backup_file_cid?: Types.InputMaybe<Types.Scalars['String']['input']>;
  id?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;

export type VerifyFileByIdMutation = {
  __typename: 'mutation_root';
  update_Files: {
    __typename: 'Files_mutation_response';
    affected_rows: number;
  } | null;
};

export type GetFileByByTxHashQueryVariables = Types.Exact<{
  tx_hash?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;

export type GetFileByByTxHashQuery = {
  __typename: 'query_root';
  Files: Array<{
    __typename: 'Files';
    counterID: string;
    tx_hash: string;
    id: string;
    file_hash: string;
  }>;
};

export type GetFileByByTxIdQueryVariables = Types.Exact<{
  tx_id?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;

export type GetFileByByTxIdQuery = {
  __typename: 'query_root';
  Files: Array<{
    __typename: 'Files';
    counterID: string;
    tx_hash: string;
    id: string;
    file_hash: string;
  }>;
};

export type UpdateIsVerifyFailedByTxHashMutationVariables = Types.Exact<{
  is_verificationFailed: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
  tx_hash?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;

export type UpdateIsVerifyFailedByTxHashMutation = {
  __typename: 'mutation_root';
  update_Files: {
    __typename: 'Files_mutation_response';
    affected_rows: number;
  } | null;
};

export type UpdateIsVerifyFailedByIdMutationVariables = Types.Exact<{
  is_verificationFailed: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
  id?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;

export type UpdateIsVerifyFailedByIdMutation = {
  __typename: 'mutation_root';
  update_Files: {
    __typename: 'Files_mutation_response';
    affected_rows: number;
  } | null;
};

export const InsertFilesDocument = /*#__PURE__*/ gql`
  mutation insertFiles(
    $cid: String
    $counterID: String
    $tx_hash: String
    $file_size: String = ""
    $file_hash: String = ""
  ) {
    insert_Files(
      objects: {
        cid: $cid
        counterID: $counterID
        tx_hash: $tx_hash
        file_size: $file_size
        file_hash: $file_hash
      }
    ) {
      affected_rows
    }
  }
`;
export type InsertFilesMutationFn = Apollo.MutationFunction<
  InsertFilesMutation,
  InsertFilesMutationVariables
>;

/**
 * __useInsertFilesMutation__
 *
 * To run a mutation, you first call `useInsertFilesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertFilesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertFilesMutation, { data, loading, error }] = useInsertFilesMutation({
 *   variables: {
 *      cid: // value for 'cid'
 *      counterID: // value for 'counterID'
 *      tx_hash: // value for 'tx_hash'
 *      file_size: // value for 'file_size'
 *      file_hash: // value for 'file_hash'
 *   },
 * });
 */
export function useInsertFilesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertFilesMutation,
    InsertFilesMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<InsertFilesMutation, InsertFilesMutationVariables>(
    InsertFilesDocument,
    options
  );
}
export type InsertFilesMutationHookResult = ReturnType<
  typeof useInsertFilesMutation
>;
export type InsertFilesMutationResult =
  Apollo.MutationResult<InsertFilesMutation>;
export type InsertFilesMutationOptions = Apollo.BaseMutationOptions<
  InsertFilesMutation,
  InsertFilesMutationVariables
>;
export const GetFilesDocument = /*#__PURE__*/ gql`
  query getFiles {
    Files(order_by: { created_at: desc }) {
      cid
      counterID
      tx_hash
      created_at
      file_size
      id
      backup_file_cid
      is_match
      updated_at
      is_verificationFailed
    }
  }
`;

/**
 * __useGetFilesQuery__
 *
 * To run a query within a React component, call `useGetFilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFilesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFilesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetFilesQuery, GetFilesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetFilesQuery, GetFilesQueryVariables>(
    GetFilesDocument,
    options
  );
}
export function useGetFilesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFilesQuery,
    GetFilesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetFilesQuery, GetFilesQueryVariables>(
    GetFilesDocument,
    options
  );
}
export type GetFilesQueryHookResult = ReturnType<typeof useGetFilesQuery>;
export type GetFilesLazyQueryHookResult = ReturnType<
  typeof useGetFilesLazyQuery
>;
export type GetFilesQueryResult = Apollo.QueryResult<
  GetFilesQuery,
  GetFilesQueryVariables
>;
export function refetchGetFilesQuery(variables?: GetFilesQueryVariables) {
  return { query: GetFilesDocument, variables: variables };
}
export const GetFilesByCidDocument = /*#__PURE__*/ gql`
  query getFilesByCid($_eq: String) {
    Files(where: { cid: { _eq: $_eq } }) {
      cid
      counterID
      tx_hash
      created_at
      file_size
      id
      backup_file_cid
      is_match
      updated_at
      is_verificationFailed
    }
  }
`;

/**
 * __useGetFilesByCidQuery__
 *
 * To run a query within a React component, call `useGetFilesByCidQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFilesByCidQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFilesByCidQuery({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useGetFilesByCidQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetFilesByCidQuery,
    GetFilesByCidQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetFilesByCidQuery, GetFilesByCidQueryVariables>(
    GetFilesByCidDocument,
    options
  );
}
export function useGetFilesByCidLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFilesByCidQuery,
    GetFilesByCidQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetFilesByCidQuery, GetFilesByCidQueryVariables>(
    GetFilesByCidDocument,
    options
  );
}
export type GetFilesByCidQueryHookResult = ReturnType<
  typeof useGetFilesByCidQuery
>;
export type GetFilesByCidLazyQueryHookResult = ReturnType<
  typeof useGetFilesByCidLazyQuery
>;
export type GetFilesByCidQueryResult = Apollo.QueryResult<
  GetFilesByCidQuery,
  GetFilesByCidQueryVariables
>;
export function refetchGetFilesByCidQuery(
  variables?: GetFilesByCidQueryVariables
) {
  return { query: GetFilesByCidDocument, variables: variables };
}
export const IsDataPresentDocument = /*#__PURE__*/ gql`
  query isDataPresent($cid: String = "") {
    Files_aggregate(where: { cid: { _eq: $cid } }) {
      aggregate {
        count
      }
    }
  }
`;

/**
 * __useIsDataPresentQuery__
 *
 * To run a query within a React component, call `useIsDataPresentQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsDataPresentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsDataPresentQuery({
 *   variables: {
 *      cid: // value for 'cid'
 *   },
 * });
 */
export function useIsDataPresentQuery(
  baseOptions?: Apollo.QueryHookOptions<
    IsDataPresentQuery,
    IsDataPresentQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<IsDataPresentQuery, IsDataPresentQueryVariables>(
    IsDataPresentDocument,
    options
  );
}
export function useIsDataPresentLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    IsDataPresentQuery,
    IsDataPresentQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<IsDataPresentQuery, IsDataPresentQueryVariables>(
    IsDataPresentDocument,
    options
  );
}
export type IsDataPresentQueryHookResult = ReturnType<
  typeof useIsDataPresentQuery
>;
export type IsDataPresentLazyQueryHookResult = ReturnType<
  typeof useIsDataPresentLazyQuery
>;
export type IsDataPresentQueryResult = Apollo.QueryResult<
  IsDataPresentQuery,
  IsDataPresentQueryVariables
>;
export function refetchIsDataPresentQuery(
  variables?: IsDataPresentQueryVariables
) {
  return { query: IsDataPresentDocument, variables: variables };
}
export const VerifyFileByHashDocument = /*#__PURE__*/ gql`
  mutation verifyFileByHash(
    $backup_file_cid: String = ""
    $tx_hash: String = ""
  ) {
    update_Files(
      where: { tx_hash: { _eq: $tx_hash } }
      _set: { is_match: true, backup_file_cid: $backup_file_cid }
    ) {
      affected_rows
    }
  }
`;
export type VerifyFileByHashMutationFn = Apollo.MutationFunction<
  VerifyFileByHashMutation,
  VerifyFileByHashMutationVariables
>;

/**
 * __useVerifyFileByHashMutation__
 *
 * To run a mutation, you first call `useVerifyFileByHashMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyFileByHashMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyFileByHashMutation, { data, loading, error }] = useVerifyFileByHashMutation({
 *   variables: {
 *      backup_file_cid: // value for 'backup_file_cid'
 *      tx_hash: // value for 'tx_hash'
 *   },
 * });
 */
export function useVerifyFileByHashMutation(
  baseOptions?: Apollo.MutationHookOptions<
    VerifyFileByHashMutation,
    VerifyFileByHashMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    VerifyFileByHashMutation,
    VerifyFileByHashMutationVariables
  >(VerifyFileByHashDocument, options);
}
export type VerifyFileByHashMutationHookResult = ReturnType<
  typeof useVerifyFileByHashMutation
>;
export type VerifyFileByHashMutationResult =
  Apollo.MutationResult<VerifyFileByHashMutation>;
export type VerifyFileByHashMutationOptions = Apollo.BaseMutationOptions<
  VerifyFileByHashMutation,
  VerifyFileByHashMutationVariables
>;
export const VerifyFileByIdDocument = /*#__PURE__*/ gql`
  mutation verifyFileById($backup_file_cid: String = "", $id: String = "") {
    update_Files(
      where: { counterID: { _eq: $id } }
      _set: { is_match: true, backup_file_cid: $backup_file_cid }
    ) {
      affected_rows
    }
  }
`;
export type VerifyFileByIdMutationFn = Apollo.MutationFunction<
  VerifyFileByIdMutation,
  VerifyFileByIdMutationVariables
>;

/**
 * __useVerifyFileByIdMutation__
 *
 * To run a mutation, you first call `useVerifyFileByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyFileByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyFileByIdMutation, { data, loading, error }] = useVerifyFileByIdMutation({
 *   variables: {
 *      backup_file_cid: // value for 'backup_file_cid'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useVerifyFileByIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    VerifyFileByIdMutation,
    VerifyFileByIdMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    VerifyFileByIdMutation,
    VerifyFileByIdMutationVariables
  >(VerifyFileByIdDocument, options);
}
export type VerifyFileByIdMutationHookResult = ReturnType<
  typeof useVerifyFileByIdMutation
>;
export type VerifyFileByIdMutationResult =
  Apollo.MutationResult<VerifyFileByIdMutation>;
export type VerifyFileByIdMutationOptions = Apollo.BaseMutationOptions<
  VerifyFileByIdMutation,
  VerifyFileByIdMutationVariables
>;
export const GetFileByByTxHashDocument = /*#__PURE__*/ gql`
  query getFileByByTxHash($tx_hash: String = "") {
    Files(where: { tx_hash: { _eq: $tx_hash } }) {
      counterID
      tx_hash
      id
      file_hash
    }
  }
`;

/**
 * __useGetFileByByTxHashQuery__
 *
 * To run a query within a React component, call `useGetFileByByTxHashQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFileByByTxHashQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFileByByTxHashQuery({
 *   variables: {
 *      tx_hash: // value for 'tx_hash'
 *   },
 * });
 */
export function useGetFileByByTxHashQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetFileByByTxHashQuery,
    GetFileByByTxHashQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetFileByByTxHashQuery,
    GetFileByByTxHashQueryVariables
  >(GetFileByByTxHashDocument, options);
}
export function useGetFileByByTxHashLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFileByByTxHashQuery,
    GetFileByByTxHashQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetFileByByTxHashQuery,
    GetFileByByTxHashQueryVariables
  >(GetFileByByTxHashDocument, options);
}
export type GetFileByByTxHashQueryHookResult = ReturnType<
  typeof useGetFileByByTxHashQuery
>;
export type GetFileByByTxHashLazyQueryHookResult = ReturnType<
  typeof useGetFileByByTxHashLazyQuery
>;
export type GetFileByByTxHashQueryResult = Apollo.QueryResult<
  GetFileByByTxHashQuery,
  GetFileByByTxHashQueryVariables
>;
export function refetchGetFileByByTxHashQuery(
  variables?: GetFileByByTxHashQueryVariables
) {
  return { query: GetFileByByTxHashDocument, variables: variables };
}
export const GetFileByByTxIdDocument = /*#__PURE__*/ gql`
  query getFileByByTxId($tx_id: String = "") {
    Files(where: { counterID: { _eq: $tx_id } }) {
      counterID
      tx_hash
      id
      file_hash
    }
  }
`;

/**
 * __useGetFileByByTxIdQuery__
 *
 * To run a query within a React component, call `useGetFileByByTxIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFileByByTxIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFileByByTxIdQuery({
 *   variables: {
 *      tx_id: // value for 'tx_id'
 *   },
 * });
 */
export function useGetFileByByTxIdQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetFileByByTxIdQuery,
    GetFileByByTxIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetFileByByTxIdQuery, GetFileByByTxIdQueryVariables>(
    GetFileByByTxIdDocument,
    options
  );
}
export function useGetFileByByTxIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFileByByTxIdQuery,
    GetFileByByTxIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetFileByByTxIdQuery,
    GetFileByByTxIdQueryVariables
  >(GetFileByByTxIdDocument, options);
}
export type GetFileByByTxIdQueryHookResult = ReturnType<
  typeof useGetFileByByTxIdQuery
>;
export type GetFileByByTxIdLazyQueryHookResult = ReturnType<
  typeof useGetFileByByTxIdLazyQuery
>;
export type GetFileByByTxIdQueryResult = Apollo.QueryResult<
  GetFileByByTxIdQuery,
  GetFileByByTxIdQueryVariables
>;
export function refetchGetFileByByTxIdQuery(
  variables?: GetFileByByTxIdQueryVariables
) {
  return { query: GetFileByByTxIdDocument, variables: variables };
}
export const UpdateIsVerifyFailedByTxHashDocument = /*#__PURE__*/ gql`
  mutation updateIsVerifyFailedByTxHash(
    $is_verificationFailed: Boolean
    $tx_hash: String = ""
  ) {
    update_Files(
      where: { tx_hash: { _eq: $tx_hash } }
      _set: { is_verificationFailed: $is_verificationFailed }
    ) {
      affected_rows
    }
  }
`;
export type UpdateIsVerifyFailedByTxHashMutationFn = Apollo.MutationFunction<
  UpdateIsVerifyFailedByTxHashMutation,
  UpdateIsVerifyFailedByTxHashMutationVariables
>;

/**
 * __useUpdateIsVerifyFailedByTxHashMutation__
 *
 * To run a mutation, you first call `useUpdateIsVerifyFailedByTxHashMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateIsVerifyFailedByTxHashMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateIsVerifyFailedByTxHashMutation, { data, loading, error }] = useUpdateIsVerifyFailedByTxHashMutation({
 *   variables: {
 *      is_verificationFailed: // value for 'is_verificationFailed'
 *      tx_hash: // value for 'tx_hash'
 *   },
 * });
 */
export function useUpdateIsVerifyFailedByTxHashMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateIsVerifyFailedByTxHashMutation,
    UpdateIsVerifyFailedByTxHashMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateIsVerifyFailedByTxHashMutation,
    UpdateIsVerifyFailedByTxHashMutationVariables
  >(UpdateIsVerifyFailedByTxHashDocument, options);
}
export type UpdateIsVerifyFailedByTxHashMutationHookResult = ReturnType<
  typeof useUpdateIsVerifyFailedByTxHashMutation
>;
export type UpdateIsVerifyFailedByTxHashMutationResult =
  Apollo.MutationResult<UpdateIsVerifyFailedByTxHashMutation>;
export type UpdateIsVerifyFailedByTxHashMutationOptions =
  Apollo.BaseMutationOptions<
    UpdateIsVerifyFailedByTxHashMutation,
    UpdateIsVerifyFailedByTxHashMutationVariables
  >;
export const UpdateIsVerifyFailedByIdDocument = /*#__PURE__*/ gql`
  mutation updateIsVerifyFailedById(
    $is_verificationFailed: Boolean
    $id: String = ""
  ) {
    update_Files(
      where: { counterID: { _eq: $id } }
      _set: { is_verificationFailed: $is_verificationFailed }
    ) {
      affected_rows
    }
  }
`;
export type UpdateIsVerifyFailedByIdMutationFn = Apollo.MutationFunction<
  UpdateIsVerifyFailedByIdMutation,
  UpdateIsVerifyFailedByIdMutationVariables
>;

/**
 * __useUpdateIsVerifyFailedByIdMutation__
 *
 * To run a mutation, you first call `useUpdateIsVerifyFailedByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateIsVerifyFailedByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateIsVerifyFailedByIdMutation, { data, loading, error }] = useUpdateIsVerifyFailedByIdMutation({
 *   variables: {
 *      is_verificationFailed: // value for 'is_verificationFailed'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateIsVerifyFailedByIdMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateIsVerifyFailedByIdMutation,
    UpdateIsVerifyFailedByIdMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateIsVerifyFailedByIdMutation,
    UpdateIsVerifyFailedByIdMutationVariables
  >(UpdateIsVerifyFailedByIdDocument, options);
}
export type UpdateIsVerifyFailedByIdMutationHookResult = ReturnType<
  typeof useUpdateIsVerifyFailedByIdMutation
>;
export type UpdateIsVerifyFailedByIdMutationResult =
  Apollo.MutationResult<UpdateIsVerifyFailedByIdMutation>;
export type UpdateIsVerifyFailedByIdMutationOptions =
  Apollo.BaseMutationOptions<
    UpdateIsVerifyFailedByIdMutation,
    UpdateIsVerifyFailedByIdMutationVariables
  >;
