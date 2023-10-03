import React from 'react'
import { useStateContext } from '../context/SateContext';
import twofournine from '../assets/249.jpeg'
import twoninenine from '../assets/299.jpeg'
import threefournine from '../assets/349.jpeg'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import emailjs from '@emailjs/browser';

emailjs.init('Hb_PKHYL7lZDRKHv9')

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

const Register = () => {
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

    const sendEmail = async(name, code, email) => {
      await emailjs.send("service_6uv90nr","template_9qfmu1d",{
        message: `Hey ${name}!, we are delighted to confirm your registration for the SpaceUp CUSAT event scheduled for October 14th, from 8:00 AM to 7:00 PM at CUSAT.
        \n\n
        Please keep the following event details in mind:
        \n\n
        Event Date: October 14, 2023\n
        Event Time: 8:00 AM - 7:00 PM\n
        Venue: CUSAT, kochi\n
        \n\n
        You will need to present the following code at the event venue for entry:
        \n\n
        Your Event Code: ${code}
        \n\n
        Please make sure to have this code readily available on your mobile device or in print form to streamline your registration process.
        \n\n
        Should you have any inquiries or require further assistance, do not hesitate to contact us at.
        \n\n
        Fimil:+91 9544664678\n
        Yadu:+91 9895223267\n
        \n\n
        We appreciate your participation and look forward to sharing an exciting and informative day with you at SpaceUp CUSAT!
        \n\n
        Best regards,
        \n\n
        SpaceUP Team`,
        toEmail: email,
        }, "Hb_PKHYL7lZDRKHv9")
        .then((result) => {
          console.log(result);
          // setEmail("");
          // setMessage("");
          // alert('Claim email sent succesfully')
        }, (error) => {
          console.log(error);
        });
    }

    const handleInputChange = (e) => {
        // sendEmail("Fimil", "1234", "abhinavcv007@gmail.com")
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
            localStorage.setItem('name', formData.name)
            if(formData.file != ''){
              setError(null)
              const docRef = await addDoc(collection(db, "registeredUsers"), {
                formData: formData,
              });
              sendEmail(formData.name, formData.code, formData.email)
              console.log("Document written with ID: ", docRef.id);
              window.location.replace('/booked')
            }else{
              setError('Please attach the screenshot of the payment')
            }
          } catch (error) {
            console.error("Error adding document: ", error);
          }
    }
  return (
    <>
        <div ref={componentRef} id="form" className='component md:ml-7 relative z-30 h-screen w-[95%]'>
            <div className='flex md:flex-row flex-col'>
                {!next && <div className='bg-white px-5 py-10 md:w-[30%] w-screen'>
                    <h2 className='text-center font-semibold md:text-4xl text-3xl'>Register</h2>
                    <div className='my-10 grid'>
                        <label htmlFor="" className='text-black text-left mr-3'>Name</label>
                        <input value={formData.name} name="name" onChange={handleInputChange} placeholder="Enter name" className='mb-5 px-5 py-3 rounded-[5px] border-[1.5px] border-zinc-500 ' />
                        
                        <label htmlFor="" className='text-black text-left mr-3'>Email</label>
                        <input value={formData.email} name="email" onChange={handleInputChange} type="email" placeholder="Enter email" className='mb-5 px-5 py-3 rounded-[5px] border-[1.5px] border-zinc-500 ' />
                        
                        <label htmlFor="" className='text-black text-left mr-3'>Phone</label>
                        <input value={formData.phone} name="phone" onChange={handleInputChange} type="text" placeholder="Enter phone" className='mb-5 px-5 py-3 rounded-[5px] border-[1.5px] border-zinc-500 ' />
                        
                        <label htmlFor="" className='text-black text-left mr-3'>Year of Study</label>
                        <input value={formData.yearOfStudy} name="yearOfStudy" onChange={handleInputChange} type="number" placeholder="Enter year of study" className='mb-5 px-5 py-3 rounded-[5px] border-[1.5px] border-zinc-500 ' />
                        
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
                        <input value={formData.place} name="place" onChange={handleInputChange} type="text" placeholder="Enter Place" className='mb-5 px-5 py-3 rounded-[5px] border-[1.5px] border-zinc-500 ' />

                        <label htmlFor="" className='text-black text-left mr-3'>Referral Code <span className='font-semibold'>(optional)</span> </label>
                        <input value={formData.referralCode} name="referralCode" onChange={handleInputChange} type="text" placeholder="Enter Referral Code" className='mb-5 px-5 py-3 rounded-[5px] border-[1.5px] border-zinc-500 ' />
                        <p className='text-black text-lg my-5'>*Refreshments and lunch included</p>
                        <button onClick={handleNext} className='px-10 py-3 text-white bg-[#E51F24] text-center'>NEXT</button>
                        {error && <p className='text-red-500 text-xl my-5 font-bold text-center'>{error}</p>}

                    </div>
                </div> }   
                {next && 
                <div className='md:ml-20 bg-white px-5 py-10 h-full'>
                    <h1 className='text-black font-bold text-center md:text-4xl text-3xl'>₹{formData.isSEDSMember == "YES" ? '249' : formData.isFromCUSAT == 'YES' ? '299' : '349'}</h1>
                    {formData.isSEDSMember == "YES" ? <img className="w-[400px] my-10" src={twofournine} /> : formData.isFromCUSAT == 'YES' ? <img className="w-[400px] my-10" src={twoninenine} /> : <img className="w-[400px] my-10" src={threefournine} />}
                    <p className='text-center text-black my-5'>Scan the QR</p>
                    <label htmlFor="" className='text-black text-left mr-3'>UPI Screenshot</label>
                    <input name="file" type="file" onChange={(e) => handleFileChange(e)} className='mb-5 px-5 py-3 rounded-[5px] border-[1.5px] border-zinc-500 ' />
                    <div className='flex my-5'>
                        <button onClick={() => setNext(false)} className='px-7 py-3 border-[1.5px] border-black mr-3 border-[1.5px] border-black'>Back</button>
                        <button onClick={handleSubmit} className='px-7 py-3 border-[1.5px] border-black bg-[#E51F24] text-white border-none'>Submit</button>
                        {error && <p className='text-red-500 text-xl my-5 font-bold text-center'>{error}</p>}
                    </div>
                </div>}
            </div>    
        </div>
        <div className='component'></div>
    </>
  )
}

export default Register