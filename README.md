# Sponge 🧽
<p align="center"><img width="600px" src="assets/spongebob.jpg" alt="puppet core"></p>

# Example
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
  const { slug } = useParams();

  useEffect(() => {
    const [x, y] = Sponger.to();

    window.scrollTo(x, y);
  }, []);
  
  return (
    <></>
  );
}
```
