document.addEventListener('DOMContentLoaded', () => {
    setupProjectFilters();
    setupBlogSearch();
    setupWikiSearch();
    setupMobileMenu();
});

// --- Mobile Menu ---
function setupMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-links');
    const icon = toggle ? toggle.querySelector('i') : null;

    if (!toggle || !nav || !icon) return;

    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        nav.classList.toggle('active');

        if (nav.classList.contains('active')) {
            icon.classList.remove('ph-list');
            icon.classList.add('ph-x');
        } else {
            icon.classList.remove('ph-x');
            icon.classList.add('ph-list');
        }
    });

    // Close menu on link click
    nav.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            nav.classList.remove('active');
            icon.classList.remove('ph-x');
            icon.classList.add('ph-list');
        }
    });
}

// --- Projects Filtering ---
function setupProjectFilters() {
    const searchInput = document.getElementById('project-search');
    const filterButtons = document.querySelectorAll('.filter-tag');
    const cards = document.querySelectorAll('.project-card');
    const loadMoreBtn = document.getElementById('load-more-projects');

    if (!searchInput && !filterButtons.length) return;

    let activeTag = 'all';
    let searchQuery = '';

    // Search Input
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase();
            filterProjects();
        });
    }

    // Tag Buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add to clicked
            btn.classList.add('active');
            // Update state
            activeTag = btn.dataset.filter;
            filterProjects();
        });
    });

    function filterProjects() {
        let visibleCount = 0;

        cards.forEach(card => {
            const title = card.dataset.title || '';
            const tags = (card.dataset.tags || '').split(',');

            const matchesSearch = title.includes(searchQuery);
            const matchesTag = activeTag === 'all' || tags.includes(activeTag);

            if (matchesSearch && matchesTag) {
                card.style.display = 'block'; // Or 'flex' if grid requires it, but block usually fine in grid
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // OPTIONAL: Handle "Load More" visibility if we were doing pagination. 
        // With Jekyll static list, we usually show all or use JS libraries for pagination.
        // For now, hiding load more if it exists
        if (loadMoreBtn) loadMoreBtn.style.display = 'none';
    }
}

// --- Blog Search ---
function setupBlogSearch() {
    const searchInput = document.getElementById('blog-search');
    const items = document.querySelectorAll('.blog-item');

    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();

        items.forEach(item => {
            const title = item.dataset.title || '';
            if (title.includes(query)) {
                item.style.display = 'flex'; // blog-item is flex usually
            } else {
                item.style.display = 'none';
            }
        });
    });
}

// --- Wiki Search ---
function setupWikiSearch() {
    const searchInput = document.getElementById('wiki-search');
    const groups = document.querySelectorAll('.wiki-category-group');

    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();

        groups.forEach(group => {
            const cards = group.querySelectorAll('.wiki-card');
            let hasVisibleCard = false;

            cards.forEach(card => {
                const title = card.querySelector('.wiki-card-title').textContent.toLowerCase();
                const desc = card.querySelector('.wiki-card-desc').textContent.toLowerCase();

                if (title.includes(query) || desc.includes(query)) {
                    card.style.display = 'block';
                    hasVisibleCard = true;
                } else {
                    card.style.display = 'none';
                }
            });

            // Hide group if no cards match
            group.style.display = hasVisibleCard ? 'block' : 'none';
        });
    });
}
