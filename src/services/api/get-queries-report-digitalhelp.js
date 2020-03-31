import axios from '../axios/axios';
import headers from '../axios/headers';

const getDigitalHelpQueryReport = () => {
  axios.get('/queries/report/digitalhelp/',{headers:{
    ...headers,
    'Content-Disposition': 'attachment; filename="Query.xlsx"',
    'Content-Type': 'application/ms-excel',
  },
  responseType:'blob'
  }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'DigitalHelpqueries-report.xlsx');
    document.body.appendChild(link);
    link.click();
  });
  
};

export default getDigitalHelpQueryReport;