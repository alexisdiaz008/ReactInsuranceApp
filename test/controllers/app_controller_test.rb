require 'test_helper'

class AppControllerTest < ActionDispatch::IntegrationTest
  test "should get landing_page" do
    get app_landing_page_url
    assert_response :success
  end

end
