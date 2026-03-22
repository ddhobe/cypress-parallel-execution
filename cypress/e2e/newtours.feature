# case 1 ---simple way
# Feature: newtours validation  

# Scenario: home page
# Given open newtours application
# When provide valid username and password
# Then click on submit button
# And verify title of the page


# # case 1 --- taking parameter as a string


#  Feature: newtours validation  

#  Scenario: home page
#  Given open newtours application
#  When provide valid "mercury" and "mercury"
#  Then click on submit button
#  And verify title should be "Login: Mercury Tours"

# # case 3 --- using datatable

 Feature: newtours validation  

 Scenario: home page
 Given open newtours application
 When I log in as following
     | username | password |
     | mercury  | mercury  |
     | mercury1 | mercury1 |

 Then click on submit button
 And verify title should be "Login: Mercury Tours"



# # Background

#  Feature: newtours validation 

#  Background:
#     Given open newtours application

#  Scenario: home page
 
#  When I log in as following
#      | username | password |
#      | mercury  | mercury  |
     
#  Then click on submit button
#  And verify title should be "Login: Mercury Tours"



# #  Hooks in cucumber

#  Feature: newtours validation 

#  Background:
#     Given open newtours application

#  Scenario: home page
 
#  When I log in as following
#      | username | password |
#      | mercury  | mercury  |
     
#  Then click on submit button
#  And verify title should be "Login: Mercury Tours"



#  Tags in cucumber

#  Feature: newtours validation 

#  Background:
#     Given open newtours application

# @smoke @sanity
#  Scenario: home page
 
#  When I log in as following
#      | username | password |
#      | mercury  | mercury  |
     
#  Then click on submit button
#  And verify title should be "Login: Mercury Tours"