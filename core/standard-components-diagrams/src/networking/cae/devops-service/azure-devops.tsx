import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_DEVOPS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_DevOps.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
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
