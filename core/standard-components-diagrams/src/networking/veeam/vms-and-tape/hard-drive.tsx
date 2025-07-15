import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HARD_DRIVE = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.hard_drive;',
  _width: 40,
  _height: 48,
}

export function HardDrive(props: DiagramNodeProps) {
  return <Shape {...HARD_DRIVE} {...props} />
}
