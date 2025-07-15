import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AZURE_DEVOPS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_DevOps.svg;',
  _width: 50,
  _height: 50,
}

export function AzureDevops(props: DiagramNodeProps) {
  return <Shape {...AZURE_DEVOPS} {...props} />
}
