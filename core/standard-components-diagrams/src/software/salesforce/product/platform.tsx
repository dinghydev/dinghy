import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PLATFORM = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.platform;',
  _width: 39,
  _height: 60,
}

export function Platform(props: DiagramNodeProps) {
  return <Shape {...PLATFORM} {...props} />
}
