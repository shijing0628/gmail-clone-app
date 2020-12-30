import React from 'react'
import './EmailRow.css'
import { Checkbox, IconButton } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useHistory } from 'react-router-dom'

function EmailRow({ id, title, subject, description, time }) {
 const history = useHistory()


 return (
  <div className="emailRow" onClick={() => history.push("/mail")}>
   <div className="emailRow__options">
    <Checkbox />
    <IconButton>
     <StarBorderIcon />
    </IconButton>
    <IconButton>
     <LabelImportantIcon />
    </IconButton>
   </div>
   <h3 className="emailRow__title">
    {title}
   </h3>
   <div className="emailRow__message">
    <h4>{subject}{'   '}
     <span className="emailRow__description">
      - {description}
     </span>
    </h4>
   </div>
   <p className="emailRow__time">
    {time}
   </p>
  </div>
 )
}

export default EmailRow
