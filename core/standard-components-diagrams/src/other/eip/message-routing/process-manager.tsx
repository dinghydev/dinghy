import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROCESS_MANAGER = {
  _style:
    'html=1;strokeWidth=2;outlineConnect=0;dashed=0;align=center;fontSize=8;fillColor=#c0f5a9;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.eip.process_manager;',
  _width: 150,
  _height: 90,
}

export function ProcessManager(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROCESS_MANAGER}
      {...props}
      _style={extendStyle(PROCESS_MANAGER, props)}
    />
  )
}
