import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SCROLL_VERTICAL = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.scroll_(vertical);fillColor=#a0a0a0;',
  },
  _original_width: 6,
  _original_height: 80,
}

export function ScrollVertical(props: DiagramNodeProps) {
  return (
    <Shape
      {...SCROLL_VERTICAL}
      {...props}
      _style={extendStyle(SCROLL_VERTICAL, props)}
    />
  )
}
