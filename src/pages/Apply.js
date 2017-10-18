import React, { Component } from 'react';

const renderNewStudentForm = () => {
  return (
    <div>
      <h3>Student Application</h3>
      <div
        className="pipedriveWebForms"
        data-pd-webforms="https://pipedrivewebforms.com/form/6ac7f54a829b720f215a51e2b2066ca71464438"
      />
    </div>
  );
};

export default class Apply extends Component {
  render() {
    const { form_type } = this.props.match.params;

    const volunteersForm = {
      URL: 'https://cyf.typeform.com/to/ah1IJ8'
    };
    const mentorsForm = {
      URL: 'https://cyf.typeform.com/to/Cx23Wk'
    };
    // Temporarily removing student typeform to use pipedrive form
    // const StudentForm = {
    //   URL: "https://cyf.typeform.com/to/DmL54Y"
    // }

    let formURL = '';
    switch (form_type) {
      case 'volunteer':
        formURL = volunteersForm.URL;
        break;
      case 'mentor':
        formURL = mentorsForm.URL;
        break;
      // case "student":
      //   formURL = StudentForm.URL
      //   break;
      default:
        break;
    }

    return (
      <div className="section-container top-section">
        <div className="container">
          {form_type === 'student' ? (
            renderNewStudentForm()
          ) : (
            <iframe
              id="typeform-full"
              title="typeform-full"
              width="100%"
              height="100%"
              frameBorder="0"
              src={formURL}
            />
          )}
        </div>
      </div>
    );
  }
}
