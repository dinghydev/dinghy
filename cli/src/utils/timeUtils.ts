import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc.js'
import timezone from 'dayjs/plugin/timezone.js'

dayjs.extend(utc)
dayjs.extend(timezone)

export const dublinTimeNow = () =>
  dayjs().tz('Europe/Dublin').format('YYYY-MM-DD HH:mm:ss ZZ')

export const sleep = async (time: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}
