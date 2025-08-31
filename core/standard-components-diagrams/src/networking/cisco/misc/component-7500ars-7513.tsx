import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPONENT_7500ARS_7513 = {
  _style:
    'shape=mxgraph.cisco.misc.7500ars_(7513);sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 60,
  _height: 60,
}

export function Component7500ars7513(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_7500ARS_7513}
      {...props}
      _style={extendStyle(COMPONENT_7500ARS_7513, props)}
    />
  )
}
