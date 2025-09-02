import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MONITOR_RUNNING_APPS = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.monitor_running_apps',
  },
  _original_width: 50,
  _original_height: 39,
}

export function MonitorRunningApps(props: DiagramNodeProps) {
  return (
    <Shape
      {...MONITOR_RUNNING_APPS}
      {...props}
      _style={extendStyle(MONITOR_RUNNING_APPS, props)}
    />
  )
}
