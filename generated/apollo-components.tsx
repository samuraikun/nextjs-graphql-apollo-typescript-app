export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Long: any;
  RGBAHue: any;
  Json: any;
  RGBATransparency: any;
  RichTextAST: any;
  Hex: any;
};

export type AssetTransformationInput = {
  image?: Maybe<ImageTransformationInput>;
  document?: Maybe<DocumentTransformationInput>;
  validateOptions?: Maybe<Scalars['Boolean']>;
};

export type AssetWhereInput = {
  _search?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<AssetWhereInput>>;
  OR?: Maybe<Array<AssetWhereInput>>;
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  handle?: Maybe<Scalars['String']>;
  handle_not?: Maybe<Scalars['String']>;
  handle_in?: Maybe<Array<Scalars['String']>>;
  handle_not_in?: Maybe<Array<Scalars['String']>>;
  handle_contains?: Maybe<Scalars['String']>;
  handle_not_contains?: Maybe<Scalars['String']>;
  handle_starts_with?: Maybe<Scalars['String']>;
  handle_not_starts_with?: Maybe<Scalars['String']>;
  handle_ends_with?: Maybe<Scalars['String']>;
  handle_not_ends_with?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  fileName_not?: Maybe<Scalars['String']>;
  fileName_in?: Maybe<Array<Scalars['String']>>;
  fileName_not_in?: Maybe<Array<Scalars['String']>>;
  fileName_contains?: Maybe<Scalars['String']>;
  fileName_not_contains?: Maybe<Scalars['String']>;
  fileName_starts_with?: Maybe<Scalars['String']>;
  fileName_not_starts_with?: Maybe<Scalars['String']>;
  fileName_ends_with?: Maybe<Scalars['String']>;
  fileName_not_ends_with?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  height_not?: Maybe<Scalars['Float']>;
  height_in?: Maybe<Array<Scalars['Float']>>;
  height_not_in?: Maybe<Array<Scalars['Float']>>;
  height_lt?: Maybe<Scalars['Float']>;
  height_lte?: Maybe<Scalars['Float']>;
  height_gt?: Maybe<Scalars['Float']>;
  height_gte?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  width_not?: Maybe<Scalars['Float']>;
  width_in?: Maybe<Array<Scalars['Float']>>;
  width_not_in?: Maybe<Array<Scalars['Float']>>;
  width_lt?: Maybe<Scalars['Float']>;
  width_lte?: Maybe<Scalars['Float']>;
  width_gt?: Maybe<Scalars['Float']>;
  width_gte?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  size_not?: Maybe<Scalars['Float']>;
  size_in?: Maybe<Array<Scalars['Float']>>;
  size_not_in?: Maybe<Array<Scalars['Float']>>;
  size_lt?: Maybe<Scalars['Float']>;
  size_lte?: Maybe<Scalars['Float']>;
  size_gt?: Maybe<Scalars['Float']>;
  size_gte?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  mimeType_not?: Maybe<Scalars['String']>;
  mimeType_in?: Maybe<Array<Scalars['String']>>;
  mimeType_not_in?: Maybe<Array<Scalars['String']>>;
  mimeType_contains?: Maybe<Scalars['String']>;
  mimeType_not_contains?: Maybe<Scalars['String']>;
  mimeType_starts_with?: Maybe<Scalars['String']>;
  mimeType_not_starts_with?: Maybe<Scalars['String']>;
  mimeType_ends_with?: Maybe<Scalars['String']>;
  mimeType_not_ends_with?: Maybe<Scalars['String']>;
  articleImages_every?: Maybe<ArticleWhereInput>;
  articleImages_some?: Maybe<ArticleWhereInput>;
  articleImages_none?: Maybe<ArticleWhereInput>;
};

export type AssetUpsertInput = {
  create: AssetCreateInput;
  update: AssetUpdateInput;
};

export type AssetConnection = {
   __typename?: 'AssetConnection';
  pageInfo: PageInfo;
  edges: Array<AssetEdge>;
  aggregate: Aggregate;
};

export type AssetEdge = {
   __typename?: 'AssetEdge';
  node: Asset;
  cursor: Scalars['String'];
};

export type UserLikeUpsertWithNestedWhereUniqueInput = {
  where: UserLikeWhereUniqueInput;
  data: UserLikeUpsertInput;
};

