import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MS_DEV_BOX = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/MS_Dev_Box.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function MsDevBox(props: DiagramNodeProps) {
  return (
    <Shape {...MS_DEV_BOX} {...props} _style={extendStyle(MS_DEV_BOX, props)} />
  )
}
