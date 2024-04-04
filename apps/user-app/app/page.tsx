import Image from "next/image";
import { Card } from "@repo/ui/card";
import { Code } from "@repo/ui/code";
import styles from "./page.module.css";
import { Button } from "@repo/ui/button";

function Gradient({
  conic,
  className,
  small,
}: {
  small?: boolean;
  conic?: boolean;
  className?: string;
}): JSX.Element {
  return (
    <span
      className={[
        styles.gradient,
        conic ? styles.glowConic : undefined,
        small ? styles.gradientSmall : styles.gradientLarge,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}



export default function Page(): JSX.Element {
  return (
    <div className="flex justify-between text-2xl">
      <div>user payment app </div>
      <div><button>logout</button></div>
    </div>
  );
}


// DATABASE_URL="postgresql://vrushabhmowade:qigoTJRs47WB@ep-super-night-a5m7b5g1.us-east-2.aws.neon.tech/database?sslmode=require"

// "prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiMGRmZTdiNjAtZWRkMC00MjJlLTlmOWMtNjAzZTU5YzM1ZTQ4IiwidGVuYW50X2lkIjoiNTUyMjQzMTc5YTNmZmE0ZmQ2NDRhYzA5MTVjZTZlMTQ0YWM3ZjIyODIyMjAyMDI2YzczZjE0ZmRhYjM2MTFiNCIsImludGVybmFsX3NlY3JldCI6IjM0Njg0ZDAzLTViZDMtNDNhYy04ODUyLTI3NGQ4ZDNhZWE0OCJ9.IeD2-no2uhhl-imq_7u1yWX9GSe4t0tKoWm-aMVXDSA"