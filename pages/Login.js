import styles from '../styles/Login.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button } from 'react-bootstrap'

const Login = () => {
  return (
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
  )
}

export default Login
