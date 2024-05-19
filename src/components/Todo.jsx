import PropTypes from "prop-types";
import TODO_STATUS from "../constants/todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinusCircle,
  faCheckCircle,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

export default function Todo({ text, status }) {
  // const { text } = props;
  const taskClasses = classNames({
    "rounded-xl p-2 mb-2 flex gap-2": true,
    "bg-green-100": status === TODO_STATUS.done,
    "bg-gray-100": status === TODO_STATUS.todo,
  });

  const textClasses = classNames({
    "flex-grow text-gray-500 text-xl": true,
    "line-through": status === TODO_STATUS.done,
  });

  const iconClasses = classNames({
    "text-xl cursor-pointer": true,
    "text-gray-600": status === TODO_STATUS.done,
    "text-green-600": status === TODO_STATUS.todo,
  });

  const icon = status === TODO_STATUS.done ? faPlusCircle : faCheckCircle;

  return (
    <>
      <div className={taskClasses}>
        <p className={textClasses}>{text}</p>
        <div className="inline-flex gap-2">
          <div>
            <FontAwesomeIcon
              icon={faMinusCircle}
              className="text-red-600 text-xl cursor-pointer"
            />
          </div>
          <div>
            <FontAwesomeIcon icon={icon} className={iconClasses} />
          </div>
        </div>
      </div>
    </>
  );
}

Todo.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  status: PropTypes.string,
  isEditing: PropTypes.bool,
};
