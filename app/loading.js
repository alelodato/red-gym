export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.08)_60%,rgba(0,0,0,0.15)_100%)]" />

      <div className="relative flex flex-col items-center gap-6">
        <div className="relative h-20 w-20">
          <img
            src="/logo-outline-pos.png"
            alt="Red Gym"
            className="h-full w-full object-contain drop-shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
            draggable="false"
          />

          {/* Glow immediato */}
          <span className="pointer-events-none absolute inset-0 rg-glow" />

          {/* Shimmer diagonale */}
          <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-lg">
            <span className="rg-shimmer absolute inset-0" />
          </span>
        </div>
      </div>
    </div>
  );
}