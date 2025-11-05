import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DYNAMODB_STANDARD_INFREQUENT_ACCESS_TABLE_CLASS = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#C925D1;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.dynamodb_standard_infrequent_access_table_class;',
  },
  _original_width: 75,
  _original_height: 78,
}

export function DynamodbStandardInfrequentAccessTableClass(props: NodeProps) {
  return (
    <Shape
      {...DYNAMODB_STANDARD_INFREQUENT_ACCESS_TABLE_CLASS}
      {...props}
      _style={extendStyle(
        DYNAMODB_STANDARD_INFREQUENT_ACCESS_TABLE_CLASS,
        props,
      )}
    />
  )
}
