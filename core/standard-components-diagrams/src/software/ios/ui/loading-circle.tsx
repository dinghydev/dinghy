import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOADING_CIRCLE = {
  _style:
    'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.loading_circle;',
  _width: 40,
  _height: 40,
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
