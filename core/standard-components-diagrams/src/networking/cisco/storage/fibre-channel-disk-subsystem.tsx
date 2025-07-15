import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FIBRE_CHANNEL_DISK_SUBSYSTEM = {
  _style:
    'shape=mxgraph.cisco.storage.fibre_channel_disk_subsystem;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 43,
  _height: 62,
}

export function FibreChannelDiskSubsystem(props: DiagramNodeProps) {
  return <Shape {...FIBRE_CHANNEL_DISK_SUBSYSTEM} {...props} />
}
