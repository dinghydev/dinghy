import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const API_FOR_FHIR = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/Azure_API_for_FHIR.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 65.2,
}

export function ApiForFhir(props: DiagramNodeProps) {
  return (
    <Shape
      {...API_FOR_FHIR}
      {...props}
      _style={extendStyle(API_FOR_FHIR, props)}
    />
  )
}
