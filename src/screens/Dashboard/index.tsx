import React from 'react';

import { 
    Container, 
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreetings,
    UserName,
    Icon,
     } from './styles';


export function Dashboard() {
    return(
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={ {uri: 'https://avatars.githubusercontent.com/u/67395443?v=5'}} />
                        <User>
                            <UserGreetings>Olá, </UserGreetings>
                            <UserName>Lucas</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power"/>
                </UserWrapper>
            </Header>
        </Container>
    );
}