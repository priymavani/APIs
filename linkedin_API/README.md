# LinkedIn API Project

Welcome to the** LinkedIn API project**. API built with Node.js and MongoDB, offering comprehensive functionality for managing users, connections, posts, comments, and messaging within a LinkedIn-like platform. This **API enables CRUD operations **on various resources such as users, posts, and messages.

---

## 🌟 Features

### User Management
- Create, fetch, update, and delete user profiles.
- Manage professional details such as work experience, education, and skills.

### Connection Management
- Send, accept, or reject connection requests.
- Fetch a user's connections and pending requests.

### Post Management
- Create, update, and delete posts.
- Like and comment on posts.

### Comment Management
- Add, update, and delete comments on posts.
- Like comments.

### Messaging System
- Send, fetch, and delete messages between users.

---

## 📑 API Documentation

For detailed API documentation and example requests, please refer to:

- Postman API Documentation: [Postman Documentation]([https://www.postman.com/your-collection-link](https://documenter.getpostman.com/view/39217138/2sAYQUpuAq))
- Google Drive Link for Project Overview: [Google Drive Link](https://drive.google.com/your-file-link)

---

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **API Documentation**: Postman

---

## 🚀 Overview of API Routes


### 👤 User Routes
<details>
<summary>Routes </summary>

- **GET /users**: Fetch all users.
- **GET /users/:userId**: Fetch a specific user by ID.
- **POST /users**: Create a new user.
- **PATCH /users/:userId**: Update user profile (e.g., add skills, update job details).
- **DELETE /users/:userId**: Delete a user profile.

</details>

### ➕ Connection Routes

<details>
<summary>Routes</summary>

- **GET /connections/:userId**: Fetch all connections for a user.
- **POST /connections**: Send a connection request.
- **PATCH /connections/:requestId**: Accept or reject a connection request.
- **DELETE /connections/:connectionId**: Remove a connection.

</details>

### 📤 Post Routes

<details>
<summary> Routes</summary>

- **GET /posts**: Fetch all posts.
- **GET /posts/:postId**: Fetch a specific post by ID.
- **POST /posts**: Create a new post.
- **PATCH /posts/:postId**: Update a post.
- **DELETE /posts/:postId**: Delete a post.
- **PATCH /posts/:postId/likes**: Increment likes for a post.

</details>

### 💬 Comment Routes

<details>
<summary>Routes</summary>

- **GET /posts/:postId/comments**: Fetch all comments for a post.
- **POST /comments**: Add a comment to a post.
- **PATCH /comments/:commentId**: Update a comment.
- **PATCH /comments/:commentId/likes**: Increment likes for a comment.
- **DELETE /comments/:commentId**: Delete a comment.

</details>

### 🗪 Messaging Routes

<details>
<summary>Routes</summary>

- **GET /messages/:userId**: Fetch all messages for a user.
- **POST /messages**: Send a message to another user.
- **DELETE /messages/:messageId**: Delete a message.

</details>

## Example of User Creation

```json
{
  "userId": "u101",
  "name": "John Doe",
  "email": "johndoe@example.com",
  "headline": "Software Engineer at TechCorp",
  "location": "San Francisco, CA",
  "workExperience": [
    {
      "company": "TechCorp",
      "role": "Software Engineer",
      "startDate": "2020-06-01",
      "endDate": null
    }
  ],
  "education": [
    {
      "institution": "Stanford University",
      "degree": "B.S. in Computer Science",
      "graduationYear": 2020
    }
  ],
  "skills": ["Node.js", "MongoDB", "Express.js", "React"]
}
```

---

## 👨‍💻 Code Structure

1. **`app.js`**: Entry point to the application, responsible for setting up the server and middleware.
2. **`models/`**: Contains MongoDB schema definitions for users, posts, comments, connections, and messages.
3. **`routes/`**: Contains route files for handling different API endpoints related to users, connections, posts, comments, and messages.

---

## 🔍 Analysis of the Documentation

### Strengths
- Comprehensive coverage of key features and routes.
- Provides clear and concise examples for API requests.
- Follows REST principles for route naming and actions.
- Includes external links for additional resources.

---

Feel free to contribute or reach out for collaboration! 🚀
