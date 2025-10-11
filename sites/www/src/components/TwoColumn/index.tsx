type TwoColumnProps = {
    title: any;
    subTitle: any;
    bodyAlign?: "left" | "right";
    background?: boolean;
    children: any;
};
import clsx from "clsx";

import styles from "./styles.module.css";

export default function TwoColumn(
    { title, subTitle, bodyAlign, background, children }: TwoColumnProps,
) {
    return (
        <div
            className={clsx(
                styles.container,
                background && styles.containerWithBackground,
            )}
        >
            <h2 className={styles.title}>
                {title}
            </h2>
            <div
                className={clsx(
                    styles.grid,
                    bodyAlign === "left" && styles.gridReversed,
                )}
            >
                <div className={styles.gridHead}>
                    {subTitle}
                </div>
                <div className={styles.gridContent}>{children}</div>
            </div>
        </div>
    );
}
