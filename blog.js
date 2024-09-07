document.addEventListener('DOMContentLoaded', function () {
    const postsContainer = document.getElementById('posts-container');
  
    async function loadPosts() {
      const response = await fetch('posts.json');
      const data = await response.json();
      return data.posts || [];
    }
  
    function renderPosts(posts) {
      postsContainer.innerHTML = '';
      posts.forEach(post => {
        const postItem = document.createElement('div');
        postItem.className = 'col-md-4 mb-4';
        postItem.innerHTML = `
          <div class="card h-100">
            <img src="${post.image}" class="card-img-top" alt="${post.title}">
            <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text">${post.content}</p>
            </div>
          </div>
        `;
        postsContainer.appendChild(postItem);
      });
    }
  
    loadPosts().then(renderPosts);
  });
  