import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INTERNAL_STORAGE = {
  _style: {
    entity:
      'shape=internalStorage;whiteSpace=wrap;html=1;dx=15;dy=15;rounded=1;arcSize=8;strokeWidth=2;',
  },
  _original_width: 70,
  _original_height: 70,
}

export function InternalStorage(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTERNAL_STORAGE}
      {...props}
      _style={extendStyle(INTERNAL_STORAGE, props)}
    />
  )
}
