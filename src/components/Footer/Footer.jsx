import { storage } from "../../helpers/storage";
import "./Footer.css";

export const Footer = ({ onReset }) => {
	const onResetButton = () => {
		storage.clear();
		onReset();
	};

	return (
		<div className="footer">
			<button className="reset-button" onClick={onResetButton}>
				Reset
			</button>
		</div>
	);
};
