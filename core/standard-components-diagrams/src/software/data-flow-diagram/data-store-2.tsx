import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_STORE_2 = {
  _style: {
    entity: 'html=1;dashed=0;whiteSpace=wrap;shape=partialRectangle;right=0;',
  },
  _width: 100,
  _height: 30,
}

export function DataStore2(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_STORE_2}
      {...props}
      _style={extendStyle(DATA_STORE_2, props)}
    />
  )
}
