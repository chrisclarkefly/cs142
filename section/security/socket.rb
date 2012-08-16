# Author: Anant Bhardwaj
# Fetching Data using Sockets
# 
# Created for CS142 Section
#


require 'socket'


socket = TCPSocket.open("google.com", 80)
get_req= "GET /"+"\r\n"

puts "*********** GET REQUEST BEGIN ************"
print get_req
puts "*********** GET REQUEST END ************"

socket.puts get_req

puts "*********** GET RESPONSE BEGIN ************"
while(line=socket.gets) do
print line
end
puts "*********** GET RESPONSE END ************"
