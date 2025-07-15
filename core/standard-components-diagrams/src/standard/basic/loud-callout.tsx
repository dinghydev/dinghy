import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOUD_CALLOUT = {
  _style: 'whiteSpace=wrap;html=1;shape=mxgraph.basic.loud_callout',
  _width: 100,
  _height: 60,
}

export function LoudCallout(props: DiagramNodeProps) {
  return <Shape {...LOUD_CALLOUT} {...props} />
}
