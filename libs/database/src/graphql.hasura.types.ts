export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  timestamptz: { input: string; output: string; }
  uuid: { input: string; output: string; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq: InputMaybe<Scalars['Boolean']['input']>;
  _gt: InputMaybe<Scalars['Boolean']['input']>;
  _gte: InputMaybe<Scalars['Boolean']['input']>;
  _in: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null: InputMaybe<Scalars['Boolean']['input']>;
  _lt: InputMaybe<Scalars['Boolean']['input']>;
  _lte: InputMaybe<Scalars['Boolean']['input']>;
  _neq: InputMaybe<Scalars['Boolean']['input']>;
  _nin: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** columns and relationships of "Files" */
export type Files = {
  __typename: 'Files';
  backup_file_cid: Maybe<Scalars['String']['output']>;
  cid: Scalars['String']['output'];
  counterID: Scalars['String']['output'];
  created_at: Maybe<Scalars['timestamptz']['output']>;
  file_hash: Scalars['String']['output'];
  file_size: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  is_match: Scalars['Boolean']['output'];
  is_verificationFailed: Scalars['Boolean']['output'];
  tx_hash: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "Files" */
export type Files_Aggregate = {
  __typename: 'Files_aggregate';
  aggregate: Maybe<Files_Aggregate_Fields>;
  nodes: Array<Files>;
};

/** aggregate fields of "Files" */
export type Files_Aggregate_Fields = {
  __typename: 'Files_aggregate_fields';
  count: Scalars['Int']['output'];
  max: Maybe<Files_Max_Fields>;
  min: Maybe<Files_Min_Fields>;
};


/** aggregate fields of "Files" */
export type Files_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Files_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "Files". All fields are combined with a logical 'AND'. */
export type Files_Bool_Exp = {
  _and: InputMaybe<Array<Files_Bool_Exp>>;
  _not: InputMaybe<Files_Bool_Exp>;
  _or: InputMaybe<Array<Files_Bool_Exp>>;
  backup_file_cid: InputMaybe<String_Comparison_Exp>;
  cid: InputMaybe<String_Comparison_Exp>;
  counterID: InputMaybe<String_Comparison_Exp>;
  created_at: InputMaybe<Timestamptz_Comparison_Exp>;
  file_hash: InputMaybe<String_Comparison_Exp>;
  file_size: InputMaybe<String_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  is_match: InputMaybe<Boolean_Comparison_Exp>;
  is_verificationFailed: InputMaybe<Boolean_Comparison_Exp>;
  tx_hash: InputMaybe<String_Comparison_Exp>;
  updated_at: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "Files" */
export enum Files_Constraint {
  /** unique or primary key constraint on columns "cid" */
  FilesCidKey = 'Files_cid_key',
  /** unique or primary key constraint on columns "id" */
  FilesPkey = 'Files_pkey'
}

/** input type for inserting data into table "Files" */
export type Files_Insert_Input = {
  backup_file_cid: InputMaybe<Scalars['String']['input']>;
  cid: InputMaybe<Scalars['String']['input']>;
  counterID: InputMaybe<Scalars['String']['input']>;
  created_at: InputMaybe<Scalars['timestamptz']['input']>;
  file_hash: InputMaybe<Scalars['String']['input']>;
  file_size: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  is_match: InputMaybe<Scalars['Boolean']['input']>;
  is_verificationFailed: InputMaybe<Scalars['Boolean']['input']>;
  tx_hash: InputMaybe<Scalars['String']['input']>;
  updated_at: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Files_Max_Fields = {
  __typename: 'Files_max_fields';
  backup_file_cid: Maybe<Scalars['String']['output']>;
  cid: Maybe<Scalars['String']['output']>;
  counterID: Maybe<Scalars['String']['output']>;
  created_at: Maybe<Scalars['timestamptz']['output']>;
  file_hash: Maybe<Scalars['String']['output']>;
  file_size: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  tx_hash: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Files_Min_Fields = {
  __typename: 'Files_min_fields';
  backup_file_cid: Maybe<Scalars['String']['output']>;
  cid: Maybe<Scalars['String']['output']>;
  counterID: Maybe<Scalars['String']['output']>;
  created_at: Maybe<Scalars['timestamptz']['output']>;
  file_hash: Maybe<Scalars['String']['output']>;
  file_size: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  tx_hash: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "Files" */
export type Files_Mutation_Response = {
  __typename: 'Files_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Files>;
};

/** on_conflict condition type for table "Files" */
export type Files_On_Conflict = {
  constraint: Files_Constraint;
  update_columns: Array<Files_Update_Column>;
  where: InputMaybe<Files_Bool_Exp>;
};

/** Ordering options when selecting data from "Files". */
export type Files_Order_By = {
  backup_file_cid: InputMaybe<Order_By>;
  cid: InputMaybe<Order_By>;
  counterID: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  file_hash: InputMaybe<Order_By>;
  file_size: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  is_match: InputMaybe<Order_By>;
  is_verificationFailed: InputMaybe<Order_By>;
  tx_hash: InputMaybe<Order_By>;
  updated_at: InputMaybe<Order_By>;
};

/** primary key columns input for table: Files */
export type Files_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "Files" */
export enum Files_Select_Column {
  /** column name */
  BackupFileCid = 'backup_file_cid',
  /** column name */
  Cid = 'cid',
  /** column name */
  CounterId = 'counterID',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FileHash = 'file_hash',
  /** column name */
  FileSize = 'file_size',
  /** column name */
  Id = 'id',
  /** column name */
  IsMatch = 'is_match',
  /** column name */
  IsVerificationFailed = 'is_verificationFailed',
  /** column name */
  TxHash = 'tx_hash',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "Files" */
export type Files_Set_Input = {
  backup_file_cid: InputMaybe<Scalars['String']['input']>;
  cid: InputMaybe<Scalars['String']['input']>;
  counterID: InputMaybe<Scalars['String']['input']>;
  created_at: InputMaybe<Scalars['timestamptz']['input']>;
  file_hash: InputMaybe<Scalars['String']['input']>;
  file_size: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  is_match: InputMaybe<Scalars['Boolean']['input']>;
  is_verificationFailed: InputMaybe<Scalars['Boolean']['input']>;
  tx_hash: InputMaybe<Scalars['String']['input']>;
  updated_at: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "Files" */
export type Files_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Files_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Files_Stream_Cursor_Value_Input = {
  backup_file_cid: InputMaybe<Scalars['String']['input']>;
  cid: InputMaybe<Scalars['String']['input']>;
  counterID: InputMaybe<Scalars['String']['input']>;
  created_at: InputMaybe<Scalars['timestamptz']['input']>;
  file_hash: InputMaybe<Scalars['String']['input']>;
  file_size: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  is_match: InputMaybe<Scalars['Boolean']['input']>;
  is_verificationFailed: InputMaybe<Scalars['Boolean']['input']>;
  tx_hash: InputMaybe<Scalars['String']['input']>;
  updated_at: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "Files" */
export enum Files_Update_Column {
  /** column name */
  BackupFileCid = 'backup_file_cid',
  /** column name */
  Cid = 'cid',
  /** column name */
  CounterId = 'counterID',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FileHash = 'file_hash',
  /** column name */
  FileSize = 'file_size',
  /** column name */
  Id = 'id',
  /** column name */
  IsMatch = 'is_match',
  /** column name */
  IsVerificationFailed = 'is_verificationFailed',
  /** column name */
  TxHash = 'tx_hash',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Files_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Files_Set_Input>;
  /** filter the rows which have to be updated */
  where: Files_Bool_Exp;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq: InputMaybe<Scalars['String']['input']>;
  _gt: InputMaybe<Scalars['String']['input']>;
  _gte: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike: InputMaybe<Scalars['String']['input']>;
  _in: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex: InputMaybe<Scalars['String']['input']>;
  _is_null: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like: InputMaybe<Scalars['String']['input']>;
  _lt: InputMaybe<Scalars['String']['input']>;
  _lte: InputMaybe<Scalars['String']['input']>;
  _neq: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike: InputMaybe<Scalars['String']['input']>;
  _nin: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "User" */
export type User = {
  __typename: 'User';
  email: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  password: Scalars['String']['output'];
};

/** aggregated selection of "User" */
export type User_Aggregate = {
  __typename: 'User_aggregate';
  aggregate: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "User" */
export type User_Aggregate_Fields = {
  __typename: 'User_aggregate_fields';
  count: Scalars['Int']['output'];
  max: Maybe<User_Max_Fields>;
  min: Maybe<User_Min_Fields>;
};


/** aggregate fields of "User" */
export type User_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<User_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "User". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and: InputMaybe<Array<User_Bool_Exp>>;
  _not: InputMaybe<User_Bool_Exp>;
  _or: InputMaybe<Array<User_Bool_Exp>>;
  email: InputMaybe<String_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  password: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "User" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserPkey = 'User_pkey'
}

/** input type for inserting data into table "User" */
export type User_Insert_Input = {
  email: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  password: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename: 'User_max_fields';
  email: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  password: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename: 'User_min_fields';
  email: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  password: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "User" */
export type User_Mutation_Response = {
  __typename: 'User_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** on_conflict condition type for table "User" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
  where: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "User". */
export type User_Order_By = {
  email: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  password: InputMaybe<Order_By>;
};

/** primary key columns input for table: User */
export type User_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "User" */
export enum User_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password'
}

/** input type for updating data in table "User" */
export type User_Set_Input = {
  email: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  password: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "User" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  email: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  password: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "User" */
export enum User_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password'
}

export type User_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<User_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename: 'mutation_root';
  /** delete data from the table: "Files" */
  delete_Files: Maybe<Files_Mutation_Response>;
  /** delete single row from the table: "Files" */
  delete_Files_by_pk: Maybe<Files>;
  /** delete data from the table: "User" */
  delete_User: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "User" */
  delete_User_by_pk: Maybe<User>;
  /** insert data into the table: "Files" */
  insert_Files: Maybe<Files_Mutation_Response>;
  /** insert a single row into the table: "Files" */
  insert_Files_one: Maybe<Files>;
  /** insert data into the table: "User" */
  insert_User: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "User" */
  insert_User_one: Maybe<User>;
  /** update data of the table: "Files" */
  update_Files: Maybe<Files_Mutation_Response>;
  /** update single row of the table: "Files" */
  update_Files_by_pk: Maybe<Files>;
  /** update multiples rows of table: "Files" */
  update_Files_many: Maybe<Array<Maybe<Files_Mutation_Response>>>;
  /** update data of the table: "User" */
  update_User: Maybe<User_Mutation_Response>;
  /** update single row of the table: "User" */
  update_User_by_pk: Maybe<User>;
  /** update multiples rows of table: "User" */
  update_User_many: Maybe<Array<Maybe<User_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_FilesArgs = {
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Files_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_FilesArgs = {
  objects: Array<Files_Insert_Input>;
  on_conflict: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Files_OneArgs = {
  object: Files_Insert_Input;
  on_conflict: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_FilesArgs = {
  _set: InputMaybe<Files_Set_Input>;
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Files_By_PkArgs = {
  _set: InputMaybe<Files_Set_Input>;
  pk_columns: Files_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Files_ManyArgs = {
  updates: Array<Files_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: Array<User_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename: 'query_root';
  /** fetch data from the table: "Files" */
  Files: Array<Files>;
  /** fetch aggregated fields from the table: "Files" */
  Files_aggregate: Files_Aggregate;
  /** fetch data from the table: "Files" using primary key columns */
  Files_by_pk: Maybe<Files>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk: Maybe<User>;
};


export type Query_RootFilesArgs = {
  distinct_on: InputMaybe<Array<Files_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Files_Order_By>>;
  where: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootFiles_AggregateArgs = {
  distinct_on: InputMaybe<Array<Files_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Files_Order_By>>;
  where: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootFiles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUserArgs = {
  distinct_on: InputMaybe<Array<User_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<User_Order_By>>;
  where: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on: InputMaybe<Array<User_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<User_Order_By>>;
  where: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Subscription_Root = {
  __typename: 'subscription_root';
  /** fetch data from the table: "Files" */
  Files: Array<Files>;
  /** fetch aggregated fields from the table: "Files" */
  Files_aggregate: Files_Aggregate;
  /** fetch data from the table: "Files" using primary key columns */
  Files_by_pk: Maybe<Files>;
  /** fetch data from the table in a streaming manner: "Files" */
  Files_stream: Array<Files>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk: Maybe<User>;
  /** fetch data from the table in a streaming manner: "User" */
  User_stream: Array<User>;
};


export type Subscription_RootFilesArgs = {
  distinct_on: InputMaybe<Array<Files_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Files_Order_By>>;
  where: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFiles_AggregateArgs = {
  distinct_on: InputMaybe<Array<Files_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Files_Order_By>>;
  where: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFiles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootFiles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Files_Stream_Cursor_Input>>;
  where: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on: InputMaybe<Array<User_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<User_Order_By>>;
  where: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on: InputMaybe<Array<User_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<User_Order_By>>;
  where: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where: InputMaybe<User_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq: InputMaybe<Scalars['timestamptz']['input']>;
  _gt: InputMaybe<Scalars['timestamptz']['input']>;
  _gte: InputMaybe<Scalars['timestamptz']['input']>;
  _in: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null: InputMaybe<Scalars['Boolean']['input']>;
  _lt: InputMaybe<Scalars['timestamptz']['input']>;
  _lte: InputMaybe<Scalars['timestamptz']['input']>;
  _neq: InputMaybe<Scalars['timestamptz']['input']>;
  _nin: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq: InputMaybe<Scalars['uuid']['input']>;
  _gt: InputMaybe<Scalars['uuid']['input']>;
  _gte: InputMaybe<Scalars['uuid']['input']>;
  _in: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null: InputMaybe<Scalars['Boolean']['input']>;
  _lt: InputMaybe<Scalars['uuid']['input']>;
  _lte: InputMaybe<Scalars['uuid']['input']>;
  _neq: InputMaybe<Scalars['uuid']['input']>;
  _nin: InputMaybe<Array<Scalars['uuid']['input']>>;
};
