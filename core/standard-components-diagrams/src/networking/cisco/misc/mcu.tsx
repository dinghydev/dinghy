import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MCU = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.mcu;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 56,
  _original_height: 64,
}

export function Mcu(props: DiagramNodeProps) {
  return <Shape {...MCU} {...props} _style={extendStyle(MCU, props)} />
}
