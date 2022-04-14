# Sponge 🧽
<p align="center"><img width="600px" src="assets/spongebob.jpg" alt="puppet core"></p>

# Examples with [React](https://reactjs.org/)
`App.js`
```js
const Sponger = createSponge();

function App() {
  return (
    <></>
  );
}

export { Sponger };
```
`component/content/index.js`
```js
import { Sponger } from "../../App";

function Post() {
  useEffect(() => {
    const [x, y] = Sponger.to();

    window.scrollTo(x, y);
  }, []);
  
  return (
    <></>
  );
}
```
