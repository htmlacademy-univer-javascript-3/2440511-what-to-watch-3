import {Home, HomeProps} from './Home/Home.tsx';


type Props = HomeProps

export function App(props: Props) {
  return (
    <Home {...props}/>
  );
}
