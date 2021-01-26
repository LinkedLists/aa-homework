require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  let(:chef) { double("chef") }
  subject(:dessert) {Dessert.new("Cookie", 500, :chef)}

  describe "#initialize" do
    it "sets a type" do
      expect(dessert.type).to_not eq(nil)
    end
    it "sets a quantity" do
      expect(dessert.quantity).to eq(500) 
    end
    it "starts ingredients as an empty array" do
      expect(dessert.ingredients).to eq([])
    end
    it "raises an argument error when given a non-integer quantity" do 
      expect(dessert.quantity.class).to eq(Integer) 
    end
  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array" do
      dessert.add_ingredient("Eggs")
      expect(dessert.ingredients[-1]).to eq("Eggs")
    end
  end

  describe "#mix!" do
    let(:temp) {dessert.ingredients}
    it "shuffles the ingredient array" do
      expect(temp).to_not eq(dessert.ingredients)
    end
  end

  describe "#eat" do
    it "subtracts an amount from the quantity" do
    dessert.eat(20)
    expect(dessert.quantity).to eq(480)
    end
    it "raises an error if the amount is greater than the quantity" do
      expect {dessert.quantity.to raise-error(ArgumentError)}
    end
  end

  describe "#serve" do
    it "contains the titleized version of the chef's name" do
      expect(dessert.serve).to include(dessert.chef.titleize)
    end
  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in" do
      dessert.make_more
      expect(dessert.temp).to be(400)
    end
  end
end
