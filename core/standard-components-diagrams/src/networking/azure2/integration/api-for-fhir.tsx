import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const API_FOR_FHIR = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/integration/Azure_API_for_FHIR.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 65.2,
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
