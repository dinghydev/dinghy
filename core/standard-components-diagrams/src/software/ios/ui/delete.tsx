import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DELETE = {
  _style:
    'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.delete;fillColor=#ff0000;strokeColor=#ffffff;sketch=0;',
  _width: 12,
  _height: 12,
}

export function Delete(props: DiagramNodeProps) {
  return <Shape {...DELETE} {...props} />
}
