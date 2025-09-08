import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATA_STORE = {
  _style: {
    entity:
      'html=1;dashed=0;whiteSpace=wrap;shape=partialRectangle;right=0;left=0;',
  },
  _original_width: 100,
  _original_height: 30,
}

export function DataStore(props: DiagramNodeProps) {
  return (
    <Shape {...DATA_STORE} {...props} _style={extendStyle(DATA_STORE, props)} />
  )
}
