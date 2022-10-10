export const Footer = () => {
  return (
    <footer className="bg-primary-300">
      <div className="container px-4 py-8 text-gray-900 font-bold">
        <div className="flex justify-between">
          <ul className="flex justify-between w-64">
            <li>
              <a href="../reviews">Reviews</a>
            </li>

            <li>
              <a href="../news">News</a>
            </li>

            <li>
              <a href="../guides">Guides</a>
            </li>
          </ul>

          <div className="">Social Medias</div>
        </div>
      </div>
    </footer>
  )
}
