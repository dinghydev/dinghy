import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FIBRE_CHANNEL_DISK_SUBSYSTEM = {
  _style: {
    entity:
      'shape=mxgraph.cisco.storage.fibre_channel_disk_subsystem;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 43,
  _original_height: 62,
}

export function FibreChannelDiskSubsystem(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, FIBRE_CHANNEL_DISK_SUBSYSTEM)}
    />
  )
}
