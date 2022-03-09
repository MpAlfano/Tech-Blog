//add a comment
const addComment = async (event) => {
  event.preventDefault();

  console.log("working?");
  const description = document.querySelector("#comment-body").value.trim();
  const post_id = window.location.toString().split("/").length - 1 - 1;

  console.log(window.location.pathname.split("/"));
  console.log(window.location.toString().split("/").length - 1 - 1);
  console.log(post_id);

  if (comment) {
    const response = await fetch("/api/comments", {
      method: "Post",
      body: JSON.stringify({ post_id, description }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert("Comment can't be blank");
    }
  }
};

document.querySelector("#comment").addEventListener("click", addComment);
