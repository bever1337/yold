import { en_us } from "./en_us";

export function yold(
  { isLocal = false } = {},
  Dayjs,
  dayjs
) {
  dayjs.locale(en_us , null, isLocal);
  const proto = Dayjs.prototype;
  proto.addEra = function addEra(offset = 1166) {
    return this.add(offset, 'years');
  };
  proto.subtractEra = function subtractEra(offset = 1166) {
    return this.subtract(offset, 'years');
  };
}
