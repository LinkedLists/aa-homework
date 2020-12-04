class Stack
    def initialize
      # create ivar to store stack here!
      @arr = []
    end

    def push(el)
      # adds an element to the stack
      @arr << el
    end

    def pop
      # removes one element from the stack
      @arr.pop
    end

    def peek
      # returns, but doesn't remove, the top element in the stack
      @arr[-1]
    end
end

# stack = Stack.new
# p stack.push(5)
# p stack.pop
# p stack.peek

class Queue
    def initialize
        @arr = []
    end

    def enqueue(el)
        @arr << el
    end

    def dequeue
        @arr.shift
    end

    def peek
        @arr[-1]
    end
end

# q = Queue.new
# p q.enqueue("Bob")
# p q.enqueue("Sally")
# p q.dequeue
# p q.peek
require "byebug"

class Map
    def initialize
        @arr = []
    end

    def set(key, value)
        # debugger
        pair = [key, value]
        if @arr == []
            @arr << pair
        else
            @arr.map! do |ele| 
                if ele[0] == key
                    ele = pair
                else
                    ele
                end
            end
            @arr << pair if !@arr.include?(pair)
        end
    end

    def get(key)
        @arr.select { |pair| pair[0] == key }
    end

    def delete(key)
        @arr.map! do |pair| 
            if pair[0] == key
                pair = nil 
            else
                pair
            end
        end
        @arr.compact!
    end

    def show
        print @arr
        puts ""
    end

end

# map = Map.new
# p map.set("k1", "v1")
# p map.set("k2", "v2")
# p map.set("k3", "v3")
# p map.get("k1")
# map.delete("k1")
# map.show

