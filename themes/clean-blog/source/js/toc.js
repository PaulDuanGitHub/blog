(function () {
    const tocLinks = document.querySelectorAll('.post-sidebar .post-toc a');
    if (!tocLinks.length) return;
  
    const headings = Array.from(tocLinks).map(link =>
      document.getElementById(decodeURIComponent(link.hash.slice(1)))
    ).filter(Boolean);
  
    const visibleHeadings = new Map();

    function scrollToView(target, container, offset = 0) {
      if (!target || !container) return;
    
      const targetRect = target.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      if (targetRect.top >= containerRect.top &&
          targetRect.bottom <= containerRect.bottom) {
        return;
      }
    
      const scrollTop =
        container.scrollTop +
        (targetRect.top - containerRect.top) -
        offset;
    
      container.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
      });
    }
  
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            visibleHeadings.set(entry.target.id, entry);
          } else {
            visibleHeadings.delete(entry.target.id);
          }
        });
  
        if (!visibleHeadings.size) return;
  
        tocLinks.forEach(link => link.classList.remove('active'));

        visibleHeadings.forEach(entry => {
            console.log(entry);
            console.log(entry.target.id);
            const tocLinks = document.querySelectorAll('.post-sidebar .post-toc a');
            
            let activeLink = null;
            
            tocLinks.forEach(link => {
              decodedHash = decodeURIComponent(link.hash?.slice(1));
              if (decodedHash === entry.target.id) {
                activeLink = link;
              }
            });
            
            activeLink?.classList.add('active');
            sidebar = document.querySelector('.post-sidebar');

            if (sidebar && sidebar.scrollHeight > sidebar.clientHeight) {
              scrollToView(activeLink, sidebar, sidebar.clientHeight / 2);
            }

        });
  
      },
      {
        root: null,
        rootMargin: '-10px',
        threshold: 0,
      }
    );
  
    headings.forEach(h => observer.observe(h));
  })();
  