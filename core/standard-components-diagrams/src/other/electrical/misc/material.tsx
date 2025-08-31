import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MATERIAL = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=rect;',
  _width: 130,
  _height: 50,
}

export function Material(props: DiagramNodeProps) {
  return (
    <Shape {...MATERIAL} {...props} _style={extendStyle(MATERIAL, props)} />
  )
}
