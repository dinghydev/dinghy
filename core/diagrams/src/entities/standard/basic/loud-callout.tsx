import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOUD_CALLOUT = {
  _style: {
    entity: 'whiteSpace=wrap;html=1;shape=mxgraph.basic.loud_callout',
  },
  _width: 100,
  _height: 60,
}

export function LoudCallout(props: NodeProps) {
  return (
    <Shape
      {...LOUD_CALLOUT}
      {...props}
      _style={extendStyle(LOUD_CALLOUT, props)}
    />
  )
}
