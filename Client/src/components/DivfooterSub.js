import { useMemo } from "react";
import "./DivfooterSub.css";

const DivfooterSub = ({ propPadding }) => {
  const divfooterSubStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <section className="divfooter-sub7" style={divfooterSubStyle}>
      <div className="footer-col">
        <div className="link-privacy6">Privacy Policy</div>
        <div className="link-terms7">{`Terms & Conditions`}</div>
        <div className="link-contact13">Contact Us</div>
      </div>
      <div className="monty-esim9">© 2024 Monty eSIM</div>
    </section>
  );
};

export default DivfooterSub;
