const postWrapper = document.querySelector(".post-wrapper");
const loading = document.querySelector(".loader");
const filter = document.getElementById("filter");

let limit = 10;
let page = 1;

// Fetch posts from API
async function getPosts() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );
  const data = await res.json();

  return data;
}

// Show posts in DOM
async function showPosts() {
  const posts = await getPosts();
  posts.forEach((post) => {
    const postEl = document.createElement("div");
    postEl.classList.add("post");
    postEl.innerHTML = `
    <div class="number">${post.id}</div>
    <div class="post-info">
      <h2 class="post-title">${post.title}</h2>
      <p class="post-content">${post.body}</p>
    </div>
    `;
    postWrapper.appendChild(postEl);
  });
}

// Show loader & fetch more posts

function showLoading() {
  loading.classList.add("show");

  setTimeout(() => {
    loading.classList.remove("show");
    setTimeout(() => {
      page++;
      showPosts();
    }, 300);
  }, 1000);
}

// Filter posts by input
function filterPosts(e) {
  const term = e.target.value.toUpperCase();
  const posts = document.querySelectorAll(".post");

  posts.forEach((post) => {
    const title = post.querySelector(".post-title").innerText.toUpperCase();
    const content = post.querySelector(".post-content").innerText.toUpperCase();

    if (title.indexOf(term) > -1 || content.indexOf(term) > -1) {
      post.style.display = "flex";
    } else {
      post.style.display = "none";
    }
  });
}

// Event lsteners
window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  scrollTop + clientHeight >= scrollHeight - 5 ? showLoading() : null;
});

filter.addEventListener("input", filterPosts);

// Show initial posts
showPosts();
