class AppController < ApplicationController

  def landing_page
  	@app_props = { name: "Lex" }
  end
end
