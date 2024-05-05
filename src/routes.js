/** 
  All of the routes for the Material Kit 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";
import SignIn from "layouts/pages/authentication/sign-in";

import Presentation from "layouts/pages/presentation";

const routes = [
  {
    name: "Home",
    icon: <Icon>home</Icon>,
    route: "/",
    component: <Presentation />,
  },
  {
    name: "About Us",
    icon: <Icon>info</Icon>,
    collapse: [
      {
        name: "About Us",
        route: "/info/about-us",
        component: <AboutUs />,
      },
      {
        name: "Privacy Policy",
        route: "/info/privacy-policy",
        component: <AboutUs />,
      },
      {
        name: "Contact",
        route: "/info/contact-us",
        component: <ContactUs />,
      },
      {
        name: "General Terms and Conditions",
        route: "/info/terms-conditions",
        component: <AboutUs />,
      },
    ],
  },
  {
    name: "Profile",
    icon: <Icon>person</Icon>,
    collapse: [
      {
        name: "My Profile",
        route: "/users/username",
        component: <Author />,
      },
      {
        name: "Logout",
      },
    ],
  },
  {
    name: "Sign In",
    icon: <Icon>login</Icon>,
    route: "/sign-in",
    component: <SignIn />,
  },
];

export default routes;
