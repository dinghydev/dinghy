import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MONITOR_PIPELINE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Monitor_Pipeline.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 49.120000000000005,
}

export function MonitorPipeline(props: DiagramNodeProps) {
  return (
    <Shape
      {...MONITOR_PIPELINE}
      {...props}
      _style={extendStyle(MONITOR_PIPELINE, props)}
    />
  )
}
