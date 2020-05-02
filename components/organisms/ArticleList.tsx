import { QueryHookOptions, useQuery } from '@apollo/react-hooks'
import * as _ from 'lodash'
import { articlesGraphQL } from '../../graphql/queries/articles'
import { userLikesGraphQL } from '../../graphql/queries/userLikes'
import { Row } from 'antd'
import { Article } from '../../generated/apollo-components'

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

  if (loading) return <p>Loading...</p>
  if (error || !articlesList) return <p>Error</p>
  if (articlesList.length === 0) return <p>Warning</p>

  return (
    <Row>
      {articlesList.map((article: Article) => (
        <p key={article.id}>{article.title}</p>
      ))}
    </Row>
  )
}
