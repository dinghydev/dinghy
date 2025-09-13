import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GAP = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ff99;shape=mxgraph.archimate.gap',
  },
  _width: 100,
  _height: 75,
}

export function Gap(props: DiagramNodeProps) {
  return <Shape {...GAP} {...props} _style={extendStyle(GAP, props)} />
}
