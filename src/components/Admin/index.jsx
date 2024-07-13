const Admin = () => {
  return (
    <div className="flex bg-gray-100 h-screen justify-center items-center">
      <img src="/images/admin.svg" className="w-96 h-96" />
      <div>
        <h1 className="text-4xl font-semibold mb-4">Admin Console!</h1>
        <form className="flex flex-col gap-4">
          <input
          type="text"
            className="border p-4 rounded-md bg-white w-[450px]"
            placeholder="Enter admin secret"
            required
          />
          <button className="p-4 bg-violet-600 w-fit text-white font-semibold rounded-md">Access Now</button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
