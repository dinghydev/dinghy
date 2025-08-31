import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WORKER = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.worker;fillColor=#ECECEC;strokeColor=#5E5E5E;aspect=fixed;',
  _width: 74,
  _height: 50,
}

export function Worker(props: DiagramNodeProps) {
  return <Shape {...WORKER} {...props} _style={extendStyle(WORKER, props)} />
}
