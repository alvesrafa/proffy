export default function converHourToMinutes(time: String) {

  const [hour, minutes] = time.split(':').map(Number)

  return (hour * 60) + minutes
}