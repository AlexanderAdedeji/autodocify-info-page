import React, { useState } from "react";
import { Moon, Sun, RotateCcw } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const colors = [
  {
    name: "Zinc",
    value: "#18181b",
  },
  {
    name: "Red",
    value: "#ef4444",
  },
  {
    name: "Rose",
    value: "#f43f5e",
  },
  {
    name: "Orange",
    value: "#f97316",
  },
  {
    name: "Green",
    value: "#22c55e",
  },
  {
    name: "Blue",
    value: "#3b82f6",
  },
  {
    name: "Yellow",
    value: "#eab308",
  },
  {
    name: "Violet",
    value: "#8b5cf6",
  },
];
const radiusOptions = [
  {
    label: "0",
    value: "0",
  },
  {
    label: "0.3",
    value: "0.3",
  },
  {
    label: "0.5",
    value: "0.5",
  },
  {
    label: "0.75",
    value: "0.75",
  },
  {
    label: "1.0",
    value: "1.0",
  },
];
export function ThemeCustomizer() {
  const {
    isDark,
    setIsDark,
    primaryColor,
    setPrimaryColor,
    radius,
    setRadius,
  } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const handleReset = () => {
    setPrimaryColor("#3b82f6");
    setRadius("0.75");
    setIsDark(false);
  };
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50"
        >
          Customize
        </button>
        {isOpen && (
          <div className="absolute bottom-full right-0 mb-4 w-80 rounded-lg border bg-white p-4 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Theme Customizer</h3>
              <button
                onClick={handleReset}
                className="p-2 hover:bg-gray-100 rounded-md"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Customize your components colors.
            </p>
            {/* Color Selection */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Color
              </label>
              <div className="grid grid-cols-4 gap-2">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    className={`w-full h-10 rounded flex items-center justify-center ${primaryColor === color.value ? "ring-2 ring-blue-500" : "hover:ring-2 hover:ring-gray-200"}`}
                    style={{
                      backgroundColor: color.value,
                    }}
                    onClick={() => setPrimaryColor(color.value)}
                  >
                    {primaryColor === color.value && (
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
            {/* Radius Selection */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Radius
              </label>
              <div className="grid grid-cols-5 gap-2">
                {radiusOptions.map((option) => (
                  <button
                    key={option.value}
                    className={`px-2.5 py-1.5 text-sm border rounded ${radius === option.value ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 hover:border-gray-300"}`}
                    onClick={() => setRadius(option.value)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
            {/* Mode Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mode
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  className={`flex items-center justify-center gap-2 px-3 py-2 border rounded ${!isDark ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 hover:border-gray-300"}`}
                  onClick={() => setIsDark(false)}
                >
                  <Sun className="w-4 h-4" />
                  Light
                </button>
                <button
                  className={`flex items-center justify-center gap-2 px-3 py-2 border rounded ${isDark ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 hover:border-gray-300"}`}
                  onClick={() => setIsDark(true)}
                >
                  <Moon className="w-4 h-4" />
                  Dark
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
