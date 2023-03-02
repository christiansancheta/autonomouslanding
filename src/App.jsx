import { useEffect, useState, useRef } from "react";
import {} from "@heroicons/react/24/solid";
import AutonomousLogo from "../public/images/autonomous-logo.svg";

function App() {
	useEffect(() => {}, []);

	return (
		<div className="h-screen w-screen bg-black text-white flex justify-center items-center">
			<img src={AutonomousLogo} className="h-14" />
			<div className="absolute bottom-0 leading-10 text-sm tracking-widest uppercase space-x-4">
				<a
					href="https://docs.google.com/document/d/1qAq6NU-hwNJ7SDorlMkEA5UEAS42vZcCCMua2S77MCM/edit?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
				>
					Privacy Policy
				</a>
				<a
					href="https://docs.google.com/document/d/1AYAuHjy6agBdrsS9hEScKZp_sIPv23-QQlm28bZ5j_A/edit?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
				>
					Terms of Service
				</a>
			</div>
		</div>
	);
}

export default App;
