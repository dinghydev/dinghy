import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OVAL_CALLOUT = {
  _style: {
    entity: 'whiteSpace=wrap;html=1;shape=mxgraph.basic.oval_callout',
  },
  _width: 100,
  _height: 60,
}

export function OvalCallout(props: NodeProps) {
  return (
    <Shape
      {...OVAL_CALLOUT}
      {...props}
      _style={extendStyle(OVAL_CALLOUT, props)}
    />
  )
}
