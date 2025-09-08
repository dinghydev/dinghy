import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VBR_CONSOLE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.vbr_console;',
  },
  _original_width: 34,
  _original_height: 34,
}

export function VbrConsole(props: DiagramNodeProps) {
  return (
    <Shape
      {...VBR_CONSOLE}
      {...props}
      _style={extendStyle(VBR_CONSOLE, props)}
    />
  )
}
