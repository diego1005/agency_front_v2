/* eslint-disable no-shadow */
import {useContext, useEffect, useState} from 'react'
import {useSearchParams} from 'react-router-dom'
import {useSnackbar} from 'notistack'

import appContext from '../context/AppContext'

import useGetIndividualContracts, {
  useDeleteIndividualContract,
  useGetIndividualContractByCode,
  useGetIndividualContractByDocument,
  useGetIndividualContractByLastname,
  useGetIndividualContractList,
  useNewImplements,
  usePutIndividualContract,
} from './useIndividualContracts'

const useIndividualContractsComponents = () => {
  const {bottom, handleScroll} = useContext(appContext)

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)
  const [activeData, setActiveData] = useState({})
  const [field, setField] = useState('apellido')
  const [code, setCode] = useState(null)
  const [constractsList, setContractsList] = useState(null)
  const [document, setDocument] = useState(null)
  const [apellido, setApellido] = useState(null)
  const [all, setAll] = useState(null)

  const resetValues = {
    cod_contrato: '',
    valor_contrato: '',
    pagos: '',
    recargos_pagos_segundo_vencimiento: '',
    estado: '',
    nuevo_valor: '',
  }

  const [searchParams] = useSearchParams()
  const list = searchParams.get('list')
  const generalContractCode = searchParams.get('code')

  useEffect(() => {
    if (!generalContractCode) return
    setCode(generalContractCode)
  }, [generalContractCode])

  const {enqueueSnackbar} = useSnackbar()

  const handleOpenDeleteDialog = () => setOpenDeleteDialog(true)
  const handleCloseDeleteDialog = () => setOpenDeleteDialog(false)

  const onSuccess = (res) => {
    let code

    if (res.length > 0) {
      code = 'success'
    } else {
      code = 'warning'
    }
    enqueueSnackbar(`Contratos Individuales recuperados: ${res.length}`, {
      variant: code,
      autoHideDuration: 3000,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left',
      },
    })
    handleScroll(bottom)
  }

  const onError = (error) => {
    enqueueSnackbar(error.response.data.msg, {
      variant: 'error',
      autoHideDuration: 3000,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left',
      },
    })
    handleScroll(bottom)
  }

  const {data: dataByCode = [], isFetching: isFetchingByCode} = useGetIndividualContractByCode(
    code,
    onSuccess,
    onError
  )

  const {data: dataByList = [], isFetching: isFetchingList} = useGetIndividualContractList(
    constractsList,
    onSuccess,
    onError
  )

  const {data: dataByDocument = [], isFetching: isFetchingDocument} =
    useGetIndividualContractByDocument(document, onSuccess, onError)

  const {data: dataByLastname = [], isFetching: isFetchingLastname} =
    useGetIndividualContractByLastname(apellido, onSuccess, onError)

  const {data: allData = [], isFetching: isFetchingAll} = useGetIndividualContracts(
    all,
    onSuccess,
    onError
  )
  const {mutate: newImplements, isLoading: isLoadingImplements} = useNewImplements()
  const {mutate: putIndividualContract, isLoading: isLoadingPut} = usePutIndividualContract()
  const {mutate: deleteIndividualContract} = useDeleteIndividualContract()

  const handleDelete = (id) => {
    deleteIndividualContract(id)
    setActiveData({})
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()

    if (field === 'apellido') {
      setAll(null)
      setDocument(null)
      setCode(null)
      setApellido(e.target.elements.query.value)
    }
    if (field === 'codigo') {
      setAll(null)
      setDocument(null)
      setApellido(null)
      setCode(e.target.elements.query.value)
    }
    if (field === 'documento') {
      setAll(null)
      setCode(null)
      setApellido(null)
      setDocument(e.target.elements.query.value)
    }
    e.target.elements.query.value = ''
  }

  return {
    activeData,
    allData,
    dataArray: [...allData, ...dataByCode, ...dataByDocument, ...dataByLastname, ...dataByList],
    isLoading: isLoadingImplements || isLoadingPut,
    dataByCode,
    field,
    handleCloseDeleteDialog,
    handleDelete,
    handleOpenDeleteDialog,
    handleSearchSubmit,
    isFetching:
      isFetchingAll ||
      isFetchingByCode ||
      isFetchingDocument ||
      isFetchingLastname ||
      isFetchingList,
    code,
    openDeleteDialog,
    putIndividualContract,
    resetValues,
    setActiveData,
    setAll,
    setField,
    setCode,
    newImplements,
    list,
    setContractsList,
    setDocument,
    setApellido,
  }
}

export default useIndividualContractsComponents
