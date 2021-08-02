import React from 'react';
import MainGrid from '../src/components/mainGrid'
import Box from '../src/components/box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(propriedades) {
 
  return (
    <Box as='aside'>
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
function ProfileRelationsBox(props) {
  return (
    <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
              {props.title} ({props.items.length})
            </h2>
          <ul>
              {/* {seguidores.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`https://github.com/${itemAtual}.png`}>
                      <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })} */}
            </ul>
          </ProfileRelationsBoxWrapper>
  )
}
export default function Home() {
  const [comunidades, setComunidades] = React.useState([]);
  const usuarioAleatorio = 'euconstante';
  
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'gabieller'
  ]
const [seguidores, setSeguidores] = React.useState([]);
React.useEffect(function(){
  fetch ('https://api.github.com/users/peas/followers')
  .then(function(respostaDoServidor) {
    return respostaDoServidor.json();
})
.then(function(respostaCompleta){
  setSeguidores(respostaCompleta)
})
fetch ('https://graphql.datocms.com/', {
  method:'POST',
  headers: {
    'Authorization':' 016b8c0843bcf9a674629731e32ece',
    'Content-Type': 'application/json',
    'Accept': 'application/json'

  },
  body: JSON.stringify({"query": `query {
    allCommunities{
      title
      id
      imageUrl
      creatorSlug
    }
  }
  ` })

})
.then((response)=>response.json())
.then((respostaCompleta)=> {
  const comunidadesVindasDoDato = respostaCompleta.data.allCommunities;
  console.log(comunidadesVindasDoDato)
  setComunidades(comunidadesVindasDoDato)
})
},[])
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
       
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
              const dadosDoForm = new FormData(event.target);

              const comunidade = {
               
                title: dadosDoForm.get('title'),
                imageUrl: dadosDoForm.get('image'),
                creatorSlug: usuarioAleatorio,
              }
              fetch('/api/comunidades', {
                method: 'POST',
                headers: {
                  'Content-Type':'application/json',  },              
                body: JSON.stringify(comunidade)
              })
              .then(async(response)=> {
                const dados = await response.json();
                console.log(dados);
                const comunidade = dados.registroCriado;
                const comunidadesAtualizadas = [...comunidades, comunidade];
               setComunidades(comunidadesAtualizadas)
              })
               
            }}>
              <div>
              <input placeholder='Qual vai ser o nome da sua comunidade?' 
              name='title' 
              aria-label='Qual vai ser o nome da sua comunidade?'
             
              />
              
              </div>
              <div>
              <input placeholder='Coloque um URL para usarmos de capa' 
              name='image' 
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
           
           <ProfileRelationsBox title ="Seguidores" items={seguidores}/>
          <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
              Comunidades ({comunidades.length})
            </h2>
          <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/comunities/${itemAtual.id}`}>
                      <img src={itemAtual.imageUrl} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`}>
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