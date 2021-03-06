# antipattern count variables:

AmorphousURI=36
CRUDyURI=28
ContextlessResource=57
NonHierarchicalNodes=0
PluralisedNodes=39

isBreakingSelfDescriptiveness=317
isForgettingHypermedia=0
isIgnoringCaching=0
isIgnoringMIMEType=89
isIgnoringStatusCode=4
isMisusingCookies=100

#antipatterns

mydata <- matrix(c(AmorphousURI, CRUDyURI, ContextlessResource, NonHierarchicalNodes, PluralisedNodes, isBreakingSelfDescriptiveness, isForgettingHypermedia, isIgnoringCaching, isIgnoringMIMEType, isIgnoringStatusCode, isMisusingCookies), nrow=5,
ncol=6,byrow = TRUE)

dimnames(mydata) = list(c("AmorphousURI", "CRUDyURI", "ContextlessResource", "NonHierarchicalNodes", "PluralisedNodes"),
c("isBreakingSelfDescriptiveness", "isForgettingHypermedia", "isIgnoringCaching", "isIgnoringMIMEType", "isIgnoringStatusCode", "isMisusingCookies"))

chisq.test(mydata)
