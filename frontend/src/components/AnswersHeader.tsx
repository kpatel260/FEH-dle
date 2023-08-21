function AnswersHeader() {
  return (
    <div className="answers-headers">
      <div className="header-box">
        <div className="header-text">Unit</div>
        <hr />
      </div>
      <div className="header-box">
        <div className="header-text">
          Gender
          <span className="tooltip">Male, Female, etc.</span>
        </div>
        <hr />
      </div>
      <div className="header-box">
        <div className="header-text">
          Group
          <span className="tooltip">Golden Deer, Black Eagles, etc.</span>
        </div>
        <hr />
      </div>
      <div className="header-box">
        <div className="header-text">
          Home
          <span className="tooltip">Zanado, Faerghus, etc.</span>
        </div>
        <hr />
      </div>
      <div className="header-box">
        <div className="header-text">
          Movement
          <span className="tooltip">Infantry, Cavalry, etc.</span>
        </div>
        <hr />
      </div>
      <div className="header-box">
        <div className="header-text">
          Weapon
          <span className="tooltip">Sword, Axe, etc.</span>
        </div>
        <hr />
      </div>
      <div className="header-box">
        <div className="header-text">Crest</div>
        <hr />
      </div>
      <div className="header-box">
        <div className="header-text">Test</div>
        <hr />
      </div>
    </div>
  );
}

export default AnswersHeader;
