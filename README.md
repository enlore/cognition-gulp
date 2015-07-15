# eVic Forms Prototype

## Design Notes

### Needful Things

Design the stupidest possible version of a couple of key aspects of the system.

1. Data collection forms that are sent to vendors during the "kickoff" process
2. [VIC Todo List widget thing](#vic-workflow-todo) that is a dumb, maybe multi media capable todo list
that models a high level view of the VIC and associated process that engineers will
use to guide their workflow.

## Forms

* [Cloverleaf Vendor Kickoff Info](#cloverleaf-vendor-kickoff-info)
* [Product Data Sheet](#product-data-sheet)
* [Interface Testing](#interface-testing-per-interface) (per interface)
* [Deployment Considerations](#deployment-considerations)
* [Vendor Ready Checklist](#vendor-ready-checklist)
* [New Contact](#new-contact) (for addition to project team)

### Cloverleaf Vendor Kickoff Info

This form is used to capture info used to create a Cloverleaf product mnemonic.

* Cloverleaf Site Name
* Facility Name
* Address
* City
* State
* Zip
* Company
* Division
* COID
* Unit #
* Meditech COCxx
* Meditech Network
* Facility HDIS
  * Phone Number
  * Email

### Product Data Sheet

Details regarding the product being certified.  Note the redundant data emerging.

Also, there's a key relating info about who is supposed to enter what:

* __Blue__: Obtain from Vendor, entered by BA/PM, or Dev if no other
* __Green__: Entered by BA or PM, or Dev if neither
* __Yellow__: Entered by Dev
* __Gray__: Enetered by IED Admin


* Vendor name
* System Name
* URL for product info
* Product Type
* 24/7 Support Number
* Development Contact
  * Phone
  * Email
* Transactions
* Support Group
* Line of Business
* Solution Leader
* Product Owner
* PD Owner
* Server Location
* Protocol
* Data Type
* Connectivity
* Translation
* CL Mnemonic
* Publish to Atlas
* Status
* HCA Available

### Interface Testing

This is an opportunity to capture the testing requirements for a given inteface.

#### Test Environment

* Meditech Version
* Meditech O/S
* Environment
* Database
* Facility
* UNIT

#### Test Setup

This is just a set of key/vals with comments.  It appears to be used as
a store of mock data, important context, staging data, whatever.

* Dictionary/Parament
* Value/Setting
* Comment


#### Assumptions/Prerequisites

Arbitrary text fields can be used to capture line items.


#### Exceptions/Constraints

Arbitrary text fields can be used to capture line items.

#### Testing Coverage

Another key/val with comments, this is a used to collect test results.

* Description
* Scenario Status [pass, fail, n/a]
* Comments

#### Known Issues / Risks

Arbitrary text fields can be used to capture line items.

#### Known Workarounds/Notes

Arbitrary text fields can be used to capture line items.


### Deployment Considerations


### Vendor Ready Checklist

These have three apparent states: true, false, "communicated".

* __HCA does require Acknowledgement__ Messages to be sent to response to __every__ outbound HL7, no NACKS
* Specification call
* All sepecification issues resolved (prior to testing date)
* Vendor tests that their own code is parsing correctly
* Vendor dedicated resource during testing
* Vendor able to return screen prints
* Vendor has user ready system
* Vendor connected prior to testing
* Vendor able to correct bugs/issues during testing
* Able to be on schedule for testing

Also included at the bottom of the form is a list of "Vendor Needs - of facility masterfiles/dictionaries".


### New Contact

Simple enough: collect contact info for participants. Much of this will be aquired during Kickoff steps.

* Area
* Name
* Title/Role
* Phone Number
* Email
* Title/Role
* Site/Team/Clique


## VIC Workflow Todo

Bit early for this yet.  I'm more interested in just creating a palette of
available steps/stages/workflow card ideas.
