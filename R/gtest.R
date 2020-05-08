data<-read.csv("C:\\Users\\jeppa\\OneDrive\\Dokument\\rest-antipattern-correlations\\csv\\results.csv", header = TRUE)
Filtered <- filter((data), data$CRN == 1)
data1 <- table(data$CRN, data$MC)
DescTools::GTest(data1)

data<-read.csv("C:\\Users\\jeppa\\OneDrive\\Dokument\\rest-antipattern-correlations\\csv\\results.csv", header = TRUE)
Filtered <- filter((data), data$CRD == 1)
data1 <- table(data$CRD, data$MC)
DescTools::GTest(data1)

data<-read.csv("C:\\Users\\jeppa\\OneDrive\\Dokument\\rest-antipattern-correlations\\csv\\results.csv", header = TRUE)
Filtered <- filter((data), data$SPN == 1)
data1 <- table(data$SPN, data$MC)
DescTools::GTest(data1)
