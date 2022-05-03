let score = 0
export class Tuile {
    constructor(id) {
        let d = undefined

        this.attribut = true
        this.start = null
        
        this.k = this.random()
        if (this.k == 1) d = document.getElementById('colonneA')
        if (this.k == 2) d = document.getElementById('colonneZ')
        if (this.k == 3) d = document.getElementById('colonneE')
        if (this.k == 4) d = document.getElementById('colonneR')
        
        this.tuile = document.createElement('div')
        this.tuile.classList.toggle("tuiles")
        this.tuile.id = id
        this.tuile.style.position = 'absolute'
        this.tuile.style.backgroundColor = 'white'
        this.tuile.style.height = '100px'
        this.tuile.style.width = '115px'
        
        d.appendChild(this.tuile)
        requestAnimationFrame(this.descente)
        this.event()
    }

    
    descente = (timestamp) => {
        if (this.start === null) this.start = timestamp
        let progress = timestamp - this.start;
        progress = progress/5
        this.tuile.style.transform = "translateY("+progress+"px)"
        if (progress < 500 && this.attribut === true) requestAnimationFrame(this.descente)
        else if (progress >= 500) {
            this.tuile.style.backgroundColor = 'red'
            this.tuile.remove()
            // let defDiv = document.getElementById('defaite')
            // defDiv.textContent = "YOU LOST"
            // let div = document.getElementById('verifperdu');
            // div.textContent = 'perdu';
            // console.log('⛔️ perdu')
        }
    }
    
    event() {
        let k = this.k
        this.tuile.addEventListener('click', function(){
            if (k === 1) {
                let audio = new Audio('./Pianosound/CUTEDa.mp3')
                audio.play()
            }
            if (k === 2) {
                let audio = new Audio('./Pianosound/CUTEDz.mp3')
                audio.play()
            }
            if (k === 3) {
                let audio = new Audio('./Pianosound/CUTEDe.mp3')
                audio.play()
            }
            if (k === 4) {
                let audio = new Audio('./Pianosound/CUTEDr.mp3')
                audio.play()
            }
            this.attribut = false
            this.remove()
            score++
            let div = document.getElementById('score')
            div.textContent = 'Your score is:'+score
            console.log("killed, score :"+score)
        })
    }

    random() {
        return Math.floor(Math.random() * (4 - 1 + 1) + 1)
    }
}