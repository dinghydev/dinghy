import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INFERENTIA = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#ED7100;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.inferentia;',
  },
  _original_width: 48,
  _original_height: 48,
}

export function Inferentia(props: DiagramNodeProps) {
  return (
    <Shape {...INFERENTIA} {...props} _style={extendStyle(INFERENTIA, props)} />
  )
}
