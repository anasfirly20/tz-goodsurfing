// Miscellaneous
import { Icon } from "@iconify/react";
import { Fragment } from "react";

// Constants
import { sidenav_items } from "../../constants/constants";

// Components
import CardSupport from "../CardSupport";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { setselectedSubItem } from "../../store/SubSidebarSlice";
import { setSelectedSidebar } from "../../store/SidebarSlice";

export default function Sidebar() {
  const dispatch = useDispatch();
  const { selectedSidebar } = useSelector((state) => state.sidebar);
  const { selectedSubItem } = useSelector((state) => state.subSidebar);

  return (
    <nav className="bg-white fixed left-0 h-full w-[320px] drop-shadow-[3px_3px_8px_#00000008] pt-normal pb-[5vw]">
      <button
        type="button"
        className="absolute -right-2 border border-custom-gray-2 rounded-lg p-1"
      >
        <Icon
          icon="ph:arrow-left-light"
          fontSize={23}
          className="text-custom-gray-2"
        />
      </button>
      <section className="flex flex-col justify-between h-full items-center mt-shorter2">
        <section className="flex flex-col gap-5">
          {sidenav_items.map((item) => {
            const selected = selectedSidebar === item.id;
            return (
              <Fragment key={item.id}>
                <button
                  className={`flex items-center gap-5 animate ${
                    selected ? "text-primary underline" : "text-custom-gray-2"
                  }`}
                  onClick={() => {
                    dispatch(setSelectedSidebar(item.id));
                    dispatch(setselectedSubItem(1));
                  }}
                >
                  <Icon icon={item.icon} fontSize={35} />
                  <p className="text-lg">{item.label}</p>
                </button>
                {selected && (
                  <section className="border-l border-custom-gray-2 ml-6 grid gap-2">
                    {item.subItems.map((subItem, index) => {
                      const fixedIndex = index + 1;
                      const selected = selectedSubItem === fixedIndex;
                      return (
                        <button
                          key={index}
                          onClick={() => {
                            dispatch(setselectedSubItem(fixedIndex));
                          }}
                        >
                          <p
                            className={`pl-5 text-lg text-start animate ${
                              selected ? "text-primary" : "text-custom-gray-2"
                            }`}
                          >
                            {subItem}
                          </p>
                        </button>
                      );
                    })}
                  </section>
                )}
              </Fragment>
            );
          })}
        </section>
        <CardSupport />
      </section>
    </nav>
  );
}
