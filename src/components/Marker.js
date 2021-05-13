import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/bullseye'

// set marker icon to bullseye
const Marker = ({ lat, lng, onClick }) => {
    return (
        <div className="marker" onClick={onClick}>
            <Icon icon={locationIcon} className="location-icon" />
        </div>
    )
}
export default Marker