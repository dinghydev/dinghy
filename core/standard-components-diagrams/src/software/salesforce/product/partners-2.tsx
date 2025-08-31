import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PARTNERS_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.partners2;',
  _width: 60,
  _height: 60,
}

export function Partners2(props: DiagramNodeProps) {
  return (
    <Shape {...PARTNERS_2} {...props} _style={extendStyle(PARTNERS_2, props)} />
  )
}
