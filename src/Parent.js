import React,{useState} from 'react';
import styled, { css } from 'styled-components';
import Child from './Child';
const Parent = ({display,setDisplay,children}) => {
	
	const StyledBase = styled.div`
	  overflow-y: scroll;
	  visibility: ${display};
	`;
	const StyledChild= styled.div`
	  overflow-y: scroll;
	  height: 150px;
	  width: 200px;
	`;
	return(
	  <>
	  <StyledBase onClick={()=>setDisplay('hidden')}>
	  	<StyledChild>{children}</StyledChild>
	  </StyledBase>
	  
	  </>
	)
}
export default Parent;
