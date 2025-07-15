import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ACTIVE_DIRECTORY = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Azure_Active_Directory.svg;',
  _width: 70,
  _height: 64,
}

export function ActiveDirectory(props: DiagramNodeProps) {
  return <Shape {...ACTIVE_DIRECTORY} {...props} />
}
