import { ZodObject, ZodRawShape } from 'zod'
import { camelCaseToWords, NodeProps, NodeTree } from '@dinghy/base-components'

function _title({ _props: { _tags } }: NodeTree) {
  const namedTag = camelCaseToWords((_tags as any)[0])
  return namedTag.replace(/^(Data )?Aws /, '')
}

function reverseFindTag(tags: string[], prefix: string) {
  for (let i = tags.length; i > 0; i--) {
    const tag = tags[i - 1]
    if (tag.startsWith(prefix)) {
      return tag
    }
  }
}

function _type({ _props: { _tags } }: NodeTree) {
  let awsTypeTag = reverseFindTag(_tags as any, 'Aws')
  if (!awsTypeTag) {
    awsTypeTag = reverseFindTag(_tags as any, 'DataAws')
    if (!awsTypeTag) {
      throw new Error(
        `None aws resource with tags [${(_tags as any).join(', ')}]`,
      )
    }
    awsTypeTag = awsTypeTag.replace('DataAws', 'Aws')
  }

  return camelCaseToWords(awsTypeTag).toLowerCase().replaceAll(' ', '_')
}

function _category({ _props: { _tags } }: NodeTree) {
  if (reverseFindTag(_tags as any, 'DataAws')) {
    return 'data'
  }
}

export function awsProps(
  props: NodeProps,
  _inputSchema: ZodObject<ZodRawShape>,
  _outputSchema?: ZodObject<ZodRawShape>,
  _importSchema?: ZodObject<ZodRawShape>,
) {
  return {
    _title,
    _type,
    _category,
    _inputSchema,
    _outputSchema,
    _importSchema,
    ...props,
  } as NodeProps
}
