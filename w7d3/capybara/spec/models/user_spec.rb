require 'rails_helper'

RSpec.describe User, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
  # validations
  subject(:user) {User.new(email: "nigerian_prince@gmail.com", password: "yeet123")}
  
  describe "validates correct validations" do
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_length_of(:password).is_at_least(6).on(:create) }
  end


  describe "User#is_password?" do
    it "verify a password" do
      expect(user.is_password?("yeet123")).to be true
    end

    it "checks for wrong passwords" do
      expect(user.is_password?("yeet1234")).to be false
    end
  end

  describe "User#reset_session_token" do
    it "resets session_token" do
      prev_token = user.session_token
      user.reset_session_token!
      expect(user.session_token).to_not eq(prev_token)
    end
  end

  describe "User::find_by_credentials" do
    user.save!
    #find_by_credentials uses find_by so it makes a dive into the db so we need to save
    it "return found user" do
      expect(User.find_by_credentials("nigerian_prince@gmail.com", "yeet123")).to eq user
    end

    it "return nil if not found" do
      expect(User.find_by_credentials("wowwoow@email", "111111111")).to eq nil
    end
  end

end
