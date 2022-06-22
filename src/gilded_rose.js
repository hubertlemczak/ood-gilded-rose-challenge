class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => this.updateAll(item));
    return this.items;
  }

  updateConjuredQuality(item) {
    item.sellIn--;
    item.quality -= 2;
    if (item.sellIn < 0) item.quality -= 2;
    if (item.quality < 0) item.quality = 0;
  }

  updateBrieQuality(item) {
    item.sellIn--;
    item.quality++;
    if (item.sellIn < 0) item.quality++;
    if (item.quality > 50) item.quality = 50;
  }

  updateConcertQuality(item) {
    item.sellIn--;
    item.quality++;
    if (item.sellIn < 11) {
      item.quality++;
    }
    if (item.sellIn < 6) {
      item.quality++;
    }
    if (item.quality > 50) item.quality = 50;
    if (item.sellIn < 0) item.quality = 0;
  }

  updateNormalQuality(item) {
    item.sellIn--;
    item.quality--;
    if (item.sellIn < 0) item.quality--;
    if (item.quality < 0) item.quality = 0;
  }

  updateAll(item) {
    if (item.name.includes('Conjured')) {
      this.updateConjuredQuality(item);
    } else if (item.name === 'Aged Brie') {
      this.updateBrieQuality(item);
    } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
      this.updateConcertQuality(item);
    } else if (item.name === 'Elixir of the Mongoose' || item.name === '+5 Dexterity Vest') {
      this.updateNormalQuality(item);
    }
  }
}

module.exports = {
  Item,
  Shop,
};
