function updateClock(){
    const now= new Date()

    const hours=now.getHours()
    const menutes=String(now.getMinutes()).padStart(2,'0')
    const seconds=String(now.getSeconds()).padStart(2,'0')

const ampm=hours>=12 ? 'PM' : 'AM'


document.querySelector('.hourse-minutes').textContent=`${String((hours))
.padStart(2,'0')}:${menutes}:${seconds}`

document.querySelector('.time-ampm').textContent=ampm


const option={
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric'
}

document.querySelector('.date').textContent=now.toLocaleDateString(undefined,option)

}

updateClock()

setInterval(updateClock,1000)
