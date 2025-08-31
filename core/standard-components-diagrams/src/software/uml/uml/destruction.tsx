import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DESTRUCTION = {
  _style: {
    entity:
      'shape=umlDestroy;whiteSpace=wrap;html=1;strokeWidth=3;targetShapes=umlLifeline;',
  },
  _width: 30,
  _height: 30,
}

export function Destruction(props: DiagramNodeProps) {
  return (
    <Shape
      {...DESTRUCTION}
      {...props}
      _style={extendStyle(DESTRUCTION, props)}
    />
  )
}
