document.addEventListener('DOMContentLoaded', load);

// Initializes the page
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

    // Create color pickr
    loadColors();
    document.getElementById('color-picker-li').addEventListener('click', function(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        createColorPicker();
    });

    // Start Slideshow
    startSlideshow();

    // Change flavour text
    document.getElementById('hero-text').addEventListener('click', flavourText);
    swapCodeBlock();

    // Dark mode toggle
    setupDarkModeToggle();

    // Github Setup
    GitHubActivity.feed({
        username: "vaughnws",
        selector: "#feed",
        limit: 3
      });
      
    // Stat hover effect
    document.querySelectorAll('.stat1').forEach(statSwap);
    document.querySelectorAll('.stat2').forEach(statSwap);

    // Home buttons
    document.getElementById('home-button').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    document.getElementById('footer-button').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Load map
    document.getElementById('map-placeholder').addEventListener('click', loadMap);
    
    // Contact form validation
    document.getElementById('submit_button').addEventListener('click', function(e) {


        // Encoded Key
        const SECRETKEY = [
            "aHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy8=", 
            "QUtmeWNiemJwNi1NTDlpUl8tZEFHSW1pbUdoTWlRbzhL", 
            "LXY5WW9KSlB0NkVWVzF2RF9JME91anJUakdBR3lza1d1RG9Cd0NI",
            "L2V4ZWM="
        ];

        let url = decodeEndpoint(SECRETKEY);
        let form = document.getElementById('contact_form');

        e.preventDefault();
        validate();
        let data = {
            name: sanitizeInput(document.getElementById('name').value),
            email: sanitizeInput(document.getElementById('email').value),
            phone: sanitizeInput(document.getElementById('phone').value),
            subject: sanitizeInput(document.getElementById('subject').value),
            message: sanitizeInput(document.getElementById('message').value)
        };
        // Check for logging data
        console.log(data);

        // Do Fetch for form to Google sheet
        fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(() => {
            document.getElementById('contact_form').reset();
            console.log('Form submitted successfully');
        })
          .catch((err) => console.log('Error: ', err));
      });

    // Reset button
   document.getElementById("reset_button").addEventListener('click', resetForm);

   // Project listeners
	document.getElementById("project1").addEventListener('click', function() {
        location.href='https://eduaitools.ca';
    });
    document.getElementById("project2").addEventListener('click', function() {
        location.href='https://github.com/vaughnws/MethodExplorer';
    });
    document.getElementById("project3").addEventListener('click', function() {
        location.href='https://github.com/vaughnws/gradetracker';
    });
    document.getElementById("project4").addEventListener('click', function() {
        location.href='https://github.com/vaughnws/JdocGenerator';
    });
    document.getElementById("project5").addEventListener('click', function() {
        location.href='https://www.reddit.com/r/diydrones/comments/1b06nz9/diy_ground_station_v1/';
    });
    document.getElementById("project6").addEventListener('click', function() {
        location.href='https://www.reddit.com/r/fpv/comments/1bs0c3f/ultra_long_range_antenna_mast/';
    });
  
    // Hide all error messages initially
    hideErrors();

    console.log(
        '%cHello there, Curious person!',
        'font-size: 20px; font-weight: bold; color: #ff6b35;'
    );
    console.log(
        '%cThanks for checking out my portfolio, If I look like a good fit, Id love to chat, contact me at the bottom of the website :)',
        'font-size: 14px; color:rgb(186, 186, 186);'
    );
    console.log(
        '%c- Vaughn WS',
        'font-size: 14px; font-style: italic; color:rgb(255, 255, 255);'
    );

}

function loadMap() {
    document.getElementById('map-placeholder').innerHTML = '<iframe src="https://maps.google.com/maps?q=Manitoba,Canada&output=embed" class="map-block" width="100%" height="300" style="border:0;"></iframe>';
}

// thank you TechZ for the jQuery tutorial

