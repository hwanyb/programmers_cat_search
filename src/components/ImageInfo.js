import { request } from "../api.js";

export default class ImageInfo {
  $imageInfo = null;
  data = null;

  constructor({ $target, data, closeImage }) {
    const $imageInfo = document.createElement("div");
    $imageInfo.className = "ImageInfo";
    this.$imageInfo = $imageInfo;
    $target.appendChild($imageInfo);
    this.data = data;
    this.closeImage = closeImage;
    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    if (this.data.visible) {
      const { name, url, temperament, origin } = this.data.image;

      this.$imageInfo.innerHTML = `
          <div class="content-wrapper">
            <div class="title">
              <span>${name}</span>
              <div class="close">x</div>
            </div>
            <img src="${url}" alt="${name}"/>        
            <div class="description">
              <div>성격: ${temperament}</div>
              <div>태생: ${origin}</div>
            </div>
          </div>`;
      this.$imageInfo.style.display = "block";

      window.addEventListener("keyup", e => {
        if(e.keyCode === 27){
          this.closeImage();
        }
      })
      document.querySelector('body').addEventListener("click", e => {
        if(e.target.className === "ImageInfo"){
        this.closeImage();
        }
      })
      this.$closeBtn = document.querySelector(".close");
      this.$closeBtn.addEventListener("click", () => {
        this.closeImage();
      });
      // if()
    } else {
      this.$imageInfo.style.display = "none";
    }
  }
}
