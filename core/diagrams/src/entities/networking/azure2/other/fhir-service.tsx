import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FHIR_SERVICE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/FHIR_Service.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 59.440000000000005,
}

export function FhirService(props: NodeProps) {
  return (
    <Shape
      {...FHIR_SERVICE}
      {...props}
      _style={extendStyle(FHIR_SERVICE, props)}
    />
  )
}
