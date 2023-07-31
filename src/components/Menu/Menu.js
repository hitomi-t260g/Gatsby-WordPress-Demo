import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { CallToActionButton } from "../CallToActionButton";

export const Menu = () => {
  const data = useStaticQuery(graphql`
    query MainMenuQuery {
      wp {
        acfOptionsMainMenu {
          mainMenu {
            callToActionButton {
              destination {
                ... on WpPage {
                  uri
                }
              }
              label
            }
            menuItems {
              root {
                destination {
                  ... on WpPage {
                    uri
                  }
                }
                label
              }
              subMenuItems {
                destination {
                  ... on WpPage {
                    uri
                  }
                }
                label
              }
            }
          }
        }
      }
    }
  `);
  console.log("MAIN MENU DATA: ", data);
  const { menuItems } = data.wp.acfOptionsMainMenu.mainMenu;
  return (
    <div className="sticky top-0 z-20 flex h-16 items-center justify-between bg-emerald-900 px-4 font-bold text-white">
      <Link to="/">
        <StaticImage
          src="../../../static/icon.png"
          layout="fixed"
          height={30}
          alt="Logo"
        />
      </Link>
      <div className="flex h-full flex-1 justify-end">
        {/* メニュー */}
        {(menuItems || []).map((menuItem, index) => (
          <div
            key={index}
            className="group relative flex h-full cursor-pointer hover:bg-emerald-800"
          >
            <Link
              to={menuItem.root.destination.uri}
              className="flex h-full items-center px-4 text-white no-underline"
            >
              {menuItem.root.label}
            </Link>
            {/* サブメニュー  groupであるメニューhover時にblock要素となる*/}
            {!!menuItem.subMenuItems?.length && (
              <div className="absolute top-full right-0 hidden bg-emerald-800 group-hover:block">
                {menuItem.subMenuItems.map((subMenuItem, index) => (
                  <Link
                    to={subMenuItem.destination.uri}
                    key={index}
                    className="block whitespace-nowrap p-4 text-white no-underline hover:bg-emerald-700"
                  >
                    {subMenuItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="pl-4">
        <CallToActionButton
          label={data.wp.acfOptionsMainMenu.mainMenu.callToActionButton.label}
          destination={
            data.wp.acfOptionsMainMenu.mainMenu.callToActionButton.destination
              .uri
          }
        />
      </div>
    </div>
  );
};
