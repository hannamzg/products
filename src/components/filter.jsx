import filter from "../styles/filter.module.scss"

function Filter(prop) {
    return (
        <div className={filter.filterDiv}>
            <div className={filter.titlesDiv}>
            <h5 className={filter.title} onClick={()=>prop.setSelectedData()}>All</h5>

                {prop.data.map((data)=>{
                    return(
                        <h5 className={filter.title} onClick={()=>prop.setSelectedData(data.categories)} key={data.id}>{data.categories}</h5>
                    )})}
                 
            </div>
        </div>
    );
  }
  
  export default Filter;