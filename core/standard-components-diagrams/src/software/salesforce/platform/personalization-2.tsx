import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PERSONALIZATION_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.personalization2;',
  },
  _width: 60,
  _height: 60,
}

export function Personalization2(props: DiagramNodeProps) {
  return (
    <Shape
      {...PERSONALIZATION_2}
      {...props}
      _style={extendStyle(PERSONALIZATION_2, props)}
    />
  )
}
