import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATA_STORE = {
  _style: {
    entity:
      'shape=partialRectangle;whiteSpace=wrap;html=1;left=0;right=0;fillColor=none;',
  },
  _original_width: 120,
  _original_height: 80,
}

export function DataStore(props: DiagramNodeProps) {
  return (
    <Shape {...DATA_STORE} {...props} _style={extendStyle(DATA_STORE, props)} />
  )
}
