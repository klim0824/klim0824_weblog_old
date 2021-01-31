import dayjs from 'dayjs'
import 'dayjs/locale/ja'

const date = (iso8601, delimiter = '/') => {
  dayjs.locale('ja')
  return (
    iso8601, dayjs(iso8601).format('YYYY' + delimiter + 'MM' + delimiter + 'DD')
  )
}
export default date
