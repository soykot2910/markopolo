export const RightArrow = () => {
  return (
    <svg
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="13" cy="13" r="13" fill="#6765FE" />
      <path
        d="M18.7071 13.7071C19.0976 13.3166 19.0976 12.6834 18.7071 12.2929L12.3431 5.92893C11.9526 5.53841 11.3195 5.53841 10.9289 5.92893C10.5384 6.31946 10.5384 6.95262 10.9289 7.34315L16.5858 13L10.9289 18.6569C10.5384 19.0474 10.5384 19.6805 10.9289 20.0711C11.3195 20.4616 11.9526 20.4616 12.3431 20.0711L18.7071 13.7071ZM17 14H18V12H17V14Z"
        fill="white"
      />
    </svg>
  );
};

export const LeftArrow = () => {
  return (
    <svg
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="13"
        cy="13"
        r="13"
        transform="rotate(180 13 13)"
        fill="#6765FE"
      />
      <path
        d="M7.29289 12.2929C6.90237 12.6834 6.90237 13.3166 7.29289 13.7071L13.6569 20.0711C14.0474 20.4616 14.6805 20.4616 15.0711 20.0711C15.4616 19.6805 15.4616 19.0474 15.0711 18.6569L9.41421 13L15.0711 7.34315C15.4616 6.95262 15.4616 6.31946 15.0711 5.92893C14.6805 5.53841 14.0474 5.53841 13.6569 5.92893L7.29289 12.2929ZM9 12H8V14H9V12Z"
        fill="white"
      />
    </svg>
  );
};

export const Spinner = () => (
  <div className="relative">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100px"
      height="100px"
      viewBox="0 0 100 100"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#e15b64"
        stroke-width="10"
        r="35"
        stroke-dasharray="164.93361431346415 56.97787143782138"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        ></animateTransform>
      </circle>
    </svg>
  </div>
);

export const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="#BBBBBB"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);
