import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUSTAINABILITY_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.sustainability2;',
  },
  _width: 60,
  _height: 60,
}

export function Sustainability2(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUSTAINABILITY_2}
      {...props}
      _style={extendStyle(SUSTAINABILITY_2, props)}
    />
  )
}
