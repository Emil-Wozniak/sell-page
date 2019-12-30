type HistoryPush = {
    history: any
    match: any
    linkUrl: string;
}

export const handlePush = ({history, match, linkUrl}: HistoryPush) =>
    () => history.push(`${match.url}${linkUrl}`);
