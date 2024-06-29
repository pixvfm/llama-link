//@ts-nocheck
  // DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
  export function gql(strings: TemplateStringsArray, ...args: string[]): string {
    let str = ''
    strings.forEach((string, i) => {
      str += string + (args[i] || '')
    })
    return str
  }
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
  /** References another document, used as a foreign key */
  Reference: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  breadcrumbs: Array<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  relativePath: Scalars['String']['output'];
  extension: Scalars['String']['output'];
  template: Scalars['String']['output'];
  collection: Collection;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Folder = {
  __typename?: 'Folder';
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  startCursor: Scalars['String']['output'];
  endCursor: Scalars['String']['output'];
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type Document = {
  id: Scalars['ID']['output'];
  _sys?: Maybe<SystemInfo>;
  _values: Scalars['JSON']['output'];
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Float']['output'];
  pageInfo: PageInfo;
};

export type Query = {
  __typename?: 'Query';
  getOptimizedQuery?: Maybe<Scalars['String']['output']>;
  collection: Collection;
  collections: Array<Collection>;
  node: Node;
  document: DocumentNode;
  page: Page;
  pageConnection: PageConnection;
  post: Post;
  postConnection: PostConnection;
  author: Author;
  authorConnection: AuthorConnection;
  nav: Nav;
  navConnection: NavConnection;
};


export type QueryGetOptimizedQueryArgs = {
  queryString: Scalars['String']['input'];
};


export type QueryCollectionArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPageArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPageConnectionArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PageFilter>;
};


export type QueryPostArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPostConnectionArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PostFilter>;
};


export type QueryAuthorArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAuthorConnectionArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AuthorFilter>;
};


export type QueryNavArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNavConnectionArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<NavFilter>;
};

export type DocumentFilter = {
  page?: InputMaybe<PageFilter>;
  post?: InputMaybe<PostFilter>;
  author?: InputMaybe<AuthorFilter>;
  nav?: InputMaybe<NavFilter>;
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<DocumentNode>;
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  format?: Maybe<Scalars['String']['output']>;
  matches?: Maybe<Scalars['String']['output']>;
  templates?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  fields?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  documents: DocumentConnection;
};


export type CollectionDocumentsArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DocumentFilter>;
  folder?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentNode = Page | Post | Author | Nav | Folder;

export type PageBlocksWelcomeHeroLinks = {
  __typename?: 'PageBlocksWelcomeHeroLinks';
  link?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  style?: Maybe<Scalars['String']['output']>;
};

export type PageBlocksWelcomeHero = {
  __typename?: 'PageBlocksWelcomeHero';
  message?: Maybe<Scalars['JSON']['output']>;
  links?: Maybe<Array<Maybe<PageBlocksWelcomeHeroLinks>>>;
};

export type PageBlocksFeatureListFeatures = {
  __typename?: 'PageBlocksFeatureListFeatures';
  icon?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
};

export type PageBlocksFeatureList = {
  __typename?: 'PageBlocksFeatureList';
  byline?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['JSON']['output']>;
  features?: Maybe<Array<Maybe<PageBlocksFeatureListFeatures>>>;
};

export type PageBlocksFeaturedReadingFeaturedPost = Post;

export type PageBlocksFeaturedReading = {
  __typename?: 'PageBlocksFeaturedReading';
  label?: Maybe<Scalars['String']['output']>;
  featuredPost?: Maybe<PageBlocksFeaturedReadingFeaturedPost>;
};

export type PageBlocks = PageBlocksWelcomeHero | PageBlocksFeatureList | PageBlocksFeaturedReading;

export type Page = Node & Document & {
  __typename?: 'Page';
  title?: Maybe<Scalars['String']['output']>;
  blocks?: Maybe<Array<Maybe<PageBlocks>>>;
  id: Scalars['ID']['output'];
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
};

