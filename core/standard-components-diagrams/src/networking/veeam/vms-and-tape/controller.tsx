import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTROLLER = {
  _style: {
    entity:
      'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.controller;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function Controller(props: DiagramNodeProps) {
  return (
    <Shape {...CONTROLLER} {...props} _style={extendStyle(CONTROLLER, props)} />
  )
}
