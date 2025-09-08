import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const API_ANALYTICS = {
  _style: {
    entity:
      'fillColor=#ffffff;strokeColor=#dddddd;shadow=1;strokeWidth=1;rounded=1;absoluteArcSize=1;arcSize=2;',
  },
  _original_width: 0,
  _original_height: 60,
}

export function ApiAnalytics(props: DiagramNodeProps) {
  return (
    <Shape
      {...API_ANALYTICS}
      {...props}
      _style={extendStyle(API_ANALYTICS, props)}
    />
  )
}
