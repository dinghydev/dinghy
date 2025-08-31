import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STARTUP_TASK = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.startup_task;pointerEvents=1;',
  _width: 47.5,
  _height: 50,
}

export function StartupTask(props: DiagramNodeProps) {
  return (
    <Shape
      {...STARTUP_TASK}
      {...props}
      _style={extendStyle(STARTUP_TASK, props)}
    />
  )
}
