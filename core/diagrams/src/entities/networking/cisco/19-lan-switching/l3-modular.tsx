import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const L3_MODULAR = {
  _style: {
    entity:
      'sketch=0;points=[[0.015,0.015,0],[0.985,0.015,0],[0.985,0.985,0],[0.015,0.985,0],[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];verticalLabelPosition=bottom;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.rect;prIcon=l3_modular;fillColor=#FAFAFA;strokeColor=#005073;',
  },
  _width: 50,
  _height: 73,
}

export function L3Modular(props: NodeProps) {
  return (
    <Shape {...L3_MODULAR} {...props} _style={extendStyle(L3_MODULAR, props)} />
  )
}
