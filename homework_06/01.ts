interface ApiResponse<T> {
  data: T | null;
  status: number;
  message?: string;
  error?: string | null;
}

interface User {
  id: number;
  name: string;
  email?: string | null;
}

const response: ApiResponse<User> = {
  data: {
    id: 1,
    name: "Paul",
    email: null
  },
  status: 200,
  message: "OK"
};

console.log(response);

