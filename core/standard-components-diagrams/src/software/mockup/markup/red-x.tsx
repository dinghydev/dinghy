import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RED_X = {
  _style:
    'shape=mxgraph.mockup.markup.redX;fillColor=#ff0000;html=1;shadow=0;whiteSpace=wrap;strokeColor=none;',
  _width: 200,
  _height: 100,
}

export function RedX(props: DiagramNodeProps) {
  return <Shape {...RED_X} {...props} />
}
