// lay out of info window
const InfoWindow = ({info}) => {
    return (
        <div className ="info-window">
            <h2>Info</h2>
            <ul>
                <li>Name:  {info.name}</li>
                <li>Nametype:   {info.nametype}</li>
                <li>Recclass:   {info.recclass}</li>
                <li>Mass:   {info.mass}</li>
                <li>Fall:   {info.fall}</li>
                <li>Year:   {info.year}</li>
            </ul>
        </div>
    )

}

export default InfoWindow