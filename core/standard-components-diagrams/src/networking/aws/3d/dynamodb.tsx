import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DYNAMODB = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.dynamoDb;fillColor=#ECECEC;strokeColor=#5E5E5E;aspect=fixed;',
  _width: 181.5,
  _height: 210,
}

export function Dynamodb(props: DiagramNodeProps) {
  return (
    <Shape {...DYNAMODB} {...props} _style={extendStyle(DYNAMODB, props)} />
  )
}
