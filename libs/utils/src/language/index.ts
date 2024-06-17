const localizationData = {
  lang: {
    navbar: {
      title1: {
        en: 'Reports',
        jp: 'レポート',
      },
      title2: {
        en: 'Data Match Reports',
        jp: 'データ一致レポート',
      },
      upload_inspection: {
        en: 'Upload Inspection Report',
        jp: '検査報告書のアップロード',
      },
      verify_inspection: {
        en: 'Verify Inspection Report',
        jp: '検査報告書の検証',
      },
      language: {
        lang1: {
          en: 'EN',
          jp: 'EN',
        },
        lang2: {
          en: 'JP',
          jp: 'JP',
        },
      },
      logout: {
        en: 'LOGOUT',
        jp: 'ログアウト',
      },
    },
    footer1: {
      title: {
        en: 'UPLOAD FILES',
        jp: 'ファイルをアップロードする',
      },
      description: {
        en: 'Upload Files For Inspection Report Verification',
        jp: '検査報告書検証用ファイルのアップロード',
      },
      button: {
        en: 'Submit',
        jp: '提出する',
      },
    },
    footer2: {
      title: {
        en: 'ADD TRANSACTION HASH OR ID AND UPLOAD FILE',
        jp: 'トランザクションハッシュまたはIDを追加してファイルをアップロードします',
      },
      description: {
        en: 'To Match The Data',
        jp: 'データを一致させるには',
      },
      button: {
        en: 'Match Data',
        jp: '試合データ',
      },
    },
    pages: {
      login: {
        heading: {
          en: 'SIGN IN',
          jp: 'サインイン',
        },
        email_title: {
          en: 'Email',
          jp: 'Eメール',
        },
        password_title: {
          en: 'Enter Your Password',
          jp: 'パスワード',
        },
        button: {
          en: 'Sign In',
          jp: 'サインイン',
        },
        company_label: {
          en: 'Powered by',
          jp: '搭載',
        },
      },
      upload_inspection_report: {
        heading: {
          en: 'UPLOAD INSPECTION REPORT',
          jp: '検査報告書のアップロード',
        },
        button: {
          en: 'Upload Your Reports Here',
          jp: 'ここにレポートをアップロードしてください',
        },
        description1: {
          en: 'or drag and drop here',
          jp: 'またはここにドラッグアンドドロップします',
        },
        description2: {
          en: 'Accepted File Type : Add CSV or Zip',
          jp: '受け入れられるファイルの種類 : CSV または ZIP を追加',
        },
        description3: {
          en: 'File size will be less then 1 MB',
          jp: 'ファイルサイズは1MB未満になります',
        },
        uploading: {
          en: 'FILES',
          jp: 'ファイル:',
        },
        upload: {
          en: 'UPLOAD',
          jp: 'アップロード',
        },
        number_of_files: {
          en: 'files added',
          jp: 'ファイルが追加されました',
        },
      },
      upload_inspection_report_view_reports: {
        pagination: {
          en: 'Reports per page',
          jp: 'ページごとのレポート',
        },
        of: {
          en: 'of',
          jp: 'の',
        },
        heading: {
          en: 'REPORTS',
          jp: 'レポート',
        },
        counter_title: {
          total: {
            en: 'Total',
            jp: '合計',
          },
          reports: {
            en: 'Reports',
            jp: 'レポート',
          },
        },
        filter: {
          date: {
            heading: {
              en: 'Filter by date',
              jp: '日付でフィルタリングする',
            },
            all: {
              en: 'All',
              jp: '全て',
            },
            today: {
              en: 'Today',
              jp: '今日',
            },
            yesterday: {
              en: 'Yesterday',
              jp: '昨日',
            },
            days_10: {
              en: 'Last 10 days',
              jp: '過去 10 日間',
            },
            days_30: {
              en: 'Last 30 days',
              jp: '過去 30 日間',
            },
          },
          status: {
            heading: {
              en: 'Filter by Status',
              jp: 'ステータスによるフィルター',
            },
            verified: {
              en: 'Verified',
              jp: '確認済み',
            },
            not_verified: {
              en: 'Not Verified',
              jp: '検証されていない',
            },
          },
          search: {
            en: 'Search by file name',
            jp: 'ファイル名で検索する',
          },
        },
        table: {
          verified_text: {
            en: 'Verified',
            jp: '確認済み',
          },
          title: {
            en: '',
            jp: '',
          },
          col1: {
            en: 'TRANSACTION HASH',
            jp: 'トランザクションハッシュ',
          },
          col2: {
            en: 'TRANSACTION ID',
            jp: 'トランザクションID',
          },
          col3: {
            en: 'FILE NAME',
            jp: 'ファイル名',
          },
          col4: {
            en: 'UPLOADED DATE & TIME',
            jp: 'アップロード日時',
          },
          col5: {
            en: 'FILE SIZE',
            jp: 'ファイルサイズ',
          },
          col6: {
            en: 'STATUS',
            jp: '状態',
          },
          col7: {
            en: 'DOWNLOAD',
            jp: 'ダウンロード',
          },
          tooltip1: {
            en: 'The file contains an error. Please review the files and upload them again.',
            jp: 'ファイルにエラーが含まれています。 ファイルを確認して再度アップロードしてください。',
          },
          upload_status_successful: {
            en: 'File Uploaded Successfully',
            jp: 'ファイルが正常にアップロードされました',
          },
          upload_status_error: {
            en: 'Files Uploaded But Contains Error',
            jp: 'ファイルをアップロードしたがエラーが含まれる',
          },
          verify_report_btn: {
            en: 'Verify Report',
            jp: 'レポートの検証',
          },
          upload_again: {
            en: 'Upload Again',
            jp: '再度アップロードする',
          },
        },
      },
      verify_inspection_report_uploadData: {
        heading: {
          en: 'VERIFY INSPECTION REPORT',
          jp: '検査報告書の検証',
        },
        description: {
          en: 'Compare the latest data with the data stored on the blockchain.',
          jp: '最新のデータとブロックチェーンに保存されているデータを比較します。',
        },
        hash_title: {
          en: 'TRANSACTION HASH',
          jp: 'トランザクションハッシュ',
        },
        or_text: {
          en: 'Or',
          jp: 'または',
        },
        hash_id: {
          en: 'TRANSACTION ID',
          jp: 'トランザクションID',
        },
        button: {
          en: 'Upload File',
          jp: 'ファイルをアップロードする',
        },
        description1: {
          en: 'or drag and drop here',
          jp: 'またはここにドラッグアンドドロップします',
        },
        description2: {
          en: 'Accepted File Type : CSV Only',
          jp: '受け入れられるファイルの種類 : CSV のみ',
        },
      },

      verify_inspection_report_viewDataMatchReports: {
        pagination: {
          en: 'Reports per page',
          jp: 'ページごとのレポート',
        },
        of: {
          en: 'of',
          jp: 'の',
        },
        heading: {
          en: 'DATA MATCH REPORTS',
          jp: 'データ一致レポート',
        },

        filter: {
          date: {
            heading: {
              en: 'Filter by date',
              jp: '日付でフィルタリングする',
            },
            all: {
              en: 'All',
              jp: '全て',
            },
            today: {
              en: 'Today',
              jp: '今日',
            },
            yesterday: {
              en: 'Yesterday',
              jp: '昨日',
            },
            days_10: {
              en: 'Last 10 days',
              jp: '過去 10 日間',
            },
            days_30: {
              en: 'Last 30 days',
              jp: '過去 30 日間',
            },
          },
          status: {
            heading: {
              en: 'Filter by Status',
              jp: 'ステータスによるフィルター',
            },
            verified: {
              en: 'Verified',
              jp: '確認済み',
            },
            not_verified: {
              en: 'Not Verified',
              jp: '検証されていない',
            },
          },
          search: {
            en: 'Search by file name',
            jp: 'ファイル名で検索する',
          },
        },
        counter_title: {
          total: {
            en: 'Total',
            jp: '合計',
          },
          reports: {
            en: 'Reports',
            jp: 'レポート',
          },
        },
        table: {
          title: {
            en: '',
            jp: '',
          },
          col1: {
            en: 'TRANSACTION HASH',
            jp: 'トランザクションハッシュ',
          },
          col2: {
            en: 'TRANSACTION ID',
            jp: 'トランザクションID',
          },
          col3: {
            en: 'FILE NAME',
            jp: 'ファイル名',
          },
          col4: {
            en: 'UPLOADED DATE & TIME',
            jp: 'アップロード日時',
          },
          col5: {
            en: 'FILE SIZE',
            jp: 'ファイルサイズ',
          },
          col6_1: {
            en: 'DATA MATCH',
            jp: 'データマッチ',
          },
          col6_2: {
            en: ' STATUS REPORT',
            jp: ' ステータスレポート',
          },
          col7_1: {
            en: 'DOWNLOAD',
            jp: 'ダウンロード',
          },
          col7_2: {
            en: ' ORIGINAL',
            jp: 'オリジナル',
          },
          col7_3: {
            en: ' BACK UP FILE',
            jp: ' ファイルのバックアップ',
          },
          col8: {
            en: 'DOWNLOAD',
            jp: 'ダウンロード',
          },
          verify_report_btn: {
            en: 'Verify Report',
            jp: 'レポートの検証',
          },
          match_data_btn: {
            en: 'Match Data',
            jp: '試合データ',
          },
          tooltip2: {
            en: 'The file contains an error, and the Data Report does not match. Kindly download the backup file and conduct a data comparison.',
            jp: 'ファイルにエラーが含まれており、データ レポートが一致しません。 バックアップファイルをダウンロードしてデータ比較を行ってください。',
          },
          verify_status_successful: {
            en: 'Verification Successful',
            jp: '検証成功',
          },
          verify_status_error: {
            en: 'Verification Failed',
            jp: '検証に失敗しました',
          },
          verify_status_not_verify: {
            en: 'Not Verified',
            jp: '検証されていない',
          },
        },
      },
    },
    notifications: {
      verify_inspection_report_successful_msg: {
        title: {
          en: 'Verification Successful !',
          jp: '検証成功！',
        },
        description: {
          en: 'Both Files Have Matching Values.',
          jp: '両方のファイルの値が一致しています。',
        },
        button: {
          en: 'View Data Match Report',
          jp: 'データ一致レポートの表示',
        },
      },
      verify_inspection_report_failed_msg: {
        title: {
          en: 'Verification Failed !',
          jp: '検証に失敗しました!',
        },
        description: {
          en: 'The Values In Both Files Do Not Match.',
          jp: '両方のファイルの値が一致しません。',
        },
        button1: {
          en: 'Download Backup Report',
          jp: 'バックアップレポートのダウンロード',
        },
        button2: {
          en: 'Match Data Again',
          jp: 'データを再度照合する',
        },
      },
      upload_inspection_report: {
        description: {
          en: 'Congratulations, the data has been successfully transferred on the blockchain!',
          jp: 'おめでとうございます。データがブロックチェーン上に正常に転送されました。',
        },
        button: {
          en: 'View Reports',
          jp: 'レポートを見る',
        },
      },
    },
    toasts: {
      copied: {
        en: 'Copied',
        jp: 'コピーされました',
      },
      download: {
        process: { en: 'Download in progress', jp: 'ダウンロード中です' },
        done: { en: 'Download Successful', jp: 'ダウンロードに成功しました' },
        error: { en: 'Unable to download', jp: 'ダウンロードできない' },
      },
      invalid_hash: {
        en: 'Invalid Transaction Hash',
        jp: '無効なトランザクション ハッシュ',
      },
      invalid_id: {
        en: 'Invalid Transaction Id',
        jp: '無効なトランザクションID',
      },

      upload: {
        exceed_1MB: {
          en: 'file is exceed 1 MB',
          jp: 'ファイルが1MBを超えています',
        },
        already_uploaded: {
          en: 'already uploaded',
          jp: 'すでにアップロードされています',
        },
      },
    },
  },
};

export default localizationData;
