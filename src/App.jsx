import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [tweets, setTweets] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8080/tweet/findByUserId?userId=1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Sunucu hatasi: ' + response.status)
        }
        return response.json()
      })
      .then((data) => setTweets(data))
      .catch((err) => setError(err.message))
  }, [])

  return (
    <div className="tweet-list">
      <h1>Tweetler</h1>

      {error && <p className="error">Hata: {error} (detay icin Console'a bak)</p>}

      {tweets.length === 0 && !error && <p>Tweet bulunamadi.</p>}

      <ul>
        {tweets.map((tweet) => (
          <li key={tweet.id}>
            <strong>@{tweet.username}</strong>: {tweet.content}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
