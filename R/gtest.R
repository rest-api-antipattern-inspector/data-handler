data<-read.csv("C:\\Users\\jeppa\\OneDrive\\Dokument\\rest-antipattern-correlations\\csv\\results.csv", header = TRUE)
Filtered <- filter((data), data$contextlessResource == 1)
data1 <- table(data$contextlessResource, data$misusingCookies)
DescTools::GTest(data1)

data<-read.csv("C:\\Users\\jeppa\\OneDrive\\Dokument\\rest-antipattern-correlations\\csv\\results.csv", header = TRUE)
Filtered <- filter((data), data$CRUDyURI == 1)
data1 <- table(data$CRUDyURI, data$misusingCookies)
DescTools::GTest(data1)

data<-read.csv("C:\\Users\\jeppa\\OneDrive\\Dokument\\rest-antipattern-correlations\\csv\\results.csv", header = TRUE)
Filtered <- filter((data), data$pluralisedNodes == 1)
data1 <- table(data$pluralisedNodes, data$misusingCookies)
DescTools::GTest(data1)
