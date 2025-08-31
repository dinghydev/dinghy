import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_STORE = {
  _style: {
    entity:
      'shape=partialRectangle;whiteSpace=wrap;html=1;left=0;right=0;fillColor=none;',
  },
  _width: 120,
  _height: 80,
}

export function DataStore(props: DiagramNodeProps) {
  return (
    <Shape {...DATA_STORE} {...props} _style={extendStyle(DATA_STORE, props)} />
  )
}
