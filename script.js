document.addEventListener('DOMContentLoaded', load);

function load() {
    // Mobile navigation toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
        });
    });
    // Flavour text
    flavourText();
    setInterval(flavourText, 30000);

    // Start Slideshow
    startSlideshow();

    // Change flavour text
    document.getElementById('hero-text').addEventListener('click', flavourText);

    // Dark mode toggle
    setupDarkModeToggle();

    // Stat hover effect
    document.querySelectorAll('.stat1').forEach(statSwap);
    document.querySelectorAll('.stat2').forEach(statSwap);

    // Load map
    document.getElementById('map-placeholder').addEventListener('click', loadMap);
    
    // Contact form validation
    document.getElementById('submit_button').addEventListener('click', function(e) {
        e.preventDefault();
        validate();
    });

   document.getElementById("reset_button").addEventListener('click', resetForm);

   // Project listeners
   document.getElementById("project1").addEventListener('click', function() {
        location.href='https://github.com/vaughnws/MethodExplorer';
    });
    document.getElementById("project2").addEventListener('click', function() {
        location.href='https://github.com/vaughnws/gradetracker';
    });
    document.getElementById("project3").addEventListener('click', function() {
        location.href='https://github.com/vaughnws/JdocGenerator';
    });
    document.getElementById("project4").addEventListener('click', function() {
        location.href='https://www.reddit.com/r/diydrones/comments/1b06nz9/diy_ground_station_v1/';
    });
    document.getElementById("project5").addEventListener('click', function() {
        location.href='https://www.reddit.com/r/fpv/comments/1bs0c3f/ultra_long_range_antenna_mast/';
    });
  
    // Hide all error messages initially
    hideErrors();

    console.log(
        '%cHello there, Ms Kaur!',
        'font-size: 20px; font-weight: bold; color: #ff6b35;'
    );
    console.log(
        '%cThanks for checking out my portfolio!',
        'font-size: 14px; color:rgb(186, 186, 186);'
    );
    console.log(
        '%c- Vaughn WS',
        'font-size: 14px; font-style: italic; color:rgb(255, 255, 255);'
    );
}

function loadMap() {
    document.getElementById('map-placeholder').innerHTML = '<iframe src="https://maps.google.com/maps?q=Manitoba,Canada&output=embed" width="100%" height="300" style="border:0;"></iframe>';
}

// thank you TechZ for the jQuery tutorial

function startSlideshow() {
    // Array of images to display
    const images = [
        "/aboutpic/vaughn.png",
        "/aboutpic/vwithm2.jpg",
        "/aboutpic/vwithm.png",
        "/aboutpic/cyber.png"
    ];
    
    let currentIndex = 0;
    const aboutPicture = $("#about-picture");
    
    // Change image every 30 seconds
    setInterval(function() {
        currentIndex = (currentIndex + 1) % images.length;
        aboutPicture.fadeOut(100, function() {
            aboutPicture.attr("src", images[currentIndex]);
            aboutPicture.fadeIn(100);
        });
    }, 30000);

    // change image on click
    aboutPicture.on('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        aboutPicture.fadeOut(100, function() {
            aboutPicture.attr("src", images[currentIndex]);
            aboutPicture.fadeIn(100);
    });});

}
// adds some flavor to the home page
function flavourText() {
    let heroText = document.getElementById('hero-text');
    let heroTextArray = [
        "How's it going :)",
        "Welcome to my portfolio.",
        "I'm probably working on a project.",
        "I love solving problems.",
        "Let's make something together.",
        "Hey there 👋",
        "I'm Always up for a challenge.",
        "I write code and occasionally make things",
        "I love learning new things.",
        "Builder of bugs... I mean features"
    ];
    let randomIndex = Math.floor(Math.random() * heroTextArray.length);
    let randomText = heroTextArray[randomIndex];
    heroText.innerHTML = randomText;
}

    // Function for hover effect on the stats
    // Thanks SuperSimpleDev Tutorials

    // Function to handle hover effects
function statSwap(statElement) {
    let statNumber = statElement.querySelector('.stat-number');
    let statLabel = statElement.querySelector('.stat-label');
    let logosContainer = statElement.querySelector('.logos-container');
    
    // mouse enter
    statElement.addEventListener('mouseenter', () => {
        statNumber.style.opacity = '0';
        statLabel.style.opacity = '0';
        logosContainer.style.opacity = '1';
    });
    
    // mouse leave
    statElement.addEventListener('mouseleave', () => {
        statNumber.style.opacity = '1';
        statLabel.style.opacity = '1';
        logosContainer.style.opacity = '0';
    });
}

