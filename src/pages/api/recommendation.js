const fetchRecommendation = async () => {
    const apiKey = process.env.MY_API_KEY;
    const title = [
        { title: "titanic" },
        { title: "marvel" },
        { title: "comics" },
        { title: "love" },
        { title: "science" },
    ];

    const randomIndex = Math.floor(Math.random() * title.length);
    const randomTitle = title[randomIndex].title;

    const response = await fetch(`http://www.omdbapi.com/?s=${randomTitle}&apikey=${apiKey}`);

    const data = await response.json();
    return data

};

export default async function handler(req, res) {
    try {
        const recommendation = await fetchRecommendation();
        res.status(200).json(recommendation);

    } catch (error) {
        alert(error)
    }
}
