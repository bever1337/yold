# yold

## usage
```javascript
  import dayjs from 'dayjs';
  import { yold } from 'yold';

  // Local yold locale
  dayjs.extend(yold, { isLocal: true });
  console.log(dayjs().locale('yold').addEra().format('dddd D MMMM YYYY'));
  // > Sweetmorn 26 Chaos 3186

  // Global yold locale (Default)
  dayjs.extend(yold);
  console.log(dayjs().addEra().format('dddd D MMMM YYYY'));
  // > Sweetmorn 26 Chaos 3186
```
