/* src/data/services.ts — Centralised service content for Smartgarðar */

import type { Service } from '../types/service';

export const services: Service[] = [
  {
    id: 'grasslattur',
    name: 'Grassláttur',
    slug: 'grasslattur',
    shortDescription: 'Reglubundinn grassláttur fyrir fallegan garð.',
    longDescription:
      'Við sjáum um grasslátt á öllum tegundum grasflata, hvort sem um er að ræða einkagarða, sameignir eða fyrirtæki. Reglubundinn grassláttur heldur garðinum snyrtilegan og heilbrigðan allt árið.',
    highlights: [
      {
        title: 'Reglubundin þjónusta',
        description: 'Við komum vikulega eða eftir þörfum til að halda grasinu í réttri hæð.',
      },
      {
        title: 'Allar tegundir grasflata',
        description: 'Einkagarðar, sameignir, fyrirtæki og stærri svæði.',
      },
      {
        title: 'Snyrtilegur frágangur',
        description: 'Við fjarlægjum allt grasaffall og skiljum garðinn hreinan eftir okkur.',
      },
      {
        title: 'Sveigjanlegir samningar',
        description: 'Veldu þjónustu sem hentar þínum þörfum og fjárhagsáætlun.',
      },
    ],
    images: [
      '/services/grasslattur-1.jpg',
      '/services/grasslattur-2.jpg',
      '/services/grasslattur-3.jpg',
      '/services/grasslattur-4.jpg',
      '/services/grasslattur-5.jpg',
      '/services/grasslattur-6.jpg',
    ],
  },
  {
    id: 'bedahreinsun',
    name: 'Beðahreinsun',
    slug: 'bedahreinsun',
    shortDescription: 'Hreinsun og umhirða blómabeða.',
    longDescription:
      'Fagleg beðahreinsun sem heldur garðinum snyrtilegum og blómlegum. Við fjarlægjum illgresi, dauð plöntuefni og sjáum um að beðin séu vel hirð og tilbúin fyrir hvert árstíðarskeið.',
    highlights: [
      {
        title: 'Illgresishreinsun',
        description: 'Við fjarlægjum illgresi handvirkt og vandlega til að vernda plönturnar.',
      },
      {
        title: 'Árstíðabundin umhirða',
        description: 'Undirbúningur beða fyrir vor, sumar og haust.',
      },
      {
        title: 'Jarðvegsbæting',
        description: 'Við bætum jarðveginn til að tryggja heilbrigðan vöxt.',
      },
      {
        title: 'Snyrtilegt útlit',
        description: 'Beðin verða alltaf vel afmörkuð og hrein.',
      },
    ],
    images: [
      '/services/bedahreinsun-1.jpg',
      '/services/bedahreinsun-2.jpg',
      '/services/bedahreinsun-3.jpg',
      '/services/bedahreinsun-4.jpg',
      '/services/bedahreinsun-5.jpg',
      '/services/bedahreinsun-6.jpg',
    ],
  },
  {
    id: 'trjaklippingar',
    name: 'Trjáklippingar',
    slug: 'trjaklippingar',
    shortDescription: 'Klipping og snyrting trjáa og runna.',
    longDescription:
      'Trjáklippingar og runnasnyrting til að halda garðinum opnum, birtu og í góðu formi. Við klippum trjá og runna af fagmennsku og gætum þess að viðhalda heilbrigðum vexti.',
    highlights: [
      {
        title: 'Mótun og snyrting',
        description: 'Við klippum tré og runna til að ná fram fallegri lögun.',
      },
      {
        title: 'Grisjun',
        description: 'Við fjarlægjum dauðar greinar og opnum krónuna til að hleypa ljósi að.',
      },
      {
        title: 'Réttur tími',
        description: 'Við kunnum skil á hvenær best er að klippa mismunandi tegundir.',
      },
      {
        title: 'Snyrtilegur frágangur',
        description: 'Við fjarlægjum allan úrgang og skiljum vel við.',
      },
    ],
    images: [
      '/services/trjaklippingar-1.jpg',
      '/services/trjaklippingar-2.jpg',
      '/services/trjaklippingar-3.jpg',
      '/services/trjaklippingar-4.jpg',
      '/services/trjaklippingar-5.jpg',
      '/services/trjaklippingar-6.jpg',
    ],
  },
  {
    id: 'almenn-gardhirda',
    name: 'Almenn garðhirða',
    slug: 'almenn-gardhirda',
    shortDescription: 'Heildarþjónusta fyrir garðinn þinn.',
    longDescription:
      'Almenn garðhirða sem nær yfir allt sem þarf til að halda útisvæðinu þínu í toppstandi. Við bjóðum upp á reglubundna umhirðu sem felur í sér grasslátt, beðahreinsun, trjáklippingar og fleira eftir þörfum.',
    highlights: [
      {
        title: 'Heildarþjónusta',
        description: 'Einn aðili sér um allan garðinn — einfalt og þægilegt.',
      },
      {
        title: 'Reglubundin umhirða',
        description: 'Við komum samkvæmt áætlun svo garðurinn er alltaf í góðu standi.',
      },
      {
        title: 'Sérsniðin þjónusta',
        description: 'Við aðlögum þjónustuna að þínum garði og óskum.',
      },
      {
        title: 'Áreiðanleiki',
        description: 'Við stöndum við okkar loforð og mætum alltaf á réttum tíma.',
      },
    ],
    images: [
      '/services/almenn-gardhirda-1.jpg',
      '/services/almenn-gardhirda-2.jpg',
      '/services/almenn-gardhirda-3.jpg',
      '/services/almenn-gardhirda-4.jpg',
      '/services/almenn-gardhirda-5.jpg',
      '/services/almenn-gardhirda-6.jpg',
    ],
  },
  {
    id: 'stubbataeting',
    name: 'Stubbatæting',
    slug: 'stubbataeting',
    shortDescription: 'Fjarlæging trjástubba úr garðinum.',
    longDescription:
      'Við fjarlægjum trjástubba á skilvirkan hátt með sérhæfðum búnaði. Stubbatæting gefur garðinum betri ásýnd og losar um pláss fyrir nýja gróðursetningu eða aðra nýtingu.',
    highlights: [
      {
        title: 'Sérhæfður búnaður',
        description: 'Við notum stubbafræsi til að fjarlægja stubba hratt og örugglega.',
      },
      {
        title: 'Hreinn frágangur',
        description: 'Svæðið er skilið eftir slétt og tilbúið til nýtingar.',
      },
      {
        title: 'Allar stærðir',
        description: 'Við ráðum við stubba af öllum stærðum og tegundum.',
      },
      {
        title: 'Ráðgjöf',
        description: 'Við ráðleggjum um hvort best sé að tæta eða fjarlægja stubbinn.',
      },
    ],
    images: [
      '/services/stubbataeting-1.jpg',
      '/services/stubbataeting-2.jpg',
      '/services/stubbataeting-3.jpg',
      '/services/stubbataeting-4.jpg',
      '/services/stubbataeting-5.jpg',
      '/services/stubbataeting-6.jpg',
    ],
  },
  {
    id: 'gardaudun',
    name: 'Garðaúðun',
    slug: 'gardaudun',
    shortDescription: 'Áburðargjöf og næring fyrir grasflöt og beð.',
    longDescription:
      'Garðaúðun tryggir heilbrigðan og frodigan vöxt grasflata og plantna. Við metum ástand jarðvegsins og leggjum til réttan áburð og næringarefni til að garðurinn þrífist.',
    highlights: [
      {
        title: 'Jarðvegsgreining',
        description: 'Við metum ástand jarðvegsins áður en úðun hefst.',
      },
      {
        title: 'Réttur áburður',
        description: 'Við veljum áburð sem hentar þínum garði og gróðri.',
      },
      {
        title: 'Árstíðabundin meðhöndlun',
        description: 'Úðun á réttum tíma fyrir bestan árangur.',
      },
      {
        title: 'Umhverfisvænt',
        description: 'Við notum umhverfisvæn efni þar sem hægt er.',
      },
    ],
    images: [
      '/services/gardaudun-1.jpg',
      '/services/gardaudun-2.jpg',
      '/services/gardaudun-3.jpg',
      '/services/gardaudun-4.jpg',
      '/services/gardaudun-5.jpg',
      '/services/gardaudun-6.jpg',
    ],
  },
  {
    id: 'thokulagnir',
    name: 'Þökulagnir',
    slug: 'thokulagnir',
    shortDescription: 'Lögn og viðhald þakþöku og garðþöku.',
    longDescription:
      'Við leggjum þök á garðsvæði, göngustíga og innkeyrslur. Þökulagnir gefa útisvæðinu snyrtilegt útlit og draga úr viðhaldi á grasflötum og beðum.',
    highlights: [
      {
        title: 'Fjölbreytt efnisval',
        description: 'Við bjóðum upp á mismunandi gerðir þöku eftir þörfum.',
      },
      {
        title: 'Fagleg lögn',
        description: 'Rétt undirbúningur og lögn tryggir endingu.',
      },
      {
        title: 'Göngustígar og innkeyrslur',
        description: 'Við leggjum þök á öll svæði utan dyra.',
      },
      {
        title: 'Viðhald',
        description: 'Við sjáum einnig um viðhald og viðgerðir á þökulögnum.',
      },
    ],
    images: [
      '/services/thokulagnir-1.jpg',
      '/services/thokulagnir-2.jpg',
      '/services/thokulagnir-3.jpg',
      '/services/thokulagnir-4.jpg',
      '/services/thokulagnir-5.jpg',
      '/services/thokulagnir-6.jpg',
    ],
  },
  {
    id: 'trjafellingar',
    name: 'Trjáfellingar',
    slug: 'trjafellingar',
    shortDescription: 'Örugg felling trjáa af öllum stærðum.',
    longDescription:
      'Við fellum tré á öruggan hátt, hvort sem um er að ræða lítil tré í garði eða stærri tré sem þarfnast sérstakrar aðgæslu. Öryggismál eru alltaf í fyrirrúmi og við sjáum um allan frágang.',
    highlights: [
      {
        title: 'Öryggisfyrst',
        description: 'Við fylgjum ströngum öryggisreglum við allar fellingar.',
      },
      {
        title: 'Allar stærðir',
        description: 'Frá litlum garðtrjám upp í stór tré sem krefjast sérstakrar tækni.',
      },
      {
        title: 'Fullur frágangur',
        description: 'Við fjarlægjum trjábolinn, greinar og hreinsum svæðið.',
      },
      {
        title: 'Leyfisumsóknir',
        description: 'Við aðstoðum við leyfisumsóknir þar sem þess er krafist.',
      },
    ],
    images: [
      '/services/trjafellingar-1.jpg',
      '/services/trjafellingar-2.jpg',
      '/services/trjafellingar-3.jpg',
      '/services/trjafellingar-4.jpg',
      '/services/trjafellingar-5.jpg',
      '/services/trjafellingar-6.jpg',
    ],
  },
];
