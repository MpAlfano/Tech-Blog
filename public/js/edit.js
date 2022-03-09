//edit blog post
const editPost = async (event) => {
  event.preventDefault();
  const id = event.target.getAttribute("data-id");

  const title = document.querySelector("#title").value;

  const description = document.querySelector("#description").value.trim();

  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({ title, description }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to edit post");
  }
};

//delete blog post
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete post");
    }
  }
};

document.querySelector("#update").addEventListener("click", editPost);

document.querySelector("#delete").addEventListener("click", delButtonHandler);
