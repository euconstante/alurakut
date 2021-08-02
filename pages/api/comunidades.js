import {SiteClient} from 'datocms-client';

export default async function recebedorDeRequest(request, response){
if (request.method === 'POST') {
    const TOKEN = '47974d87d5d6d88cf9253dd98aa829';
    const client = new SiteClient(TOKEN);
    const registroCriado =  await client.items.create ({
        itemType: '1044057',
        ...request.body,
        // title:'Teste',
        // imageUrl:'https://github.com/euconstante.png',
        // creatorSlug:'euconstante'
    })

    
    response.json ({
     dados:'Algum dado',
     registroCriado: registroCriado,
 })
 return;
}
response.status(404).json ({
    message:"Ainda não temos nada no GEST só no post"
})
}