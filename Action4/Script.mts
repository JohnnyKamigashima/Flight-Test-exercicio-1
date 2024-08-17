WpfWindow("OpenText MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 0, 0
WpfWindow("OpenText MyFlight Sample").WpfButton("selectFlightBtn").Click
WpfWindow("OpenText MyFlight Sample").WpfObject("numTickets").Check CheckPoint("Tickets")

