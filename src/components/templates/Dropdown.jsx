import PropTypes from 'prop-types';

const Dropdown = ({ title, options, func }) => {
  return (
    <div className="relative inline-block">
      <select 
        defaultValue="0"
        onChange={func}
        className="appearance-none bg-zinc-800/40 text-zinc-300 py-2.5 px-5 pr-10 rounded-xl 
          border border-zinc-700/50 cursor-pointer backdrop-blur-sm
          hover:border-[#6556CD]/50 hover:bg-zinc-800/60 
          focus:outline-none focus:border-[#6556CD] focus:ring-2 focus:ring-[#6556CD]/20
          transition-all duration-300 font-medium"
      >
        <option value="0" disabled className="bg-zinc-800 text-zinc-400">
          {title}
        </option>
        {options.map((option, index) => (
          <option 
            key={index} 
            value={option}
            className="bg-zinc-800 text-white py-2 hover:bg-zinc-700 capitalize"
          >
            {option.toUpperCase()}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-zinc-400">
        <svg className="h-4 w-4 fill-current transition-transform duration-200 transform group-hover:rotate-180" 
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
        </svg>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  func: PropTypes.func.isRequired
};

export default Dropdown;