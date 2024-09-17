import React from 'react'

const MentionsLegales: React.FC = () => {
  return (
    <div className='p-20'>
    <h1 className='text-2xl'>Mentions Légales</h1>
    
    <h2 className='text-xl'>1. Informations générales</h2>
    <p>Propriétaire du site :</p>
    <p>Nom : Jérôme Gavino</p>
    <p>Email : <a href="mailto:jlaron230@hotmail.fr">jlaron230@hotmail.fr</a></p>

    <h2 className='text-xl'>2. Hébergement du site</h2>
    <p>Hébergeur : Vercel</p>
    <p>Nom de l’hébergeur : Vercel Inc.</p>
    <p>Adresse de l’hébergeur : 340 S Lemon Ave #4133 Walnut, CA 91789 USA</p>
    <p>Téléphone de l’hébergeur :  04 94 09 78 78</p>

    <h2 className='text-xl'>3. Propriété intellectuelle</h2>
    <p>Le contenu de ce site (textes, images, vidéos, logos, graphismes, etc.) est la propriété exclusive de Jérôme Gavino, sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l&apos;accord écrit préalable de Jérôme Gavino.</p>

    <h2 className='text-xl'>4. Protection des données personnelles</h2>
    <p>Les informations collectées sur ce site sont uniquement destinées à des fins de communication avec Jérôme Gavino. Aucune information personnelle n&apos;est partagée avec des tiers sans le consentement explicite de l&apos;utilisateur.</p>

    <h2 className='text-xl'>5. Limitation de responsabilité</h2>
    <p>Jérôme Gavino ne pourra être tenu responsable des erreurs ou omissions dans les informations diffusées sur le site, ni des dommages résultant de l’utilisation ou de l’interprétation des informations contenues sur ce site.</p>

    <h2 className='text-xl'>6. Liens hypertextes</h2>
    <p>Le site peut contenir des liens hypertextes vers d&apos;autres sites. Jérôme Gavino décline toute responsabilité concernant le contenu ou les pratiques de ces sites externes.</p>

    <h2 className='text-xl'>7. Droit applicable</h2>
    <p>Les présentes mentions légales sont régies par le droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.</p>
</div>
  )
}

export default MentionsLegales