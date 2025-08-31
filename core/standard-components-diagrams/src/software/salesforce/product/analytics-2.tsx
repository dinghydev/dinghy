import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ANALYTICS_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.analytics2;',
  },
  _width: 60,
  _height: 60,
}

export function Analytics2(props: DiagramNodeProps) {
  return (
    <Shape
      {...ANALYTICS_2}
      {...props}
      _style={extendStyle(ANALYTICS_2, props)}
    />
  )
}
