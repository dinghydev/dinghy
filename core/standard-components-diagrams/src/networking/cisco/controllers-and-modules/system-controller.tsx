import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SYSTEM_CONTROLLER = {
  _style:
    'shape=mxgraph.cisco.controllers_and_modules.system_controller;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 61,
  _height: 58,
}

export function SystemController(props: DiagramNodeProps) {
  return <Shape {...SYSTEM_CONTROLLER} {...props} />
}
