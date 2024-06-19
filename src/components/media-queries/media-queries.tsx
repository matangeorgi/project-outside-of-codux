import "./media-queries.css";
import React from "react";

export interface MediaQueriesProps {
  className?: string;
}

export const MediaQueries: React.FC<MediaQueriesProps> = ({
  className = "",
}) => (
  <div className="responsive-container">
    <h1>Responsive Component</h1>
    <p>This component adjusts its style based on different media queries.</p>
    <div className="box small">Small Box</div>
    <div className="box medium">Medium Box</div>
    <div className="box large">Large Box</div>
    <div className="portrait">Portrait Mode</div>
    <div className="landscape">Landscape Mode</div>
    <div className="darkmode">Dark Mode</div>
    <div className="lightmode">Light Mode</div>
    <div className="reduced-motion">Reduced Motion</div>
  </div>
);
