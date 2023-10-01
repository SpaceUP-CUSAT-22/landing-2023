import React from 'react'
import { useStateContext } from '../../context/SateContext';
import twofournine from '../../assets/249.jpeg'
import twoninenine from '../../assets/299.jpeg'
import threefournine from '../../assets/349.jpeg'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey:  import.meta.env.VITE_apiKey,
  authDomain:  import.meta.env.VITE_authDomain,
  projectId:  import.meta.env.VITE_projectId,
  storageBucket:  import.meta.env.VITE_storageBucket,
  messagingSenderId:  import.meta.env.VITE_messagingSenderId,
  appId:  import.meta.env.VITE_appId,
  measurementId:  import.meta.env.VITE_measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const Slide7 = () => {
    const { setSlide } = useStateContext()
    const componentRef = React.useRef(null);
    const [next, setNext] = React.useState(false)
    const [error, setError] = React.useState(null)
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        yearOfStudy: '',
        isFromCUSAT: '',
        isSEDSMember: '',
        place: '',
        referralCode: '',
        file: '',
        code: ''
    });
    // const [animate, setAnimate] = React.useState(false)
    React.useEffect(() => {
        const handleScroll = () => {
            const element = componentRef.current;
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight - 500 && rect.bottom >= 0) {
                    setSlide('#form')
                    // setAnimate(true)
                } else {
                    // setAnimate(false)
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };

    function generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomString = '';
      
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          randomString += characters.charAt(randomIndex);
        }
      
        return randomString;
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
    
        if (file) {
          const reader = new FileReader();

          const randomString = generateRandomString(4);
            localStorage.setItem('code', randomString)
          reader.onload = (event) => {
            const base64Data = event.target.result;
            console.log(base64Data)
            setFormData({
              ...formData,
              file: base64Data,
              code: randomString
            });
          };
    
          reader.readAsDataURL(file);
        }
      };

    const handleNext = () => {
        setError(null)
        if(!formData.name || !formData.phone || !formData.email || !formData.yearOfStudy || !formData.place){
            setError('Please enter all details')
            setNext(false)
        }else{
            setNext(true)
        }
    }


    const handleSubmit = async() => {
        try {
            console.log(formData)
            const docRef = await addDoc(collection(db, "registeredUsers"), {
              formData: formData,
            });
            console.log("Document written with ID: ", docRef.id);
            window.location.replace('/booked')
          } catch (error) {
            console.error("Error adding document: ", error);
          }
    }
  return (
    <div ref={componentRef} id="form" className='component2 md:ml-12 relative z-30 h-screen w-[95%]'>
        <div className='flex md:flex-row flex-col'>
            <div className='bg-white px-5 py-10 md:w-[30%]'>
                <h2 className='text-center font-semibold md:text-4xl text-3xl'>Register</h2>
                <div className='my-10 grid'>
                    <label htmlFor="" className='text-black text-left mr-3'>Name</label>
                    <input name="name" onChange={handleInputChange} placeholder="Enter name" className='mb-5 px-5 py-3 rounded-[5px] border-[1.5px] border-zinc-500 ' />
                    
                    <label htmlFor="" className='text-black text-left mr-3'>Email</label>
                    <input name="email" onChange={handleInputChange} type="email" placeholder="Enter email" className='mb-5 px-5 py-3 rounded-[5px] border-[1.5px] border-zinc-500 ' />
                    
                    <label htmlFor="" className='text-black text-left mr-3'>Phone</label>
                    <input name="phone" onChange={handleInputChange} type="text" placeholder="Enter phone" className='mb-5 px-5 py-3 rounded-[5px] border-[1.5px] border-zinc-500 ' />
                    
                    <label htmlFor="" className='text-black text-left mr-3'>Year of Study</label>
                    <input name="yearOfStudy" onChange={handleInputChange} type="number" placeholder="Enter year of study" className='mb-5 px-5 py-3 rounded-[5px] border-[1.5px] border-zinc-500 ' />
                    
                    <label htmlFor="" className='text-black text-left mr-3'>Are you from CUSAT?</label>
                    <div className='flex'>
                        <button onClick={() => setFormData({ ...formData, isFromCUSAT: 'YES' })} className={`px-7 py-3 text-black border-[1.5px] border-black ml-3 hover:text-white hover:bg-[#E51F24] hover:border-none focus:text-white focus:bg-[#E51F24] focus:border-none ${formData.isFromCUSAT == 'YES' && 'bg-[#E51F24] text-white border-none'}`}>YES</button>
                        <button onClick={() => setFormData({ ...formData, isFromCUSAT: 'NO' })} className={`px-7 py-3 text-black border-[1.5px] border-black ml-3 hover:text-white hover:bg-[#E51F24] hover:border-none focus:text-white focus:bg-[#E51F24] focus:border-none ${formData.isFromCUSAT == 'NO' && 'bg-[#E51F24] text-white border-none'}`}>NO</button>
                    </div>
                    
                    <label htmlFor="" className='text-black text-left mr-3'>Are you SEDS member?</label>
                    <div className='flex'>
                        <button onClick={() => setFormData({ ...formData, isSEDSMember: 'YES' })} className={`px-7 py-3 text-black border-[1.5px] border-black ml-3 hover:text-white hover:bg-[#E51F24] hover:border-none focus:text-white focus:bg-[#E51F24] focus:border-none ${formData.isSEDSMember == 'YES' && 'bg-[#E51F24] text-white border-none'}`}>YES</button>
                        <button onClick={() => setFormData({ ...formData, isSEDSMember: 'NO' })} className={`px-7 py-3 text-black border-[1.5px] border-black ml-3 hover:text-white hover:bg-[#E51F24] hover:border-none focus:text-white focus:bg-[#E51F24] focus:border-none ${formData.isSEDSMember == 'NO' && 'bg-[#E51F24] text-white border-none'}`}>NO</button>
                    </div>

                    <label htmlFor="" className='text-black text-left mr-3'>Place</label>
                    <input name="place" onChange={handleInputChange} type="text" placeholder="Enter Place" className='mb-5 px-5 py-3 rounded-[5px] border-[1.5px] border-zinc-500 ' />

                    <label htmlFor="" className='text-black text-left mr-3'>Referral Code</label>
                    <input name="referralCode" onChange={handleInputChange} type="text" placeholder="Enter Referral Code" className='mb-5 px-5 py-3 rounded-[5px] border-[1.5px] border-zinc-500 ' />

                    <button onClick={handleNext} className='px-10 py-3 text-white bg-[#E51F24] text-center'>NEXT</button>
                    {error && <p className='text-red-500 text-xl my-5 font-bold text-center'>{error}</p>}

                </div>
            </div>    
            {next && 
            <div className='md:ml-20 bg-white px-5 py-10 h-full'>
                <h1 className='text-black font-bold text-center md:text-4xl text-3xl'>₹{formData.isSEDSMember == "YES" ? '249' : formData.isFromCUSAT == 'YES' ? '299' : '349'}</h1>
                {formData.isSEDSMember == "YES" ? <img className="w-[400px] my-10" src={twofournine} /> : formData.isFromCUSAT == 'YES' ? <img className="w-[400px] my-10" src={twoninenine} /> : <img className="w-[400px] my-10" src={threefournine} />}
                <p className='text-center text-black my-5'>Scan the QR</p>
                <label htmlFor="" className='text-black text-left mr-3'>UPI Screenshot</label>
                <input name="file" type="file" onChange={(e) => handleFileChange(e)} className='mb-5 px-5 py-3 rounded-[5px] border-[1.5px] border-zinc-500 ' />
                <div className='flex my-5'>
                    <button className='px-7 py-3 border-[1.5px] border-black mr-3 border-[1.5px] border-black'>Back</button>
                    <button onClick={handleSubmit} className='px-7 py-3 border-[1.5px] border-black bg-[#E51F24] text-white border-none'>Submit</button>
                </div>
            </div>}
        </div>    
    </div>
  )
}

export default Slide7