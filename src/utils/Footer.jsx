export default function Footer() {
  return (
    <footer className=" shadow-t-lg bg-gray-100 ">
      <div className=" mx-auto  p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center ">
          © 2024{" "}
          <a href="/" className="hover:underline">
            Calculator AI
          </a>
          . All Rights Reserved by Jay, Kwon, 기범.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500  sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
