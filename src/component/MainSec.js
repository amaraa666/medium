
import Header from '../component/header';
import MainSec from '../component/main';
import TrendNews from '../component/trendingNews';
import Aside from '../component/aside';
import News from '../component/news';
import Modal from '../component/modal';





export default function MAinSec({ myData, AddPost, myAct, Modalshow, setMyAct, myPost, setMyPost, isPosted, setIsPosted }) {
    return (
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
    )
}