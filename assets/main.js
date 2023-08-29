/*
const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCmS75G-98QihSusY7NfCZtw&part=snippet%2Cid&order=date&maxResults=10';

const content = null || document.getElementById('content')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b2d7747ce0mshb9ff04c88a1c567p157225jsn0cf2d9727f23',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

    async function fetchData() {
	const response = await fetch(url, options);
	const result = await response.json();
	return result
    };

    (async () => {
        try {
            const videos = await fetchData(url);
            let view =`
            ${videos.item.map(video =>`
            <div class="group relative">
                <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
                </h3>
                </div>
            </div>
            `).join('')}
            `;
            content.innetHTML = view;
        } catch (error) {
	        console.error(error);
            alert(error)
        }
    })();


    const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCmS75G-98QihSusY7NfCZtw&part=snippet%2Cid&order=date&maxResults=10';

const content = document.getElementById('content'); // Corrected the getElementById method

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b2d7747ce0mshb9ff04c88a1c567p157225jsn0cf2d9727f23',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData() {
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		return result;
	} catch (error) {
		throw error; // Rethrow the error to be caught in the caller function
	}
}
*/
(async () => {
	try {
		const videos = await fetchData(); // Removed the redundant argument
		let view = `
            ${videos.items.map(video => `
            <div class="group relative">
                <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </div>
            `).join('')}
        `;
		content.innerHTML = view; // Corrected the typo "innetHTML" to "innerHTML"
	} catch (error) {
		console.error(error);
		alert(error.message); // Display the error message
	}
})();