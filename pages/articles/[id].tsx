import { articleGraphQL } from '../../graphql/queries/article'
import { useQuery } from '@apollo/react-hooks'
import { useRouter } from 'next/router'
import * as _ from 'lodash'
import { Loading } from '../../components/molecules/Loading'
import { Error } from '../../components/molecules/Error'
import MainLayout from '../../components/templates/MainLayout'
import { ArticleShow } from '../../components/organisms/ArticleShow'

const Article = () => {
  const router = useRouter()
  const { id } = router.query
  const { loading, data, error} = useQuery(articleGraphQL, {
    variables: { where: { id } }
  })
  const title = _.get(data, 'article.title')

  if (loading) {
    return (
      <MainLayout title="Article Loading">
        <Loading />
      </MainLayout>
    )
  }

  if (error) {
    return (
      <MainLayout title="Article Loading Error">
        <Error errorText={`${error}`} />
      </MainLayout>
    )
  }

  if (!title) {
    return (
      <MainLayout title="Invalid article">
        <Error errorText="Invalid article" />
      </MainLayout>
    )
  }

  return (
    <MainLayout title={title}>
      <ArticleShow article={data.article} />
    </MainLayout>
  )
}

export default Article
