import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PRIVACY = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.privacy;',
  _width: 46.2,
  _height: 60,
}

export function Privacy(props: DiagramNodeProps) {
  return <Shape {...PRIVACY} {...props} />
}
