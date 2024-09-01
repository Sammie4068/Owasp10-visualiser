"use client";

import { toast } from "sonner";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  severityAnalysis,
  getSeverityNumbers,
  getAreaMvc,
  getTotalMvc,
} from "@/data/analysis";
import styles from "./UploadButton.module.css";

const UploadButton = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isFileSelected, setIsFileSelected] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    // Trigger the file input click
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      // if (files[0].type !== "application/zip") {
      //   toast("Files must be a zip file");
      //   setIsFileSelected(false);
      // } else {
      setIsFileSelected(true);
      severityAnalysis();
      getSeverityNumbers();
      // getTotalMvc();
      // getAreaMvc();
      setTimeout(() => {
        router.push("/visual");
      }, 10000);
      // }
    }
  };

  return (
    <div>
      <button
        className={`${styles.button} ${
          isFileSelected ? styles.loadingTriggered : ""
        }`}
        onClick={handleClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg">
          <rect className={styles.border} pathLength="100" rx="1em" ry="1em" />
          <rect className={styles.loading} pathLength="100" rx="1em" ry="1em" />

          <svg
            className={styles.doneSvg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              className={`${styles.done} ${styles.doneCloud}`}
              pathLength="100"
              d="M 6.5,20 Q 4.22,20 2.61,18.43 1,16.85 1,14.58 1,12.63 2.17,11.1 3.35,9.57 5.25,9.15 5.88,6.85 7.75,5.43 9.63,4 12,4 14.93,4 16.96,6.04 19,8.07 19,11 q 1.73,0.2 2.86,1.5 1.14,1.28 1.14,3 0,1.88 -1.31,3.19 Q 20.38,20 18.5,20 Z"
            />
            <path
              className={`${styles.done} ${styles.doneCheck}`}
              pathLength="100"
              d="M 7.515,12.74 10.34143,15.563569 15.275,10.625"
            />
          </svg>
        </svg>
        <div className={styles.txtUplaod}>Upload</div>
      </button>
      <input
        type="file"
        ref={fileInputRef}
        className={styles.fileInput}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default UploadButton;
