import React from 'react'
import Countainer from '../../layouts/Countainer'
import Sidebar from '../../components/sidebar/Sidebar'
import Main from '../../layouts/Main'
import WhoToFollow from '../../components/WhoToFollow/WhoToFollow'
import HeadTweet from "./HeadTweet";
import Post from '../../components/posts/Post'

export default function Home() {
    return (
        <Countainer>
            <Sidebar />
            <Main>
                <HeadTweet />
                {/* ============= POST ============= */}
                <Post
                    usename={"ossama banzima"}
                    tagname={"@ossamabanzima"}
                    verify={true}
                    title={"only boys can bet me in my terrantory"}
                    tweet={
                    "https://i.pinimg.com/564x/fb/a3/47/fba34776c01f241f3481d392fd296aaf.jpg"
                    }
                />
                <Post
                    usename={"ossama banzima"}
                    tagname={"@ossamabanzima"}
                    verify={true}
                    title={"only boys can bet me in my terrantory"}
                />
            </Main>
            <WhoToFollow />
        </Countainer>
    );
}
