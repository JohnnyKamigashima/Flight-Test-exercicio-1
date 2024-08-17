WpfWindow("OpenText MyFlight Sample").WpfEdit("agentName").Set DataTable("usuario", dtGlobalSheet)
WpfWindow("OpenText MyFlight Sample").WpfEdit("password").SetSecure DataTable("senha", dtGlobalSheet)
WpfWindow("OpenText MyFlight Sample").WpfButton("OK").Click
