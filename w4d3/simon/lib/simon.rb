class Simon
    COLORS = %w(red blue green yellow)
    
    attr_accessor :sequence_length, :game_over, :seq
  
    def initialize
        @sequence_length = 1
        @game_over = false
        @seq = []
    end
  
    def play
        until @game_over == true
            take_turn
        end
        puts game_over_message
        reset_game
    end
  
    def take_turn
        show_sequence
        require_sequence
        @game_over = show_sequence == require_sequence
        if !@game_over
            round_success_message
            @sequence_length += 1
        else
            puts game_over_message
            reset_game
        end
    end
  
    def show_sequence
        @sequence_length.times do 
            @seq << add_random_color
        end
        print @seq
    end
  
    def require_sequence
        input = gets.chomp.split(" ")
    end
  
    def add_random_color
        @seq << COLORS.sample
        @seq.last
    end
  
    def round_success_message
        "Success"
    end
  
    def game_over_message
        "The game is over"
    end
  
    def reset_game
        @sequence_length = 1
        @game_over = false
        @seq = []
    end
end

test = Simon.new
test.play
