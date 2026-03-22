# # case 1 ---simple way
#  Feature: newtours validation  

# Scenario: home page
#  Given open newtours application
#  When provide valid username and password
#  Then click on submit button
#  And verify title of the page



# # case 1 --using parameter as a string
#  Feature: newtours validation  

# Scenario: home page
#  Given open newtours application
#  When provide valid 'mercury' and 'mercury'
#  Then click on submit button
#  And verify title should be "login: Mercury Tours"


# # case 3 --using datatable
#  Feature: newtours validation  

# Scenario: home page
#  Given open newtours application
#  When login as following
#       | username | password |
#       | mercury  | mercury  |
#  Then click on submit button
#  And verify logo should be visible


# case 3 --using 'Background' keyword
 Feature: newtours validation 

Background:
 Given open newtours application
 
@smoke
Scenario: home page
 When login as following 
      | username | password |
      | mercury  | mercury  |
 Then click on submit button
 And verify logo should be visible

# @regression
#  Scenario: home page
#  When login as following 
#       | username | password |
#       | mercuryyy  | mercuryyy  |
#  Then click on submit button
#  And verify logo should be visible