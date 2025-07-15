import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AZURE_HOME = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_Home.svg;',
  _width: 50,
  _height: 40,
}

export function AzureHome(props: DiagramNodeProps) {
  return <Shape {...AZURE_HOME} {...props} />
}
