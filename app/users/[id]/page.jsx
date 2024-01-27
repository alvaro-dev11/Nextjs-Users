async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

const UserPage = async ({ params }) => {
  const user = await getUser(params.id);

  return (
    <div className="bg-slate-800 p-10 rounded-md">
      <img src={user.avatar} alt={user.first_name} className="m-auto my-4 rounded w-36" />
      <h3 className="text-3xl font-bold mb-2">
        {user.id} {user.first_name} {user.last_name}
      </h3>
      <p>Correo: {user.email}</p>
    </div>
  );
};

export default UserPage;
