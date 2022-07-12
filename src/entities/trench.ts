import Tile from "./tile";

class Trench implements Tile {
    isAccessible() {
        return true;
    }
};

export default Trench;
