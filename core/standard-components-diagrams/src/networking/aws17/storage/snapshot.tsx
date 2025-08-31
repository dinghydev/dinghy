import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SNAPSHOT = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.snapshot;fillColor=#E05243;gradientColor=none;',
  _width: 60,
  _height: 73.5,
}

export function Snapshot(props: DiagramNodeProps) {
  return (
    <Shape {...SNAPSHOT} {...props} _style={extendStyle(SNAPSHOT, props)} />
  )
}
