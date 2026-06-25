import LikeButton from "./like-button";

function Header({ title }) {
  return <h1>{title ? title : 'Default Title'}</h1>;
}
export default function HomePage() {
  const names = ['Alice', 'Bob', 'Charlie'];

  function handleClick() {
    console.log("increment like count");
    setLikes(likes + 1);
  }

  return (
    <html>
      <body>
        <div>
          <Header title="A new title" />
          <ul>
            {names.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
          <LikeButton />
        </div>
      </body>
    </html>
  );
}