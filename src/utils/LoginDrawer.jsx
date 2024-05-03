import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

export default function LoginDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className=" justify-center px-6  lg:px-8 bg-white rounded-tl-[32px] rounded-tr-[32px] shadow pb-4">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-4 text-center text-[1.5rem] font-[800] ">
            Calculator <span className="font-[800] text-purple-600">AI</span>{" "}
            Login
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="items-center justify-center">
            <a
              href={
                import.meta.env.VITE_BACKEND_URL +
                "/oauth2/authorization/google"
              }
              className=" mt-4 relative cursor-pointer"
            >
              {/* 여기에 로그인 주소창 링크 걸기 */}
              <div className=" bg-violet-50 rounded-[100px] shadow ">
                <div className="self-stretch grow shrink basis-0 pl-4 pr-6 py-2.5 justify-center items-center flex">
                  <div className="chromeIcon mr-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="38"
                      height="38"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#4caf50"
                        d="M44,24c0,11.044-8.956,20-20,20S4,35.044,4,24S12.956,4,24,4S44,12.956,44,24z"
                      ></path>
                      <path
                        fill="#ffc107"
                        d="M24,4v20l8,4l-8.843,16c0.317,0,0.526,0,0.843,0c11.053,0,20-8.947,20-20S35.053,4,24,4z"
                      ></path>
                      <path
                        fill="#4caf50"
                        d="M44,24c0,11.044-8.956,20-20,20S4,35.044,4,24S12.956,4,24,4S44,12.956,44,24z"
                      ></path>
                      <path
                        fill="#ffc107"
                        d="M24,4v20l8,4l-8.843,16c0.317,0,0.526,0,0.843,0c11.053,0,20-8.947,20-20S35.053,4,24,4z"
                      ></path>
                      <path
                        fill="#f44336"
                        d="M41.84,15H24v13l-3-1L7.16,13.26H7.14C10.68,7.69,16.91,4,24,4C31.8,4,38.55,8.48,41.84,15z"
                      ></path>
                      <path
                        fill="#dd2c00"
                        d="M7.158,13.264l8.843,14.862L21,27L7.158,13.264z"
                      ></path>
                      <path
                        fill="#558b2f"
                        d="M23.157,44l8.934-16.059L28,25L23.157,44z"
                      ></path>
                      <path
                        fill="#f9a825"
                        d="M41.865,15H24l-1.579,4.58L41.865,15z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M33,24c0,4.969-4.031,9-9,9s-9-4.031-9-9s4.031-9,9-9S33,19.031,33,24z"
                      ></path>
                      <path
                        fill="#2196f3"
                        d="M31,24c0,3.867-3.133,7-7,7s-7-3.133-7-7s3.133-7,7-7S31,20.133,31,24z"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-center text-slate-500 text-sm font-medium font-['Roboto'] leading-tight tracking-tight">
                    {"Login with Google"}
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <div className=" font-['Roboto'] text-[#edf2f4] hover:text-purple-600 hover:underline duration-150 text-[1rem] ">
              LOGIN
            </div>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
