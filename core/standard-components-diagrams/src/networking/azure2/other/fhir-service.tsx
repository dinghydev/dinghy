import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FHIR_SERVICE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/FHIR_Service.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 59.440000000000005,
}

export function FhirService(props: DiagramNodeProps) {
  return (
    <Shape
      {...FHIR_SERVICE}
      {...props}
      _style={extendStyle(FHIR_SERVICE, props)}
    />
  )
}
