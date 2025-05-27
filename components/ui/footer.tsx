// Simplified footer

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-8 text-center [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1]">
          <div className="flex flex-col space-y-2 items-center justify-center">
            <p className="text-lg text-indigo-200/65">
              TIG Technology Pte Ltd, 2025
            </p>
            <a href="mailto:vincent@tig.company" className="text-indigo-300 hover:text-indigo-200 transition duration-150 ease-in-out">
              Contact Us: vincent@tig.company
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
