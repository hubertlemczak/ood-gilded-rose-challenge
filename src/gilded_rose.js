const {
  updateBrieQuality,
  updateConcertQuality,
  updateNormalQuality,
  updateConjuredQuality,
  sulfuras,
} = require('./utils/utils');

class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
const updateItems = {
  'Aged Brie': updateBrieQuality,
  'Backstage passes to a TAFKAL80ETC concert': updateConcertQuality,
  'Elixir of the Mongoose': updateNormalQuality,
  '+5 Dexterity Vest': updateNormalQuality,
  'Conjured Mana Cake': updateConjuredQuality,
  'Sulfuras, Hand of Ragnaros': sulfuras,
};

class Shop {
  constructor(items) {
    this.items = items || [];
  }

  updateQuality() {
    this.items.forEach((item) => updateItems[item.name](item));
    return this.items;
  }
}
module.exports = {
  Item,
  Shop,
};
