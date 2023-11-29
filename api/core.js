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
const displayData = async () => {
    const data = await getLocalApi();
    console.log(data);
    data.forEach(data => {
        blog.innerHTML += `
        <div class="card mb-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${data.title}</h5>
                <p class="card-text">${data.body}</p>
                <p class="card-text"><small class="text-muted">${data.author}</small></p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `
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


displayData();

// event trigger for submit
document.getElementById("submit").addEventListener("click", submitData);