function setupDarkModeToggle() {
    const toggleBtn = document.getElementById('theme-toggle-btn');
    const root = document.documentElement;
    
    // Set initial state
    if (root.classList.contains('dark')) {
        toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    // Toggle theme when button is clicked
    toggleBtn.addEventListener('click', function() {
        // Toggle the dark class
        root.classList.toggle('dark');
        
        // Change the icon based on the current mode
        if (root.classList.contains('dark')) {
            toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
}
    

function resetForm() {
    let resetButton = document.getElementById('reset_button');
            // Hide all error messages
            hideErrors();
            
            // Clear the form fields
            let form = document.getElementById('contact_form');
            if (form) {
                    form.reset();
            }
            
            // Hide success message
            let successMessage = document.getElementById("success_message");
                successMessage.style.display = "none";
                successMessage.innerHTML = "";
        }

function validate(e) {
    // Hide all error messages before validation
    hideErrors();
    
    // Determine if the form has errors
    if (formHasErrors()) {
        // Prevents the form from submitting
        e.preventDefault();
        return false;
    }
    
    // If no errors were found, allow the form to submit
    // Show a success message
    let successMessage = document.getElementById("success_message");
    if (successMessage) {
        successMessage.style.display = "block";
        successMessage.style.padding = "0.75rem 1.8rem";
        successMessage.style.border = "2px solid #28a745";
        successMessage.style.marginTop = "1rem";
        successMessage.style.backgroundColor = "#d4edda";
        successMessage.style.borderRadius = "4px";
        successMessage.innerHTML = "Your message has been sent successfully!";
        successMessage.style.color = "#28a745"; // Green
        successMessage.style.fontWeight = "bold";
    }

    // wait a second before submiting
    setTimeout(function() {
        document.getElementById("contact_form").submit();
    }, 1500);
    
    return true;
}

function formHasErrors() {
    // Hide all error messages before validation
    hideErrors();
    
    if (validateName()) return true;
    console.log("Name validated");
    if (validateEmailFormat()) return true;
    console.log("Email validated");
    if (validatePhoneFormat()) return true;
    console.log("Phone validated");
    if (validateSubject()) return true;
    console.log("Subject validated");
    if (validateMessage()) return true;
    console.log("Message validated");
    
    
    // Return false if no errors were found
    return false;
}

function validateName() {
    let nameField = document.getElementById("name");
    
    // Check if the field is empty
    if (nameField && trim(nameField.value) === "") {
        // Show error message
        document.getElementById("name_error").style.display = "block";
        
        // Set focus to the field
        nameField.focus();
        nameField.select();
        
        // Return true to indicate an error was found
        return true;
    }
    
    // Return false if no errors were found
    return false;
}

function validateSubject() {
    let subjectField = document.getElementById("subject");
    
    // Check if the field is empty
    if (subjectField && trim(subjectField.value) === "") {
        // Show error message
        document.getElementById("subject_error").style.display = "block";
        
        // Set focus to the field
        subjectField.focus();
        subjectField.select();
        
        // Return true to indicate an error was found
        return true;
    }
    
    // Return false if no errors were found
    return false;
}

function validateMessage() {
    let messageField = document.getElementById("message");
    
    // Check if the field is empty
    if (messageField && trim(messageField.value) === "") {
        // Show error message
        document.getElementById("message_error").style.display = "block";
        
        // Set focus to the field
        messageField.focus();
        messageField.select();
        
        // Return true to indicate an error was found
        return true;
    }
    
    // Return false if no errors were found
    return false;
}


function validateEmailFormat() {
	let emailField = document.getElementById("email");

	// Check if email is empty
	if (trim(emailField.value) === "") {
		document.getElementById("email_error").style.display = "block";
		emailField.focus();
		emailField.select();
		return true;
	}

	// Check email format
	if (trim(emailField.value) !== "") {
		let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		// test regex and show error
		if (!emailRegex.test(trim(emailField.value))) {
			document.getElementById("emailformat_error").style.display = "block";
			emailField.focus();
			emailField.select();
			return true;
		}
	}
	return false;
}


function validatePhoneFormat() {
    let phoneField = document.getElementById("phone");
    let phoneRegex = /^\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
    
    // Check if phone is empty
    if (trim(phoneField.value) === "") {
        document.getElementById("phone_error").style.display = "block";
        phoneField.focus();
        phoneField.select();
        return true;
    }
    
    // Test regex and show error
    if (!phoneRegex.test(trim(phoneField.value))) {
        document.getElementById("phoneformat_error").style.display = "block";
        phoneField.focus();
        phoneField.select();
        return true;
    }
    
    return false;
}



function hideErrors() {
    // Get an array of error elements
    let error = document.getElementsByClassName("error");
    
    // Loop through each element in the error array
    for (let i = 0; i < error.length; i++) {
        // Hide the error element by setting it's display style to "none"
        error[i].style.display = "none";
    }
}

function trim(value) {
    return value.replace(/^\s+|\s+$/g, '');
}