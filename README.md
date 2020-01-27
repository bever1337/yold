# yold

## installation
```
  npm install dayjs
  cd node_modules
  git clone https://github.com/bever1337/yold.git
```

## usage
```javascript
  import dayjs from "dayjs";
  import { yold } from "./index";

  // Local yold locale
  dayjs.extend(yold, { isLocal: true });
  console.log(
    dayjs()
      .locale("yold")
      .addEra()
      .format("dddd D MMMM YYYY")
  );
  console.log(dayjs().format("dddd D MMMM YYYY"));
  // > Sweetmorn 26 Chaos 3186
  // > Sunday 26 January 2020

  // Global yold locale (Default)
  dayjs.extend(yold);
  console.log(
    dayjs()
      .addEra()
      .format("dddd D MMMM YYYY")
  );
  console.log(dayjs().format("dddd D MMMM YYYY"));
  // > Sweetmorn 26 Chaos 3186
  // > Sweetmorn 26 Chaos 2020
```
