import React from 'react';

const CharacterList = ({ characters, title }) => {
  if (!characters.length) {
    return <h3>No Characters Yet</h3>;
  }

  return (
    <div className="">
      <h3 className="text-primary text-center">{title}</h3>
      <div className="flex flex-row flex-wrap my-4 justify-center">
        {characters &&
          characters.map((character) => (
            <div key={character._id} className="border-2 mx-2 my-2 border-blue-400 rounded-lg min-w-[230px] max-w-[230px]">
              <div className="mb-3 text-blue-600">
                <h4 className="bg-blue-500 text-light rounded-sm p-2 m-0">
                  {character.userName} <br />
                  <span className="text-white" style={{ fontSize: '1rem' }}>
                    currently has {character.friends ? character.friends.length : 0}{' '}
                    friend
                    {character.friends && character.friends.length === 1 ? '' : 's'}
                  </span>
                </h4>
                <h2 className='p-1'>Validated: {character.validatedUser? "True" : "False"}</h2>
                <h2 className='p-1'>Wallet: {character.walletAddress}</h2>
                <h2 className='p-1'>Tokens: {character.tokenPool}</h2>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CharacterList;