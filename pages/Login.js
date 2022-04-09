import styles from '../styles/Login.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'
import { Form, Button } from 'react-bootstrap'

const Login = () => {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Quicksand&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div className={styles.loginContainer}>
        <h1 className={styles.title}>Login</h1>
        <Form className={'form'}>
          <Form.Group
            className={styles.emailContainer}
            controlId='formBasicEmail'
          >
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
            <Form.Text className='neverShare'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className='passContainer' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>

          <Form.Group className='passFormGroup' controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Remember Password' />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </>
  )
}

export default Login
