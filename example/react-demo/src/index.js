const a = 1;
const b = 2;
const name = 'aa';
let c;
const func = function (a, b) {
  console.log('hah');
};

const func2 = (c) => c;

const p1 = new Promise();

async function test() {
  const pp = await p1();
  console.log(pp);
}

function HelloWorld({
  greeting = 'hello',
  greeted = '"World"',
  silent = false,
  onMouseOver,
}) {
  if (!greeting) {
    return null;
  }

  // TODO: Don't use random in render
  const num = Math.floor(Math.random() * 1e7)
    .toString()
    .replace(/\.\d+/gi, '');

  return (
    <div
      className='HelloWorld'
      title={`You are visitor number ${num}`}
      onMouseOver={onMouseOver}
    >
      <strong>
        {greeting.slice(0, 1).toUpperCase() + greeting.slice(1).toLowerCase()}
      </strong>
      {greeting.endsWith(',') ? (
        ' '
      ) : (
        <span style={{ color: 'grey' }}>", "</span>
      )}
      <em>{greeted}</em>
      {silent ? '.' : '!'}
    </div>
  );
}
