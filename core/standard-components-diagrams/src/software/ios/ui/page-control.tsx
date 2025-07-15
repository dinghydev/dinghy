import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PAGE_CONTROL = {
  _style:
    'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios7ui.pageControl;fillColor=#222222;strokeColor=#aaaaaa;sketch=0;',
  _width: 50,
  _height: 5,
}

export function PageControl(props: DiagramNodeProps) {
  return <Shape {...PAGE_CONTROL} {...props} />
}
