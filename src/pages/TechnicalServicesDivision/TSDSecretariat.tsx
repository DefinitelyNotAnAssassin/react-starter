import Menu from "@/components/ui/menu";
import BaseTemplate from "../BaseTemplate";



export default function TSDSecretariat () {  


    return ( 
        <BaseTemplate>
            <Menu department = 'TECHNICAL_SERVICES' />
            <>
  <title>TSD/BAC Secretariat</title>
  {/*Parent Div*/}
  <div className="h-screen w-full">
    {/*Children Div*/}
    <div className="h-screen w-full">
      {/*Header*/}
     
      {/*TSD/BAC SECRETARIAT (Content)*/}
      <div className="h-[94%] w-full">
        {/*TSD/BAC SECRETARIAT (Title)*/}
        <div className="h-[7%] w-full flex justify-between">
          {/*TITLE*/}
          <div className="h-full w-[60%] flex justify-end items-center">
            <h1 className="text-3xl text-white font-semibold">TSD/BAC SECRETARIAT</h1>
          </div>
          {/*Person Info*/}
          <div className="h-full w-[20%] flex flex-col bg-[#dfdfdf]">
            <h1 className="text-base ml-3 font-semibold text-gray-700">
              <i>FULL NAME</i>
            </h1>
            <h1 className="text-base ml-3 font-semibold text-gray-700">
              <i>DIVISION ASSIGNED</i>
            </h1>
          </div>
        </div>
        {/*User Inputs Div*/}
        <div className="h-[93%] w-full flex flex-col justify-start items-center bg-[#94b9e8]">
          {/*Mostly text inputs div*/}
          <div className="h-[65%] w-[98%] flex items-end space-x-2">
            {/*PROJECT inputs*/}
            <div className="h-[98%] w-[30%] font-semibold flex flex-col space-y-1">
              {/*Project No.*/}
              <div className="">
                <form
                  className="text-xs flex justify-between"
                  action=""
                  id="form1"
                >
                  <label htmlFor="projectNo">PROJECT NO.</label>
                  <input
                    className="w-[65%] indent-1 border border-gray-500"
                    type="text"
                    id="projectNo"
                    name="projectNo"
                  />
                </form>
              </div>
              {/*Conso No.*/}
              <div className="text-xs flex justify-between">
                <label htmlFor="consoNo">CONSO NO.</label>
                <input
                  className="w-[65%] indent-1 border border-gray-500"
                  type="text"
                  id="consoNo"
                  name="consoNo"
                  form="form1"
                />
              </div>
              {/*Project No.*/}
              <div className="h-[11%] text-xs flex">
                <div className="h-full w-[35%] space-y-2">
                  <label htmlFor="projectTitle">PROJECT TITLE</label>
                  <input
                    className="w-[70%] indent-1 border border-gray-500"
                    type="text"
                    id=""
                    name=""
                    form="form1"
                  />
                </div>
                <div className="h-full w-[65%]">
                  <input
                    className="h-full w-full indent-1 border border-gray-500"
                    type="text"
                    id="projectTitle"
                    name="projectTitle"
                    form="form1"
                  />
                </div>
              </div>
              {/*Requesting Office*/}
              <div className="h-[7%] text-xs flex justify-between">
                <label htmlFor="reqOffice">
                  REQUESTING <br />
                  OFFICES/S
                </label>
                <input
                  className="w-[65%] indent-1 border border-gray-500"
                  type="text"
                  id="reqOffice"
                  name="reqOffice"
                  form="form1"
                />
              </div>
              {/*ABC*/}
              <div className="text-xs flex justify-between">
                <label htmlFor="abc">ABC</label>
                <input
                  className="w-[65%] indent-1 border border-gray-500"
                  type="text"
                  id="abc"
                  name="abc"
                  form="form1"
                />
              </div>
              {/*Mode/PPE*/}
              <div className="text-xs flex justify-between">
                <label htmlFor="mode/ppe">(MOOE / PPE)</label>
                <input
                  className="w-[65%] indent-1 border border-gray-500"
                  type="text"
                  id="mode/ppe"
                  name="mode/ppe"
                  form="form1"
                />
              </div>
              {/*Category*/}
              <div className="text-xs flex justify-between">
                <label htmlFor="category_inputs">CATEGORY</label>
                <input
                  className="w-[65%] indent-1 border border-gray-500"
                  type="text"
                  id="category_inputs"
                  name="category_inputs"
                  form="form1"
                />
              </div>
              {/*MultiInput Div*/}
              <div className="h-[8%] w-full flex">
                {/*Mode*/}
                <div className="text-xs h-full w-[30%] flex flex-col justify-center items-center ml-1">
                  <label htmlFor="mode_inputs">Mode</label>
                  <input
                    className="w-full indent-1 border border-gray-500"
                    type="text"
                    id="mode_inputs"
                    name="mode_inputs"
                    form="form1"
                  />
                </div>
                {/*Type*/}
                <div className="text-xs h-full w-[12%] flex flex-col justify-center items-center ml-1">
                  <label htmlFor="type_inputs">Type</label>
                  <input
                    className="w-full indent-1 border border-gray-500"
                    type="text"
                    id="type_inputs"
                    name="type_inputs"
                    form="form1"
                  />
                </div>
                {/*Sequence*/}
                <div className="text-xs h-full w-[18%] flex flex-col justify-center items-center ml-1">
                  <label htmlFor="sequence_inputs">Sequence</label>
                  <input
                    className="w-full indent-1 border border-gray-500"
                    type="text"
                    id="sequence_inputs"
                    name="sequence_inputs"
                    form="form1"
                  />
                </div>
                {/*Delivery Period*/}
                <div className="text-xs h-full w-[40%] flex flex-col justify-center items-center ml-1">
                  <label htmlFor="delivery_inputs">Delivery Period</label>
                  <input
                    className="w-full indent-1 border border-gray-500"
                    type="text"
                    id="delivery_inputs"
                    name="delivery_inputs"
                    form="form1"
                  />
                </div>
              </div>
              {/*Status*/}
              <div className="h-[8%] text-xs flex justify-between">
                <label htmlFor="category_inputs">STATUS</label>
                <div className="h-full w-[80%] flex justify-end">
                  <button
                    className="h-[50%] w-6 text-center bg-gray-200 border border-black mr-1"
                    style={{ fontSize: 10 }}
                  >
                    Rub
                  </button>
                  <input
                    className="w-[90%] indent-1 border border-gray-500"
                    type="text"
                    id="category_inputs"
                    name="category_inputs"
                    form="form1"
                  />
                </div>
              </div>
              {/*STATUS TRAIL*/}
              <h1 className="text-sm font-bold">STATUS TRAIL</h1>
              <div className="h-[40%] w-full flex justify-end bg-slate-50">
                <div className="h-full w-full">
                  <table id="" className="h-full w-full border-collapse">
                    <thead className="h-[10%] text-xs bg-[#EBEBEC]">
                      <tr>
                        <th className="w-[10%] bg-[#b9b9b9] border border-gray-700">
                          ID
                        </th>
                        <th className="w-[30%] bg-[#bae2c5] border border-gray-700">
                          PROJECT NUMBER
                        </th>
                        <th className="w-[30%] bg-[#9676a5] border border-gray-700">
                          STATUS
                        </th>
                        <th className="w-[15%] bg-[#a7ccca] border border-gray-700">
                          USER
                        </th>
                        <th className="w-[25%] bg-[#872323] border border-gray-700">
                          DATE
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-slate-50">
                      <tr>
                        <td
                          id=""
                          className="bg-[#b9b9b9] border border-gray-600"
                        />
                        <td
                          id=""
                          className="bg-[#bae2c5] border border-gray-600"
                        />
                        <td
                          id=""
                          className="bg-[#9676a5] border border-gray-600"
                        />
                        <td
                          id=""
                          className="bg-[#a7ccca] border border-gray-600"
                        />
                        <td
                          id=""
                          className="bg-[#872323] border border-gray-600"
                        />
                      </tr>
                      <tr>
                        <td
                          id=""
                          className="bg-[#b9b9b9] border border-gray-600"
                        />
                        <td
                          id=""
                          className="bg-[#bae2c5] border border-gray-600"
                        />
                        <td
                          id=""
                          className="bg-[#9676a5] border border-gray-600"
                        />
                        <td
                          id=""
                          className="bg-[#a7ccca] border border-gray-600"
                        />
                        <td
                          id=""
                          className="bg-[#872323] border border-gray-600"
                        />
                      </tr>
                      <tr>
                        <td
                          id=""
                          className="bg-[#b9b9b9] border border-gray-600"
                        />
                        <td
                          id=""
                          className="bg-[#bae2c5] border border-gray-600"
                        />
                        <td
                          id=""
                          className="bg-[#9676a5] border border-gray-600"
                        />
                        <td
                          id=""
                          className="bg-[#a7ccca] border border-gray-600"
                        />
                        <td
                          id=""
                          className="bg-[#872323] border border-gray-600"
                        />
                      </tr>
                      <tr>
                        <td
                          id=""
                          className="bg-[#b9b9b9] border border-gray-600"
                        />
                        <td
                          id=""
                          className="bg-[#bae2c5] border border-gray-600"
                        />
                        <td
                          id=""
                          className="bg-[#9676a5] border border-gray-600"
                        />
                        <td
                          id=""
                          className="bg-[#a7ccca] border border-gray-600"
                        />
                        <td
                          id=""
                          className="bg-[#872323] border border-gray-600"
                        />
                      </tr>
                      <tr>
                        <td
                          id=""
                          className="bg-[#b9b9b9] border border-gray-600"
                        />
                        <td
                          id=""
                          className="bg-[#bae2c5] border border-gray-600"
                        />
                        <td
                          id=""
                          className="bg-[#9676a5] border border-gray-600"
                        />
                        <td
                          id=""
                          className="bg-[#a7ccca] border border-gray-600"
                        />
                        <td
                          id=""
                          className="bg-[#872323] border border-gray-600"
                        />
                      </tr>
                      <tr>
                        <td
                          id=""
                          className="bg-[#b9b9b9] border border-gray-600"
                        />
                        <td
                          id=""
                          className="bg-[#bae2c5] border border-gray-600"
                        />
                        <td
                          id=""
                          className="bg-[#9676a5] border border-gray-600"
                        />
                        <td
                          id=""
                          className="bg-[#a7ccca] border border-gray-600"
                        />
                        <td
                          id=""
                          className="bg-[#872323] border border-gray-600"
                        />
                      </tr>
                      <tr>
                        <td
                          id=""
                          className="bg-[#b9b9b9] border border-gray-600"
                        />
                        <td
                          id=""
                          className="bg-[#bae2c5] border border-gray-600"
                        />
                        <td
                          id=""
                          className="bg-[#9676a5] border border-gray-600"
                        />
                        <td
                          id=""
                          className="bg-[#a7ccca] border border-gray-600"
                        />
                        <td
                          id=""
                          className="bg-[#872323] border border-gray-600"
                        />
                      </tr>
                      <tr>
                        <td
                          id=""
                          className="bg-[#b9b9b9] border border-gray-600"
                        />
                        <td
                          id=""
                          className="bg-[#bae2c5] border border-gray-600"
                        />
                        <td
                          id=""
                          className="bg-[#9676a5] border border-gray-600"
                        />
                        <td
                          id=""
                          className="bg-[#a7ccca] border border-gray-600"
                        />
                        <td
                          id=""
                          className="bg-[#872323] border border-gray-600"
                        />
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/*Tracking number inputs*/}
            <div className="h-[98%] w-[18%] flex flex-col items-center">
              {/*Search by tracking number input*/}
              <div className="h-[12%] w-full flex items-center flex-col">
                <div className="h-[65%] w-full flex flex-col">
                  <form
                    className="text-xs h-full w-full flex flex-col justify-center items-center"
                    action=""
                  >
                    <label className="text-xs font-bold" htmlFor="">
                      SEARCH BY TRACKING NUMBER{" "}
                    </label>
                    <input
                      className="h-1/2 w-[95%] indent-1 border border-gray-500"
                      type="text"
                      id=""
                      name=""
                      form="form1"
                    />
                  </form>
                </div>
                <div className="h-[22%] w-[95%] flex justify-end">
                  <button
                    className="h-full w-1/4 text-xs text-center bg-[#7ca3d3]"
                    style={{ fontSize: 10 }}
                  >
                    Refresh
                  </button>
                </div>
              </div>
              {/*Div for base no. and date*/}
              <div className="h-[5%] w-[50%] flex justify-start items-end text-xs space-x-10 font-semibold ml-28">
                <h1>Reso No.</h1>
                <h1>Date</h1>
              </div>
              {/*Prior No.*/}
              <div className="h-[5%] w-[95%] font-semibold">
                <form
                  className="text-xs flex justify-between"
                  action=""
                  id="form2"
                >
                  <label htmlFor="priorNo" style={{ fontSize: 10 }}>
                    Prior No.
                  </label>
                  <div className="h-full w-[55%] flex justify-end space-x-1">
                    <input
                      className="w-[45%] indent-1 border border-gray-500"
                      type="text"
                      id=""
                      name=""
                    />
                    <input
                      className="w-[50%] indent-1 border border-gray-500"
                      type="text"
                      id=""
                      name=""
                    />
                  </div>
                </form>
              </div>
              {/*Award No.*/}
              <div className="h-[5%] w-[95%] font-semibold text-xs flex justify-between my-0.5">
                <label htmlFor="" style={{ fontSize: 10 }}>
                  Reso on Award No.
                </label>
                <div className="h-full w-[55%] flex justify-end space-x-1">
                  <input
                    className="w-[45%] indent-1 border border-gray-500"
                    type="text"
                    id=""
                    name=""
                  />
                  <input
                    className="w-[50%] indent-1 border border-gray-500"
                    type="text"
                    id=""
                    name=""
                    form="form2"
                  />
                </div>
              </div>
              {/*Cancellation No.*/}
              <div className="h-[5%] w-[95%] font-semibold text-xs flex justify-between">
                <label htmlFor="" style={{ fontSize: 9 }}>
                  Reso on Cancellation No.
                </label>
                <div className="h-full w-[55%] flex justify-end space-x-1">
                  <input
                    className="w-[45%] indent-1 border border-gray-500"
                    type="text"
                    id=""
                    name=""
                  />
                  <input
                    className="w-[50%] indent-1 border border-gray-500"
                    type="text"
                    id=""
                    name=""
                    form="form2"
                  />
                </div>
              </div>
              {/*Extension No.*/}
              <div className="h-[5%] w-[95%] font-semibold text-xs flex justify-between  my-0.5">
                <label htmlFor="" style={{ fontSize: 10 }}>
                  Reso on Extension No.
                </label>
                <div className="h-full w-[55%] flex justify-end space-x-1">
                  <input
                    className="w-[45%] indent-1 border border-gray-500"
                    type="text"
                    id=""
                    name=""
                  />
                  <input
                    className="w-[50%] indent-1 border border-gray-500"
                    type="text"
                    id=""
                    name=""
                    form="form2"
                  />
                </div>
              </div>
              {/*Failure No.*/}
              <div className="h-[5%] w-[95%] font-semibold text-xs flex justify-between ">
                <label htmlFor="" style={{ fontSize: 10 }}>
                  Reso on Failure No.
                </label>
                <div className="h-full w-[55%] flex justify-end space-x-1">
                  <input
                    className="w-[45%] indent-1 border border-gray-500"
                    type="text"
                    id=""
                    name=""
                  />
                  <input
                    className="w-[50%] indent-1 border border-gray-500"
                    type="text"
                    id=""
                    name=""
                    form="form2"
                  />
                </div>
              </div>
              {/*Bid Bulletin No.*/}
              <div className="h-[5%] w-[95%] font-semibold text-xs flex justify-between  my-0.5">
                <label htmlFor="" style={{ fontSize: 10 }}>
                  Bid Bulletin No.
                </label>
                <div className="h-full w-[55%] flex justify-end space-x-1">
                  <input
                    className="w-[45%] indent-1 border border-gray-500"
                    type="text"
                    id=""
                    name=""
                  />
                  <input
                    className="w-[50%] indent-1 border border-gray-500"
                    type="text"
                    id=""
                    name=""
                    form="form2"
                  />
                </div>
              </div>
              {/*PrePresc & ETC Div*/}
              <div className="h-[32%] w-[95%] font-semibold">
                <div className="text-xs flex justify-between">
                  <label htmlFor="" style={{ fontSize: 10 }}>
                    Pre-Proc Date
                  </label>
                  <input
                    className="w-[45%] indent-1 border border-gray-500"
                    type="text"
                    id=""
                    name=""
                    form="form2"
                  />
                </div>
                <div className="text-xs flex justify-between">
                  <label htmlFor="" style={{ fontSize: 10 }}>
                    Philgeps Posting Date
                  </label>
                  <input
                    className="w-[45%] indent-1 border border-gray-500"
                    type="text"
                    id=""
                    name=""
                    form="form2"
                  />
                </div>
                <div className="text-xs flex justify-between">
                  <label htmlFor="" style={{ fontSize: 10 }}>
                    RFQ Opening Date
                  </label>
                  <input
                    className="w-[45%] indent-1 border border-gray-500"
                    type="text"
                    id=""
                    name=""
                    form="form2"
                  />
                </div>
                <div className="text-xs flex justify-between">
                  <label htmlFor="" style={{ fontSize: 10 }}>
                    Pre-Bid Date
                  </label>
                  <input
                    className="w-[45%] indent-1 border border-gray-500"
                    type="text"
                    id=""
                    name=""
                    form="form2"
                  />
                </div>
                <div className="text-xs flex justify-between">
                  <label htmlFor="" style={{ fontSize: 10 }}>
                    Bidding Date
                  </label>
                  <input
                    className="w-[45%] indent-1 border border-gray-500"
                    type="text"
                    id=""
                    name=""
                    form="form2"
                  />
                </div>
                <div className="text-xs flex justify-between">
                  <label htmlFor="" style={{ fontSize: 10 }}>
                    Bid Evaluation Date
                  </label>
                  <input
                    className="w-[45%] indent-1 border border-gray-500"
                    type="text"
                    id=""
                    name=""
                    form="form2"
                  />
                </div>
                <div className="text-xs flex justify-between">
                  <label htmlFor="" style={{ fontSize: 10 }}>
                    Post-Qua Date
                  </label>
                  <input
                    className="w-[45%] indent-1 border border-gray-500"
                    type="text"
                    id=""
                    name=""
                    form="form2"
                  />
                </div>
              </div>
              <div
                className="h-[18%] w-[95%] font-semibold flex flex-col items-center space-y-0.5"
                style={{ fontSize: 10 }}
              >
                <button className="h-1/4 w-[90%] bg-[#6f3198] border border-black">
                  <h1>PRINT OBR TRANSMITTAL (LINE ITEMS)</h1>
                </button>
                <button className="h-1/4 w-[90%] bg-[#77c0d4] border border-black">
                  <h1>PRINT PO TRANSMITTAL (LINE ITEMS)</h1>
                </button>
                <button className="h-1/4 w-[90%] bg-[#fce6d4] border border-black">
                  <h1>PRINT CAF TRANMITTAL (LINE ITEMS)</h1>
                </button>
                <button className="h-1/4 w-[90%] bg-[#4bacc6] border border-black">
                  <h1>PRINT DOCKET TRANSMITTAL (LINE ITEMS)</h1>
                </button>
              </div>
            </div>
            {/*Purchase Order inputs*/}
            <div className="h-[98%] w-[34%] flex flex-col">
              {/*Container of 2 Divs*/}
              <div className="h-[95%] w-full flex">
                {/*Div for purchase order*/}
                <div className="h-[95%] w-1/2 flex flex-col justify-center items-center">
                  <div className="h-[5%] w-full">
                    <h1 className="text-sm text-red-600 underline decoration-red-600 font-bold">
                      PURCHASE ORDER
                    </h1>
                  </div>
                  <div className="h-[50%] w-full flex flex-col items-center space-y-0.5 border border-gray-500 shadow-inner shadow-xl mt-1">
                    <form
                      className="w-[95%] text-xs flex items-center justify-between"
                      action=""
                      id="form3"
                    >
                      <label htmlFor="" style={{ fontSize: 10 }}>
                        PO Number
                      </label>
                      <input
                        className="w-[35%] indent-1 border bg-[#fff200] border-gray-500"
                        type="text"
                        id=""
                        name=""
                      />
                    </form>
                    <div className="w-[95%] text-xs flex items-center justify-between">
                      <label htmlFor="" style={{ fontSize: 10 }}>
                        PO Amount
                      </label>
                      <input
                        className="w-[35%] indent-1 border bg-[#fff200] border-gray-500"
                        type="text"
                        id=""
                        name=""
                        form="form3"
                      />
                    </div>
                    <div className="h-[25%] w-[95%] text-xs flex items-start justify-between">
                      <label htmlFor="" style={{ fontSize: 10 }}>
                        Bidder Name
                      </label>
                      <div className="h-full w-[35%]">
                        <input
                          className="h-full w-full indent-1 border bg-[#fff200] border-gray-500"
                          type="text"
                          id=""
                          name=""
                          form="form3"
                        />
                      </div>
                    </div>
                    <div className="w-[95%] text-xs flex items-center justify-between">
                      <label htmlFor="" style={{ fontSize: 10 }}>
                        PO Date
                      </label>
                      <input
                        className="w-[35%] indent-1 border bg-[#fff200] border-gray-500"
                        type="text"
                        id=""
                        name=""
                        form="form3"
                      />
                    </div>
                    <div className="w-[95%] text-xs flex items-center justify-between">
                      <label htmlFor="" style={{ fontSize: 10 }}>
                        Start Date
                      </label>
                      <input
                        className="w-[35%] indent-1 border bg-[#fff200] border-gray-500"
                        type="text"
                        id=""
                        name=""
                        form="form3"
                      />
                    </div>
                    <div className="w-[95%] text-xs flex items-center justify-between">
                      <label htmlFor="" style={{ fontSize: 10 }}>
                        End Date
                      </label>
                      <input
                        className="w-[35%] indent-1 border bg-[#fff200] border-gray-500"
                        type="text"
                        id=""
                        name=""
                        form="form3"
                      />
                    </div>
                    <div className="w-[95%] text-xs flex items-center justify-between">
                      <label htmlFor="" style={{ fontSize: 10 }}>
                        NOA Published Date
                      </label>
                      <input
                        className="w-[35%] indent-1 border bg-[#fff200] border-gray-500"
                        type="text"
                        id=""
                        name=""
                        form="form3"
                      />
                    </div>
                    <div className="w-[95%] text-xs flex items-center justify-between">
                      <label htmlFor="" style={{ fontSize: 10 }}>
                        NOA Released Date
                      </label>
                      <input
                        className="w-[35%] indent-1 border bg-[#fff200] border-gray-500"
                        type="text"
                        id=""
                        name=""
                        form="form3"
                      />
                    </div>
                  </div>
                  <div className="h-[5%] w-full">
                    <h1 className="text-sm text-red-600 underline decoration-red-600 font-bold">
                      OBLIGATION REQUEST
                    </h1>
                  </div>
                  <div className="h-[33%] w-full flex flex-col items-center space-y-0.5 border border-gray-500 shadow-inner shadow-xl mt-1">
                    <form
                      className="w-[95%] text-xs flex items-center justify-between"
                      action=""
                      id="form4"
                    >
                      <label htmlFor="" style={{ fontSize: 10 }}>
                        Transmittal No.
                      </label>
                      <input
                        className="w-[35%] indent-1 border bg-[#cddcaf] border-gray-500"
                        type="text"
                        id=""
                        name=""
                      />
                    </form>
                    <div className="w-[95%] text-xs flex items-center justify-between">
                      <label htmlFor="" style={{ fontSize: 10 }}>
                        Date Rcvd (Budget)
                      </label>
                      <input
                        className="w-[35%] indent-1 border bg-[#cddcaf] border-gray-500"
                        type="text"
                        id=""
                        name=""
                        form="form4"
                      />
                    </div>
                    <div className="w-[95%] text-xs flex items-center justify-between">
                      <label htmlFor="" style={{ fontSize: 10 }}>
                        Date Rlsd (Budget)
                      </label>
                      <input
                        className="w-[35%] indent-1 border bg-[#cddcaf] border-gray-500"
                        type="text"
                        id=""
                        name=""
                        form="form4"
                      />
                    </div>
                    <div className="w-[95%] text-xs flex items-center justify-between">
                      <label htmlFor="" style={{ fontSize: 10 }}>
                        OBR Date
                      </label>
                      <input
                        className="w-[35%] indent-1 border bg-[#cddcaf] border-gray-500"
                        type="text"
                        id=""
                        name=""
                        form="form4"
                      />
                    </div>
                    <div className="w-[95%] text-xs flex items-center justify-between">
                      <label htmlFor="" style={{ fontSize: 10 }}>
                        OBR Number
                      </label>
                      <input
                        className="w-[35%] indent-1 border bg-[#cddcaf] border-gray-500"
                        type="text"
                        id=""
                        name=""
                        form="form4"
                      />
                    </div>
                    <div className="h-[15%] w-full flex justify-end items-end">
                      <button
                        className="h-[95%] w-[60%] text-xs text-center font-semibold bg-[#efd3d2] border border-black"
                        style={{ fontSize: 10 }}
                      >
                        PRINT OBR TRANSMITTAL
                      </button>
                    </div>
                  </div>
                  <div className="h-[4%] w-[80%] text-xs flex items-center justify-between mt-2">
                    <label
                      className="h-full w-[25%] font-semibold text-center bg-[#bfb2cf]"
                      htmlFor=""
                      style={{ fontSize: 10 }}
                    >
                      OBR
                    </label>
                    <input
                      className="w-[75%] indent-1 border bg-[#efd3d2] border-gray-500"
                      type="text"
                      id=""
                      name=""
                      form="form4"
                    />
                  </div>
                </div>
                {/*Div for certification*/}
                <div className="h-full w-1/2 flex flex-col items-center">
                  <div className="h-[5%] w-full flex items-center justify-center mt-2">
                    <h1
                      className="text-XS text-red-600 underline decoration-red-600 font-bold"
                      style={{ fontSize: 10 }}
                    >
                      CERTIFICATION OF AVAILABILITY OF FUNDS
                    </h1>
                  </div>
                  <div className="h-[30%] w-[90%] flex flex-col items-center space-y-0.5 border border-gray-500 shadow-inner shadow-xl mt-1">
                    <form
                      className="w-[95%] text-xs flex items-center justify-between"
                      action=""
                      id="form5"
                    >
                      <label htmlFor="" style={{ fontSize: 10 }}>
                        Transmittal No.
                      </label>
                      <input
                        className="w-[35%] indent-1 border bg-[#efd3d2] border-gray-500"
                        type="text"
                        id=""
                        name=""
                      />
                    </form>
                    <div className="w-[95%] text-xs flex items-center justify-between">
                      <label htmlFor="" style={{ fontSize: 10 }}>
                        Date Rcvd (CAD)
                      </label>
                      <input
                        className="w-[35%] indent-1 border bg-[#efd3d2] border-gray-500"
                        type="text"
                        id=""
                        name=""
                        form="form5"
                      />
                    </div>
                    <div className="w-[95%] text-xs flex items-center justify-between">
                      <label htmlFor="" style={{ fontSize: 10 }}>
                        Date Rlsd (CAD)
                      </label>
                      <input
                        className="w-[35%] indent-1 border bg-[#efd3d2] border-gray-500"
                        type="text"
                        id=""
                        name=""
                        form="form5"
                      />
                    </div>
                    <div className="w-[95%] text-xs flex items-center justify-between">
                      <label htmlFor="" style={{ fontSize: 10 }}>
                        CAF Date
                      </label>
                      <input
                        className="w-[35%] indent-1 border bg-[#efd3d2] border-gray-500"
                        type="text"
                        id=""
                        name=""
                        form="form5"
                      />
                    </div>
                    <div className="w-[95%] text-xs flex items-center justify-between">
                      <label htmlFor="" style={{ fontSize: 10 }}>
                        CAF Number
                      </label>
                      <input
                        className="w-[35%] indent-1 border bg-[#efd3d2] border-gray-500"
                        type="text"
                        id=""
                        name=""
                        form="form5"
                      />
                    </div>
                    <div className="h-[15%] w-full flex justify-end items-end">
                      <button
                        className="h-[95%] w-[60%] text-xs text-center font-semibold bg-[#efd3d2] border border-black"
                        style={{ fontSize: 10 }}
                      >
                        PRINT CAF TRANSMITIAL
                      </button>
                    </div>
                  </div>
                  <div className="h-[3%] w-[80%] text-xs flex items-center justify-between mt-2">
                    <label
                      className="h-full w-[25%] font-semibold text-center bg-[#bfb2cf]"
                      htmlFor=""
                      style={{ fontSize: 10 }}
                    >
                      CAF
                    </label>
                    <input
                      className="h-full w-[75%] indent-1 border bg-[#efd3d2] border-gray-500"
                      type="text"
                      id=""
                      name=""
                      form="form4"
                    />
                  </div>
                  <div className="h-[5%] w-full flex items-center justify-center mt-1">
                    <h1
                      className="text-XS text-red-600 underline decoration-red-600 font-bold"
                      style={{ fontSize: 10 }}
                    >
                      PO/CONTRACT TRANSMITTAL TO CMO
                    </h1>
                  </div>
                  <div className="h-[30%] w-[90%] flex flex-col items-center justify-center border border-gray-500 shadow-inner shadow-xl ">
                    <form
                      className="h-[80%] w-[85%] text-xs font-semibold flex flex-col"
                      action=""
                      id="form6"
                    >
                      <label htmlFor="" style={{ fontSize: 10 }}>
                        PO Transmittal No.
                      </label>
                      <input
                        className="h-[15%] w-[90%] indent-1 border bg-[#728eb1] border-gray-500 ml-4"
                        type="text"
                        id=""
                        name=""
                      />
                      <label htmlFor="" style={{ fontSize: 10 }}>
                        Date Transmitted to CMO
                      </label>
                      <input
                        className="h-[15%] w-[90%] indent-1 border bg-[#728eb1] border-gray-500 ml-4"
                        type="text"
                        id=""
                        name=""
                      />
                      <label htmlFor="" style={{ fontSize: 10 }}>
                        Date Received to CMO
                      </label>
                      <input
                        className="h-[15%] w-[90%] indent-1 border bg-[#728eb1] border-gray-500 ml-4"
                        type="text"
                        id=""
                        name=""
                      />
                    </form>
                    <button
                      className="h-[20%] w-[60%] text-xs text-center font-semibold bg-[#efd3d2] border border-black my-1"
                      style={{ fontSize: 10 }}
                    >
                      PRINT PO TRANSMITIAL
                    </button>
                  </div>
                  <div className="h-[3%] w-[80%] text-xs flex items-center justify-between mt-1">
                    <label
                      className="h-full w-[25%] font-semibold text-center bg-[#bfb2cf]"
                      htmlFor=""
                      style={{ fontSize: 10 }}
                    >
                      PO 2 CMO
                    </label>
                    <input
                      className="h-full w-[75%] indent-1 border bg-[#efd3d2] border-gray-500"
                      type="text"
                      id=""
                      name=""
                      form="form4"
                    />
                  </div>
                  <div className="w-full flex justify-start items-start">
                    <div className="h-full w-full ml-2">
                      <h1
                        className="text-XS text-red-600 underline decoration-red-600 font-bold my-0.5"
                        style={{ fontSize: 10 }}
                      >
                        COA Transmittal No.
                      </h1>
                    </div>
                  </div>
                  <div className="h-[4%] w-full flex justify-center items-center">
                    <input
                      className="h-full w-[80%] indent-1 border bg-[#c6d1de] border-gray-500"
                      type="text"
                      id=""
                      name=""
                      form="form6"
                    />
                  </div>
                  <button
                    className="h-[4%] w-[60%] text-xs text-center font-semibold bg-[#efd3d2] border border-black mt-0.5"
                    style={{ fontSize: 10 }}
                  >
                    PRINT TRANSMITIAL TO COA{" "}
                  </button>
                  <div className="h-[3%] w-[80%] text-xs flex items-center justify-between mt-1">
                    <label
                      className="h-full w-[25%] font-semibold text-center bg-[#bfb2cf]"
                      htmlFor=""
                      style={{ fontSize: 10 }}
                    >
                      COA
                    </label>
                    <input
                      className="h-full w-[75%] indent-1 border bg-[#efd3d2] border-gray-500"
                      type="text"
                      id=""
                      name=""
                      form="form4"
                    />
                  </div>
                </div>
              </div>
              <div
                className="h-[5%] w-full flex justify-between items-end text-xs text-center font-semibold"
                style={{ fontSize: 10 }}
              >
                <div className="h-[90%] w-[24%] bg-[#4df3e9]">
                  <h1>PRINT ROUTING SLIP</h1>
                </div>
                <div className="h-[90%] w-[24%] bg-[#4df3e9]">
                  <h1>CANCEL RECORD</h1>
                </div>
                <div className="h-[90%] w-[24%] bg-[#4df3e9]">
                  <h1>SAVE RECORD</h1>
                </div>
                <div className="h-[90%] w-[24%] bg-[#4df3e9]">
                  <h1>EXIT</h1>
                </div>
              </div>
            </div>
            {/*PO Contract Div*/}
            <div className="h-[98%] w-[18%] flex flex-col items-center">
              <div className="h-[5%] w-full flex items-center justify-center mt-2">
                <h1
                  className="text-XS text-red-600 underline decoration-red-600 font-bold"
                  style={{ fontSize: 10 }}
                >
                  PO/CONTRACT TRASMITTAL TO CAD
                </h1>
              </div>
              <div className="h-[26%] w-[90%] flex flex-col items-center justify-center border border-gray-500 shadow-inner shadow-xl ">
                <form
                  className="h-[80%] w-[85%] text-xs font-semibold flex flex-col"
                  action=""
                  id="form7"
                >
                  <label htmlFor="" style={{ fontSize: 10 }}>
                    PO Transmittal No.
                  </label>
                  <input
                    className="h-[15%] w-[90%] indent-1 border bg-[#a4d5e2] border-gray-500 ml-4"
                    type="text"
                    id=""
                    name=""
                  />
                  <label htmlFor="" style={{ fontSize: 10 }}>
                    Date Transmitted to CAD
                  </label>
                  <input
                    className="h-[15%] w-[90%] indent-1 border bg-[#a4d5e2] border-gray-500 ml-4"
                    type="text"
                    id=""
                    name=""
                  />
                  <label htmlFor="" style={{ fontSize: 10 }}>
                    Date Received to CAD
                  </label>
                  <input
                    className="h-[15%] w-[90%] indent-1 border bg-[#a4d5e2] border-gray-500 ml-4"
                    type="text"
                    id=""
                    name=""
                  />
                </form>
                <button
                  className="h-[20%] w-[60%] text-xs text-center font-semibold bg-[#efd3d2] border border-black my-1"
                  style={{ fontSize: 10 }}
                >
                  PRINT PO TRANSMITTAL
                </button>
              </div>
              <div className="h-[3%] w-[80%] text-xs flex items-center justify-between mt-1">
                <label
                  className="h-full w-[25%] font-semibold text-center bg-[#bfb2cf]"
                  htmlFor=""
                  style={{ fontSize: 10 }}
                >
                  POS 2 CAD
                </label>
                <input
                  className="h-full w-[75%] indent-1 border bg-[#efd3d2] border-gray-500"
                  type="text"
                  id=""
                  name=""
                  form="form4"
                />
              </div>
              <div className="h-[5%] w-full flex items-center justify-center mt-1">
                <h1
                  className="text-XS text-red-600 underline decoration-red-600 font-bold"
                  style={{ fontSize: 10 }}
                >
                  DOCKET TRASMITTAL TO CAD
                </h1>
              </div>
              <div className="h-[20%] w-[90%] flex flex-col items-center font-semibold space-y-1 border border-gray-500 shadow-inner shadow-xl mt-1">
                <form
                  className="w-[95%] text-xs flex items-center justify-between mt-2"
                  action=""
                  id="form8"
                >
                  <label htmlFor="" style={{ fontSize: 10 }}>
                    Transmittal No.
                  </label>
                  <input
                    className="w-[60%] indent-1 border bg-[#a7da4e] border-gray-500"
                    type="text"
                    id=""
                    name=""
                  />
                </form>
                <div className="w-[95%] text-xs flex items-center justify-between">
                  <label htmlFor="" style={{ fontSize: 10 }}>
                    Date Transmitted
                  </label>
                  <input
                    className="w-[60%] indent-1 border bg-[#a7da4e] border-gray-500"
                    type="text"
                    id=""
                    name=""
                    form="form8"
                  />
                </div>
                <button
                  className="h-[25%] w-[60%] text-xs text-center font-semibold bg-[#efd3d2] border border-black mt-3"
                  style={{ fontSize: 10 }}
                >
                  PRINT DOCKET TRANSMITIAL
                </button>
              </div>
              <div className="h-[3%] w-[80%] text-xs flex items-center justify-between mt-1">
                <label
                  className="h-full w-[25%] font-semibold text-center bg-[#bfb2cf]"
                  htmlFor=""
                  style={{ fontSize: 10 }}
                >
                  DOCKET
                </label>
                <input
                  className="h-full w-[75%] indent-1 border bg-[#efd3d2] border-gray-500"
                  type="text"
                  id=""
                  name=""
                  form="form4"
                />
              </div>
              <div className="h-[5%] w-full flex items-center justify-center mt-1">
                <h1
                  className="text-XS text-red-600 underline decoration-red-600 font-bold"
                  style={{ fontSize: 10 }}
                >
                  DOCKET TRASMITTAL TO END USER
                </h1>
              </div>
              <div className="h-[20%] w-[90%] flex flex-col items-center font-semibold space-y-1 border border-gray-500 shadow-inner shadow-xl mt-1">
                <form
                  className="w-[95%] text-xs flex items-center justify-between mt-2"
                  action=""
                  id="form8"
                >
                  <label htmlFor="" style={{ fontSize: 10 }}>
                    Transmittal No.
                  </label>
                  <input
                    className="w-[60%] indent-1 border bg-[#a7da4e] border-gray-500"
                    type="text"
                    id=""
                    name=""
                  />
                </form>
                <div className="w-[95%] text-xs flex items-center justify-between">
                  <label htmlFor="" style={{ fontSize: 10 }}>
                    Date Transmitted
                  </label>
                  <input
                    className="w-[60%] indent-1 border bg-[#a7da4e] border-gray-500"
                    type="text"
                    id=""
                    name=""
                    form="form8"
                  />
                </div>
                <button
                  className="h-[25%] w-[60%] text-xs text-center font-semibold bg-[#efd3d2] border border-black mt-3"
                  style={{ fontSize: 10 }}
                >
                  PRINT END USER TRANSMITTAL
                </button>
              </div>
              <div className="h-[3%] w-[80%] text-xs flex items-center justify-between mt-1">
                <label
                  className="h-full w-[25%] font-semibold text-center bg-[#bfb2cf]"
                  htmlFor=""
                  style={{ fontSize: 10 }}
                >
                  END USER
                </label>
                <input
                  className="h-full w-[75%] indent-1 border bg-[#efd3d2] border-gray-500"
                  type="text"
                  id=""
                  name=""
                  form="form4"
                />
              </div>
            </div>
          </div>
          {/*Bottom Section Div*/}
          <div className="h-[35%] w-[98%] flex flex-col">
            <h1 className="text-sm mt-2">LINE ITEMS</h1>
            {/*Titles*/}
            <div className="h-[34%] w-full flex font-bold bg-[#d6dce5]">
              <div className="h-full w-[18%] flex items-center justify-center">
                <h1 className="text-center text-xs">
                  PROJECT NUMBER -ABC <br /> PROJECT TITLE
                </h1>
              </div>
              <div className="h-full w-[10%] flex items-center justify-center">
                <h1 className="text-center text-xs">
                  REQUESTING <br />
                  OFFICE
                </h1>
              </div>
              <div className="h-full w-[12%] flex items-center justify-center">
                <h1 className="text-center text-xs">STATUS</h1>
              </div>
              <div className="h-full w-[6%] flex items-center justify-center">
                <h1 className="text-center text-xs">
                  MODE/ <br />
                  BIDBULLETIN <br />
                  NO
                </h1>
              </div>
              <div className="h-full w-[6%] flex items-center justify-center">
                <h1 className="text-center text-xs">
                  PRE-PROC/ <br />
                  POSTING
                </h1>
              </div>
              <div className="h-full w-[6%] flex items-center justify-center">
                <h1 className="text-center text-xs">
                  PRE-BID/ <br />
                  BID DATE
                </h1>
              </div>
              <div className="h-full w-[6%] flex items-center justify-center">
                <h1 className="text-center text-xs">
                  BID EVAL/ <br />
                  POST QUA
                </h1>
              </div>
              <div className="h-full w-[6%] flex items-center justify-center">
                <h1 className="text-center text-xs">
                  RESO NUMBER/ <br />
                  DATE
                </h1>
              </div>
              <div className="h-full w-[14%] flex items-center justify-center">
                <h1 className="text-center text-xs">
                  PO NUMBER-PO AMOUNT/ <br />
                  BIDDER NAME
                </h1>
              </div>
              <div className="h-full w-[6%] flex items-center justify-center">
                <h1 className="text-center text-xs">
                  PO DATE/
                  <br />
                  NOA DATE
                </h1>
              </div>
              <div className="h-full w-[6%] flex items-center justify-center">
                <h1 className="text-center text-xs">
                  CONTRACT START/
                  <br />
                  CONTRACT END
                </h1>
              </div>
              <div className="h-full w-[6%] flex items-center justify-center">
                <h1 className="text-center text-xs">
                  OBR NUMBER/
                  <br />
                  TRANSMITTAL NO.
                </h1>
              </div>
            </div>
            {/*DIVS*/}
            <div className="h-[66%] w-full bg-[#ffffff]">
              <div className="h-[60%] w-full flex font-bold bg-[#ffffff]">
                {/*First Div Section*/}
                <div className="h-full w-[18%] flex flex-col items-center">
                  <div className="h-1/2 w-[95%] flex justify-center items-center space-x-1">
                    <div className="h-[95%] w-[55%] border border-gray-400 shadow-xl"></div>
                    <div className="h-[95%] w-[45%] border border-gray-400 shadow-xl"></div>
                  </div>
                  <div className="h-[45%] w-[95%] border border-gray-400 shadow-xl" />
                </div>
                {/*Second Div Section*/}
                <div className="h-full w-[10%] flex items-center justify-center">
                  <div className="h-[95%] w-[95%] border border-gray-400 shadow-xl" />
                </div>
                {/*Third Div Section*/}
                <div className="h-full w-[12%] flex items-center justify-center">
                  <div className="h-[95%] w-[95%] border border-gray-400 shadow-xl" />
                </div>
                {/*4th Div Section*/}
                <div className="h-full w-[6%] flex flex-col items-center justify-center space-y-0.5">
                  <div className="h-[45%] w-[95%] border border-gray-400 shadow-xl" />
                  <div className="h-[45%] w-[95%] border border-gray-400 shadow-xl" />
                </div>
                {/*5th Div Section*/}
                <div className="h-full w-[6%] flex flex-col items-center justify-center space-y-0.5">
                  <div className="h-[45%] w-[95%] border border-gray-400 shadow-xl" />
                  <div className="h-[45%] w-[95%] border border-gray-400 shadow-xl" />
                </div>
                {/*6th Div Section*/}
                <div className="h-full w-[6%] flex flex-col items-center justify-center space-y-0.5">
                  <div className="h-[45%] w-[95%] border border-gray-400 shadow-xl" />
                  <div className="h-[45%] w-[95%] border border-gray-400 shadow-xl" />
                </div>
                {/*7th Div Section*/}
                <div className="h-full w-[6%] flex flex-col items-center justify-center space-y-0.5">
                  <div className="h-[45%] w-[95%] border border-gray-400 shadow-xl" />
                  <div className="h-[45%] w-[95%] border border-gray-400 shadow-xl" />
                </div>
                {/*8th Div Section*/}
                <div className="h-full w-[6%] flex flex-col items-center justify-center space-y-0.5">
                  <div className="h-[45%] w-[95%] border border-gray-400 shadow-xl" />
                  <div className="h-[45%] w-[95%] border border-gray-400 shadow-xl" />
                </div>
                {/*9th Div Section*/}
                <div className="h-full w-[14%] flex flex-col items-center">
                  <div className="h-1/2 w-[95%] flex justify-center items-center space-x-1">
                    <div className="h-[95%] w-[45%] border border-gray-400 shadow-xl"></div>
                    <div className="h-[95%] w-[55%] border border-gray-400 shadow-xl"></div>
                  </div>
                  <div className="h-[45%] w-[95%] border border-gray-400 shadow-xl" />
                </div>
                {/*10th Div Section*/}
                <div className="h-full w-[6%] flex flex-col items-center justify-center space-y-0.5">
                  <div className="h-[45%] w-[95%] border border-gray-400 shadow-xl" />
                  <div className="h-[45%] w-[95%] border border-gray-400 shadow-xl" />
                </div>
                {/*11th Div Section*/}
                <div className="h-full w-[6%] flex flex-col items-center justify-center space-y-0.5">
                  <div className="h-[45%] w-[95%] border border-gray-400 shadow-xl" />
                  <div className="h-[45%] w-[95%] border border-gray-400 shadow-xl" />
                </div>
                {/*12th Div Section*/}
                <div className="h-full w-[6%] flex flex-col items-center justify-center space-y-0.5">
                  <div className="h-[45%] w-[95%] border border-gray-400 shadow-xl" />
                  <div className="h-[45%] w-[95%] border border-gray-400 shadow-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

        </BaseTemplate>
    )

} 