import { useState, type FC } from 'preact/compat'

export const Greeting: FC<{ messages: string[] }> = ({ messages }) => {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)]

  const [greeting, setGreeting] = useState(messages[0])

  return (
    <div>
      <h3>{greeting}! やっほー</h3>
      <button onClick={() => setGreeting(randomMessage())}>新しい挨拶</button>
    </div>
  )
}
