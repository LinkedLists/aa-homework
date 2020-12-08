# PHASE 2
def convert_to_int(str)
    Integer(str)
end
  
  # PHASE 3
FRUITS = ["apple", "banana", "orange"]

def reaction(maybe_fruit)
    if FRUITS.include? maybe_fruit
        puts "OMG, thanks so much for the #{maybe_fruit}!"
    else 
        raise StandardError.new "that's not a fruit -.-"
    end 
end

def feed_me_a_fruit
    puts "Hello, I am a friendly monster. :)"   
    puts "Feed me a fruit! (Enter the name of a fruit:)"
    maybe_fruit = gets.chomp
    begin 
        reaction(maybe_fruit)
    rescue StandardError => e
        puts "I want coffee now"
        maybe_fruit = gets.chomp
        reaction(maybe_fruit)
        retry
    end
end  

# PHASE 4
class BestFriend
    def initialize(name, yrs_known, fav_pastime)
        if yrs_known < 5
            raise ArgumentError.new "don't simp, needs 5 years"
        elsif name.length <= 0
            raise ArgumentError.new "you don't seem to have a name"
        elsif fav_pastime.length <= 0
            raise ArgumentError.new "everybody has a favorite pastime!!"
        end
        @name = name
        @yrs_known = yrs_known
        @fav_pastime = fav_pastime
    end 
    def talk_about_friendship
        puts "Wowza, we've been friends for #{@yrs_known}. Let's be friends for another #{1000 * @yrs_known}."
    end 
    def do_friendstuff
        puts "Hey bestie, let's go #{@fav_pastime}. Wait, why don't you choose. 😄"
    end 
    def give_friendship_bracelet
        puts "Hey bestie, I made you a friendship bracelet. It says my name, #{@name}, so you never forget me." 
    end
end
  
  
  