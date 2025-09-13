import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MOST_VIEWED = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.most_viewed;pointerEvents=1',
  },
  _width: 28.2,
  _height: 22.8,
}

export function MostViewed(props: DiagramNodeProps) {
  return (
    <Shape
      {...MOST_VIEWED}
      {...props}
      _style={extendStyle(MOST_VIEWED, props)}
    />
  )
}
