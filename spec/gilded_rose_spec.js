const { Shop, Item } = require('../src/gilded_rose.js');

describe('Gilded Rose', function () {
  // let gildedRose =
  // Tests for +5 Dexterity Vest Passes
  it('+5 Dexterity Vest', () => {
    const gildedRose = new Shop([new Item('+5 Dexterity Vest', 10, 20)]);
    const result = gildedRose.updateQuality();
    expect(result[0].name).toEqual('+5 Dexterity Vest');
    expect(result[0].sellIn).toEqual(9);
    expect(result[0].quality).toEqual(19);
  });

  it('+5 Dexterity Vest after sellIn', () => {
    const gildedRose = new Shop([new Item('+5 Dexterity Vest', 1, 11)]);
    gildedRose.updateQuality();
    const result = gildedRose.updateQuality();
    expect(result[0].name).toEqual('+5 Dexterity Vest');
    expect(result[0].sellIn).toEqual(-1);
    expect(result[0].quality).toEqual(8);
  });

  it('+5 Dexterity Vest quality cant be < 0', () => {
    const gildedRose = new Shop([new Item('+5 Dexterity Vest', 1, 0)]);
    gildedRose.updateQuality();
    const result = gildedRose.updateQuality();
    expect(result[0].name).toEqual('+5 Dexterity Vest');
    expect(result[0].sellIn).toEqual(-1);
    expect(result[0].quality).toEqual(0);
  });
  // Tests for Aged Brie
  it('Aged Brie', () => {
    const gildedRose = new Shop([new Item('Aged Brie', 2, 0)]);
    const result = gildedRose.updateQuality();
    expect(result[0].name).toEqual('Aged Brie');
    expect(result[0].sellIn).toEqual(1);
    expect(result[0].quality).toEqual(1);
  });

  it('Aged Brie cannot be > 50', () => {
    const gildedRose = new Shop([new Item('Aged Brie', -1, 49)]);
    const result = gildedRose.updateQuality();
    expect(result[0].name).toEqual('Aged Brie');
    expect(result[0].sellIn).toEqual(-2);
    expect(result[0].quality).toEqual(50);
  });

  it('Aged Brie after sellIn', () => {
    const gildedRose = new Shop([new Item('Aged Brie', 2, 0)]);
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    const result = gildedRose.updateQuality();
    expect(result[0].name).toEqual('Aged Brie');
    expect(result[0].sellIn).toEqual(-1);
    expect(result[0].quality).toEqual(4);
  });
  // Tests for Elixir of the Mongoose
  it('Elixir of the Mongoose', () => {
    const gildedRose = new Shop([new Item('Elixir of the Mongoose', 5, 7)]);
    const result = gildedRose.updateQuality();
    expect(result[0].name).toEqual('Elixir of the Mongoose');
    expect(result[0].sellIn).toEqual(4);
    expect(result[0].quality).toEqual(6);
  });

  it('Elixir of the Mongoose after sellIn', () => {
    const gildedRose = new Shop([new Item('Elixir of the Mongoose', 1, 4)]);
    gildedRose.updateQuality();
    const result = gildedRose.updateQuality();
    expect(result[0].name).toEqual('Elixir of the Mongoose');
    expect(result[0].sellIn).toEqual(-1);
    expect(result[0].quality).toEqual(1);
  });

  it('Elixir of the Mongoose quality cant be < 0', () => {
    const gildedRose = new Shop([new Item('Elixir of the Mongoose', 1, 0)]);
    gildedRose.updateQuality();
    const result = gildedRose.updateQuality();
    expect(result[0].name).toEqual('Elixir of the Mongoose');
    expect(result[0].sellIn).toEqual(-1);
    expect(result[0].quality).toEqual(0);
  });
  // Tests for Sulfuras, Hand of Ragnaros
  it('Sulfuras, Hand of Ragnaros', () => {
    const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);
    const result = gildedRose.updateQuality();
    expect(result[0].name).toEqual('Sulfuras, Hand of Ragnaros');
    expect(result[0].sellIn).toEqual(0);
    expect(result[0].quality).toEqual(80);
  });
  // Tests for Backstage passes to a TAFKAL80ETC concert
  it('Backstage passes to a TAFKAL80ETC concert', () => {
    const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20)]);
    const result = gildedRose.updateQuality();
    expect(result[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert');
    expect(result[0].sellIn).toEqual(14);
    expect(result[0].quality).toEqual(21);
  });

  it('Backstage passes to a TAFKAL80ETC concert quality cannot be > 50', () => {
    const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49)]);
    const result = gildedRose.updateQuality();
    expect(result[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert');
    expect(result[0].sellIn).toEqual(4);
    expect(result[0].quality).toEqual(50);
  });

  it('Backstage passes to a TAFKAL80ETC concert sellIn < 11', () => {
    const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 11)]);
    gildedRose.updateQuality();
    const result = gildedRose.updateQuality();
    expect(result[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert');
    expect(result[0].sellIn).toEqual(8);
    expect(result[0].quality).toEqual(15);
  });

  it('Backstage passes to a TAFKAL80ETC concert sellIn < 6', () => {
    const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 11)]);
    gildedRose.updateQuality();
    const result = gildedRose.updateQuality();
    expect(result[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert');
    expect(result[0].sellIn).toEqual(3);
    expect(result[0].quality).toEqual(17);
  });

  it('Backstage passes to a TAFKAL80ETC concert after sellIn', () => {
    const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 1, 11)]);
    gildedRose.updateQuality();
    const result = gildedRose.updateQuality();
    expect(result[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert');
    expect(result[0].sellIn).toEqual(-1);
    expect(result[0].quality).toEqual(0);
  });
  // Tests for Conjured Mana Cake
  it('Conjured Mana Cake', () => {
    const gildedRose = new Shop([new Item('Conjured Mana Cake', 3, 6)]);
    const result = gildedRose.updateQuality();
    expect(result[0].name).toEqual('Conjured Mana Cake');
    expect(result[0].sellIn).toEqual(2);
    expect(result[0].quality).toEqual(4);
  });

  it('Conjured Mana Cake quality down by 4 after sellIn', () => {
    const gildedRose = new Shop([new Item('Conjured Mana Cake', 1, 20)]);
    gildedRose.updateQuality();
    const result = gildedRose.updateQuality();
    expect(result[0].name).toEqual('Conjured Mana Cake');
    expect(result[0].sellIn).toEqual(-1);
    expect(result[0].quality).toEqual(14);
  });

  it('Conjured Mana Cake quality cant be < 0', () => {
    const gildedRose = new Shop([new Item('Conjured Mana Cake', 1, 5)]);
    gildedRose.updateQuality();
    const result = gildedRose.updateQuality();
    expect(result[0].name).toEqual('Conjured Mana Cake');
    expect(result[0].sellIn).toEqual(-1);
    expect(result[0].quality).toEqual(0);
  });
});
