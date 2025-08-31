import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPONENT_10GE_FCOE = {
  _style:
    'shape=mxgraph.cisco.controllers_and_modules.10ge_fcoe;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 64,
  _height: 88,
}

export function Component10geFcoe(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_10GE_FCOE}
      {...props}
      _style={extendStyle(COMPONENT_10GE_FCOE, props)}
    />
  )
}
