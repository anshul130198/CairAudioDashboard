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


const schema = yup.object().shape({
  name: yup.string().required('Organization Name is required'),
  slug: yup.string().required('Organization Slug is required'),
  email: yup.string().required('Organization Email is required').email('Invalid email format'),
  billing_email: yup.string().required('Organization Billing Email is required').email('Invalid email format'),
  description: yup.string().required('Description is required'),
});

const CreateOrganization = () => {
  const { register, reset, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(schema),
  });
  const [initialOrgData, setInitialOrgData] = useState({});
  const [isEdit, setIsEdit] = useState(window?.location?.pathname.includes('edit'))
  const param = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    reset();
    if (param?.id) {
      const fetchOrganization = async () => {
        try {
          const response = await apiCall({
            endpoint: `${API_ROUTES.ORGANIZATION}/${param.id}/`,
            method: API_METHODS.GET
          })
          setInitialOrgData(response);
          console.log(response, 'dattttttaaaa>>>>>>>>>>>>>>>')
          Object.keys(response).forEach(key => {
            if (key in response) {
              setValue(key, response[key]);
            }
          });
        } catch (error) {
          console.error('Error fetching organization:', error);
        }
      };

      fetchOrganization();
    }
  }, [param.id, setValue]);

  const onSubmit = async (data, e) => {
    console.log("dtaaaaaaaaa", data);
    const organizationId = param?.id;
    if (organizationId) {
      const changedFields = Object.keys(data).filter(key => data[key] !== initialOrgData[key]);
      const changedData = Object.fromEntries(changedFields.map(key => [key, data[key]]));
      console.log(changedFields, "changedFields", ">>>>>>>>>>>>>>>", "changedData", changedData);
      const response = await apiCall({
        endpoint: `${API_ROUTES.ORGANIZATION}/${organizationId}/edit`,
        method: API_METHODS.PUT,
        data: changedData
      });

      console.log("Response", response);
      if (response && response.id) {
        // e.target.reset();
        navigate(`../${AppRoutes.GET_ALL_ORGANIZATIONS}`);
      }
    } else {
      try {
        const response = await apiCall({
          endpoint: API_ROUTES.CREATE_ORGANIZATION,
          method: 'POST',
          data
        });
        console.log("Response", response);
        if (response && response.id) {
          e.target.reset();
        }

      } catch (error) {
        console.error('Error creating organization:', error);
      }
    }

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
                  <h4 className="text-center">{!isEdit && param?.id ? 'View Organization' : param?.id ? 'Edit Organization' : 'Create New Organization'}<br /><br /></h4>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                      <label htmlFor="organizationName">Organization Name</label>
                      <InputField
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Enter Organization Name"
                        register={register}
                        error={errors.name}
                        readOnly={!isEdit && param?.id}
                      />
                      {errors.name && <span className="text-danger">{errors.name.message}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="organizationSlug">Organization Slug</label>
                      <InputField
                        type="text"
                        className="form-control"
                        name="slug"
                        placeholder="Enter Organization Slug"
                        register={register}
                        error={errors.slug}
                        readOnly={!isEdit && param?.id}
                      />
                      {errors.slug && <span className="text-danger">{errors.slug.message}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="organizationEmail">Organization Email</label>
                      <InputField
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="Enter Organization Email"
                        register={register}
                        error={errors.email}
                        readOnly={!isEdit && param?.id}
                      />
                      {errors.email && <span className="text-danger">{errors.email.message}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="organizationBillingEmail">Organization Billing Email</label>
                      <InputField
                        type="text"
                        className="form-control"
                        name="billing_email"
                        placeholder="Enter Billing Email"
                        register={register}
                        error={errors.billing_email}
                        readOnly={!isEdit && param?.id}
                      />
                      {errors.billing_email && <span className="text-danger">{errors.billing_email.message}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="description">Description</label>
                      <InputField
                        type="text"
                        className="form-control"
                        name="description"
                        placeholder="Enter Description"
                        register={register}
                        error={errors.description}
                        readOnly={!isEdit && param?.id}
                      />
                      {errors.description && <span className="text-danger">{errors.description.message}</span>}
                    </div>
                    <div className="form-group">
                      <button type="submit" disabled={!isEdit && param?.id} className="btn btn-block btn-success">{param?.id ? 'Save' : 'Create'}</button>
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

export default CreateOrganization;
