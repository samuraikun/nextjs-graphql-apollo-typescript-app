import { FC, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../utils/theme'
import { GlobalStyle } from '../../utils/globalStyle'
import MainHead from '../../components/organisms/MainHead'

interface IProps {
  children: ReactNode;
  title?: string;
}

const MainLayout: FC<IProps> = ({ children, title }) => (
  <ThemeProvider theme={theme}>
    <MainHead title={title} />
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

export default MainLayout
