WpfWindow("OpenText MyFlight Sample").WpfObject("orderCompletedMsg").WaitProperty "visible", true
WpfWindow("OpenText MyFlight Sample").WpfObject("orderCompletedMsg").Check CheckPoint("Verifica ordem completa")
