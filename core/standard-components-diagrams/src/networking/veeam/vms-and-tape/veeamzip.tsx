import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VEEAMZIP = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.veeamzip;',
  _width: 44.8,
  _height: 44.8,
}

export function Veeamzip(props: DiagramNodeProps) {
  return (
    <Shape {...VEEAMZIP} {...props} _style={extendStyle(VEEAMZIP, props)} />
  )
}
