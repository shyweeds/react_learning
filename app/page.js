import LikeButton from "./like-button";

function Header({ title }) {
  return <h1>{title ? title : 'Default Title'}</h1>;
}
function HomePage() {
  const names = ['Alice', 'Bob', 'Charlie'];
  const [likes, setLikes] = React.useState(0);

  function handleClick() {
    console.log("increment like count");
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="A new title" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}
export default function HomePage() {

}