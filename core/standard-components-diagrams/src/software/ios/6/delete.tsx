import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DELETE = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iDeleteIcon;fillColor=#e8878E;fillColor2=#BD1421;strokeColor=#ffffff;sketch=0;',
  _width: 15,
  _height: 15,
}

export function Delete(props: DiagramNodeProps) {
  return <Shape {...DELETE} {...props} _style={extendStyle(DELETE, props)} />
}
