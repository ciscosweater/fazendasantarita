import styles from "@/styles/Block.module.css";

interface InfoBlockProps {
    group: number,
    title: string,
    amount: number
}

export default function InfoBlock(props: InfoBlockProps) {

    const groupColors = ["#33ccff", "#33cc33", "#9900cc", "#ffcc00", "#d3d3d3"]

    function renderAmount() {
        if (props.amount > 0) {
            return (
                <span className={styles.amount}>{props.amount} Kg</span>
            )
        }
    };

    return (
        <div className={styles.container} style={{backgroundColor: `${groupColors[props.group]}`}}>
            <span className={styles.title}>{props.title}</span>
            {renderAmount()}
        </div>
    )
}