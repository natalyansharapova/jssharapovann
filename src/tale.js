function kolobok(name) {
    switch(name) {
        case 'дедушка':  return 'Я от дедушки ушёл';
        case 'заяц': return 'Я от зайца ушёл';
        case 'лиса': return 'Меня съели';
      }
  }

  function newYear(name) {
    switch(name) {
    case 'Дед Мороз': return `${name}!${name}!${name}!`
    case 'Снегурочка': return `${name}!${name}!${name}!`
    }
  }

  console.log(newYear('Дед Мороз'))