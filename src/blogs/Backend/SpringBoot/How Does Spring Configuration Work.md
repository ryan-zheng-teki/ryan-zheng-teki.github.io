## How does spring configuration work?

Spring will use annotation processor during loading the classes which are annotated by @configuration. Then spring
will use reflection to get those methods which are annotated by @Bean. Internally Spring creates a BeanDefinition object 
and construct a graph for the dependencies. After constructing the graph. Spring will traverse the graph to generate all the 
spring beans. 
