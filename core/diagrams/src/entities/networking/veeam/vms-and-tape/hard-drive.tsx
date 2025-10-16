import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HARD_DRIVE = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.hard_drive;',
  },
  _original_width: 40,
  _original_height: 48,
}

export function HardDrive(props: DiagramNodeProps) {
  return (
    <Shape {...HARD_DRIVE} {...props} _style={extendStyle(HARD_DRIVE, props)} />
  )
}
