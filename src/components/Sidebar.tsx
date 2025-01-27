import { cn } from "@/lib/utils";

interface SidebarProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

export const Sidebar = ({ selectedFilter, onFilterChange }: SidebarProps) => {
  const filters = [
    { id: "all", label: "All Tickets" },
    { id: "open", label: "Open" },
    { id: "closed", label: "Closed" },
  ];

  return (
    <div className="w-48 border-r border-gray-200 p-4">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <div className="space-y-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={cn(
              "w-full text-left px-3 py-2 rounded-lg transition-colors",
              selectedFilter === filter.id
                ? "bg-primary text-white"
                : "text-gray-700 hover:bg-gray-100"
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};