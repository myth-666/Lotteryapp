
import "./Userreport.css";
export default function Userreport() {
  return (
    <>
    
    <div className="Userrreport_container">
      <div className="Userreport_header">

        <div className="Userreport_header_left">
          <label>Filters with multiselect</label>
        </div>
        <div className="Userreport_header_right">
          <label>Lottery name & DrawDate</label>
        </div>
        
      </div>
   
      <div className="Userreport_box">
            <div className="Userreport_row1">
                <div><label>Lottername: Lottery1</label></div>
                <div><label>DrawDate :2001-10-10</label>
                <label className="Userreport_row1_text">ProviderName : Liya</label></div>
            </div>
            <div className="Userreport_row2">
                <label>Matching nos</label>
                <div><label >No of matches </label><label className="Userreport_row2_text">prizemoney</label></div>
            </div>
            <div className="Userreport_row3">
                <div><label>[1,2]</label></div>
                <div> <label>1</label>
                <label className="Userreport_row3_text">100</label></div>
            </div>
            <div className="Userreport_row4">
            <div><label>[5,6,7]</label></div>
            <div><label>3</label>
            <label className="Userreport_row4_text">200</label></div>
            </div>
            <div className="Userreport_row5">
            <div><label>[4,3]</label></div>
            <div><label>2</label>
            <label className="Userreport_row5_text">2</label></div>
            </div>
            <div className="Userreport_row6">
            <div><label>302</label></div>
            </div>
        </div>
       
        </div>
    </>
  );
}
