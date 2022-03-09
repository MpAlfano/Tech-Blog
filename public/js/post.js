// add a blog post
const newFormHandler = async (event) => {
  event.preventDefault();
  const title = document.querySelector("#post-title").value.trim();
  const description = document.querySelector("#post-desc").value.trim();

  if (title && description) {
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create post");
    }
  }
};

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
