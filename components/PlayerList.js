import Icon from "react-hero-icon";

export default function PlayerList({
  headImage,
  jersey,
  position,
  firstName,
  lastName,
  teamColor,
  logo,
  ppg,
  rpg,
  apg,
  stl,
}) {
  const starIcons = [];
  let i;
  for (i = 1; i < stl; i++) {
    starIcons.push(
      <div>
        <Icon icon="star" type="solid" fill={teamColor} width="10px" />
      </div>
    );
  }

  return (
    <div className="shadow-3xl rounded flex flex-col">
      <div className="relative overflow-hidden">
        <div
          className="absolute bg-contain bg-no-repeat grayscale opacity-10 -top-3/4 -bottom-3/4 -left-1/8 right-0 z-0"
          style={{ backgroundImage: `url(${logo})` }}
        ></div>
        <div className="absolute top-1 right-1 w-10">
          <img src={logo} />
        </div>
        <div className="flex flex-row relative z-10">
          <div className="basis-1/2 grid justify-items-center">
            <img src={headImage} />
          </div>
          <div className="basis-1/2 flex flex-col justify-center">
            <div className="text-gray-400 text-xs">
              #{jersey} | {position}
            </div>
            <div className="font-bold text-sm">{firstName}</div>
            <div className="font-bold text-sm flex flex-row">
              <div>{lastName}</div>
              {starIcons}
            </div>
          </div>
        </div>
      </div>
      <div
        className="box-content h-1"
        style={{ backgroundColor: `${teamColor}` }}
      ></div>
      <div className="flex flex-row">
        <div className="basis-1/3 py-1 text-center">
          <div className="text-xs">PPG</div>
          <div className="text-sm font-bold">{ppg}</div>
        </div>
        <div className="basis-1/3 py-1 border-x border-gray-400 text-center">
          <div className="text-xs">RPG</div>
          <div className="text-sm font-bold">{rpg}</div>
        </div>
        <div className="basis-1/3 py-1 text-center">
          <div className="text-xs">APG</div>
          <div className="text-sm font-bold">{apg}</div>
        </div>
      </div>
    </div>
  );
}
