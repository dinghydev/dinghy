import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_API_FOR_FHIR = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_API_for_FHIR.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function AzureApiForFhir(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_API_FOR_FHIR}
      {...props}
      _style={extendStyle(AZURE_API_FOR_FHIR, props)}
    />
  )
}
