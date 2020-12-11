require "byebug"

def sluggish(arr)
    longest = ""
    (0...arr.length - 1).each do |i|
        (i..arr.length - 1).each do |j|
            if arr[j].length > arr[i].length && arr[j].length > longest.length
                longest = arr[j]
            end
        end
    end
    longest
end
    
def dominant(arr)
    # debugger
    return arr if arr.length == 1
    mid = arr.length / 2
    left = arr[0...mid]
    right = arr[mid..-1]
    l = dominant(left)
    r = dominant(right)
    merge(l, r)
end

def merge(left, right)
    merged = []
    until left.empty? || right.empty?
        if left[0].length < right[0].length
            merged << left.shift
        else
            merged << right.shift
        end
    end
    merged + right + left
end

def clever(arr)
    longest = ""
    arr.each do |ele|
        longest = ele if ele.length > longest.length
    end
    longest
end

def slow_dance(dir, tiles)
    tiles.each.with_index do |ele, i|
        return i if ele == dir
    end
end

def fast_dance(dir, tiles)
    tiles[dir]
end

arr = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]
new_tiles = tiles_array.each.with_index.to_h
# p sluggish(arr)
# p dominant(arr).last
# p clever(arr)
# p slow_dance("right-down", tiles_array)
# p fast_dance("right-down", new_tiles)