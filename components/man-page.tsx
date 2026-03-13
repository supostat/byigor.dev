export function ManPage() {
  return (
    <div className="mb-10">
      <div className="mb-3 text-[13px] text-amber-dim">
        <span className="text-amber-bright">$</span> man igor
      </div>

      <div className="border-l-2 border-amber-dim bg-[rgba(255,176,0,0.05)] px-4 sm:px-5 py-3 text-[13px] leading-[1.8] text-amber">
        <div className="flex justify-between text-amber-bright">
          <span>IGOR(1)</span>
          <span className="hidden sm:inline">Fullstack Developer</span>
          <span>IGOR(1)</span>
        </div>

        <div className="mt-3">
          <div className="font-bold text-amber-bright">DESCRIPTION</div>
          <div className="pl-4 text-amber-dim">
            Builds things end-to-end. No layer is foreign territory.
            <br />
            Writes clean code or dies trying.
          </div>
        </div>

        <div className="mt-3">
          <div className="font-bold text-amber-bright">WARNINGS</div>
          <div className="pl-4 text-amber-dim">
            May refactor your entire codebase unprompted.
          </div>
        </div>
      </div>
    </div>
  );
}
