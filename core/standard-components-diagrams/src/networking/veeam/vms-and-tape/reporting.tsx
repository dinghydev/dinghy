import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REPORTING = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.reporting;',
  _width: 44.8,
  _height: 44.8,
}

export function Reporting(props: DiagramNodeProps) {
  return (
    <Shape {...REPORTING} {...props} _style={extendStyle(REPORTING, props)} />
  )
}
