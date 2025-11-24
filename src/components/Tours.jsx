import Card from "./Card";
import "./Tours.css";

function Tours({tours,removeTour}){
    return(
        <div className="container">
            <div>
                <h2 className="title">Tourism Plan With Pratyush</h2>
            </div>
            <div className="cards">
                {
                    tours.map((tour) =>{
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    )
}

export default Tours;