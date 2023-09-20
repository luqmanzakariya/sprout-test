interface CardProps {
  details: {
    name: string;
    id: number;
    sprites: {
      other: {
        dream_world: {
          front_default: string;
        };
      };
    };
    types: {
      type: {
        name: string;
      };
    }[];
  },
  handleClick: (data:any) => void;
}

const Card = (props: CardProps) => {
  const { details, handleClick } = props;

  return (
    <div
      className={`card ${details.types[0].type.name}`}
      onClick={() => handleClick(details)}
    >
      <div className="card-description">
        <div className="card-num">{`# ${details.id}`} <span className="card-name">{details.name}</span></div>
        <div className={`card-types`}>
          {details.types.map(({ type }, i) => (
            <div key={i} className={`card-type-bg ${type.name}`}>{type.name}</div>
          ))}
        </div>
      </div>
      <div>
        <img
          className="img"
          src={details.sprites.other.dream_world.front_default}
          alt="poke-img"
        />
      </div>
    </div>
  );
};

export default Card;
