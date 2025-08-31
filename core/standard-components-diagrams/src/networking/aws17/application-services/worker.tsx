import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WORKER = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.worker;fillColor=#D9A741;gradientColor=none;',
  _width: 60,
  _height: 63,
}

export function Worker(props: DiagramNodeProps) {
  return <Shape {...WORKER} {...props} _style={extendStyle(WORKER, props)} />
}
