import { useState } from "react";
import { useEffect } from "react";





export default function AdNews({myDataAd , getNewsDta}) {    

    function DeleteMyNews(id) {
        fetch(`https://medium-api-psi.vercel.app/api/news?id=${id}` , {
            method: 'DELETE',
            headers: {'Content-type': 'application/json'}
        })
        .then(res=>res.json())
        .then((dta)=>{
            console.log(dta);
            window.alert('amjilttai');
            getNewsDta();
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <>
            <div className="container-fluid">
                 <div className="table-responsive">
                     <table className="table">
                         <thead>
                             <tr>
                                 <th scope="col">#</th>
                                 <th scope="col">Title</th>
                                 <th scope="col">Category</th>
                                 <th scope="col">IsTrending</th>
                                 <th scope="col">Үйлдэл</th>
                             </tr>
                         </thead>
                         <tbody>
                             {myDataAd.map(({ _id, title, isTrending, category }, index) => {
                                 return (
                                     <tr key={index}>
                                         <th scope="row">{index + 1}</th>
                                         <td>{title}</td>
                                         <td>{category}</td>
                                         <td>
                                             {isTrending ? (<span className="badge bg-success">yes</span>) : (<span className="badge bg-danger">no</span>)}
                                         </td>
                                         <td>
                                             <div className="d-flex gap-3">
                                                 <div className=" btn bg-danger text-light " onClick={()=>DeleteMyNews(_id)}>Delete</div>
                                                 <div className=" btn bg-info text-light ">Edit</div>
                                             </div>
                                         </td>
                                     </tr>
                                 )
                             })}
                         </tbody>
                     </table>
                 </div>
            </div>
        </>
    )
}