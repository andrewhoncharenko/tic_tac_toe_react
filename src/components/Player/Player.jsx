import { useState } from "react";

export default function Player({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        if(!isEditing) {
            setIsEditing(true);
        }
        else {
            setIsEditing(false);
        }
    }

    return (
        <li>
            <span className="player">
              {isEditing ? <input type="text" required /> : <span className="player-name">{name}</span>}
              <span className="player-simbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{!isEditing ? "Edit" : "Save"}</button>
          </li>
    );
}