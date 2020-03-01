import React from 'react';

// Lang
import {
  MultiLanguage
} from '../../helpers/Multilang';

const SignUpButton = props => {

  const {
    OpenModalFun
  } = props;

  return (
    <div className="button-container signup-container">
      <button className="default-btn"
              onClick = { OpenModalFun } >
        {MultiLanguage.rus.buttons.signUp}
      </button>
    </div>
  )
}

export default SignUpButton;