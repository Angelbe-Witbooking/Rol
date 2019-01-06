const lifePoints = {
  key: Math.random(),
  title: 'Puntos de Vida',
  boxes: [
    {
      key: Math.random(),
      header: '',
      symbol: '',
      boxContent: '',
      boxStyles: {},
    },
    {
      key: Math.random(),
      header: 'Max',
      symbol: '',
      boxStyles: { 'border-left': '0px' },
    },
  ],
};
const seriousInjury = {
  key: Math.random(),
  title: '',
  boxes: [
    {
      key: Math.random(),
      header: 'Herida Grave',
      symbol: '',
      boxContent: '',
      boxContainerStyles: { 'margin-left': '10px' },
      headerStyles: { 'text-align': 'center', 'margin-bottom': '1px', 'font-weight': 700 },
    },
  ],
};
const defense = {
  key: Math.random(),
  title: 'Defensa',
  boxes: [
    {
      key: Math.random(),
      header: 'Total',
      symbol: '',
      boxContent: '',
      boxStyles: {},
    },
    {
      key: Math.random(),
      header: 'Des.',
      symbol: '=',
    },
    {
      key: Math.random(),
      header: 'Ref.',
      symbol: '+',
    },
    {
      key: Math.random(),
      header: 'escudo',
      symbol: '+',
    },
    {
      key: Math.random(),
      header: 'otros',
      symbol: '+',
    },
  ],
};
const armor = {
  key: Math.random(),
  title: '',
  boxes: [
    {
      key: Math.random(),
      header: '',
      symbol: '',
      boxContent: '',
      boxStyles: { width: '35px' },
    },
    {
      key: Math.random(),
      header: 'Armaduras, ropa y escudos',
      symbol: '=',
      boxStyles: { width: '250px', height: '40px' },
      headerStyles: { 'align-self': 'flex-start', 'font-weight': 700, 'font-size': '13px' },
      symbolStyles: { color: 'black', width: '5px', padding: '0' },
    },
    {
      key: Math.random(),
      header: 'RD/Esquiva',
      symbol: '+',
      boxStyles: { width: '75px' },
      symbolStyles: { color: 'black', width: '5px', padding: '0' },
    },
    {
      key: Math.random(),
      header: 'Daño',
      symbol: '+',
      symbolStyles: { color: 'black', width: '5px', padding: '0' },
    },
    {
      key: Math.random(),
      header: 'Penal.',
      symbol: '+',
      symbolStyles: { color: 'black', width: '5px', padding: '0' },
    },
  ],
};
const armorFollow = {
  key: Math.random(),
  title: '',
  boxes: [
    {
      key: Math.random(),
      header: '',
      symbol: '',
      boxContent: '',
      boxStyles: { width: '35px' },
      boxContainerStyles: { 'margin-top': '0' },
    },
    {
      key: Math.random(),
      header: '',
      symbol: '=',
      boxStyles: { width: '250px', height: '40px' },
      headerStyles: { 'align-self': 'flex-start' },
      boxContainerStyles: { 'margin-top': '0' },
      symbolStyles: {
        color: 'black',
        width: '5px',
        padding: '0',
        'margin-top': 0,
      },
    },
    {
      key: Math.random(),
      header: '',
      symbol: '+',
      boxContainerStyles: { 'margin-top': '0' },
      boxStyles: { width: '75px' },
      symbolStyles: {
        color: 'black',
        width: '5px',
        padding: '0',
        'margin-top': 0,
      },
    },
    {
      key: Math.random(),
      header: '',
      symbol: '+',
      boxContainerStyles: { 'margin-top': '0' },
      symbolStyles: {
        color: 'black',
        width: '5px',
        padding: '0',
        'margin-top': 0,
      },
    },
    {
      key: Math.random(),
      header: '',
      symbol: '+',
      boxContainerStyles: { 'margin-top': '0' },
      symbolStyles: {
        color: 'black',
        width: '5px',
        padding: '0',
        'margin-top': 0,
      },
    },
  ],
};
const rDPhysical = {
  key: Math.random(),
  title: 'Físico',
  titleStyles: { 'margin-top': '0', 'min-width': '100px' },
  boxes: [
    {
      boxContainerStyles: { 'margin-top': '0' },
      key: Math.random(),
    },
  ],
};
const rDArcane = {
  key: Math.random(),
  title: 'Arcano',
  titleStyles: { 'margin-top': '0', 'min-width': '100px' },
  boxes: [
    {
      boxContainerStyles: { 'margin-top': '0' },
      key: Math.random(),
    },
  ],
};
const rDLight = {
  key: Math.random(),
  title: 'Luz',
  titleStyles: { 'margin-top': '0', 'min-width': '100px' },
  boxes: [
    {
      boxContainerStyles: { 'margin-top': '0' },
      key: Math.random(),
    },
  ],
};
const rDDark = {
  key: Math.random(),
  title: 'Oscuridad',
  titleStyles: { 'margin-top': '0', 'min-width': '100px' },
  boxes: [
    {
      boxContainerStyles: { 'margin-top': '0' },
      key: Math.random(),
    },
  ],
};
const rDFire = {
  key: Math.random(),
  title: 'Fuego',
  titleStyles: { 'margin-top': '0', 'min-width': '100px' },
  boxes: [
    {
      boxContainerStyles: { 'margin-top': '0' },
      key: Math.random(),
    },
  ],
};
const rDAir = {
  key: Math.random(),
  title: 'Aire',
  titleStyles: { 'margin-top': '0', 'min-width': '100px' },
  boxes: [
    {
      boxContainerStyles: { 'margin-top': '0' },
      key: Math.random(),
    },
  ],
};
const rDWater = {
  key: Math.random(),
  title: 'Agua',
  titleStyles: { 'margin-top': '0', 'min-width': '100px' },
  boxes: [
    {
      boxContainerStyles: { 'margin-top': '0' },
      key: Math.random(),
    },
  ],
};
const rDEarth = {
  key: Math.random(),
  title: 'Tierra',
  titleStyles: { 'margin-top': '0', 'min-width': '100px' },
  boxes: [
    {
      boxContainerStyles: { 'margin-top': '0' },
      key: Math.random(),
    },
  ],
};

