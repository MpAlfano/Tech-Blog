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

document.querySelector("#update").addEventListener("click", editPost);
