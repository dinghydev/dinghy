import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STARTUP_TASK = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.azure.startup_task;fillColor=#0078D7;',
  },
  _original_width: 48,
  _original_height: 50,
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