const impact = {
  key: Math.random(),
  title: 'Impacto',
  boxes: [
    {
      key: Math.random(),
      header: 'total',
      symbol: '',
      boxContent: '',
    },
    {
      key: Math.random(),
      header: 'Ataque',
      symbol: '=',
    },
    {
      key: Math.random(),
      header: 'Otros',
      symbol: '+',
    },
  ],
};
const impactDistant = {
  key: Math.random(),
  title: 'Impacto a D.',
  boxes: [
    {
      key: Math.random(),
      header: 'total',
      symbol: '',
      boxContent: '',
    },
    {
      key: Math.random(),
      header: 'Precisión',
      symbol: '=',
      boxStyles: { width: '65px' },
    },
    {
      key: Math.random(),
      header: 'Otros',
      symbol: '+',
    },
  ],
};
const mana = {
  key: Math.random(),
  title: 'Mana',
  titleStyles: { 'min-width': '80px', display: 'flex', 'justify-content': 'center' },
  boxes: [
    {
      key: Math.random(),
      header: '',
      symbol: '',
      boxContent: '',
      boxStyles: { width: '67px', 'margin-top': '1px' },
    },
    {
      key: Math.random(),
      header: 'Max',
      symbol: '',
      boxStyles: { width: '67px', 'border-left': '0px' },
    },
  ],
};
const favor = {
  key: Math.random(),
  title: 'Favor',
  titleStyles: { 'min-width': '80px', display: 'flex', 'justify-content': 'center' },
  boxes: [
    {
      key: Math.random(),
      header: '',
      symbol: '',
      boxContent: '',
      boxStyles: { width: '67px', 'margin-top': '1px' },
    },
    {
      key: Math.random(),
      header: 'Max',
      symbol: '',
      boxStyles: { width: '67px', 'border-left': '0px' },
    },
  ],
};
const heroism = {
  key: Math.random(),
  title: 'Heroísmo',
  boxes: [
    {
      key: Math.random(),
      header: '',
      symbol: '',
      boxContent: '',
      boxStyles: { width: '67px', 'margin-top': '1px' },
    },
    {
      key: Math.random(),
      header: 'Max',
      symbol: '',
      boxStyles: { width: '67px', 'border-left': '0px' },
    },
  ],
};
const speed = {
  key: Math.random(),
  title: 'Velocidad',
  boxes: [
    {
      key: Math.random(),
      header: 'metros',
      symbol: '',
      boxContent: '',
      boxStyles: { width: '65px' },
    },
    {
      key: Math.random(),
      header: 'casillas',
      symbol: '',
      boxStyles: { width: '65px', 'border-left': '0px' },
    },
  ],
};

