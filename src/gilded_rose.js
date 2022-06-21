class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    // days to sell item
    this.sellIn = sellIn;
    // changes every day either + or -
    this.quality = quality;
  }
}
class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    //cycling through all items
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          // 'Sulfuras, Hand of Ragnaros' properties never change
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        // if 'Aged Brie' or 'Backstage passes to a TAFKAL80ETC concert'
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          // Checks for ticket
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            // if concert within 10 days the quality increases
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            // if concert within 5 days the quality increases even more
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      // 'Sulfuras, Hand of Ragnaros' properties never change
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              // 'Sulfuras, Hand of Ragnaros' properties never change
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
            // if item is 'Backstage passes to a TAFKAL80ETC concert' quality will be 0 as passed it's sellIn date
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          // aged brie quality will keep increasing even after sellIn date
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}
module.exports = {
  Item,
  Shop,
};
