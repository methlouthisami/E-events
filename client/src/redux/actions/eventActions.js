import { fetchAllEvents } from "../../request/REQUEST";
export const getAllEvents = async () => {
    try {
        const { data } = await fetchAllEvents();
        return { type: "GET_ALL_EVENTS_SUCCED", payload: data };
    } catch (error) {
        return {
            type: "GET_ALL_EVENTS_FAILED",
            error,
        };
    }
};

export const addEvent = (event) => ({
    type: "ADD_EVENT",
    payload: event,
});
