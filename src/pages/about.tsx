import React from 'react';
import Layout from '@theme/Layout';

import styled, { DefaultTheme, ThemeProvider } from 'styled-components';
// 样式定义
const Container = styled.div`
  max-width: 1200px;
  min-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 30px;
  position: relative;

  &:after {
    content: '';
    width: 80px;
    height: 4px;
    background-color: #007bff;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SubTitle = styled.h2`
  font-size: 1.8rem;
  color: #007bff;
  margin-bottom: 20px;
  border-left: 4px solid #007bff;
  padding-left: 10px;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`;

const TeamList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const TeamMember = styled.li`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const MemberName = styled.h3`
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 10px;
`;

const MemberRole = styled.p`
  font-size: 1rem;
  color: #777;
  margin-bottom: 15px;
`;

const JoinButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

// 定义主题对象
// const themes = {
//   light: {
//     background: '#f9f9f9',
//     text: '#333',
//     primary: '#007bff',
//     secondary: '#555',
//     cardBackground: '#fff',
//     shadow: 'rgba(0, 0, 0, 0.1)',
//     buttonHover: '#0056b3',
//   },
//   dark: {
//     background: '#1e1e1e',
//     text: '#e0e0e0',
//     primary: '#4da6ff',
//     secondary: '#b0b0b0',
//     cardBackground: '#2d2d2d',
//     shadow: 'rgba(255, 255, 255, 0.1)',
//     buttonHover: '#357abd',
//   },
// };



function about() {
  // const { isDarkTheme } = useThemeContext();
  // const currentTheme = isDarkTheme ? themes.dark : themes.light;

    return (<>
        <Layout title="About" description="Hello React Page">
           {/* <ThemeProvider theme={currentTheme}> */}
            <Container>
                <Title>关于我们</Title>

                <Section>
                    <SubTitle>团队人员</SubTitle>
                    <Paragraph>
                        WJQserver Studio是一个简单的小团体, 在兴趣和组织需求下构建项目
                    </Paragraph>
                    <TeamList>
                        <TeamMember>
                            <MemberName>John Doe</MemberName>
                            <MemberRole>Founder & CEO</MemberRole>
                            <Paragraph>John leads the vision and strategy of our company with over 15 years of experience in tech.</Paragraph>
                        </TeamMember>
                        <TeamMember>
                            <MemberName>Jane Smith</MemberName>
                            <MemberRole>CTO</MemberRole>
                            <Paragraph>Jane drives our technological innovations and ensures we stay ahead of the curve.</Paragraph>
                        </TeamMember>
                        <TeamMember>
                            <MemberName>Mike Johnson</MemberName>
                            <MemberRole>Lead Designer</MemberRole>
                            <Paragraph>Mike crafts beautiful and intuitive designs that enhance user experiences.</Paragraph>
                        </TeamMember>
                    </TeamList>
                </Section>

                <Section>
                    <SubTitle>联系我们</SubTitle>
                    <Paragraph>
                        若想加入本组织或与本组织取得联系, 请使用以下联系方式
                    </Paragraph>
                    <Paragraph>
                        {/* <strong>Why Join Us?</strong> */}
                        <ul>
                            <li>邮箱:<a href="mailto:admin@wjqserver.com">admin@wjqserver.com</a> </li>
                            <li>TG群聊: <a href="https://t.me/wjqserver_pro">https://t.me/wjqserver_pro</a>  </li>
                            <li>加入本团队: 请前往此仓库发起申请issue, 谢谢</li>

                        </ul>
                    </Paragraph>

                    <SubTitle>赞助我们</SubTitle>
                    <Paragraph>
                        若您觉得项目有所帮助, 可以通过以下方式赞助我们
                    </Paragraph>
                    <ul>
                        <li>爱发电:<a href="https://afdian.com/a/wjqserver"> https://afdian.com/a/wjqserver</a> </li>
                        <li>USDT(TRC20): <code>TNfSYG6F2vkiibd6J6mhhHNWDgWgNdF5hN</code>  </li>
                    </ul>
                </Section>
            </Container>
             {/* </ThemeProvider> */}
        </Layout>
    </>);
}

export default about;


function useThemeContext(): { isDarkTheme: any; } {
  throw new Error('Function not implemented.');
}

