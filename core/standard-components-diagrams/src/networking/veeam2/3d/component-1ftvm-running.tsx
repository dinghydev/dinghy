import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPONENT_1FTVM_RUNNING = {
  _style:
    'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.1ftvm_running;',
  _width: 68,
  _height: 62,
}

export function Component1ftvmRunning(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_1FTVM_RUNNING}
      {...props}
      _style={extendStyle(COMPONENT_1FTVM_RUNNING, props)}
    />
  )
}
