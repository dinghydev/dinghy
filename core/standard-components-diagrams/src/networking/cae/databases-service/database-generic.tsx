import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATABASE_GENERIC = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Database_General.svg;strokeColor=none;',
  _width: 38,
  _height: 50,
}

export function DatabaseGeneric(props: DiagramNodeProps) {
  return <Shape {...DATABASE_GENERIC} {...props} />
}
