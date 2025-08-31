import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EXECUTION_REGION = {
  _style: {
    entity:
      'html=1;dashed=0;rounded=1;absoluteArcSize=1;arcSize=20;verticalAlign=middle;align=center;whiteSpace=wrap;',
  },
  _width: 0,
  _height: 50,
}

export function ExecutionRegion(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXECUTION_REGION}
      {...props}
      _style={extendStyle(EXECUTION_REGION, props)}
    />
  )
}
