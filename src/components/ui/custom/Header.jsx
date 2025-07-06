import React, { useEffect, useState } from "react";
import { googleLogout } from "@react-oauth/google";
import { Button } from "../button";
import { FcGoogle } from "react-icons/fc";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useNavigation } from "react-router";
import { Link } from "react-router";
function Header() {
  const [openDialogue, setOpenDialogue] = useState(false);
  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error),
  });
  const user = JSON.parse(localStorage.getItem("user"));
  // const navigation = useNavigation();
  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "Application/json",
          },
        }
      )
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialogue(false);
        window.location.reload();
      });
  };
  return (
    <>
      <div className="p-3 shadow-sm flex justify-between items-center px-5">
        <a href="/">
          <img
            src="/logoipsum-custom-logo (1).svg"
            alt="App Logo"
            className="h-10 w-auto"
          />
        </a>

        <div>
          {user ? (
            <div className="flex items-center gap-3">
              <a href="/create-trip">
                <Button variant="outline" className="rounded-full">
                  Add new Trips
                </Button>
              </a>

              <a href="/my-trips">
                <Button variant="outline" className="rounded-full">
                  My Trips
                </Button>
              </a>
              <Popover>
                <PopoverTrigger>
                  <img
                    src={user?.picture}
                    className="h-[35px] w[35] rounded-full"
                  ></img>
                </PopoverTrigger>
                <PopoverContent>
                  <h2
                    className="cursor-pointer"
                    onClick={() => {
                      googleLogout();
                      localStorage.clear();
                      window.location.reload();
                    }}
                  >
                    Logout
                  </h2>
                </PopoverContent>
              </Popover>
            </div>
          ) : (
            <Button onClick={() => setOpenDialogue(true)}>Sign In</Button>
          )}
        </div>
        <Dialog open={openDialogue}>
          <DialogContent>
            <DialogHeader>
              <DialogDescription>
                <img src="/logo.svg"></img>
                <h2 className="font-bold text-lg mt-7">Sign In with Google</h2>
                <p>Sign in to the App with Google Authentication securly</p>
                <Button
                  onClick={login}
                  className="w-full mt-5 flex gap-4 items-center"
                >
                  <FcGoogle className="h-7 w-7" />
                  Sign In with Google{" "}
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

export default Header;
