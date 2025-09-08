import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AZURE_FIREWALL = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_Firewall.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
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
