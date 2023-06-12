import Header from '@/app/components/Header';
import React from 'react';
import Image from 'next/image';
import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div>
          <h1>Soluções em gestão de tarefas.</h1>
          <p>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou para fazer um livro de modelos de tipos.
          </p>
          <button>Saiba mais</button>
        </div>
        <div>
          <Image
            src='/homeimg.png'
            alt='Ilustração da página inicial'
            height={710}
            width={710}
          />
        </div>
      </main>
    </>
  );
}