const consumable = {
  key: Math.random(),
  title: '',
  boxes: [
    {
      key: Math.random(),
      header: 'nombre',
      symbol: '',
      boxContent: '',
      boxStyles: { width: '400px', height: '40px' },
      headerStyles: { 'align-self': 'flex-start' },
    },
    {
      key: Math.random(),
      header: 'cantidad',
      symbol: '',
      boxStyles: { width: '65px', 'border-left': '0px' },
    },
  ],
};
const consumableFollow = {
  key: Math.random(),
  title: '',
  boxes: [
    {
      key: Math.random(),
      header: '',
      symbol: '',
      boxContent: '',
      boxStyles: { width: '400px', height: '40px' },
      headerStyles: { 'align-self': 'flex-start' },
      boxContainerStyles: { 'margin-top': '4px' },
    },
    {
      key: Math.random(),
      header: '',
      symbol: '',
      boxStyles: { width: '65px', 'border-left': '0px' },
      boxContainerStyles: { 'margin-top': '4px' },
    },
  ],
};
const weapons = {
  key: Math.random(),
  title: '',
  boxes: [
    {
      key: Math.random(),
      header: '',
      symbol: '',
      boxContent: '',
      boxStyles: { width: '35px' },
    },
    {
      key: Math.random(),
      header: 'Armas',
      symbol: '=',
      boxStyles: { width: '250px', height: '40px' },
      headerStyles: { 'align-self': 'flex-start', 'font-weight': 700, 'font-size': '13px' },
      symbolStyles: { color: 'black', width: '5px', padding: '0' },
    },
    {
      key: Math.random(),
      header: 'Impacto',
      symbol: '+',
      symbolStyles: { color: 'black', width: '5px', padding: '0' },
    },
    {
      key: Math.random(),
      header: 'Daño',
      symbol: '+',
      symbolStyles: { color: 'black', width: '5px', padding: '0' },
    },
    {
      key: Math.random(),
      header: 'crítico',
      symbol: '+',
      symbolStyles: { color: 'black', width: '5px', padding: '0' },
    },
    {
      key: Math.random(),
      header: 'alcance',
      symbol: '+',
      symbolStyles: { color: 'black', width: '5px', padding: '0' },
    },
  ],
};
const weaponsFollow = {
  key: Math.random(),
  title: '',
  boxes: [
    {
      key: Math.random(),
      header: '',
      symbol: '',
      boxContent: '',
      boxStyles: { width: '35px' },
      boxContainerStyles: { 'margin-top': '0' },
    },
    {
      key: Math.random(),
      header: '',
      symbol: '=',
      boxStyles: { width: '250px', height: '40px' },
      headerStyles: { 'align-self': 'flex-start' },
      boxContainerStyles: { 'margin-top': '0' },
      symbolStyles: {
        color: 'black',
        width: '5px',
        padding: '0',
        'margin-top': 0,
      },
    },
    {
      key: Math.random(),
      header: '',
      symbol: '+',
      boxContainerStyles: { 'margin-top': '0' },
      symbolStyles: {
        color: 'black',
        width: '5px',
        padding: '0',
        'margin-top': 0,
      },
    },
    {
      key: Math.random(),
      header: '',
      symbol: '+',
      boxContainerStyles: { 'margin-top': '0' },
      symbolStyles: {
        color: 'black',
        width: '5px',
        padding: '0',
        'margin-top': 0,
      },
    },
    {
      key: Math.random(),
      header: '',
      symbol: '+',
      boxContainerStyles: { 'margin-top': '0' },
      symbolStyles: {
        color: 'black',
        width: '5px',
        padding: '0',
        'margin-top': 0,
      },
    },
    {
      key: Math.random(),
      header: '',
      symbol: '+',
      boxContainerStyles: { 'margin-top': '0' },
      symbolStyles: {
        color: 'black',
        width: '5px',
        padding: '0',
        'margin-top': 0,
      },
    },
  ],
};
const slots = {
  key: Math.random(),
  title: 'Espacios',
  titleStyles: { 'min-width': '80px', display: 'flex', 'justify-content': 'center' },
  boxes: [
    {
      key: Math.random(),
      header: '',
      symbol: '',
      boxContent: '',
      boxStyles: { width: '67px', 'margin-top': '1px' },
    },
    {
      key: Math.random(),
      header: 'Max',
      symbol: '',
      boxStyles: { width: '67px', 'border-left': '0px' },
    },
  ],
};
const money = {
  key: Math.random(),
  title: 'Dinero',
  boxes: [
    {
      key: Math.random(),
      header: 'Platino',
      symbol: '+',
      symbolStyles: { color: 'black', width: '5px', padding: '0' },
    },
    {
      key: Math.random(),
      header: 'Oro',
      symbol: '+',
      symbolStyles: { color: 'black', width: '5px', padding: '0' },
    },
    {
      key: Math.random(),
      header: 'Plata',
      symbol: '+',
      symbolStyles: { color: 'black', width: '5px', padding: '0' },
    },
    {
      key: Math.random(),
      header: 'Cobre',
      symbol: '+',
      symbolStyles: { color: 'black', width: '5px', padding: '0' },
    },
  ],
};

export default {
  defense,
  lifePoints,
  armor,
  armorFollow,
  rDPhysical,
  rDArcane,
  rDLight,
  rDDark,
  rDFire,
  rDAir,
  rDWater,
  rDEarth,
  impact,
  impactDistant,
  mana,
  favor,
  heroism,
  speed,
  consumable,
  consumableFollow,
  weapons,
  weaponsFollow,
  seriousInjury,
  slots,
  money,
};
