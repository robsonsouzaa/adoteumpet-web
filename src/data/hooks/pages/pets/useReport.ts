import { useEffect, useState } from "react";
import { Report } from "../../../@types/report";
import { ApiService } from "../../../services/ApiService";

export function useReport() {

  const [reportList, setReportList] = useState<Report[]>([]);


  useEffect(() => {
    ApiService.get('/adocoes').then((response) => {
      setReportList(response.data)
    })
  }, [])

  return {
    reportList
  }
}