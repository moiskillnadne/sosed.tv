import React, {
  useRef
} from 'react';

// Components
import RulesButton from './RulesButton';
import RulesModal from './RulesModal';

const Rules = props => {

  const {
    CloseModalFun
  } = props;


  const RulesModalRef = useRef(null);
  const RulesRef = useRef(null);

  const OpenModalFun = e => {
    RulesModalRef.current.style.display = 'grid';
    RulesRef.current.scrollTop = 0;
    setTimeout( () => {
      RulesModalRef.current.style.opacity = '1';
    }, 200)
  };


  return (
    <>

      <RulesButton OpenModalFun = { OpenModalFun }/>

      <RulesModal RulesModalRef = { RulesModalRef }
                  RulesRef = { RulesRef }
                  CloseModalFun = { CloseModalFun }   />

    </>
  );
};

export default Rules;