import React from 'react'
import Image from 'next/image'
import styles from './Login.module.css' 

const page = () => {
  return (
    <div className={styles.signInContainer}>
        <Image
        src="https://m.media-amazon.com/images/G/31/kfw/landing/img_logo_DKBL._CB612496475_.png"
        alt="Amazon Kindle Logo"
        width={150}
        height={50}
        className={styles.logo}
      />
      <h1>Sign in</h1>

      <form>
        <label htmlFor='email'>email or mobile phone-number</label>
        <input type= "email" id = "email"/>
        <div style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <label htmlFor="password">Password </label>
          <a href="#" className={styles.fp}>Forgot Password</a>
        </div>

        <input type = "password" id = "password"/>
        <button type = "submit" className= {styles.signInButton}>Sign in</button>
      </form>

       <p className={styles.agreement}>
                By clicking "Create your Amazon account", you agree to the Amazon
                <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088"> Conditions of Use & Sale</a>,
                the <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496">Kindle Store Terms of Use</a> and
                Amazon's <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496">Privacy Notice</a>.
        </p>

        <p className={styles.createAccount}>
            Not having an account? <a href = "/signup">Create your Amazon Account</a>
        </p>
    </div>
  )
}

export default page;