# TripSplit

## Description deliverable

### Elevator Pitch

My project will be a group budgeting website. Ever gone on a trip with friends, and had to deal with the hassle of splitting money for the trip evenly? Look no more. In my website, you will be able to create a password for your group, and log in with your own account so you can come back later. Insert all the expenses you will come across, and it will evenly split all the expenses between your group. One person only there for part of the trip? No problem. Individuals can check and uncheck expenses that they didn't participate in/use, and it will remove that from their total. You've paid already for an expense? Easy peasy, there's an option to check that so you can get reimbursed. In the end you will be provided a quick, calculated sum of what you owe your friends or what they owe you. The end goal is to partner with the payment services venmo/zelle/paypal to make paying each other even easier.

### Design

This is my initial design.

![IMG-3003](https://user-images.githubusercontent.com/45598489/236391561-0962ee33-2fe5-435e-8567-d93094461b95.jpg)

### Key Features

- Secure login over HTTPS
- Ability to update your expenses list in real time
- A group's list and settings are persistently stored
- Ability to see both condensed or expanded cost totals
- Visual display that is easy on the eyes
- Display of all your group members and what checkboxes they've selected
- Easy and intuitive to use, along with an About page featuring a FAQ


### Technologies

- **HTML** - Four HTML pages. A starting home page, a login page, an account creation page, and the group budgeting page.
- **CSS** - Application styling that makes TripSplit easy to use on multiple screen sizes, and a color scheme of pastel blue-green variants and gradients.
- **JavaScript** - Provides login, account creation, adding expenses, expenses display, indicating that you or a group member paid or is not going to pay for something.
- **Service** - Backend service with endpoints for:
  - login
  - retrieving expenses
  - retrieving total cost/reimbursement per user
- **DB** - Stores groups, users, expenses, and checkbox answers in database.
- **Login** - Register and login users. Credentials securely stored in database. Can't participate in a group's budget plan unless logged in.
- **WebSocket** - As each user adds expenses and checks boxes, their results are automatically broadcast to the whole group.
- **React** - Application ported to use the React web framework.

### HTML deliverable

- **HTML pages** - Five HTML pages that represent creating an account, logging in, creating/joining a group, the actual budgeting page, and an about page.
- **Links** - The login page automatically links to the create/join group page and the account creation page. The account creation page links to the create/join group page and the login page. The create/join group page links to the budgeting page and the login page. The budgeting page links to the login page and the create/join group page. The about page links to the login page. All pages also link to this GitHub repository and the about page.
- **Text** - The expenses, costs, and users are represented with text.
- **Images** - I included an image of myself in the about page.
- **Login** - Input box and submit button for login on both the login and create account pages.
- **Database** - The expenses, costs, and user checkbox selections represent data pulled from the database.
- **Websocket** - When you add another expense and/or check a paid/not paying box, it shows up for your group in real time.

Here is a link to my notes: https://github.com/chloergu/startup/blob/main/notes.md 
