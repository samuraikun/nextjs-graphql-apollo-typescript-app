import { Layout, Menu } from 'antd'
import Link from 'next/link'
import styled from 'styled-components'
import { useFetchUser } from '../../utils/user'

const { Header } = Layout
const StyledHeader = styled(Header)`
  ${({ theme }) => `
    background-color: ${theme['header-color']};
    border-bottom-color: ${theme['header-border-color']};
    border-bottom-width: 1px;
    border-bottom-style: solid;
    text-align: right;
    display: flex;
    li {
      font-size: ${theme['font-size-md']};
    }
  `}
`

const StyledMenu = styled(Menu)`
  border-bottom-width: 0px;
  width: 50%;
  @media (max-width: 890px) {
    width: 100%;
  }
`

const TitleContainer = styled.div`
  ${({ theme }) => `
    background-color: ${theme['header-color']};
    width: 50%;
    display: flex;
    align-items: center;
    @media (max-width: 890px) {
      visibility: hidden;
      width: 0;
    }
  `}
`

const Title = styled.div`
  ${({ theme }) => `
    text-align: left;
    display: flex;
    line-height: 50px;
    div {
      width: 100%;
      padding-left: ${theme['padding-small']};
    }
    h2 {
      display: inline;
      color: inherit;
    }
    img {
      width: 64px;
    }
    p {
      line-height: 0;
    }
  `}
`

const MainNavbar = () => {
  const { user, loading } = useFetchUser()

  return (
    <StyledHeader>
      <TitleContainer>
        <Title>
          <img src="/logo.svg" alt="logo" />
          <div>
            <h2>ミカン食ってみな！飛ぶぞ！🍊</h2>
            <p>方針がブレブレなメディアサイト</p>
          </div>
        </Title>
      </TitleContainer>
      <StyledMenu theme="light" mode="horizontal" style={{ lineHeight: '64px' }}>
        <Menu.Item key="/">
          <Link href="/">
            <a>Home</a>
          </Link>
        </Menu.Item>
        {user && !loading
          ? [
              <Menu.Item key="/my-articles">
                <Link href="/my-articles">
                  <a>My Articles</a>
                </Link>
              </Menu.Item>,
              <Menu.Item key="/api/logout">
                <Link href="/api/logout">
                  <a>ログアウト</a>
                </Link>
              </Menu.Item>
            ]
          : [
            <Menu.Item key="/api/login">
              <Link href="/api/login">
                <a>ログイン</a>
              </Link>
            </Menu.Item>
          ]
        }
      </StyledMenu>
    </StyledHeader>
  )
}

export default MainNavbar
