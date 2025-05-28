import '../css/InputArea.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logos from '../logo/Logo';
import profileImg from '../assets/burak-profile.jpg';

const InputArea = () => {

    const navigate = useNavigate();
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleClick = () => {
        if(text.trim() === "") {
            alert("Boş değer giremezsiniz.");
        }
        else {
            dispatch({ type: "ADD_TODO", payload: text });
            alert("Değer eklendi !");
            console.log("Değer eklendi !");
            setText("");
        }
    }

    return(
        <div className='mainDiv'>
            <div className="inputAreaMainDiv">
              <div>
                <h5>Welcome to Add a Value to List Page</h5>
              </div>

              <hr></hr>

              <div className='abc'>
                <textarea 
                  placeholder="Add a mission to list page"
                  rows={3}
                  maxLength={52}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <button onClick={handleClick} className='addButton'>+</button>
              </div>

              <div className='listPageDiv'>
                <button onClick={()=> navigate('/list/')}  className='listPage'>Go to the List Page</button>
              </div>
            </div>

            <div className='informationDiv'>
              <div>
                <img className='photograph' src={profileImg} alt="Profil" />
              </div>

              <div>
                <p className='name'><strong>Burak Gündoğan</strong></p>
                <p className='socialPlatformName'>Sosyal Medyalarım ve Projelerimin Bulunduğu Github Platformum</p>
                <Logos></Logos>
              </div>
            </div>
        </div>
    )
}

export default InputArea;