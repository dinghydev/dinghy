import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SHALLOW_HISTORY = {
  _style: 'ellipse;html=1;',
  _width: 30,
  _height: 30,
}

export function ShallowHistory(props: DiagramNodeProps) {
  return (
    <Shape
      {...SHALLOW_HISTORY}
      {...props}
      _style={extendStyle(SHALLOW_HISTORY, props)}
    />
  )
}
