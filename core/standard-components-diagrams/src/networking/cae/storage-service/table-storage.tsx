import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TABLE_STORAGE = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Table_Storage.svg;',
  _width: 50,
  _height: 48,
}

export function TableStorage(props: DiagramNodeProps) {
  return <Shape {...TABLE_STORAGE} {...props} />
}
