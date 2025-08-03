import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AZURE_MAPS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_Maps.svg;strokeColor=none;',
  _width: 39,
  _height: 50,
}

export function AzureMaps(props: DiagramNodeProps) {
  return <Shape {...AZURE_MAPS} {...props} />
}
