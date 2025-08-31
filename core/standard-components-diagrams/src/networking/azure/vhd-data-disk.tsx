import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VHD_DATA_DISK = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.vhd_data_disk;pointerEvents=1;',
  _width: 37.5,
  _height: 50,
}

export function VhdDataDisk(props: DiagramNodeProps) {
  return (
    <Shape
      {...VHD_DATA_DISK}
      {...props}
      _style={extendStyle(VHD_DATA_DISK, props)}
    />
  )
}
