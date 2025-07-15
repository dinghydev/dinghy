import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SCROLL_HORIZONTAL = {
  _style:
    'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.scroll_(horizontal);fillColor=#a0a0a0;',
  _width: 80,
  _height: 6,
}

export function ScrollHorizontal(props: DiagramNodeProps) {
  return <Shape {...SCROLL_HORIZONTAL} {...props} />
}
