import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GROUP = {
  _style: {
    entity:
      'shape=mxgraph.mockup.containers.marginRect;rectMarginTop=10;strokeColor=#666666;strokeWidth=1;dashed=0;rounded=1;arcSize=5;recursiveResize=0;html=1;whiteSpace=wrap;',
  },
  _width: 0,
  _height: 200,
}

export function Group(props: DiagramNodeProps) {
  return <Shape {...GROUP} {...props} _style={extendStyle(GROUP, props)} />
}
