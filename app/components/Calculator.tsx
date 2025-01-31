import React, { useState } from "react";

export default function Calculator() {
  const [inputValue, setInputValue] = useState("0");
  function Count() {
    let result = eval(inputValue);
    setInputValue(result);
  }
  const buttonClick = (value: any) => {
    setInputValue((prev) => (prev === "0" ? value : prev + value));
  };
  const DeleteValue = () => {
    setInputValue("");
  };
  const DeleteSingle = () => {
    setInputValue((prev) => (prev.length === 1 ? "0" : prev.slice(0, -1)));
  };
  return (
    <div className="flex items-center  justify-center min-h-screen bg-gray-100">
      {/* Контейнер калькулятора */}
      <div className="w-full max-w-sm p-4 bg-white rounded-lg shadow-lg">
        {/* Экран калькулятора */}
        <div className="p-3 mb-3 text-right bg-gray-200 rounded-lg">
          <input
            data-id="CalculatorInput"
            type="text"
            value={inputValue}
            readOnly
            className="w-full p-3 mb-3 text-right bg-gray-200 rounded-lg text-lg font-bold focus:outline-none"
          />
        </div>

        {/* Кнопки калькулятора */}
        <div className="grid grid-cols-4 gap-1">
          {/* Цифры */}
          <button
            data-id="Btn7"
            onClick={() => buttonClick("7")}
            className="p-2 text-base font-bold text-white bg-gray-600 rounded-lg hover:bg-gray-700"
          >
            7
          </button>
          <button
            data-id="Btn8"
            onClick={() => buttonClick("8")}
            className="p-2 text-base font-bold text-white bg-gray-600 rounded-lg hover:bg-gray-700"
          >
            8
          </button>
          <button
            data-id="Btn9"
            onClick={() => buttonClick("9")}
            className="p-2 text-base font-bold text-white bg-gray-600 rounded-lg hover:bg-gray-700"
          >
            9
          </button>
          <button
            data-id="Btn/"
            onClick={() => buttonClick("/")}
            className="p-2 text-base font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            /
          </button>

          <button
            data-id="Btn4"
            onClick={() => buttonClick("4")}
            className="p-2 text-base font-bold text-white bg-gray-600 rounded-lg hover:bg-gray-700"
          >
            4
          </button>
          <button
            data-id="Btn5"
            onClick={() => buttonClick("5")}
            className="p-2 text-base font-bold text-white bg-gray-600 rounded-lg hover:bg-gray-700"
          >
            5
          </button>
          <button
            data-id="Btn6"
            onClick={() => buttonClick("6")}
            className="p-2 text-base font-bold text-white bg-gray-600 rounded-lg hover:bg-gray-700"
          >
            6
          </button>
          <button
            data-id="Btn*"
            onClick={() => buttonClick("*")}
            className="p-2 text-base font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            *
          </button>

          <button
            data-id="Btn1"
            onClick={() => buttonClick("1")}
            className="p-2 text-base font-bold text-white bg-gray-600 rounded-lg hover:bg-gray-700"
          >
            1
          </button>
          <button
            data-id="Btn2"
            onClick={() => buttonClick("2")}
            className="p-2 text-base font-bold text-white bg-gray-600 rounded-lg hover:bg-gray-700"
          >
            2
          </button>
          <button
            data-id="Btn3"
            onClick={() => buttonClick("3")}
            className="p-2 text-base font-bold text-white bg-gray-600 rounded-lg hover:bg-gray-700"
          >
            3
          </button>
          <button
            data-id="Btn-"
            onClick={() => buttonClick("-")}
            className="p-2 text-base font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            -
          </button>

          <button
            data-id="Btn0"
            onClick={() => buttonClick("0")}
            className="p-2 text-base font-bold text-white bg-gray-600 rounded-lg hover:bg-gray-700"
          >
            0
          </button>
          <button
            data-id="Btn."
            onClick={() => buttonClick(".")}
            className="p-2 text-base font-bold text-white bg-gray-600 rounded-lg hover:bg-gray-700"
          >
            .
          </button>
          <button
            data-id="Btn="
            onClick={() => Count()}
            className="p-2 text-base font-bold text-white bg-green-500 rounded-lg hover:bg-green-600"
          >
            =
          </button>
          <button
            data-id="Btn+"
            onClick={() => buttonClick("+")}
            className="p-2 text-base font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            +
          </button>
          <button
            data-id="DeleteAllBtn"
            className="p-2 text-base font-bold text-white bg-red-500 rounded-lg hover:bg-red-600"
            onClick={() => DeleteValue()}
          >
            Удалить Всё
          </button>
          <button
            data-id="DeleteBtn"
            className="p-2 text-base font-bold text-white bg-red-500 rounded-lg hover:bg-red-600"
            onClick={() => DeleteSingle()}
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
}
