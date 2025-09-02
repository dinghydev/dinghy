import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VHD = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.vhd;pointerEvents=1;',
  },
  _original_width: 40,
  _original_height: 50,
}

export function Vhd(props: DiagramNodeProps) {
  return <Shape {...VHD} {...props} _style={extendStyle(VHD, props)} />
}
