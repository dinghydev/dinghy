import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SCROLL_VERTICAL = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.scroll_(vertical);fillColor=#a0a0a0;',
  },
  _width: 6,
  _height: 80,
}

export function ScrollVertical(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SCROLL_VERTICAL)} />
}
