document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggleBtn');
    const closeBtn = document.getElementById('closeBtn');
    const navbar = document.getElementById('myNav');

    toggleBtn.addEventListener('click', toggleNavbar);
    closeBtn.addEventListener('click', closeNavbar);

    
    document.addEventListener('click', function (event) {
        const isClickInsideNavbar = navbar.contains(event.target);
        const isClickOnToggleBtn = toggleBtn.contains(event.target);

        if (!isClickInsideNavbar && !isClickOnToggleBtn) {
            closeNavbar();
        }
    });

    // Get all navigation links
    const navLinks = document.querySelectorAll('.overnav-content a');

    // Add click event listeners to each navigation link
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior

            const targetSectionId = link.getAttribute('href').substring(1); // Extract target section ID from link href

            scrollToSection(targetSectionId);
        });
    });

    function toggleNavbar() {
        navbar.style.display = (navbar.style.display === 'none' || navbar.style.display === '') ? 'block' : 'none';
    }

    function closeNavbar() {
        navbar.style.display = 'none';
    }

    function scrollToSection(targetSectionId) {
        const targetSection = document.getElementById(targetSectionId);

        if (targetSection) {
            const yOffset = -navbar.offsetHeight; // Adjust scroll position based on navbar height
            const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }

    window.addEventListener('scroll', function () {
        const currentSection = getCurrentSection();
        if (currentSection) {
            closeNavbar();
        }
    });
    
    function getCurrentSection() {
        // Function to get the currently visible section based on scroll position
        const sections = document.querySelectorAll('section[id^="section"]');
        
        for (let section of sections) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 0 && rect.bottom > 0) {
                return section;
            }
        }
        return null;
    }
});

document.addEventListener('DOMContentLoaded', function () {
  const hiddenContent = document.getElementById("hidden4");
  const toggleButton = document.querySelector('#section4 .divInner button');

  document.addEventListener('click', function (event) {
      const isClickInsideHiddenContent = hiddenContent.contains(event.target);
      const isClickOnToggleButton = toggleButton.contains(event.target);

      if (!isClickInsideHiddenContent && !isClickOnToggleButton) {
          hiddenContent.style.display = 'none';
      }
  });

  toggleButton.addEventListener('click', function () {
      hiddenContent.style.display = (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') ? 'block' : 'none';
  });
});
  

  const tableOfContentsLinks = document.querySelectorAll('#tableOfContents ul li a');

  tableOfContentsLinks.forEach(link => {
      link.addEventListener('click', event => {
          event.preventDefault();
          const targetSectionId = link.getAttribute('href');
          const targetSection = document.querySelector(targetSectionId);
          
          if (targetSection) {
              targetSection.scrollIntoView({ behavior: 'smooth' });
          }
      });
  });

myFunction2();


function myFunction2() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    // Initially hide the full text (moreText) and "Read less" button
    moreText.style.display = "none";
    btnText.innerHTML = "Read more";

    // Toggle between "Read more" and "Read less" on button click
    btnText.addEventListener('click', function () {
        if (moreText.style.display === "none" || moreText.style.display === "") {
            moreText.style.display = "inline";
            btnText.innerHTML = "Read less";
            dots.style.display = "none";
        } else {
            moreText.style.display = "none";
            btnText.innerHTML = "Read more";
            dots.style.display = "inline";
            dots.style.display === "none";
        }
    });
}


function myFunction3() {
    var dots2 = document.getElementById("dots2");
    var more2 = document.getElementById("more2");
    var list = document.getElementById("hidden3");
    var btnText = document.getElementById("myBtn2");
  
    if (list.style.display === "none" || list.style.display === "") {
      list.style.display = "block";
      dots2.style.display = "none";
      more2.style.display = "inline";
      btnText.innerHTML = "Read less";
    } else {
      list.style.display = "none";
      dots2.style.display = "inline";
      more2.style.display = "none";
      btnText.innerHTML = "Read more";
    }
  }
  

document.getElementById('inner5').addEventListener('click', function (event) {
    var hiddenContent = document.getElementById('hidden5');
    if (event.target.closest('#inner5')) {
      hiddenContent.classList.toggle('active');
    } else {
      hiddenContent.classList.remove('active');
    }
  });
  
  document.addEventListener('click', function (event) {
    var hiddenContent = document.getElementById('hidden5');
    if (!event.target.closest('#inner5')) {
      hiddenContent.classList.remove('active');
    }
  });

  
document.addEventListener('DOMContentLoaded', function () {
    var iconLinks = document.querySelectorAll('.icon-link');
  
    iconLinks.forEach(function (iconLink) {
      iconLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
  
        // Hide all hidden contents
        document.querySelectorAll('.hidden-content').forEach(function (content) {
          content.style.display = 'none';
        });
  
        // Display the relevant hidden content below the clicked icon
        var hiddenContent = iconLink.querySelector('.hidden-content');
        hiddenContent.style.display = 'block';
  
        // Extract the URL from the hidden content and display it
        var url = hiddenContent.querySelector('p').textContent;
        var displayContainer = document.getElementById('link-display');
        
        // Display the URL directly under the icon list
        if (url && displayContainer) {
          displayContainer.textContent = url;
        }
      });
    });
  
    // Close the hidden content when clicking anywhere on the page
    document.addEventListener('click', function (event) {
      if (!event.target.closest('.icon-link')) {
        document.querySelectorAll('.hidden-content').forEach(function (content) {
          content.style.display = 'none';
        });
  
        // Clear the displayed link when closing the hidden content
        var displayContainer = document.getElementById('link-display');
        if (displayContainer) {
          displayContainer.textContent = '';
        }
      }
    });
  });

  



  