function startSlideshow() {
    // Array of images to display
    const images = [
        "/aboutpic/vaughn.png",
        "/aboutpic/vwithm2.jpg",
        "/aboutpic/vwithm.png",
        "/aboutpic/cyber.png",
        "/aboutpic/couple.png",
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
    // Function to swap code blocks
function swapCodeBlock() {
    const codeSnippets = [
        {
            language: 'JavaScript',
            code: `function <strong>createExperience</strong>() {
  const <strong>FrontEndSkills</strong> = ['HTML', 'CSS', 'JavaScript'];
  const <strong>BackEndSkills</strong> = ['PostgreSQL', 'Java', 'Python'];
  const <strong>Other_Skills</strong> = ['CAD', 'Systems_Integration', 'ARDUpilot'];
  let <strong>passion</strong> = 'Solving problems with technology';
  
  return {
    <strong>developer</strong>: 'Vaughn WS',
    <strong>mission</strong>: 'Making your ideas real',
    <strong>connect</strong>: () => "Let's build something"
  };
}`
        },
        {
            language: 'CSS',
            code: `   <strong>.Vaughn-WS</strong> {
        display: <strong>flex</strong>;
        position: <strong>full stack</strong>;
        approach: <strong>pragmatic</strong>;
        response-time: <strong>rapid</strong>;
        transform: translate(<strong>ideas, reality</strong>);
    }

    <strong>#frontend, #backend, #hardware</strong> {
        integration: <strong>seamless</strong>;
        architecture: <strong>clean</strong>;
        experience: <strong>50+ projects</strong>;
        align-items: <strong>efficient-solutions</strong>;
    }`
        },
        {
            language: 'Java',
            code: `public class <strong>Full_Stack_Dev</strong> {
  public static void <strong>buildSystems</strong>() {
    final String[] <strong>expertise</strong> = {"Frontend", "Backend", "Hardware"};
    final String[] <strong>projects</strong> = {"Drones", "Applications", "Interfaces"};
    final String[] <strong>values</strong> = {"Quality", "Reliability", "Efficiency"};
    String <strong>drive</strong> = "Solving real-world problems";
    
    return new <strong>Professional</strong>() {
      <strong>name</strong> = "Vaughn WS",
      <strong>role</strong> = "Full Stack Developer",
      <strong>invitation</strong> = () -> "Let's Make Something"
    };
  }
}`
        },
        {
            language: 'SQL',
            code: `CREATE VIEW <strong>VaughnDeveloperProfile</strong> AS

SELECT * FROM <strong>developers</strong>
WHERE name = 'Vaughn WS'
AND role = 'Full Stack Developer'

JOIN <strong>skills</strong> ON <strong>skills</strong>.type IN ('Frontend', 'Backend', 'Hardware')
JOIN <strong>projects</strong> ON <strong>projects</strong>.count > 50
JOIN <strong>clients</strong> ON <strong>clients</strong>.satisfaction = 'High'

GROUP BY <strong>experience</strong>
HAVING <strong>experience</strong> CONTAINS ('Drones', 'System Integration', 'ARDUpilot');`
        },
        {
            language: 'Python',
            code: `def <strong>buildExperience</strong>():
    <strong>domains</strong> = ['Software', 'Hardware', 'Integration']
    <strong>specialties</strong> = ['Integrated Systems', 'Web Design', 'User Interfaces']
    <strong>foundational_skills</strong> = ['Design', 'Development', 'Problem-Solving']
    <strong>mindset</strong> = 'Efficient solutions to complex problems'
    
    return {
        <strong>developer</strong>: 'Vaughn WS',
        <strong>identity</strong>: 'Full Stack Developer',
        <strong>invitation</strong>: "Let's Make Something"
    }`
        }
    ];

    // Add a language indicator element
    const codeSnippetWrapper = document.querySelector('.code-snippet');
    const languageIndicator = document.createElement('div');
    languageIndicator.className = 'language-indicator';
    languageIndicator.innerHTML = codeSnippets[0].language;
    codeSnippetWrapper.prepend(languageIndicator);

    let currentSnippet = 0;
    const codeElement = document.querySelector('.code-snippet pre code');
    
    // Set initial code
    codeElement.innerHTML = codeSnippets[0].code;
    
    // Change code with fade effect
    function changeCode() {
        codeElement.style.opacity = 0;
        
        setTimeout(() => {
            // Move to next snippet
            currentSnippet = (currentSnippet + 1) % codeSnippets.length;
            
            languageIndicator.textContent = codeSnippets[currentSnippet].language;
            
            codeElement.innerHTML = codeSnippets[currentSnippet].code;
            
            codeElement.style.opacity = 1;
            
            
            setTimeout(changeCode, 10000); 
        }, 500); 
    }
    
    // Start the swaps
    setTimeout(changeCode, 10000);
}

    // Creates the dark mode toggle button
    function setupDarkModeToggle() {
        const toggleBtn = document.getElementById('theme-toggle-btn');
        const root = document.documentElement;
        
        // Check if there's a saved preference in localStorage
        const savedTheme = localStorage.getItem('theme');
        
        // Apply saved theme or use default
        if (savedTheme === 'dark') {
            root.classList.add('dark');
            toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            root.classList.remove('dark');
            toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }
        
        // Toggle theme when button is clicked
        toggleBtn.addEventListener('click', function() {
            // Toggle the dark class
            root.classList.toggle('dark');
            
            // Save preference to localStorage
            if (root.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
                toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                localStorage.setItem('theme', 'light');
                toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
            }
        });
    }

    // Secret Color Picker
function createColorPicker() {
    loadSavedColors();
    
    if (typeof Pickr !== 'undefined') {

        const pickr = Pickr.create({
            el: '#color-picker',
            theme: 'nano',
            default: getComputedStyle(document.documentElement).getPropertyValue('--color-accent').trim(),
            autoReposition: false,
            position: 'right-end',
            swatches: [
                'rgb(255, 107, 53)',    // Sunset Orange
                'rgb(46, 204, 112)',    
                'rgb(52, 152, 219)',    
                'rgb(156, 89, 182)',    
                'rgb(241, 196, 15)',    
                'rgb(231, 77, 60)'      
            ],
            components: {
                preview: true,
                opacity: true,
                hue: true,
                interaction: {
                    hex: true,
                    rgba: true,
                    hsla: false,
                    hsva: false,
                    cmyk: false,
                    input: true,
                    clear: false,
                    save: true
                }
            }
        });

        pickr.on('init', instance => {

        }).on('show', instance => {

        }).on('save', (color, instance) => {
            const colorValue = color.toRGBA().toString(0);
            const darkerColor = createDarkerColor(color.toRGBA());
            const lighterColor = createLighterColor(color.toRGBA());

            updateAccentColors(colorValue, darkerColor, lighterColor);
            saveColorsToLocalStorage(colorValue, darkerColor, lighterColor);
            instance.hide();

        }).on('change', (color, source, instance) => {
            const colorValue = color.toRGBA().toString(0);
            const darkerColor = createDarkerColor(color.toRGBA());
            const lighterColor = createLighterColor(color.toRGBA());

            updateAccentColors(colorValue, darkerColor, lighterColor);

        }).on('swatchselect', (color, instance) => {
            const colorValue = color.toRGBA().toString(0);
            const darkerColor = createDarkerColor(color.toRGBA());
            const lighterColor = createLighterColor(color.toRGBA());
            
            updateAccentColors(colorValue, darkerColor, lighterColor);
        });
    }
}

// Create Dark accent
function createDarkerColor(rgba) {
    const darkerR = Math.max(0, rgba[0] - 40);
    const darkerG = Math.max(0, rgba[1] - 40);
    const darkerB = Math.max(0, rgba[2] - 40);
    
    return `rgba(${darkerR}, ${darkerG}, ${darkerB}, ${rgba[3]})`;
}

// Create Lighter color
function createLighterColor(rgba) {
    const lighterR = Math.min(255, rgba[0] + 40);
    const lighterG = Math.min(255, rgba[1] + 40);
    const lighterB = Math.min(255, rgba[2] + 40);
    
    return `rgba(${lighterR}, ${lighterG}, ${lighterB}, ${rgba[3]})`;
}

// Update CSS
function updateAccentColors(accentColor, accentDarkColor, lighterColor) {
    document.documentElement.style.setProperty('--color-accent', accentColor);
    document.documentElement.style.setProperty('--color-accent-dark', accentDarkColor);
    document.documentElement.style.setProperty('--color-accent-light', lighterColor);
}

// Save colors
function saveColorsToLocalStorage(accentColor, accentDarkColor, lighterColor) {
    localStorage.setItem('saved-accent-color', accentColor);
    localStorage.setItem('saved-accent-dark-color', accentDarkColor);
    localStorage.setItem('saved-accent-light-color', lighterColor);
    console.log('Colors saved');
}

// Load saved colors
function loadSavedColors() {
    const savedAccentColor = localStorage.getItem('saved-accent-color');
    const savedAccentDarkColor = localStorage.getItem('saved-accent-dark-color');
    const savedAccentLighterColor = localStorage.getItem('saved-accent-light-color');
    
    if (savedAccentColor && savedAccentDarkColor && savedAccentLighterColor) {
        updateAccentColors(savedAccentColor, savedAccentDarkColor, savedAccentLighterColor);
    }
}

// Load colors on page load
function loadColors() {
    // Load saved colors from localStorage
        const savedAccentColor = localStorage.getItem('saved-accent-color');
        const savedAccentDarkColor = localStorage.getItem('saved-accent-dark-color');
        const savedAccentLighterColor = localStorage.getItem('saved-accent-light-color');

        if (savedAccentColor && savedAccentDarkColor && savedAccentLighterColor) {
    createColorPicker();
    }
}
    
// Resets the form to be empty
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

        // Validates the form
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

    // Checks if the form has any errors
function formHasErrors() {
    // Hide all error messages before validation
    hideErrors();

    if (validateNoScript()) return true;
    console.log("No scripting validated");
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

    // Validates the name field
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

    // special Decode, thx google
function decodeEndpoint(parts) {
    return parts.map(p => atob(p)).join('');
}

    // Validates the subject field
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

    // Validates the message field
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

    // Validates the email format
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

    // Validates the phone format
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

    // Hides all error messages
function hideErrors() {
    // Get an array of error elements
    let error = document.getElementsByClassName("error");
    
    // Loop through each element in the error array
    for (let i = 0; i < error.length; i++) {
        // Hide the error element by setting it's display style to "none"
        error[i].style.display = "none";
    }
}

    // Trims whitespace from the beginning and end of a string
function trim(value) {
    return value.replace(/^\s+|\s+$/g, '');
}

// XSS sanitation
function sanitizeInput(input) {
    if (typeof input !== 'string') return input;``
    return input.replace(/<[^>]*>/g, '');
  }

  // How could this happen to meeeeeee
function validateNoScript() {
    const fields = ['name', 'email', 'phone', 'subject', 'message'];
    
    for (let field of fields) {
      let value = document.getElementById(field).value;
      if (/<script|javascript:/i.test(value)) {
        document.getElementById(field).focus();
        alert("Please don't include code or script tags in the " + field + " field.");
        return true; 
      }
    }
    return false; 
  }
