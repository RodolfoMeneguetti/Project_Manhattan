import Input from "./Input/input";


export function Forms() {
  return (
    <form className="flex items-center">
      <form className="w-full max-w-sm">
        <div className="flex items-center border-b border-teal-500 py-12">
          <Input />
          <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
            Sign Up
          </button>
          <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
            Cancel
          </button>
        </div>
      </form>
    </form>
  )
}