require 'set'

class GraphNode
    attr_reader :value
    attr_accessor :neighbors
    def initialize(value)
        @neighbors = []
        @value = value
    end

    def bfs(starting_node, target_value)
        return self if starting_node.value == target_value
        q = starting_node.neighbors.dup
        visited = Set.new()
        until q.empty?
            node = q.shift
            next if visited.include?(node.value.to_sym)
            visited << node.value.to_sym
            return node if node.value == target_value
            q += node.neighbors
        end
    end
end

a = GraphNode.new('a')
b = GraphNode.new('b')
c = GraphNode.new('c')
d = GraphNode.new('d')
e = GraphNode.new('e')
f = GraphNode.new('f')
a.neighbors = [b, c, e]
c.neighbors = [b, d]
e.neighbors = [a]
f.neighbors = [e]

p bfs(a, "f") # => nil
p a.bfs(a, 'b') # => #<GraphNode:0x00007fffd19d8e50 @neighbors=[], @value="b">