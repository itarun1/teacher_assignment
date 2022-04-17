

export const Edit = () =>{
    return(
        <div>
            <input type="text" placeholder="Teachername" />
            <br />
            <br />
            <input type="text" placeholder="subject" />
            <br />
            <br />
            <input type="text"  placeholder="grades"/>
             <br />
             <br />
            <input type="text"  placeholder="age"/>
            <br />
             <br />
            <input type="text"  placeholder="section"/>
            <br />
            <br />
            <button onClick={()=>{
                alert("data added successfully")
            }}>Submit</button>
        </div>
    )
}