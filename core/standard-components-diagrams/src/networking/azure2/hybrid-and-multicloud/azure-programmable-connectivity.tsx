import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_PROGRAMMABLE_CONNECTIVITY = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/hybrid_multicloud/Azure_Programmable_Connectivity.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function AzureProgrammableConnectivity(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_PROGRAMMABLE_CONNECTIVITY}
      {...props}
      _style={extendStyle(AZURE_PROGRAMMABLE_CONNECTIVITY, props)}
    />
  )
}
