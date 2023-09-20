import { useState } from "react";

interface ModalProps {
  show: boolean;
  data: any;
  onClose: (data: any) => void;
}

const Modal = (props: ModalProps) => {
  const { show, data, onClose } = props;
  const [showSection, setShowSection] = useState(0);

  const handleChangeSection = (num: number) => {
    setShowSection(num);
  };

  if (!show) {
    return null;
  }

  return (
    <div className="backshadow">
      <div className={`custom-modal ${data.types[0].type.name}`}>
        <button className="delete-icon" onClick={onClose}>
          X
        </button>
        <div className="modal-details">
          <div>
            <img
              className="img"
              src={data.sprites.other.dream_world.front_default}
              alt="poke-img"
            />
          </div>
          <div className="header">
            <div className="name">{`#${data.id} ${data.name}`}</div>
            <div className={`card-types`}>
              {data.types.map(({ type }, i) => (
                <div key={i} className={`card-type-bg ${type.name}`}>
                  {type.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="tab">
          <button
            onClick={() => handleChangeSection(0)}
            className={showSection === 0 ? "active" : ""}
          >
            About
          </button>
          <button
            onClick={() => handleChangeSection(1)}
            className={showSection === 1 ? "active" : ""}
          >
            Stat
          </button>
          <button
            onClick={() => handleChangeSection(2)}
            className={showSection === 2 ? "active" : ""}
          >
            Abilities
          </button>
        </div>
        <div className="section">
          {showSection === 0 && (
            <div className="section-wrapper">
              <div className="section-item">
                <div className="section-description">Height:</div>
                <div className="section-value">{data.height}</div>
              </div>
              <div className="section-item">
                <div className="section-description">Weight:</div>
                <div className="section-value">{data.weight}</div>
              </div>
              <div className="section-item">
                <div className="section-description">Abilities:</div>
                <div className="section-value">
                  <ol style={{ marginLeft: "20px" }}>
                    {data.abilities.map((val, i) => (
                      <li key={i}>{val.ability.name}</li>
                    ))}
                  </ol>
                </div>
              </div>
              <div className="section-item">
                <div className="section-description">Types:</div>
                <div
                  className="section-value"
                  style={{ display: "flex", gap: "8px" }}
                >
                  {data.types.map(({ type }, i) => (
                    <div key={i} className={`card-type-bg ${type.name}`}>
                      {type.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {showSection === 1 && (
            <div className="section-wrapper">
              {data.stats.map((val, i) => (
                <div key={i} className="section-item">
                  <div className="section-description">{val.stat.name}</div>
                  <div className="section-value">{val.base_stat}</div>
                </div>
              ))}
            </div>
          )}
          {showSection === 2 && (
            <div className="section-wrapper">
              <div className="section-abilities">
                {data.moves.map((val, i) => (
                  <div key={i} className="ability">{val.move.name}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
