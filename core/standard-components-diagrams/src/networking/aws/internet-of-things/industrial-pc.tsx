import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INDUSTRIAL_PC = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.iot_thing_industrial_pc;',
  },
  _width: 60,
  _height: 60,
}

export function IndustrialPc(props: DiagramNodeProps) {
  return (
    <Shape
      {...INDUSTRIAL_PC}
      {...props}
      _style={extendStyle(INDUSTRIAL_PC, props)}
    />
  )
}
