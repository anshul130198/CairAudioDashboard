import { useNavigate } from "react-router-dom";
import FormProvider from "../../../FormProvider/FormProvider";
import MultiSelectDropdown from "../../../MultiSelectDropdown/MultiSelectDropdown";
import { useForm } from "react-hook-form";
import InputField from "../../../InputField/InputField";
const Workspace = () => {
  const computeData = [
    { label: "Alabama", value: "Alabama" },
    { label: "Alaska", value: "Alaska" },
    { label: "California", value: "California" },
    { label: "Delaware", value: "Delaware" },
    { label: "Tennessee", value: "Tennessee" },
    { label: "Texas", value: "Texas" },
    { label: "Washington", value: "Washington" },
  ];

  const dataSets = [
    {
      label: "Alabama",
      value: "Alabama",
    },
    {
      label: "Alaska",
      value: "Alaska",
    },
    {
      label: "California",
      value: "California",
    },
    {
      label: "Delaware",
      value: "Delaware",
    },
    {
      label: "Tennessee",
      value: "Tennessee",
    },
    {
      label: "Washington",
      value: "Washington",
    },
  ];

  const navigate = useNavigate();

  const methods = useForm({
    shouldUnregister: false,
    mode: "all",
    defaultValues: {},
  });
  const {
    handleSubmit,
    trigger,
    watch,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    console.log("data", data);
    // navigate("/workspace/progress");
  };

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-12">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Project</a>
                </li>
                <li className="breadcrumb-item active">Workspace</li>
              </ol>
              <h3 className="m-0 font-weight-bold clr-w pb10">
                One click RSudio/Juipter, with auto sync and scalable compute.
              </h3>
              <h5 className="clr-w min50">&nbsp;</h5>
              {/*<p class="clr-g">Scroll down to see quick links and overviews of your Server, To do list
Order status or get some Help using Nifty.</p>*/}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      {/* /.content-header */}
      {/* Main content */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="mb-4 offset-xl-3 col-xl-5">
              <div className="card minh445">
                <div className="card-body">
                  <h4 className="text-center">New Jupyter Workspace</h4>
                  {/* <form action> */}
                  <FormProvider
                    methods={methods}
                    buttonName={"Start a Workspace"}
                    onSubmit={handleSubmit(onSubmit)}
                    // overrideClassName={classes.addBtn}
                  >
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Title</label>
                      {/* <input
                        type="email"
                        className="form-control"
                        placeholder="Enter title"
                      /> */}
                      {/* <InputField
                        type="email"
                        key={"empId"}
                        onChange={(val)=> {
                            console.log(val.target.value)
                        }}
                        //   fieldName={"empId"}
                        //   error={errors?.empId?.message}
                        className="form-control"
                        placeholder={"Enter Email"}
                        //   inputOverrideClassName={classes.inputOverride}
                        //   overrideErrorClassName={classes.overrideErrorClass}
                        //   containerOverrideClassName={classes.inputContainer}
                      /> */}
                    </div>
                    <div className="form-group">
                      <label>Compute</label>
                      <MultiSelectDropdown
                        isMulti={true}
                        key={"compute"}
                        category={"Please select compute"}
                        data={computeData}
                        handleChange={(selectedValue, action) => {
                          console.log("compute", selectedValue);
                          //   setValue("roles", selectedValue);
                          //   methods.clearErrors("roles");
                        }}
                        // error={errors?.["roles"]?.message}
                        // selected={getValues("roles")}
                        // fieldName={"roles"}
                        // className={classes.inputOverride}
                      />
                    </div>
                    <div className="form-group">
                      <label>Datasets</label>
                      <MultiSelectDropdown
                        isMulti={true}
                        key={"datasets"}
                        category={"Please select datasets"}
                        data={dataSets}
                        handleChange={(selectedValue, action) => {
                          console.log("datasets", selectedValue);
                          //   setValue("roles", selectedValue);
                          //   methods.clearErrors("roles");
                        }}
                        // error={errors?.["roles"]?.message}
                        // selected={getValues("roles")}
                        // fieldName={"roles"}
                        // className={classes.inputOverride}
                      />
                    </div>
                    <div className="form-group">
                      <label>Images</label>
                      <MultiSelectDropdown
                        isMulti={true}
                        key={"datasets"}
                        category={"Please select Images"}
                        data={dataSets}
                        handleChange={(selectedValue, action) => {
                          console.log("datasets", selectedValue);
                          //   setValue("roles", selectedValue);
                          //   methods.clearErrors("roles");
                        }}
                        // error={errors?.["roles"]?.message}
                        // selected={getValues("roles")}
                        // fieldName={"roles"}
                        // className={classes.inputOverride}
                      />
                    </div>
                    <div className="form-group">
                      <label>Queue</label>
                      <MultiSelectDropdown
                        isMulti={true}
                        key={"datasets"}
                        category={"Please select Queue"}
                        data={dataSets}
                        handleChange={(selectedValue, action) => {
                          console.log("datasets", selectedValue);
                          //   setValue("roles", selectedValue);
                          //   methods.clearErrors("roles");
                        }}
                        // error={errors?.["roles"]?.message}
                        // selected={getValues("roles")}
                        // fieldName={"roles"}
                        // className={classes.inputOverride}
                      />
                    </div>
                    <div className="form-group">
                      <label>Volume</label>
                      <MultiSelectDropdown
                        isMulti={true}
                        key={"datasets"}
                        category={"Please select Volume"}
                        data={dataSets}
                        handleChange={(selectedValue, action) => {
                          console.log("datasets", selectedValue);
                          //   setValue("roles", selectedValue);
                          //   methods.clearErrors("roles");
                        }}
                        // error={errors?.["roles"]?.message}
                        // selected={getValues("roles")}
                        // fieldName={"roles"}
                        // className={classes.inputOverride}
                      />
                    </div>
                    {/* <div className="form-group">
                      <button
                        type="button"
                        className="btn btn-block btn-success"
                      >
                        Start a Workspace
                      </button>
                    </div> */}
                    {/* </form> */}
                  </FormProvider>
                </div>
              </div>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      {/* /.content */}
    </div>
  );
};

export default Workspace;
