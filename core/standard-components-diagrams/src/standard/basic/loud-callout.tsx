import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOUD_CALLOUT = {
  _style: {
    entity: 'whiteSpace=wrap;html=1;shape=mxgraph.basic.loud_callout',
  },
  _original_width: 100,
  _original_height: 60,
}

export function LoudCallout(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOUD_CALLOUT}
      {...props}
      _style={extendStyle(LOUD_CALLOUT, props)}
    />
  )
}
