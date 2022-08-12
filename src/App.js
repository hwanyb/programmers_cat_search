import { request } from "./api.js";
import Header from "./components/Header.js";

import ImageInfo from "./components/ImageInfo.js";
import RandomBanner from "./components/RandomBanner.js";
import SearchInput from "./components/SearchInput.js";
import SearchResult from "./components/SearchResult.js";

console.log("app is running!");

export default class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target;

    this.header = new Header({
        $target,
        
    });
    
    this.searchInput = new SearchInput({
      $target,
      onSearch: async (keyword) => {
        const searchData = await request('search', keyword);
        this.setState(searchData);
        console.log(searchData);
      }
    });
    this.randomBanner = new RandomBanner({
        $target,
        // initialData,
        // getRandomData: async () => {
        //     const randomData = await request('random');
        //     initialData = randomData
        //     console.log(randomData)
        // },
    })

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: image => {
        this.imageInfo.setState({
          visible: true,
          image
        });
      }
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null
      }
    });
  }

  setState(nextData) {
    console.log(this);
    this.data = nextData;
    this.searchResult.setState(nextData);
  }
}
