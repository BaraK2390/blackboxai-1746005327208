// Mock video data
const videos = [
  {
    id: '1',
    title: 'Sample Video 1',
    channel: 'Channel One',
    views: '1.2M',
    uploaded: '2 days ago',
    thumbnail: 'https://i.ytimg.com/vi/ysz5S6PUM-U/hqdefault.jpg',
  },
  {
    id: '2',
    title: 'Sample Video 2',
    channel: 'Channel Two',
    views: '500K',
    uploaded: '1 week ago',
    thumbnail: 'https://i.ytimg.com/vi/ScMzIvxBSi4/hqdefault.jpg',
  },
  {
    id: '3',
    title: 'Sample Video 3',
    channel: 'Channel Three',
    views: '300K',
    uploaded: '3 weeks ago',
    thumbnail: 'https://i.ytimg.com/vi/tAGnKpE4NCI/hqdefault.jpg',
  },
  {
    id: '4',
    title: 'Sample Video 4',
    channel: 'Channel Four',
    views: '2M',
    uploaded: '1 month ago',
    thumbnail: 'https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg',
  },
];

// Function to create video card HTML from template
function createVideoCard(video) {
  const template = `
    <div class="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300">
      <a href="video.html?id=${video.id}">
        <img src="${video.thumbnail}" alt="${video.title}" class="w-full h-48 object-cover" />
        <div class="p-3">
          <h3 class="text-sm font-semibold text-gray-900 mb-1 truncate">${video.title}</h3>
          <p class="text-xs text-gray-600">${video.channel}</p>
          <p class="text-xs text-gray-600">${video.views} views • ${video.uploaded}</p>
        </div>
      </a>
    </div>
  `;
  return template;
}

// Render videos on homepage
function renderVideos() {
  const videoGrid = document.getElementById('video-grid');
  videoGrid.innerHTML = '';
  videos.forEach((video) => {
    videoGrid.innerHTML += createVideoCard(video);
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderVideos();

  // Load header and sidebar components
  fetch('components/header.html')
    .then((res) => res.text())
    .then((html) => {
      document.getElementById('header').innerHTML = html;
    });

  fetch('components/sidebar.html')
    .then((res) => res.text())
    .then((html) => {
      document.getElementById('sidebar').innerHTML = html;
    });
});
