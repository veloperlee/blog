import '../../App.css';
function Friend(props) {

    return (
        <div className='friend'>
            <h2>친구목록</h2>
            <ul>
                {props.friends.map(function (friend, i) {
                    return (
                        <li key={friend.id}>
                            {friend.title} ({friend.speed})
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Friend;
