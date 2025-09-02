import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REPLICATION = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.replication;',
  },
  _original_width: 76,
  _original_height: 78,
}

export function Replication(props: DiagramNodeProps) {
  return (
    <Shape
      {...REPLICATION}
      {...props}
      _style={extendStyle(REPLICATION, props)}
    />
  )
}
