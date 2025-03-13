# online-library-system
 
# Online Library System

## 📚 Overview
This is an Online Library System built using **React.js**, **Redux**, and **Google Books API**. Users can browse books by category, view book details, and add new books to the collection.

## 🚀 Features
- **Home Page**: Displays book categories and popular books.
- **Browse Books**: Fetches books from Google Books API and allows filtering by category and search.
- **Book Details**: Shows title, author, description, and rating of a selected book.
- **Add Book**: Users can add new books, temporarily storing them in Redux.
- **404 Page**: Handles invalid routes with a custom page.

## 🛠️ Technologies Used
- **React.js**
- **React Router** (for navigation)
- **Redux Toolkit** (for state management)
- **Tailwind CSS** (for styling)
- **Google Books API** (for fetching books)

## 📂 Project Structure
```
📦 online-library-system
├── 📂 src
│   ├── 📂 components
│   │   ├── Navbar.js
│   │   ├── BookCard.js
│   ├── 📂 pages
│   │   ├── Home.js
│   │   ├── BrowseBooks.js
│   │   ├── BookDetails.js
│   │   ├── AddBook.js
│   │   ├── NotFound.js
│   ├── 📂 redux
│   │   ├── bookSlice.js
│   │   ├── store.js
│   ├── App.js
│   ├── index.js
├── package.json
├── README.md
```

## ⚙️ Installation & Setup

1. **Clone the repository**
```sh
git clone https://github.com/quaziyadgar/online-library-system.git
cd online-library-system
```

2. **Install dependencies**
```sh
npm install
```

3. **Start the development server**
```sh
npm run dev
```

4. **Access the app**
Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🌐 API Configuration
This project uses the **Google Books API** to fetch books.
- Example API request:
```sh
https://www.googleapis.com/books/v1/volumes?q=subject:Fiction&maxResults=10
```
- You can modify API calls in `BrowseBooks.js`.

## 📜 Routes
| Path | Description |
|------|------------|
| `/` | Home Page |
| `/books` | Redirects to `/books/fiction` |
| `/books/:category` | Browse books by category |
| `/book/:id` | View book details |
| `/add-book` | Add a new book |
| `*` | 404 Page |

## 📌 Contributing
Feel free to submit issues and pull requests to improve the project!

## 📜 License
This project is **open-source** under the MIT License.

---
🔥 Happy Coding! 🚀

