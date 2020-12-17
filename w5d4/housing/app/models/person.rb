class Person < ApplicationRecord
  belongs_to(:house, {
    primary_key: :id, #house id
    foreign_key: :address,
    class_name: :House
  })
end