export type StringFilter = {
  startsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type RichTextFilter = {
  startsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageBlocksWelcomeHeroLinksFilter = {
  link?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  style?: InputMaybe<StringFilter>;
};

export type PageBlocksWelcomeHeroFilter = {
  message?: InputMaybe<RichTextFilter>;
  links?: InputMaybe<PageBlocksWelcomeHeroLinksFilter>;
};

export type PageBlocksFeatureListFeaturesFilter = {
  icon?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
};

export type PageBlocksFeatureListFilter = {
  byline?: InputMaybe<StringFilter>;
  message?: InputMaybe<RichTextFilter>;
  features?: InputMaybe<PageBlocksFeatureListFeaturesFilter>;
};

export type PageBlocksFeaturedReadingFeaturedPostFilter = {
  post?: InputMaybe<PostFilter>;
};

export type PageBlocksFeaturedReadingFilter = {
  label?: InputMaybe<StringFilter>;
  featuredPost?: InputMaybe<PageBlocksFeaturedReadingFeaturedPostFilter>;
};

export type PageBlocksFilter = {
  welcomeHero?: InputMaybe<PageBlocksWelcomeHeroFilter>;
  featureList?: InputMaybe<PageBlocksFeatureListFilter>;
  featuredReading?: InputMaybe<PageBlocksFeaturedReadingFilter>;
};

export type PageFilter = {
  title?: InputMaybe<StringFilter>;
  blocks?: InputMaybe<PageBlocksFilter>;
};

export type PageConnectionEdges = {
  __typename?: 'PageConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Page>;
};

export type PageConnection = Connection & {
  __typename?: 'PageConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<PageConnectionEdges>>>;
};

export type PostAuthor = Author;

export type Post = Node & Document & {
  __typename?: 'Post';
  title?: Maybe<Scalars['String']['output']>;
  author?: Maybe<PostAuthor>;
  image?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
};

export type PostAuthorFilter = {
  author?: InputMaybe<AuthorFilter>;
};

export type ImageFilter = {
  startsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostFilter = {
  title?: InputMaybe<StringFilter>;
  author?: InputMaybe<PostAuthorFilter>;
  image?: InputMaybe<ImageFilter>;
  description?: InputMaybe<StringFilter>;
  body?: InputMaybe<RichTextFilter>;
};

export type PostConnectionEdges = {
  __typename?: 'PostConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Post>;
};

export type PostConnection = Connection & {
  __typename?: 'PostConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<PostConnectionEdges>>>;
};

export type Author = Node & Document & {
  __typename?: 'Author';
  name?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
};

export type AuthorFilter = {
  name?: InputMaybe<StringFilter>;
  image?: InputMaybe<ImageFilter>;
};

export type AuthorConnectionEdges = {
  __typename?: 'AuthorConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Author>;
};

export type AuthorConnection = Connection & {
  __typename?: 'AuthorConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<AuthorConnectionEdges>>>;
};

export type NavLinks = {
  __typename?: 'NavLinks';
  label?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
};

export type Nav = Node & Document & {
  __typename?: 'Nav';
  links?: Maybe<Array<Maybe<NavLinks>>>;
  id: Scalars['ID']['output'];
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
};

export type NavLinksFilter = {
  label?: InputMaybe<StringFilter>;
  link?: InputMaybe<StringFilter>;
};

export type NavFilter = {
  links?: InputMaybe<NavLinksFilter>;
};

export type NavConnectionEdges = {
  __typename?: 'NavConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Nav>;
};

export type NavConnection = Connection & {
  __typename?: 'NavConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<NavConnectionEdges>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  updateDocument: DocumentNode;
  deleteDocument: DocumentNode;
  createDocument: DocumentNode;
  updatePage: Page;
  createPage: Page;
  updatePost: Post;
  createPost: Post;
  updateAuthor: Author;
  createAuthor: Author;
  updateNav: Nav;
  createNav: Nav;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String']['input'];
  relativePath: Scalars['String']['input'];
  template?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
  params: DocumentUpdateMutation;
};


export type MutationDeleteDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
};


export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
  params: DocumentMutation;
};


export type MutationUpdatePageArgs = {
  relativePath: Scalars['String']['input'];
  params: PageMutation;
};


export type MutationCreatePageArgs = {
  relativePath: Scalars['String']['input'];
  params: PageMutation;
};


export type MutationUpdatePostArgs = {
  relativePath: Scalars['String']['input'];
  params: PostMutation;
};


export type MutationCreatePostArgs = {
  relativePath: Scalars['String']['input'];
  params: PostMutation;
};


export type MutationUpdateAuthorArgs = {
  relativePath: Scalars['String']['input'];
  params: AuthorMutation;
};


export type MutationCreateAuthorArgs = {
  relativePath: Scalars['String']['input'];
  params: AuthorMutation;
};


export type MutationUpdateNavArgs = {
  relativePath: Scalars['String']['input'];
  params: NavMutation;
};


export type MutationCreateNavArgs = {
  relativePath: Scalars['String']['input'];
  params: NavMutation;
};

export type DocumentUpdateMutation = {
  page?: InputMaybe<PageMutation>;
  post?: InputMaybe<PostMutation>;
  author?: InputMaybe<AuthorMutation>;
  nav?: InputMaybe<NavMutation>;
  relativePath?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentMutation = {
  page?: InputMaybe<PageMutation>;
  post?: InputMaybe<PostMutation>;
  author?: InputMaybe<AuthorMutation>;
  nav?: InputMaybe<NavMutation>;
};

export type PageBlocksWelcomeHeroLinksMutation = {
  link?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  style?: InputMaybe<Scalars['String']['input']>;
};

export type PageBlocksWelcomeHeroMutation = {
  message?: InputMaybe<Scalars['JSON']['input']>;
  links?: InputMaybe<Array<InputMaybe<PageBlocksWelcomeHeroLinksMutation>>>;
};

export type PageBlocksFeatureListFeaturesMutation = {
  icon?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
};

export type PageBlocksFeatureListMutation = {
  byline?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['JSON']['input']>;
  features?: InputMaybe<Array<InputMaybe<PageBlocksFeatureListFeaturesMutation>>>;
};

export type PageBlocksFeaturedReadingMutation = {
  label?: InputMaybe<Scalars['String']['input']>;
  featuredPost?: InputMaybe<Scalars['String']['input']>;
};

export type PageBlocksMutation = {
  welcomeHero?: InputMaybe<PageBlocksWelcomeHeroMutation>;
  featureList?: InputMaybe<PageBlocksFeatureListMutation>;
  featuredReading?: InputMaybe<PageBlocksFeaturedReadingMutation>;
};

export type PageMutation = {
  title?: InputMaybe<Scalars['String']['input']>;
  blocks?: InputMaybe<Array<InputMaybe<PageBlocksMutation>>>;
};

export type PostMutation = {
  title?: InputMaybe<Scalars['String']['input']>;
  author?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['JSON']['input']>;
};

export type AuthorMutation = {
  name?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
};

export type NavLinksMutation = {
  label?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
};

export type NavMutation = {
  links?: InputMaybe<Array<InputMaybe<NavLinksMutation>>>;
};

export type PagePartsFragment = { __typename?: 'Page', title?: string | null, blocks?: Array<{ __typename: 'PageBlocksWelcomeHero', message?: any | null, links?: Array<{ __typename: 'PageBlocksWelcomeHeroLinks', link?: string | null, label?: string | null, style?: string | null } | null> | null } | { __typename: 'PageBlocksFeatureList', byline?: string | null, message?: any | null, features?: Array<{ __typename: 'PageBlocksFeatureListFeatures', icon?: string | null, label?: string | null, description?: string | null } | null> | null } | { __typename: 'PageBlocksFeaturedReading', label?: string | null, featuredPost?: { __typename?: 'Post', title?: string | null, image?: string | null, description?: string | null, body?: any | null, id: string, author?: { __typename?: 'Author', name?: string | null, image?: string | null, id: string, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null };

export type PostPartsFragment = { __typename?: 'Post', title?: string | null, image?: string | null, description?: string | null, body?: any | null, author?: { __typename?: 'Author', name?: string | null, image?: string | null, id: string, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null };

export type AuthorPartsFragment = { __typename?: 'Author', name?: string | null, image?: string | null };

export type NavPartsFragment = { __typename?: 'Nav', links?: Array<{ __typename: 'NavLinks', label?: string | null, link?: string | null } | null> | null };

export type PageQueryVariables = Exact<{
  relativePath: Scalars['String']['input'];
}>;


export type PageQuery = { __typename?: 'Query', page: { __typename?: 'Page', id: string, title?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, blocks?: Array<{ __typename: 'PageBlocksWelcomeHero', message?: any | null, links?: Array<{ __typename: 'PageBlocksWelcomeHeroLinks', link?: string | null, label?: string | null, style?: string | null } | null> | null } | { __typename: 'PageBlocksFeatureList', byline?: string | null, message?: any | null, features?: Array<{ __typename: 'PageBlocksFeatureListFeatures', icon?: string | null, label?: string | null, description?: string | null } | null> | null } | { __typename: 'PageBlocksFeaturedReading', label?: string | null, featuredPost?: { __typename?: 'Post', title?: string | null, image?: string | null, description?: string | null, body?: any | null, id: string, author?: { __typename?: 'Author', name?: string | null, image?: string | null, id: string, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

export type PageConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PageFilter>;
}>;


export type PageConnectionQuery = { __typename?: 'Query', pageConnection: { __typename?: 'PageConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'PageConnectionEdges', cursor: string, node?: { __typename?: 'Page', id: string, title?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, blocks?: Array<{ __typename: 'PageBlocksWelcomeHero', message?: any | null, links?: Array<{ __typename: 'PageBlocksWelcomeHeroLinks', link?: string | null, label?: string | null, style?: string | null } | null> | null } | { __typename: 'PageBlocksFeatureList', byline?: string | null, message?: any | null, features?: Array<{ __typename: 'PageBlocksFeatureListFeatures', icon?: string | null, label?: string | null, description?: string | null } | null> | null } | { __typename: 'PageBlocksFeaturedReading', label?: string | null, featuredPost?: { __typename?: 'Post', title?: string | null, image?: string | null, description?: string | null, body?: any | null, id: string, author?: { __typename?: 'Author', name?: string | null, image?: string | null, id: string, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } | null } | null> | null } };

export type PostQueryVariables = Exact<{
  relativePath: Scalars['String']['input'];
}>;


export type PostQuery = { __typename?: 'Query', post: { __typename?: 'Post', id: string, title?: string | null, image?: string | null, description?: string | null, body?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, author?: { __typename?: 'Author', name?: string | null, image?: string | null, id: string, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } };

export type PostConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PostFilter>;
}>;


export type PostConnectionQuery = { __typename?: 'Query', postConnection: { __typename?: 'PostConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'PostConnectionEdges', cursor: string, node?: { __typename?: 'Post', id: string, title?: string | null, image?: string | null, description?: string | null, body?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, author?: { __typename?: 'Author', name?: string | null, image?: string | null, id: string, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null } | null> | null } };

export type AuthorQueryVariables = Exact<{
  relativePath: Scalars['String']['input'];
}>;


export type AuthorQuery = { __typename?: 'Query', author: { __typename?: 'Author', id: string, name?: string | null, image?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type AuthorConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AuthorFilter>;
}>;


export type AuthorConnectionQuery = { __typename?: 'Query', authorConnection: { __typename?: 'AuthorConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'AuthorConnectionEdges', cursor: string, node?: { __typename?: 'Author', id: string, name?: string | null, image?: string | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

export type NavQueryVariables = Exact<{
  relativePath: Scalars['String']['input'];
}>;


export type NavQuery = { __typename?: 'Query', nav: { __typename?: 'Nav', id: string, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, links?: Array<{ __typename: 'NavLinks', label?: string | null, link?: string | null } | null> | null } };

export type NavConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<NavFilter>;
}>;


export type NavConnectionQuery = { __typename?: 'Query', navConnection: { __typename?: 'NavConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'NavConnectionEdges', cursor: string, node?: { __typename?: 'Nav', id: string, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, links?: Array<{ __typename: 'NavLinks', label?: string | null, link?: string | null } | null> | null } | null } | null> | null } };

export const PagePartsFragmentDoc = gql`
    fragment PageParts on Page {
  title
  blocks {
    __typename
    ... on PageBlocksWelcomeHero {
      message
      links {
        __typename
        link
        label
        style
      }
    }
    ... on PageBlocksFeatureList {
      byline
      message
      features {
        __typename
        icon
        label
        description
      }
    }
    ... on PageBlocksFeaturedReading {
      label
      featuredPost {
        ... on Post {
          title
          author {
            ... on Author {
              name
              image
            }
            ... on Document {
              _sys {
                filename
                basename
                breadcrumbs
                path
                relativePath
                extension
              }
              id
            }
          }
          image
          description
          body
        }
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
      }
    }
  }
}
    `;
export const PostPartsFragmentDoc = gql`
    fragment PostParts on Post {
  title
  author {
    ... on Author {
      name
      image
    }
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
  }
  image
  description
  body
}
    `;
export const AuthorPartsFragmentDoc = gql`
    fragment AuthorParts on Author {
  name
  image
}
    `;
export const NavPartsFragmentDoc = gql`
    fragment NavParts on Nav {
  links {
    __typename
    label
    link
  }
}
    `;
export const PageDocument = gql`
    query page($relativePath: String!) {
  page(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PageParts
  }
}
    ${PagePartsFragmentDoc}`;
export const PageConnectionDocument = gql`
    query pageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PageFilter) {
  pageConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PageParts
      }
    }
  }
}
    ${PagePartsFragmentDoc}`;
export const PostDocument = gql`
    query post($relativePath: String!) {
  post(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PostParts
  }
}
    ${PostPartsFragmentDoc}`;
export const PostConnectionDocument = gql`
    query postConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PostFilter) {
  postConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PostParts
      }
    }
  }
}
    ${PostPartsFragmentDoc}`;
export const AuthorDocument = gql`
    query author($relativePath: String!) {
  author(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...AuthorParts
  }
}
    ${AuthorPartsFragmentDoc}`;
export const AuthorConnectionDocument = gql`
    query authorConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: AuthorFilter) {
  authorConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...AuthorParts
      }
    }
  }
}
    ${AuthorPartsFragmentDoc}`;
export const NavDocument = gql`
    query nav($relativePath: String!) {
  nav(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...NavParts
  }
}
    ${NavPartsFragmentDoc}`;
export const NavConnectionDocument = gql`
    query navConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: NavFilter) {
  navConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...NavParts
      }
    }
  }
}
    ${NavPartsFragmentDoc}`;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
  export function getSdk<C>(requester: Requester<C>) {
    return {
      page(variables: PageQueryVariables, options?: C): Promise<{data: PageQuery, variables: PageQueryVariables, query: string}> {
        return requester<{data: PageQuery, variables: PageQueryVariables, query: string}, PageQueryVariables>(PageDocument, variables, options);
      },
    pageConnection(variables?: PageConnectionQueryVariables, options?: C): Promise<{data: PageConnectionQuery, variables: PageConnectionQueryVariables, query: string}> {
        return requester<{data: PageConnectionQuery, variables: PageConnectionQueryVariables, query: string}, PageConnectionQueryVariables>(PageConnectionDocument, variables, options);
      },
    post(variables: PostQueryVariables, options?: C): Promise<{data: PostQuery, variables: PostQueryVariables, query: string}> {
        return requester<{data: PostQuery, variables: PostQueryVariables, query: string}, PostQueryVariables>(PostDocument, variables, options);
      },
    postConnection(variables?: PostConnectionQueryVariables, options?: C): Promise<{data: PostConnectionQuery, variables: PostConnectionQueryVariables, query: string}> {
        return requester<{data: PostConnectionQuery, variables: PostConnectionQueryVariables, query: string}, PostConnectionQueryVariables>(PostConnectionDocument, variables, options);
      },
    author(variables: AuthorQueryVariables, options?: C): Promise<{data: AuthorQuery, variables: AuthorQueryVariables, query: string}> {
        return requester<{data: AuthorQuery, variables: AuthorQueryVariables, query: string}, AuthorQueryVariables>(AuthorDocument, variables, options);
      },
    authorConnection(variables?: AuthorConnectionQueryVariables, options?: C): Promise<{data: AuthorConnectionQuery, variables: AuthorConnectionQueryVariables, query: string}> {
        return requester<{data: AuthorConnectionQuery, variables: AuthorConnectionQueryVariables, query: string}, AuthorConnectionQueryVariables>(AuthorConnectionDocument, variables, options);
      },
    nav(variables: NavQueryVariables, options?: C): Promise<{data: NavQuery, variables: NavQueryVariables, query: string}> {
        return requester<{data: NavQuery, variables: NavQueryVariables, query: string}, NavQueryVariables>(NavDocument, variables, options);
      },
    navConnection(variables?: NavConnectionQueryVariables, options?: C): Promise<{data: NavConnectionQuery, variables: NavConnectionQueryVariables, query: string}> {
        return requester<{data: NavConnectionQuery, variables: NavConnectionQueryVariables, query: string}, NavConnectionQueryVariables>(NavConnectionDocument, variables, options);
      }
    };
  }
  export type Sdk = ReturnType<typeof getSdk>;

// TinaSDK generated code
import { createClient, TinaClient } from "tinacms/dist/client";

const generateRequester = (client: TinaClient) => {
  const requester: (
    doc: any,
    vars?: any,
    options?: any,
    client
  ) => Promise<any> = async (doc, vars, _options) => {
    const data = await client.request({
      query: doc,
      variables: vars,
    });

    return { data: data?.data, query: doc, variables: vars || {} };
  };

  return requester;
};

/**
 * @experimental this class can be used but may change in the future
 **/
export const ExperimentalGetTinaClient = () =>
  getSdk(
    generateRequester(createClient({ url: "http://localhost:4001/graphql", queries }))
  );

export const queries = (client: TinaClient) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};

  