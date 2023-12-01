// get all core functions and methods
const apiUrl = " http://localhost:3000/posts";
const blog = document.getElementById("blog");


// Get all posts
const getLocalApi = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
}

// Display all posts
// Display all posts
// Display all posts sorted by id
const displayData = async () => {
    const data = await getLocalApi();
    const sortedData = data.sort((a, b) => b.id - a.id); // Sort by id
    blog.innerHTML = ""; // Clear existing content

    sortedData.forEach(post => {
        const card = document.createElement("div");
        card.className = "card mb-2";
        card.style = "width: 18rem;";

        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${post.title} ${post.id}</h5>
                <p class="card-text">${post.body}</p>
                <p class="card-text"><small class="text-muted">${post.author}</small></p>
                <button class="btn btn-primary" data-id="${post.id}" onclick="editPost(${post.id})">Edit</button>
                <button class="btn btn-danger" data-id="${post.id}" onclick="deletePost(${post.id})">Delete</button>
            </div>
        `;

        blog.appendChild(card);
    });
}



// Post data to server
const postLocalApi = async (postData) => {
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    });
    const data = await response.json();
    return data;
}

// Get data from form
const submitData = async () => {
    const title = document.getElementById("title").value;
    const body = quill.getText();
    const author = document.getElementById("author").value;

    if (title === "" || body === "" || author === "") {
        alert("Please fill all the fields");
        return;
    }
    
    const postData = {
        title,
        body,
        author
    }

    const response = await postLocalApi(postData);

    // clear the form
    document.getElementById("title").value = "";
    document.getElementById("editor").value = "";
    document.getElementById("author").value = "";

    displayData();
}

// Edit post
const editPost = async (postId) => {
    const newTitle = prompt("Enter the new title:");
    if (newTitle !== null) {
        const response = await fetch(`${apiUrl}/${postId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: newTitle })
        });
        const data = await response.json();
        displayData();
    }
}

// Delete post
const deletePost = async (postId) => {
    const confirmDelete = confirm("Are you sure you want to delete this post?");
    if (confirmDelete) {
        const response = await fetch(`${apiUrl}/${postId}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        displayData();
    }
}


displayData();

// event trigger for submit
document.getElementById("submit").addEventListener("click", submitData);