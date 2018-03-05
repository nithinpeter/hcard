import React, { Component } from 'react';

import './UploadAvatar.scss';

class UploadAvatar extends Component {
  inputRef;

  componentDidMount() {
    if (this.inputRef) {
      this.inputRef.onchange = this.handleImageUpload;
    }
  }

  render() {
    return (
      <label
        className={`upload-avatar ${this.props.className}`}
        role="button"
        tabIndex={0}
      >
        <input type="file" ref={ref => (this.inputRef = ref)} required />
        <span>Upload Avatar</span>
      </label>
    );
  }

  handleImageUpload = () => {
    if (this.inputRef.files && this.inputRef.files[0]) {
      const reader = new FileReader();
      reader.onload = e => {
        this.props.onChange('avatar', e.target.result);
      };

      reader.readAsDataURL(this.inputRef.files[0]);
    }
  };
}

export default UploadAvatar;
