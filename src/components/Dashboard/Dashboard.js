import React, { useEffect,useState } from 'react'
import './Dashboard.css';
import { Link } from "react-router-dom";


function Dashboard() {
  const [downButton, setDownButton] = useState(false);
  const [clickForms, setClickForms] = useState(false);
  const [clickDashboard, setClickDashboard] = useState(false);
  const [clickDomain, setClickDomain] = useState(false);
  const [clickAddDomain, setClickAddDomain] = useState(false);
  const [addedDomains, setAddedDomains] = useState([]);
  //   () => {
  // const storedDomains = localStorage.getItem('addedDomains');
  // return storedDomains ? JSON.parse(storedDomains) : [];
  // });

  // useEffect(() => {
  //   localStorage.setItem('addedDomains', JSON.stringify(addedDomains));
  // }, [addedDomains]);
  
  const toggleDown = () => {
    setDownButton(!downButton)
  }

  const showForms = () => {
    setClickForms(true);
    setClickDashboard(false);
    setClickDomain(false);
  };

  const handleDashboard = () => {
    setClickDashboard(true);
    setClickForms(false);
    setClickDomain(false);
    setClickAddDomain(false);
  };

  const showDomain = () => {
    setClickDomain(true);
    setClickDashboard(false);
    setClickAddDomain(true);
  };
  // const handleChanges = (e) => {
  //   e.preventDefault();
    
  //   const emailInput = document.getElementById('email')
  //   const dobInput = document.getElementById('dob')
  //   const fnameInput=document.getElementById('fname')

  //   const newDomain = {
  //     email: emailInput.value,
  //     dob: dobInput.value,
  //     fname: fnameInput.value
  //   }
    // const existingDomains = JSON.parse(localStorage.getItem('addedDomains')) || [];

    // const updatedDomains = [...existingDomains, newDomain];
    // localStorage.setItem('addedDomains', JSON.stringify(updatedDomains));
    // setAddedDomains(updatedDomains);
// const updatedDomains=[...addedDomains,newDomain]
// setAddedDomains(updatedDomains)
// localStorage.setItem('domains',JSON.stringify(updatedDomains))


//     fnameInput.value='';
//     emailInput.value = '';
//     dobInput.value = '';
  
//   }
//   useEffect(()=>{
//     const storedDomains=JSON.parse(localStorage.getItem('domains'))
//     if(storedDomains){
//       setAddedDomains(storedDomains)
//     }
//   },[]
//   )

  return (
    <div className='main_container3'>
      <div className='sidebar_menu'>
        <div className='logo_block'>
          <img className='image1_d' src="/images/logo.svg" alt="" />
        </div>
        <div className='content'>
          <div className='content_1'>

            <div className='dashboard_s' onClick={handleDashboard}>
              <div className='inner_dashboard'>
                <img className='image_dash' src="/images/Vector1.svg" alt="" />
                <label className='dashboard_l'>Dashboard</label>

              </div>
            </div>
            <div className='contacts_s'>
              <div className='inner_contacts'>
                <img className='image_contacts' src="/images/user-square.svg" alt="" />
                <label className='contacts_l'>Contacts </label>
                <img className='image_c' src="/images/chevron-down.svg" onClick={toggleDown}></img>
              </div>
            </div>
            {downButton && (

              <div className='contact_list'>
                <div className='c_lists'>
                  <div className='lists'>
                    <img className='image_forms' src="/images/List-filled.svg" alt="" />
                    <label className='lists_l'>Lists</label>
                  </div>
                  <div className='segments'>
                    <img className='image_segments' src="/images/chart-pie.svg" alt="" />
                    <label className='segments_l'>Segments</label>
                  </div>

                </div>
              </div>
            )}
            <div className='forms_s' onClick={showForms}>
              <div className='inner_form'>
              <Link to='/Animals' style={{textDecoration:'none'}}>
            <img className='image_forms' src="/images/Forms-2-rec.svg" alt="" />
                <label className='forms_l'>Forms </label>
                </Link>
              </div>
            </div>
            <div className='page_s'>
              <div className='inner_page'>
                <img className='image_page' src="/images/file.svg" alt="" />
                <label className='page_l'>Landing Page</label>
              </div>
            </div>
            <div className='campaign_s'>
              <div className='inner_campaign'>
                <img className='image_campaign' src="/images/megaphone.svg" alt="" />
                <label className='campaign_l'>Campaign</label>
              </div>
            </div>
          </div>
          <div className='content_2'>
            <div className='settings_s'>
              <img className='image_settings' src="/images/gear.svg" alt="" />
              <label className='settings_l'>Settings</label>
            </div>
          </div>
        </div>
        <div className='profile'>
          <div className='profile_1'>
            <img className='image2_s' src="/images/avatar.svg" alt="" />
            <label className='label_1'>Corey Bergson</label>
            <img className='image3_s' src="/images/chevron-right.svg" alt="" />
          </div>
        </div>
      </div>
      {/* {clickForms && !clickDomain && (

        <div className='right_side'>
          <div className='top_section'>
            <h1 className='h_d'>Users</h1>
          </div>
          <div className='form_down'>
            <div className='list_table'>
              <div className='user_lists'>
                <label className='users_l'> Users Lists</label>
                <button className='buttn' type="button" onClick={showDomain}>
                  <img src="/images/plus.svg"></img>Add Domain</button>
              </div>

              <div className='lists_content'> */}

                {/* <table className='table1'>
                  <tr className='tr1'>
                    <td>Email</td>
                    <td>Status</td>
                    <td>DOB</td>
                    <td className='actions_t'>Actions</td>
                  </tr>
                  
                  <tr className='td1'>
                    <td>iukj234@gmail.com</td>
                    <td>
                      <div className='veri_1'>
                        <label>Verified</label></div>
                    </td>
                    <td>2010-01-25</td>
                    <td>
                      <img src="/images/edit-3.svg" alt="" />
                      <img className='trash1_t' src="/images/trash.svg" alt="" />

                    </td>
                  </tr>
                  <tr className=''>
                    <td>drftg234@gmail.com</td>
                    <td>
                      <div className='veri_2'>
                        <label>Verified</label></div>
                    </td>
                    <td>2002-10-10</td>
                    <td>
                      <img src="/images/edit-3.svg" alt="" />
                      <img className='trash2_t' src="/images/trash.svg" alt="" /></td>
                  </tr>
                  <tr>
                    <td>asdf123@gmail.com</td>
                    <td>
                      <div className='pend_1'>
                        <label>Pending</label></div>
                    </td>
                    <td>2001-09-09</td>
                    <td>
                      <img src="/images/edit-3.svg" alt="" />
                      <img className='trash3_t' src="/images/trash.svg" alt="" /></td>
                  </tr>
                  <tr>
                    <td>asdf@gmail.com</td>
                    <td>
                      <div className='veri_3'>
                        <label>Verified</label></div>
                    </td>
                    <td>2000-11-11</td>
                    <td>
                      <img src="/images/edit-3.svg" alt="" />
                      <img className='trash4_t' src="/images/trash.svg" alt="" /></td>
                  </tr>
                  <tr>
                    <td>hjko35@gmail.com</td>
                    <td>
                      <div className='pend_2'>
                        <label>Pending</label></div>
                    </td>
                    <td>1998-01-01</td>
                    <td><img src="/images/edit-3.svg" alt="" />
                      <img className='trash5_t' src="/images/trash.svg" alt="" /></td>
                  </tr>
                  {addedDomains.map((domain, index) => {
                    return (
                      <tr key={index}>
                        <td>{domain.email}</td>
                        <td>
                          <div className='veri_1'>
                            <label>Verified</label>
                          </div>
                        </td>
                        <td>{domain.dob}</td>
                        <td>
                          <img src="/images/edit-3.svg" alt="" />
                          <img className='trash1_t' src="/images/trash.svg" alt="" />
                        </td>
                      </tr>
                    );
                  })} */}
                
              {/* </div>
            </div>
          </div>
 */}

{/* 
        </div>
      )} */}

      {!clickForms && !clickDomain && (

        <div className='right_side'>
          <div className='top_section'>
            <h1 className='h_d'>Welcome to Zycro!</h1>
          </div>
          <div className='down_section'>
            <div className='down_section2'>
              <p className='p1_d'>Let's Get Started</p>
              <div className='down_section3'>
                <div className='down_section3_1'>
                  <p className='p2_d'>Onboarding checklist</p>
                  <p className='p3_d'>40% completed</p>
                </div>
                <div className='down_section4'>
                  <img src="/images/check box.svg"></img>
                  <p className='p4_d'>Complete your profile</p>
                  <img className='imageA1_d' src="/images/arrow-right.svg"></img>
                </div>
                <div className='down_section5'>
                  <img src="/images/check box.svg"></img>
                  <p className='p5_d'>Confirm Your Sending Domain</p>
                  <img className='imageA2_d' src="/images/arrow-right.svg"></img>
                </div>
                <div className='down_section6'>
                  <img src="/images/circle checkboxes.svg"></img>
                  <p className='p6_d'>Setup your Brand Book</p>
                  <img className='imageA3_d' src="/images/arrow-right.svg"></img>
                </div>
                <div className='down_section7'>
                  <img src="/images/circle checkboxes.svg"></img>
                  <p className='p7_d'>Add or Import Contacts</p>
                  <img className='imageA4_d' src="/images/arrow-right.svg"></img>
                </div>
                <div className='down_section8'>
                  <img src="/images/circle checkboxes.svg"></img>
                  <p className='p8_d'>Create Your First Campaign</p>
                  <img className='imageA5_d' src="/images/arrow-right.svg"></img>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* {clickDomain && clickAddDomain && (

        <div className='right_side'>
          <div className='top_section'>
            <h1 className='h_d'>Users</h1>
          </div>
          <div className='domain_down'>
            <label className='domain_profile'>Users Profile</label>
            <div className='domain_form'>
              <form >
                <input type="text" id='fname' placeholder='Enter full name' required />
                <input type="email" id='email' placeholder='Enter Email Address' required />
                <input type="date" id='dob' placeholder='Enter DOB' required />
                <input className="form_submit" type='submit' value="Add Changes"  ></input>
              </form>
            </div>
          </div>
        </div>

      )} */}
    </div>
  )
}

export default Dashboard