import NavIndex from "../navbar"
import Nav2index from "../navbar2"
import Indexmenu from "../dropdownmenu"
import Indexfooter from "../footer"
import { Outlet } from "react-router-dom"

const Mainpage = () => {
	return (
	<>
<NavIndex />
<Nav2index />
<Indexmenu />
<Outlet />
<Indexfooter />

	
	</>
	)
}

export default Mainpage