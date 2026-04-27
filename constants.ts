import { Level } from './types';

export const LEVELS: Level[] = [
  {
    id: 1,
    title: 'Սկիզբ. Ser և Estar (10 վարժություն)',
    description: 'Ճանապարհորդության սկիզբը: Սովորենք հիմնական տարբերությունները:',
    explanationIntro: 'Ser = հիմնական հատկանիշներ (ով եմ ես, ինչից է պատրաստված): Estar = վիճակ և տեղանք (որտեղ եմ, ինչպես եմ զգում):',
    exercises: [
      { id: 'se1', type: 'SELECT', instruction: 'Ընտրեք ճիշտ բայը', prompt: 'Yo ___ profesor.', target: 'soy', choices: ['soy', 'estoy'], translation: 'Ես ուսուցիչ եմ:' },
      { id: 'se2', type: 'SELECT', instruction: 'Ընտրեք ճիշտ բայը', prompt: 'La sopa ___ fría.', target: 'está', choices: ['es', 'está'], translation: 'Ապուրը սառն է (այս պահին):' },
      { id: 'se3', type: 'SELECT', instruction: 'Ընտրեք ճիշտ բայը', prompt: 'Madrid ___ en España.', target: 'está', choices: ['es', 'está'], translation: 'Մադրիդը Իսպանիայում է:' },
      { id: 'se4', type: 'SELECT', instruction: 'Ընտրեք ճիշտ բայը', prompt: 'Nosotros ___ de Armenia.', target: 'somos', choices: ['somos', 'estamos'], translation: 'Մենք Հայաստանից ենք:' },
      { id: 'se5', type: 'SELECT', instruction: 'Ընտրեք ճիշտ բայը', prompt: '¿Dónde ___ mi llave?', target: 'está', choices: ['es', 'está'], translation: 'Որտե՞ղ է իմ բանալին:' },
      { id: 'se6', type: 'SELECT', instruction: 'Ընտրեք ճիշտ բայը', prompt: 'El cielo ___ azul.', target: 'es', choices: ['es', 'está'], translation: 'Երկինքը կապույտ է (մշտական հատկանիշ):' },
      { id: 'se7', type: 'SELECT', instruction: 'Ընտրեք ճիշտ բայը', prompt: 'Hoy ___ lunes.', target: 'es', choices: ['es', 'está'], translation: 'Այսօր երկուշաբթի է:' },
      { id: 'se8', type: 'SELECT', instruction: 'Ընտրեք ճիշտ բայը', prompt: 'Tú ___ muy cansado.', target: 'estás', choices: ['eres', 'estás'], translation: 'Դու շատ հոգնած ես:' },
      { id: 'se9', type: 'SELECT', instruction: 'Ընտրեք ճիշտ բայը', prompt: 'La puerta ___ abierta.', target: 'está', choices: ['es', 'está'], translation: 'Դուռը բաց է:' },
      { id: 'se10', type: 'SELECT', instruction: 'Ընտրեք ճիշտ բայը', prompt: 'Ella ___ mi hermana.', target: 'es', choices: ['es', 'está'], translation: 'Նա իմ քույրն է:' }
    ]
  },
  {
    id: 2,
    title: 'Արկածային Ճանապարհ (10 վարժություն)',
    description: 'Շարունակենք արկածը՝ բացահայտելով նոր կանոններ:',
    explanationIntro: 'Ser-ը օգտագործվում է ժամանակի, ազգության և մասնագիտության համար: Estar-ը՝ ժամանակավոր վիճակների համար:',
    exercises: [
      { id: 'se11', type: 'SELECT', instruction: 'Ընտրեք ճիշտ բայը', prompt: 'La mesa ___ de madera.', target: 'es', choices: ['es', 'está'], translation: 'Սեղանը փայտից է:' },
      { id: 'se12', type: 'SELECT', instruction: 'Ընտրեք ճիշտ բայը', prompt: '¿Qué hora ___?', target: 'es', choices: ['es', 'está'], translation: 'Ժամը քանի՞սն է:' },
      { id: 'se13', type: 'SELECT', instruction: 'Ընտրեք ճիշտ բայը', prompt: 'Mis padres ___ en el jardín.', target: 'están', choices: ['son', 'están'], translation: 'Ծնողներս այգում են:' },
      { id: 'se14', type: 'SELECT', instruction: 'Ընտրեք ճիշտ բայը', prompt: 'El libro ___ interesante.', target: 'es', choices: ['es', 'está'], translation: 'Գիրքը հետաքրքիր է:' },
      { id: 'se15', type: 'SELECT', instruction: 'Ընտրեք ճիշտ բայը', prompt: 'Juan ___ triste hoy.', target: 'está', choices: ['es', 'está'], translation: 'Խուանն այսօր տխուր է:' },
      { id: 'se16', type: 'SELECT', instruction: 'Ընտրեք ճիշտ բայը', prompt: 'La fiesta ___ en mi casa.', target: 'es', choices: ['es', 'está'], translation: 'Party-ն իմ տանն է (միջոցառման վայր):' },
      { id: 'se17', type: 'SELECT', instruction: 'Ընտրեք ճիշտ բայը', prompt: '___ las tres de la tarde.', target: 'Son', choices: ['Son', 'Están'], translation: 'Ցերեկվա ժամը երեքն է:' },
      { id: 'se18', type: 'SELECT', instruction: 'Ընտրեք ճիշտ բայը', prompt: 'Nosotros ___ listos para salir.', target: 'estamos', choices: ['somos', 'estamos'], translation: 'Մենք պատրաստ ենք դուրս գալու:' },
      { id: 'se19', type: 'SELECT', instruction: 'Ընտրեք ճիշտ բայը', prompt: 'Eres muy inteligente.', target: 'Eres', choices: ['Eres', 'Estás'], translation: 'Դու շատ խելացի ես:' },
      { id: 'se20', type: 'SELECT', instruction: 'Ընտրեք ճիշտ բայը', prompt: 'La ventana ___ rota.', target: 'está', choices: ['es', 'está'], translation: 'Պատուհանը կոտրված է:' }
    ]
  },
  {
    id: 3,
    title: 'Լեռան Գագաթը (10 վարժություն)',
    description: 'Վերջին փուլը: Ամենադժվար վարժությունները:',
    explanationIntro: 'Հիշե՛ք, որ երբեմն բայի փոփոխությունը փոխում է նաև բառի իմաստը (օրինակ՝ ser bueno = լավ մարդ լինել, estar bueno = համեղ լինել):',
    exercises: [
      { id: 'se21', type: 'SELECT', instruction: 'Ընտրեք ճիշտ բայը', prompt: 'El edificio ___ muy alto.', target: 'es', choices: ['es', 'está'], translation: 'Շենքը շատ բարձր է:' },
      { id: 'se22', type: 'SELECT', instruction: 'Ընտրեք ճիշտ բայը', prompt: '¿___ seguro de tu respuesta?', target: 'Estás', choices: ['Eres', 'Estás'], translation: 'Վստա՞հ ես քո պատասխանի համար:' },
      { id: 'se23', type: 'SELECT', instruction: 'Ընտրեք ճիշտ բայը', prompt: 'La película ___ divertida.', target: 'es', choices: ['es', 'está'], translation: 'Ֆիլմը զվարճալի է:' },
      { id: 'se24', type: 'SELECT', instruction: 'Ընտրեք ճիշտ բայը', prompt: 'Mi abuela ___ enferma.', target: 'está', choices: ['es', 'está'], translation: 'Տատիկս հիվանդ է:' },
      { id: 'se25', type: 'SELECT', instruction: 'Ընտրեք ճիշտ բայը', prompt: 'Este café ___ riquísimo.', target: 'está', choices: ['es', 'está'], translation: 'Այս սուրճը շատ համեղ է:' },
      { id: 'se26', type: 'SELECT', instruction: 'Ընտրեք ճիշտ բայը', prompt: 'Tú ___ español.', target: 'eres', choices: ['eres', 'estás'], translation: 'Դու իսպանացի ես:' },
      { id: 'se27', type: 'SELECT', instruction: 'Ընտրեք ճիշտ բայը', prompt: 'Estamos en el año 2024.', target: 'Estamos', choices: ['Somos', 'Estamos'], translation: 'Մենք 2024 թվականում ենք:' },
      { id: 'se28', type: 'SELECT', instruction: 'Ընտրեք ճիշտ բայը', prompt: 'La pared ___ pintada de verde.', target: 'está', choices: ['es', 'está'], translation: 'Պատը կանաչ է ներկված:' },
      { id: 'se29', type: 'SELECT', instruction: 'Ընտրեք ճիշտ բայը', prompt: 'El concierto ___ en el estadio.', target: 'es', choices: ['es', 'está'], translation: 'Համերգը մարզադաշտում է (իրադարձություն):' },
      { id: 'se30', type: 'SELECT', instruction: 'Ընտրեք ճիշտ բայը', prompt: 'Yo ___ feliz de verte.', target: 'estoy', choices: ['soy', 'estoy'], translation: 'Ես ուրախ եմ քեզ տեսնելու համար:' }
    ]
  }
];

export const VOCABULARY = [
  { id: 'v1', es: 'Ser', hy: 'Լինել (մշտական)' },
  { id: 'v2', es: 'Estar', hy: 'Լինել (ժամանակավոր)' },
  { id: 'v3', es: 'Hoy', hy: 'Այսօր' },
  { id: 'v4', es: 'Aquí', hy: 'Այստեղ' },
  { id: 'v5', es: 'Ahora', hy: 'Հիմա' },
];
