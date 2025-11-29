import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SCROLL_HORIZONTAL = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.scroll_(horizontal);fillColor=#a0a0a0;',
  },
  _width: 80,
  _height: 6,
}

export function ScrollHorizontal(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SCROLL_HORIZONTAL)} />
}
