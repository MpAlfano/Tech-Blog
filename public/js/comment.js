//add a comment
const addComment = async (event) => {
  event.preventDefault();

  const description = document.querySelector("#comment-desc").value.trim();
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
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
