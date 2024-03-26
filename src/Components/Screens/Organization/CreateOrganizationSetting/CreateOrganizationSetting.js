import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { apiCall } from '../../../../utils/apiCall';
import { API_METHODS, API_ROUTES, AppRoutes } from '../../../../Constants/constants';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import InputField from '../../../InputField/InputField';
import MultiSelectDropdown from '../../../MultiSelectDropdown/MultiSelectDropdown';
import SelectField from '../../../SelectField/SelectField';


const schema = yup.object().shape({
    data_limit_mb: yup.number().required(' Data limit isrequired'),
    api_url: yup.string().required('Url is required'),
    max_datasets: yup.number().required('Max datasets is required'),
    max_projects: yup.number().required('max_projects Billing Email is required'),
    max_notebook_duration: yup.number().required('Max notebook duration is required'),
    max_experiment_duration: yup.number().required('Max Experiment duration is required'),
    max_deploy_duration: yup.number().required('Max Deploy duration is required'),
    data_scientist_max_amount: yup.number().required('Max amount duration is required'),
      restart_if_stuck: yup.boolean().required('Max Amount duration is required'),
    restart_after_minutes: yup.number().required('required'),
    debug_time: yup.number().required('required'),
    max_endpoint_duration: yup.number().required('required'),
    max_webapp_duration: yup.number().required('required'),
    install_dependencies: yup.boolean().required('required'),
    // email_on_error: yup.number().required('required'),
    // email_on_success: yup.number().required('required'),
    max_template_deploy_time: yup.number().required('required'),
    idle_time: yup.number().required('required'),
    // idle_enabled: yup.number().required('required'),
    organization: yup.number().required('required'),
});

