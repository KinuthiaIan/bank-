import React,{useState, useEffect} from "react";


function Table(){
  const[transactions, setTransactions] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/transactions')
    .then(res=>res.json())
    .then(data=>{
      setTransactions(data)   
    })
  },[])

  function handleDelete(id) {
        fetch(`http://localhost:3000/transactions/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          }
        })
        .then(response => response.json())
        .then(data => document.location.reload())
      }
    
      const newList = transactions.sort((a, b) => (a.description > b.description ? 1 : -1))


    return(
      
       <table className="table table-spined table-hover">
        
            <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Amount</th>
               </tr>
            </thead>
            <tbody>
              {
            newList.map(array => (
              <tr key={array.id}>
                <td>{array.date}</td>
                <td>{array.description}</td>
                <td>{array.category}</td>
                <td>{array.amount}</td>
                <td>
                <button onClick={ ()=> handleDelete(array.id)} className="btn btn-success">Delete</button>
                </td>

              </tr>
              ))
            }
            
            </tbody>
          </table>


    )
}
  
    

 
export default Table
