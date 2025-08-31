import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PIOPS_INSTANCE = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#C925D1;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.rds_piops;',
  },
  _width: 60,
  _height: 60,
}

export function PiopsInstance(props: DiagramNodeProps) {
  return (
    <Shape
      {...PIOPS_INSTANCE}
      {...props}
      _style={extendStyle(PIOPS_INSTANCE, props)}
    />
  )
}
