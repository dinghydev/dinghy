import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RETAIL_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.retail2;',
  _width: 60,
  _height: 60,
}

export function Retail2(props: DiagramNodeProps) {
  return (
    <Shape {...RETAIL_2} {...props} _style={extendStyle(RETAIL_2, props)} />
  )
}
