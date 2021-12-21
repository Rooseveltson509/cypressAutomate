@translation
Feature: As a user I want connect herokuapp todesbugs website

        @creationDeBugs
        Scenario Outline: As a user i want to create debug to herokuapp
            Given i am on the home page
             When I am login with "<login>" and "<password>"
             Then i should be able to connect
             When I click to open the vertical menu
              And I click to the bug link
              And I click to the create bug button
              And I choose to report a bug
              And I choose a Dekstop Device with "<websiteName>" and "<websiteUrl>" and "<websiteDescription>"
             When I create bugs with "<createCompany>"
             Then I submit the informations
        Examples:
                  | login   | password | websiteName    | websiteUrl         | websiteDescription          | createCompany |
                  | tester2 | tester2  | herokuapp bugs | herokuapp-bugs.com | probleme d'authentification | rooseAgency   |


        @register
        Scenario Outline: As a user i want to create account on herokuapp debugs
            Given I open the register page
             When I register with "<name>" and "<firstname>" and "<identifier>" and "<phoneNumber>"
              And I write my "<email>" and "<password>" and "<confirmPassword>"
              And I accept the CPU andvalidate the recapcha
             Then I submit the informations
        Examples:
                  | name   | firstname   | identifier | phoneNumber  | email                   | password  | confirmPassword |
                  | tester | testCypress | roose0     | 010000000000 | testCypress@yopmail.com | Roose0000 | Roose0000       |