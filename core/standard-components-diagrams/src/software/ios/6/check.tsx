import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHECK = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iCheckIcon;fillColor=#e8878E;fillColor2=#BD1421;strokeColor=#ffffff;sketch=0;',
  _width: 15,
  _height: 15,
}

export function Check(props: DiagramNodeProps) {
  return <Shape {...CHECK} {...props} _style={extendStyle(CHECK, props)} />
}
