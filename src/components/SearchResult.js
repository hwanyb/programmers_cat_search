export default class SearchResult {
    $searchResult = null;
    data = null;
    onClick = null;

    constructor({ $target, initialData, onClick, getCatsInfo }) {
      this.$searchResult = document.createElement("section");
      this.$searchResult.className = "SearchResult";
      $target.appendChild(this.$searchResult);
  
      this.data = initialData;
      this.onClick = onClick;
      this.getCatsInfo = getCatsInfo;
      
  
      this.render();
    }
  
    setState(nextData) {
      this.data = nextData;
      this.render();
    }
  
    render() {
      if(this.data.data === undefined){
        this.$searchResult.innerHTML = `
          <p>검색결과가 없습니다.</p>
        `;
      }else{
        this.$searchResult.innerHTML = this.data?.data?.map(
          cat => `
            <div class="item">
              <img src=${cat.url} alt=${cat.name} />
            </div>
          `
        )
        .join("");
  
      this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
        $item.addEventListener("click", () => {
          const clickedItem = this.data.data[index]
          this.onClick(clickedItem.id);
          // console.log(clickedItem.id);
        });
      });
      }
    }
  }
  