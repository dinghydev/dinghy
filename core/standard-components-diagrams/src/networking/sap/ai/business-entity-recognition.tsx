import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUSINESS_ENTITY_RECOGNITION = {
  _style:
    'shape=mxgraph.sap.icon;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeWidth=1;strokeColor=#D5DADD;fillColor=#EDEFF0;gradientColor=#FCFCFC;gradientDirection=west;aspect=fixed;SAPIcon=Business_Entity_Recognition',
  _width: 60,
  _height: 60,
}

export function BusinessEntityRecognition(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUSINESS_ENTITY_RECOGNITION}
      {...props}
      _style={extendStyle(BUSINESS_ENTITY_RECOGNITION, props)}
    />
  )
}
