import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MS_DEV_BOX = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/MS_Dev_Box.svg;',
  _width: 68,
  _height: 68,
}

export function MsDevBox(props: DiagramNodeProps) {
  return <Shape {...MS_DEV_BOX} {...props} />
}
