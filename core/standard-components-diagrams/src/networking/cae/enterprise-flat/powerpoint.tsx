import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POWERPOINT = {
  _style:
    'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.mscae.other.powerpoint;fillColor=#DE5D24;',
  _width: 60,
  _height: 60,
}

export function Powerpoint(props: DiagramNodeProps) {
  return (
    <Shape {...POWERPOINT} {...props} _style={extendStyle(POWERPOINT, props)} />
  )
}
