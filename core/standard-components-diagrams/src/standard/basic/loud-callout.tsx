import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOUD_CALLOUT = {
  _style: {
    entity: 'whiteSpace=wrap;html=1;shape=mxgraph.basic.loud_callout',
  },
  _width: 100,
  _height: 60,
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
