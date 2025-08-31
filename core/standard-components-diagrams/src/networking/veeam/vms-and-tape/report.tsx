import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REPORT = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.report;',
  _width: 36.8,
  _height: 50.8,
}

export function Report(props: DiagramNodeProps) {
  return <Shape {...REPORT} {...props} _style={extendStyle(REPORT, props)} />
}
