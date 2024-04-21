// Function to filter recommendations based on the user's input keyword
function filterRecommendations(data, keyword) {
    // Convert keyword to lowercase for case-insensitive matching
    keyword = keyword.toLowerCase();

    // Filter the data based on the keyword variations
    if (keyword.includes('beach')) {
        return data.beaches;
    } else if (keyword.includes('temple')) {
        return data.temples;
    } else if (keyword.includes('country')) {
        return data.countries;
    } else {
        return [];
    }
}

// Function to display recommendations based on the user's input keyword
function displayRecommendations(recommendations) {
    // Clear previous recommendations
    document.getElementById('recommendations').innerHTML = '';

    // Loop through recommendations and display each one
    recommendations.forEach(recommendation => {
        // Create elements for the recommendation
        const container = document.createElement('div');
        container.classList.add('recommendation');

        const image = document.createElement('img');
        image.src = recommendation.imageUrl;
        image.alt = recommendation.name;

        const name = document.createElement('h3');
        name.textContent = recommendation.name;

        const description = document.createElement('p');
        description.textContent = recommendation.description;

        // Append elements to the container
        container.appendChild(image);
        container.appendChild(name);
        container.appendChild(description);

        // Append container to the recommendations section
        document.getElementById('recommendations').appendChild(container);
    });
}

// Function to handle search button click
async function handleSearch() {
    const jsonData = await getData();
    if (jsonData) {
        const keyword = document.getElementById('searchInput').value;
        const recommendations = filterRecommendations(jsonData, keyword);
        displayRecommendations(recommendations);
    } else {
        console.log('Failed to fetch data');
    }
}

// Add event listener to the search button
document.getElementById('searchButton').addEventListener('click', handleSearch);
