import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const API_ANALYTICS = {
  _style: {
    entity:
      'fillColor=#ffffff;strokeColor=#dddddd;shadow=1;strokeWidth=1;rounded=1;absoluteArcSize=1;arcSize=2;',
  },
  _width: 0,
  _height: 60,
}

export function ApiAnalytics(props: NodeProps) {
  return (
    <Shape
      {...API_ANALYTICS}
      {...props}
      _style={extendStyle(API_ANALYTICS, props)}
    />
  )
}
