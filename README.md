# Express API Building: Ensemble Edition

Today during our meeting we shall "ensemble" code a small project together. "Ensemble programming" (also known as "mob programming") is a strategy for writing code with multiple contributors -- like pair programming, but you have more than two people.

You may not be able to finish everything you envision in the time allotted, so **prioritize** and decide together where to start and what to do later.

## 🏆 The challenge

Finish at least one endpoint during our meeting today.

## The project

This project is to build a new Express application that will have at least one endpoint:

```
GET /api/fortune
```

- returns a random fortune from the `fortunes.json` file (NOTE: you can copy and paste these values into your code rather than reading from the file)
- the response should be formatted as JSON. It might look something like `{ "fortune": "You will be hungry again in one hour." }`
- the response should have a status code of 200

You'll need to consult documentation, and code examples from class or your own code. You must run your code frequently to check your progress. You might find the [REST Client extension for VS Codium](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) handy for this.

## Additional challenges

If you finish the endpoint, you can try to add more endpoints, or you can try to add some of these features:

- Create more fortune data that has fortunes in different categories. Add a query parameter to the endpoint so that you can get a fortune from a specific category. For example, `GET /api/fortune?category=love` would return a fortune from the "love" category.
- Add an endpoint that returns a random emoji: `GET /api/emoji/random`. You can use the [node-emoji](https://www.npmjs.com/package/node-emoji) package. 
- Add an endpoint that returns a specific emoji: `GET /api/emoji/:name`. For example, `GET /api/emoji/heart` would return the heart emoji. You can use the [node-emoji](https://www.npmjs.com/package/node-emoji) package. If an emoji is requested that does not exist, return a 404 status code and a message like "Emoji not found".

## Ensemble programming rules

1. Each person must verbally contribute to the code being produced. This means that each person must actively communicate, and that the group must make a conscious effort to balance the contributions of those who are more and less vocal.
2. As always, our discussion will be guided by our respect for each other and our mutual agreement to protect our safe learning space.
3. Cameras must stay on throughout the session so we can interact with each other more effectively.
4. Each person has an assigned role. The roles will shift every 10 minutes. Roles and rules for switching are described below.
5. Only the driver changes code during a shift. No one else is typing code at the same time.
6. Do not copy and paste code into the project. The driver must type all code.
7. No AI code generation. You can use AI to answer questions, but not to generate code.
8. Take at least one break during the session. The moderator should suggest a break at least once.

### Switch roles in shifts

We'll shift roles at 10-minute intervals. Each person will have a chance to occupy every role. When we reach the last shift, we will start over and repeat the cycle.

If anyone needs to take a break or step away, their role can be filled by one of the Individual Contributors for that round.

At the beginning of each shift, pull down all the code from the repo. The driver should share their screen (or live share in vs code).

🔴 **At the end of each shift**, the driver should add, commit, and push all the code that has been written.

🟢 **At the beginning of each shift**, the new driver should pull down the code that has been pushed (`git pull origin main`).

Some things to keep in mind:

- **It's 100% ok to be wrong about something.**
- **It's 100% ok not to know something.**
- **Write pseudocode to lay the groundwork as you begin implementing something.**
- **Try things even if you are not sure they are right.**
- **Move swiftly and be decisive even if you are uncertain.**
- **Use the node console to try things out if you aren't sure of syntax.**
- **Use `console.log()` liberally to check your assumptions**
- **Just jump in and throw out some ideas!**

### The roles

#### 🚘 **The Driver**

The Driver shares their screen and does the typing. In this role, you are mainly a conduit for the ideas of the group, implementing what the Navigator asks you to. The code the driver writes is suggested by the rest of the team, not independently created.

#### 🗺️ **The Navigator**

The Navigator leads the way, making decisions based on the input of the group about what to do and giving direction about what to type to the Driver. They may ask the Scout and Individual Contributors for help as needed.

#### ⚖️ **The Moderator**

The Moderator keeps time so that roles can shift on schedule. ⏲️

The job of the Moderator is also to keep everyone focused and on task and **be sure all voices are heard**. The Moderator should make sure that everyone is participating and that no one is dominating the conversation. One way to do this is to invite someone who has not spoken to share their thoughts.

The Moderator asks pertinent questions to generate ideas or unblock progress, asks the Scout to look things up, and in general keeps things moving forward in cooperation with the Navigator. This person may also suggest breaks as needed, making sure that a break is taken at least once.

#### 🔭 **The Scout**

The Scout is responsible for looking up syntax, error messages, documentation, and examples and may be asked to do that by anyone on the team. They may also make suggestions for things to try if they find relevant examples online. Any online source is valid; you may use AI tools to answer questions or provide examples, but _not to generate code_.

👩🏽‍💻 👨🏻‍💻 👨🏿‍💻 👩🏼‍💻 **The Individual Contributors**

These developers make suggestions to the Navigator, the Driver, and the Scout, and ask questions or propose ideas as needed. The Navigator and Moderator may ask them directly for their input.

---

## The Shifts & Roles

### 5-person team

#### shift 1

- driver: Betty
- navigator: Joanna
- moderator: Austin
- scout: Megan
- contributor: Paola

#### shift 2

- driver: Joanna
- navigator: Austin
- moderator: Megan
- scout: Paola
- contributors: Betty

#### shift 3

- driver: Austin
- navigator: Megan
- moderator: Paola
- scout: Betty
- contributors: Joanna

#### shift 4

- driver: Megan
- navigator: Paola
- moderator: Betty
- scout: Joanna
- contributors: Austin

#### shift 5

- driver: Paola
- navigator: Betty
- moderator: Joanna
- scout: Austin
- contributors: Megan

#### shift 6 -> start over at shift 1
