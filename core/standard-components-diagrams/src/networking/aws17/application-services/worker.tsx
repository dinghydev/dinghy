import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WORKER = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.worker;fillColor=#D9A741;gradientColor=none;',
  },
  _original_width: 60,
  _original_height: 63,
}

export function Worker(props: DiagramNodeProps) {
  return <Shape {...WORKER} {...props} _style={extendStyle(WORKER, props)} />
}
