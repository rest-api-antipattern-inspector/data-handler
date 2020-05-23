data<-read.csv("path\\contingencyTableAll.csv", header = TRUE)
chisq.test(data)

data<-read.csv("path\\contingencyTableAnti.csv", header = TRUE)
chisq.test(data)

data<-read.csv("path\\contingencyTablePattern.csv", header = TRUE)
chisq.test(data)
