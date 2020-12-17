class Person < ApplicationRecord
  belongs_to(:house, {
    primary_key: :id, #house id
    foreign_key: :id,
    class_name: :House
  })
end