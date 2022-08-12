import { request } from "./api.js";

import Header from "./components/Header.js";
import ImageInfo from "./components/ImageInfo.js";
import RandomBanner from "./components/RandomBanner.js";
import SearchInput from "./components/SearchInput.js";
import SearchResult from "./components/SearchResult.js";

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
        const searchData = await request("search", keyword);
        this.setState(searchData);
      },
    });
    this.randomBanner = new RandomBanner({
      $target,
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: async (id) => {
        const infoData = await request("", id);
        this.imageInfo.setState({
          visible: true,
          image: infoData.data,
        });
      },
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null,
      },
    });
  }

  setState(nextData) {
    // console.log(this);
    this.data = nextData;
    this.searchResult.setState(nextData);
  }
}
