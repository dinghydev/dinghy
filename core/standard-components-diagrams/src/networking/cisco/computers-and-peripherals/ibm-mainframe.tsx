import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IBM_MAINFRAME = {
  _style: {
    entity:
      'shape=mxgraph.cisco.computers_and_peripherals.ibm_mainframe;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 50,
  _original_height: 70,
}

export function IbmMainframe(props: DiagramNodeProps) {
  return (
    <Shape
      {...IBM_MAINFRAME}
      {...props}
      _style={extendStyle(IBM_MAINFRAME, props)}
    />
  )
}
