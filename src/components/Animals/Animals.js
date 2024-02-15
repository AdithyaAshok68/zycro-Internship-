import React, { useEffect, useState } from 'react';
import './Animals.css';
import { Link } from 'react-router-dom';

function Animals() {
    const [downButton, setDownButton] = useState(false);
    const [addedDomains, setAddedDomains] = useState([]);
    const [clickDomain, setClickDomain] = useState(false);
    const [clickForms, setClickForms] = useState(false);
    const [editDomain, setEditDomain] = useState(null);

    const toggleDown = () => {
        setDownButton(!downButton);
    };

    const showForms = () => {
        setClickDomain(false);
        setClickForms(true);
    };

    const showDomain = () => {
        setClickDomain(true);
    };

    const handleChanges = (e) => {
        e.preventDefault();

        const animalInput = document.getElementById('animal');
        const breedInput = document.getElementById('breed');
        const ageInput = document.getElementById('age');
        const poundsInput = document.getElementById('pounds');

        if (editDomain) {
            const updatedDomains = addedDomains.map((domain) =>
                domain.id === editDomain.id
                    ? {
                        ...domain,
                        animal: animalInput.value,
                        breed: breedInput.value,
                        age: ageInput.value,
                        pounds: poundsInput.value,
                    }
                    : domain
            );

            setAddedDomains(updatedDomains);
            localStorage.setItem('zooanimals', JSON.stringify(updatedDomains));
            setEditDomain(null);
        } else {
            const newDomain = {
                id: Date.now(),
                animal: animalInput.value,
                breed: breedInput.value,
                age: ageInput.value,
                pounds: poundsInput.value,
            };

            const updatedDomains = [...addedDomains, newDomain];
            setAddedDomains(updatedDomains);
            localStorage.setItem('zooanimals', JSON.stringify(updatedDomains));
        }

        animalInput.value = '';
        breedInput.value = '';
        ageInput.value = '';
        poundsInput.value = '';
        showForms();
    };

    const handleDelete = (id) => {
        const updatedDomains = addedDomains.filter((row) => row.id !== id);
        setAddedDomains(updatedDomains);
        localStorage.setItem('zooanimals', JSON.stringify(updatedDomains));
    };

    const handleEdit = (id) => {
        const editDomain = addedDomains.find((domain1) => domain1.id === id);
        setEditDomain(editDomain);

        showDomain();
    };

    useEffect(() => {
        const storedDomains = JSON.parse(localStorage.getItem('zooanimals'));
        if (storedDomains) {
            setAddedDomains(storedDomains);
        }
    }, []);
console.log(addedDomains);
    return (
        <div className='main_container3'>
            <div className='sidebar_menu'>
                <div className='sidebar_menu'>
                    <div className='logo_block'>
                        <img className='image1_d' src="/images/logo.svg" alt="" />
                    </div>
                    <div className='content'>
                        <div className='content_1'>

                            <Link to='/Dashboard' style={{ textDecoration: 'none' }}>
                                <div className='dashboard_s'>
                                    <div className='inner_dashboard'>
                                        <img className='image_dash' src="/images/Vector1.svg" alt="" />
                                        <label className='dashboard_l'>Dashboard</label>
                                    </div>
                                </div>
                            </Link>
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
                            <div className='forms_s'>
                                <div className='inner_form'>
                                    <img className='image_forms' src="/images/Forms-2-rec.svg" alt="" />
                                    <label className='forms_l'>Forms </label>

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
            </div>

            <div className='right_side'>
                <div className='top_section'>
                    <h1 className='h_d'>Animals</h1>
                </div>

                {clickDomain ? (
                    <div className='domain_down'>
                        <label className='domain_profile'>
                            {editDomain ? 'Edit Animal' : 'Add Animal'}
                        </label>
                        <div className='domain_form'>
                            <form onSubmit={handleChanges}>
                                <input
                                    type='text'
                                    id='animal'
                                    placeholder='Enter Animal'
                                    required
                                    defaultValue={editDomain ? editDomain.animal : ''}
                                />
                                <input
                                    type='text'
                                    id='breed'
                                    placeholder='Enter the Breed'
                                    required
                                    defaultValue={editDomain ? editDomain.breed : ''}
                                />
                                <input
                                    type='number'
                                    min='1'
                                    id='age'
                                    placeholder='Enter Age'
                                    required
                                    defaultValue={editDomain ? editDomain.age : ''}
                                />
                                <input
                                    type='float'
                                    id='pounds'
                                    min='1'
                                    placeholder='Enter Weight'
                                    required
                                    defaultValue={editDomain ? editDomain.pounds : ''}
                                />
                                <input
                                    className='form_submit'
                                    type='submit'
                                    value={editDomain ? 'Save Changes' : 'Add Animal'}
                                />
                            </form>
                        </div>
                    </div>
                ) : (
                    <div className='form_down'>
                        <div className='list_table'>
                            <div className='user_lists'>
                                <label className='users_l'> Animal List</label>
                                <button className='buttn' type='button' onClick={showDomain}>
                                    <img src='/images/plus.svg' alt='Add'></img>Add
                                </button>
                            </div>

                            <div className='lists_content'>
                                <table className='table1'>
                                    <tr className='tr1'>
                                        <td>Animal</td>
                                        <td>Breed</td>
                                        <td>Age</td>
                                        <td>Pounds(lb)</td>
                                        <td className='actions_animal'>Actions</td>
                                    </tr>

                                    {addedDomains.map((domain, index) => (
                                        <tr key={index}>
                                            <td>{domain.animal}</td>
                                            <td>{domain.breed}</td>
                                            <td>{domain.age}</td>
                                            <td>{domain.pounds}</td>
                                            <td>
                                                <img
                                                    src='/images/edit-3.svg'
                                                    alt=''
                                                    onClick={() => handleEdit(domain.id)}
                                                />
                                                <img
                                                    className='trash1_t'
                                                    src='/images/trash.svg'
                                                    alt=''
                                                    onClick={() => handleDelete(domain.id)}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Animals;