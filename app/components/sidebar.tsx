import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <motion.div
      className="fixed left-0 top-0 h-screen bg-[#2c3e50] text-[#ecf0f1] p-5"
      initial={{ width: 250 }}
      animate={{ width: isCollapsed ? 80 : 250 }}
      transition={{ duration: 0.3 }}
    >
      <button
        data-id="sideBarBtn"
        onClick={toggleSidebar}
        className="mb-6 text-[#ecf0f1] hover:text-[#3498db] transition-all"
      >
        {isCollapsed ? ">" : "<"}
      </button>

      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-bold mb-6" data-id="mainPageH2">
              Меню
            </h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="block px-4 py-2 rounded hover:bg-[#34495e] transition-all"
                  data-id="mainPageLink"
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  href="/weather"
                  className="block px-4 py-2 rounded hover:bg-[#34495e] transition-all"
                  data-id="weatherLink"
                >
                  Погода
                </Link>
              </li>
              <li>
                <Link
                  href="/todoList"
                  className="block px-4 py-2 rounded hover:bg-[#34495e] transition-all"
                  data-id="toDoLink"
                >
                  Задачи
                </Link>
              </li>
              <li>
                <Link
                  href="/calculator"
                  data-id="calculatorLink"
                  className="block px-4 py-2 rounded hover:bg-[#34495e] transition-all"
                >
                  {" "}
                  Калькулятор
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
