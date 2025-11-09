import DocCardList from "@theme/DocCardList";

# Attributes

Attibutes are the interface for component to use which will be utilised by
renderer to generate final output.

## Convention

The attribute name convention is that all dinghy internal attributes are
prefixed with underscore. None underscore attribute are reserved for
Infrastructure as Code data model.

## Function attribute

Most attribute could be a function as well. If passed as function, it will be
resolved at various stages automatically. The first parameter of function is the
`node` object which you can navigate the tree.

## Text as title

You may also put text inside component which will resolved as `_title` for the
component.

## Attributes output

The json output format contains all those core attributes you may inspect.

```sh
dinghy render --format json
```

## Categories

Grouped attributes by category:

<DocCardList/>
