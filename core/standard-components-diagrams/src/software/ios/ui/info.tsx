import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INFO = {
  _style:
    'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.info;strokeColor=#0080f0;sketch=0;',
  _width: 12,
  _height: 12,
}

export function Info(props: DiagramNodeProps) {
  return <Shape {...INFO} {...props} />
}
