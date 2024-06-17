import React from 'react';
import { useLanguageContext } from '../providers/LanguageProvider';

const CircleCheck = () => {
  const { language, changeLanguage, lang } = useLanguageContext();
  return (
    <div className="circle">
      <div className="checkmark"></div>
      <span className="verify-text">
        {
          lang.pages.upload_inspection_report_view_reports.table.verified_text[
            language
          ]
        }
      </span>
    </div>
  );
};

export default CircleCheck;
