import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_FIREWALL = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_Firewall.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function AzureFirewall(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_FIREWALL}
      {...props}
      _style={extendStyle(AZURE_FIREWALL, props)}
    />
  )
}
