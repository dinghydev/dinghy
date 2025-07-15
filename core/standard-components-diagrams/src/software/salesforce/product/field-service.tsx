import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FIELD_SERVICE = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.field_service;',
  _width: 45,
  _height: 60,
}

export function FieldService(props: DiagramNodeProps) {
  return <Shape {...FIELD_SERVICE} {...props} />
}
