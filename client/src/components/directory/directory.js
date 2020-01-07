import React from 'react';
import { connect } from 'react-redux';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item'
import './directory.scss'


const Directory = ({sections}) => {
    return(
        <div className="directory-menu">
            {
                sections.map(({id, ...section}) => {
                    return <MenuItem key={id} {...section}/>
                })
            }
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        sections: selectDirectorySections(state)
    } 
}

export default connect(mapStateToProps)(Directory);