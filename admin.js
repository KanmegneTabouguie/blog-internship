document.addEventListener('DOMContentLoaded', function () {
    const postForm = document.getElementById('create-post-form');
    const postsList = document.getElementById('posts-list');
  
    async function loadPosts() {
      const response = await fetch('posts.json');
      const data = await response.json();
      return data.posts || [];
    }
  
    async function savePosts(posts) {
      const response = await fetch('savePosts.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ posts })
      });
      const result = await response.json();
      return result;
    }
  
    function renderPosts(posts) {
      postsList.innerHTML = '';
      posts.forEach((post, index) => {
        const postItem = document.createElement('div');
        postItem.className = 'post-item mb-3';
        postItem.innerHTML = `
          <h5>${post.title}</h5>
          <p>${post.content}</p>
          <img src="${post.image}" alt="${post.title}" class="img-fluid mb-2"/>
          <button class="btn btn-secondary btn-sm mr-2" onclick="editPost(${index})">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deletePost(${index})">Delete</button>
        `;
        postsList.appendChild(postItem);
      });
    }
  
    postForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const title = document.getElementById('postTitle').value;
      const content = document.getElementById('postContent').value;
      const image = document.getElementById('postImage').value;
      
      const posts = await loadPosts();
      posts.push({ title, content, image });
      await savePosts(posts);
      renderPosts(posts);
      postForm.reset();
    });
  
    window.editPost = async function (index) {
      const posts = await loadPosts();
      const post = posts[index];
      document.getElementById('postTitle').value = post.title;
      document.getElementById('postContent').value = post.content;
      document.getElementById('postImage').value = post.image;
      posts.splice(index, 1);
      await savePosts(posts);
      renderPosts(posts);
    };
  
    window.deletePost = async function (index) {
      const posts = await loadPosts();
      posts.splice(index, 1);
      await savePosts(posts);
      renderPosts(posts);
    };
  
    loadPosts().then(renderPosts);
  });
  