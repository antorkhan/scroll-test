import React,{useState} from 'react';
import styled, { css } from 'styled-components';
import Child from './Child';
const Parent = ({display,setDisplay,children}) => {
	
	const StyledBase = styled.div`
	  overflow-y: hidden;
	  display: ${display};
	`;
	const StyledChild= styled.div`
	  overflow-y: scroll;
	`;
	return(
	  <>
	  <StyledBase onClick={()=>setDisplay('none')}>
	  	<StyledChild>{children}</StyledChild>
	  </StyledBase>
	  
	  </>
	)
}
export default Parent;
