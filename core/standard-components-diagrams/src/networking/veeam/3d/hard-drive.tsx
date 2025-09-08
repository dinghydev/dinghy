import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HARD_DRIVE = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.hard_drive;fillColor=#637D8A;gradientColor=#324752;strokeColor=none;',
  },
  _original_width: 62,
  _original_height: 28,
}

export function HardDrive(props: DiagramNodeProps) {
  return (
    <Shape {...HARD_DRIVE} {...props} _style={extendStyle(HARD_DRIVE, props)} />
  )
}
