import { useEffect, useState } from "react";
import db, { doc, setDoc } from "../../utils/firebase";
import "./Modal.css";

const Input = ({
  id,
  type,
  placeholder,
  isImportant,
  label,
  setData,
  formData,
}) => {
  return (
    <div className="Input-container">
      <label htmlFor={id}>
        {label}
        {isImportant ? (
          <span>*</span>
        ) : (
          <span
            style={{
              color: "#999CA0",

              fontWeight: 400,
            }}
          >
            (Optional)
          </span>
        )}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={(e) => {
          setData((prev) => ({
            ...prev,
            [id]: e.target.value,
          }));
        }}
        required={isImportant}
        value={formData[id]}
      />
    </div>
  );
};

const Modal = ({ closeModal, formData, setFormData, user }) => {
  const formInput = [
    {
      label: "Enter Name",
      id: "name",
      type: "text",
      placeholder: "Eg. John Doe",
      isImportant: true,
    },
    {
      label: "Enter Email",
      id: "email",
      type: "email",
      placeholder: "Eg. John@xyz.com",
      isImportant: true,
    },
    {
      label: "Enter Phone",
      id: "number",
      type: "tel",
      placeholder: "Eg.  9123456789",
      isImportant: true,
    },
    {
      label: "Instagram Link",
      id: "insta",
      type: "text",
      placeholder: "Eg. ..instagram.com/username",
      isImportant: false,
    },
    {
      label: "Youtube Link",
      id: "youtube",
      type: "text",
      placeholder: "Eg. ..youtebe/username",
      isImportant: false,
    },
  ];

  const [isLoading, setIsLoading] = useState(false);

  const storeData = async () => {
    try {
      setIsLoading(true);
      const result = await setDoc(doc(db, "users", user.uid), formData);
      console.log(result);
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
      closeModal(false);
    }
  };

  const [next, setNext] = useState(false);
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const backbtnstyle = {
    backgroundColor: "white",
    color: "#231F20",
    border: "1px solid black",
  };
  return (
    <div className="modalbackground">
      <div className="modalcontainer">
        <div className="titlecontainer">
          <div className="title">Add New Profile</div>
          <div
            className="titleclosebtn"
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </div>
        </div>
        <form
          action=""
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="body">
            <div className="body-navbar">
              <div className="navbar-basic navbar-item">
                <div>
                  <span>Basic</span>
                </div>
                <div
                  className="body-line"
                  style={
                    !next ? { backgroundColor: "rgba(63, 132, 248, 1)" } : {}
                  }
                ></div>
              </div>
              <div className="navbar-social navbar-item">
                <div>
                  <span>Social</span>
                </div>
                <div
                  style={
                    next ? { backgroundColor: "rgba(63, 132, 248, 1)" } : {}
                  }
                  className="body-line"
                ></div>
              </div>
            </div>
            <div className="input-field-container">
              {!next
                ? formInput.slice(0, 3).map((val, ind) => {
                    return (
                      <Input
                        id={val.id}
                        type={val.type}
                        placeholder={val.placeholder}
                        label={val.label}
                        isImportant={val.isImportant}
                        setData={setFormData}
                        key={val.id}
                        formData={formData}
                      />
                    );
                  })
                : formInput.slice(3, 5).map((val, ind) => {
                    return (
                      <Input
                        id={val.id}
                        type={val.type}
                        placeholder={val.placeholder}
                        label={val.label}
                        isImportant={val.isImportant}
                        setData={setFormData}
                        key={val.id}
                        formData={formData}
                      />
                    );
                  })}
            </div>
          </div>
          <div className="footer">
            <button
              key={"back"}
              onClick={(e) => {
                console.log(e);
                if (formData.name && formData.email && formData.number) {
                  setNext((prev) => !prev);
                }
              }}
              style={next ? backbtnstyle : {}}
              type="submit"
            >
              {next ? "Back" : "Next"}
            </button>
            {next && (
              <button
                key={"submit"}
                type="submit"
                onClick={() => {
                  storeData();
                }}
              >
                {isLoading ? "Loading..." : "Done"}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
