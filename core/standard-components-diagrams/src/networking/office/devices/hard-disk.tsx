import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HARD_DISK = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.hard_disk;',
  },
  _original_width: 40,
  _original_height: 54,
}

export function HardDisk(props: DiagramNodeProps) {
  return (
    <Shape {...HARD_DISK} {...props} _style={extendStyle(HARD_DISK, props)} />
  )
}
