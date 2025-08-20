
import { Kanit , Charm } from "next/font/google";
import localfont from "next/font/local";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["700"],
 });

 const charm = Charm({
  subsets: ["latin"],
  weight: ["400", "700"],
 });

 const sov = localfont({
  src: "./../fonts/SOV_KhunSuek.ttf",
 });

export default function page() {
  return (
    <div>
      <h1>
        About page
      </h1>
      <h3 className={kanit.className}>เกี่ยวกับเรา</h3>
      <h3 className={charm.className}>SAU-Coffee Cafe</h3>
      <hr />
      <p className={sov.className}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Asperiores, id accusamus perspiciatis quisquam autem at dicta, 
        commodi consequuntur odit recusandae ipsum aspernatur enim, vitae excepturi et minima velit. 
        Mollitia, placeat.
      </p>
      </div>
    );
}
