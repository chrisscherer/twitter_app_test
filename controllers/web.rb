get '/' do

  erb :index
end

post '/' do
  text = params[:tweet]
  $client.update(text)
end

