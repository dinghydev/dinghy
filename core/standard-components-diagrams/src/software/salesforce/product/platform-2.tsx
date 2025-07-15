import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PLATFORM_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.platform2;',
  _width: 60,
  _height: 60,
}

export function Platform2(props: DiagramNodeProps) {
  return <Shape {...PLATFORM_2} {...props} />
}
