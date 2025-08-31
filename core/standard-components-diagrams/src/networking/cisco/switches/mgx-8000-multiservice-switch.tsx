import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MGX_8000_MULTISERVICE_SWITCH = {
  _style:
    'shape=mxgraph.cisco.switches.mgx_8000_multiservice_switch;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 60,
  _height: 60,
}

export function Mgx8000MultiserviceSwitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...MGX_8000_MULTISERVICE_SWITCH}
      {...props}
      _style={extendStyle(MGX_8000_MULTISERVICE_SWITCH, props)}
    />
  )
}
