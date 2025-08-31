import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MANUFACTURING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.manufacturing;',
  },
  _width: 60,
  _height: 60,
}

export function Manufacturing(props: DiagramNodeProps) {
  return (
    <Shape
      {...MANUFACTURING}
      {...props}
      _style={extendStyle(MANUFACTURING, props)}
    />
  )
}
