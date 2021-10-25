
type ItemType= {
    title : string;
    value : string;
    units : string;
    size: string;
    children: any; 
}

export const CardItem = ({ title, value, units, size } : ItemType) => {
    return (
            <span className={`px-2 ${size} heading `}>
                <span className ="text-muted" >{title}: </span>
                <i> {value} {units}</i>  
            </span> 
    )
}
