import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LAMBDA = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.lambda;fillColor=#ECECEC;strokeColor=#5E5E5E;aspect=fixed;',
  _width: 92,
  _height: 109.5,
}

export function Lambda(props: DiagramNodeProps) {
  return <Shape {...LAMBDA} {...props} _style={extendStyle(LAMBDA, props)} />
}
