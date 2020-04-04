import { FC, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { Layout } from 'antd'
import styled from 'styled-components'
import { theme } from '../../utils/theme'
import { GlobalStyle } from '../../utils/globalStyle'
import MainHead from '../organisms/MainHead'
import MainFooter from '../organisms/MainFooter'
import MainNavbar from '../organisms/MainNavbar'

const { Content } = Layout
const StyledBody = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

interface IProps {
  children: ReactNode;
  title?: string;
}

const MainLayout: FC<IProps> = ({ children, title }) => (
  <ThemeProvider theme={theme}>
    <MainHead title={title} />
    <GlobalStyle />
    <StyledBody>
      <Layout>
        <MainNavbar />
        <Content>{children}</Content>
        <MainFooter />
      </Layout>
    </StyledBody>
  </ThemeProvider>
)

export default MainLayout
