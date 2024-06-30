const Dropdown = ({ title, options, func }) => {
  return (
    <select
    onChange={func}
      defaultValue="0"
      name="format"
      className="text-sm  w-28 px-1  text-zinc-200  bg-zinc-800 py-2 rounded hover:bg-slate-800 outline-none"
    >
      <option value="0" disabled>
        {title}
      </option>

      {options.map((o, i) => (
        <option className="font-poppins" value={o} key={i}>
          {o.toUpperCase()}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
