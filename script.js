class Clock {
    constructor(tagClass) {
        this.tagClass = tagClass;
        this.elem = this.createElem();
    }

    createElem() {
        let div = document.createElement("div")
        div.className = this.tagClass + " full";
        document.body.append(div);
        div.style.fontSize = "64px";
        return div;
    }

    render() {
        let time = new Date();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        if (this.elem.classList.contains('full')) {
            this.elem.innerHTML = `${hours}:${minutes}:${seconds}`;
        } else (
            this.elem.innerHTML = `${hours}:${minutes}`
        );
    }

    clockFormat() {
        this.elem.addEventListener('click', () => {
            this.elem.classList.toggle('full');
        })
    }
}

let time1 = new Clock("clock1");
let time2 = new Clock("clock2");
let time3 = new Clock("clock3");
setInterval(time1.render.bind(time1), 1000);
setInterval(time2.render.bind(time2), 1000);
setInterval(time3.render.bind(time3), 1000);
time1.clockFormat();
time2.clockFormat();
time3.clockFormat();

