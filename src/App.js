import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header';
import MainSec from './component/main';
import TrendNews from './component/trendingNews';
import Aside from './component/aside';
import News from './component/news';
import React, { useState } from 'react';
import Modal from './component/modal';
import { Route, Routes } from 'react-router-dom';
import AdminLog from './component/AdminLogin';
import Admin from './component/Admin';


function App() {
    let myData = {
        user: {
            name: 'amraa', password: '24657'
        },
        header: {
            logo: require('./images/logo.png'),
            navBar: [
                {
                    id: 1, title: 'Our story', link: '#'
                },
                {
                    id: 2, title: 'Membership', link: '#'
                },
                {
                    id: 3, title: 'Write', link: '#'
                },
                {
                    id: 4, title: 'Sign in', link: '#'
                }
            ],
            btn: {
                btnText: 'Get Started',
                textColor: 'white',
                background: '#000',
                radius: '30px'
            }
        },
        mainSection: {
            img: require('./images/Frame.png'),
            title: 'Stay curious.',
            txt: 'Discover stories, thinking, and expertise from writers on any topic.',
            btn: {
                btnText: 'Start reading',
                textColor: 'white',
                background: '#000',
                radius: '30px',
                size: '20px',
            }
        },
        trendNews: {
            miniLogo: require('./images/Vector.png'),
            title: 'TRENDING ON MEDIUM',
            news: [
                {
                    proImg: require('./images/pro1.png'),
                    proName: 'Barack Obama',
                    title: 'How to Make Money While Learning Data Science in 2023',
                    date: 'Dec 31, 2022',
                    readingTime: '3'
                },
                {
                    proImg: require('./images/pro2.svg'),
                    proName: 'Natassha Selvaraj',
                    title: 'He Used AI to See Today’s Looks of The Famous People From the Past',
                    date: 'Dec 31, 2022',
                    readingTime: '7'
                },
                {
                    proImg: require('./images/pro3.svg'),
                    proName: 'Maria Milojković, MA',
                    title: 'My 2022 End of Year Lists',
                    date: 'Dec 31, 2022',
                    readingTime: '10'
                },
                {
                    proImg: require('./images/pro4.svg'),
                    proName: 'Yang Zhou',
                    title: '9 Python Built-In Decorators That Optimize Your Code Significantly',
                    date: 'Dec 31, 2022',
                    readingTime: '7'
                },
                {
                    proImg: require('./images/pro5.png'),
                    proName: 'Hanif Abdurraqib',
                    title: '100 Favorite Albums of 2022',
                    date: 'Dec 31, 2022',
                    readingTime: '9'
                },
                {
                    proImg: require('./images/pro1.png'),
                    proName: 'Christopher Clemmons',
                    title: 'Structure Your React Project Like a Senior Developer',
                    date: 'Dec 31, 2022',
                    readingTime: '3'
                }
            ]
        },
        news: [
            {
                newsImg: require('./images/news.png'),
                proImg: require('./images/pro1.png'),
                proName: 'Dr. Tom Frieden',
                title: 'Understanding Long Covid',
                txt: 'We know more now than before, and it’s still alarming',
                date: 'Dec 19, 2022',
                readingTime: '9 min read',
                id: 1,
                saved: false,
                btn: {
                    btnText: 'Long Covid',
                    background: '#F2F2F2',
                    radius: '10px',
                    size: '13px',
                    textColor: '#757575'
                }
            },
            {
                newsImg: require('./images/news.png'),
                proImg: require('./images/pro1.png'),
                proName: 'David Bowles',
                title: 'Learning to Cope with Estrangement: When Children “Cancel” Their Parents',
                txt: 'We know more now than before, and it’s still alarming',
                date: 'Dec 19, 2022',
                readingTime: '9 min read',
                id: 2,
                saved: false,
                btn: {
                    btnText: 'Parental Alienation',
                    background: '#F2F2F2',
                    radius: '10px',
                    size: '13px',
                    textColor: '#757575'
                },
            },
            {
                newsImg: require('./images/news.png'),
                proImg: require('./images/pro1.png'),
                proName: 'Ed Ergenzinger',
                title: 'ChatGPT Is Having a Thomas Edison Moment',
                txt: 'Why breakthrough technologies need to be accessible',
                date: 'Dec 19, 2022',
                readingTime: '9 min read',
                id: 3,
                saved: false,
                btn: {
                    btnText: 'Gpt 3',
                    background: '#F2F2F2',
                    radius: '10px',
                    size: '13px',
                    textColor: '#757575'
                }
            },
            {
                newsImg: require('./images/news.png'),
                proImg: require('./images/pro1.png'),
                proName: 'Thomas Smith',
                title: 'Spotify’s Year-End Lists Are the Ultimate Personality Test',
                txt: 'Why the mass sharing of the music streaming service’s year-end lists is uniquely telling',
                date: 'Dec 19, 2022',
                readingTime: '9 min read',
                id: 4,
                saved: false,
                btn: {
                    btnText: 'Music',
                    background: '#F2F2F2',
                    radius: '10px',
                    size: '13px',
                    textColor: '#757575'
                }
            },
            {
                newsImg: require('./images/news.png'),
                proImg: require('./images/pro1.png'),
                proName: 'Allegra Hobbs',
                title: 'Why Your Team Needs a Weekly Metrics Review',
                txt: 'We know more now than before, and it’s still alarming',
                date: 'Dec 19, 2022',
                readingTime: '9 min read',
                id: 5,
                saved: false,
                btn: {
                    btnText: 'Data',
                    background: '#F2F2F2',
                    radius: '10px',
                    size: '13px',
                    textColor: '#757575'
                }
            },
            {
                newsImg: require('./images/news.png'),
                proImg: require('./images/pro1.png'),
                proName: 'Julie Zhuo',
                title: 'Tyrion Lannister and The 7 Habits of Highly Effective People',
                txt: 'We know more now than before, and it’s still alarming',
                date: 'Dec 19, 2022',
                readingTime: '9 min read',
                id: 6,
                saved: false,
                btn: {
                    btnText: 'Game Of Thrones',
                    background: '#F2F2F2',
                    radius: '10px',
                    size: '13px',
                    textColor: '#757575'
                }
            },
            {
                newsImg: require('./images/news.png'),
                proImg: require('./images/pro1.png'),
                proName: 'Elliot Graebert',
                title: 'Microdosing, Mastodon, and Jonah Hill.',
                txt: 'We know more now than before, and it’s still alarming',
                date: 'Dec 19, 2022',
                readingTime: '9 min read',
                id: 7,
                saved: false,
                btn: {
                    btnText: 'Mental Health',
                    background: '#F2F2F2',
                    radius: '10px',
                    size: '13px',
                    textColor: '#757575'
                }
            },
            {
                newsImg: require('./images/news.png'),
                proImg: require('./images/pro1.png'),
                proName: 'Mindy Stern',
                title: 'What if failure is the plan?',
                txt: 'I’ve been thinking a lot about failure lately. Failure comes in many forms, but I’m especially interested in situations in which people…',
                date: 'Dec 19, 2022',
                readingTime: '9 min read',
                id: 8,
                saved: false,
                btn: {
                    btnText: 'Twitter',
                    background: '#F2F2F2',
                    radius: '10px',
                    size: '13px',
                    textColor: '#757575'
                }
            },
            {
                newsImg: require('./images/news.png'),
                proImg: require('./images/pro1.png'),
                proName: 'danah boyd',
                title: 'Understanding Long Covid',
                txt: 'We know more now than before, and it’s still alarming',
                date: 'Dec 19, 2022',
                readingTime: '9 min read',
                id: 9,
                saved: false,
                btn: {
                    btnText: 'Long Covid',
                    background: '#F2F2F2',
                    radius: '10px',
                    size: '13px',
                    textColor: '#757575'
                }
            },
            {
                newsImg: require('./images/news.png'),
                proImg: require('./images/pro1.png'),
                proName: 'Eric Feng',
                title: 'Why are there so many Web3 startups?',
                txt: 'This week, Pitchbook published their latest Emerging Tech Indicator (ETI) report which tracks early stage investment activity amongst the…',
                date: 'Dec 19, 2022',
                readingTime: '9 min read',
                id: 10,
                saved: false,
                btn: {
                    btnText: 'Web 3',
                    background: '#F2F2F2',
                    radius: '10px',
                    size: '13px',
                    textColor: '#757575'
                }
            },
        ],
        aside: {
            title: 'DISCOVER MORE OF WHAT MATTERS TO YOU',
            background: 'white',
            textColor: '#757575',
            size: '13px',
            newsType: ['Programming', 'Data Science', 'Technology', 'Self Improvement', 'Writing', 'Relationships', 'Machine Learning', 'Productivity', 'Politics'],
            menu: ["Help", 'Status', 'Writers ', 'Blog', 'Careers', 'Privacy', 'Terms', ' About', 'Text to speech']
        }
    }

    const myObj = {
        myModal: false,
        myUser: '',
        userSign: false,
        adminLogin: false,
    }

    const [isPosted, setIsPosted] = useState(myData.news);


    const myPostObj = {
        newsImg: require('./images/news.png'),
        proImg: require('./images/pro1.png'),
        proName: myData.user.name,
        title: '',
        txt: '',
        date: 'Dec 19, 2022',
        readingTime: '9 min read',
        id: isPosted[isPosted.length - 1].id + 1,
        saved: false,
        btn: {
            btnText: '',
            background: '#F2F2F2',
            radius: '10px',
            size: '13px',
            textColor: '#757575'
        }
    }
    const [myAct, setMyAct] = useState(myObj);
    const [myPost, setMyPost] = useState(myPostObj);

    function Modalshow() {
        setMyAct({ ...myAct, myModal: myAct.myModal ? false : true })
        console.log('hi')
    }

    const myArrr = [...isPosted]
    function AddPost() {
        console.log(myPost)
        myArrr.push(myPost)
        setIsPosted(myArrr)
        Modalshow()
        setMyPost(myPostObj)
    }
    return (
        <>
            {!myAct.adminLogin ? (
                <div className="container-fluid p-0">
                    <Modal {...myData} Modalshow={Modalshow} myAct={myAct} setMyAct={setMyAct} AddPost={AddPost} myPost={myPost} setMyPost={setMyPost} />
                    <Header {...myData} Modalshow={Modalshow} myAct={myAct} setMyAct={setMyAct} />
                    <MainSec {...myData} myAct={myAct} />
                    <TrendNews {...myData} myAct={myAct} />
                    <div className='container-fluid d-flex justify-content-center py-5'>
                        <div className='row col-8'>
                            <div className='news col-8'>
                                <News {...myData} myAct={myAct} setMyAct={setMyAct} isPosted={isPosted} setIsPosted={setIsPosted} />
                            </div>
                            <div className='aside col-3'>
                                <Aside {...myData} />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <Routes>
                        <Route exact path='/login' element={<AdminLog myAct={myAct} Modalshow={Modalshow} />} />
                        <Route path='/admin' element={<Admin />} />
                    </Routes>
                </div>
            )}

        </>
    );

}

export default App;