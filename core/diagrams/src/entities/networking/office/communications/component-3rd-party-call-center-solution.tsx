import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPONENT_3RD_PARTY_CALL_CENTER_SOLUTION = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.3rd_party_call_center_solution;',
  },
  _width: 98,
  _height: 101,
}

export function Component3rdPartyCallCenterSolution(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_3RD_PARTY_CALL_CENTER_SOLUTION}
      {...props}
      _style={extendStyle(COMPONENT_3RD_PARTY_CALL_CENTER_SOLUTION, props)}
    />
  )
}
