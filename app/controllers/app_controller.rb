class AppController < ApplicationController
	skip_before_action :verify_authenticity_token
  def landing_page
  	@app_props = { name: "Lex" }
  end

  def app_create
  	p "~~~~~This is where the applicant create would happen!"
  end
end
