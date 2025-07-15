import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APPS_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.apps2;',
  _width: 60,
  _height: 60,
}

export function Apps2(props: DiagramNodeProps) {
  return <Shape {...APPS_2} {...props} />
}
