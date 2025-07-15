import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUD_CALLOUT = {
  _style: 'whiteSpace=wrap;html=1;shape=mxgraph.basic.cloud_callout',
  _width: 90,
  _height: 60,
}

export function CloudCallout(props: DiagramNodeProps) {
  return <Shape {...CLOUD_CALLOUT} {...props} />
}
