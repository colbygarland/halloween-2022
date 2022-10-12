import { useState } from 'react';

let message = '';
const Message = ({ count }: { count: number }) => {
  switch (count) {
    case -10:
      message = "That's it. Halloween is CANCELLED";
      break;
    case -6:
      message = 'I am not joking!';
      break;
    case -3:
      message = 'Seriously, stop!';
      break;
    case -1:
      message = "You can't have negative houses, silly!";
      break;
    case 3:
      message = 'You should give Uncle Colby some candy.';
      break;
    case 6:
      message = 'What about your Dad?';
      break;
    case 10:
      message = 'What can you catch from a vampire in winter? Frostbite.';
      break;
    case 15:
      message = 'You should give Uncle Colby some candy.';
      break;
    case 20:
      message = 'What do ghosts wear when their eyesight gets blurred? Spooktacles!';
      break;
    case 25:
      message = 'What about your Dad?';
      break;
    case 30:
      message = "Why didn't the skeleton go to the dance? He had no body to go with.";
      break;
    case 36:
      message = "Hope you're having fun!";
      break;
    case 40:
      message = "What's a zombie's fav cereal? Rice Creepies.";
      break;
    case 50:
      message = 'Where do ghosts like to travel on vacation? The Dead Sea!';
      break;
    case 60:
      message = 'What do skeletons fly around in? A scareplane!';
      break;
    case 70:
      message = 'Where do baby ghosts go during the day? Day-scare!';
      break;
    case 80:
      message = "What's a ghost's fav dessert? I scream!";
      break;
    case 90:
      message = 'How do ghosts search the web? They use ghoul-gle!';
      break;
    case 100:
      message = "Why didn't the zombie go to school? He felt rotten!";
      break;
    case 105:
      message = 'How the heck have you gotten here?!';
      break;
  }

  if (message === '') return null;

  return <div className="bg-secondary font-serif text-4xl text-center px-6 py-10 mt-20">{message}</div>;
};

const Button = ({ title, handler }: { title: string; handler: () => void }) => {
  return (
    <button
      className="bg-secondary text-tertiary font-serif rounded-full text-7xl h-20 w-20 ml-6 mr-6 flex items-center justify-center leading-5"
      onClick={handler}
    >
      {title}
    </button>
  );
};

export default function Home() {
  // TODO: it would be nice to save to a cookie/localstorage in case we close the app by accident!
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count === -10) return;
    setCount(count - 1);
  }

  return (
    <div className="h-screen w-screen relative bg-primary text-tertiary">
      <div className="h-4 bg-secondary"></div>
      <div className="p-6 md:p-12">
        <div className="text-center">
          <h1 className="text-6xl font-creep text-secondary my-10">Trick Or Treat</h1>
          <p className="font-serif text-4xl mb-10">How many houses have we hit so far?</p>
        </div>
        <div className="font-creep text-secondary text-9xl text-center my-10">{count}</div>
        <div className="flex justify-center">
          <Button title="-" handler={decrement} />
          <Button title="+" handler={increment} />
        </div>
      </div>
      <Message count={count} />
    </div>
  );
}
