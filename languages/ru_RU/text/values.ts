import { content } from '../../../code/systems/assets';
import { CosmosFont, CosmosKeyed, CosmosMath, CosmosTyper } from '../../../code/systems/storyteller';

// START-TRANSLATE

export const LANGUAGE = 'ru_RU';

export default {
   cellInventoryX: 0,
   cellBoxX: 0,
   cellFinishX: 0,
   footerX: 0,
   itemEquipX: 0,
   itemUseX: 0,
   itemInfoX_equip: 0,
   itemInfoX_use: 0,
   itemDropX_equip: 0,
   itemDropX_use: 0,
   loadContinueX: 0,
   loadLVX: 0,
   loadObserveX: 0,
   loadResetX: 0,
   loadSettingsX: 0,
   loadTimeX: 0,
   loadTrueResetX: 0,
   nameChoiceCameos: <CosmosKeyed<string>>{
      
      '': 'Ты должен выбрать имя.',
      no: 'Нет?',

      
      bully: 'Хм...?',
      flirt: 'Хм...?',
      geno: 'Хм...?',
      mercy: 'Хм...?',
      murder: 'Хм...?',
      paci: 'Хм...?',
      maybe: 'Может быть?',
      yes: 'Да?',

      
      afraid: 'Успокойся.\nЗдесь нечего бояться.',
      amused: 'Легкомысленный настрой сослужит вам хорошую службу в путешествии.',
      angry: 'Успокойтесь.\nВаши разочарования уже позади.',
      angsty: 'Успокойся.\nЭта история - твоя, что бы ты ни чувствовал.',
      antsy: 'Пусть спокойствие снизойдет на тебя, когда ты отправишься в путь.',
      bored: 'Успокойся.\nТвоя история настолько интересна, насколько ты ее создашь.',
      brainy: 'Пусть качество твоей речи перейдет в действие на твоём пути.',
      brave: 'Мужественное сердце сослужит тебе добрую службу на твоём пути.',
      brazen: 'Мужественное сердце сослужит тебе добрую службу на твоём пути.',
      calm: 'Чувство спокойствия сделает с тобой чудеса в путешествии.',
      clever: 'Пусть твоя изобретательность превзойдет все трудности на твоём пути.',
      cocky: 'Уверенный образ мыслей поможет тебе пройти долгий путь.',
      crafty: 'Пусть твоя изобретательность превзойдет все трудности на твоём пути.',
      crazy: 'Пусть равновесие придет к тебе, когда ты отправишься в путь.',
      daring: 'Мужественное сердце сослужит тебе добрую службу на твоём пути.',
      dizzy: 'Пусть равновесие придет к тебе, когда ты отправишься в путь.',
      dumb: 'Успокойся.\nНа предстоящем пути тебе предстоит многому научиться.',
      edgy: 'Пусть гобелен хаоса и порядка удовлетворит тебя в твоём путешествии.',
      elated: 'Легкомысленный настрой сослужит вам хорошую службу в путешествии.',
      empty: 'Пусть твоя история обретет смысл в этом коконе среди тьмы.',
      flirty: 'Пусть этот опыт будет настолько игривым, насколько ты хочешь.',
      giddy: 'Легкомысленный настрой сослужит вам хорошую службу в путешествии.',
      goofy: 'Легкомысленный настрой сослужит вам хорошую службу в путешествии.',
      greedy: 'Пусть опыт будет таким же чрезмерным, как ты хочешь.',
      guilty: 'Успокойся.\nТеперь тебе нечего стыдиться.',
      happy: 'Легкомысленный настрой сослужит вам хорошую службу в путешествии.',
      hollow: 'Пусть твоя история обретет смысл в этом коконе среди тьмы.',
      humble: 'Умеренное самолюбие поможет тебе далеко продвинуться в путешествии.',
      hungry: 'Пусть опыт даст тебе необходимую подпитку.',
      insane: 'Пусть равновесие придет к тебе, когда ты отправишься в путь.',
      irate: 'Успокойтесь.\nВаши разочарования уже позади.',
      jaded: 'Пусть твоя история вызовет те эмоции, которые ты стремишься испытать.',
      lazy: 'Пусть твой выбор будет таким же легким, как и все остальное.',
      lively: 'Легкомысленный настрой сослужит вам хорошую службу в путешествии.',
      livid: 'Успокойтесь.\nВаши разочарования уже позади.',
      lonely: 'Примите к сердцу.\nЗдесь есть с кем пообщаться.',
      lucky: 'Пусть удача сопутствует тебе в твоём путешествии.',
      mad: 'Успокойтесь.\nВаши разочарования уже позади.',
      manic: 'Пусть равновесие придет к тебе, когда ты отправишься в путь.',
      meek: 'Умеренное самолюбие поможет тебе далеко продвинуться в путешествии.',
      modest: 'Умеренное самолюбие поможет тебе далеко продвинуться в путешествии.',
      nervy: 'Пусть спокойствие снизойдет на тебя, когда ты отправишься в путь.',
      moody: 'Успокойся.\nЭта история - твоя, что бы ты ни чувствовал.',
      numb: 'Пусть твоя история вызовет те эмоции, которые ты стремишься испытать.',
      proud: 'Уверенный образ мыслей поможет тебе пройти долгий путь.',
      rowdy: 'Пусть гобелен хаоса и порядка радует тебя на твоём пути.',
      sad: 'Примите к сердцу.\nТвоя история поднимает настроение настолько, насколько ты ее делаешь.',
      sane: 'Пусть твоя стабильность послужит надежным фундаментом на твоём пути.',
      sassy: 'Пусть этот опыт будет настолько игривым, насколько ты хочешь.',
      sated: 'Пусть этот опыт только усугубит твоё состояние удовлетворения.',
      scared: 'Успокойся.\nЗдесь нечего бояться.',
      serene: 'Чувство спокойствия сделает с тобой чудеса в путешествии.',
      shy: 'Пусть этот опыт будет настолько комфортным, насколько ты хочешь.',
      silly: 'Легкомысленный настрой сослужит вам хорошую службу в путешествии.',
      sleepy: 'Пусть этот опыт даст тебе необходимую энергию.',
      smug: 'Уверенный образ мыслей поможет тебе пройти долгий путь.',
      sorry: 'Успокойся.\nТеперь тебе нечего стыдиться.',
      spry: 'Пусть переполняющая тебя энергия поможет тебе в твоём путешествии.',
      steady: 'Пусть твоя стабильность послужит надежным фундаментом на твоём пути.',
      stupid: 'Успокойся.\nНа предстоящем пути тебе предстоит многому научиться.',
      timid: 'Успокойся.\nЗдесь нечего бояться.',
      tired: 'Пусть этот опыт даст тебе необходимую энергию.',
      unruly: 'Пусть гобелен хаоса и порядка радует тебя на твоём пути.',
      wacky: 'Легкомысленный настрой сослужит вам хорошую службу в путешествии.',
      witty: 'Пусть качество твоей речи перейдет в действие на твоём пути.',
      zen: 'Пусть твоя стабильность послужит надежным фундаментом на твоём пути.',

      
      erogot: 'Я польщен твоим выбором.',
      roman: 'Начинаем эксперимент.',
      thomas: 'Начинаем эксперимент.',

      
      chara: 'Истинное имя.',
      frisk: 'Это имя неверное.',

      
      blooky: "............\n(Они бессильны остановить вас.)",
      dummy: "............\n(Это не очень подходит для разговоров).",
      lurky: 'Привет.',
      mushy: 'Седлайте!',
      napsta: "............\n(Они бессильны остановить вас.)",
      torie: 'Ну... Полагаю, это работает...',
      toriel: 'Я думаю, тебе стоит подумать о своем собственном имени, дитя мое.',
      twink: 'Действительно...',
      twinkl: 'Хорошая попытка, идиот.',
      twinky: 'Хорошая попытка, идиот.',
      walker: 'Разве ты не имеете в виду \"Eyewalker\"?',

      
      astro: 'Посмотрите на мою антенну!',
      cdrake: 'Гух-гух-гух, отлично.',
      chilly: 'Гух-гух-гух, отлично.',
      dogamy: "А? Что это за запах?",
      doggo: "Он д-движется! Я-я-я трясусь!",
      jerry: 'Джерри.',
      major: '(Пёс запрыгнул к вам на колени.)',
      minor: '(Брюки)',
      papyrs: "Я РАЗРЕШАЮ ЭТО!!!!",
      papyru: "Я РАЗРЕШАЮ ЭТО!!!!",
      san: 'ок.',
      sans: 'неа.',
      sdrake: '\"Звездный\" выбор.',
      serf: 'Посмотрите на мою антенну!',
      starry: '\"Звездный\" выбор.',

      
      bob: 'Приятная номенклатура, не так ли?',
      doge: 'Меня это не забавляет.',
      gelata: 'Рёв.',
      gerson: 'Ва-ха-ха! Почему бы и нет?',
      mdummy: 'Что. Что! ЧТО!',
      mkid: "Это моё имя!!",
      monkid: "Это моё имя!!",
      muffet: 'Ахухуху~\nУ тебя, должно быть, отличный вкус, дорогуша~',
      raddy: 'Эй!\nТолько Skrubby может так меня называть!',
      radtie: "Извините, но вы стесняетесь букв.",
      radtil: "Извините, но вы стесняетесь букв.",
      shyren: '...?',
      skrub: 'Чистое имя.',
      skrubb: 'Чистое имя.',
      tem: 'хОЙ!',
      temmie: 'хОЙ!',
      undyn: 'Нга, хорошо.',
      undyne: 'Получи свое СОБСТВЕННОЕ имя!',

      
      alphy: 'Уф.... ХОРОШО?',
      alphys: "Н-не делай этого.",
      bpants: 'Вы действительно скребете по дну бочки.',
      bratty: 'Типа, хорошо, наверное.',
      burgie: 'Тебе нравится мое имя, дружок?',
      catty: "Брэтти! Брэтти! Это МОЁ имя!",
      cozmo: 'Друга-волшебника?',
      glyde: 'Отличный выбор, домосед.',
      hapsta: "Теперь ты просто грубишь, дорогая.",
      mett: 'Ооо! Вы продвигаете мой бренд?',
      metta: 'Ооо! Вы продвигаете мой бренд?',
      mtt: 'Ооо! Вы продвигаете мой бренд?',

      
      aaron: 'Правильно ли это имя?)',
      grillb: 'Горячо, но недостаточно.',
      grilly: 'Горячо, но недостаточно.',
      gyft: "Ты не должен этого делать...",
      heats: 'Ты ЗНАЛ!?',
      kabakk: 'Уважайте мой АВТОРИТЕТ!',
      vulkin: 'Ахх! Спасибо~',
      zorren: 'Спасибо, что используете мое имя.',

      
      asgor: 'Ты можешь?',
      asgore: 'Ты не можешь.',
      asrie: '... хорошо.',
      asriel: '...'
   },

   

// END-TRANSLATE
   nameChoiceFonts: {
      san: [content.fComicSans, 16],
      sans: [content.fComicSans, 16],
      papyrs: [content.fPapyrus, 16],
      papyru: [content.fPapyrus, 16]
   } as Partial<CosmosKeyed<[CosmosFont, number]>>,
   nameChoiceRestrictions: ['', 'alphys', 'asgore', 'asriel', 'frisk', 'sans', 'toriel', 'twinkl', 'twinky', 'undyne'],
   namePromptX: 0,
   nameValueY: 0,
   nameLetterMap: [
      ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З'],
      ['И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р'],
      ['С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ'],
      ['Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'],
      ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з'],
      ['и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р'],
      ['с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ'],
      ['ъ', 'ы', 'ь', 'э', 'ю', 'я']
   ],
   nameLetterPosition: (index: number) => {
      // variables
      const alphabetSize = 33;
      const lineLength = 9;

      // computation
      const position = index % alphabetSize;
      return {
         x: 312 + CosmosMath.spread(192, position % lineLength, lineLength),
         y:
            (index < alphabetSize ? 200 : 320) +
            CosmosMath.spread(42, Math.floor(position / lineLength), Math.ceil(alphabetSize / lineLength))
      };
   },
   nameLetterValidation: (char: string) => {
      return /[A-Za-z]/g.test(char);
   },
   nameValueTranslator(value: string) {
      return value.toLowerCase();
   },
   nameQuitX: 0,
   nameBackspaceX: 0,
   nameDoneX: 0,
   nameConfirmX: 0,
   nameNoX: 0,
   nameYesX: 0,
   nameGoBackX: 0,
   papyrusFontSize1: 16,
   papyrusWritingMode: 'horizontal-tb',
   saveLVX: 0,
   saveReturnX: 0,
   saveSaveX: 0,
   settingsHeaderX: 0,
   statBoxSizeX: 0,
   textFormat(text: string, length = Infinity, plain = false) {
      let output = '';
      const raw = CosmosTyper.strip(text);
      const indent = raw[0] === '*';
      if (raw.length > length) {
         let braces = false;
         let sections = false;
         for (const char of text) {
            output += char;
            switch (char) {
               case '§':
                  sections = !sections;
                  break;
               case '{':
                  braces = true;
                  break;
               case '}':
                  braces = false;
                  break;
               default:
                  if (!braces && !sections) {
                     const lines = output.split('\n');
                     const ender = lines[lines.length - 1];
                     if (CosmosTyper.strip(ender).length > length) {
                        const words = ender.split(' ');
                        output = `${lines.slice(0, -1).join('\n')}${lines.length > 1 ? '\n' : ''}${words
                           .slice(0, -1)
                           .join(' ')}\n${indent ? '  ' : ''}${words[words.length - 1]}`;
                     }
                  }
            }
         }
      } else {
         output = text;
      }
      return plain
         ? output
         : output
            .replace(/-/g, '-{^2}')
            .replace(/,([\n ])/g, ',{^3}$1')
            .replace(/~([\n ])/g, '~{^4}$1')
            .replace(/\n\*/g, '{^5}\n*')
            .replace(/([.?!])([\n ])/g, '$1{^5}$2')
            .replace(/:([\n ])/g, ':{^6}$1');
   },
   textLength(text: string) {
      return text.length;
   },
   textLengthPrecise(text: string) {
      return text.length;
   },
   textPunctuation(char: string) {
      return /[\s\.\,\!\?\~\*\-]/g.test(char);
   }
};
