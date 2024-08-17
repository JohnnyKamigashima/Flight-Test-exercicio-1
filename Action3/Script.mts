WpfWindow("OpenText MyFlight Sample").WpfComboBox("fromCity").Select DataTable("fromCity", dtGlobalSheet)
WpfWindow("OpenText MyFlight Sample").WpfComboBox("toCity").Select DataTable("toCity", dtGlobalSheet)
WpfWindow("OpenText MyFlight Sample").WpfComboBox("numOfTickets").Select DataTable("tickets", dtGlobalSheet)
WpfWindow("OpenText MyFlight Sample").WpfComboBox("class").Select DataTable("class", dtGlobalSheet)

WpfWindow("OpenText MyFlight Sample").WpfCalendar("datePicker").SetDate  SomarDiasADataAtual(3)

WpfWindow("OpenText MyFlight Sample").WpfButton("FIND FLIGHTS").Click

