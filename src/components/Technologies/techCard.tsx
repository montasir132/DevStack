import type { ITechnology } from "../types/technologyType";
interface ITechCard{
  tech: ITechnology
  isInStack: boolean
  onAdd: (tech: ITechnology) => void
}
const TechCard = ({ tech, isInStack, onAdd }:ITechCard) => {
  return (
    <div className="flex flex-col rounded-2xl border border-[#F1F5F9] p-5 ">
      <div className="flex items-start justify-between">
        <img src={tech.logo} alt={tech.name} className="h-10 w-10" />
        {tech.badge && (
          <span className="badge border-0 bg-[#FFEDD5] text-xs font-semibold text-[#EA580C]">
            {tech.badge}
          </span>
        )}
      </div>
      <h3 className="mt-3 text-lg font-bold text-[#0F172A]">{tech.name}</h3>
      <p className="mt-1 flex-1 text-sm leading-relaxed text-[#64748B]">{tech.description}</p>
      <div className="mt-4 flex items-center justify-between gap-2 text-xs">
        <span className="badge badge-sm border-[#E5E7EB] font-medium text-[#64748B]">
          {tech.category}
        </span> 
        <span className="text-[#475569]">{tech.level}</span>
        <span className="flex items-center gap-1 text-sm font-semibold text-[#334155]">
          <span className="text-xs text-[#FBBF24]">★</span> {tech.rating}
        </span>
      </div>
 
      <button
      onClick={() => onAdd(tech)}
      disabled = {isInStack}
      className={
        isInStack
        ? 'btn mt-4 w-full cursor-default rounded-lg border-[#ED8C85] text-[#28754f] bg-[#d2ffe1]'
          : 'btn mt-4 w-full rounded-lg border-none bg-[#0A0F1D] text-white hover:bg-[#373f56]'
      }>
        {isInStack === true ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
};

export default TechCard;
