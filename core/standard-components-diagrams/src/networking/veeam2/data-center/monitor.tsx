import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MONITOR = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.monitor;',
  },
  _original_width: 51,
  _original_height: 40,
}

export function Monitor(props: DiagramNodeProps) {
  return <Shape {...MONITOR} {...props} _style={extendStyle(MONITOR, props)} />
}
