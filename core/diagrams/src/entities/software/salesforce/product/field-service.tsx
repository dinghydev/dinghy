import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FIELD_SERVICE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.field_service;',
  },
  _original_width: 45,
  _original_height: 60,
}

export function FieldService(props: NodeProps) {
  return (
    <Shape
      {...FIELD_SERVICE}
      {...props}
      _style={extendStyle(FIELD_SERVICE, props)}
    />
  )
}
