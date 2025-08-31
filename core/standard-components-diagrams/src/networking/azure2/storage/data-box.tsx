import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_BOX = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/storage/Data_Box.svg;strokeColor=none;',
  _width: 71,
  _height: 68,
}

export function DataBox(props: DiagramNodeProps) {
  return (
    <Shape {...DATA_BOX} {...props} _style={extendStyle(DATA_BOX, props)} />
  )
}
