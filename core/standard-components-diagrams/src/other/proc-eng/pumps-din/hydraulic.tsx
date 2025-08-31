import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HYDRAULIC = {
  _style:
    'shape=mxgraph.pid.pumps_-_din.hydraulic;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 60,
  _height: 60,
}

export function Hydraulic(props: DiagramNodeProps) {
  return (
    <Shape {...HYDRAULIC} {...props} _style={extendStyle(HYDRAULIC, props)} />
  )
}
