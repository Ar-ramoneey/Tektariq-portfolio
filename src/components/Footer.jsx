export function Footer() {
  return (
    <footer className="py-8 px-6 bg-black text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Ibrahim Abdurahmon. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Built with React & TailwindCSS
        </p>
      </div>
    </footer>
  );
}