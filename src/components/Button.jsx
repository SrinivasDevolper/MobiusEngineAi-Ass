function Button() {
  return (
    <button
      className="flex items-center self-start bg-white text-[#022183] rounded-full text-sm font-semibold shadow-md hover:bg-[#022183] hover:text-[white] transition"
      style={{ padding: "6px 15px" }}
    >
      Get Started{" "}
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 16 16"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z"
          clip-rule="evenodd"
        ></path>
        <path
          fill-rule="evenodd"
          d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  );
}

export default Button;
