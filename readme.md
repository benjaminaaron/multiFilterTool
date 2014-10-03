Simple prototype for developing an UI for querying a database with any cominbation of filters. Each filter allows the combination of parameters to select a specific subset of the whole dataset. The chaining of filters results in union sets by default, but intersecting sets and cominbation of both are planned as well.

Two things I'd love to build into it at some point; the automated shortening of complex queries based on rules from theoretical informatics and the automated construction of the simplest query based on a manual selection of datarows.

Currently (May 20, 2014) this has a specific context I am developing it for - but eventually I'd like to turn it into a plugin that might be useful for others.