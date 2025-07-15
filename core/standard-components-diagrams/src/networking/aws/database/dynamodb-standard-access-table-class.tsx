import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DYNAMODB_STANDARD_ACCESS_TABLE_CLASS = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#C925D1;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.dynamodb_standard_access_table_class;',
  _width: 75,
  _height: 78,
}

export function DynamodbStandardAccessTableClass(props: DiagramNodeProps) {
  return <Shape {...DYNAMODB_STANDARD_ACCESS_TABLE_CLASS} {...props} />
}
