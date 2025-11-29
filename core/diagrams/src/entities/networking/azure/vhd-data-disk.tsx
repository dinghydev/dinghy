import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VHD_DATA_DISK = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.vhd_data_disk;pointerEvents=1;',
  },
  _width: 37.5,
  _height: 50,
}

export function VhdDataDisk(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VHD_DATA_DISK)} />
}
