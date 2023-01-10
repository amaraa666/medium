import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header';
import MainSec from './component/main';
import TrendNews from './component/trendingNews';

function App() {
  let myData = {
    header: {
      logo: require('./images/logo.png'),
      navBar: ['Our story' , 'Membership' , 'Write' , 'Sign in'],
      btn: {
        btnText: 'Get Started',
        textColor: 'white',
        background: '#000'
      }
    },
    mainSection: {
        img: require('./images/Frame.png'),
        title: 'Stay curious.',
        txt: 'Discover stories, thinking, and expertise from writers on any topic.',
        btn:{
            btnText: 'Start reading',
            textColor: 'white',
            background: '#000'
        }
    },
    trendNews:{
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
    }
  }
  return (
    <>
      <div className="container-fluid p-0">
        <Header {...myData}/>
        <MainSec {...myData}/>
        <TrendNews {...myData}/>
        <div className='main'>
            <div className='row'>
                <div className='news col-7'>
    
                </div>
                <div className='aside col-5 position-fixed'>

                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default App;