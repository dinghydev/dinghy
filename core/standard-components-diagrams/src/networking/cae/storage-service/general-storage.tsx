import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GENERAL_STORAGE = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/General_Storage.svg;',
  _width: 50,
  _height: 50,
}

export function GeneralStorage(props: DiagramNodeProps) {
  return <Shape {...GENERAL_STORAGE} {...props} />
}
