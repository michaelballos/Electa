import { Navbar } from 'react-bootstrap'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = () => {
  return (
    <>
      <Head>
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3'
          crossorigin='anonymous'
        />
      </Head>
      <ul class='nav'>
        <li class='nav-item'>
          <a class='nav-link active' aria-current='page' href='#'>
            Active
          </a>
        </li>
        <li class='nav-item'>
          <ul class='nav'>
            <li class='nav-item'>
              <a class='nav-link active' aria-current='page' href='#'>
                Active
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                Link
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                Link
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link disabled'>Disabled</a>
            </li>
          </ul>{' '}
          <a class='nav-link' href='#'>
            Link
          </a>
        </li>
        <li class='nav-item'>
          <a class='nav-link' href='#'>
            Link
          </a>
        </li>
        <li class='nav-item'>
          <a class='nav-link disabled'>Disabled</a>
        </li>
      </ul>
    </>
  )
}

export default Navbar
