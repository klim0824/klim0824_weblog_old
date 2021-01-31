import dayjs from 'dayjs'
import 'dayjs/locale/ja'

const date = (iso8601, delimiter = '/') => {
  dayjs.locale('ja')
  return dayjs(iso8601).format('YYYY' + delimiter + 'MM' + delimiter + 'DD')
}
export default date
