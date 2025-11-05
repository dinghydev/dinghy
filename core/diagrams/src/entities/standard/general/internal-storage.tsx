import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INTERNAL_STORAGE = {
  _style: {
    entity: 'shape=internalStorage;whiteSpace=wrap;html=1;backgroundOutline=1;',
  },
  _original_width: 80,
  _original_height: 80,
}

export function InternalStorage(props: NodeProps) {
  return (
    <Shape
      {...INTERNAL_STORAGE}
      {...props}
      _style={extendStyle(INTERNAL_STORAGE, props)}
    />
  )
}
