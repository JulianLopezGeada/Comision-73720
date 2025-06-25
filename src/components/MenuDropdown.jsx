import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

// Handler hook for when Outside click dropdown close
let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};
// Handler hook for when Outside click dropdown close End Code====>>

const Dropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  let domNode = useClickOutside(() => {
    setDropdownOpen(false);
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const url = "https://dummyjson.com/products/categories";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, [categories]);

  return (
    <>
      <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 dark:bg-dark">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div ref={domNode} className="w-full px-4 sm:w-1/2 lg:w-1/4">
              <div className="py-8 text-center">
                <div className="relative inline-block mb-8 text-left">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`bg-orange-900 flex items-center rounded-[5px] px-5 py-[13px] text-base font-medium text-amber-200`}
                  >
                    Categorias
                    <span className="pl-4">
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current"
                      >
                        <path d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4063 5.65625 17.6875 5.9375C17.9687 6.21875 17.9687 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1563 10.1875 14.25 10 14.25Z" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`shadow-1 dark:shadow-box-dark absolute left-0 z-40 mt-2 w-full rounded-md bg-amber-300 dark:bg-dark-2 py-[10px] transition-all ${
                      dropdownOpen
                        ? "top-full opacity-100 visible"
                        : "top-[110%] invisible opacity-0"
                    }`}
                  >
                    {categories.map((cat) => (
                      <DropdownItem
                        as={Link}
                        to={`/category/${cat}`}
                        key={cate}
                      >
                        {cat}
                      </DropdownItem>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dropdown;

const DropdownItem = ({ label, href }) => {
  return (
    <a
      href={href}
      className="text-body-color dark:text-dark-6 hover:bg-[#F5F7FD] dark:hover:bg-primary/5 hover:text-primary block px-5 py-2 text-base"
    >
      {label}
    </a>
  );
};
