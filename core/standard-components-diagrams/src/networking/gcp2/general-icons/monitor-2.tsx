import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MONITOR_2 = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.monitor_2',
  },
  _original_width: 100,
  _original_height: 85,
}

export function Monitor2(props: DiagramNodeProps) {
  return (
    <Shape {...MONITOR_2} {...props} _style={extendStyle(MONITOR_2, props)} />
  )
}
