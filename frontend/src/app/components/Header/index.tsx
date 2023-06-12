import './styles.scss';
import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <div>
        <a href='/'>
          <Image
            src='/fisacorplogo.png'
            alt='Fisa Corp Logo'
            width={72}
            height={51}
          />
          <span>Task Manager</span>
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>Sobre</a>
          </li>
          <li>
            <a href='/'>Contato</a>
          </li>
          <li className='login'>
            <a href='/'>Login</a>
            <ul className='login-cadastro'>
              <li className='border-bottom'>
                <a href=''>Login</a>
              </li>
              <li>
                <a href=''>Cadastro</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
