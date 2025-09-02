import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MANAGEMENT_CONSOLE = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.management_console;',
  },
  _original_width: 50,
  _original_height: 34,
}

export function ManagementConsole(props: DiagramNodeProps) {
  return (
    <Shape
      {...MANAGEMENT_CONSOLE}
      {...props}
      _style={extendStyle(MANAGEMENT_CONSOLE, props)}
    />
  )
}
