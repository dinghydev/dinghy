import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TDM_PBX = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.tdm_pbx;',
  _width: 59,
  _height: 46,
}

export function TdmPbx(props: DiagramNodeProps) {
  return <Shape {...TDM_PBX} {...props} _style={extendStyle(TDM_PBX, props)} />
}
