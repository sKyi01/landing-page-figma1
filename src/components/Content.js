import React from 'react'
import "../componentCss/Content.css";
import Frame from "../assets/frame.png";
import Frame2 from "../assets/frame2.png";

const Content = () => {
  return (
    <div>

    <div className='content'>

    <div className='content1'>
    <div id="all_the_connections_you_need" >

	All the connections<br/>you need

    <div id="we_are_the_go_to_digital_resource_to_help_you_drive_outreach" >
	We are the go-to digital resource to help <br/> you drive outreach
</div>

<div className="workMail"  >
<div className='workEmail1'>
<div id="enter_your_work_email" >
	Enter your work email
</div>

</div>

<div className='workEmail2'>
<div id="start_for_free" >
	Start For <span style={{color:"#000080"}}>Free</span> 
</div>



</div>


</div>



</div>








    </div>
    
    <div className='content2' >



    <div>
    <img style={{width:"42vw",height:"75vh"}} src={Frame}/>
    </div>

    
    
    </div>
    
    
    </div>

    <div>
    
    <img src={Frame2}/>
    </div>



      
    </div>
  )
}

export default Content
