import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOYALTY = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.loyalty;',
  _width: 60,
  _height: 40.800000000000004,
}

export function Loyalty(props: DiagramNodeProps) {
  return <Shape {...LOYALTY} {...props} _style={extendStyle(LOYALTY, props)} />
}
