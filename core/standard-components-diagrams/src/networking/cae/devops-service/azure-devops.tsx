import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AZURE_DEVOPS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_DevOps.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function AzureDevops(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_DEVOPS}
      {...props}
      _style={extendStyle(AZURE_DEVOPS, props)}
    />
  )
}
