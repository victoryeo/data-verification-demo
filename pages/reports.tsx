import React, { useState } from 'react';
import { Navbar } from 'libs/ui/src';
import { useGetFilesQuery } from 'database';
import { toast } from 'react-hot-toast';
import { copyToClipboard } from 'libs/utils/src/lib/copy-to-clip-board';
import { useLanguageContext } from 'libs/ui/src/lib/providers/LanguageProvider';
import moment from 'moment';
import Link from 'next/link';
import { getSession } from 'next-auth/react';
import { Modal } from 'react-bootstrap';
import CircleCheck from 'libs/ui/src/lib/component/CircleCheck';

const Page = () => {
  const { data, loading } = useGetFilesQuery({ fetchPolicy: 'network-only' });
  const { language, changeLanguage, lang } = useLanguageContext();
  const handleDownload = async (name: string) => {
    // await fetch('/api/download', {
    //   method: 'POST',
    //   body: JSON.stringify({ blobName: name }),
    // });

    const response = await fetch('/api/download', {
      method: 'POST',
      body: JSON.stringify({ blobName: name }),
    });

    if (response.ok) {
      const data = await response.json();

      const link = document.createElement('a');
      link.href = data.downloadUrl;
      link.download = name;
      link.click();
    } else {
      console.error('Error fetching download URL');
    }
  };

  const copyTextOnClipBoard = (text: string, type: string) => {
    copyToClipboard(text);
    toast.success(`${lang.toasts.copied[language]}`);
  };

  // Pagination

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Change records per page
  const handleRecordsPerPageChange = (e: any) => {
    const newRecordsPerPage = parseInt(e.target.value);
    setRecordsPerPage(newRecordsPerPage);
    setCurrentPage(1);
  };

  const previousPage = () => {
    currentPage > 1 && setCurrentPage(currentPage - 1);
  };
  const nextPage = () => {
    currentPage < Math.ceil(data?.Files.length! / recordsPerPage) &&
      setCurrentPage(currentPage + 1);
  };

  // Filter (date)

  const [filter, setFilter] = useState('');
  const [verified, setVerified] = useState('-1');
  const [fileName, setFileName] = useState('');
  const filterDataByDate = (
    data: any,
    filter: string,
    verified: string,
    fileName: string
  ) => {
    const today = new Date();
    const filteredData = data?.filter((item: any) => {
      const createdAt = new Date(item?.created_at);
      const createdAtDateString = new Date(item?.created_at).toDateString();
      const today = new Date();
      const todayDateString = new Date().toDateString();
      const yesterday = new Date(today);
      yesterday.setDate(today.getDate() - 1);
      const yesterdayDateString = yesterday.toDateString();

      //@ts-ignore
      const timeDiff = today - createdAt;
      if (filter === 'today') {
        return todayDateString === createdAtDateString;
      }
      if (filter === 'yesterday') {
        return yesterdayDateString === createdAtDateString;
      }
      if (filter === 'past10') {
        return timeDiff < 864000000; // 10 days in milliseconds
      }
      if (filter === 'past30') {
        return timeDiff < 2592000000; // 30 days in milliseconds
      }
      if (verified === '1') {
        return item?.is_match === true;
      }
      if (verified === '0') {
        return item?.is_match === false;
      }
      if (fileName !== '') {
        return item?.cid.includes(fileName);
      }
      return true; // Return all data for other cases
    });
    return filteredData;
  };

  const getTableData = (data: any) => {
    if (
      (filter === '' || filter === 'all') &&
      verified === '-1' &&
      fileName === ''
    ) {
      return data?.slice(indexOfFirstRecord, indexOfLastRecord);
    } else {
      return filterDataByDate(data, filter, verified, fileName)?.slice(
        indexOfFirstRecord,
        indexOfLastRecord
      );
    }
  };

  const currentRecords = getTableData(data?.Files) || [];

  const cutAndAddEllipsis = (inputString: string, length: number) => {
    if (inputString.length <= length) {
      return inputString;
    } else {
      const mid = Math.floor(inputString.length / 2);
      const start = mid - Math.floor(length / 2);
      const end = mid + Math.ceil(length / 2);

      const result =
        inputString.slice(0, start) + '...' + inputString.slice(end);

      return result;
    }
  };
  const paginationLength = Math.ceil(data?.Files.length! / recordsPerPage);

  return (
    <>
      <div className="container-fluid">
        <Navbar />
        <div className="section">
          <h1>
            {lang.pages.upload_inspection_report_view_reports.heading[language]}
          </h1>
          <div className="filterArea">
            <div className="totalReport">
              <label htmlFor="">
                {
                  lang.pages.upload_inspection_report_view_reports.counter_title
                    .total[language]
                }
                :
              </label>
              <span>
                {data?.Files.length}{' '}
                {
                  lang.pages.upload_inspection_report_view_reports.counter_title
                    .reports[language]
                }
              </span>
            </div>
            <div className="filterRight">
              <div className="dateFilter">
                <select
                  value={filter}
                  onChange={(e) => {
                    setFilter(e.target.value);
                    setVerified('-1');
                    setFileName('');
                  }}
                >
                  <option value="">
                    {
                      lang.pages.upload_inspection_report_view_reports.filter
                        .date.heading[language]
                    }
                  </option>
                  <option value="all" className="filter-option">
                    {
                      lang.pages.upload_inspection_report_view_reports.filter
                        .date.all[language]
                    }
                  </option>
                  <option value="today" className="filter-option">
                    {
                      lang.pages.upload_inspection_report_view_reports.filter
                        .date.today[language]
                    }
                  </option>
                  <option value="yesterday" className="filter-option">
                    {
                      lang.pages.upload_inspection_report_view_reports.filter
                        .date.yesterday[language]
                    }
                  </option>
                  <option value="past10" className="filter-option">
                    {
                      lang.pages.upload_inspection_report_view_reports.filter
                        .date.days_10[language]
                    }
                  </option>
                  <option value="past30" className="filter-option">
                    {
                      lang.pages.upload_inspection_report_view_reports.filter
                        .date.days_30[language]
                    }
                  </option>
                </select>
              </div>
              <div className="dateFilter">
                <select
                  value={verified}
                  onChange={(e) => {
                    setFilter('');
                    setVerified(e.target.value);
                    setFileName('');
                  }}
                >
                  <option value="-1">
                    {
                      lang.pages.upload_inspection_report_view_reports.filter
                        .status.heading[language]
                    }
                  </option>
                  <option value="1">
                    {
                      lang.pages.upload_inspection_report_view_reports.filter
                        .status.verified[language]
                    }
                  </option>
                  <option value="0">
                    {
                      lang.pages.upload_inspection_report_view_reports.filter
                        .status.not_verified[language]
                    }
                  </option>
                </select>
              </div>
              <div className="searchFilter">
                <input
                  type="text"
                  placeholder={
                    lang.pages.upload_inspection_report_view_reports.filter
                      .search[language]
                  }
                  value={fileName}
                  onChange={(e) => {
                    setFilter('');
                    setVerified('-1');
                    setFileName(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="report-content table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <td>
                    {
                      lang.pages.upload_inspection_report_view_reports.table
                        .col1[language]
                    }
                  </td>
                  <td>
                    {
                      lang.pages.upload_inspection_report_view_reports.table
                        .col2[language]
                    }
                  </td>
                  <td>
                    {
                      lang.pages.upload_inspection_report_view_reports.table
                        .col3[language]
                    }
                  </td>
                  <td>
                    {
                      lang.pages.upload_inspection_report_view_reports.table
                        .col4[language]
                    }
                  </td>
                  <td>
                    {
                      lang.pages.upload_inspection_report_view_reports.table
                        .col5[language]
                    }
                  </td>
                  <td>
                    {
                      lang.pages.upload_inspection_report_view_reports.table
                        .col6[language]
                    }
                  </td>
                  <td>
                    {
                      lang.pages.upload_inspection_report_view_reports.table
                        .col7[language]
                    }
                  </td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {currentRecords?.map((details: any, i: number) => {
                  return (
                    <tr key={i}>
                      <td>
                        <span className="hashtxt">{details?.tx_hash}</span>{' '}
                        <button
                          className="copybtn"
                          onClick={() =>
                            copyTextOnClipBoard(details?.tx_hash, 'tx')
                          }
                        >
                          <img src="/copy.svg" alt="copy" />
                        </button>
                      </td>
                      <td>
                        <span className="hashtxt">{details?.counterID}</span>
                        <button
                          className="copybtn"
                          onClick={() =>
                            copyTextOnClipBoard(details?.counterID, 'ct')
                          }
                        >
                          <img src="/copy.svg" alt="copy" />
                        </button>
                      </td>
                      <td>{cutAndAddEllipsis(details?.cid, 30)}</td>
                      <td>
                        {moment(details?.created_at).format(
                          'ddd, DD MMM YYYY - h:mm:ss A'
                        )}
                      </td>
                      <td>
                        {(Number(details?.file_size) / (1024 * 1024)).toFixed(
                          3
                        )}{' '}
                        MB
                      </td>
                      <td>
                        {details?.is_verificationFailed ? (
                          <span className="failed-note">
                            <span>
                              {
                                lang.pages
                                  .verify_inspection_report_viewDataMatchReports
                                  .table.verify_status_error[language]
                              }
                            </span>
                            {/* <img
                          src="/infoIcon.svg"
                          alt="info"
                          title="The file contains an error, and the Data Report does not match. Kindly download the backup file and conduct a data comparison."
                        /> */}
                            <span className="info-icon">
                              <span className="error-tooltip">
                                <label className="tool-info">
                                  <img src="error.svg" alt="error" />
                                  <p>
                                    {
                                      lang.pages
                                        .verify_inspection_report_viewDataMatchReports
                                        .table.tooltip2[language]
                                    }
                                  </p>
                                </label>
                              </span>
                            </span>
                          </span>
                        ) : details?.is_match ? (
                          <span className="success-note">
                            {
                              lang.pages
                                .verify_inspection_report_viewDataMatchReports
                                .table.verify_status_successful[language]
                            }
                          </span>
                        ) : (
                          <span className="failed-note">
                            {
                              lang.pages
                                .verify_inspection_report_viewDataMatchReports
                                .table.verify_status_not_verify[language]
                            }
                          </span>
                        )}
                      </td>
                      <td>
                        <button
                          className="downlaod-btn"
                          onClick={async () => {
                            toast.promise(handleDownload(details?.cid), {
                              loading: `${lang.toasts.download.process[language]}`,
                              success: `${lang.toasts.download.done[language]}`,
                              error: `${lang.toasts.download.error[language]}`,
                            });
                          }}
                        >
                          <img src="/download.svg" alt="download" />
                        </button>
                      </td>
                      <td className="verified">
                        {!details.is_match ? (
                          <Link href="/verify">
                            <button className="verify-btn">
                              {
                                lang.pages.upload_inspection_report_view_reports
                                  .table?.verify_report_btn[language]
                              }
                            </button>
                          </Link>
                        ) : (
                          <CircleCheck />
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {data && data?.Files?.length > 10 && (
            <div className="pagging-area">
              {/* toolbar */}
              <div className="toolbar">
                <label htmlFor="">
                  {
                    lang.pages.upload_inspection_report_view_reports.pagination[
                      language
                    ]
                  }
                </label>
                <div className="tooldrop">
                  <select
                    value={recordsPerPage}
                    onChange={handleRecordsPerPageChange}
                  >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                  </select>
                </div>
                <span>
                  {' '}
                  {
                    lang.pages.upload_inspection_report_view_reports.of[
                      language
                    ]
                  }{' '}
                  {data?.Files.length}
                </span>
              </div>
              {/* pagging info */}
              <div className="pagging-list">
                <div
                  className={`leftaction ${
                    currentPage === 1 ? 'disable-pointer' : ''
                  }`}
                  onClick={previousPage}
                >
                  {' '}
                  {currentPage === 1 ? (
                    <img src="/left-arrow-inactive.svg" alt="" />
                  ) : (
                    <img src="/left-arrow-active.svg" alt="" />
                  )}
                </div>
                <ul className="pagging-count">
                  {Array.from({
                    length: paginationLength,
                  }).map((_, index) => (
                    <li
                      className={`${
                        currentPage === index + 1 ? 'activePagging' : ''
                      }`}
                      key={index}
                      onClick={() => paginate(index + 1)}
                    >
                      {index + 1}
                    </li>
                  ))}
                </ul>
                <div
                  className={`rightaction ${
                    currentPage === paginationLength ? 'disable-pointer' : ''
                  }`}
                  onClick={nextPage}
                >
                  {currentPage === paginationLength ? (
                    <img src="/right-arrow-inactive.svg" alt="" />
                  ) : (
                    <img src="/right-arrow-active.svg" alt="" />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Modal show={loading} className="popup-area popup-area-loader">
        {/* <img src="/spinner-unscreen.gif" alt="" /> */}
        <div className="loader"></div>
      </Modal>
    </>
  );
};

export default Page;

export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);
  // console.log('from server', session);
  if (!session) {
    return {
      redirect: {
        destination: '/login',
      },
    };
  }
  return {
    props: { session },
  };
};
