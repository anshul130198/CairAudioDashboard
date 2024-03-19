import { yupResolver } from '@hookform/resolvers/yup';
// import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Organization Name is required'),
  slug: yup.string().required('Organization Slug is required'),
  email: yup.string().required('Organization Email is required').email('Invalid email format'),
  billing_email: yup.string().required('Organization Billing Email is required').email('Invalid email format'),
  description: yup.string().required('Description is required'),
});

const CreateOrganization = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data); // You can handle form submission logic here
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
                  <h4 className="text-center">Create New Organization<br /><br /></h4>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                      <label htmlFor="organizationName">Organization Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="organizationName"
                        placeholder="Enter Organization Name"
                        {...register("name")}
                      />
                      {errors.name && <span className="text-danger">{errors.name.message}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="organizationSlug">Organization Slug</label>
                      <input
                        type="text"
                        className="form-control"
                        id="organizationSlug"
                        placeholder="Enter Organization Slug"
                        {...register("slug")}
                      />
                      {errors.slug && <span className="text-danger">{errors.slug.message}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="organizationEmail">Organization Email</label>
                      <input
                        type="text"
                        className="form-control"
                        id="organizationEmail"
                        placeholder="Enter Organization Email"
                        {...register("email")}
                      />
                      {errors.email && <span className="text-danger">{errors.email.message}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="organizationBillingEmail">Organization Billing Email</label>
                      <input
                        type="text"
                        className="form-control"
                        id="organizationBillingEmail"
                        placeholder="Enter Organization Billing Email"
                        {...register("billing_email")}
                      />
                      {errors.billing_email && <span className="text-danger">{errors.billing_email.message}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="description">Description</label>
                      <input
                        type="text"
                        className="form-control"
                        id="description"
                        placeholder="Enter Description"
                        {...register("description")}
                      />
                      {errors.description && <span className="text-danger">{errors.description.message}</span>}
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-block btn-success">Create</button>
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
