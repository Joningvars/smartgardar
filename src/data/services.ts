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
  },
  {
    id: 'bedahreinsun',
    name: 'Beðahreinsun',
    slug: 'bedahreinsun',
    shortDescription: 'Hreinsun og umhirða blómabeða.',
    longDescription:
      'Fagleg beðahreinsun sem heldur garðinum snyrtilegum og blómlegum. Við fjarlægjum illgresi, dauð plöntuefni og sjáum um að beðin séu vel hirð og tilbúin fyrir hvert árstíðarskeið.',
  },
  {
    id: 'trjaklippingar',
    name: 'Trjáklippingar',
    slug: 'trjaklippingar',
    shortDescription: 'Klipping og snyrting trjáa og runna.',
    longDescription:
      'Trjáklippingar og runnasnyrting til að halda garðinum opnum, birtu og í góðu formi. Við klippum trjá og runna af fagmennsku og gætum þess að viðhalda heilbrigðum vexti.',
  },
  {
    id: 'almenn-gardhirda',
    name: 'Almenn garðhirða',
    slug: 'almenn-gardhirda',
    shortDescription: 'Heildarþjónusta fyrir garðinn þinn.',
    longDescription:
      'Almenn garðhirða sem nær yfir allt sem þarf til að halda útisvæðinu þínu í toppstandi. Við bjóðum upp á reglubundna umhirðu sem felur í sér grasslátt, beðahreinsun, trjáklippingar og fleira eftir þörfum.',
  },
];
