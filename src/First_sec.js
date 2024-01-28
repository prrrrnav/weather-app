function First_sec(props){
    return(<div>
        <div className="sec1 ">
            <div className="hr1">
                <h1>{props.head}</h1>
                <p>{props.description}</p>
            </div>
        </div>
        <div className="sec1">
            <hr/>
            <div className="hr_aligned">
                <img  className="mainImg" src={props.src}/>
                <span className="link">Shop Now</span>
            </div>
            
        </div>
        </div>
    )
}
export default First_sec;