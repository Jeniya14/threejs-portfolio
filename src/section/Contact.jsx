import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
const Contact = () => {
    const formRef= useRef()
    const [loading, setLoading] = useState(false)
    const [form, setForm]= useState({
        name:'',
        email:'',
        message:''
    })

    const handleChange =({target:{name,value}})=>{
        setForm({...form,[name]:value})
    }
    const handleSubmit = async(e)=>{
        e.preventDefault()
        try{
           await emailjs.send('service_ts874ad',"template_q9kljpg",{
                from_name: form.name,
                to_name:'Jeni',
                from_email: form.email,
                to_email: 'jeonibeck172@gmail.com',
                message: form.message
            },'oM7RtyK37lzBzpLJt')
            setLoading(false)
            alert('Your message has been sent!')
            setForm({
                name:'',
                email:'',
                message:''
            })
        }catch(error){
            console.log(error)
            setLoading(false)
            alert('Something went wrong!')
        }

     
    }
    //service_ts874ad
  return (
    <section className='c-space my-20' id='contact'>
        <div className='relative min-h-screen flex items-center justify-center flex-col rounded-[10px] shadow-[0px_0px_6px_rgba(255,255,255,0.1)]'>
            <div className="contact-container">
                <h3 className='head-text'>Contact Me</h3>
                <form  ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
                    <label className='space-y-3'>
                        <span className='field-label'>Full Name</span>
                        <input 
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            required
                            className='field-input'
                            placeholder='Jeni '
                        />
                    </label>
                    <label className='space-y-3'>
                        <span className='field-label'>Email</span>
                        <input 
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            required
                            className='field-input'
                            placeholder='jeni@gmail.com '
                        />
                    </label>
                    <label className='space-y-3'>
                        <span className='field-label'>Your message</span>
                        <textarea
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className='field-input'
                            placeholder="Hi, I'm interested in... "
                        />
                    </label>
                    <button className='field-btn' type='submit' disabled={loading}>
                        {loading ? 'Sending...':"Send Message"}
                        <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                    </button>
                </form>
            </div>
            
        </div>
    </section>
  )
}

export default Contact