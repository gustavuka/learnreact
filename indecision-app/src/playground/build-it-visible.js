
let visibility = false;

const showText = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility</h1>
      <button onClick={showText}>
        {!visibility ? 'Show Details' : 'Hide Details'}
      </button>
      {visibility && (<p>This is a secret message</p>)}
    </div>
  );  

  ReactDOM.render(template, document.getElementById('app'));
};

render();