import React from 'react';

// Icons
import ScrollIcon from '../../img/down.svg'

// Lang
import {
  MultiLanguage
} from '../../helpers/Multilang';

const RulesModal = props => {

const {
  RulesModalRef,
  RulesRef,
  CloseModalFun
} = props;


  return(
    <div className="default-modal"
         ref = { RulesModalRef }
         onClick = { CloseModalFun }   >
      <div className="rules default-innerModal"
           ref = { RulesRef }>
        <h1>
          {MultiLanguage.rus.buttons.rules}
        </h1>
        {
          MultiLanguage.rus.modal.rules.map( (item, index) => {
            return <p key={index}>{item}</p>
          })
        }
        <div className="rules-modal_scroll-icon">
          <img src={ScrollIcon} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default RulesModal;