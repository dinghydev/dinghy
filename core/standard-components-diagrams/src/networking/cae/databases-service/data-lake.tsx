import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_LAKE = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Data_Lake.svg;',
  _width: 38,
  _height: 50,
}

export function DataLake(props: DiagramNodeProps) {
  return <Shape {...DATA_LAKE} {...props} />
}
