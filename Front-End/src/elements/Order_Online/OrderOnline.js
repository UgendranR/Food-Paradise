import React,{useState,useEffect} from 'react';

function OrderOnline() {

    const[items,setItems]=useState([]);
    const[limit,setLimit]=useState(4);

    useEffect(()=>{
        fetch("https://food-paradise-server.herokuapp.com/restaurant?page=1&limit=8="+limit)
        .then((res)=>res.json())
        .then((data)=>{setItems({data})
            });
    })

    return(
        <div className="Orderpage">
            <div className="container">
                <div className="row m-0">
                    {
                        items.map(item=>(
                            <div className="col-3 p-3">
                                <div className="bg-primary">ff</div>
                                <p>{item.name}</p>
                            </div>
                        ))
                    }

                </div>

            </div>
            
        </div>
    )
}
export default OrderOnline
