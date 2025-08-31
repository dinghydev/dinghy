import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_STORE = {
  _style:
    'html=1;dashed=0;whiteSpace=wrap;shape=partialRectangle;right=0;left=0;',
  _width: 100,
  _height: 30,
}

export function DataStore(props: DiagramNodeProps) {
  return (
    <Shape {...DATA_STORE} {...props} _style={extendStyle(DATA_STORE, props)} />
  )
}
