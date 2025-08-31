import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VAPP_RUNNING = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.vapp_running;',
  _width: 36,
  _height: 36,
}

export function VappRunning(props: DiagramNodeProps) {
  return (
    <Shape
      {...VAPP_RUNNING}
      {...props}
      _style={extendStyle(VAPP_RUNNING, props)}
    />
  )
}
