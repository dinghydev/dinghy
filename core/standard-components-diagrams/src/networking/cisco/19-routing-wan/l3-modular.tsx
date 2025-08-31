import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const L3_MODULAR = {
  _style:
    'sketch=0;points=[[0.5,0,0],[1,0.5,0],[0.5,1,0],[0,0.5,0],[0.145,0.145,0],[0.8555,0.145,0],[0.855,0.8555,0],[0.145,0.855,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.rect;prIcon=l3_modular3;fillColor=#FAFAFA;strokeColor=#C1272D;',
  _width: 60,
  _height: 60,
}

export function L3Modular(props: DiagramNodeProps) {
  return (
    <Shape {...L3_MODULAR} {...props} _style={extendStyle(L3_MODULAR, props)} />
  )
}
