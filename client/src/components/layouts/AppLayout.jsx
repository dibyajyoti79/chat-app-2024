import { Grid } from "@mui/material";
import Title from "../shared/Title";
import Header from "./Header";
import ChatList from "../specific/ChatList";
import { samepleChats } from "../../constants/sampleData";
import { orange } from "../../constants/color";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Title />
        <Header />

        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            sx={{
              display: { xs: "none", sm: "block" },
              // bgcolor: orange,
            }}
            height={"100%"}
          >
            <ChatList chats={samepleChats} chatId={"1"} />
          </Grid>
          <Grid item xs={12} sm={8} height={"100%"}>
            <WrappedComponent {...props} />
          </Grid>
        </Grid>
      </>
    );
  };
};
export default AppLayout;
