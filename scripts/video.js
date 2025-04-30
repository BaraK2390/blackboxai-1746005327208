// Mock video data (same as main.js for simplicity)
const videos = [
  {
    id: '1',
    title: 'Sample Video 1',
    channel: 'Channel One',
    views: '1.2M',
    uploaded: '2 days ago',
    videoUrl: 'https://www.youtube.com/embed/ysz5S6PUM-U',
  },
  {
    id: '2',
    title: 'Sample Video 2',
    channel: 'Channel Two',
    views: '500K',
    uploaded: '1 week ago',
    videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4',
  },
  {
    id: '3',
    title: 'Sample Video 3',
    channel: 'Channel Three',
    views: '300K',
    uploaded: '3 weeks ago',
    videoUrl: 'https://www.youtube.com/embed/tAGnKpE4NCI',
  },
  {
    id: '4',
    title: 'Sample Video 4',
    channel: 'Channel Four',
    views: '2M',
    uploaded: '1 month ago',
    videoUrl: 'https://www.youtube.com/embed/aqz-KE-bpKQ',
  },
];

// Mock comments data
const comments = [
  {
    id: 'c1',
    user: 'User One',
    avatar: 'https://i.pravatar.cc/40?img=1',
    text: 'Great video! Thanks for sharing.',
  },
  {
    id: 'c2',
    user: 'User Two',
    avatar: 'https://i.pravatar.cc/40?img=2',
    text: 'Very informative content.',
  },
];

// Get video ID from URL query string
function getVideoId() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

// Render video player
function renderVideoPlayer(video) {
  const videoPlayer = document.getElementById('video-player');
  videoPlayer.innerHTML = '<iframe width="100%" height="400" src="' + video.videoUrl + '" title="' + video.title + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

// Render video details
function renderVideoDetails(video) {
  document.getElementById('video-title').textContent = video.title;
  document.getElementById('video-channel').textContent = "Channel: " + video.channel;
}

// Render comments
function renderComments() {
  const commentsList = document.getElementById('comments-list');
  commentsList.innerHTML = '';
  comments.forEach(function(comment) {
    const commentEl = document.createElement('div');
    commentEl.className = 'flex space-x-3';
    commentEl.innerHTML = '<img src="' + comment.avatar + '" alt="' + comment.user + '" class="w-10 h-10 rounded-full" /><div><p class="font-semibold text-gray-900">' + comment.user + '</p><p class="text-gray-700">' + comment.text + '</p></div>';
    commentsList.appendChild(commentEl);
  });
}

// Handle new comment submission
function handleCommentForm() {
  const form = document.getElementById('comment-form');
  const input = document.getElementById('comment-input');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value.trim() === '') return;
    comments.push({
      id: 'c' + (comments.length + 1),
      user: 'You',
      avatar: 'https://i.pravatar.cc/40?img=3',
      text: input.value.trim(),
    });
    input.value = '';
    renderComments();
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  // Load header and sidebar components
  fetch('components/header.html')
    .then(function(res) { return res.text(); })
    .then(function(html) {
      document.getElementById('header').innerHTML = html;
    });

  fetch('components/sidebar.html')
    .then(function(res) { return res.text(); })
    .then(function(html) {
      document.getElementById('sidebar').innerHTML = html;
    });

  // Load comments component
  fetch('components/comments.html')
    .then(function(res) { return res.text(); })
    .then(function(html) {
      document.getElementById('comments-section').innerHTML = html;
      renderComments();
      handleCommentForm();
    });

  const videoId = getVideoId();
  const video = videos.find(function(v) { return v.id === videoId; }) || videos[0];
  renderVideoPlayer(video);
  renderVideoDetails(video);
});
