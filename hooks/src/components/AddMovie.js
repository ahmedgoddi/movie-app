import React , {useState} from 'react'

export default function AddMovie({Add}) {
    const[isShow , setIsShow] = useState(false)
    const handleShow = () => setIsShow(!isShow)

    const handleClose = () => setIsShow(!isShow)

const [newText , setNewText] = useState("")
const [newText1 , setNewText1] = useState("")
const [newText2 , setNewText2] = useState("")
const [newText3 , setNewText3] = useState("")
const [newText4 , setNewText4] = useState("")


const handleOk = () => {
    Add({
        id : Date.now(),
        name : newText,
        image : newText1,
        year : newText2,
        rating : newText3,
        description : newText4,
    }) 
    setNewText("")
    setNewText1("")
    setNewText2("")
    setNewText3("")
    setNewText4("")
}



    return (
        <div>
        <button className="button1" onClick={() => handleShow()}> + </button>
        
        {isShow ? (
        <form className="form" onSubmit={(e) => e.preventDefault()}>
            <div className="modal-content">
        <label >Name  </label>
        <input value={newText} onChange={(e) => setNewText(e.target.value)} type="text"/>
        

        <label >image  </label>
        <input  value={newText1} onChange={(e) => setNewText1(e.target.value)} type="text"/>

        <label > year   </label>
        <input value={newText2} onChange={(e) => setNewText2(e.target.value)} type="text"/>

        <label >rating  </label>
        <input value={newText3} onChange={(e) => setNewText3(e.target.value)} type="text"/>

        <label >description  </label>
        <input value={newText4} onChange={(e) => setNewText4(e.target.value)} type="text"/>

        <button  onClick={ handleOk } >Add  </button>
        <button className="b1"  onClick={() =>  handleClose()}> Close </button>
        </div>
    </form>
        ) : null}
        
        </div>
    )
}
