# antipattern count variables:

AmorphousURI=36
ContextlessResource=44
CRUDyURI=25
NonHierarchicalNodes=0
PluralisedNodes=39

isBreakingSelfDescriptiveness=317
isForgettingHypermedia=0
isIgnoringCaching=0
isIgnoringMIMEType=89
isIgnoringStatusCode=4
isMisusingCookies=100

#antipatterns

mydata <- matrix(c(AmorphousURI, ContextlessResource, CRUDyURI, NonHierarchicalNodes, PluralisedNodes, isBreakingSelfDescriptiveness, isForgettingHypermedia, isIgnoringCaching, isIgnoringMIMEType, isIgnoringStatusCode, isMisusingCookie), nrow=5,
ncol=6,byrow = TRUE)

dimnames(mydata) = list(c("AmorphousURI", "ContextlessResource", "CRUDyURI", "NonHierarchicalNodes", "PluralisedNodes"),
c("isBreakingSelfDescriptiveness", "isForgettingHypermedia", "isIgnoringCaching", "isIgnoringMIMEType", "isIgnoringStatusCode", "isMisusingCookies")

chisq.test(mydata)
