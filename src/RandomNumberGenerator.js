import React, { useState } from 'react';

function RandomNumberGenerator(props) {
const { max } = props;
const [numbers, setNumbers] = useState([]);

const handleClick = () => {
const number = Math.floor(Math.random() * max) + 1;
setNumbers([...numbers, number]);
};

return (
<div>
<button onClick={handleClick}>Generate</button>
<ul>
{numbers.map(number => (
<li key={number}>{number}</li>
))}
</ul>
</div>
);
}

export default RandomNumberGenerator;
