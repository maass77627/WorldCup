




function PlayerDetailProfile({player, imageSrc}) {





    return (
        <>
        <h1>Profile</h1>
        <div className="player-detail-profile">
            {/* <h1>Profile</h1> */}
            <div className="text-wrap">
            <h3>{player.name}</h3>
            <p>{player.number}</p>
            <p>{player.position}</p>

             <p>{player.team.name}</p>
              <img src={`https://flagsapi.com/${player.team.flag_code}/flat/64.png`}></img>
             {/* <p>{player.team.flag_code}</p> */}
             </div>
             <div className="image-wrap">
            <img src={imageSrc} alt="player"></img>
            </div>

        </div>
        </>
    )
}

export default PlayerDetailProfile