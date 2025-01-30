'use client'

import React, { useState } from 'react';
import style from "@/style/modules/contact.module.scss";
import classNames from 'classnames';

class ContactFormData {
  name: string = '';
  email: string = '';
  message: string = '';
}

type ContactFormStatus = 'idle' | 'submitting' | 'success';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(new ContactFormData());
  const [status, setStatus] = useState<ContactFormStatus>('idle');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    console.log(formData);
    setStatus('success');
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function getButtonText() {
    switch (status) {
      case 'idle':
        return 'Send'
      case 'submitting':
        return 'Sending...'
      default:
        return 'Successfully Sent'
    }
  }

  return (
    <form className={style.contactForm} onSubmit={handleSubmit}>
      <div className={classNames(style.formSection, 'clickable')}>
        <input
          id={'name'}
          name={'name'}
          type={'text'}
          value={formData.name}
          onChange={handleChange}
          placeholder={''}
          required
        />
        <label htmlFor={'name'}>Name</label>
      </div>
      <div className={classNames(style.formSection, 'clickable')}>
        <input
          id={'email'}
          name={'email'}
          type={'email'}
          value={formData.email}
          onChange={handleChange}
          placeholder={''}
          required
        />
        <label htmlFor={'email'}>Email</label>
      </div>
      <div className={classNames(style.formSection, 'clickable')}>
        <textarea
          id={'message'}
          name={'message'}
          rows={10}
          value={formData.message}
          onChange={handleChange}
          placeholder={''}
          required
        />
        <label htmlFor={'message'}>Message</label>
      </div>
      <button className={'clickable'} type={'submit'} disabled={status !== 'idle'}>
        <h4>
          {getButtonText()}
        </h4>
      </button>
    </form>
  )
}