# React Image Displayer

An image loader React component that displays/mounts the image only after it is successfully loaded. It has three key features:

1. Built-in spinners: The built-in spinner is displayed while the image is loading. 20+ spinners could be used via [React Spinners](https://www.davidhu.io/react-spinners/) library.

2. Enter Animations: After the image is loaded, it appears with an enter animation. 10+ animations could be used via [Framer Motion](https://www.framer.com/motion/) library.

3. JWT Support: `<img>` tag does not support JWT authentication. However, using this component, they are fetched effortlessly by only passing the JWT token through the `token` prop.

## Getting Started

Let's discover **React Image Displayer in less than 2 minutes**.

### Installation

Install react-image-displayer with via your package manager:

```bash
npm i react-image-displayer
```

### Usage

Import the component:

```javascript
import ImageDisplayer from 'react-image-displayer';
```

Simply, use it:

```javascript
<ImageDisplayer url={enterImageURLHere} />
```

### Example

```javascript
<ImageDisplayer
  url={imageUrl}
  token={token}
  delay={1000}
  enterAnimation={['blur', 1]}
  imageStyle={{
    borderBottomLeftRadius: '11px',
    borderBottomRightRadius: '11px',
  }}
  spinner={{
    color: 'var(--color2)',
    size: '1rem',
    spinnerType: 'BeatLoader',
  }}
/>
```

![Result](./react-image-displayer-docs//docs/img/result.gif)

## Documentation

- Check out the [documentation](https://sdenizozturk.github.io/react-image-displayer/) for guides such as [Props](https://sdenizozturk.github.io/react-image-displayer/docs/props-types/props/) and Custom [Types](https://sdenizozturk.github.io/react-image-displayer/docs/props-types/types/) that you will need.

## Contribute

- Want to contribute to React Image Displayer? The [contributing](https://sdenizozturk.github.io/react-image-displayer/docs/contributing) guide has you covered.

## License

- React Image Displayer is MIT licensed.
