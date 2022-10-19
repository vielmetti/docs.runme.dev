import { DiscordIcon, PurpleGhostFooterIcon } from "./Icons.tsx";

import { JSX } from "preact";

export default function Footer(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  type FooterLinkProps = {
    name: string;
    href: string;
  }
  const TwitterIcon = () => (
    <svg className="h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
  );

  const GithubIcon = () => (
    <svg className="h-6" fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );

  const FooterLink = ({ name, href }: FooterLinkProps) => {
    return (
      <div className="text-base font-medium xl:text-lg hover:text-[#f62459] cursor-pointer">
        <a href={href}>
          {name}
        </a>
      </div>
    );
  };

  const FooterHeadline = ({ name }: { name: string }) => {
    return (
      <div className="pb-2 mt-6 text-lg font-semibold text-gray-300 uppercase md:mt-0">{name}</div>
    );
  };

  return (
    <footer class="overflow-y-hidden relative">
      <div class="absolute w-full z-[-1] h-full sm:h-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1567 897" fill="none" preserveAspectRatio="none">
          <path d="M1578 896.989L-7.4906 896.989L-7.49068 44.8957C-75.1214 51.3969 323.888 0.000109638 793.757 6.85607e-05C1253.97 2.83275e-05 1578 44.8956 1578 44.8956L1578 896.989Z" fill="#000726" />
        </svg>
      </div>
      <div className="p-6 pb-12 pb-32 pt-24 text-white relative">
        <div className="flex flex-col mx-auto space-y-6 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="flex flex-col md:pr-48 justify-between space-y-6 md:flex-row md:space-x-4 md:space-y-0">
            <div className="flex flex-col space-y-3 ">
              <div className="lg:mb-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="134"
                  height="26"
                  viewBox="0 0 134 26"
                  fill="none"
                >
                  <path
                    d="M10.9264 15.2098L8.15908 17.9418C7.98945 18.1074 7.78443 18.2336 7.55896 18.3112C7.3335 18.3889 7.09328 18.4159 6.85584 18.3905C4.90402 18.1848 3.1065 17.2502 1.83317 15.7789C0.55984 14.3076 -0.0924325 12.4117 0.0105804 10.4811C0.113593 8.5506 0.964055 6.73239 2.38695 5.40065C3.80985 4.06891 5.69694 3.32497 7.6599 3.3219H23.004C23.0031 4.80107 22.4059 6.21936 21.3435 7.26498C20.2812 8.31061 18.8407 8.89798 17.3388 8.89798H7.56274C7.40558 8.89809 7.25199 8.94413 7.12141 9.03026C6.99084 9.1164 6.88916 9.23876 6.82925 9.38186C6.76934 9.52495 6.75389 9.68233 6.78487 9.83407C6.81584 9.98581 6.89184 10.1251 7.00325 10.2343L10.9264 14.1012C11.0005 14.1739 11.0594 14.2603 11.0995 14.3554C11.1397 14.4505 11.1603 14.5525 11.1603 14.6555C11.1603 14.7585 11.1397 14.8605 11.0995 14.9557C11.0594 15.0508 11.0005 15.1372 10.9264 15.2098Z"
                    fill="white"
                  />
                  <path
                    d="M21.0138 13.0916C22.0864 14.1483 22.8168 15.4944 23.1126 16.9599C23.4085 18.4253 23.2566 19.9442 22.6761 21.3246C22.0955 22.7051 21.1125 23.885 19.8511 24.7152C18.5898 25.5455 17.1069 25.9888 15.5897 25.9892H0.245605C0.246493 24.5097 0.843653 23.0911 1.9059 22.0449C2.96816 20.9988 4.40862 20.4107 5.91087 20.4098H15.6802C15.834 20.4066 15.9835 20.3595 16.1106 20.2742C16.2377 20.1889 16.3369 20.0691 16.3962 19.9293C16.4554 19.7895 16.4722 19.6358 16.4444 19.4868C16.4166 19.3378 16.3455 19.1999 16.2397 19.09L12.3165 15.2099C12.1676 15.0627 12.084 14.8633 12.084 14.6556C12.084 14.4478 12.1676 14.2484 12.3165 14.1012L15.0906 11.3693C15.2599 11.2031 15.4648 11.0763 15.6902 10.9981C15.9157 10.9199 16.1561 10.8923 16.3938 10.9173C18.1419 11.097 19.7737 11.8649 21.0138 13.0916Z"
                    fill="white"
                  />
                  <path
                    d="M39.0919 14.5961C37.2795 14.0154 35.7149 13.5139 35.7149 11.9995C35.7149 10.8678 36.8071 10.0495 38.3147 10.0495C39.6336 10.0267 40.9147 10.4837 41.9129 11.333C41.9538 11.3704 42.0028 11.3981 42.0562 11.4141C42.1096 11.4301 42.1659 11.434 42.2211 11.4254C42.2755 11.4172 42.3274 11.3969 42.3727 11.3661C42.4179 11.3352 42.4555 11.2945 42.4824 11.2472L43.2027 9.9934C43.2407 9.92521 43.2556 9.84689 43.2454 9.76977C43.2352 9.69265 43.2002 9.62075 43.1457 9.56447C42.335 8.73301 40.6297 7.84875 38.2812 7.84875C35.2325 7.84875 33.1855 9.52818 33.1855 12.0325C33.1855 15.1933 35.8958 16.0578 38.0735 16.7507C39.8089 17.305 41.3065 17.7834 41.3065 19.1626C41.3065 20.8123 39.7285 21.4029 38.3817 21.4029C37.0349 21.4029 35.1621 20.8024 34.3982 19.839C34.3651 19.7963 34.3226 19.7617 34.2738 19.7377C34.225 19.7136 34.1713 19.7009 34.1168 19.7004C34.0624 19.6995 34.0085 19.7102 33.9588 19.7319C33.909 19.7535 33.8646 19.7856 33.8287 19.8258L32.8806 20.9179C32.8293 20.9781 32.799 21.0529 32.7941 21.1313C32.7893 21.2097 32.8102 21.2876 32.8538 21.3534C33.6545 22.5511 36.1437 23.6037 38.184 23.6037C41.618 23.6037 43.8359 21.8351 43.8359 19.0966C43.8359 16.1172 41.3266 15.3088 39.0919 14.5961Z"
                    fill="white"
                  />
                  <path
                    d="M54.0577 20.6605C54.0364 20.6096 54.0036 20.5641 53.9618 20.5275C53.92 20.491 53.8703 20.4642 53.8165 20.4494C53.7623 20.435 53.7055 20.4328 53.6504 20.4431C53.5953 20.4534 53.5433 20.4758 53.4982 20.5087C52.8801 20.9539 52.1365 21.1984 51.3708 21.2082C49.3606 21.2082 48.446 19.9742 48.446 17.2027V10.4322H53.9806C54.0784 10.4322 54.1721 10.394 54.2412 10.3259C54.3103 10.2578 54.3492 10.1655 54.3492 10.0693V8.49873C54.3492 8.40247 54.3103 8.31015 54.2412 8.24209C54.1721 8.17402 54.0784 8.13579 53.9806 8.13579H48.4393V4.49319C48.4393 4.39693 48.4005 4.30462 48.3314 4.23655C48.2623 4.16849 48.1685 4.13025 48.0708 4.13025H46.3756C46.2796 4.13283 46.1884 4.1722 46.1215 4.23999C46.0545 4.30778 46.0171 4.39862 46.0171 4.49319V17.46C46.0171 21.5283 47.642 23.5079 50.9822 23.5079C52.2484 23.5273 53.4862 23.1379 54.5066 22.3993C54.5682 22.3496 54.612 22.2819 54.6319 22.2059C54.6518 22.13 54.6466 22.0498 54.6172 21.977L54.0577 20.6605Z"
                    fill="white"
                  />
                  <path
                    d="M69.8037 9.47865C67.9838 8.39996 65.8973 7.83601 63.7732 7.84872C58.9355 7.84872 55.2837 11.234 55.2837 15.7245C55.2837 20.4361 58.3693 23.6036 62.9591 23.6036C64.6363 23.5691 66.253 22.9799 67.5489 21.9308V22.9701C67.5489 23.0655 67.5874 23.157 67.6559 23.2244C67.7244 23.2919 67.8173 23.3298 67.9141 23.3298H69.6093C69.6576 23.3302 69.7054 23.3212 69.7501 23.3033C69.7948 23.2855 69.8355 23.259 69.8697 23.2256C69.904 23.1922 69.9312 23.1524 69.9498 23.1085C69.9683 23.0647 69.9779 23.0176 69.9779 22.9701V9.7723C69.9754 9.71307 69.9582 9.65533 69.9279 9.60414C69.8975 9.55295 69.8548 9.50986 69.8037 9.47865ZM63.733 10.1385C65.0598 10.1262 66.3689 10.4391 67.5422 11.0492V19.2978C66.9882 19.8917 66.3208 20.3723 65.578 20.7119C64.8353 21.0516 64.0319 21.2438 63.2137 21.2775C59.8635 21.2775 57.8064 19.1659 57.8064 15.7641C57.8198 12.5702 60.3694 10.1451 63.7464 10.1451L63.733 10.1385Z"
                    fill="white"
                  />
                  <path
                    d="M81.4658 20.6605C81.4445 20.6096 81.4117 20.5641 81.3699 20.5275C81.3281 20.491 81.2784 20.4642 81.2246 20.4494C81.1704 20.435 81.1137 20.4328 81.0586 20.4431C81.0034 20.4534 80.9514 20.4758 80.9063 20.5087C80.2882 20.9539 79.5446 21.1984 78.7789 21.2082C76.7688 21.2082 75.8542 19.9742 75.8542 17.2027V10.4322H81.3888C81.4865 10.4322 81.5802 10.394 81.6494 10.3259C81.7185 10.2578 81.7573 10.1655 81.7573 10.0693V8.49873C81.7573 8.40247 81.7185 8.31015 81.6494 8.24209C81.5802 8.17402 81.4865 8.13579 81.3888 8.13579H75.8542V4.49319C75.8542 4.44553 75.8446 4.39833 75.8261 4.3543C75.8076 4.31026 75.7804 4.27025 75.7462 4.23655C75.712 4.20285 75.6714 4.17612 75.6267 4.15788C75.5819 4.13964 75.534 4.13025 75.4856 4.13025H73.7904C73.6927 4.13025 73.5989 4.16849 73.5298 4.23655C73.4607 4.30462 73.4219 4.39693 73.4219 4.49319V17.46C73.4219 21.5283 75.0467 23.5079 78.3869 23.5079C79.6532 23.5273 80.891 23.1379 81.9114 22.3993C81.9729 22.3496 82.0168 22.2819 82.0367 22.2059C82.0566 22.13 82.0514 22.0498 82.022 21.977L81.4658 20.6605Z"
                    fill="white"
                  />
                  <path
                    d="M90.3608 7.84875C85.6202 7.84875 82.5581 10.9403 82.5581 15.7246C82.5581 20.4362 85.838 23.6037 90.7193 23.6037C92.9606 23.6037 95.0746 22.792 96.398 21.4359C96.4483 21.385 96.4821 21.3205 96.4952 21.2506C96.5084 21.1807 96.5002 21.1086 96.4717 21.0433L95.9155 19.7598C95.8928 19.7041 95.8559 19.6551 95.8083 19.6176C95.7608 19.58 95.7043 19.5551 95.6442 19.5453C95.5841 19.533 95.5218 19.5359 95.4632 19.5538C95.4046 19.5717 95.3516 19.604 95.3091 19.6476C94.3041 20.6704 92.5787 21.2973 90.8098 21.2973C87.5868 21.2973 85.4695 19.4463 85.2014 16.4339H96.9072C96.9946 16.4337 97.0791 16.4031 97.1459 16.3476C97.2126 16.2921 97.2574 16.2152 97.2724 16.1304C97.3458 15.6644 97.3795 15.1931 97.3729 14.7215C97.3796 10.6764 94.495 7.84875 90.3608 7.84875ZM94.9004 14.3355H85.1378C85.5666 11.7388 87.483 10.1452 90.1967 10.1452C92.9104 10.1452 94.6994 11.7025 94.9004 14.3355Z"
                    fill="white"
                  />
                  <path
                    d="M105.584 0.989136C103.112 0.989136 100.16 2.09115 100.16 7.32739V22.9701C100.16 23.0176 100.17 23.0646 100.188 23.1085C100.207 23.1523 100.234 23.1921 100.268 23.2256C100.303 23.259 100.343 23.2854 100.388 23.3033C100.433 23.3212 100.48 23.3302 100.529 23.3297H102.224C102.272 23.3302 102.32 23.3212 102.365 23.3033C102.409 23.2854 102.45 23.259 102.484 23.2256C102.519 23.1921 102.546 23.1523 102.564 23.1085C102.583 23.0646 102.592 23.0176 102.592 22.9701V10.4322H107.836C107.884 10.4322 107.932 10.4228 107.976 10.4045C108.021 10.3862 108.061 10.3594 108.095 10.3257C108.129 10.2919 108.156 10.2519 108.174 10.2079C108.192 10.1639 108.201 10.1167 108.201 10.0692V8.49869C108.201 8.45119 108.192 8.40407 108.174 8.36005C108.156 8.31604 108.129 8.276 108.095 8.24225C108.061 8.20851 108.021 8.18172 107.976 8.16344C107.932 8.14516 107.884 8.13575 107.836 8.13575H102.592V7.61444C102.592 5.76015 102.927 3.28885 105.846 3.28885C106.813 3.24865 107.764 3.55057 108.526 4.14011C108.568 4.17403 108.618 4.19815 108.672 4.2107C108.725 4.22326 108.78 4.22394 108.834 4.2127C108.888 4.20106 108.938 4.17786 108.981 4.14477C109.025 4.11168 109.06 4.06953 109.085 4.02133L109.739 2.73455C109.775 2.66269 109.786 2.58095 109.77 2.50214C109.755 2.42332 109.713 2.35189 109.651 2.29902C108.666 1.46756 107.192 0.989136 105.584 0.989136Z"
                    fill="white"
                  />
                  <path
                    d="M123.515 8.12256H121.82C121.722 8.12256 121.628 8.1608 121.559 8.22886C121.49 8.29693 121.451 8.38924 121.451 8.4855V19.0372C120.543 20.1458 118.754 21.3039 116.861 21.3039C113.98 21.3039 112.694 19.8323 112.694 16.5296V8.4987C112.694 8.45119 112.685 8.40407 112.667 8.36005C112.649 8.31604 112.622 8.276 112.588 8.24226C112.554 8.20851 112.513 8.18172 112.469 8.16344C112.424 8.14516 112.377 8.13575 112.328 8.13576H110.633C110.535 8.13576 110.442 8.17399 110.373 8.24206C110.303 8.31012 110.265 8.40244 110.265 8.4987V16.8826C110.265 22.4356 113.514 23.6036 116.241 23.6036C118.172 23.5825 120.027 22.8612 121.451 21.5777V22.9701C121.451 23.0176 121.461 23.0647 121.479 23.1085C121.498 23.1524 121.525 23.1921 121.559 23.2256C121.594 23.259 121.634 23.2854 121.679 23.3033C121.724 23.3212 121.771 23.3302 121.82 23.3297H123.515C123.612 23.3298 123.705 23.292 123.774 23.2246C123.843 23.1573 123.883 23.0658 123.883 22.9701V8.4987C123.885 8.44994 123.877 8.40132 123.859 8.35575C123.842 8.31018 123.815 8.2686 123.78 8.23348C123.746 8.19837 123.705 8.17045 123.659 8.15139C123.613 8.13233 123.564 8.12253 123.515 8.12256Z"
                    fill="white"
                  />
                  <path
                    d="M133.981 22.0727L133.559 20.7529C133.541 20.6977 133.511 20.6475 133.47 20.6063C133.428 20.5652 133.378 20.5343 133.322 20.5162C133.266 20.4981 133.207 20.4934 133.149 20.5024C133.091 20.5115 133.036 20.534 132.989 20.5681C132.456 20.9571 131.816 21.179 131.153 21.2049C130.101 21.2049 129.401 20.7166 129.401 18.3245V1.35208C129.401 1.25582 129.362 1.1635 129.293 1.09544C129.224 1.02737 129.13 0.989136 129.033 0.989136H127.337C127.24 0.989136 127.146 1.02737 127.077 1.09544C127.008 1.1635 126.969 1.25582 126.969 1.35208V19.2252C126.969 22.0661 128.168 23.5145 130.533 23.5145C131.725 23.5274 132.888 23.1631 133.854 22.4752C133.915 22.4298 133.96 22.3665 133.983 22.2942C134.006 22.2219 134.005 22.1444 133.981 22.0727Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="font-medium 3xl:text-lg">The developer happiness company.</div>
              <div className="flex items-center flex-row space-x-4">
                <a href={"https://twitter.com/statefulhq"}>
                  <TwitterIcon />
                </a>
                <a href={"https://github.com/stateful"}>
                  <GithubIcon />
                </a>
                <a href={"https://discord.gg/BQm8zRCBUY"}>
                  <DiscordIcon />
                </a>
              </div>
            </div>

            <div className="flex flex-col space-y-2 lg:space-y-3">
              <FooterHeadline name="Projects" />
              <FooterLink name="runme.dev" href="https://github.com/stateful/rdme.dev" />
              <FooterLink name="vscode-runme" href="https://github.com/stateful/vscode-runme" />
              <FooterLink name="runme cli" href="https://github.com/stateful/runme" />
            </div>
            <div className="flex items-center">
              <a href="https://fresh.deno.dev">
                <img width="197" height="37" src="https://fresh.deno.dev/fresh-badge.svg" alt="Made with Fresh" />
              </a>
            </div>
            <div class="pt-24 absolute right-0 lg:right-32">
              <PurpleGhostFooterIcon />
            </div>
          </div>
          <div className="text-sm md:absolute bottom-12">
            &copy; 2021-2022 Stateful Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
