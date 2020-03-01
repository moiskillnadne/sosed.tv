import React from 'react';

//Lang
import {
  MultiLanguage
} from '../../helpers/Multilang';

const RulesButton = props => {

const {
  OpenModalFun
} = props;

  return (
    <div className="button-container rules-container">
      <button className="default-btn"
              onClick = { OpenModalFun }  >
        {MultiLanguage.rus.buttons.rules}
      </button>
    </div>
  );
};

export default RulesButton;