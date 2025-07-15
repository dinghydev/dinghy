import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PAGE_CONTROL = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iPageControl;fillColor=#666666;strokeColor=#cccccc;sketch=0;',
  _width: 50,
  _height: 5,
}

export function PageControl(props: DiagramNodeProps) {
  return <Shape {...PAGE_CONTROL} {...props} />
}
