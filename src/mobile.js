
import './mobile.css'

function Mobile(props)
{
    return(
        <>
        <div className="container">

            
            <div id="image">

                <img src={props.src} />

            </div>

            <div id="details">

                <h3>{props.name}</h3>

                <ul>
                    <li>{props.d1}</li>
                    <li>{props.d2}</li>
                    <li>{props.d3}</li>
                    <li>{props.d4}</li>
                </ul>

            </div>

            <div id="price">

                <h1>₹ {props.price}</h1>
                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png" width="150"/>

                 
            </div>



        </div>
        </>
    );
}

export default Mobile;