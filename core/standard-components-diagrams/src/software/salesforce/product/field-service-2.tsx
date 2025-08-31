import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FIELD_SERVICE_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.field_service2;',
  },
  _width: 60,
  _height: 60,
}

export function FieldService2(props: DiagramNodeProps) {
  return (
    <Shape
      {...FIELD_SERVICE_2}
      {...props}
      _style={extendStyle(FIELD_SERVICE_2, props)}
    />
  )
}