export type UserLikeUpdateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['String']>;
};

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export type AssetUpdateInput = {
  handle?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  articleImages?: Maybe<ArticleUpdateManyInlineInput>;
  localizations?: Maybe<AssetUpdateLocalizationsInput>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateManyInlineInput = {
  create?: Maybe<Array<AssetCreateInput>>;
  connect?: Maybe<Array<AssetWhereUniqueInput>>;
};

export enum _MutationInputFieldKind {
  Scalar = 'scalar',
  RichText = 'richText',
  Enum = 'enum',
  Relation = 'relation',
  Union = 'union',
  Virtual = 'virtual'
}


export enum DocumentFileTypes {
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Png = 'png',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Docx = 'docx',
  Pdf = 'pdf',
  Html = 'html',
  Doc = 'doc',
  Xlsx = 'xlsx',
  Xls = 'xls',
  Pptx = 'pptx',
  Ppt = 'ppt'
}

export type AssetUpdateLocalizationsInput = {
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
  update?: Maybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>;
  delete?: Maybe<Array<Locale>>;
};

export type BatchPayload = {
   __typename?: 'BatchPayload';
  count: Scalars['Long'];
};

export type Mutation = {
   __typename?: 'Mutation';
  createArticle?: Maybe<Article>;
  updateArticle?: Maybe<Article>;
  deleteArticle?: Maybe<Article>;
  upsertArticle?: Maybe<Article>;
  publishArticle?: Maybe<Article>;
  unpublishArticle?: Maybe<Article>;
  updateManyArticles: BatchPayload;
  deleteManyArticles: BatchPayload;
  publishManyArticles: BatchPayload;
  unpublishManyArticles: BatchPayload;
  /** @deprecated Asset mutations will be overhauled soon */
  createAsset?: Maybe<Asset>;
  updateAsset?: Maybe<Asset>;
  deleteAsset?: Maybe<Asset>;
  upsertAsset?: Maybe<Asset>;
  publishAsset?: Maybe<Asset>;
  unpublishAsset?: Maybe<Asset>;
  updateManyAssets: BatchPayload;
  deleteManyAssets: BatchPayload;
  publishManyAssets: BatchPayload;
  unpublishManyAssets: BatchPayload;
  createUserLike?: Maybe<UserLike>;
  updateUserLike?: Maybe<UserLike>;
  deleteUserLike?: Maybe<UserLike>;
  upsertUserLike?: Maybe<UserLike>;
  publishUserLike?: Maybe<UserLike>;
  unpublishUserLike?: Maybe<UserLike>;
  updateManyUserLikes: BatchPayload;
  deleteManyUserLikes: BatchPayload;
  publishManyUserLikes: BatchPayload;
  unpublishManyUserLikes: BatchPayload;
};


export type MutationCreateArticleArgs = {
  data: ArticleCreateInput;
};


export type MutationUpdateArticleArgs = {
  where: ArticleWhereUniqueInput;
  data: ArticleUpdateInput;
};


export type MutationDeleteArticleArgs = {
  where: ArticleWhereUniqueInput;
};


export type MutationUpsertArticleArgs = {
  where: ArticleWhereUniqueInput;
  upsert: ArticleUpsertInput;
};


export type MutationPublishArticleArgs = {
  where: ArticleWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishArticleArgs = {
  where: ArticleWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyArticlesArgs = {
  where?: Maybe<ArticleManyWhereInput>;
  data: ArticleUpdateManyInput;
};


export type MutationDeleteManyArticlesArgs = {
  where?: Maybe<ArticleManyWhereInput>;
};


export type MutationPublishManyArticlesArgs = {
  where?: Maybe<ArticleManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyArticlesArgs = {
  where?: Maybe<ArticleManyWhereInput>;
  from?: Array<Stage>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationUpdateAssetArgs = {
  where: AssetWhereUniqueInput;
  data: AssetUpdateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  where: AssetWhereUniqueInput;
  upsert: AssetUpsertInput;
};


export type MutationPublishAssetArgs = {
  where: AssetWhereUniqueInput;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
  to?: Array<Stage>;
};


export type MutationUnpublishAssetArgs = {
  where: AssetWhereUniqueInput;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  data: AssetUpdateManyInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
};


export type MutationPublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  to?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationUnpublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateUserLikeArgs = {
  data: UserLikeCreateInput;
};


export type MutationUpdateUserLikeArgs = {
  where: UserLikeWhereUniqueInput;
  data: UserLikeUpdateInput;
};


export type MutationDeleteUserLikeArgs = {
  where: UserLikeWhereUniqueInput;
};


export type MutationUpsertUserLikeArgs = {
  where: UserLikeWhereUniqueInput;
  upsert: UserLikeUpsertInput;
};


export type MutationPublishUserLikeArgs = {
  where: UserLikeWhereUniqueInput;
  to?: Array<Stage>;
};


export type MutationUnpublishUserLikeArgs = {
  where: UserLikeWhereUniqueInput;
  from?: Array<Stage>;
};


export type MutationUpdateManyUserLikesArgs = {
  where?: Maybe<UserLikeManyWhereInput>;
  data: UserLikeUpdateManyInput;
};


export type MutationDeleteManyUserLikesArgs = {
  where?: Maybe<UserLikeManyWhereInput>;
};


export type MutationPublishManyUserLikesArgs = {
  where?: Maybe<UserLikeManyWhereInput>;
  to?: Array<Stage>;
};


export type MutationUnpublishManyUserLikesArgs = {
  where?: Maybe<UserLikeManyWhereInput>;
  from?: Array<Stage>;
};

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum Stage {
  Published = 'PUBLISHED',
  Draft = 'DRAFT'
}

export type ArticleManyWhereInput = {
  _search?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<ArticleWhereInput>>;
  OR?: Maybe<Array<ArticleWhereInput>>;
  NOT?: Maybe<Array<ArticleWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Scalars['String']>>;
  title_not_in?: Maybe<Array<Scalars['String']>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_starts_with?: Maybe<Scalars['String']>;
  title_not_starts_with?: Maybe<Scalars['String']>;
  title_ends_with?: Maybe<Scalars['String']>;
  title_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Scalars['String']>>;
  description_not_in?: Maybe<Array<Scalars['String']>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  content_not?: Maybe<Scalars['String']>;
  content_in?: Maybe<Array<Scalars['String']>>;
  content_not_in?: Maybe<Array<Scalars['String']>>;
  content_contains?: Maybe<Scalars['String']>;
  content_not_contains?: Maybe<Scalars['String']>;
  content_starts_with?: Maybe<Scalars['String']>;
  content_not_starts_with?: Maybe<Scalars['String']>;
  content_ends_with?: Maybe<Scalars['String']>;
  content_not_ends_with?: Maybe<Scalars['String']>;
  images?: Maybe<AssetWhereInput>;
  owner?: Maybe<Scalars['String']>;
  owner_not?: Maybe<Scalars['String']>;
  owner_in?: Maybe<Array<Scalars['String']>>;
  owner_not_in?: Maybe<Array<Scalars['String']>>;
  owner_contains?: Maybe<Scalars['String']>;
  owner_not_contains?: Maybe<Scalars['String']>;
  owner_starts_with?: Maybe<Scalars['String']>;
  owner_not_starts_with?: Maybe<Scalars['String']>;
  owner_ends_with?: Maybe<Scalars['String']>;
  owner_not_ends_with?: Maybe<Scalars['String']>;
  userLikes?: Maybe<UserLikeWhereInput>;
};

export type UserLikeUpdateManyInlineInput = {
  create?: Maybe<Array<UserLikeCreateInput>>;
  connect?: Maybe<Array<UserLikeConnectInput>>;
  set?: Maybe<Array<UserLikeWhereUniqueInput>>;
  update?: Maybe<Array<UserLikeUpdateWithNestedWhereUniqueInput>>;
  upsert?: Maybe<Array<UserLikeUpsertWithNestedWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserLikeWhereUniqueInput>>;
  delete?: Maybe<Array<UserLikeWhereUniqueInput>>;
};

export type UnpublishLocaleInput = {
  locale: Locale;
  stages: Array<Stage>;
};

export type ImageTransformationInput = {
  resize?: Maybe<ImageResizeInput>;
};

export type UserLikeConnection = {
   __typename?: 'UserLikeConnection';
  pageInfo: PageInfo;
  edges: Array<UserLikeEdge>;
  aggregate: Aggregate;
};

export type UserLikeManyWhereInput = {
  _search?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<UserLikeWhereInput>>;
  OR?: Maybe<Array<UserLikeWhereInput>>;
  NOT?: Maybe<Array<UserLikeWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['String']>;
  user_not?: Maybe<Scalars['String']>;
  user_in?: Maybe<Array<Scalars['String']>>;
  user_not_in?: Maybe<Array<Scalars['String']>>;
  user_contains?: Maybe<Scalars['String']>;
  user_not_contains?: Maybe<Scalars['String']>;
  user_starts_with?: Maybe<Scalars['String']>;
  user_not_starts_with?: Maybe<Scalars['String']>;
  user_ends_with?: Maybe<Scalars['String']>;
  user_not_ends_with?: Maybe<Scalars['String']>;
  article?: Maybe<ArticleWhereInput>;
};

export type UserLikeUpsertInput = {
  create: UserLikeCreateInput;
  update: UserLikeUpdateInput;
};


export type DocumentTransformationInput = {
  output?: Maybe<DocumentOutputInput>;
};

export type ImageResizeInput = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  fit?: Maybe<ImageFit>;
};

export type ArticleCreateOneInlineInput = {
  create?: Maybe<ArticleCreateInput>;
  connect?: Maybe<ArticleWhereUniqueInput>;
};

export type ColorInput = {
  hex?: Maybe<Scalars['Hex']>;
  rgba?: Maybe<RgbaInput>;
};

export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type AssetUpdateManyInlineInput = {
  create?: Maybe<Array<AssetCreateInput>>;
  connect?: Maybe<Array<AssetConnectInput>>;
  set?: Maybe<Array<AssetWhereUniqueInput>>;
  update?: Maybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  upsert?: Maybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
  disconnect?: Maybe<Array<AssetWhereUniqueInput>>;
  delete?: Maybe<Array<AssetWhereUniqueInput>>;
};

export type ArticleWhereInput = {
  _search?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<ArticleWhereInput>>;
  OR?: Maybe<Array<ArticleWhereInput>>;
  NOT?: Maybe<Array<ArticleWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Scalars['String']>>;
  title_not_in?: Maybe<Array<Scalars['String']>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_starts_with?: Maybe<Scalars['String']>;
  title_not_starts_with?: Maybe<Scalars['String']>;
  title_ends_with?: Maybe<Scalars['String']>;
  title_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Scalars['String']>>;
  description_not_in?: Maybe<Array<Scalars['String']>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  content_not?: Maybe<Scalars['String']>;
  content_in?: Maybe<Array<Scalars['String']>>;
  content_not_in?: Maybe<Array<Scalars['String']>>;
  content_contains?: Maybe<Scalars['String']>;
  content_not_contains?: Maybe<Scalars['String']>;
  content_starts_with?: Maybe<Scalars['String']>;
  content_not_starts_with?: Maybe<Scalars['String']>;
  content_ends_with?: Maybe<Scalars['String']>;
  content_not_ends_with?: Maybe<Scalars['String']>;
  images?: Maybe<AssetWhereInput>;
  owner?: Maybe<Scalars['String']>;
  owner_not?: Maybe<Scalars['String']>;
  owner_in?: Maybe<Array<Scalars['String']>>;
  owner_not_in?: Maybe<Array<Scalars['String']>>;
  owner_contains?: Maybe<Scalars['String']>;
  owner_not_contains?: Maybe<Scalars['String']>;
  owner_starts_with?: Maybe<Scalars['String']>;
  owner_not_starts_with?: Maybe<Scalars['String']>;
  owner_ends_with?: Maybe<Scalars['String']>;
  owner_not_ends_with?: Maybe<Scalars['String']>;
  userLikes?: Maybe<UserLikeWhereInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  where: AssetWhereUniqueInput;
  data: AssetUpdateInput;
};

export type AssetUpdateManyLocalizationInput = {
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type AssetCreateOneInlineInput = {
  create?: Maybe<AssetCreateInput>;
  connect?: Maybe<AssetWhereUniqueInput>;
};

export type UserLikeWhereInput = {
  _search?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<UserLikeWhereInput>>;
  OR?: Maybe<Array<UserLikeWhereInput>>;
  NOT?: Maybe<Array<UserLikeWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['String']>;
  user_not?: Maybe<Scalars['String']>;
  user_in?: Maybe<Array<Scalars['String']>>;
  user_not_in?: Maybe<Array<Scalars['String']>>;
  user_contains?: Maybe<Scalars['String']>;
  user_not_contains?: Maybe<Scalars['String']>;
  user_starts_with?: Maybe<Scalars['String']>;
  user_not_starts_with?: Maybe<Scalars['String']>;
  user_ends_with?: Maybe<Scalars['String']>;
  user_not_ends_with?: Maybe<Scalars['String']>;
  article?: Maybe<ArticleWhereInput>;
};

export type AssetUpsertLocalizationInput = {
  update: AssetUpdateLocalizationDataInput;
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type PageInfo = {
   __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
  endCursor?: Maybe<Scalars['String']>;
};

export type ArticleWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type AssetConnectInput = {
  where: AssetWhereUniqueInput;
  position?: Maybe<ConnectPositionInput>;
};

export type AssetUpdateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  localizations?: Maybe<Array<AssetUpdateManyLocalizationInput>>;
};


export type RichText = {
   __typename?: 'RichText';
  raw: Scalars['RichTextAST'];
  html: Scalars['String'];
  markdown: Scalars['String'];
  text: Scalars['String'];
};


export type PublishLocaleInput = {
  locale: Locale;
  stages: Array<Stage>;
};



export type ArticleUpsertWithNestedWhereUniqueInput = {
  where: ArticleWhereUniqueInput;
  data: ArticleUpsertInput;
};

export type AssetCreateLocalizationInput = {
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationDataInput = {
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type UserLikeUpdateOneInlineInput = {
  create?: Maybe<UserLikeCreateInput>;
  update?: Maybe<UserLikeUpdateWithNestedWhereUniqueInput>;
  upsert?: Maybe<UserLikeUpsertWithNestedWhereUniqueInput>;
  connect?: Maybe<UserLikeWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type AssetCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  articleImages?: Maybe<ArticleCreateManyInlineInput>;
  localizations?: Maybe<AssetCreateLocalizationsInput>;
};

export type UserLikeConnectInput = {
  where: UserLikeWhereUniqueInput;
  position?: Maybe<ConnectPositionInput>;
};

export type Color = {
   __typename?: 'Color';
  hex: Scalars['Hex'];
  rgba: Rgba;
  css: Scalars['String'];
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type UserLikeEdge = {
   __typename?: 'UserLikeEdge';
  node: UserLike;
  cursor: Scalars['String'];
};

export type AssetUpdateManyWithNestedWhereInput = {
  where: AssetWhereInput;
  data: AssetUpdateManyInput;
};

export enum ImageFit {
  Clip = 'clip',
  Crop = 'crop',
  Scale = 'scale',
  Max = 'max'
}

export type ArticleEdge = {
   __typename?: 'ArticleEdge';
  node: Article;
  cursor: Scalars['String'];
};

export type ArticleCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  images?: Maybe<AssetCreateOneInlineInput>;
  tags?: Maybe<Scalars['Json']>;
  owner?: Maybe<Scalars['String']>;
  userLikes?: Maybe<UserLikeCreateOneInlineInput>;
};

export type Asset = Node & {
   __typename?: 'Asset';
  stage: Stage;
  locale: Locale;
  localizations: Array<Asset>;
  documentInStages: Array<Asset>;
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  articleImages: Array<Article>;
  url: Scalars['String'];
};


export type AssetLocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type AssetDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type AssetArticleImagesArgs = {
  where?: Maybe<ArticleWhereInput>;
  orderBy?: Maybe<ArticleOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  where: AssetWhereUniqueInput;
  data: AssetUpsertInput;
};

export type UserLikeUpdateInput = {
  user?: Maybe<Scalars['String']>;
  article?: Maybe<ArticleUpdateOneInlineInput>;
};

export enum _FilterKind {
  Search = 'search',
  And = 'AND',
  Or = 'OR',
  Not = 'NOT',
  Eq = 'eq',
  EqNot = 'eq_not',
  In = 'in',
  NotIn = 'not_in',
  Lt = 'lt',
  Lte = 'lte',
  Gt = 'gt',
  Gte = 'gte',
  Contains = 'contains',
  NotContains = 'not_contains',
  StartsWith = 'starts_with',
  NotStartsWith = 'not_starts_with',
  EndsWith = 'ends_with',
  NotEndsWith = 'not_ends_with',
  ContainsAll = 'contains_all',
  ContainsSome = 'contains_some',
  ContainsNone = 'contains_none',
  RelationalSingle = 'relational_single',
  RelationalEvery = 'relational_every',
  RelationalSome = 'relational_some',
  RelationalNone = 'relational_none'
}


export type Article = Node & {
   __typename?: 'Article';
  stage: Stage;
  documentInStages: Array<Article>;
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  images?: Maybe<Asset>;
  tags?: Maybe<Scalars['Json']>;
  owner?: Maybe<Scalars['String']>;
  userLikes?: Maybe<UserLike>;
};


export type ArticleDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

export type ArticleConnection = {
   __typename?: 'ArticleConnection';
  pageInfo: PageInfo;
  edges: Array<ArticleEdge>;
  aggregate: Aggregate;
};

export type ArticleConnectInput = {
  where: ArticleWhereUniqueInput;
  position?: Maybe<ConnectPositionInput>;
};

export type ArticleUpdateManyInlineInput = {
  create?: Maybe<Array<ArticleCreateInput>>;
  connect?: Maybe<Array<ArticleConnectInput>>;
  set?: Maybe<Array<ArticleWhereUniqueInput>>;
  update?: Maybe<Array<ArticleUpdateWithNestedWhereUniqueInput>>;
  upsert?: Maybe<Array<ArticleUpsertWithNestedWhereUniqueInput>>;
  disconnect?: Maybe<Array<ArticleWhereUniqueInput>>;
  delete?: Maybe<Array<ArticleWhereUniqueInput>>;
};

export type Aggregate = {
   __typename?: 'Aggregate';
  count: Scalars['Int'];
};

export type ArticleUpdateInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  images?: Maybe<AssetUpdateOneInlineInput>;
  tags?: Maybe<Scalars['Json']>;
  owner?: Maybe<Scalars['String']>;
  userLikes?: Maybe<UserLikeUpdateOneInlineInput>;
};

export type ArticleUpdateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['Json']>;
  owner?: Maybe<Scalars['String']>;
};

export enum _MutationKind {
  Create = 'create',
  Publish = 'publish',
  Unpublish = 'unpublish',
  Update = 'update',
  Upsert = 'upsert',
  Delete = 'delete',
  UpdateMany = 'updateMany',
  PublishMany = 'publishMany',
  UnpublishMany = 'unpublishMany',
  DeleteMany = 'deleteMany'
}

export type ArticleUpdateWithNestedWhereUniqueInput = {
  where: ArticleWhereUniqueInput;
  data: ArticleUpdateInput;
};

export enum AssetOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC'
}

export type AssetUpdateOneInlineInput = {
  create?: Maybe<AssetCreateInput>;
  update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>;
  upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>;
  connect?: Maybe<AssetWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type UserLikeUpdateManyWithNestedWhereInput = {
  where: UserLikeWhereInput;
  data: UserLikeUpdateManyInput;
};

export type UserLike = Node & {
   __typename?: 'UserLike';
  stage: Stage;
  documentInStages: Array<UserLike>;
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['String']>;
  article?: Maybe<Article>;
};


export type UserLikeDocumentInStagesArgs = {
  stages?: Array<Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type RgbaInput = {
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};

export type Node = {
  id: Scalars['ID'];
  stage: Stage;
};

export type ConnectPositionInput = {
  after?: Maybe<Scalars['ID']>;
  before?: Maybe<Scalars['ID']>;
  start?: Maybe<Scalars['Boolean']>;
  end?: Maybe<Scalars['Boolean']>;
};

export type AssetManyWhereInput = {
  _search?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<AssetWhereInput>>;
  OR?: Maybe<Array<AssetWhereInput>>;
  NOT?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  articleImages_every?: Maybe<ArticleWhereInput>;
  articleImages_some?: Maybe<ArticleWhereInput>;
  articleImages_none?: Maybe<ArticleWhereInput>;
};

export type AssetCreateLocalizationsInput = {
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
};

export type DocumentOutputInput = {
  format?: Maybe<DocumentFileTypes>;
};

export enum ArticleOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  OwnerAsc = 'owner_ASC',
  OwnerDesc = 'owner_DESC'
}

export type UserLikeUpdateWithNestedWhereUniqueInput = {
  where: UserLikeWhereUniqueInput;
  data: UserLikeUpdateInput;
};

export type UserLikeCreateManyInlineInput = {
  create?: Maybe<Array<UserLikeCreateInput>>;
  connect?: Maybe<Array<UserLikeWhereUniqueInput>>;
};

export type ArticleUpdateManyWithNestedWhereInput = {
  where: ArticleWhereInput;
  data: ArticleUpdateManyInput;
};

export type ArticleCreateManyInlineInput = {
  create?: Maybe<Array<ArticleCreateInput>>;
  connect?: Maybe<Array<ArticleWhereUniqueInput>>;
};

export enum UserLikeOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UserAsc = 'user_ASC',
  UserDesc = 'user_DESC'
}

export type UserLikeCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<Scalars['String']>;
  article?: Maybe<ArticleCreateOneInlineInput>;
};


export type Location = {
   __typename?: 'Location';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  distance: Scalars['Float'];
};


export type LocationDistanceArgs = {
  from: LocationInput;
};

export type UserLikeCreateOneInlineInput = {
  create?: Maybe<UserLikeCreateInput>;
  connect?: Maybe<UserLikeWhereUniqueInput>;
};

export type Rgba = {
   __typename?: 'RGBA';
  r: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  b: Scalars['RGBAHue'];
  a: Scalars['RGBATransparency'];
};

export enum _RelationInputCardinality {
  One = 'one',
  Many = 'many'
}

export enum Locale {
  En = 'en'
}

export type ArticleUpsertInput = {
  create: ArticleCreateInput;
  update: ArticleUpdateInput;
};

export type ArticleUpdateOneInlineInput = {
  create?: Maybe<ArticleCreateInput>;
  update?: Maybe<ArticleUpdateWithNestedWhereUniqueInput>;
  upsert?: Maybe<ArticleUpsertWithNestedWhereUniqueInput>;
  connect?: Maybe<ArticleWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type UserLikeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Query = {
   __typename?: 'Query';
  node?: Maybe<Node>;
  articles: Array<Article>;
  article?: Maybe<Article>;
  articlesConnection: ArticleConnection;
  assets: Array<Asset>;
  asset?: Maybe<Asset>;
  assetsConnection: AssetConnection;
  userLikes: Array<UserLike>;
  userLike?: Maybe<UserLike>;
  userLikesConnection: UserLikeConnection;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryArticlesArgs = {
  where?: Maybe<ArticleWhereInput>;
  orderBy?: Maybe<ArticleOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryArticleArgs = {
  where: ArticleWhereUniqueInput;
  stage?: Stage;
};


export type QueryArticlesConnectionArgs = {
  where?: Maybe<ArticleWhereInput>;
  orderBy?: Maybe<ArticleOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryAssetsArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetArgs = {
  where: AssetWhereUniqueInput;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryAssetsConnectionArgs = {
  where?: Maybe<AssetWhereInput>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
  locales?: Array<Locale>;
};


export type QueryUserLikesArgs = {
  where?: Maybe<UserLikeWhereInput>;
  orderBy?: Maybe<UserLikeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};


export type QueryUserLikeArgs = {
  where: UserLikeWhereUniqueInput;
  stage?: Stage;
};


export type QueryUserLikesConnectionArgs = {
  where?: Maybe<UserLikeWhereInput>;
  orderBy?: Maybe<UserLikeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  stage?: Stage;
};

export type CreateArticleGraphQlMutationVariables = {
  data: ArticleCreateInput;
};


export type CreateArticleGraphQlMutation = (
  { __typename?: 'Mutation' }
  & { createArticle?: Maybe<(
    { __typename?: 'Article' }
    & Pick<Article, 'id' | 'title' | 'content' | 'description' | 'tags' | 'owner'>
    & { userLikes?: Maybe<(
      { __typename?: 'UserLike' }
      & Pick<UserLike, 'id'>
    )>, images?: Maybe<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle'>
    )> }
  )> }
);

export type CreateUserLikeGraphQlMutationVariables = {
  data: UserLikeCreateInput;
};


export type CreateUserLikeGraphQlMutation = (
  { __typename?: 'Mutation' }
  & { createUserLike?: Maybe<(
    { __typename?: 'UserLike' }
    & Pick<UserLike, 'id' | 'user'>
    & { article?: Maybe<(
      { __typename?: 'Article' }
      & Pick<Article, 'id'>
    )> }
  )> }
);

export type DeleteArticleGraphQlMutationVariables = {
  where: ArticleWhereUniqueInput;
};


export type DeleteArticleGraphQlMutation = (
  { __typename?: 'Mutation' }
  & { deleteArticle?: Maybe<(
    { __typename?: 'Article' }
    & Pick<Article, 'id'>
  )> }
);

export type DeleteAssetGraphQlMutationVariables = {
  where: AssetWhereUniqueInput;
};


export type DeleteAssetGraphQlMutation = (
  { __typename?: 'Mutation' }
  & { deleteAsset?: Maybe<(
    { __typename?: 'Asset' }
    & Pick<Asset, 'id'>
  )> }
);

export type DeleteUserLikeGraphQlMutationVariables = {
  where: UserLikeWhereUniqueInput;
};


export type DeleteUserLikeGraphQlMutation = (
  { __typename?: 'Mutation' }
  & { deleteUserLike?: Maybe<(
    { __typename?: 'UserLike' }
    & Pick<UserLike, 'id' | 'user'>
  )> }
);

export type UpdateArticleGraphQlMutationVariables = {
  data: ArticleUpdateInput;
  where: ArticleWhereUniqueInput;
};


export type UpdateArticleGraphQlMutation = (
  { __typename?: 'Mutation' }
  & { updateArticle?: Maybe<(
    { __typename?: 'Article' }
    & Pick<Article, 'id' | 'title' | 'content' | 'description' | 'tags' | 'owner'>
    & { userLikes?: Maybe<(
      { __typename?: 'UserLike' }
      & Pick<UserLike, 'id'>
    )>, images?: Maybe<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle'>
    )> }
  )> }
);

export type ArticleGraphQlQueryVariables = {
  where: ArticleWhereUniqueInput;
};


export type ArticleGraphQlQuery = (
  { __typename?: 'Query' }
  & { article?: Maybe<(
    { __typename?: 'Article' }
    & Pick<Article, 'id' | 'title' | 'content' | 'description' | 'tags' | 'owner'>
    & { userLikes?: Maybe<(
      { __typename?: 'UserLike' }
      & Pick<UserLike, 'id' | 'user'>
    )>, images?: Maybe<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle'>
    )> }
  )> }
);

export type ArticlesGraphQlQueryVariables = {
  where?: Maybe<ArticleWhereInput>;
};


export type ArticlesGraphQlQuery = (
  { __typename?: 'Query' }
  & { articles: Array<(
    { __typename?: 'Article' }
    & Pick<Article, 'id' | 'title' | 'content' | 'description' | 'tags' | 'owner'>
    & { userLikes?: Maybe<(
      { __typename?: 'UserLike' }
      & Pick<UserLike, 'id' | 'user'>
    )>, images?: Maybe<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle'>
    )> }
  )> }
);

export type UserLikeGraphQlQueryVariables = {
  where: UserLikeWhereUniqueInput;
};


export type UserLikeGraphQlQuery = (
  { __typename?: 'Query' }
  & { userLike?: Maybe<(
    { __typename?: 'UserLike' }
    & Pick<UserLike, 'id' | 'user'>
    & { article?: Maybe<(
      { __typename?: 'Article' }
      & Pick<Article, 'id' | 'title' | 'content' | 'description' | 'tags' | 'owner'>
      & { userLikes?: Maybe<(
        { __typename?: 'UserLike' }
        & Pick<UserLike, 'id' | 'user'>
      )>, images?: Maybe<(
        { __typename?: 'Asset' }
        & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle'>
      )> }
    )> }
  )> }
);

export type UserLikesGraphQlQueryVariables = {
  where?: Maybe<UserLikeWhereInput>;
};


export type UserLikesGraphQlQuery = (
  { __typename?: 'Query' }
  & { userLikes: Array<(
    { __typename?: 'UserLike' }
    & Pick<UserLike, 'id' | 'user'>
    & { article?: Maybe<(
      { __typename?: 'Article' }
      & Pick<Article, 'id' | 'title' | 'content' | 'description' | 'tags' | 'owner'>
      & { userLikes?: Maybe<(
        { __typename?: 'UserLike' }
        & Pick<UserLike, 'id' | 'user'>
      )>, images?: Maybe<(
        { __typename?: 'Asset' }
        & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle'>
      )> }
    )> }
  )> }
);
