'use client';

import styled from "styled-components";
import Link from 'next/link'; // ✅ 추가

const popularPostList = [
  { id: 1, date: "2025-05-16", title: "점심 뭐 먹지" },
  { id: 2, date: "2025-05-16", title: "내일 주말" },
  { id: 3, date: "2025-05-16", title: "비 오는데 집에 언제가" },
  { id: 4, date: "2025-05-16", title: "언제가냐" },
  { id: 5, date: "2025-05-16", title: "ㅠㅠ" },
  { id: 6, date: "2025-05-16", title: "집가고싶다" },
];

export default function Home() {
  return (
    <>
      <TopBar>
        <Logo>MaskBook</Logo>
        <SignIn>sign in</SignIn>
      </TopBar>
      <Main>
        <LeftPanel>
          <SearchWrapper>
            <SearchIcon>🔍</SearchIcon>
            <SearchInput placeholder="검색어를 입력하세요" />
          </SearchWrapper>

          <PopularTitle>🖤 popular</PopularTitle>
          <Table>
            {popularPostList.map((post) => (
  <Row key={post.id}>
    <Link href={`/post/${post.id}`}>
  <Title>{post.title}</Title>
</Link>


    <Date>{post.date}</Date>
  </Row>
))}
          </Table>
        </LeftPanel>
        <RightPanel>
         <AdImage src="/ad.png" alt="광고" />
        </RightPanel>
      </Main>
    </>
  );
}
const TopBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  background-color: #ff8a8a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  z-index: 999;
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: white;
`;

const SignIn = styled.div`
  font-size: 14px;
  background-color: white;
  padding: 6px 12px;
  border-radius: 4px;
  color: #ff8a8a;
  font-weight: bold;
  cursor: pointer;
`;

const Main = styled.div`
  margin-top: 80px;
  display: flex;

  /* ✅ 왼쪽만 여백 크게 주고 오른쪽은 유지 */
  padding-left: 150px;
  padding-right: 20px;

  gap: 12px; /* 패널 간 간격은 좁게 유지 */
`;



const LeftPanel = styled.div`
  width: 68%;
`;

const RightPanel = styled.div`
  width: 32%;
  display: flex;
  justify-content: center;
`;


const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid black;
  border-radius: 30px;
  padding: 6px 16px;
  margin-bottom: 20px;
`;

const SearchIcon = styled.span`
  font-size: 20px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  margin-left: 8px;
  width: 100%;
`;

const PopularTitle = styled.h3`
  font-size: 18px;
  margin: 20px 0 10px;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding: 8px 0;
`;

const Title = styled.a`
  all: unset;
  font-size: 14px;
  color: black;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;



const Date = styled.div`
  font-size: 14px;
  color: #888;
`;

const AdImage = styled.img`
  width: 180px;
  border-radius: 8px;
`;
