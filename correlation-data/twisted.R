# antipattern count variables:

AmorphousURI=37
CRUDyURI=27
ContextlessResource=21
NonHierarchicalNodes=0
PluralisedNodes=34

isBreakingSelfDescriptiveness=139
isForgettingHypermedia=0
isIgnoringCaching=0
isIgnoringMIMEType=0
isIgnoringStatusCode=0
isMisusingCookies=64

#antipatterns

mydata <- matrix(c(AmorphousURI, CRUDyURI, ContextlessResource, NonHierarchicalNodes, PluralisedNodes, isBreakingSelfDescriptiveness, isForgettingHypermedia, isIgnoringCaching, isIgnoringMIMEType, isIgnoringStatusCode, isMisusingCookies), nrow=5,
ncol=6,byrow = TRUE)

dimnames(mydata) = list(c("AmorphousURI", "CRUDyURI", "ContextlessResource", "NonHierarchicalNodes", "PluralisedNodes"),
c("isBreakingSelfDescriptiveness", "isForgettingHypermedia", "isIgnoringCaching", "isIgnoringMIMEType", "isIgnoringStatusCode", "isMisusingCookies"))

chisq.test(mydata)
