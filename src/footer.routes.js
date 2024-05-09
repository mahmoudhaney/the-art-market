// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "The Art Market",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", route: "info/about-us" },
        { name: "freebies", route: "/" },
        { name: "premium tools", route: "/" },
        { name: "blog", route: "/" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "illustrations", route: "/" },
        { name: "bits & snippets", route: "/" },
        { name: "affiliate program", route: "/" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", route: "/info/contact-us" },
        { name: "knowledge center", route: "" },
        { name: "custom development", route: "" },
        { name: "sponsorships", route: "" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", route: "/info/terms-conditions" },
        { name: "privacy policy", route: "/info/privacy-policy" },
        { name: "licenses (EULA)", route: "/info/terms-conditions" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} The Art Market{" "}
      <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Creativity
      </MKTypography>
      .
    </MKTypography>
  ),
};
