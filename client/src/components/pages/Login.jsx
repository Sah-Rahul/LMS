import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EyeClosed, EyeIcon, EyeOff } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", loginData);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", signupData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-bg from-orange-50 to-orange-100 px-4">
      <div className="w-full max-w-md">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid grid-cols-2 bg-white w-full shadow-sm">
            <TabsTrigger className="cursor-pointer" value="login">
              Login
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="signup">
              Signup
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-xl">Welcome Back </CardTitle>
                <CardDescription>
                  Enter your credentials to access your account.
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleLoginSubmit}>
                <CardContent className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      name="email"
                      value={loginData.email}
                      onChange={handleLoginChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="grid gap-2 relative">
                    <Label htmlFor="login-password">Password</Label>
                    <Input
                      id="login-password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={loginData.password}
                      onChange={handleLoginChange}
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="cursor-pointer absolute top-7 right-2"
                    >
                      {
                            showPassword ? <EyeOff /> : <EyeIcon />
                        }
                    </button>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    type="submit"
                    className="w-full cursor-pointer mt-5 bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    Login
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="signup">
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-xl">Create Account </CardTitle>
                <CardDescription>
                  Fill in your details to get started.
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSignupSubmit}>
                <CardContent className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="signup-name">Full Name</Label>
                    <Input
                      id="signup-name"
                      type="text"
                      name="name"
                      value={signupData.name}
                      onChange={handleSignupChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      name="email"
                      value={signupData.email}
                      onChange={handleSignupChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="grid gap-2 relative">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input
                      id="signup-password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={signupData.password}
                      onChange={handleSignupChange}
                      placeholder="Create a password"
                      required
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="cursor-pointer absolute top-7 right-2"
                    >
                        {
                            showPassword ? <EyeOff /> : <EyeIcon />
                        }
                      
                    </button>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    type="submit"
                    className="w-full cursor-pointer mt-5 bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    Create Account
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;
