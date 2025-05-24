

const InfoItem = ({ title, value }) => {
  return (
      <div>
        <h3 className="text-zinc-400 text-sm mb-1">{title}</h3>
        <p className="text-white">{value}</p>
      </div>
    );
}

export default InfoItem