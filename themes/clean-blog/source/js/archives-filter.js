(function () {
    if (!location.pathname.startsWith('/archives')) {
        function jumpToArchives(key, value) {
            location.href = '/archives/?' + (value ? `${key}=${value}` : '');
        }
    
        window.jumpToArchives = jumpToArchives;
        return;
    };

    const params = new URLSearchParams(location.search);
    const tag = params.get('tag');
    const category = params.get('category');

    // Display posts based on filters
    document.querySelectorAll('.post-preview').forEach(post => {
        const tags = post.dataset.tags?.split(',') || [];
        const categories = post.dataset.categories?.split(',') || [];

        let visible = true;
        if (tag && !tags.includes(tag)) visible = false;
        if (category && !categories.includes(category)) visible = false;

        post.style.display = visible ? '' : 'none';
    });

    // Highlight active filters
    if (tag) {
        const tagElement = document.querySelector('.archive-tags').querySelector(`[data-tag="${tag}"]`);
        if (tagElement) tagElement.classList.add('tag-active');
    } else {
        const allTagsElement = document.querySelector('.archive-tags').querySelector(`[data-tag="all"]`);
        if (allTagsElement) allTagsElement.classList.add('tag-active');
    }

    if (category) {
        const categoryElement = document.querySelector('.archive-categories').querySelector(`[data-category="${category}"]`);
        if (categoryElement) categoryElement.classList.add('category-active');
    } else {
        const allCategoriesElement = document.querySelector('.archive-categories').querySelector(`[data-category="all"]`);
        if (allCategoriesElement) allCategoriesElement.classList.add('category-active');
    }


    function updateQuery(key, value) {
        const params = new URLSearchParams(location.search);
        value ? params.set(key, value) : params.delete(key);
        location.href = location.pathname + '?' + params.toString();
    }

    window.ArchivesFilter = { updateQuery };
})();