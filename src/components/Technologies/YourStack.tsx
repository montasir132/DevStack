import type { ITechnology } from "../types/technologyType";

interface IYourStack {
  stack: ITechnology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}
const YourStack = ({
  stack,
  onRemove,
  onRemoveAll,
}: IYourStack) => {
  // console.log(stack,onRemove,onRemoveAll,"from Stack"); 

if(stack.length === 0 ){
    return (
        <aside className="h-fit rounded-2xl border border-gray-100 bg-gray-50 p-5 lg:sticky lg:top-24">
          <h3 className="text-xl font-bold text-slate-900">Your Stack</h3>
          <p className="mt-1 text-sm text-slate-500">
            {stack.length} Technology Selected
          </p>
          <div className="mt-4">
            <p className="text-sm text-slate-500">No technologies selected yet.</p>
            <div className="mt-4 rounded-xl border-2 border-dashed border-gray-200 bg-white py-10 text-center text-sm text-slate-400">
              Your stack is empty.
            </div>
          </div>
        </aside>
    )
} 
  return (
    <aside className="h-fit rounded-2xl border border-gray-100 bg-gray-50 p-5 lg:sticky lg:top-24">
      <h3 className="text-xl font-bold text-slate-900">Your Stack</h3>
      <p className="mt-1 text-sm text-slate-500">
        {stack.length} Technology Selected
      </p>
      <div className="mt-4">
        <ul className="flex flex-col gap-3">
          {stack.map((tech: ITechnology, index: number) => {
            return (
              <li
                key={index}
                className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-3"
              >
                <img src={tech.logo} alt={tech.name} className="h-8 w-8 object-contain" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-900">{tech.name}</p>
                  <p className="text-xs text-slate-500">{tech.category}</p>
                </div>
                <span
                  className="px-1 text-lg text-slate-400 cursor-pointer hover:text-slate-700"
                  onClick={() => onRemove(tech.id)}
                >
                  ✕
                </span>
              </li>
            );
          })}
        </ul>
        <button
          onClick={() => onRemoveAll()}
          className="btn mt-4 w-full rounded-lg border-red-200 bg-white text-red-500 hover:bg-red-50"
        >
          Remove All
        </button>
      </div>
    </aside>
  );
};

export default YourStack;
