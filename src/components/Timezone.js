import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);
let Timezone = ({ input, timezone }) => {
  return dayjs
    .unix(input)
    .utc()
    .utcOffset(timezone / 3600)
    .format("h : mm A");
};
export default Timezone;
