import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RED_X = {
  _style: {
    entity:
      'shape=mxgraph.mockup.markup.redX;fillColor=#ff0000;html=1;shadow=0;whiteSpace=wrap;strokeColor=none;',
  },
  _width: 200,
  _height: 100,
}

export function RedX(props: DiagramNodeProps) {
  return <Shape {...RED_X} {...props} _style={extendStyle(RED_X, props)} />
}
