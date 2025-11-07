import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { IoCameraOutline } from "react-icons/io5";
import Dropzone from "react-dropzone";
import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <Card>
        <CardContent>
          <div className="flex justify-center items-center mt-10">
            <Dropzone onDrop={() => {}}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <Avatar className="w-28 h-28 relative group">
                    <AvatarImage src="https://avatar.iran.liara.run/public" />
                    <div className="absolute z-50 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center items-center bg-black bg-opacity-20 border-2 border-violet-500 rounded-full group-hover:flex hidden cursor-pointer">
                      <IoCameraOutline color="#7c3aed" />
                    </div>
                  </Avatar>
                </div>
              )}
            </Dropzone>
          </div>

          <div className="mt-8 space-y-4">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <Input placeholder="Enter your name" autoComplete="name" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <Input
                placeholder="Enter your email address"
                autoComplete="email"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Bio</label>
              <Textarea placeholder="Enter bio" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Password</label>
              <Input
                type="password"
                placeholder="Enter your password"
                autoComplete="password"
              />
            </div>
            <Button className="w-full cursor-pointer">Save Changes</Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Profile;
