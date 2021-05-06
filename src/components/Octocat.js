export function Octocat(props) {
  return (
    <div className="octocat">
      <a href="https://octodex.github.com/terracottocat/">
        <img
          src={`https://octodex.github.com/images/${props.image}`}
          width="400"
          height="400"
          alt={props.name}
        />
      </a>
      <div className="attribution">
        <h2>
          #{props.number}:{' '}
          <a href="https://octodex.github.com/terracottocat/">{props.name}</a>
        </h2>
      </div>
    </div>
  )
}
