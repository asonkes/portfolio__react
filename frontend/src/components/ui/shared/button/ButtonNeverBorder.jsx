import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const ButtonNeverBorder = ({ onClick }) => {
  return (
    <div
      className="flex m-5 text-base text-indigo-500 cursor-pointer sm:text-xl hover:text-fuchsia-300"
      onClick={onClick}
    >
      <p className="underline underline-offset-4 decoration-2">
        En savoir plus
      </p>
      <div className="flex items-center p-1.5">
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  );
};
