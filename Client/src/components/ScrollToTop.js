import { useEffect } from "react";
import { withRouter } from "react-router-dom";

function ScrollToTop({ history }) {
  useEffect(() => {
    const onListen = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      onListen();
    };
  }, [history]);

  return null;
}

export default withRouter(ScrollToTop);
