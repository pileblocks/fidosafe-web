export class Utils {
    static showDate(timestamp: number): string {
        return new Date(parseInt(timestamp) * 1000).toLocaleString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit"
            })
    }

    static short(value: string): string {
        return value.slice(0, 8) + '...' + value.slice(-8);
    }

}