const CreateOrganizationSetting = () => {
    const { register, reset, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(schema),
    });
    const [initialOrgData, setInitialOrgData] = useState({});
    const param = useParams();
    const navigate = useNavigate();
    const choiceData = [
        { label: "True", value: "true" },
        { label: "False", value: "false" },
    ];

    //   useEffect(() => {
    //    reset();
    //     if (param?.id) {
    //       const fetchOrganization = async () => {
    //         try {
    //           // const response = await API.getOrganization(param.id);
    //           const response = await apiCall({
    //             endpoint: `${API_ROUTES.ORGANIZATION}/${param.id}/`,
    //             method: API_METHODS.GET
    //           })
    //           setInitialOrgData(response);
    //           console.log(response, 'dattttttaaaa>>>>>>>>>>>>>>>')
    //           Object.keys(response).forEach(key => {
    //             if (key in response) {
    //               setValue(key, response[key]);
    //             }
    //           });
    //         } catch (error) {
    //           console.error('Error fetching organization:', error);
    //           // Handle error
    //         }
    //       };

    //       fetchOrganization();
    //     }
    //   }, [param.id, setValue]);

    const onSubmit = async (data, e) => {
        console.log("dtaaaaaaaaa", data);
        const organizationId = param?.id;
        // if (organizationId) {
        //   const changedFields = Object.keys(data).filter(key => data[key] !== initialOrgData[key]);
        //   const changedData = Object.fromEntries(changedFields.map(key => [key, data[key]]));
        //   console.log(changedFields,"changedFields",">>>>>>>>>>>>>>>","changedData",changedData);
        //   const response = await apiCall({
        //     endpoint: `${API_ROUTES.ORGANIZATION}/${organizationId}/edit`,
        //     method: API_METHODS.PUT,
        //     data: changedData
        //   });

        //   console.log("Response", response);
        //   if (response && response.id) {
        //     // e.target.reset();
        //     navigate(`../${AppRoutes.GET_ALL_ORGANIZATIONS}`);

        //     // toast.success('Organization updated successfully');
        //   }
        // } else {
        //   try {
        //     // const response = await API.createOrganization(data);
        //     const response = await apiCall({
        //       endpoint: API_ROUTES.CREATE_ORGANIZATION,
        //       method: 'POST',
        //       data
        //     });
        //     console.log("Response", response);
        //     if(response && response.id) {
        //       // toast.success('organization created successfully');
        //       e.target.reset();
        //     }

        //   } catch (error) {
        //     console.error('Error creating organization:', error);
        //   }
        // }

    };

    return (
        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-12">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Organization</a></li>
                                <li className="breadcrumb-item active">Add Organization</li>
                            </ol>
                            <h3 className="m-0 font-weight-bold clr-w pb10">Organization</h3>
                            <h5 className="clr-w min50">&nbsp;</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="mb-4 offset-xl-3 col-xl-5">
                            <div className="card minh445">
                                <div className="card-body">
                                    <h4 className="text-center">{param?.id ? 'Edit Organization' : 'Organization Setting'}<br /><br /></h4>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-group">
                                            <label>Disk Size</label>
                                            <InputField
                                                type="text"
                                                className="form-control"
                                                name="data_limit_mb"
                                                placeholder="Enter Data in mb"
                                                register={register}
                                                error={errors.data_limit_mb}
                                            />
                                            {errors.name && <span className="text-danger">{errors.data_limit_mb.message}</span>}
                                            {/* {errors.name &&  <ErrorText errorText={errors.name.message}/>} */}
                                        </div>
                                        <div className="form-group">
                                            <label>Url</label>
                                            <InputField
                                                type="text"
                                                className="form-control"
                                                name="api_url"
                                                placeholder="Enter Url"
                                                register={register}
                                                error={errors.api_url}
                                            />

                                            {errors.api_url && <span className="text-danger">{errors.api_url.message}</span>}
                                        </div>
                                        <div className="form-group">
                                            <label >Maximum datasets</label>
                                            <InputField
                                                type="text"
                                                className="form-control"
                                                name="max_datasets"
                                                placeholder="Enter Maximum datasets"
                                                register={register}
                                                error={errors.max_datasets}
                                            />
                                            {errors.max_datasets && <span className="text-danger">{errors.max_datasets.message}</span>}
                                        </div>

                                        <div className="form-group">
                                            <label >Maximum Projects</label>
                                            <InputField
                                                type="text"
                                                className="form-control"
                                                name="max_projects"
                                                placeholder="Maximum Projects"
                                                register={register}
                                                error={errors.max_projects}
                                            />
                                            {/* <input
                        type="text"
                        className="form-control"
                        id="organizationBillingEmail"
                        placeholder="Enter Organization Billing Email"
                        {...register("billing_email")}
                      /> */}
                                            {errors.max_projects && <span className="text-danger">{errors.max_projects.message}</span>}
                                        </div>
                                        <div className="form-group">
                                            <label >Max Notebook Duration</label>
                                            <InputField
                                                type="text"
                                                className="form-control"
                                                name="max_notebook_duration"
                                                placeholder="Max notebook duration"
                                                register={register}
                                                error={errors.max_notebook_duration}
                                            />
                                            {errors.max_notebook_duration && <span className="text-danger">{errors.max_notebook_duration.message}</span>}
                                        </div>
                                        <div className="form-group">
                                            <label >Max Experiment Duration</label>
                                            <InputField
                                                type="text"
                                                className="form-control"
                                                name="max_experiment_duration"
                                                placeholder="Max notebook duration"
                                                register={register}
                                                error={errors.max_experiment_duration}
                                            />
                                            {errors.max_experiment_duration && <span className="text-danger">{errors.max_experiment_duration.message}</span>}
                                        </div>
                                        <div className="form-group">
                                            <label >Maximum Deploy duration</label>
                                            <InputField
                                                type="text"
                                                className="form-control"
                                                name="max_deploy_duration"
                                                placeholder="Max notebook duration"
                                                register={register}
                                                error={errors.max_deploy_duration}
                                            />
                                            {errors.max_deploy_duration && <span className="text-danger">{errors.max_deploy_duration.message}</span>}
                                        </div>

                                        <div className="form-group">
                                            <label >Maximum Deploy duration</label>
                                            <InputField
                                                type="text"
                                                className="form-control"
                                                name="data_scientist_max_amount"
                                                placeholder="Data Scientist Max Amount"
                                                register={register}
                                                error={errors.data_scientist_max_amount}
                                            />
                                            {errors.data_scientist_max_amount && <span className="text-danger">{errors.data_scientist_max_amount.message}</span>}
                                        </div>

                                        <div className="form-group">

                                            <label>Restart if stuck</label>
                                            <SelectField
                                                name="restart_if_stuck"
                                                register={register}
                                                error={errors.restart_if_stuck}
                                                options={[
                                                    { label: "True", value: "true" },
                                                    { label: "False", value: "false" }
                                                ]}
                                                defaultValue="true" 
                                            />

                                            {/* <label> restart if stuck</label>
                      <MultiSelectDropdown
                        isMulti={true}
                        key={"stuck"}
                        data={choiceData}
                        handleChange={(selectedValue, action) => {
                          console.log("compute", selectedValue);
                          
                        }}
                      /> */}
                                            {/* {errors.restart_if_stuck && <span className="text-danger">{errors.restart_if_stuck.message}</span>} */}
                                        </div>
                                        <div className="form-group">
                                            <label >restart_after_minutes</label>
                                            <InputField
                                                type="text"
                                                className="form-control"
                                                name="restart_after_minutes"
                                                placeholder="Restart After Minutes"
                                                register={register}
                                                error={errors.restart_after_minutes}
                                            />
                                            {errors.restart_after_minutes && <span className="text-danger">{errors.restart_after_minutes.message}</span>}
                                        </div>

                                        <div className="form-group">
                                            <label >Debug time</label>
                                            <InputField
                                                type="text"
                                                className="form-control"
                                                name="debug_time"
                                                placeholder="Debug time"
                                                register={register}
                                                error={errors.debug_time}
                                            />
                                            {errors.debug_time && <span className="text-danger">{errors.debug_time.message}</span>}
                                        </div>

                                        <div className="form-group">
                                            <label >Endpoint Duration</label>
                                            <InputField
                                                type="text"
                                                className="form-control"
                                                name="max_endpoint_duration"
                                                placeholder="Max Endpoint Duration"
                                                register={register}
                                                error={errors.max_endpoint_duration}
                                            />
                                            {errors.max_endpoint_duration && <span className="text-danger">{errors.max_endpoint_duration.message}</span>}
                                        </div>

                                        <div className="form-group">
                                            <label >Endpoint Duration</label>
                                            <InputField
                                                type="text"
                                                className="form-control"
                                                name="max_webapp_duration"
                                                placeholder="max webapp duration"
                                                register={register}
                                                error={errors.max_webapp_duration}
                                            />
                                            {errors.max_webapp_duration && <span className="text-danger">{errors.max_webapp_duration.message}</span>}
                                        </div>

                                        <div className="form-group">
                                            <label >Install dependencies</label>
                                            <SelectField
                                                name="install_dependencies"
                                                register={register}
                                                error={errors.install_dependencies}
                                                options={[
                                                    { label: "True", value: "true" },
                                                    { label: "False", value: "false" }
                                                ]}
                                                defaultValue="true" 
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label >template deploy time</label>
                                            <InputField
                                                type="text"
                                                className="form-control"
                                                name="max_template_deploy_time"
                                                placeholder="max templated eploy time"
                                                register={register}
                                                error={errors.max_template_deploy_time}
                                            />
                                            {errors.max_template_deploy_time && <span className="text-danger">{errors.max_template_deploy_time.message}</span>}
                                        </div>

                                        <div className="form-group">
                                            <label >email on error</label>
                                            <select
                                                className="form-control select2"
                                                style={{ width: "100%" }}
                                            >
                                                <option selected="selected">True</option>
                                                <option>False</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label >email on success</label>
                                            <select
                                                className="form-control select2"
                                                style={{ width: "100%" }}
                                            >
                                                <option selected="selected">True</option>
                                                <option>False</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label> Idle time</label>
                                            <InputField
                                                type="text"
                                                className="form-control"
                                                name="idle_time"
                                                placeholder="Idle time"
                                                register={register}
                                                error={errors.idle_time}
                                            />
                                            {errors.idle_time && <span className="text-danger">{errors.idle_time.message}</span>}
                                        </div>

                                        <div className="form-group">
                                            <label>Idle time</label>
                                            <InputField
                                                type="text"
                                                className="form-control"
                                                name="idle_time"
                                                placeholder="Idle time"
                                                register={register}
                                                error={errors.idle_time}
                                            />
                                            {errors.idle_time && <span className="text-danger">{errors.idle_time.message}</span>}
                                        </div>
                                        <div className="form-group">
                                            <label >idle_enabled</label>
                                            <SelectField
                                                name="idle_enabled"
                                                register={register}
                                                error={errors.idle_enabled}
                                                options={[
                                                    { label: "True", value: "true" },
                                                    { label: "False", value: "false" }
                                                ]}
                                                defaultValue="true" 
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label> Organization</label>
                                            <InputField
                                                type="text"
                                                className="form-control"
                                                name="organization"
                                                placeholder="Organization"
                                                register={register}
                                                error={errors.organization}
                                            />
                                            {errors.organization && <span className="text-danger">{errors.organization.message}</span>}
                                        </div>

                                        <div className="form-group">
                                            <button type="submit" className="btn btn-block btn-success">{param?.id ? 'Save' : 'Create'}</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateOrganizationSetting;
