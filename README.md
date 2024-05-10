<div align="center">
  <h1>JustLink</h1>
  <p><b>A link in bio platform</b></p>
</div>
<br />
<br />

<img width="1279" alt="JustLink dashboard" src="https://github.com/RakeshSangem/justlink/assets/107752425/31289ece-fc89-409f-ae95-b4becb1a95d5">

## Project Setup
### Pre-requisites:
- Node.js and npm installed.

### Clone the repo, install dependencies
```bash
git clone https://github.com/RakeshSangem/justlink.git
cd justlink
npm install
```

### Setup environment variables
Create a `.env` file and provide values for all the variables listed in `.env.example` file.

### Setup database
In the root of this project, run the following command to setup the database schema
```bash
npx prisma db push
```

### Build the project
```bash
npm run build
```

JustLink will start running at port `3000`.

### Explore the database
Prisma Studio makes it easy to explore and edit the data in the database. You can start it by running
```bash
npx prisma studio
```
Prisma Studio will be running at port `5555`.
