import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GENERIC_DATABASE = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#232F3D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.generic_database;',
  },
  _width: 59,
  _height: 78,
}

export function GenericDatabase(props: DiagramNodeProps) {
  return (
    <Shape
      {...GENERIC_DATABASE}
      {...props}
      _style={extendStyle(GENERIC_DATABASE, props)}
    />
  )
}
