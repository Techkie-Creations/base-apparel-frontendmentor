function Email() {

    const [email, setEmail] = React.useState('')
    const [state, setState] = React.useState('icon-arrow')
    const [status, setStatus] = React.useState('')
    const [msg, setMsg] = React.useState('')

    const thanks = document.getElementById('thanks')
    const form = document.getElementById('form')
    const image = document.getElementsByClassName('hero')[0]
    // image.src = './images/hero-mobile.jpg'
    window.addEventListener('resize', function(event){
        if (window.innerWidth <= 818) {
            image.src = './images/hero-mobile.jpg'
        } else {
            image.src = './images/hero-desktop.jpg'
        }
      });
    const handleChange = (e) => {
        setEmail(e.target.value)
        const test = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById('inp').value)
        if (document.getElementById('inp').value.length === 0) {
            setState('icon-arrow')
            setStatus('has-success')
            setMsg('')
        } else if (test == false) {
            setState('icon-error')
            setStatus('has-error')
            setMsg('Invalid Email Address!')
        } else if (test == true) {
            setState('icon-arrow')
            setStatus('has-success')
            setMsg('')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const test = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById('inp').value)
        if (!test) {
            setState('icon-error')
            setStatus('has-error')
        } else {
            thanks.removeAttribute('class')
            form.setAttribute('class', 'none')
        }
    }

    return (
        <form id="form" onSubmit={handleSubmit} method='post'>
            <div className={`${status} has-feedback`}>
                <label className="control-label valid" for="inputError1"></label>
                
                <input id="inp" onChange={handleChange} type='email' name="email" placeholder="example@gmail.com" className='inp form-control input-lg' />
                <button id="ind" type="submit" className={`indicate ${state =='icon-error' ? 'error' : 'success'} form-control-feedback`}>
                    <img src={`./images/${state}.svg`} alt="icon" className='i-img' />
                    {/* <input type="image" src="./images/icon-arrow.svg" border="0" alt="Submit" className='i-img' /> */}
                </button>
                <span id="inputSuccess3Status" class="sr-only">(success)</span>
                <span id="helpBlock2" class="help-block">{msg}</span>
            </div>
        </form>

    )
}

ReactDOM.render(<Email />, document.getElementById('notify'))