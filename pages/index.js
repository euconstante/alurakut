import React from 'react';
import MainGrid from '../src/components/mainGrid'
import Box from '../src/components/box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(propriedades) {
  console.log(propriedades);
  return (
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
   <hr/>
   <p>
    <a className='boxLink' href={'https://github.com/${propriedades.gthubUser}'}>

    @{propriedades.githubUser}
    </a>
   </p>
   <hr/>
  <AlurakutProfileSidebarMenuDefault/>
   </Box>
  )
}
export default function Home() {
  const [comunidades, setComunidades] = React.useState(['Alurakut']);
  const usuarioAleatorio = 'euconstante';
  //const comunidades = ['Alurakut'];
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'gabieller'
  ]

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        {/* <Box style="grid-area: profileArea;"> */}
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={usuarioAleatorio} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a) 
            </h1>

            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className='subTitle'> O que você deseja fazer? </h2>
            <form onSubmit={function handleCreateComunity(event) {
              event.preventDefault();
              const comunidadesAtualizadas = [...comunidades, 'Alura Stars']
              setComunidades(comunidadesAtualizadas)
            }}>
              <div>
              <input placeholder='Qual vai ser o nome da sua comunidade?' 
              name='image' 
              aria-label='Qual vai ser o nome da sua comunidade?'
             
              />
              
              </div>
              <div>
              <input placeholder='Coloque um URL para usarmos de capa?' 
              name='title' 
              aria-label='Qual vai ser o nome da sua comunidade?'
              type='text'/>
              </div>
              <button>
                Criar comunidade
              </button>
            </form>

          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
          <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`http://placehold.it/300x300`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}