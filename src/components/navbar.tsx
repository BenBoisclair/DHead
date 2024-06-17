import DHeadLogo from "./assets/dhead-logo";
import ConnectWallet from "./connect-wallet";

export default function Navbar() {
  const pages = [
    {
      name: "NFT",
      href: "/",
    },
    {
      name: "Referral",
      href: "/",
    },
    {
      name: "Tokenomics",
      href: "/",
    },
    {
      name: "Roadmap",
      href: "/",
    },
    {
      name: "White Paper",
      href: "/",
    },
  ];

  return (
    <div className="h-[60px] bg-background flex items-center px-5 justify-between">
      <DHeadLogo />
      {pages.map((page, key) => {
        return (
          <button key={key}>
            <span className="font-bold text-lg">{page.name}</span>
          </button>
        );
      })}
      <ConnectWallet />
    </div>
  );
}
