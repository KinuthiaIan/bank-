import { useState } from "react"

function Input({onAddTransaction}){


  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState(0)

  function handleSubmit(e){
    e.preventDefault()
    const inputedData = {
       
        date: date,
        description: description,
        category:category,
        amount: amount
      
    }
    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(inputedData)
  })
      .then(res => res.json())
      .then(data => onAddTransaction(data))

  }
  return(
    <div>
    <form className="row p-3" onSubmit={handleSubmit}>
        <div className="col-3">
         <input name="date" type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)}  className="form-control form-control-sm"   placeholder="date" aria-label=".form-control form-control-sm" />  
         </div>
          <div className="col-3">
         <input type="text" name="description"  id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control form-control-sm"  placeholder="description" aria-label="form-control form-control-sm" />  
        </div>
         <div className="col-3">
        <input type="text" name="category"id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="form-control form-control-sm"   placeholder="category" aria-label="form-control form-control-sm" />  
        </div>
        <div className="col-3">
       <input type="number" name="amount" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="form-control form-control-sm"  placeholder="amount" aria-label="form-control form-control-sm" />  
       </div>
       <div className="col-3  mx-auto p-3"> 
       <input type="submit" value="SUBMIT" id="submit"/>
        </div>
          </form>
          </div>
)

}
export default Input