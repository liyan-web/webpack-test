import './index.css';

const fn = () => {
  document.querySelector('#app').innerHTML = 'hello world';
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
};

fn().then(() => {
  document.querySelector('#app').innerHTML = 'changed';
});
