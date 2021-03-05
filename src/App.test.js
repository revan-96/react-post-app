import { shallow } from 'enzyme';
import App from './App';
import MainPage from './components/MainPage/MainPage';

test('renders learn react link', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.containsMatchingElement(<MainPage />)).toEqual(true);
});
  
