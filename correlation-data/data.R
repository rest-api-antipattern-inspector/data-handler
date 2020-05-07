# antipattern count variables:

bitly_isBreakingSelfDescriptiveness=16
bitly_isForgettingHypermedia=0
bitly_isIgnoringCaching=0
bitly_isIgnoringMIMEType=0
bitly_isIgnoringStatusCode=0
bitly_isMisusingCookies=0
bitly_AmorphousURI=0
bitly_CRUDyURI=0
bitly_ContextlessResource=10
bitly_NonHierarchicalNodes=0
bitly_PluralisedNodes=0

imgur_isBreakingSelfDescriptiveness=25
imgur_isForgettingHypermedia=0
imgur_isIgnoringCaching=0
imgur_isIgnoringMIMEType=0
imgur_isIgnoringStatusCode=0
imgur_isMisusingCookies=3
imgur_AmorphousURI=0
imgur_CRUDyURI=0
imgur_ContextlessResource=1
imgur_NonHierarchicalNodes=0
imgur_PluralisedNodes=0

twitter_isBreakingSelfDescriptiveness=61
twitter_isForgettingHypermedia=0
twitter_isIgnoringCaching=0
twitter_isIgnoringMIMEType=0
twitter_isIgnoringStatusCode=0
twitter_isMisusingCookies=61
twitter_AmorphousURI=0
twitter_CRUDyURI=26
twitter_ContextlessResource=5
twitter_NonHierarchicalNodes=0
twitter_PluralisedNodes=0

disqus_isBreakingSelfDescriptiveness=37
disqus_isForgettingHypermedia=0
disqus_isIgnoringCaching=0
disqus_isIgnoringMIMEType=0
disqus_isIgnoringStatusCode=0
disqus_isMisusingCookies=0
disqus_AmorphousURI=37
disqus_CRUDyURI=1
disqus_ContextlessResource=5
disqus_NonHierarchicalNodes=0
disqus_PluralisedNodes=0

#antipatterns

mydata <- matrix(c(bitly_isBreakingSelfDescriptiveness, bitly_isForgettingHypermedia, bitly_isIgnoringCaching, bitly_isIgnoringMIMEType, bitly_isIgnoringStatusCode, bitly_isMisusingCookies, bitly_AmorphousURI, bitly_CRUDyURI, bitly_ContextlessResource, bitly_NonHierarchicalNodes, bitly_PluralisedNodes, 
imgur_isBreakingSelfDescriptiveness, imgur_isForgettingHypermedia, imgur_isIgnoringCaching, imgur_isIgnoringMIMEType, imgur_isIgnoringStatusCode, imgur_isMisusingCookies, imgur_AmorphousURI, imgur_CRUDyURI, imgur_ContextlessResource, imgur_NonHierarchicalNodes, imgur_PluralisedNodes, 
twitter_isBreakingSelfDescriptiveness, twitter_isForgettingHypermedia, twitter_isIgnoringCaching, twitter_isIgnoringMIMEType, twitter_isIgnoringStatusCode, twitter_isMisusingCookies, twitter_AmorphousURI, twitter_CRUDyURI, twitter_ContextlessResource, twitter_NonHierarchicalNodes, twitter_PluralisedNodes, 
disqus_isBreakingSelfDescriptiveness, disqus_isForgettingHypermedia, disqus_isIgnoringCaching, disqus_isIgnoringMIMEType, disqus_isIgnoringStatusCode, disqus_isMisusingCookies, disqus_AmorphousURI, disqus_CRUDyURI, disqus_ContextlessResource, disqus_NonHierarchicalNodes, disqus_PluralisedNodes), nrow=4,
ncol=11,byrow = TRUE)

dimnames(mydata) = list(c("bitly", "imgur", "twitter", "disqus"),
c("isBreakingSelfDescriptiveness", "isForgettingHypermedia", "isIgnoringCaching", "isIgnoringMIMEType", "isIgnoringStatusCode", "isMisusingCookies", "AmorphousURI", "CRUDyURI", "ContextlessResource", "NonHierarchicalNodes", "PluralisedNodes")

chisq.test(mydata)
