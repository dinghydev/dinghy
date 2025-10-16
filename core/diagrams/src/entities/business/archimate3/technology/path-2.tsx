import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PATH_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.path;strokeWidth=6;',
  },
  _width: 100,
  _height: 30,
}

export function Path2(props: DiagramNodeProps) {
  return <Shape {...PATH_2} {...props} _style={extendStyle(PATH_2, props)} />
}
