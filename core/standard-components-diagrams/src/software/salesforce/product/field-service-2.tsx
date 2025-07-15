import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FIELD_SERVICE_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.field_service2;',
  _width: 60,
  _height: 60,
}

export function FieldService2(props: DiagramNodeProps) {
  return <Shape {...FIELD_SERVICE_2} {...props} />
}
