import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APPS = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.apps;',
  _width: 34.199999999999996,
  _height: 60,
}

export function Apps(props: DiagramNodeProps) {
  return <Shape {...APPS} {...props} />
}
