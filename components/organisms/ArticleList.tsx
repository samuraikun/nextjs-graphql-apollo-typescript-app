import { QueryHookOptions, useQuery } from '@apollo/react-hooks'
import * as _ from 'lodash'
import { articlesGraphQL } from '../../graphql/queries/articles'
import { userLikesGraphQL } from '../../graphql/queries/userLikes'
import { Row } from 'antd'
import { Article } from '../../generated/apollo-components'
import { Error } from '../molecules/Error'
import { Loading } from '../molecules/Loading'
import { Warning } from '../molecules/Warning'
import { ArticleListItem } from './ArticleListItem'

export enum queryEnum {
  userLikes = 'userLikes',
  articles = 'articles',
}

type ArticlesListProps = {
  options?: QueryHookOptions;
  parentRoute: string;
  queryType: queryEnum;
}

export const ArticlesList = ({ options, parentRoute, queryType }: ArticlesListProps) => {
  const query = queryType === queryEnum.articles ? articlesGraphQL : userLikesGraphQL
  const { loading, data, error } = useQuery(query, options)

  const parentArray = _.get(data, queryType)
  const articlesList = _.map(parentArray, value => _.get(value, 'article', value))

  if (loading) return <Loading />
  if (error || !articlesList) return <Error errorText={`${error}`} />
  if (articlesList.length === 0) {
    return (
      <Warning
        warningHeader="No Articles"
        warningText="記事がまだありません。"
      />
    )
  }

  return (
    <Row>
      {articlesList.map((article: Article) => (
        <ArticleListItem
          article={article}
          key={`${article.id}-${queryType}`}
          parentRoute={parentRoute}
        />
      ))}
    </Row>
  )
}
