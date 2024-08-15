const UserProfile = (props) => {
    return (
        <div>
       <h2 style={{ color: 'black', backgroundColor: 'white' }}>{props.name}</h2>
       <p style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>Age: {props.age}</p>
       <p style={{ fontWeight: 'lighter' }}>Bio: {props.bio}</p>
     </div>
    );
}
export default UserProfile;