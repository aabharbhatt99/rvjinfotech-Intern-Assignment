import React from 'react'
import DetailTable from '../Components/DetailTable';
import Pager from '../Components/Pager';


class Home extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <button className="btn btn-success btn-lg float-end m-2" type="submit">New User</button>
                </div>
                <DetailTable/>
                <Pager/>
            </div>
        )
    }
}

export default Home;