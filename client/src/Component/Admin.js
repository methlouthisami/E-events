import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents, addEvent } from "../redux/actions/eventActions";
import { fetchAddEvent } from "../request/REQUEST";

import "./Admin.css";

export default function ADmin() {
    const [title, setTitle] = useState("");
    const [description, setDiscription] = useState("");
    const [date, setDate] = useState("");
    const [image, setImage] = useState(null);
    const [, setImgData] = useState(null);

    const dispatch = useDispatch();

    //get all events
    const eventData = useSelector((state) => state.eventStore.event);

    useEffect(() => {
        getAllEvents()
            .then(dispatch)
            .catch((e) => console.log("Error :", e));
        //eslint-disable-next-line
    }, []);

    //picture
    const onChangePicture = (e) => {
        e.preventDefault();
        if (e.target.files[0]) {
            console.log("picture: ", e.target.files);
            setImage(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const addtolist = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("image", image, image.name);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("date", date);

        const { data } = await fetchAddEvent(formData).catch((e) =>
            console.log("Error at ImageUpload", e)
        );

        if (data && data._id) dispatch(addEvent(data));

        formReset();
    };

    const formReset = () => {
        setTitle("");
        setDiscription("");
        setDate("");
        setImage("");
    };

    return (
        <div className="container" style={{ marginTop: "25px" }}>
            <div className="row">
                <div className="sidebar-header col-md-3 mt-5 sticky-md-top">
                    <h2 className="mt-4 ">Dashbored</h2>
                    <hr />
                    <ul className="dash-nav ">
                        <li>
                            <a href="/">
                                <h3>Pages</h3>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <h3>Pages</h3>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <h3>Pages</h3>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <h3>Pages</h3>
                            </a>
                        </li>

                        <li>
                            <a href="/">
                                <h3>Pages</h3>
                            </a>
                        </li>

                        <li>
                            <a href="/">
                                <h3>Pages</h3>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-5 mt-5 eventAdmin">
                    <div>
                        {eventData.map((el) => (
                            <div key={el._id} className="card">
                                <div className="card-title">{el.title}</div>
                                <img src={el.image} alt={el.title} />
                                <div className="card-title">
                                    {el.description}
                                </div>
                            </div>
                        ))}
                    </div>
                    {eventData.map((le) => (
                        <div
                            key={le._id}
                            className=" events-card "
                            style={{ borderLeft: " black" }}
                        >
                            <div
                                className="card mb-3 "
                                style={{ maxWidth: "300px" }}
                            >
                                <div className="row no-gutters">
                                    <div className="col-md-4  "></div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                {le.title}
                                            </h5>
                                            <p className="card-text">
                                                {le.description}
                                            </p>
                                            <p className="card-text">
                                                <small className="text-muted">
                                                    Last updated 3 mins ago
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-md-4 mt-5 eventAdmin">
                    <form id="formul" onSubmit={addtolist}>
                        <h2 style={{ marginLeft: "110px" }}>Form</h2>
                        <input
                            type="text"
                            placeholder="title"
                            className="mb-2"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                        <input
                            type="file"
                            style={{ width: "210px" }}
                            placeholder="image-file"
                            onChange={onChangePicture}
                        />
                        <input
                            type="text"
                            placeholder="description"
                            className="mb-2"
                            value={description}
                            onChange={(e) => setDiscription(e.target.value)}
                            required
                        />
                        <input
                            type="date"
                            placeholder="date"
                            className="mb-2"
                            value={date}
                            style={{ width: "210px" }}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />

                        <input
                            type="text"
                            placeholder="title"
                            className="mb-2"
                        />
                        <input
                            type="text"
                            placeholder="title"
                            className="mb-2"
                        />
                        <button type="submit" className="btn btn-light">
                            Posting
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
