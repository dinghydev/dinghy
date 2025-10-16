import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOADING_CIRCLE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.loading_circle;',
  },
  _original_width: 40,
  _original_height: 40,
}

export function LoadingCircle(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOADING_CIRCLE}
      {...props}
      _style={extendStyle(LOADING_CIRCLE, props)}
    />
  )
}
