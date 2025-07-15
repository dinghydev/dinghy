import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVICE_MODULE = {
  _style:
    'shape=mxgraph.cisco.controllers_and_modules.service_module;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 51,
  _height: 66,
}

export function ServiceModule(props: DiagramNodeProps) {
  return <Shape {...SERVICE_MODULE} {...props} />
}
