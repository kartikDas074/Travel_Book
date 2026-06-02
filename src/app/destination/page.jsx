

import AddDestination from '../Component/AddDestination';
import { insertBook } from '../../lib/Action';

const AddDestinationPage = () => {
   


    return (
        <div>
            <AddDestination addDes={insertBook}></AddDestination>
        </div>
    );
};

export default AddDestinationPage 