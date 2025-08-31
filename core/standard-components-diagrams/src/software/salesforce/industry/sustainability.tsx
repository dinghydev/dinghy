import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUSTAINABILITY = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.sustainability;',
  _width: 60,
  _height: 60,
}

export function Sustainability(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUSTAINABILITY}
      {...props}
      _style={extendStyle(SUSTAINABILITY, props)}
    />
  )
}
