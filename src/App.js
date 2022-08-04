import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>
        <span>emojipedia</span>
      </h1>
      <d1 className="Dictionary">
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              💪
            </span>
            <span>Tense Biceps</span>
          </dt>
          <dd>
            An arm flexing to show its biceps muscle. Represents strength, or
            working out. Flexed Biceps was approved as part of Unicode 6.0 in
            2010 and added to Emoji 1.0 in 2015.
          </dd>
        </div>
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              🙏
            </span>
            <span>Folded Hands</span>
          </dt>
          <dd>
            Two hands placed firmly together, meaning please or thank you in
            Japanese culture. A common alternative use for this emoji is for
            prayer, using the same gesture as praying hands.
          </dd>
        </div>
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              🤝
            </span>
            <span>Handshake</span>
          </dt>
          <dd>
            Two hands performing a handshake gesture, indicating a cordial
            greeting between friends or associates.
          </dd>
        </div>
      </d1>
    </div>
  );
}
