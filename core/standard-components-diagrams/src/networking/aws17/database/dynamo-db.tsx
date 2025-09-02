import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DYNAMO_DB = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.dynamo_db;fillColor=#2E73B8;gradientColor=none;',
  },
  _original_width: 72,
  _original_height: 81,
}

export function DynamoDb(props: DiagramNodeProps) {
  return (
    <Shape {...DYNAMO_DB} {...props} _style={extendStyle(DYNAMO_DB, props)} />
  )
}
