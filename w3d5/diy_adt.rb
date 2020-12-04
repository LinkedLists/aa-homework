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