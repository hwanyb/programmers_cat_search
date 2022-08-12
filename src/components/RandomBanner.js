import { request } from "../api.js";

export default class RandomBanner {
  data = [];
  constructor({ $target }) {
    const $randomBanner = document.createElement("section");
    this.$randomBanner = $randomBanner;
    this.$randomBanner.className = "RandomBanner";
    $target.appendChild($randomBanner);

    this.getRandom();
    this.render();
  }
  async getRandom() {
    const randomData = await request("random");
    let slicedRandomData = [];
    if (randomData !== undefined) {
      slicedRandomData = randomData.data.slice(0, 5);
    }
    this.setState(slicedRandomData);
  }
  setState(nextData) {
    this.data = nextData;
    this.render();
  }
  render() {
    if (this.data) {
      this.$randomBanner.innerHTML = `
            <div>
            <button class="prev"><</button>
            <div class="imgSlide">
                ${this.data
                  .map(
                    (random) => `
                    <div class="imgWrapper">
                        <img src=${random.url} alt=${random.name} />
                    </div>
                `
                  )
                  .join("")}
            </div>
            <button class="next>dsf</button>
            </div>
        `;
    }
  }
}
