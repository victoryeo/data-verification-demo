import type { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export const namedOperations = {
  Query: {
    getFiles: 'getFiles' as const,
    getFilesByCid: 'getFilesByCid' as const,
    isDataPresent: 'isDataPresent' as const,
    getFileByByTxHash: 'getFileByByTxHash' as const,
    getFileByByTxId: 'getFileByByTxId' as const,
    getUser: 'getUser' as const
  },
  Mutation: {
    insertFiles: 'insertFiles' as const,
    verifyFileByHash: 'verifyFileByHash' as const,
    verifyFileById: 'verifyFileById' as const,
    updateIsVerifyFailedByTxHash: 'updateIsVerifyFailedByTxHash' as const,
    updateIsVerifyFailedById: 'updateIsVerifyFailedById' as const
  }
}
export type FilesKeySpecifier = ('backup_file_cid' | 'cid' | 'counterID' | 'created_at' | 'file_hash' | 'file_size' | 'id' | 'is_match' | 'is_verificationFailed' | 'tx_hash' | 'updated_at' | FilesKeySpecifier)[];
export type FilesFieldPolicy = {
	backup_file_cid?: FieldPolicy<any> | FieldReadFunction<any>,
	cid?: FieldPolicy<any> | FieldReadFunction<any>,
	counterID?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	file_hash?: FieldPolicy<any> | FieldReadFunction<any>,
	file_size?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_match?: FieldPolicy<any> | FieldReadFunction<any>,
	is_verificationFailed?: FieldPolicy<any> | FieldReadFunction<any>,
	tx_hash?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Files_aggregateKeySpecifier = ('aggregate' | 'nodes' | Files_aggregateKeySpecifier)[];
export type Files_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Files_aggregate_fieldsKeySpecifier = ('count' | 'max' | 'min' | Files_aggregate_fieldsKeySpecifier)[];
export type Files_aggregate_fieldsFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Files_max_fieldsKeySpecifier = ('backup_file_cid' | 'cid' | 'counterID' | 'created_at' | 'file_hash' | 'file_size' | 'id' | 'tx_hash' | 'updated_at' | Files_max_fieldsKeySpecifier)[];
export type Files_max_fieldsFieldPolicy = {
	backup_file_cid?: FieldPolicy<any> | FieldReadFunction<any>,
	cid?: FieldPolicy<any> | FieldReadFunction<any>,
	counterID?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	file_hash?: FieldPolicy<any> | FieldReadFunction<any>,
	file_size?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	tx_hash?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Files_min_fieldsKeySpecifier = ('backup_file_cid' | 'cid' | 'counterID' | 'created_at' | 'file_hash' | 'file_size' | 'id' | 'tx_hash' | 'updated_at' | Files_min_fieldsKeySpecifier)[];
export type Files_min_fieldsFieldPolicy = {
	backup_file_cid?: FieldPolicy<any> | FieldReadFunction<any>,
	cid?: FieldPolicy<any> | FieldReadFunction<any>,
	counterID?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	file_hash?: FieldPolicy<any> | FieldReadFunction<any>,
	file_size?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	tx_hash?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Files_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | Files_mutation_responseKeySpecifier)[];
export type Files_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('email' | 'id' | 'password' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>
};
export type User_aggregateKeySpecifier = ('aggregate' | 'nodes' | User_aggregateKeySpecifier)[];
export type User_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type User_aggregate_fieldsKeySpecifier = ('count' | 'max' | 'min' | User_aggregate_fieldsKeySpecifier)[];
export type User_aggregate_fieldsFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type User_max_fieldsKeySpecifier = ('email' | 'id' | 'password' | User_max_fieldsKeySpecifier)[];
export type User_max_fieldsFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>
};
export type User_min_fieldsKeySpecifier = ('email' | 'id' | 'password' | User_min_fieldsKeySpecifier)[];
export type User_min_fieldsFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>
};
export type User_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | User_mutation_responseKeySpecifier)[];
export type User_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type mutation_rootKeySpecifier = ('delete_Files' | 'delete_Files_by_pk' | 'delete_User' | 'delete_User_by_pk' | 'insert_Files' | 'insert_Files_one' | 'insert_User' | 'insert_User_one' | 'update_Files' | 'update_Files_by_pk' | 'update_Files_many' | 'update_User' | 'update_User_by_pk' | 'update_User_many' | mutation_rootKeySpecifier)[];
export type mutation_rootFieldPolicy = {
	delete_Files?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_Files_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_User?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_User_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Files?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Files_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_User?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_User_one?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Files?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Files_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Files_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_User?: FieldPolicy<any> | FieldReadFunction<any>,
	update_User_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_User_many?: FieldPolicy<any> | FieldReadFunction<any>
};
export type query_rootKeySpecifier = ('Files' | 'Files_aggregate' | 'Files_by_pk' | 'User' | 'User_aggregate' | 'User_by_pk' | query_rootKeySpecifier)[];
export type query_rootFieldPolicy = {
	Files?: FieldPolicy<any> | FieldReadFunction<any>,
	Files_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Files_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	User_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	User_by_pk?: FieldPolicy<any> | FieldReadFunction<any>
};
export type subscription_rootKeySpecifier = ('Files' | 'Files_aggregate' | 'Files_by_pk' | 'Files_stream' | 'User' | 'User_aggregate' | 'User_by_pk' | 'User_stream' | subscription_rootKeySpecifier)[];
export type subscription_rootFieldPolicy = {
	Files?: FieldPolicy<any> | FieldReadFunction<any>,
	Files_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Files_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	Files_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	User_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	User_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	User_stream?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Files: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | FilesKeySpecifier | (() => undefined | FilesKeySpecifier),
		fields?: FilesFieldPolicy,
	},
	Files_aggregate: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | Files_aggregateKeySpecifier | (() => undefined | Files_aggregateKeySpecifier),
		fields?: Files_aggregateFieldPolicy,
	},
	Files_aggregate_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | Files_aggregate_fieldsKeySpecifier | (() => undefined | Files_aggregate_fieldsKeySpecifier),
		fields?: Files_aggregate_fieldsFieldPolicy,
	},
	Files_max_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | Files_max_fieldsKeySpecifier | (() => undefined | Files_max_fieldsKeySpecifier),
		fields?: Files_max_fieldsFieldPolicy,
	},
	Files_min_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | Files_min_fieldsKeySpecifier | (() => undefined | Files_min_fieldsKeySpecifier),
		fields?: Files_min_fieldsFieldPolicy,
	},
	Files_mutation_response: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | Files_mutation_responseKeySpecifier | (() => undefined | Files_mutation_responseKeySpecifier),
		fields?: Files_mutation_responseFieldPolicy,
	},
	User: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	User_aggregate: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | User_aggregateKeySpecifier | (() => undefined | User_aggregateKeySpecifier),
		fields?: User_aggregateFieldPolicy,
	},
	User_aggregate_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | User_aggregate_fieldsKeySpecifier | (() => undefined | User_aggregate_fieldsKeySpecifier),
		fields?: User_aggregate_fieldsFieldPolicy,
	},
	User_max_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | User_max_fieldsKeySpecifier | (() => undefined | User_max_fieldsKeySpecifier),
		fields?: User_max_fieldsFieldPolicy,
	},
	User_min_fields: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | User_min_fieldsKeySpecifier | (() => undefined | User_min_fieldsKeySpecifier),
		fields?: User_min_fieldsFieldPolicy,
	},
	User_mutation_response: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | User_mutation_responseKeySpecifier | (() => undefined | User_mutation_responseKeySpecifier),
		fields?: User_mutation_responseFieldPolicy,
	},
	mutation_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | mutation_rootKeySpecifier | (() => undefined | mutation_rootKeySpecifier),
		fields?: mutation_rootFieldPolicy,
	},
	query_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | query_rootKeySpecifier | (() => undefined | query_rootKeySpecifier),
		fields?: query_rootFieldPolicy,
	},
	subscription_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields: false | subscription_rootKeySpecifier | (() => undefined | subscription_rootKeySpecifier),
		fields?: subscription_rootFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    