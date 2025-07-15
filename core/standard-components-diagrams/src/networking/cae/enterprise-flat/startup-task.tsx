import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STARTUP_TASK = {
  _style:
    'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.azure.startup_task;fillColor=#0078D7;',
  _width: 48,
  _height: 50,
}

export function StartupTask(props: DiagramNodeProps) {
  return <Shape {...STARTUP_TASK} {...props} />
}
