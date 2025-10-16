import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLOUD_CALLOUT = {
  _style: {
    entity: 'whiteSpace=wrap;html=1;shape=mxgraph.basic.cloud_callout',
  },
  _width: 90,
  _height: 60,
}

export function CloudCallout(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_CALLOUT}
      {...props}
      _style={extendStyle(CLOUD_CALLOUT, props)}
    />
  )
}
