#json.extract! @guest, :id, :name, :age, :favorite_color, :gifts
#json.guest do
  json.partial! 'guest', guest: @guest
  json.gifts @guest.gifts do |gift|
    json.title gift.title
    json.description gift.description
  #end
end
