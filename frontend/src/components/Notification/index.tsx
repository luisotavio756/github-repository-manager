import { store } from 'react-notifications-component';

export default function addNotification(title: string, type: "success" | "danger" | "info" | "default" | "warning" | undefined
) {
    store.addNotification({
        message: "click to close",
        insert: "bottom",
        container: "bottom-left",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
            duration: 5000,
            // onScreen: true
        },
        slidingExit: {
            duration: 200,
            timingFunction: 'ease-out',
            delay: 0
        },
        title,
        type,
    });
}
