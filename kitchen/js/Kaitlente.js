class Kaitlente {
    constructor(skyliuKiekis) {
        this.size = skyliuKiekis;
    }

    render() {
        const mainDOM = document.querySelector('main');

        const columns = Math.ceil(Math.sqrt(this.size));
        const width = 120 * columns + 2;
        const HTML = `<div class="kaitlente" style="width: ${width}px;">
                        <div class="top">
                            ${'<div class="skyle"></div>'.repeat(this.size)}
                        </div>
                        <div class="bottom">
                            ${'<div class="jungiklis"></div>'.repeat(this.size)}
                        </div>
                    </div>`;

        mainDOM.innerHTML += HTML;
    }

    enableClicks() {
        // cia aprasome veiksmu logika...
        // susirandame skyles
        // susirandame jungiklius
        // kai jungiklis paspaustas: ijungiam/isjungiam atitinkama skyle
    }
}

export { Kaitlente }