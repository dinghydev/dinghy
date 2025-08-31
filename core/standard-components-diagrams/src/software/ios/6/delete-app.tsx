import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DELETE_APP = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iDeleteApp;fillColor=#cccccc;fillColor2=#000000;strokeColor=#ffffff;sketch=0;',
  _width: 15,
  _height: 15,
}

export function DeleteApp(props: DiagramNodeProps) {
  return (
    <Shape {...DELETE_APP} {...props} _style={extendStyle(DELETE_APP, props)} />
  )
}
