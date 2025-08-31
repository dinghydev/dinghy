import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETSCALER_CONSOLE = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.netscaler_console;',
  },
  _width: 50,
  _height: 35.935,
}

export function NetscalerConsole(props: DiagramNodeProps) {
  return (
    <Shape
      {...NETSCALER_CONSOLE}
      {...props}
      _style={extendStyle(NETSCALER_CONSOLE, props)}
    />
  )
}
