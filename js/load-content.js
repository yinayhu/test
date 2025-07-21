fetch ("/content/content.json")
    .then(response => response.json())
    .then(data => {
        document.getElementById("caption-laptop-title").textContent = data.captionLaptopTitle;
        document.getElementById("caption-laptop-text").textContent = data.captionLaptopText;
        document.getElementById("caption-charger-title").textContent = data.captionChargerTitle;
        document.getElementById("caption-charger-text").textContent = data.captionChargerText;
    });
