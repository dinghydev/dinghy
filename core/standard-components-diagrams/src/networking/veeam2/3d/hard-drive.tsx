import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HARD_DRIVE = {
  _style:
    'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.hard_drive;fillColor=#637D8A;gradientColor=#324752;strokeColor=none;',
  _width: 62,
  _height: 28,
}

export function HardDrive(props: DiagramNodeProps) {
  return (
    <Shape {...HARD_DRIVE} {...props} _style={extendStyle(HARD_DRIVE, props)} />
  )
}
