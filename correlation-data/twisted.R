# antipattern count variables:

AmorphousURI=37CRUDyURI=27ContextlessResource=21NonHierarchicalNodes=0PluralisedNodes=34isBreakingSelfDescriptiveness=139isForgettingHypermedia=0isIgnoringCaching=0isIgnoringMIMEType=0isIgnoringStatusCode=0isMisusingCookies=64
#antipatterns

mydata <- matrix(c(AmorphousURI, CRUDyURI, ContextlessResource, NonHierarchicalNodes, PluralisedNodes, isBreakingSelfDescriptiveness, isForgettingHypermedia, isIgnoringCaching, isIgnoringMIMEType, isIgnoringStatusCode, isMisusingCookies), nrow=11,
ncol=0,byrow = TRUE)

dimnames(mydata) = list(c("AmorphousURI", "CRUDyURI", "ContextlessResource", "NonHierarchicalNodes", "PluralisedNodes", "isBreakingSelfDescriptiveness", "isForgettingHypermedia", "isIgnoringCaching", "isIgnoringMIMEType", "isIgnoringStatusCode", "isMisusingCookies"),
c()

chisq.test(mydata)
