---
sidebar_position: 55
---

# Tf components definition

## _category

When rendering Infrastructure as Code (IaC), any component that defines a
`_category` property is used to generate the corresponding `tf.json` output.

The `_category` can be a single string (indicating the primary category) or an
array of categories. If an array is specified, the first element is treated as
the primary category.

The set of supported category values is detailed in the
[IacCategorySchema reference](/references/attributes/iac#iaccategoryschema).

## Raw category value

If the `_CATEGORY_NAME` property is present, its value will be used directly as
the category value without any schema validation. This allows Dinghy to support
custom or unrecognized data structures, as well as cases where an incorrect
schema might have been generated.

None primary categories only support raw category value.

## _inputSchema

When no raw category difined for primary category, `_inputSchema` will be used
to parse the component attribute as category value.

## _outputSchema

`_outputSchema` specifies the Terraform read-only attributes—these values are
only populated at runtime and cannot be set in the configuration.

## _importSchema

`_importSchema` specifies the attributes required to uniquely identify and
import an existing resource into the Terraform state when it is not already
present.

The import statement is generated only when the
[--tf-generate-import option](https://dinghy.dev/references/commands/engine/render#options)
is enabled during rendering.
