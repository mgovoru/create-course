import { Component } from "react";
import './SeachBar.scss';

export class SearchBar extends Component {
  render() {
    return <form>
        <div>
            <input type="text" className="search-input" name="text-input"></input>
        </div>
        <div>
            <button type="submit" className="button">Искать</button>
        </div>
    </form>
  }
}
